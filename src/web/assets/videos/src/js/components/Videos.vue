<template>
    <div class="w-full grid grid-cols-3 grid gap-4">
        <template v-for="(video, videoKey) in videos">
            <video-card :key="`video-${videoKey}`" :video="video"></video-card>
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
