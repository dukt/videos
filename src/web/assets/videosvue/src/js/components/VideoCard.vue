<template>
    <div class="video">
        <div class="thumb">
            <img :src="video.thumbnailSource" :alt="video.title">
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
        }
    }
</script>