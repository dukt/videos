<template>
    <div class="group" @click="selectVideo(video)" @dblclick="useVideo(video)">
        <div class="videos-thumb group-hover:ring group-hover:ring-red-500 group-hover:ring-opacity-80" :class="[{
            'ring ring-red-500 ring-opacity-80': isVideoSelected
        }]">
            <img :src="video.thumbnail" :alt="video.title">
            <div class="play" @click="play(video)"></div>
        </div>
        <div>{{video.title}}</div>
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
