/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_CONTACT_ENDPOINT?: string;
  readonly PUBLIC_TURNSTILE_SITEKEY?: string;
}
