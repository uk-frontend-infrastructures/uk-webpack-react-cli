const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ESLintPlugin = require('eslint-webpack-plugin');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');

// 基础目录
const _BASE_URL = '/TEST/';
// css兼容处理
const _POSTCSS_LOADER = {
	loader: 'postcss-loader',
	options: {
		postcssOptions: {
			plugins: [['postcss-preset-env']]
		}
	}
};

module.exports = {
	entry: path.join(__dirname, '/src/index.tsx'),
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: _BASE_URL,
		clean: true
	},
	resolve: {
		// 配置解析模块路径别名: 优点简写路径 缺点路径没有提示
		alias: {
			'@': path.resolve(__dirname, 'src')
		},
		extensions: ['.js', '.ts', '.tsx']
	},
	module: {
		rules: [
			{
				test: /\.([cm]?ts|tsx)$/,
				loader: 'ts-loader'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', _POSTCSS_LOADER]
			},
			{
				test: /\.less$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', _POSTCSS_LOADER]
			},
			{
				test: /\.(png|jpe?g|gif|svg?)$/i,
				type: 'asset',
				generator: {
					filename: 'images/[hash][ext][query]'
				},
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024 // 小于10kb,转base64
					}
				}
			},
			{
				test: /\.(ttf|eot|woff2|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[hash:10].[ext]'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'React App',
			template: './public/index.html',
			filename: 'index.html',
			inject: 'body',
			publicPath: _BASE_URL
		}),
		new HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin(),
		// new ESLintPlugin(options),
		new CopyPlugin({
			patterns: [
				{
					from: 'public',
					to: '',
					globOptions: {
						ignore: ['**/index.html'] // 不复制index.html
					}
				}
			]
		}),
		new DefinePlugin({
			BASE_URL: _BASE_URL // 与index.html中的<%= BASE_URL %>对应
		})
	]
};
