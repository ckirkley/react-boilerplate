var path = require('path');

module.exports = {
	context: path.join(__dirname, '/app'),
	entry: {
		app: './js/app.js',
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, '/dist')
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loaders: ['react-hot-loader', 'babel-loader']
		}]
	}
};