import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
const pathAlias = {
  "@atoms": "/components/atoms",
  "@helpers": "/helpers",
  "@hooks": "/hooks",
  "@icons": "/components/icons",
  "@lang": "/lang",
  "@molecules": "/components/molecules",
  "@types": "/types",
  "@utilities": "/utilities",
  "@validations": "/validations",
};

const BASE_URL = './src';

export default defineConfig({
  plugins: [react()],
  base: '/age-calculator-app/',
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
