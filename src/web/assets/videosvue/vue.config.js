const fs = require('fs');

module.exports = {
    filenameHashing: false,
    publicPath: 'https://localhost:8090/',
    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        },
    },
    devServer: {
        headers: {"Access-Control-Allow-Origin": "*"},
        disableHostCheck: true,
        port: process.env.DEV_SERVER_PORT,
        https: {
            key: process.env.DEV_SSL_KEY ? fs.readFileSync(process.env.DEV_SSL_KEY) : null,
            cert: process.env.DEV_SSL_CERT ? fs.readFileSync(process.env.DEV_SSL_CERT) : null,
        },
    },

    chainWebpack: config => {
        // Remove the standard entry point
        config.entryPoints.delete('app')

        // Add entry points
        config.entry('explorer')
            .add('./src/explorer.js')
            .end()
            .entry('field')
            .add('./src/field.js')
            .end()

        // Preserve whitespace
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.preserveWhitespace = true
                return options
            })
    },
}