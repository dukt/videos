<template>
    <div class="dv-w-full dv-grid dv-grid-cols-3 dv-grid dv-gap-4">
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
