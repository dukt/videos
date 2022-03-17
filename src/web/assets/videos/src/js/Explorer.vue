<script>
import {mapState} from 'vuex'
import Sidebar from './components/Sidebar'
import Search from './components/Search'
import Videos from './components/Videos'

export default {
  name: 'VideosApp',

  components: {
    Sidebar,
    Search,
    Videos,
  },

  data() {
    return {
      loading: false,
      loadingMore: false,
    }
  },

  computed: {
    ...mapState({
      gateways: state => state.gateways,
      videos: state => state.videos,
      videosGateway: state => state.videosGateway,
      videosMethod: state => state.videosMethod,
      videosOptions: state => state.videosOptions,
      videosMoreToken: state => state.videosMoreToken,
      videosLoading: state => state.videosLoading,
    }),
  },

  mounted() {
    this.loading = true

    this.$store.dispatch('getGateways')
      .then(() => {
        this.loading = false

        if (this.gateways.length > 0) {
          const currentGateway = this.gateways[0]
          this.$store.commit('updateCurrentGatewayHandle', currentGateway.handle)

          const collection = currentGateway.sections[0].collections[0]
          const selectedCollection = this.getCollectionUniqueKey(currentGateway.handle, 0, 0)
          this.$store.commit('updateSelectedCollection', selectedCollection)

          this.$store.commit('updateVideosLoading', true)
          this.$store.dispatch('getVideos', {
              gateway: currentGateway.handle,
              method: collection.method,
              options: collection.options,
            })
            .then(() => {
              this.$store.commit('updateVideosLoading', false)
            })
            .catch(() => {
              this.$store.commit('updateVideosLoading', false)
              this.$store.dispatch('displayError', 'Couldn’t get videos.')
            })
        }
      })
  },

  methods: {
    loadMore() {
      if (this.loadingMore) {
        return
      }

      const options = this.videosOptions ? JSON.parse(JSON.stringify(this.videosOptions)) : {}

      options.moreToken = this.videosMoreToken

      this.loadingMore = true

      this.$store.dispatch('getVideos', {
          gateway: this.videosGateway,
          method: this.videosMethod,
          options: options,
          append: true,
        })
        .then(() => {
          this.loadingMore = false
        })
        .catch(() => {
          this.$store.dispatch('displayError', 'Couldn’t get videos.')
          this.loadingMore = false
        })
    },

    onScroll() {
      this.maybeLoadMore()
    },

    maybeLoadMore() {
      if (!this.videosMoreToken) {
        return false
      }

      if (!this.canLoadMore()) {
        return false
      }

      this.loadMore();
    },

    canLoadMore() {
      const scrollHeight = this.$refs.main.scrollHeight,
        scrollTop = this.$refs.main.scrollTop,
        height = this.$refs.main.clientHeight;

      return (scrollHeight - scrollTop <= height + 15)
    },
  }
}
</script>

<template>
  <div
    id="videos"
    class="dv-h-full"
  >
    <div
      class="body"
      :class="{
        'has-sidebar': !loading,
        'dv-flex dv-justify-center': loading
      }"
    >
      <div
        :class="{
          'content has-sidebar': !loading,
          '': loading,
        }"
      >
        <template v-if="loading">
          <div class="spinner" />
        </template>
        <template v-else>
          <sidebar />

          <div
            ref="main"
            class="main"
            @scroll="onScroll"
          >
            <search class="dv-mb-6" />

            <template v-if="videosLoading">
              <div class="spinner" />
            </template>
            <template v-else>
              <videos :videos="videos" />

              <div v-if="videosMoreToken">
                <template v-if="!loadingMore">
                  <button
                    class="btn"
                    @click="loadMore()"
                  >
                    Load More
                  </button>
                </template>
                <template v-else>
                  <div class="spinner" />
                </template>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
