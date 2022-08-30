const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
	context: path.resolve(__dirname, 'src'),
	mode: 'development',
	entry: ['@babel/polyfill', './ts/script.ts'],
	output: {
		filename: 'index_bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [".ts", ".js", ".json"],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './index.html',
			hash: true,
			minify: true
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	devServer: {
		static: './dist',
		port: 8080,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]'
				}
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	}
};