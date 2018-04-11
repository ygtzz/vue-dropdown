var webpack = require('webpack');
var merge = require('webpack-merge');
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

module.exports = merge(baseWebapckConfig, {
    entry:'./test',
    output: {
        filename: './test/dist/test.js',
        publicPath: '/'
    }
});