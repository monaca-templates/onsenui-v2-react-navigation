import path from 'path'
import react from '@vitejs/plugin-react'
import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'

const SRC_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './www');
const argvs = yargs(hideBin(process.argv)).argv
const HOST = process.env.MONACA_SERVER_HOST || argvs.host || '0.0.0.0';

export default {
  plugins: [
    react()
  ],
  root: SRC_DIR,
  base: '',
  publicDir: BUILD_DIR,         // needed to serve www/components in dev server
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  server: {
    host: HOST,
    port: 8080,
  }
};
