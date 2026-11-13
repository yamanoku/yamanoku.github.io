import { domainToASCII, domainToUnicode } from "node:url";

import suffixList from "./public-suffix-rules.json" with { type: "json" };

const SAFE_DOMAIN =
  /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/;

// Multi-label, wildcard, and exception rules from the Public Suffix List,
// including private suffixes. Single-label rules are omitted and use "*".
// Source: https://publicsuffix.org/list/public_suffix_list.dat (MPL-2.0).
const RULES = loadRules(suffixList.rules);

// eTLD+1. Rules are the multi-label, wildcard, and exception entries from
// the Public Suffix List, including private suffixes such as vercel.app.
export function registrableDomain(hostname: string): string | null {
  const normalized = hostname.trim().toLowerCase().replace(/\.$/, "");
  if (normalized.length === 0 || normalized.includes("..")) return null;
  if (normalized.startsWith(".")) return null;

  const ascii = domainToASCII(normalized);
  if (ascii.length === 0 || ascii.includes("..")) return null;

  const labels = ascii.split(".");
  if (labels.some((label) => label.length === 0 || label.length > 63)) {
    return null;
  }
  if (labels.every((label) => /^\d+$/.test(label))) return null;

  const suffixStart = publicSuffixStart(labels);
  if (suffixStart <= 0) return null;

  const domain = labels.slice(suffixStart - 1).join(".");
  if (!SAFE_DOMAIN.test(domainToASCII(domain))) return null;
  if (hasNonAscii(normalized)) return domainToUnicode(domain);
  return domain;
}

function hasNonAscii(value: string): boolean {
  for (const char of value) {
    if (char.charCodeAt(0) > 0x7f) return true;
  }
  return false;
}

export function faviconPublicPath(hostname: string): string | null {
  const domain = registrableDomain(hostname);
  if (domain == null) return null;
  return `/favicons/${domain}.png`;
}

function loadRules(lines: readonly string[]): Set<string> {
  const rules = new Set<string>();
  for (const line of lines) {
    if (line.length === 0 || line.startsWith("#")) continue;
    const exception = line.startsWith("!");
    const wildcard = line.startsWith("*.");
    const body = exception ? line.slice(1) : wildcard ? line.slice(2) : line;
    const ascii = domainToASCII(body);
    if (ascii.length === 0) continue;
    if (exception) rules.add(`!${ascii}`);
    else if (wildcard) rules.add(`*.${ascii}`);
    else rules.add(ascii);
  }
  return rules;
}

// Index of the first public-suffix label. 0 means the whole name is a suffix.
function publicSuffixStart(labels: string[]): number {
  for (let index = 0; index < labels.length; index += 1) {
    const suffix = labels.slice(index).join(".");
    if (RULES.has(`!${suffix}`)) return index + 1;
    if (RULES.has(suffix)) return index;
    const parent = labels.slice(index + 1).join(".");
    if (parent.length > 0 && RULES.has(`*.${parent}`)) return index;
  }
  return labels.length - 1;
}
