import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "custom-dynamic-import",
      renderDynamicImport() {
        return {
          left: `
          {
            const dynamicImport = (path) => import(path);
            dynamicImport(
            `,
          right: ")}",
        };
      },
    }
  ],
  build: {
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/background.ts'),
        content: resolve(__dirname, 'src/content.ts'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: '[name].js',
        dir: 'dist',
      },
    },
  },
});
