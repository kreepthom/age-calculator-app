import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
const pathAlias = {
  "@atoms": "/components/atoms",
  "@icons": "/components/icons",
  "@molecules": "/components/molecules",
  "@utilities": "/utilities",
  "@hooks": "/hooks",
  "@lang": "/lang",
  "@types": "/types",
};

const BASE_URL = './src';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './docs'
  },
  resolve: {
    alias: Object.entries(pathAlias).map(([alias, path]) => ({
      find: alias,
      replacement: resolve(__dirname, `${BASE_URL}${path}`) 
    })),
  }
})
