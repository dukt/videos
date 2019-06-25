import Vue from 'vue'
import App from './App.vue'
import store from './js/store'
import videosApi from './js/api/videos'

Vue.config.productionTip = false

// new Vue({
//     render: h => h(App),
//     store,
// }).$mount('.videos-vue-app')

window.VideoExplorerConstructor = Vue.extend({
    render: h => h(App),
    store,
})
