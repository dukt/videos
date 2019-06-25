<template>
    <div class="video" @click="select(video)" :class="{selected: isVideoSelected}">
        <div class="thumb">
            <img :src="video.thumbnailSource" :alt="video.title">
            <div class="play" @click="play(video)"></div>
        </div>
        <div class="title">{{video.title}}</div>
    </div>
</template>

<script>
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
            play(video) {
                this.$store.commit('updatePlayingVideo', video)
            },

            select(video) {
                this.$store.commit('updateSelectedVideo', video)
            }
        }
    }
</script>
