'use strict';
const path = require('path');

const config = {
	mode: 'development',
	entry: './home_works/DOM-2_w-webpack/js/script',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './home_works/DOM-2_w-webpack/dist')
	},
	watch: true,
	devtool: 'source-map',
};

module.exports = config;