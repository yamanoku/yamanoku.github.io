import { defineWranglerConfig } from "wrangler/experimental-config";

// Astro writes the site to portfolio/dist. This package only uploads that
// directory. It does not run `astro build`.
export default defineWranglerConfig({
  assetsDirectory: "../dist"
});
