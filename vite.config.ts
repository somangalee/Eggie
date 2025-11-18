import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const PROJECT_ROOT = path.resolve(process.cwd());
const CLIENT_ROOT = path.resolve(PROJECT_ROOT, "client");

export default defineConfig({
  base: "/",
  plugins: [
    react(),
    runtimeErrorOverlay(),
  ],
  resolve: {
    alias: {
      "@shared": path.resolve(PROJECT_ROOT, "shared"),
      "@assets": path.resolve(CLIENT_ROOT, "src", "assets"),
    },
  },
  root: CLIENT_ROOT,
  build: {
    outDir: "dist",
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
