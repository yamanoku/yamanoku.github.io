import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import { fetchFavicons } from "./scripts/fetch-favicons.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://records.yamanoku.net",
  integrations: [
    {
      name: "record-favicons",
      hooks: {
        "astro:config:setup": async () => {
          await fetchFavicons();
        }
      }
    }
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
