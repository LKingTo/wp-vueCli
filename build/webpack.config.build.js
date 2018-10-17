const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = merge(baseConfig, {
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
		new HtmlWebpackPlugin({title: 'My vue-cli'})
	]
});

module.exports = config;