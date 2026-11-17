import type { ContactMessage } from "./validate";

export function contactSubject(message: ContactMessage): string {
  const source = message.subject.length > 0 ? message.subject : message.name;
  const compact = source.replace(/\s+/gu, " ").trim().slice(0, 80);
  return `[yamanoku.net] ${compact}`;
}

export function contactText(message: ContactMessage): string {
  const lines = message.subject.length > 0 ? [message.subject, ""] : [];
  lines.push(message.message, "", "--", message.name, message.email);
  return lines.join("\n");
}

export function contactHtml(message: ContactMessage): string {
  const body = escapeHtml(message.message).replaceAll("\n", "<br>");
  const heading =
    message.subject.length > 0
      ? `<p><strong>${escapeHtml(message.subject)}</strong></p>`
      : "";
  return [
    heading,
    `<p>${body}</p>`,
    "<hr>",
    `<p>${escapeHtml(message.name)}<br>${escapeHtml(message.email)}</p>`
  ].join("");
}

export function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
