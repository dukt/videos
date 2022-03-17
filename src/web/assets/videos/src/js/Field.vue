<script>
/* global VideoExplorerConstructor */
/* global VideoSelectorActionsConstructor */
/* global VideoPlayerConstructor */
/* global Garnish */
/* global $ */

import Vue from 'vue'
import debounce from 'lodash.debounce'
import videosApi from './api/videos'
import Preview from './components/Preview'

export default {
  components: {
    Preview
  },

  data() {
    return {
      eventBus: new Vue(),
      previewVideo: null,
      previewLoading: false,
      previewError: null,
      videoSelectorModal: null,
      playerModal: null,
      fieldVariables: null,
    }
  },

  computed: {
    videoUrl: {
      get() {
        return this.$store.state.videoUrl
      },
      set(value) {
        this.$store.commit('updateVideoUrl', value)
      }
    },
    inputName() {
      if (!this.fieldVariables) {
        return null
      }

      return this.fieldVariables.namespaceName
    }
  },

  mounted() {
    // Use selected video
    this.eventBus.$on('useSelectedVideo', () => {
      this.videoSelectorModal.hide()
      this.preview()
    })

    // Use selected video
    this.eventBus.$on('cancel', () => {
      this.videoSelectorModal.hide()
    })

    // Play video
    this.eventBus.$on('playVideo', ({video}) => {
      if (this.videoSelectorModal) {
        this.videoSelectorModal.hide()
      }

      const $playerModal = $('<div class="videos-player-modal modal"></div>').appendTo(Garnish.$bod)

      const options = {
        data: function() {
          return {
            eventBus: this.eventBus,
            video: video,
          }
        },
      }

      this.playerModal = new VideoPlayerConstructor(options).$mount($playerModal.get(0))

      this.playerModal.$children[0].$on('hide', () => {
        if (this.videoSelectorModal) {
          this.videoSelectorModal.show()
        }

        this.playerModal.$destroy()
        this.playerModal = null
      })
    })

    // Field variables
    if (this.$root.fieldVariables) {
      this.fieldVariables = this.$root.fieldVariables

      if (this.fieldVariables.value) {
        this.$store.commit('updateVideoUrl', this.fieldVariables.value.url)
        this.previewVideo = this.fieldVariables.value
      }
    }
  },

  methods: {
    browse() {
      // Initialize a Garnish modal
      const $videoSelectorModal = $('<div class="videoselectormodal modal elementselectormodal"></div>').appendTo(Garnish.$bod)
      const $explorerContainer = $('<div class="new-explorer-container"/>').appendTo($videoSelectorModal),
        $footer = $('<div class="footer"/>').appendTo($videoSelectorModal),
        $selectorActions = $('<div/>').appendTo($footer)

      this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {
        visible: false,
        resizable: false,
      })


      // Mount the explorer app and the video selector actions

      this.$nextTick(() => {
        const options = {
          store: this.$store,
          data: {
            eventBus: this.eventBus
          },
        }

        new VideoExplorerConstructor(options).$mount($explorerContainer.get(0))
        new VideoSelectorActionsConstructor(options).$mount($selectorActions.get(0))
      })
    },

    preview: debounce(function() {
      if (!this.videoUrl) {
        this.previewLoading = false
        this.previewVideo = null
        this.previewError = null
        return null;
      }

      this.previewLoading = true
      this.previewError = null

      videosApi.getVideo(this.videoUrl)
        .then((response) => {
          this.previewLoading = false

          if (response.data.error) {
            this.previewVideo = null
            this.previewError = response.data.error
          } else {
            this.previewVideo = response.data
          }

        })
    }, 1000),

    playVideo(video) {
      this.eventBus.$emit('playVideo', {video})
    },

    removeVideo() {
      this.videoUrl = null
      this.previewVideo = null
    }
  },
}
</script>

<template>
  <div>
    <div class="dv-relative">
      <input
        v-model="videoUrl"
        class="text fullwidth"
        :name="inputName"
        :placeholder="t('videos', 'Enter a video URL from YouTube or Vimeo')"
        @input="preview()"
      >
      <button
        class="dv-absolute dv-top-2.5 dv-right-4 dv-text-xs dv-text-[#0b69a3] hover:dv-underline dv-cursor-pointer"
        @click.prevent="browse()"
      >
        {{ t('videos', 'Browse videos…') }}
      </button>
    </div>

    <template v-if="previewLoading">
      <div class="spinner dv-mt-2" />
    </template>
    <template v-else>
      <div
        v-if="previewError"
        class="dv-mt-4"
      >
        <ul class="errors padded">
          <li>{{ previewError }}</li>
        </ul>
      </div>

      <preview
        class="dv-mt-4"
        :preview-video="previewVideo"
        :preview-error="previewError"
        @playVideo="playVideo"
        @removeVideo="removeVideo()"
      />
    </template>
  </div>
</template>
