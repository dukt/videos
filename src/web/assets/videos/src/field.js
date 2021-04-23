import Vue from 'vue'
import Field from './js/Field.vue'
import SelectorActions from './js/SelectorActions.vue'
import StoreOptions from './js/store'
import createStore from './js/createStore'
import utils from '@/js/mixins/utils';

Vue.config.productionTip = false

Vue.mixin(utils)

window.VideoFieldConstructor = Vue.extend({
    render: h => h(Field),
    created() {
        this.$store = createStore(StoreOptions)
    }
})

window.VideoSelectorActionsConstructor = Vue.extend({
    render: h => h(SelectorActions),
})
