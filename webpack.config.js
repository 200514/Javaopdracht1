const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

    mode: "development",
    entry: path.resolve(__dirname,"src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundel.js",
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.(sccs|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "index.html")})]
};