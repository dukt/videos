import Vue from 'vue'
import Field from './Field.vue'
import SelectorActions from './SelectorActions.vue'
import StoreOptions from './js/store'
import videosApi from './js/api/videos'
import createStore from './js/createStore'

Vue.config.productionTip = false

window.VideoFieldConstructor = Vue.extend({
    render: h => h(Field),
    created() {
        this.$store = createStore(StoreOptions)
    }
})

window.VideoSelectorActionsConstructor = Vue.extend({
    render: h => h(SelectorActions),
})
