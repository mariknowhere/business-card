module.exports = {
    entry: {
        main: './src/index.ts'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
        ]
    },
    node: {
        fs: 'empty',
        net: 'empty'
    },
    target: 'node'
};