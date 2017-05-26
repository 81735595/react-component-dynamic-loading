const { resolve } = require('path')
const webpack = require('webpack')
const mock = require('./mock')

module.exports = {
    context: resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    entry: {
        index: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            'webpack/hot/only-dev-server',
            './index'
        ],
        pageA: './pages/PageA',
        pageB: './pages/PageB'
    },
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].entry.js',
        publicPath: '/dist/',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname),
        publicPath:'/dist/',
        setup: mock
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'index',
            children: true,
            async: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['pageA', 'pageB'],
            children: true,
            async: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?modules']
            }
        ]
    }
}
