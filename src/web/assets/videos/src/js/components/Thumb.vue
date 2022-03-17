<script>
export default {
  props: {
    url: {
      type: String,
      default: null
    },
    duration: {
      type: String,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<template>
  <div
    class="videos-thumb"
    :class="{
      'dv-ring dv-ring-red-500 dv-ring-opacity-80': selected
    }"
  >
    <div class="videos-thumb-image-container">
      <div
        class="videos-thumb-image"
        :style="'background-image: url(' + url + ')'"
      />
    </div>

    <div class="duration">
      {{ duration }}
    </div>
    <div
      class="play"
      @click.prevent="$emit('playVideo')"
    />
  </div>
</template>
