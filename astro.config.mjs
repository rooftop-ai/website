// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rooftoplabs.ai",
  integrations: [sitemap()],
  devToolbar: { enabled: false },
  vite: {
    // lightningcss lowers modern CSS such as light-dark() for Baseline
    // "widely available" browsers, in dev and production alike.
    css: { transformer: "lightningcss" },
  },
});
