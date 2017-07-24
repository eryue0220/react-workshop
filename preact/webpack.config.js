/**
 * @file webpack.config.js
 * @author cinchen
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    watch: true,
    devServer: {
        hot: true,
        host: '127.0.0.1',
        port: 8080,
        historyApiFallback: false,
        contentBase: __dirname
    },
    entry: {
        vendor: ['preact'],
        index: path.join(__dirname, './src/index.jsx')
    },
    output: {
        filename: '[name].min.js',
        path: path.join(__dirname, '../dist/')
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015', 'react'],
                    plugins: [
                        ["transform-react-jsx", { pragma: 'h' }]
                    ]
                }
            }
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: 2
        }),
        new HtmlWebpackPlugin({
            title: 'Preact APP',
            filename: 'index.html'
        })
    ]
};