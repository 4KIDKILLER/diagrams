import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [vue()],
    server: {
      host: "0.0.0.0",
      port: 3000, // 你希望使用的端口，可以更改
      open: true, // 运行时自动打开浏览器
    },
    css: {
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    },
    resolve: {
      alias: {
        "/@/": `/${resolve(__dirname, "src")}/`,
        "/@kit/": `/${resolve(__dirname, "src/components")}/`,
      },
    },
  };
});
