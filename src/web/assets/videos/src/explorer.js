import Vue from 'vue'
import Explorer from './js/Explorer.vue'
import store from './js/store'

import './css/explorer.css'
// import './sass/explorer.scss'

Vue.config.productionTip = false

window.VideoExplorerConstructor = Vue.extend({
    render: h => h(Explorer),
    store,
})
