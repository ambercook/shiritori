const path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: "./src/js/index.js",

    output: {
        path: __dirname,
        filename: "src/bundle.js"
    },

    module: {
        loaders: [
            {
                loader: "babel-loader",
                include: [
                  path.resolve(__dirname, "src"),
                ],
                test: /\.jsx?$/,
                query: {
                  plugins: ['transform-runtime'],
                  presets: ['es2015', 'react'],
                }
            },
            { 
                test: /\.css$/, 
                loader: "style!css" 
            }
        ]
    },

    watch: true,

    colors: true,

    progress: true
};
