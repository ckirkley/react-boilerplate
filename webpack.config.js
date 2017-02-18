'use-strict'
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './app/client/index.js',
	output: {
		path: path.join(__dirname, './app/assets'),
		filename: 'client.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['babel-loader']
		}, {
			test: /\.sass$/,
			loader: ExtractTextPlugin.extract('css-loader?sourceMap!sass-loader?sourceMap')
		}]
	},
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty'
	},
	plugins: [
		new ExtractTextPlugin('main.css')
	]
};