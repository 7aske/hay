const path = require("path");
const nodeExternals = require("webpack-node-externals");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const {NODE_ENV = "production"} = process.env;

module.exports = {
	entry: "./build/index.js",
	mode: NODE_ENV,
	target: "node",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "index.js",
	},
	resolve: {
		extensions: [".js"],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					output: {
						comments: false,
					},
				},
			}),
		],
	},
	externals: NODE_ENV === "development" ? [nodeExternals()] : [],
	// watch: NODE_ENV === "development",
};
