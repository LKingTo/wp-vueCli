const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = merge(baseConfig, {
	devServer: {
		port: '8080',
		host: 'localhost',
		hot: true,		//热加载，需引入插件
		//quiet: true //控制台中不输出打包的信息
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true //启用源映射支持，postcss-loader将使用其他加载器给出的先前源映射并相应地更新它
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../')	//配置文件不在根目录时，需要设置根目录
		}),
		new VueLoaderPlugin(),	//解析vue文件模板的插件
		new HtmlWebpackPlugin({title: 'My vue-cli'}),
		new webpack.HotModuleReplacementPlugin()
	]
});

module.exports = config;