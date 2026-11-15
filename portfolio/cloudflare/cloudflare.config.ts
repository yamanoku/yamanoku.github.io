import { defineConfig } from "cf/config";

// Keep this directory free of astro.config. Astro 6+ is not built by `cf`
// during the beta, and `cf` would treat the Astro package as a framework app.
export default defineConfig({
  accountId: "1b16f7266470fc5782fd6254ba8efec9",
  worker: {
    name: "portfolio",
    compatibilityDate: "2026-11-15",
    domains: ["portfolio.yamanoku.net"],
    assets: {
      htmlHandling: "auto-trailing-slash",
      notFoundHandling: "none"
    },
    observability: {
      enabled: true
    }
  }
});
