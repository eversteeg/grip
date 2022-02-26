const { distPath, publicPath, srcPath } = require('./paths');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = (env = {}) => ({
    entry: {
        'grip': path.join(srcPath, 'index.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file-loader',
            },
        ],
    },
    output: {
        path: distPath,
        publicPath: '/',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: /@license/i,
                    },
                },
                extractComments: true,
            }),
        ],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: env.analyze ? 'server' : 'disabled',
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: publicPath,
                    globOptions: {
                        ignore: process.env.NODE_ENV !== 'development' ? ['config.json'] : [],
                    },
                    to: distPath,
                },
            ],
        }),
        new Dotenv({
            expand: true,
            systemvars: true,
        }),
        new HtmlWebpackPlugin({
            template: path.join(publicPath, 'index.html'),
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|fr|nl/),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        fallback: {
            buffer: false,
            crypto: require.resolve('simple-crypto-js'),
            http: false,
            https: false,
            timers: false,
        },
    },
});
