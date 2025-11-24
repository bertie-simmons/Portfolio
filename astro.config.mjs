import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/postcss";

export default defineConfig({
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
