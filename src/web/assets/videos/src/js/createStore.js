/**
 * Create Store
 * https://forum.vuejs.org/t/this-store-undefined-in-manually-mounted-vue-component/8756
 */

import Vue from "vue"
import Vuex from "vuex"
import cloneDeep from "clone-deep"
import storeOptions from '@/js/storeOptions'

Vue.use(Vuex)

export default () => {
  return new Vuex.Store(cloneDeep(storeOptions))
}