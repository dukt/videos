<template>
    <div class="videos">
        <template v-for="video in videos">
            <video-card :video="video"></video-card>
        </template>
    </div>
</template>

<script>
    import VideoCard from './VideoCard'

    export default {
        components: {
            VideoCard,
        },

        props: {
            videos: {
                type: Array
            }
        }
    }
</script>