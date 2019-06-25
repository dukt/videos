/**
 * Create Store
 * https://forum.vuejs.org/t/this-store-undefined-in-manually-mounted-vue-component/8756
 */

import Vue from "vue"
import Vuex from "vuex"
import cloneDeep from "clone-deep"

Vue.use(Vuex)

export default (store) => {
    return new Vuex.Store(cloneDeep(store))
}