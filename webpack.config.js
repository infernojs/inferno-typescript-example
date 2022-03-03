const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const transformInferno = require('ts-transform-inferno').default

module.exports = {
	mode: "none",
	entry: "./src/index.tsx", // Point to main file
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	performance: {
		hints: false
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", 						// creates style nodes from JS strings
					"css-loader", 							// translates CSS into CommonJS
					"sass-loader" 							// compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.css$/,
				use: [
					"style-loader", 						// creates style nodes from JS strings
					"css-loader"								// translates CSS into CommonJS
				]
			},
			{
				test: /\.tsx$/,
				loader: 'ts-loader',
				options: {
					getCustomTransformers: () => ({
						before: [transformInferno()],
					}),
				},
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
			},
			{
				test: /\.(js|jsx)$/,   // All ts and tsx files will be process by
				loaders: 'babel-loader',			// first babel-loader, then ts-loader
				exclude: /node_modules/				// ignore node_modules
			},
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
		new CleanWebpackPlugin({
			verbose: true
		})
	]
};
