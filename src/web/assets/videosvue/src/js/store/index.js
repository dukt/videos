import Vue from 'vue'
import Vuex from 'vuex'
import videosApi from '../api/videos';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
        videosLoading: false,
        gateways: [],
        currentGatewayHandle: null,
        videos: []
    },

    getters: {
        currentGateway(state) {
            if (!state) {
                return null
            }

            return state.gateways.find(g => g.handle === state.currentGatewayHandle)
        }
    },

    actions: {
        displayError(context, msg) {
            Craft.cp.displayError(msg)
        },

        displayNotice(context, msg) {
            Craft.cp.displayNotice(msg)
        },

        getGateways({commit, state}) {
            return videosApi.getGateways()
                .then((response) => {
                    commit('updateGateways', response)

                    if (state.gateways.length > 0) {
                        commit('updateCurrentGatewayHandle', state.gateways[0].handle)
                    }
                })
        },

        getVideos({commit, state}, {gateway, method, options}) {
            commit('updateVideosLoading', true)

            return videosApi.getVideos(gateway, method, options)
                .then((response) => {
                    commit('updateVideosLoading', false)
                    commit('updateVideos', response)
                })
        }
    },

    mutations: {
        updateVideos(state, response) {
            state.videos = response.data.videos
            state.videosMore = response.data.videosMore
            state.videosToken = response.data.videosToken
        },

        updateGateways(state, response) {
            state.gateways = response.data
        },

        updateCurrentGatewayHandle(state, handle) {
            state.currentGatewayHandle = handle
        },

        updateVideosLoading(state, loading) {
            state.videosLoading = loading
        }
    }
})