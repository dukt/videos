<template>
    <div class="selector-actions">
        <div class="buttons right">
            <div class="btn">Cancel</div>
            <div class="btn submit" :class="{disabled: !hasSelectedVideo}" @click="useSelectedVideo()">Select</div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            hasSelectedVideo() {
                return this.$store.state.selectedVideo
            },
        },

        methods: {
            useSelectedVideo() {
                if (!this.$store.state.selectedVideo) {
                    return false
                }

                console.log('this', this.$store.state.selectedVideo)

                this.$store.commit('updateVideoUrl', this.$store.state.selectedVideo.url)
            }
        }
    }
</script>