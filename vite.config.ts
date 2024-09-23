/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsonfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsonfigPaths()],
  test: {
    globals: true,
    setupFiles: "./setupFiles.ts",
    environment: "happy-dom",
  },
});
