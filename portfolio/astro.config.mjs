import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://portfolio.yamanoku.net",
  vite: {
    plugins: [tailwindcss()]
  }
});
