import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
/*export default defineConfig({
  plugins: [react()],
})*/

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base:"/lazy/",
    plugins: [react()],
    build: {
      outDir: "./wwwroot/app/",
      sourcemap: true,
    },
    server: {
      port: env.VITE_PORT,
    },
  };
});
