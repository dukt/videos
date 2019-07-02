import Vue from 'vue'
import Explorer from './Explorer.vue'
import store from './js/store'
import videosApi from './js/api/videos'

Vue.config.productionTip = false

// new Vue({
//     render: h => h(Explorer),
//     store,
// }).$mount('.videos-vue-app')

window.VideoExplorerConstructor = Vue.extend({
    render: h => h(Explorer),
    store,
})
