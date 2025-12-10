import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { readdirSync, statSync, existsSync } from 'fs';

// 自动扫描 pages 目录，生成多页面入口（只扫描有 index.html 的目录）
function getPageEntries() {
  const pagesDir = resolve(__dirname, 'src/pages');
  const entries: Record<string, string> = {};

  try {
    const pages = readdirSync(pagesDir);
    pages.forEach((page) => {
      const pagePath = resolve(pagesDir, page);
      const htmlPath = resolve(pagePath, 'index.html');
      // 只有存在 index.html 的目录才作为入口
      if (statSync(pagePath).isDirectory() && existsSync(htmlPath)) {
        entries[page] = htmlPath;
      }
    });
  } catch {
    // pages 目录不存在时忽略
  }

  return entries;
}

// 获取所有页面目录名
function getPageNames(): string[] {
  const pagesDir = resolve(__dirname, 'src/pages');
  try {
    return readdirSync(pagesDir).filter((name) => {
      const pagePath = resolve(pagesDir, name);
      return statSync(pagePath).isDirectory();
    });
  } catch {
    return [];
  }
}

// 开发服务器路径重写插件（自动匹配所有 pages 目录）
function devServerRewrite(): Plugin {
  const pageNames = getPageNames();

  return {
    name: 'dev-server-rewrite',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const url = req.url || '';
        // 匹配 /xxx/ 或 /xxx/file，如果 xxx 是 pages 下的目录则重写
        const match = url.match(/^\/([^/]+)(\/.*)?$/);
        if (match && pageNames.includes(match[1])) {
          req.url = `/src/pages${url}`;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), devServerRewrite()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@shared': resolve(__dirname, 'src/shared'),
    },
  },
  build: {
    rollupOptions: {
      input: getPageEntries(),
    },
    outDir: 'dist',
  },
  server: {
    port: 9527,
  },
});
