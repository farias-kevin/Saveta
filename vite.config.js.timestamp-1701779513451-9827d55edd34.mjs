// vite.config.js
import { defineConfig } from "file:///data/data/com.termux/files/home/ProjectReact/Saveta/node_modules/.pnpm/vite@5.0.4/node_modules/vite/dist/node/index.js";
import react from "file:///data/data/com.termux/files/home/ProjectReact/Saveta/node_modules/.pnpm/@vitejs+plugin-react@4.2.0_vite@5.0.4/node_modules/@vitejs/plugin-react/dist/index.mjs";
import Icons from "file:///data/data/com.termux/files/home/ProjectReact/Saveta/node_modules/.pnpm/unplugin-icons@0.18.0_@svgr+core@8.1.0/node_modules/unplugin-icons/dist/vite.js";
import IconsResolver from "file:///data/data/com.termux/files/home/ProjectReact/Saveta/node_modules/.pnpm/unplugin-icons@0.18.0_@svgr+core@8.1.0/node_modules/unplugin-icons/dist/resolver.js";
import AutoImport from "file:///data/data/com.termux/files/home/ProjectReact/Saveta/node_modules/.pnpm/unplugin-auto-import@0.17.1/node_modules/unplugin-auto-import/dist/vite.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    AutoImport({
      resolvers: [
        IconsResolver({
          prefix: false,
          extension: "jsx",
          enabledCollections: ["mdi"],
          alias: { iconify: "mdi" }
        })
      ]
    }),
    Icons({
      compiler: "jsx",
      // or 'solid'
      jsx: "react"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9Qcm9qZWN0UmVhY3QvU2F2ZXRhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9Qcm9qZWN0UmVhY3QvU2F2ZXRhL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL1Byb2plY3RSZWFjdC9TYXZldGEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnXG5pbXBvcnQgSWNvbnNSZXNvbHZlciBmcm9tICd1bnBsdWdpbi1pY29ucy9yZXNvbHZlcidcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIHJlc29sdmVyczogW1xuICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICBwcmVmaXg6IGZhbHNlLFxuICAgICAgICAgIGV4dGVuc2lvbjogJ2pzeCcsXG4gICAgICAgICAgZW5hYmxlZENvbGxlY3Rpb25zOiBbJ21kaSddLFxuICAgICAgICAgIGFsaWFzOiB7aWNvbmlmeTogJ21kaSd9XG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBJY29ucyh7XG4gICAgICBjb21waWxlcjogJ2pzeCcsIC8vIG9yICdzb2xpZCdcbiAgICAgIGpzeDogJ3JlYWN0J1xuICAgIH0pLFxuICBdLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFUsU0FBUyxvQkFBb0I7QUFDM1csT0FBTyxXQUFXO0FBQ2xCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGdCQUFnQjtBQUd2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxXQUFXO0FBQUEsUUFDVCxjQUFjO0FBQUEsVUFDWixRQUFRO0FBQUEsVUFDUixXQUFXO0FBQUEsVUFDWCxvQkFBb0IsQ0FBQyxLQUFLO0FBQUEsVUFDMUIsT0FBTyxFQUFDLFNBQVMsTUFBSztBQUFBLFFBQ3hCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsTUFDSixVQUFVO0FBQUE7QUFBQSxNQUNWLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
