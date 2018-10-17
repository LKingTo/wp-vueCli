const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = merge(baseConfig, {
	entry: {
		main: './src/main.js',	//项目代码文件
		vendor: [	//此处配置分离的库文件
			'vue'
		]
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'js/[name].[chunkhash].js',
		chunkFilename: 'js/[name].[chunkhash].js',	//非entry的文件
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'vue-style-loader',
					use: [
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: true //启用源映射支持，postcss-loader将使用其他加载器给出的先前源映射并相应地更新它
							}
						}
					]
				})
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../')	//配置文件不在根目录时，需要设置根目录
		}),
		new ExtractTextPlugin('css/style.[hash:16].css'),
		new VueLoaderPlugin(),	//解析vue文件模板的插件
		new HtmlWebpackPlugin({title: 'My vue-cli'}),
		new BundleAnalyzerPlugin()		//打包分析插件
	],
	optimization: {
		//todo 按需分离、runtimeChunk意义
		splitChunks: {
			chunks: "initial",
			minChunks: 2,
			cacheGroups: {
				vendor: {
					// test: /node_modules/,  //这里虽然分离了,但是没有做到按需引入,看官方配置也不是很明白
					name: 'vendor',
					chunks: 'initial',
					minChunks: 2
				}
			}
		},
		// runtimeChunk: true
	}
});

module.exports = config;