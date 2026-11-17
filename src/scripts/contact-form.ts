interface TurnstileApi {
  render(
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "auto";
      language?: string;
    }
  ): string;
  reset(widgetId: string): void;
  getResponse(widgetId: string): string | undefined;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type Field = HTMLInputElement | HTMLTextAreaElement;

const supportsUserInvalid = CSS.supports("selector(:user-invalid)");
const announced = new WeakSet<Field>();
let announceTimer = 0;
let announcedField: Field | null = null;

export function setupContactForm(): void {
  const form = document.querySelector<HTMLFormElement>("#contact-form");
  if (!form) return;

  const status = document.querySelector<HTMLElement>("#contact-status");
  const submit = form.querySelector<HTMLButtonElement>("[type=submit]");
  const announcer = document.querySelector<HTMLElement>("#contact-announcer");
  if (!announcer) return;

  const fields = [
    ...form.querySelectorAll<Field>("input[data-error], textarea[data-error]")
  ];
  for (const field of fields) syncField(field, announcer, false);

  form.addEventListener(
    "blur",
    (event) => {
      if (!isField(event.target)) return;
      event.target.dataset.touched = "true";
      syncField(event.target, announcer, true);
    },
    true
  );
  form.addEventListener("input", (event) => {
    if (!isField(event.target)) return;
    if (event.target.dataset.touched === "true") {
      syncField(event.target, announcer, false);
    }
  });
  form.addEventListener(
    "invalid",
    (event) => {
      if (!isField(event.target)) return;
      event.target.dataset.touched = "true";
      syncField(event.target, announcer, false);
    },
    true
  );

  let widgetId = "";
  const sitekey = form.dataset.sitekey ?? "";
  if (sitekey) {
    mountTurnstile(form, sitekey, (id) => {
      widgetId = id;
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    void sendContact(form, status, submit, () => widgetId);
  });
}

function isField(target: EventTarget | null): target is Field {
  return (
    target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement
  );
}

function syncField(
  field: Field,
  announcer: HTMLElement,
  announce: boolean
): void {
  const invalid = supportsUserInvalid
    ? field.matches(":user-invalid")
    : field.dataset.touched === "true" && !field.validity.valid;
  if (!supportsUserInvalid) {
    field.classList.toggle("user-invalid-fallback", invalid);
  }
  field.setAttribute("aria-invalid", invalid ? "true" : "false");
  linkError(field, invalid);
  if (!invalid) {
    clearAnnouncement(field, announcer);
    return;
  }
  if (announce) announceError(field, announcer);
}

function announceError(field: Field, announcer: HTMLElement): void {
  if (announced.has(field)) return;
  const error = errorElement(field);
  if (!error) return;
  announced.add(field);
  const label = field.labels?.[0]?.textContent?.replace(/\s+/gu, " ").trim();
  const message = error.textContent?.replace(/\s+/gu, " ").trim() ?? "";
  window.clearTimeout(announceTimer);
  announcer.textContent = "";
  announcedField = field;
  announceTimer = window.setTimeout(() => {
    announcer.textContent = label ? `${label}: ${message}` : message;
  }, 500);
}

function clearAnnouncement(field: Field, announcer: HTMLElement): void {
  announced.delete(field);
  if (announcedField !== field) return;
  window.clearTimeout(announceTimer);
  announcer.textContent = "";
  announcedField = null;
}

function linkError(field: Field, shown: boolean): void {
  const errorId = field.dataset.error;
  if (!errorId) return;
  const ids = (field.getAttribute("aria-describedby") ?? "")
    .split(/\s+/u)
    .filter((id) => id.length > 0 && id !== errorId);
  if (shown) ids.push(errorId);
  if (ids.length > 0) field.setAttribute("aria-describedby", ids.join(" "));
  else field.removeAttribute("aria-describedby");
}

function errorElement(field: Field): HTMLElement | null {
  const id = field.dataset.error;
  return id ? document.getElementById(id) : null;
}

function mountTurnstile(
  form: HTMLFormElement,
  sitekey: string,
  setWidgetId: (id: string) => void
): void {
  const container = form.querySelector<HTMLElement>("#contact-turnstile");
  if (!container) return;
  const language = form.dataset.lang;
  const render = () => {
    const api = window.turnstile;
    if (!api) return;
    setWidgetId(
      api.render(container, {
        sitekey,
        action: "contact",
        theme: "auto",
        language
      })
    );
  };
  if (window.turnstile) {
    render();
    return;
  }
  const timer = window.setInterval(() => {
    if (!window.turnstile) return;
    window.clearInterval(timer);
    render();
  }, 50);
}

async function sendContact(
  form: HTMLFormElement,
  status: HTMLElement | null,
  submit: HTMLButtonElement | null,
  widgetId: () => string
): Promise<void> {
  const token = window.turnstile?.getResponse(widgetId()) ?? "";
  if (!token) {
    showStatus(status, form.dataset.errorTurnstile ?? "");
    return;
  }

  const label = form.dataset.submitLabel ?? submit?.textContent ?? "";
  if (submit) {
    submit.disabled = true;
    submit.textContent = form.dataset.submitting ?? label;
  }

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        name: fieldValue(form, "name"),
        email: fieldValue(form, "email"),
        subject: fieldValue(form, "subject"),
        message: fieldValue(form, "message"),
        company: fieldValue(form, "company"),
        turnstileToken: token
      })
    });
    const payload = (await response.json()) as { ok?: boolean; error?: string };
    if (response.ok && payload.ok) {
      form.reset();
      const live = document.querySelector<HTMLElement>("#contact-announcer");
      if (live) {
        for (const field of form.querySelectorAll<Field>(
          "input[data-error], textarea[data-error]"
        )) {
          delete field.dataset.touched;
          syncField(field, live, false);
        }
      }
      showStatus(status, form.dataset.success ?? "");
      return;
    }
    showStatus(status, messageFor(form, payload.error));
  } catch {
    showStatus(status, form.dataset.errorUnavailable ?? "");
  } finally {
    window.turnstile?.reset(widgetId());
    if (submit) {
      submit.disabled = false;
      submit.textContent = label;
    }
  }
}

function fieldValue(form: HTMLFormElement, name: string): string {
  const field = form.elements.namedItem(name);
  return isField(field) ? field.value : "";
}

function messageFor(form: HTMLFormElement, error: string | undefined): string {
  if (error === "turnstile") return form.dataset.errorTurnstile ?? "";
  if (error === "rate") return form.dataset.errorRate ?? "";
  if (error === "invalid") return form.dataset.errorInvalid ?? "";
  return form.dataset.errorUnavailable ?? "";
}

function showStatus(status: HTMLElement | null, message: string): void {
  if (!status) return;
  status.textContent = message;
  status.focus();
}
