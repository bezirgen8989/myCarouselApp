const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //указание начальной точки
    entry: "./src/index.js",
    //указание где будет создана папка и как будет называться файл
    output: {
        path: path.join(__dirname, "/buildApp"),
        filename: "index_bundle.js"
    },
    module: {
        //правила сборки модуля 
        rules: [
            {
                test: /\.js$|.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                //type: 'asset/resource',
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                    context: ''
                }
            }

        ]
    },
    plugins: [
        //плагины для сборки
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};