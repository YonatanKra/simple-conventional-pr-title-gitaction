const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    target: 'async-node',
    entry: './src/index.ts',
    plugins: [
        new CopyWebpackPlugin(
            {
                patterns: [
                    //Note:- No wildcard is specified hence will copy all files and folders
                    {
                        from: 'node_modules/conventional-changelog-conventionalcommits/templates',
                        to: 'templates'
                    }
                ]
            }
        )
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
};