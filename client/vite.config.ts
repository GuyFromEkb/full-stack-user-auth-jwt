import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({ parseNative: true })],
  //docker
  server: {
    host: true,
    port: 3005,
    watch: {
      usePolling: true,
    },
  },
  //@mui/material => Styled Components
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
})
