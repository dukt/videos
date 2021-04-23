<template>
    <div>
        <div class="buttons right">
            <div class="btn" @click="cancel()">Cancel</div>
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
            },

            cancel() {
                this.$root.eventBus.$emit('cancel')
            }
        }
    }
</script>