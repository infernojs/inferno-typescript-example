const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.ts",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},

	// Enable sourcemaps for debugging webpack"s output.
	devtool: "source-map",

	plugins: [
		new HtmlWebpackPlugin(
			{
				template: "./src/index.html",
				inject: "body"
			}
		),
		new CleanWebpackPlugin(
			["dist"], {
				verbose: true
			}
		)
	],
	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
	},

	module: {
		loaders: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
			{ test: /\.ts$/, loader: "ts-loader" }
		],

		preLoaders: [
			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{ test: /\.js$/, loader: "source-map-loader" }
		]
	},
	devServer: {
		contentBase: "dist/",
		historyApiFallback: true
	}
};
