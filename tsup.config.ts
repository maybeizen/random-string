import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"], // Tree-shakable ESM + Node-friendly CJS
  dts: true, // Enables `.d.ts` generation (from tsconfig)
  clean: true, // Clear dist/ before each build
  minify: true, // Optional: minify for npm
  splitting: false, // Not needed for simple packages
  shims: false, // Avoid node/global polyfills
  sourcemap: false, // Optional: set to true if debugging needed
});
