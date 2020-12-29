// entry -> output
const Path = require('path');

module.exports = {
	entry: "./src/app.js",
	output: {
		path: Path.join(__dirname, "public"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},
		{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		contentBase: Path.join(__dirname, "public")
	}
};