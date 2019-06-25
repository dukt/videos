import Vue from 'vue'
import Field from './Field.vue'
import SelectorActions from './SelectorActions.vue'
import store from './js/store'
import videosApi from './js/api/videos'

Vue.config.productionTip = false

window.VideoFieldConstructor = Vue.extend({
    render: h => h(Field),
    store,
}) // .$mount('.videos-vue-field')

window.VideoSelectorActionsConstructor = Vue.extend({
    render: h => h(SelectorActions),
    store,
})
