<template>
    <div v-if="previewVideo && !previewError" class="preview">
        <div class="thumb">
            <img :src="previewVideo.thumbnail" :alt="previewVideo.title">
            <div class="duration">
                {{previewVideo.duration}}
            </div>
            <div class="play" @click="play(previewVideo)"></div>
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
    .thumb {
        position: relative;
        display: block;
        padding-top: 54.5%;
        border-radius: 6px;
        border: 3px solid transparent;
        overflow: hidden;

        img {
            position: absolute;
            border-radius: 3px;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            width: 100%;
        }

        .duration {
            position: absolute;
            background: #333;
            display: block;
            bottom: 4px;
            right: 4px;
            line-height: 1em;
            padding: 3px 4px;
            font-size: 0.8em;
            color: #fff;
            opacity: .8;
            font-weight: bold;
        }

        .play {
            border-radius: 100%;
            opacity: .0;
            border: 2px solid #fff;
            width: 28px;
            height: 28px;
            margin-left: -14px;
            margin-top: -14px;
            // background: #000 url('../img/play.png') center center no-repeat;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;

            &:hover {
                opacity: .7 !important;
                cursor: pointer;
            }
        }

        &:hover {
            .play {
                opacity: .5;
            }
        }

        .private {
            color: #fff;
            width: 13px;
            height: 13px;
            position: absolute;
            top: 7px;
            right: 7px;
            text-shadow: 0 0 2px #000000;
            opacity: 0.7;
        }
    }
    
    .preview {
        margin-top: 1em;

        .thumb {
            position: relative;
            float: left;
            width: 160px;
            height: 90px;
            padding-top: 0;
        }

        .description {
            margin-left: 170px;

            .title {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                cursor: default;
                margin: 0 !important;
                max-width: 200px;
            }

            ul {
                li {
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
            }
        }
    }
</style>