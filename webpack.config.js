const webpack = require('webpack');
const path = require('path');
//const nodeExternals = require('webpack-node-externals');

// const clientConfig = {
//     entry: './client/index.js',
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'public/client.bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: 'babel-loader'
//             }
//         ]
//     }
// };

const serverConfig = {
    entry: ['./server.js'],
    target: "node",
    externals: {
        "socket.io":"commonjs socket.io",
        "got":"commonjs got",
        "onezip":"commonjs onezip",
        "squad":"commonjs squad",
        "chalk":"commonjs chalk",
        //"edward":"commonjs edward",
        //"deepword":"commonjs deepword",
        //"dword":"commonjs dword",
        //"restbox":"commonjs restbox",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'buble-loader',
                options: {
                    objectAssign: "Object.assign",
                    transforms: {
                        modules: false,
                        forOf: false,
                        asyncAwait : false,
                        generator : false,
                        templateString : false
                    }
                }
            }
        ]
    },
};

module.exports = [serverConfig];
