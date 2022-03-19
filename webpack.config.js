const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/i,
				use: "babel-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: "./public/index.html",
			inject: "body",
			title: "Blog",
		}),
	],
	devtool: "inline-source-map",
	devServer: {
		port: 8080,
		hot: true,
		open: true,
	},
};
