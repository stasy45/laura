import { defineConfig } from 'vite'
import path from "path";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
})