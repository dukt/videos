<template>
    <div class="videos-player">
        <!-- Embed -->
        <!-- return '<iframe src="'.$embedUrl.'"'.$embedAttributesString.'></iframe>'; -->
        <iframe :src="video.embedUrl"></iframe>
    </div>
</template>

<script>
    export default {
        props: {
            video: {
                type: Object,
            }
        }
    }
</script>