import Vue from 'vue'
import Player from './Player.vue'

import './sass/player.scss'

Vue.config.productionTip = false

window.VideoPlayerConstructor = Vue.extend({
    render: h => h(Player),
})
