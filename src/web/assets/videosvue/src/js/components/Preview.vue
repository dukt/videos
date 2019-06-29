<template>
    <div v-if="previewVideo && !previewError" class="preview">
        <div class="thumb">
            <img :src="previewVideo.thumbnailSource" :alt="previewVideo.title">
            <div class="duration">
                {{previewVideo.durationSeconds}} seconds
            </div>
        </div>
        <div class="description">
            <div><strong>{{previewVideo.title}}</strong></div>
            <div>
                <a :href="previewVideo.url">{{previewVideo.url}}</a>
            </div>
            <div>
                <a h:ref="previewVideo.authorUrl" class="light">{{ previewVideo.authorName }}</a>
            </div>
            <div>
                {{previewVideo.plays}} plays
            </div>
            <div>
                <a @click.prevent="$emit('removeVideo')">Remove</a>
            </div>
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

<style lang="scss">
    .preview {
        .thumb {
            width: 300px;
            height: 200px;
            background: rgba(0, 0, 0, .7);
            border-radius: 5px;
            margin-right: 24px;
            position: relative;

            img {
                width: 100%;
            }

            .duration {
                position: absolute;
                right: 7px;
                bottom: 7px;
                background: rgba(0, 0, 0, 1);
                padding: 2px 12px;
                color: #fff;
                opacity: .9;
            }
        }
    }
</style>