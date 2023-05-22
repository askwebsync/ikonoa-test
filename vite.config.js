import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      treeshake: {
        // Replace feature flag globals with boolean literals
        flags: {
          __VUE_I18N_FULL_INSTALL__: false,
          __VUE_I18N_LEGACY_API__: false,
          __VUE_I18N_PROD_DEVTOOLS__: false,
        },
      },
    },
  },
});
