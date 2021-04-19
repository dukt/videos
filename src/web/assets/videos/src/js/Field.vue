<template>
    <div class="videos-vue-field">
        <div class="videos-vue-input relative">
            <input class="text fullwidth" :name="inputName" placeholder="Enter a video URL from YouTube or Vimeo" v-model="videoUrl" @input="preview()">
            <a class="browse-btn absolute top-2.5 right-4 text-xs" href="#" @click.prevent="browse()">Browse videos…</a>
        </div>

        <template v-if="previewLoading">
            <div class="spinner"></div>
        </template>
        <template v-else>
            <p v-if="previewError" class="error">{{previewError}}</p>

            <preview :previewVideo="previewVideo" :previewError="previewError" @playVideo="playVideo" @removeVideo="removeVideo()"></preview>
        </template>
    </div>
</template>

<script>
    /* global VideoExplorerConstructor */
    /* global VideoSelectorActionsConstructor */
    /* global VideoPlayerConstructor */
    /* global Garnish */
    /* global $ */

    import Vue from 'vue'
    import debounce from 'lodash.debounce'
    import videosApi from './api/videos'
    import Preview from './components/Preview'

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
                playerModal: null,
                fieldVariables: null,
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
            },
            inputName() {
                if (!this.fieldVariables) {
                    return null
                }

                return this.fieldVariables.namespaceName
            }
        },

        methods: {
            browse() {
                // Initialize a Garnish modal
                const $videoSelectorModal = $('<div class="new-videoselectormodal modal elementselectormodal"></div>').appendTo(Garnish.$bod)
                const $explorerContainer = $('<div class="new-explorer-container"/>').appendTo($videoSelectorModal),
                    $footer = $('<div class="footer"/>').appendTo($videoSelectorModal),
                    $selectorActions = $('<div class="selector-actions"/>').appendTo($footer)

                this.videoSelectorModal = new Garnish.Modal($videoSelectorModal, {
                    visible: false,
                    resizable: false,
                })


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

            preview:debounce(function() {
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

            playVideo(video) {
                this.eventBus.$emit('playVideo', {video})
            },

            removeVideo() {
                this.videoUrl = null
                this.previewVideo = null
            }
        },

        mounted() {
            // Use selected video
            this.eventBus.$on('useSelectedVideo', () => {
                this.videoSelectorModal.hide()
                this.preview()
            })

            // Use selected video
            this.eventBus.$on('cancel', () => {
                this.videoSelectorModal.hide()
            })

            // Play video
            this.eventBus.$on('playVideo', ({video}) => {
                if (this.videoSelectorModal) {
                    this.videoSelectorModal.hide()
                }

                const $playerModal = $('<div class="videos-player-modal modal"></div>').appendTo(Garnish.$bod)

                const options = {
                    data: function() {
                        return {
                            eventBus: this.eventBus,
                            video: video,
                        }
                    },
                }

                this.playerModal = new VideoPlayerConstructor(options).$mount($playerModal.get(0))

                this.playerModal.$children[0].$on('hide', () => {
                    if (this.videoSelectorModal) {
                        this.videoSelectorModal.show()
                    }

                    this.playerModal.$destroy()
                    this.playerModal = null
                })
            })

            // Field variables
            if (this.$root.fieldVariables) {
                this.fieldVariables = this.$root.fieldVariables

                if (this.fieldVariables.value) {
                    this.$store.commit('updateVideoUrl', this.fieldVariables.value.url)
                    this.previewVideo = this.fieldVariables.value
                }
            }
        }
    }
</script>
