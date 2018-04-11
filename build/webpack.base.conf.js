var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
var config = require('./config');
var merge = require('lodash/merge');
var sBase = config.sBase;

var aPlugin = [
    new CleanWebpackPlugin(['dist'])
];

module.exports = {
    entry: config.entry,
    output: {
        
    },
    module: {
        rules: [
            {test: /\.js$/, loader: "babel-loader", exclude: /node_modules/}
        ]
    },
    plugins: aPlugin,
    externals:{
        vue: 'Vue'
    },
    resolve:{
        modules: [ "node_modules",sBase],
        extensions:['.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}