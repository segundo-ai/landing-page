import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/work-website/",
  server: {
    proxy: {
      "/api": {
        target: "https://webhook.site/65aaf9eb-0372-4e21-bc9a-ec7bbf67e2d6",
        changeOrigin: true,
        secure: true, // if using self-signed https
        rewrite: (path) => path.replace(/^\/api/, ""), // optional
      },
    },
  },
});
