<template>
    <div class="videos-vue-field">
        <div class="videos-vue-input">
            <input class="text fullwidth" placeholder="Enter a video URL from YouTube or Vimeo" v-model="videoUrl">
            <a class="browse-btn" href="#" @click.prevent="browse()">Browse videos…</a>
        </div>

        <div class="preview"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                    }

                    new VideoExplorerConstructor(options).$mount($explorerContainer.get(0))
                    new VideoSelectorActionsConstructor(options).$mount($selectorActions.get(0))
                })
            }
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
            width: 300px;
            height: 200px;
            background: rgba(0, 0, 0, .7);
            border-radius: 5px;
        }
    }
</style>