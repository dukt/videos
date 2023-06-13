<script>
import VideoCard from './VideoCard'

export default {
  components: {
    VideoCard,
  },

  props: {
    videos: {
      type: Array,
      required: true,
    }
  }
}
</script>

<template>
  <div class="dv-w-full dv-grid dv-grid-cols-3 dv-grid dv-gap-4">
    <template v-for="(video, videoKey) in videos">
      <video-card
        :key="`video-${videoKey}`"
        :video="video"
      />
    </template>
  </div>
</template>
