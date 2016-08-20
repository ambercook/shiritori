var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
    entry: './src/js/index.js',

    output: {
        path: __dirname,
        filename: 'dist/index.js'
    },

    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                  path.resolve( __dirname, 'src' ),
                ],
                test: /\.jsx?$/,
                query: {
                  plugins: [ 'transform-runtime' ],
                  presets: [ 'es2015', 'react' ],
                }
            },
            { 
                test: /\.scss$/, 
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css!sass'
                )
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin( './dist/style.css' ),
        new CopyWebpackPlugin( [
            {
                context: 'index.html',
                from: './',
                to: './dist'
            }
        ])
    ],

    watch: true,

    colors: true,

    progress: true
};
