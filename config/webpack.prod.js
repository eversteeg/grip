const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');

module.exports = () =>
    merge(webpackConfig(), {
        devtool: 'source-map',
        optimization: {
            splitChunks: {
                chunks: 'all',
            },
        },
        output: {
            filename: '[name].[contenthash].min.js',
        },
    });
