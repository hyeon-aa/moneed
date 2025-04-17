import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    // CORS 회피 코드(개발 서버 한정)
    proxy: {
      "/api": {
        target: "http://3.36.255.236:8080",
        changeOrigin: true,
      },
      "/oauth2": {
        target: "http://3.36.255.236:8080",
        changeOrigin: true,
      },
    },
  },
});
