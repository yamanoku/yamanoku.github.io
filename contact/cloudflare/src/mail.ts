import type { ContactMessage } from "./validate";

export function contactSubject(name: string): string {
  const compact = name.replace(/\s+/gu, " ").slice(0, 60);
  return `[yamanoku.net] ${compact}`;
}

export function contactText(message: ContactMessage): string {
  return [message.message, "", `--`, message.name, message.email].join("\n");
}

export function contactHtml(message: ContactMessage): string {
  const body = escapeHtml(message.message).replaceAll("\n", "<br>");
  return [
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
