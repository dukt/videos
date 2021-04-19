<template>
    <div v-if="previewVideo && !previewError" class="preview">
        <div class="thumb-wrapper">
            <div class="thumb">
                <div class="thumb-ratio">
                    <img :src="previewVideo.thumbnail" :alt="previewVideo.title">
                </div>
                <div class="duration">
                    {{previewVideo.duration}}
                </div>
                <div class="play" @click="$emit('playVideo', previewVideo)"></div>
            </div>
        </div>
        <div class="description">
            <div class="title"><strong>{{previewVideo.title}}</strong></div>

            <ul>
                <li>
                    <a :href="previewVideo.url">{{previewVideo.url}}</a>
                </li>
                <li>
                    <a h:ref="previewVideo.authorUrl" class="light">{{ previewVideo.authorName }}</a>
                </li>
                <li>
                    {{previewVideo.plays}} plays
                </li>
                <li>
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
