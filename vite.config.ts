import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

function inlineCss() {
  return {
    name: 'inline-css-plugin',
    enforce: 'post' as const,
    transformIndexHtml(html: string, { bundle }: any) {
      if (!bundle) return html;
      let newHtml = html;
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (fileName.endsWith('.css') && (chunk as any).type === 'asset') {
          const cssContent = (chunk as any).source.toString();
          const baseName = path.basename(fileName);
          const linkRegex = new RegExp(`<link[^>]*rel="stylesheet"[^>]*href="[^"]*${baseName}"[^>]*>`, 'gi');
          if (linkRegex.test(newHtml)) {
            newHtml = newHtml.replace(linkRegex, `<style>${cssContent}</style>`);
          } else {
            newHtml = newHtml.replace('</head>', `<style>${cssContent}</style></head>`);
          }
        }
      }
      return newHtml;
    }
  };
}

export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode === 'development' ? 'development' : 'production'),
    },
    plugins: [react(), tailwindcss(), inlineCss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      target: 'es2020',
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-react': ['react', 'react-dom'],
            'vendor-motion': ['motion'],
            'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
