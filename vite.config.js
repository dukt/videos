import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue2'
import * as path from "path";
import {viteExternalsPlugin} from 'vite-plugin-externals';
import viteEslintPlugin from 'vite-plugin-eslint';

export default defineConfig(({command, mode}) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd(), '')};
  const port = process.env.DEV_PORT || 3000;
  return {
    base: command === 'serve' ? '' : '/dist/',
    root: "./src/web/assets/videos/",
    publicDir: "./src/static/",
    build: {
      emptyOutDir: true,
      manifest: true,
      sourcemap: true,
      rollupOptions: {
        input: path.resolve('./src/web/assets/videos/src/main.js'),
      },
    },
    // define: {
    //   __VUE_OPTIONS_API__: true,
    //   __VUE_PROD_DEVTOOLS__: false,
    // },
    resolve: {
      alias: {
        '@': path.resolve('./src/web/assets/videos/src/'),
      },
      extensions: ['.vue', '.js']
    },
    plugins: [
      vue(),
      viteExternalsPlugin({
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios'
      }),
      viteEslintPlugin({
        cache: false,
        fix: true,
      }),
    ],
    server: {
      host: '0.0.0.0',
      port,
    }
  }
})