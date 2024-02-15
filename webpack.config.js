const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool:'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
    })],
    
}