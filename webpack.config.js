import * as url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import infernoTsPlugin from 'ts-plugin-inferno';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// TypeScript 7 has no JavaScript compiler API, ts-loader and ts-plugin-inferno need TypeScript 6
const tsCompiler = '@typescript/typescript6';

export default {
	mode: "none",
	entry: "./src/index.tsx", // Point to main file
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
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
					compiler: tsCompiler,
					getCustomTransformers: () => ({
						after: [infernoTsPlugin.default()],
					}),
				},
			},
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				options: {
					compiler: tsCompiler
				},
			},
		]
	},
	devServer: {
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
