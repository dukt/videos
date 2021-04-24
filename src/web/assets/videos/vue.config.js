module.exports = {
    filenameHashing: false,
    publicPath: process.env.PUBLIC_PATH || "https://localhost:8090",
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
        port: process.env.DEV_SERVER_PORT || 8090,
        https: true,
        contentBase: [
            '../../../templates/'
        ],
        watchContentBase: true,
    },
}