<template>
    <div class="videos">
        <template v-for="(video, videoKey) in videos">
            <video-card :key="videoKey" :video="video"></video-card>
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
