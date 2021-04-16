import Vue from 'vue'
import Field from './Field.vue'
import SelectorActions from './SelectorActions.vue'
import StoreOptions from './js/store'

import createStore from './js/createStore'

import './sass/field.scss'

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
