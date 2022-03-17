<script>
import {mapActions} from 'vuex'

export default {
  computed: {
    hasSelectedVideo() {
      return this.$store.state.selectedVideo
    },
  },

  methods: {
    ...mapActions([
      'updateVideoUrlWithSelectedVideo',
    ]),

    useSelectedVideo() {
      this.updateVideoUrlWithSelectedVideo()
      this.$root.eventBus.$emit('useSelectedVideo')
    },

    cancel() {
      this.$root.eventBus.$emit('cancel')
    }
  }
}
</script>

<template>
  <div>
    <div class="buttons dv-float-right">
      <div
        class="btn"
        @click="cancel()"
      >
        {{ t('videos', 'Cancel') }}
      </div>
      <div
        class="btn submit"
        :class="{disabled: !hasSelectedVideo}"
        @click="useSelectedVideo()"
      >
        {{ t('videos', 'Select') }}
      </div>
    </div>
  </div>
</template>
