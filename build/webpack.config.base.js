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
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 2048,
						name: 'assets/images/[name].[hash:16].[ext]'
					}
				}]
			}
		]
	},
};