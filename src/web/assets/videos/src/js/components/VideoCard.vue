<template>
    <div class="video-card" @click="selectVideo(video)" @dblclick="useVideo(video)" :class="{selected: isVideoSelected}">
        <div class="videos-thumb">
            <img :src="video.thumbnail" :alt="video.title">
            <div class="play" @click="play(video)"></div>
        </div>
        <div class="title">{{video.title}}</div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
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
