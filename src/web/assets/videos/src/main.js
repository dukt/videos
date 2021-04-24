import Vue from 'vue'
import Explorer from '@/js/Explorer.vue'
import store from '@/js/store'
import utils from '@/js/mixins/utils';
import Player from '@/js/Player.vue'
import Field from '@/js/Field.vue'
import SelectorActions from '@/js/SelectorActions.vue'
import StoreOptions from '@/js/store'
import createStore from '@/js/createStore'

Vue.config.productionTip = false

Vue.mixin(utils)

window.VideoExplorerConstructor = Vue.extend({
    render: h => h(Explorer),
    store,
})

window.VideoFieldConstructor = Vue.extend({
    render: h => h(Field),
    created() {
        this.$store = createStore(StoreOptions)
    }
})

window.VideoSelectorActionsConstructor = Vue.extend({
    render: h => h(SelectorActions),
})

window.VideoPlayerConstructor = Vue.extend({
    render: h => h(Player),
})

import './css/videos.css'
