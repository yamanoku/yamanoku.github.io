export const MESSAGE_MAX = 4000;
export const NAME_MAX = 80;

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export type ContactField = "name" | "email" | "message";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

export function readField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function invalidFields(input: {
  name: string;
  email: string;
  message: string;
}): ContactField[] {
  const invalid: ContactField[] = [];
  if (!isName(input.name)) invalid.push("name");
  if (!isEmail(input.email)) invalid.push("email");
  if (!isMessage(input.message)) invalid.push("message");
  return invalid;
}

function isName(name: string): boolean {
  return name.length > 0 && name.length <= NAME_MAX && !hasControlChars(name);
}

function isEmail(email: string): boolean {
  return (
    email.length <= 254 && EMAIL_PATTERN.test(email) && !hasControlChars(email)
  );
}

function isMessage(message: string): boolean {
  return message.length > 0 && message.length <= MESSAGE_MAX;
}

function hasControlChars(value: string): boolean {
  for (const char of value) {
    const code = char.codePointAt(0) ?? 0;
    if (code <= 31 || code === 127) return true;
  }
  return false;
}
