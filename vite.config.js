import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import vuePlugin from '@vitejs/plugin-vue';
// import vue from '@vitejs/plugin.vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),],
  // vitePluginRequire.default()
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  }
})
