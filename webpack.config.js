const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/index.tsx", // Point to main file
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
	},
	performance: {
		hints: false
	},
	module: {
		loaders: [
			{
				test: /\.tsx?$/, 						  // All ts and tsx files will be process by
				loaders: [ 'babel-loader', 'ts-loader' ], // first babel-loader, then ts-loader
				exclude: /node_modules/                   // ignore node_modules
			}, {
				test: /\.jsx?$/,                          // all js and jsx files will be processed by
				loader: 'babel-loader',                   // babel-loader
				exclude: /node_modules/                  // ignore node_modules
			}
		]
	},
	devServer: {
		contentBase: "src/",
		historyApiFallback: true
	},
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
		),
		new webpack.HotModuleReplacementPlugin()
	]
};
