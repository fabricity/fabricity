import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/datagrid.ts"),
      name: "datagrid",
      formats: ['es', 'umd']
    }
  }
});