import Vue from 'vue'
import Player from './js/Player.vue'

Vue.config.productionTip = false

window.VideoPlayerConstructor = Vue.extend({
    render: h => h(Player),
})
