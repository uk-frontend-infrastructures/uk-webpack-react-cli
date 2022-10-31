const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

// 基础目录
const _BASE_URL = '/TEST/';

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: './',
		hot: true,
		compress: true,
		port: 9000,
		historyApiFallback: {
			// 解决刷新404的问题
			index: `${_BASE_URL}index.html`
		},
		proxy: {
			// 一旦devServer服务器接受到 /api/xxx 的请求，就会把请求转发到另外一个服务器(3000)
			'/api': {
				target: 'http://localhost:3000',
				// 发送请求时，请求路径重写：将 /api/xxx --> /xxx （去掉/api）
				pathRewrite: {
					'^/api': ''
				}
			}
		}
	}
});
