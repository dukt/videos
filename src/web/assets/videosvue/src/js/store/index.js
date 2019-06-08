import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},

    getters: {},

    actions: {
        displayError(context, msg) {
            Craft.cp.displayError(msg)
        },

        displayNotice(context, msg) {
            Craft.cp.displayNotice(msg)
        },
    },

    mutations: {}
})