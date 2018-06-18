const path = require('path'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry:'./src/js/app.js',
    output:{
        path : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module:{
        rules:[
            {
                test : /\.css$/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new UglifyJsPlugin()
    ]
}