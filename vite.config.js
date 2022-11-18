import { defineConfig } from "vitest/config";

export default defineConfig({
  root: "src",
  build: {
    outDir: "../dist",
  },
  test: {
    globals: true,
    deps: {
      inline: [""],
    },
    coverage: {
      exclude: ["src/test"],
    },
  },
});
