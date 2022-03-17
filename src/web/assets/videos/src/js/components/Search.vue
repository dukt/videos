<script>
import debounce from 'lodash.debounce'

import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      query: '',
    }
  },

  computed: {
    ...mapGetters([
      'currentGateway',
    ]),

    debouncedSearch() {
      return debounce(() => {
        this.search()
      }, 1000)
    }
  },

  methods: {
    search() {
      this.debouncedSearch.cancel()

      this.$store.commit('updateSelectedCollection', null)
      this.$store.commit('updateVideosLoading', true)

      this.$store.dispatch('getVideos', {
          gateway: this.currentGateway.handle,
          method: 'search',
          options: {
            q: this.query
          },
        })
        .then(() => {
          this.$store.commit('updateVideosLoading', false)
        })
        .catch(() => {
          this.$store.commit('updateVideosLoading', false)
          this.$store.dispatch('displayError', 'Couldn’t get videos.')
        })
    }
  }
}
</script>

<template>
  <div v-if="currentGateway">
    <input
      v-model="query"
      type="search"
      class="text fullwidth"
      :placeholder="t('videos', 'Search {gateway} videos…', { gateway: currentGateway.name })"
      @input="debouncedSearch"
      @keyup.enter="search"
    >
  </div>
</template>

