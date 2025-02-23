import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://3.36.255.236:8080", // 백엔드 서버 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(), svgr()],
});
