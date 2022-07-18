import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import loadVersion from 'vite-plugin-package-version';
import react from '@vitejs/plugin-react';
const { distPath, publicPath, rootPath } = require('./config/paths');
const path = require('path');

const port = 8000;

export default defineConfig(({ mode }) => {
    return {
        define:
            mode === 'development'
            ? { global: {} }
            : {},
        root: rootPath,
        publicDir: publicPath,
        template: path.join(publicPath, 'index.html'),
        build: {
            outDir: distPath,
            rollupOptions: {
                input: {
                    main: './index.html',
                }
            },
            chunkSizeWarningLimit: 1200,
        },
        plugins: [
            createHtmlPlugin({
                inject: {
                    data: {
                        title: 'Grip',
                    },
                },
            }),
            react({
                include: '**/*.{js,jsx,ts,tsx}',
            }),
            splitVendorChunkPlugin(),
            loadVersion()
        ],
        server: {
            host: '0.0.0.0',
            port,
            open: true,
            proxy: {
                '/navajo-local': {
                    target: 'http://localhost:9090',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/navajo-local/, '')
                },
                '/navajo-playground': {
                    target: 'https://clubweb.devnl.sportlink.com/navajo',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/navajo-playground/, '')
                },
            },
        }
    };
});
