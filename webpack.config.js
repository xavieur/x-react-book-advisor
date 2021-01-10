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
        rules: [ // [Rule]
            { // Rule object
                // rule conditions: test, include, exclude, resource
                // all conditions must match
                test: /\.js$/,
                exclude: /node_modules/,
                // rule results
                use: [ // [UseEntry]
                    { // UseEntry: string | {}
                        loader: 'babel-loader', // required
                        options: {
                            /* this works as well
                            presets: ['@babel/preset-env', '@babel/preset-react', {'plugins': ['@babel/plugin-proposal-class-properties']}] 
                            */
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        }
                    }]
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