import videosApi from '../api/videos';

export default {
    strict: true,
    state: {
        videosLoading: false,
        gateways: [],
        currentGatewayHandle: null,
        selectedCollection: null,
        selectedVideo: null,
        playingVideo: null,
        videos: [],
        videoUrl: null,
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
                .catch((error) => {
                    commit('updateVideosLoading', false)
                    commit('updateVideos', {
                        videos: [],
                        videosMore: null,
                        videosToken: null,
                    })

                    throw error
                })
        },

        selectVideo({commit}, video) {
            commit('updateSelectedVideo', video)
        },

        updateVideoUrlWithSelectedVideo({commit, state}) {
            if (!state.selectedVideo) {
                return false
            }

            commit('updateVideoUrl', state.selectedVideo.url)
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
        },

        updateSelectedVideo(state, selectedVideo) {
            state.selectedVideo = selectedVideo
        },

        updatePlayingVideo(state, playingVideo) {
            state.playingVideo = playingVideo
        },

        updateVideoUrl(state, videoUrl) {
            state.videoUrl = videoUrl
        },
    }
}