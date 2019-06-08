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
            options
        }

        return axios.post(Craft.getActionUrl('videos/vue/get-videos'), data, {
            headers: {
                'X-CSRF-Token':  Craft.csrfTokenValue,
            }
        })
    },
}
