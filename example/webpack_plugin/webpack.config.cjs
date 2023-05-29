const path = require("node:path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { StyleEaseWebapckPlugin } = require("@styleease/webpack-plugin");
/**
 * @type {import('webpack').Configuration}
 */
const config = {
	entry: {
		index: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index.js",
	},
	module: {
		rules: [],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./public/index.html"),
		}),
		new StyleEaseWebapckPlugin(),
	],
	mode: "production",
	devServer: {
		host: "localhost",
		port: 8899,
		open: true,
		static: {
			directory: path.resolve(__dirname, "./public"),
		},
	},
};

module.exports = config;
