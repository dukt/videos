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
        selectedCollection: null,
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
                })
        },

        getVideos({commit, state}, {gateway, method, options}) {
            commit('updateVideosLoading', true)

            return videosApi.getVideos(gateway, method, options)
                .then((response) => {
                    commit('updateVideosLoading', false)
                    commit('updateVideos', {
                        videos: response.data.videos,
                        videosMore: response.data.videosMore,
                        videosToken: response.data.videosToken,
                    })
                })
                .catch(() => {
                    commit('updateVideosLoading', false)
                    commit('updateVideos', {
                        videos: [],
                        videosMore: null,
                        videosToken: null,
                    })
                })
        }
    },

    mutations: {
        updateVideos(state, {videos, videosMore, videosToken}) {
            state.videos = videos
            state.videosMore = videosMore
            state.videosToken = videosToken
        },

        updateGateways(state, response) {
            state.gateways = response.data
        },

        updateCurrentGatewayHandle(state, handle) {
            state.currentGatewayHandle = handle
        },

        updateVideosLoading(state, loading) {
            state.videosLoading = loading
        },

        updateSelectedCollection(state, selectedCollection) {
            state.selectedCollection = selectedCollection
        }
    }
})