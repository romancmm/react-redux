/** @type {import('vite').UserConfig} */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react()],
 resolve: {
  // alias: {
  //  '@/': path.resolve(__dirname, './src'),
  //  '@/components': path.resolve(__dirname, './src/components'),
  //  '@/redux': path.resolve(__dirname, './src/redux'),
  //  '@/lib': path.resolve(__dirname, './src/lib'),
  //  '@/utils': path.resolve(__dirname, './src/utils'),
  //  '@/pages': path.resolve(__dirname, './src/pages'),
  // },
 },
})
