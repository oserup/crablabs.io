import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercelStatic from "@astrojs/vercel/static";

export default defineConfig({
  integrations: [tailwind()],
  output: "static",
  adapter: vercelStatic()
});