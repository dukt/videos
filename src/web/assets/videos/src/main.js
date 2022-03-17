/* eslint-disable vue/one-component-per-file */

import Vue from 'vue'
import utils from '@/js/mixins/utils';
import createStore from '@/js/createStore'
import Explorer from '@/js/Explorer.vue'
import Player from '@/js/Player.vue'
import Field from '@/js/Field.vue'
import SelectorActions from '@/js/SelectorActions.vue'

Vue.config.productionTip = false

Vue.mixin(utils)

window.VideoExplorerConstructor = Vue.extend({
  render: h => h(Explorer),
  store: createStore(),
})

window.VideoFieldConstructor = Vue.extend({
  created() {
    this.$store = createStore()
  },
  render: h => h(Field)
})

window.VideoSelectorActionsConstructor = Vue.extend({
  render: h => h(SelectorActions),
})

window.VideoPlayerConstructor = Vue.extend({
  render: h => h(Player),
})

import './css/videos.pcss'

