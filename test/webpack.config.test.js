// test/webpack.config.test.js

// Webpack config file

var path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    // This will make Webpack include the source maps for the bundled code.
    // this makes it easier for debugging.
    devtool: "source-map",
    entry: "./test/index.js",
    // This is the output file that will be created as a result of the build process.
    output: {
        path: path.resolve(__dirname, "."),
        filename: "test.bundle.js",
    },
    resolve: {
        // This is to make sure we use the full version of the vue library whenever
        // we import it in our scripts. The Vue.js npm package includes various builds
        // of the library, depending on the use and execution environment.
        // This is the one we need for our purposes.
        alias: {
            vue: "vue/dist/vue.js"
        },
    },
    module: {
        rules: [
            // This rule tells Webpack to use the vue-loader whenever it's
            // bundling *.vue files.
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            // This rule tells Webpack to use babel-loader whenever it's
            // bundling *.js files. This is how we can write ES2015 code
            // and successfully build it.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            // This rule tells Webpack to use css-loader whenever it's
            // bundling *.css files.
            {
                test: /\.css$/,
                use: [
                  'css-loader'
                ],
            },
        ]
    },
    plugins: [
        // We need to include the VueLoaderPlugin. This is what ensures that
        // the rules are applied correctly for the various parts of the *.vue files.
        // Remember that *.vue files (AKA Single File Components) contain markup,
        // script and style, this plugin makes it so that, during bundling, Webpack knows
        // to apply *.js rules to the script portion of the SFC. It also can do the same
        // for the markup and style sections of the SFC, in case there were any rules
        // specified for css or html files.
        new VueLoaderPlugin()
    ],
    // Use the webpack-node-externals package here to specify that node_modules files
    // should not be bundled. We don't need to include these in order to run our tests
    // with mocha. Since the tests will run in a context where the node_modules
    // dependencies are included, having them bundled as well will mean to have them
    // included multiple times in the runtime environment.
    externals: [nodeExternals()]
};
