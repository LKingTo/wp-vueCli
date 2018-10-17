const path = require('path');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: "index.js"
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
};