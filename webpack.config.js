const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('awesome-typescript-loader');
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'FUI',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
}