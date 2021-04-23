<template>
    <div v-if="previewVideo && !previewError" class="preview flex flex-nowrap items-start">
        <div class="flex-shrink-0">
            <div class="videos-thumb relative pt-0">
                <div class="aspect-w-16 aspect-h-9 w-44">
                    <img class="w-44" :src="previewVideo.thumbnail" :alt="previewVideo.title">
                </div>
                <div class="duration">
                    {{previewVideo.duration}}
                </div>
                <div class="play" @click="$emit('playVideo', previewVideo)"></div>
            </div>
        </div>
        <div class="ml-2 flex-shrink max-w-sm min-w-0">
            <div class="line-clamp-2"><strong>{{previewVideo.title}}</strong></div>

            <ul>
                <li class="truncate block">
                    <a :href="previewVideo.url">{{previewVideo.url}}</a>
                </li>
                <li class="truncate block">
                    <a h:ref="previewVideo.authorUrl" class="light">{{ previewVideo.authorName }}</a>
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

<script>
    export default {
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
