const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');

const config = merge(baseConfig, {
	devServer: {
		port: '8080',
		host: 'localhost',
		hot: true,		//热加载，需引入插件
		//quiet: true //控制台中不输出打包的信息
	},
	plugins: [
		new VueLoaderPlugin(),	//解析vue文件模板的插件
		new HtmlWebpackPlugin({title: 'My vue-cli'}),
		new webpack.HotModuleReplacementPlugin()
	]
});

module.exports = config;