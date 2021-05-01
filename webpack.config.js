let path           = require("path")
let {DefinePlugin} = require("webpack")

module.exports = {
    entry: {
        "material-compoents-react.js": [
            "material-compoents-react.js"
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules      : true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("autoprefixer")
                            ]
                        }
                    }
                ]
            },
            {
                exclude: /node_modules/,
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            presets: ["env", "react"]
                        }
                    }
                ]
            }
        ]
    },
    output: {
        filename  : "[name]",
        path      : path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    plugins: [
    ],
    resolve: {
        extensions: [".css"],
        modules: ["src", "node_modules"]
    }
}
