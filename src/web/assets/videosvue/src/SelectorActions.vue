<template>
    <div class="selector-actions">
        <div class="buttons right">
            <div class="btn">Cancel</div>
            <div class="btn submit" :class="{disabled: !hasSelectedVideo}" @click="useSelectedVideo()">Select</div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        computed: {
            hasSelectedVideo() {
                return this.$store.state.selectedVideo
            },
        },

        methods: {
            ...mapActions([
                'updateVideoUrlWithSelectedVideo',
            ]),

            useSelectedVideo() {
                this.updateVideoUrlWithSelectedVideo()
                this.$root.eventBus.$emit('useSelectedVideo')
            }
        }
    }
</script>