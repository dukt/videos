/* global Craft */

import videosApi from '@/js/api/videos';

export default {
  strict: true,
  state: {
    currentGatewayHandle: null,
    gateways: [],
    playingVideo: null,
    selectedCollection: null,
    selectedVideo: null,
    videoUrl: null,
    videos: [],
    videosGateway: null,
    videosLoading: false,
    videosMethod: null,
    videosMoreToken: null,
    videosOptions: null,
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

    getGateways({commit}) {
      return videosApi.getGateways()
        .then((response) => {
          commit('updateGateways', response)
        })
    },

    getVideos({commit, state}, {gateway, method, options, append}) {
      return videosApi.getVideos(gateway, method, options)
        .then((response) => {
          let videos

          if (append === true) {
            videos = [
              ...state.videos,
              ...response.data.videos
            ]
          } else {
            videos = response.data.videos
          }

          commit('updateVideos', {
            videos: videos,
            videosGateway: gateway,
            videosMethod: method,
            videosOptions: options,
            videosMoreToken: response.data.moreToken,
          })
        })
        .catch((error) => {
          commit('updateVideos', {
            videos: [],
            videosMoreToken: null,
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
    updateCurrentGatewayHandle(state, handle) {
      state.currentGatewayHandle = handle
    },

    updateGateways(state, response) {
      state.gateways = response.data
    },

    updatePlayingVideo(state, playingVideo) {
      state.playingVideo = playingVideo
    },

    updateSelectedCollection(state, selectedCollection) {
      state.selectedCollection = selectedCollection
    },

    updateSelectedVideo(state, selectedVideo) {
      state.selectedVideo = selectedVideo
    },

    updateVideos(state, {videos, videosGateway, videosMethod, videosOptions, videosMoreToken}) {
      state.videos = videos
      state.videosGateway = videosGateway
      state.videosMethod = videosMethod
      state.videosOptions = videosOptions
      state.videosMoreToken = videosMoreToken
    },

    updateVideosLoading(state, loading) {
      state.videosLoading = loading
    },

    updateVideoUrl(state, videoUrl) {
      state.videoUrl = videoUrl
    },
  }
}