<template>
    <div class="videos-thumb" :class="{
            'ring ring-red-500 ring-opacity-80': selected
        }">
        <div class="videos-thumb-image-container">
            <div class="videos-thumb-image"
                 :style="'background-image: url(' + url + ')'"></div>
        </div>

        <div class="duration">
            {{ duration }}
        </div>
        <div class="play" @click.prevent="$emit('playVideo')"></div>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            default: null
        },
        duration: {
            type: String,
            default: null
        },
        selected: {
            type: Boolean,
            default: false
        },
    }
}
</script>
