<script>
/* eslint-disable vue/no-v-html */
/* global Garnish */

import videosApi from './api/videos'

export default {
  data() {
    return {
      modal: null,
      embed: null,
    }
  },

  mounted() {
    const video = this.$root.video

    videosApi.getVideoEmbedHtml(video)
      .then((response) => {
        this.embed = response.data.html
      })

    this.modal = new Garnish.Modal(this.$refs.modal, {
      resizable: false,

      onHide: function() {
        this.$emit('hide')
      }.bind(this)
    })
  },

  destroyed() {
    this.modal.$shade[0].remove()
    this.$el.remove()
  }
}
</script>

<template>
  <div
    ref="modal"
    class="videos-player-modal modal"
  >
    <div class="videos-player dv-bg-black dv-h-full">
      <div v-html="embed" />
    </div>
  </div>
</template>

<style lang="css">
.videos-player iframe {
  @apply dv-absolute dv-w-full dv-h-full;
}
</style>