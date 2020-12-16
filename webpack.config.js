const path = require('path')

module.exports = {
    mode: 'development',
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 1000,
        poll: 3000
    },
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                'style-loader',
                'css-loader',
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                'postcss-preset-env'
                            ]
                        }
                    }
                },
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 9000,
        open: true
    }
}