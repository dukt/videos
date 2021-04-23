import Vue from 'vue'
import Explorer from './js/Explorer.vue'
import store from './js/store'
import utils from '@/js/mixins/utils';

Vue.config.productionTip = false
Vue.mixin(utils)

window.VideoExplorerConstructor = Vue.extend({
    render: h => h(Explorer),
    store,
})
