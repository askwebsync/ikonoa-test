import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      // Configure tree-shaking options
      treeshake: {
        // Replace feature flag globals with boolean literals
        flags: {
          "vue-i18n/dist/vue-i18n.esm-bundler.js": {
            // Set the feature flags for Vue i18n
            __INTLIFY_PROD_DEVTOOLS__: false,
            __VUE_I18N_FULL_INSTALL__: false,
            __VUE_I18N_LEGACY_API__: false,
            __VUE_I18N_PROD_DEVTOOLS__: false,
          },
        },
      },
    },
  },
});
