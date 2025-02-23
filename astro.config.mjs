// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react"; // Para compatibilidad con React
import preact from "@astrojs/preact"; // Para compatibilidad con Preact

// https://astro.build/config
export default defineConfig({
  integrations: [react(), preact()], // Agrega React y Preact
  vite: {
    plugins: [tailwindcss()],
  },
});
