var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var definitions = {
    __CLIENT__: true,
    __SERVER__: false,
    __DEVELOPMENT__: true,
    
    /**
     * System logs
     * @example : logs of loggers middleware for Redux reducers
     */
    __SYSTEM_LOGS__ : false,

    // Redux dev tool
    __DEV_TOOLS__: true
};

var serverOptions = {
    port: '8080',
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    quiet: true,
    noInfo: true,
    hot: false,
    inline: true,
    lazy: false,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {colors: true}
};

module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/app'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js', '.jsx', 'json']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot',
                    'babel?presets[]=react,presets[]=es2015,presets[]=stage-2,plugins[]=transform-decorators-legacy']
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
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin(definitions),
    ],

    devServer : serverOptions
};
