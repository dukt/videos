<script>
import Thumb from './Thumb'

export default {
  components: {
    Thumb
  },
  props: {
    previewVideo: {
      type: Object,
      default: null
    },
    previewError: {
      type: String,
      default: ''
    }
  },
}
</script>

<template>
  <div v-if="previewVideo">
    <template v-if="previewVideo.hasErrors">
      <ul class="errors padded">
        <template v-for="(errors, errorsKey) in previewVideo.errors">
          <template v-for="(error, errorKey) in errors">
            <li :key="errorsKey +' :' + errorKey">
              {{ error }}
            </li>
          </template>
        </template>
      </ul>
    </template>
    <template v-else>
      <div class="preview dv-flex dv-flex-nowrap dv-items-start">
        <div class="dv-shrink-0">
          <!--
            <div class="videos-thumb dv-pt-0 dv-w-44">
                <div class="videos-thumb-image-container">
                    <div class="videos-thumb-image" :style="'background-image: url(' + previewVideo.thumbnail + ')'"></div>
                </div>

                <div class="duration">
                    {{previewVideo.duration}}
                </div>
                <div class="play" @click="$emit('playVideo', previewVideo)"></div>
            </div>
            -->

          <thumb
            class="dv-pt-0 dv-w-44"
            :url="previewVideo.thumbnail"
            :duration="previewVideo.duration"
            @playVideo="$emit('playVideo', previewVideo)"
          />
        </div>
        <div class="dv-ml-2 dv-shrink dv-max-w-sm dv-min-w-0">
          <div class="dv-line-clamp-2">
            <strong>{{ previewVideo.title }}</strong>
          </div>

          <ul>
            <li class="truncate dv-block">
              <a :href="previewVideo.url">{{ previewVideo.url }}</a>
            </li>
            <li class="truncate dv-block">
              <a
                :href="previewVideo.authorUrl"
                class="light"
              >{{ previewVideo.authorName }}</a>
            </li>
            <li class="truncate dv-block">
              {{ t('videos', '{plays} plays', {plays: previewVideo.plays}) }}
            </li>
            <li class="truncate dv-block">
              <a @click.prevent="$emit('removeVideo')">
                {{ t('videos', "Remove") }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
