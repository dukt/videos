<template>
    <div ref="modal" class="videos-player-modal modal">
        <div class="videos-player">
            <div v-html="embed"></div>
        </div>
    </div>
</template>

<script>
    import videosApi from './js/api/videos'

    export default {
        data() {
            return {
                modal: null,
                embed: null,
            }
        },

        mounted() {
            const video = this.$root.video

            videosApi.getVideoEmbedHtml(video)
                .then((response) => {
                    this.embed = response.data.html
                })

            this.modal = new Garnish.Modal(this.$refs.modal, {
                resizable: false,

                onHide: function() {
                    this.$emit('hide')
                }.bind(this)
            })
        },

        destroyed() {
            this.modal.$shade[0].remove()
            this.$el.remove()
        }
    }
</script>
