const path = require("path");
const { config } = require("dotenv");
const nodeExternals = require("webpack-node-externals");

// Plugins
const TerserPlugin = require("terser-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

config();

console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

module.exports = {
    context: path.resolve(__dirname, "./src"),
    devtool: "source-map",
    entry: "./main.ts",
    externals: [nodeExternals()],
    mode: process.env.NODE_ENV === "production" ? "production" : "development",
    module: {
        rules: [
            { 
                test: /\.ts?$/, 
                use: 'ts-loader',
                include: [path.resolve(__dirname, "./src")],
            }
        ],
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                },
                parallel: true,
            })
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "dist",
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [
            new TsconfigPathsPlugin(),
        ],
    },
    target: "node",
};
