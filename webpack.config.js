const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
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
	plugins: [
		new VueLoaderPlugin()	//解析vue文件模板的插件
	]
};