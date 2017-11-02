module.exports = {
    context: __dirname + '/src/js',
    entry: './index.jsx',
    output: {
        path: __dirname + '/target',
        filename: "bundle.js"
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /{node_modules}/,
                loader: 'babel-loader',
                query: {
                    presets: ['latest','react'],
                    plugins: ["transform-class-properties",
                        "transform-object-rest-spread"]
                },

            }
        ]},
    devServer: {
        contentBase:[ __dirname + '/target', __dirname + '/src/static' ]
    }
}