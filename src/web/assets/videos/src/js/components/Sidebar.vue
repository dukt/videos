<script>
import {mapState, mapGetters} from 'vuex'
import ThumbUp from '@/icons/ThumbUp';
import Folder from '@/icons/Folder';
import Layout from '@/icons/Layout';
import VideoCamera from '@/icons/VideoCamera';
import List from '@/icons/List';

export default {

  components: {
    ThumbUp,
    Folder,
    Layout,
    VideoCamera,
    List,
  },

  computed: {

    ...mapState({
      gateways: state => state.gateways,
      selectedCollection: state => state.selectedCollection,
    }),

    ...mapGetters([
      'currentGateway',
    ]),

    currentGatewayHandle: {
      get() {
        return this.$store.state.currentGatewayHandle
      },
      set(value) {
        this.$store.commit('updateCurrentGatewayHandle', value)
      }
    },
  },

  methods: {
    handleCollectionClick(sectionKey, collectionKey, collection) {
      const selectedCollection = this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)

      this.$store.commit('updateSelectedCollection', selectedCollection)
      this.$store.commit('updateVideosLoading', true)
      this.$store.dispatch('getVideos', {
          gateway: this.currentGatewayHandle,
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
    },

    isCollectionSelected(sectionKey, collectionKey) {
      if (this.selectedCollection !== this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)) {
        return false
      }

      return true
    },
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="dv-px-2">
      <div class="select fullwidth">
        <select v-model="currentGatewayHandle">
          <option
            v-for="(gateway, gatewayKey) in gateways"
            :key="`gateway-${gatewayKey}`"
            :value="gateway.handle"
          >
            {{ gateway.name }}
          </option>
        </select>
      </div>
    </div>

    <nav>
      <ul>
        <template v-if="currentGateway">
          <template v-for="(section, sectionKey) in currentGateway.sections">
            <li
              :key="`section-${sectionKey}`"
              class="heading"
            >
              <span>{{ section.name }}</span>
            </li>

            <template v-for="(collection, collectionKey) in section.collections">
              <li :key="`collection-${sectionKey}-${collectionKey}`">
                <a
                  href="#"
                  :class="{sel: isCollectionSelected(sectionKey, collectionKey)}"
                  @click.prevent="handleCollectionClick(sectionKey, collectionKey, collection)"
                >
                  <template v-if="collection.icon">
                    <component
                      :is="collection.icon"
                      class="dv-text-blue-500 dv-w-5 dv-h-5 dv-mr-2"
                    />
                  </template>
                  {{ collection.name }}
                </a>
              </li>
            </template>
          </template>
        </template>
      </ul>
    </nav>
  </div>
</template>

<style lang="pcss" scoped>
.sidebar {
  li.heading {
    @apply !dv-mx-3;
  }
  a {
    @apply !dv-px-3;
  }
}
</style>
