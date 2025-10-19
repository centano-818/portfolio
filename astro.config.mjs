import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  integrations: [tailwind()],
  site: 'https://github.com/centano-818',
  base: '/portfolio',
  output: "static"
});
