<template>
    <div class="videos-vue-field">
        <div class="videos-vue-input">
            <input class="text fullwidth" placeholder="Enter a video URL from YouTube or Vimeo" v-model="videoUrl" @input="preview()">
            <a class="browse-btn" href="#" @click.prevent="browse()">Browse videos…</a>
        </div>

        <p v-if="previewError" class="error">{{previewError}}</p>

        <div v-if="previewLoading" class="spinner"></div>

        <div v-if="previewVideo && !previewError" class="preview">
            <div class="thumb">
                <img :src="previewVideo.thumbnailSource" :alt="previewVideo.title">
            </div>
            <div class="description">
                <div><strong>{{previewVideo.title}}</strong></div>
                <div>
                    {{previewVideo}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import debounce from 'lodash.debounce'
    import videosApi from './js/api/videos'

    export default {
        data() {
            return {
                eventBus: new Vue(),
                previewVideo: null,
                previewLoading: false,
                previewError: null,
                videoSelectorModal: null,
            }
        },

        computed: {
            videoUrl: {
                get() {
                    return this.$store.state.videoUrl
                },
                set(value) {
                    this.$store.commit('updateVideoUrl', value)
                }
            }
        },

        methods: {
            browse() {
                // Initialize a Garnish modal
                const $videoSelectorModal = $('<div class="new-videoselectormodal modal"></div>').appendTo(Garnish.$bod);
                const $explorerContainer = $('<div class="new-explorer-container"/>').appendTo($videoSelectorModal),
                    $footer = $('<div class="footer"/>').appendTo($videoSelectorModal),
                    $selectorActions = $('<div class="selector-actions"/>').appendTo($footer);

                this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {
                    visible: false,
                    resizable: false,
                });


                // Mount the explorer app and the video selector actions

                this.$nextTick(() => {
                    const options = {
                        store: this.$store,
                        data: {
                            eventBus: this.eventBus
                        },
                    }

                    new VideoExplorerConstructor(options).$mount($explorerContainer.get(0))
                    new VideoSelectorActionsConstructor(options).$mount($selectorActions.get(0))
                })
            },

            preview:debounce(function(val) {
                this.previewLoading = true
                this.previewError = null
                
                videosApi.getVideo(this.videoUrl)
                    .then((response) => {
                        if (response.data.error) {
                            this.previewLoading = false
                            this.previewVideo = null
                            this.previewError = response.data.error
                        }

                        this.previewLoading = false
                        this.previewVideo = response.data
                    })
            }, 1000)
        },

        mounted() {
            this.eventBus.$on('useSelectedVideo', () => {
                this.videoSelectorModal.hide()
                this.preview()
            })
        }
    }
</script>

<style lang="scss" scoped>
    .videos-vue-field {
        margin-top: 20px;

        .videos-vue-input {
            position: relative;

            .browse-btn {
                position: absolute;
                top: 7px;
                right: 10px;
                font-size: .9em;
            }
        }

        .preview {
            .thumb {
                width: 300px;
                height: 200px;
                background: rgba(0, 0, 0, .7);
                border-radius: 5px;
                margin-right: 24px;

                img {
                    width: 100%;
                }
            }
        }
    }
</style>