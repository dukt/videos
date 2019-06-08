<template>
    <div id="videos">
        <template v-if="$root.loading">
            <div class="spinner"></div>
        </template>
        <template v-else>
            <sidebar></sidebar>

            <div class="v-main">
                <search></search>

                <videos :videos="$root.videos"></videos>
            </div>
        </template>
    </div>
</template>

<script>
    import Sidebar from './js/components/Sidebar'
    import Search from './js/components/Search'
    import Videos from './js/components/Videos'

    export default {
        name: 'videos-app',

        components: {
            Sidebar,
            Search,
            Videos,
        }
    }
</script>

<style lang="scss">
    @import './sass/videos.scss';
</style>