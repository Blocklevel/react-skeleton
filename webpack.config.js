var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',

    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    devServer: {
      contentBase: "./src",
      hot: false
    },

    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            }
        ]
    },

    postcss: [
        require('autoprefixer-core'),
        require('postcss-color-rebeccapurple')
    ],

    plugins: [
        new ExtractTextPlugin('style.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
