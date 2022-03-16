<template>
    <div v-if="previewVideo">
      <template v-if="previewVideo.hasErrors">
        <ul class="errors padded">
          <template v-for="(errors, errorsKey) in previewVideo.errors">
            <template v-for="(error, errorKey) in errors">
              <li :key="errorsKey +' :' + errorKey">{{error}}</li>
            </template>
          </template>
        </ul>
      </template>
      <template v-else>
        <div class="preview flex flex-nowrap items-start">
          <div class="flex-shrink-0">

            <!--
            <div class="videos-thumb pt-0 w-44">
                <div class="videos-thumb-image-container">
                    <div class="videos-thumb-image" :style="'background-image: url(' + previewVideo.thumbnail + ')'"></div>
                </div>

                <div class="duration">
                    {{previewVideo.duration}}
                </div>
                <div class="play" @click="$emit('playVideo', previewVideo)"></div>
            </div>
            -->

            <thumb class="pt-0 w-44" :url="previewVideo.thumbnail" :duration="previewVideo.duration" @playVideo="$emit('playVideo', previewVideo)"></thumb>
          </div>
          <div class="ml-2 flex-shrink max-w-sm min-w-0">
            <div class="line-clamp-2"><strong>{{previewVideo.title}}</strong></div>

            <ul>
              <li class="truncate block">
                <a :href="previewVideo.url">{{previewVideo.url}}</a>
              </li>
              <li class="truncate block">
                <a :href="previewVideo.authorUrl" class="light">{{ previewVideo.authorName }}</a>
              </li>
              <li class="truncate block">
                {{ t('videos', '{plays} plays', { plays: previewVideo.plays }) }}
              </li>
              <li class="truncate block">
                <a @click.prevent="$emit('removeVideo')">{{ t('videos', "Remove") }}</a>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </div>
</template>

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

