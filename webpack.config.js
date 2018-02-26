const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = path.resolve( __dirname, 'src' )

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcDir, 'index.html'),
            filename: 'index.html',
            title: 'React',
          })
    ]
}