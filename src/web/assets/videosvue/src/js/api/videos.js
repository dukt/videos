/* global Craft */

import axios from 'axios'

export default {
    getGateways() {
        return axios.get(Craft.getActionUrl('videos/vue/get-gateways'), {
            headers: {
                'X-CSRF-Token':  Craft.csrfTokenValue,
            }
        })
    },

    getVideos(gateway, method, options) {
        const data = {
            gateway,
            method,
        }

        if (options) {
            data.options = options
        }

        return axios.post(Craft.getActionUrl('videos/vue/get-videos'), data, {
            headers: {
                'X-CSRF-Token':  Craft.csrfTokenValue,
            }
        })
    },

    getVideo(url) {
        const data = {
            url
        }

        return axios.post(Craft.getActionUrl('videos/vue/get-video'), data, {
            headers: {
                'X-CSRF-Token':  Craft.csrfTokenValue,
            }
        })
    },

    getVideoEmbedHtml(video) {
        const data = {
            gateway: video.gatewayHandle,
            videoId: video.id,
        }

        return axios.post(Craft.getActionUrl('videos/vue/get-video-embed-html'), data, {
            headers: {
                'X-CSRF-Token':  Craft.csrfTokenValue,
            }
        })
    }
}
