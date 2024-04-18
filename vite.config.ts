import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/plugin/index.ts"),
      name: "VueArcgismap",
      // the proper extensions will be added
      fileName: "vue-arcgismap",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [
        "vue",
        "@arcgis/core/Map",
        "@arcgis/core/widgets/Locate",
        "@arcgis/core/layers/FeatureLayer",
        "@arcgis/core/views/MapView",
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
          "@arcgis/core/Map": "ArcgisCoreMap",
          "@arcgis/core/views/MapView": "ArcgisCoreMapView",
          "@arcgis/core/widgets/Locate": "ArcgisCoreLocate",
          "@arcgis/core/layers/FeatureLayer": "ArcgisCoreMap",
        },
      },
    },
  },
});
