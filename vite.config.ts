import { ConfigEnv, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import path from 'node:path';
const host = process.env.TAURI_DEV_HOST;
// https://vite.dev/config/
export default ({ command, mode }: ConfigEnv) => {
  console.log(command, mode);
  return defineConfig({
    define: {
      __OS_PLATFORM__: `"${process.platform}"`,
    },
    plugins: [
      react(),
      AutoImport({
        imports: [
          'react',
          'ahooks',
          'jotai',
          'jotai/utils',
          'react-router-dom',
          'react-i18next',
        ],
        dirs: ['./src/components/**'],
        dts: './src/typing/auto-imports.d.ts',
        resolvers: [
          IconResolver({
            prefix: 'Icon',
            extension: 'jsx',
            customCollections: ['local'],
          }),
        ],
        eslintrc: {
          enabled: true,
        },
      }),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          local: FileSystemIconLoader('src/assets/icons', (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
      }),
    ],
    // 防止 Vite 清除 Rust 显示的错误
    clearScreen: false,
    server: {
      // Tauri 工作于固定端口，如果端口不可用则报错
      strictPort: true,
      // 如果设置了 host，Tauri 则会使用
      host: host || false,
      port: 5173,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    // 添加有关当前构建目标的额外前缀，使这些 CLI 设置的 Tauri 环境变量可以在客户端代码中访问
    envPrefix: ['VITE_', 'TAURI_ENV_*'],
    build: {
      // Tauri 在 Windows 上使用 Chromium，在 macOS 和 Linux 上使用 WebKit
      target:
        process.env.TAURI_ENV_PLATFORM == 'windows' ? 'chrome105' : 'safari13',
      // 在 debug 构建中不使用 minify
      minify: !process.env.TAURI_ENV_DEBUG ? 'esbuild' : false,
      // 在 debug 构建中生成 sourcemap
      sourcemap: !!process.env.TAURI_ENV_DEBUG,
    },
  });
};
