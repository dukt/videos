<template>
    <div v-if="previewVideo && !previewError" class="preview mt-6 flex flex-nowrap items-start">
        <div class="preview-thumb flex-shrink-0">
            <div class="videos-thumb relative pt-0">
                <div class="thumb-ratio aspect-w-16 aspect-h-9 w-44">
                    <img class="w-44" :src="previewVideo.thumbnail" :alt="previewVideo.title">
                </div>
                <div class="duration">
                    {{previewVideo.duration}}
                </div>
                <div class="play" @click="$emit('playVideo', previewVideo)"></div>
            </div>
        </div>
        <div class="description ml-2 flex-shrink max-w-sm min-w-0">
            <div class="title line-clamp-2"><strong>{{previewVideo.title}}</strong></div>

            <ul>
                <li class="truncate block">
                    <a :href="previewVideo.url">{{previewVideo.url}}</a>
                </li>
                <li class="truncate block">
                    <a h:ref="previewVideo.authorUrl" class="light">{{ previewVideo.authorName }}</a>
                </li>
                <li class="truncate block">
                    {{previewVideo.plays}} plays
                </li>
                <li class="truncate block">
                    <a @click.prevent="$emit('removeVideo')">Remove</a>
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
