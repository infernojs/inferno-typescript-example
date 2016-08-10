module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "./dist/bundle.js",
	},

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

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
	}
};