const { distPath } = require('./paths');
const { merge } = require('webpack-merge');
const port = 8000;
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = () =>
    merge(webpackConfig(), {
        devServer: {
            compress: true,
            contentBase: distPath,
            disableHostCheck: true,
            historyApiFallback: true,
            host: '0.0.0.0',
            hot: true,
            open: true,
            openPage: `http://localhost:${port}`,
            port,
            publicPath: '/',
            proxy: {
                '/grip-local': {
                    target: 'http://localhost:8181',
                    cookieDomainRewrite: 'localhost',
                    pathRewrite: { '^/grip-local': '' },
                    secure: false,
                    changeOrigin: true,
                    onProxyReq: (proxyReq) => {
                        if (proxyReq.getHeader('origin')) {
                            proxyReq.setHeader('origin', 'http://localhost:8181');
                        }
                    },
                },
                '/grip-playground': {
                    target: 'https://app-sportlinked-test.sportlink.com',
                    cookieDomainRewrite: 'localhost',
                    pathRewrite: { '^/grip-playground': '' },
                    secure: false,
                    changeOrigin: true,
                    onProxyReq: (proxyReq) => {
                        if (proxyReq.getHeader('origin')) {
                            proxyReq.setHeader('origin', 'https://app-sportlinked-test.sportlink.com');
                        }
                    },
                },
                '/feed': {
                    target: 'https://www.sportlink.nl/feed/',
                    pathRewrite: { '^/feed': '' },
                    cookieDomainRewrite: 'localhost',
                    secure: false,
                    changeOrigin: true,
                    onProxyReq: (proxyReq) => {
                        if (proxyReq.getHeader('origin')) {
                            proxyReq.setHeader('origin', 'https://www.sportlink.nl/feed/');
                        }
                    },
                },
            },
        },
        devtool: 'eval-cheap-module-source-map',
        output: {
            filename: '[name].[fullhash].min.js',
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.development': JSON.stringify('true'),
            }),
        ],
        stats: {
            children: true,
            errorDetails: true,
        },
    });
