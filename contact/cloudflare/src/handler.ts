import type { ContactEnv } from "./env";
import { contactHtml, contactSubject, contactText, escapeHtml } from "./mail";
import {
  PRODUCTION_HOSTS,
  TURNSTILE_TEST_SECRET,
  turnstileAccepted,
  verifyTurnstile,
  type TurnstileResult
} from "./turnstile";
import { invalidFields, readField, type ContactMessage } from "./validate";

const MAX_BODY_BYTES = 16_000;

const ALLOWED_ORIGINS = new Set(
  [...PRODUCTION_HOSTS].map((host) => `https://${host}`)
);

export interface ContactDeps {
  verify: (options: {
    secret: string;
    token: string;
    remoteIp: string;
  }) => Promise<TurnstileResult | null>;
}

const defaultDeps: ContactDeps = { verify: verifyTurnstile };

export async function handleContact(
  request: Request,
  env: ContactEnv,
  deps: ContactDeps = defaultDeps
): Promise<Response> {
  const origin = allowedOrigin(request.headers.get("origin"));
  if (request.method === "OPTIONS") {
    if (!origin) return new Response(null, { status: 403 });
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }
  if (request.method !== "POST") {
    return json({ ok: false, error: "invalid" }, 405, origin, request);
  }

  const length = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
    return json({ ok: false, error: "invalid" }, 413, origin, request);
  }

  const submission = await readSubmission(request);
  if (!submission) {
    return json({ ok: false, error: "invalid" }, 400, origin, request);
  }

  const ip = request.headers.get("cf-connecting-ip");
  if (ip) {
    const limit = await env.CONTACT_RATE_LIMIT.limit({ key: ip });
    if (!limit.success) {
      return json({ ok: false, error: "rate" }, 429, origin, request);
    }
  }

  if (readField(submission.company) !== "") {
    return json({ ok: true }, 200, origin, request);
  }

  const message: ContactMessage = {
    name: readField(submission.name),
    email: readField(submission.email),
    subject: readField(submission.subject),
    message: readField(submission.message)
  };
  if (invalidFields(message).length > 0) {
    return json({ ok: false, error: "invalid" }, 400, origin, request);
  }

  const token = readField(submission.turnstileToken);
  if (token.length === 0 || token.length > 2048) {
    return json({ ok: false, error: "turnstile" }, 403, origin, request);
  }

  const localWorker = env.CONTACT_RUNTIME === "local";
  if (env.TURNSTILE_SECRET === TURNSTILE_TEST_SECRET && !localWorker) {
    return json({ ok: false, error: "turnstile" }, 403, origin, request);
  }
  if (!env.TURNSTILE_SECRET) {
    return json({ ok: false, error: "unavailable" }, 503, origin, request);
  }

  const result = await deps.verify({
    secret: env.TURNSTILE_SECRET,
    token,
    remoteIp: ip ?? ""
  });
  if (
    !turnstileAccepted({
      secret: env.TURNSTILE_SECRET,
      localWorker,
      result
    })
  ) {
    return json({ ok: false, error: "turnstile" }, 403, origin, request);
  }

  if (localWorker && env.TURNSTILE_SECRET === TURNSTILE_TEST_SECRET) {
    return json({ ok: true, delivery: "skipped" }, 200, origin, request);
  }

  try {
    await env.EMAIL.send({
      to: env.CONTACT_TO,
      from: { email: env.CONTACT_FROM, name: "yamanoku.net" },
      replyTo: { email: message.email, name: message.name },
      subject: contactSubject(message),
      text: contactText(message),
      html: contactHtml(message)
    });
  } catch (error) {
    console.error(
      JSON.stringify({
        event: "contact",
        result: "send-failed",
        code: errorCode(error)
      })
    );
    return json({ ok: false, error: "unavailable" }, 502, origin, request);
  }

  console.log(JSON.stringify({ event: "contact", result: "sent" }));
  return json({ ok: true }, 200, origin, request);
}

async function readSubmission(
  request: Request
): Promise<Record<string, unknown> | null> {
  const type = request.headers.get("content-type") ?? "";
  try {
    if (type.includes("application/json")) {
      const text = await request.text();
      if (text.length > MAX_BODY_BYTES) return null;
      const parsed: unknown = JSON.parse(text);
      if (!parsed || typeof parsed !== "object") return null;
      return parsed as Record<string, unknown>;
    }
    if (
      type.includes("application/x-www-form-urlencoded") ||
      type.includes("multipart/form-data")
    ) {
      const form = await request.formData();
      return {
        name: form.get("name"),
        email: form.get("email"),
        subject: form.get("subject"),
        message: form.get("message"),
        company: form.get("company"),
        turnstileToken: form.get("cf-turnstile-response")
      };
    }
  } catch {
    return null;
  }
  return null;
}

function allowedOrigin(origin: string | null): string | null {
  if (!origin) return null;
  if (ALLOWED_ORIGINS.has(origin)) return origin;
  try {
    const url = new URL(origin);
    if (
      url.protocol === "http:" &&
      (url.hostname === "localhost" || url.hostname === "127.0.0.1")
    ) {
      return origin;
    }
  } catch {
    return null;
  }
  return null;
}

function corsHeaders(origin: string): Headers {
  return new Headers({
    "access-control-allow-origin": origin,
    "access-control-allow-methods": "POST, OPTIONS",
    "access-control-allow-headers": "content-type",
    "access-control-max-age": "86400",
    vary: "Origin"
  });
}

function json(
  body: { ok: boolean; error?: string; delivery?: "skipped" },
  status: number,
  origin: string | null,
  request: Request
): Response {
  const headers = new Headers({
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  });
  if (origin) {
    for (const [key, value] of corsHeaders(origin)) headers.set(key, value);
  }
  if (wantsHtml(request)) {
    headers.set("content-type", "text/html; charset=utf-8");
    return new Response(htmlPage(body, request), { status, headers });
  }
  headers.set("content-type", "application/json; charset=utf-8");
  return new Response(JSON.stringify(body), { status, headers });
}

function wantsHtml(request: Request): boolean {
  const accept = request.headers.get("accept") ?? "";
  return accept.includes("text/html") && !accept.includes("application/json");
}

function htmlPage(
  body: { ok: boolean; error?: string },
  request: Request
): string {
  const english = (request.headers.get("accept-language") ?? "").startsWith(
    "en"
  );
  const title = body.ok
    ? english
      ? "Message sent"
      : "送信しました"
    : english
      ? "Message not sent"
      : "送信できませんでした";
  const detail = body.ok
    ? english
      ? "Your message was sent."
      : "用件を送信しました。"
    : english
      ? "The message was not sent. Go back and try again, or use email."
      : "用件は送信されていません。戻ってやり直すか、メールで連絡してください。";
  const back = english ? "Back to yamanoku.net" : "yamanoku.net に戻る";
  return `<!doctype html><html lang="${english ? "en" : "ja"}"><meta charset="utf-8"><title>${escapeHtml(title)}</title><h1>${escapeHtml(title)}</h1><p>${escapeHtml(detail)}</p><p><a href="https://yamanoku.net/">${escapeHtml(back)}</a></p>`;
}

function errorCode(error: unknown): string {
  if (error && typeof error === "object" && "code" in error) {
    const code = error.code;
    return typeof code === "string" ? code : "unknown";
  }
  return "unknown";
}
