import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: false,
          extension: 'jsx',
          enabledCollections: ['mdi'],
          alias: {iconify: 'mdi'}
        }),
      ],
    }),
    Icons({
      compiler: 'jsx', // or 'solid'
      jsx: 'react'
    }),
  ],
})
