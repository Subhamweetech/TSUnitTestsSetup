/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    coverage: {
      include: ["src/**"],
      reporter: [["cobertura", { file: "coverage.xml" }], "text"],
    },
    reporters: ["default", "junit"],
    outputFile: { junit: "coverage/test-results.xml" },
  },
  build: {
    rollupOptions: {
      input: "src/main.ts", // your main entry point for the production build
      // Exclude test files from the build process
      external: ["tests/**/*", "tests/**/*.test.ts"],
    },
  },
});
