var path = require('path');
module.exports = {
    module: {
         rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                         loader: "babel-loader"
                         }
                },
                {
                    test: /\.css$/,
                    loader: 'style-loader!css-loader'
                }
         ]
    },
    watch : true,
    entry: {
            'main': './src/main.js'
    },
    output: {
        filename: 'bundled.[name].js',
        path: path.resolve("../backend/src/main/resources/static")
    }
};