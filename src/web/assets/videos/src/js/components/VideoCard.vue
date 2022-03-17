<script>
import {mapActions} from 'vuex'
import Thumb from './Thumb'

export default {
  components: {
    Thumb,
  },

  props: {
    video: {
      type: Object,
      required: true,
    },
  },

  computed: {
    isVideoSelected() {
      if (!this.$store.state.selectedVideo) {
        return false
      }

      return this.$store.state.selectedVideo.id === this.video.id
    }
  },

  methods: {
    ...mapActions([
      'selectVideo',
      'updateVideoUrlWithSelectedVideo',
    ]),

    play(video) {
      this.$root.eventBus.$emit('playVideo', {video})
    },

    useVideo(video) {
      this.selectVideo(video)
      this.updateVideoUrlWithSelectedVideo()
      this.$root.eventBus.$emit('useSelectedVideo')
    },
  }
}
</script>

<template>
  <div
    class="dv-group"
    @click="selectVideo(video)"
    @dblclick="useVideo(video)"
  >
    <thumb
      :selected="isVideoSelected"
      :url="video.thumbnail"
      :duration="video.duration"
      @playVideo="play(video)"
    />

    <div class="dv-mt-2 dv-flex dv-flex-row dv-flex-nowrap dv-items-center">
      <template v-if="video.private">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="dv-h-4 dv-w-4 dv-mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      </template>
      <div class="dv-flex-1">
        <div class="dv-line-clamp-2">
          {{ video.title }}
        </div>
      </div>
    </div>
  </div>
</template>
