import Vue from 'vue'
import App from './App.vue'
import store from './js/store'
import videosApi from './js/api/videos'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),

    store,

    data() {
        return {
            loading: false,
            videosLoading: false,
            gateways: [],
            currentGatewayHandle: null,
            videos: []
        }
    },

    computed: {
        currentGateway() {
            return this.gateways.find(g => g.handle === this.currentGatewayHandle)
        }
    },

    methods: {
        getVideos(gateway, method, options) {
            this.videosLoading = true

            videosApi.getVideos(gateway, method, options)
                .then((response) => {
                    this.videosLoading = false

                    this.videos = response.data.videos
                    this.videosMore = response.data.videosMore
                    this.videosToken = response.data.videosToken
                })
        }
    },

    mounted() {
        this.loading = true

        videosApi.getGateways()
            .then((response) => {
                this.loading = false
                this.gateways = response.data

                if (this.gateways.length > 0) {
                    this.currentGatewayHandle = this.gateways[0].handle
                }
            })
    }
}).$mount('#videos-vue-app')
