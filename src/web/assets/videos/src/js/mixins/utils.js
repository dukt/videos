/* global Craft */

export default {
  methods: {
    getCollectionUniqueKey(gateway, sectionKey, collectionKey) {
      return gateway + ':' + sectionKey + ':' + collectionKey
    },

    t(category, message, params) {
      return Craft.t(category, message, params)
    }
  }
}