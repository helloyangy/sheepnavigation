import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // 假设你的前端应用会请求 '/api/yiyan' 来获取每日一言
      '/api/yiyan': {
        target: 'https://top.smallsheeps.cn/wp-content/themes/zibll/yiyan/qv-yiyan.php',
        changeOrigin: true,
        // 根据你的具体需求，你可能需要或不需要 rewrite 选项
        // rewrite: (path) => path.replace(/^\/api\/yiyan/, '')
      },
      '/music': {
        target: 'http://musicapi.cenguigui.cn', // 音乐的API服务器地址
        changeOrigin: true, // 改变原始主机头为目标主机头
        //rewrite: (path) => path.replace(/^\/music/, '') // 重写路径，如果需要的话
      }
    }
  }
});