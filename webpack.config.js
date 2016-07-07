const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    context: `${__dirname}/lib`,
    entry: `./index.js`,
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: [
                /node_modules/
            ],
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0']
            },
        },{
			test: /\.s?css$/,
			loader: ExtractTextPlugin.extract("css-loader?sourceMap!sass-loader?sourceMap"),
		},{
            test: /\.json$/,
            loader: "json-loader"
        }],
    },
    node: {
        fs: "empty",
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'app.js'
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin(),
    ],
    resolve: {
        root: path.resolve('./lib'),
    },
};
