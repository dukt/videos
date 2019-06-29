<template>
    <div class="videos-vue-field">
        <div class="videos-vue-input">
            <input class="text fullwidth" placeholder="Enter a video URL from YouTube or Vimeo" v-model="videoUrl" @input="preview()">
            <a class="browse-btn" href="#" @click.prevent="browse()">Browse videos…</a>
        </div>

        <template v-if="previewLoading">
            <div class="spinner"></div>
        </template>
        <template v-else>
            <p v-if="previewError" class="error">{{previewError}}</p>

            <preview :previewVideo="previewVideo" :previewError="previewError" @removeVideo="removeVideo()"></preview>
        </template>
    </div>
</template>

<script>
    import debounce from 'lodash.debounce'
    import videosApi from './js/api/videos'
    import Preview from './js/components/Preview'

    export default {
        components: {
            Preview
        },

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
            }, 1000),

            removeVideo() {
                this.videoUrl = null
                this.previewVideo = null
            }
        },

        mounted() {
            this.eventBus.$on('useSelectedVideo', () => {
                this.videoSelectorModal.hide()
                this.preview()
            })

            if (this.$root.fieldValue) {
                this.$store.commit('updateVideoUrl', this.$root.fieldValue.url)
                this.previewVideo = this.$root.fieldValue
            }
        }
    }
</script>

<style lang="scss">
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
    }
</style>