
// Modules

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Conllector Webpack :)

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './js/index.js',
        pass: './js/generate-password.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 5000,
        http: true
    },
    devServer: {
        port: '5000'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}