<template>
    <div class="group" @click="selectVideo(video)" @dblclick="useVideo(video)">
        <thumb :selected="isVideoSelected" :url="video.thumbnail" :duration="video.duration" @playVideo="play(video)"></thumb>
        <div class="mt-2 line-clamp-2">{{video.title}}</div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import Thumb from './Thumb'

    export default {
        components: {
            Thumb,
        },

        props: {
            video: {
                type: Object,
            },
        },

        computed: {
            isVideoSelected() {
                if (!this.$store.state.selectedVideo) {
                    return false
                }

                return this.$store.state.selectedVideo.id === this.video.id
            }
        },

        methods: {
            ...mapActions([
                'selectVideo',
                'updateVideoUrlWithSelectedVideo',
            ]),

            play(video) {
                this.$root.eventBus.$emit('playVideo', {video})
            },

            useVideo(video) {
                this.selectVideo(video)
                this.updateVideoUrlWithSelectedVideo()
                this.$root.eventBus.$emit('useSelectedVideo')
            },
        }
    }
</script>
