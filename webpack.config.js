const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')



module.exports = (env, argv) =>{
    const isProd = argv.mode === 'production'
    const isDev = !isProd

    const filename = ext => isProd? `[name].[contenthash].bundle.${ext}`:`[name].bundle.${ext}`
    const plugins = () => {
        const base = [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new CopyPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src', 'favicon.ico'),
                        to: path.resolve(__dirname, 'dist')
                    },
                ],
            }),
            new MiniCssExtractPlugin({
                filename: filename('css')
            }),

        ]

        return base
    }
    return {
        target: isDev ? 'web' : 'browserslist',
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: './index.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: filename('js'),
            clean: true,
        },
        resolve: {
            extensions: ['.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@core': path.resolve(__dirname, 'src', 'core')
            }
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: env.port,
            watchContentBase: true,
            open: true
        },
        devtool: isDev?'source-map':false,
        plugins: plugins(),

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ],
        }
    }
}