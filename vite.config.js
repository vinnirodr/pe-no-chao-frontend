import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "pe-no-chao-frontend-production.up.railway.app"
    ]
  }
});
