import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/postcss";

export default defineConfig({
  site: 'https://bertie-simmons.github.io',
  base: '/Portfolio',
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwind()
        ]
      }
    }
  }
});
