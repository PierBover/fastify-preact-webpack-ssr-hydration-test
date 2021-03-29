const path = require('path');
const fs = require('fs');

const NodeExternals = require('webpack-node-externals');

const webpackConfigs = [];

webpackConfigs.push({
	target: 'node',
	resolve: {
		extensions: ['.js']
	},
	node: {
		__dirname: false
	},
	// don't bundle node_modules
	externals: [NodeExternals()],
	entry: './main.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	}
});

// CLIENT JS

webpackConfigs.push({
	devtool: false,
	entry: './client-entry.js',
	output: {
		path: path.join(__dirname, 'build/static'),
		filename: 'App.js',
	},
	module: {
		rules: [
			{
				test: /\.(jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
});


module.exports = webpackConfigs;