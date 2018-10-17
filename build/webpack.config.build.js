const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
	plugins: [
		new VueLoaderPlugin(),	//解析vue文件模板的插件
		new HtmlWebpackPlugin({title: 'My vue-cli'})
	]
});

module.exports = config;