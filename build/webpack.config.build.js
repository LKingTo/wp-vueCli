const path = require('path');
const {VueLoaderPlugin} = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = merge(baseConfig, {
	entry: {
		app: './src/main.js',	//项目代码文件
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
				use: [
					{
						loader:	MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
							fallback: 'vue-style-loader',
						}
					},
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
		new MiniCssExtractPlugin({
			filename: 'css/[name].[chunkhash].css',
			chunkFilename: 'css/[id].css'
		}),
		new VueLoaderPlugin(),	//解析vue文件模板的插件
		new HtmlWebpackPlugin({title: 'My vue-cli'}),
		new BundleAnalyzerPlugin()		//打包分析插件
	],
	optimization: {
		//todo 按需分离、runtimeChunk意义
		splitChunks: {
			chunks: "initial",	//initial(初始块)、async(按需加载块)、all(默认，全部块)
			minChunks: 1,
			cacheGroups: {
				/* 库文件 */
				vendor: {
					test: /node_modules/,
					name: 'vendor',
					priority: 10,		//缓存组优先级
					chunks: 'initial',
					enforce: true		//优先处理
				},
				/* 定义分离前被引用过两次的文件 */
				common: {
					name: 'common',
					minChunks: 2,
					minSize: 20000		//最小20kb
				}
			}
		},
		// runtimeChunk: true
	}
});

module.exports = config;