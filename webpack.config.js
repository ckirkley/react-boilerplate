'use-strict'
var path = require('path');

module.exports = {
	entry: './app/client.js',
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
		}]
	},
	node: {
	    console: true,
	    fs: 'empty',
	    net: 'empty',
	    tls: 'empty'
	}
};