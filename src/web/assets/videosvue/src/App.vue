<template>
    <div id="videos">
        <template v-if="loading">
            <div class="spinner"></div>
        </template>
        <template v-else>
            <sidebar></sidebar>

            <div class="v-main">
                <search></search>

                <template v-if="videosLoading">
                    <div class="spinner"></div>
                </template>
                <template v-else>
                    <videos :videos="videos"></videos>
                </template>
            </div>
        </template>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Sidebar from './js/components/Sidebar'
    import Search from './js/components/Search'
    import Videos from './js/components/Videos'

    export default {
        name: 'videos-app',

        components: {
            Sidebar,
            Search,
            Videos,
        },

        data() {
            return {
                loading: false,
            }
        },

        computed: {
            ...mapState({
                currentGatewayHandle: state => state.currentGatewayHandle,
                gateways: state => state.gateways,
                videos: state => state.videos,
                videosLoading: state => state.videosLoading,
            }),
        },

        mounted() {
            this.loading = true

            this.$store.dispatch('getGateways')
                .then(() => {
                    this.loading = false

                    if (this.gateways.length > 0) {
                        this.$store.commit('updateCurrentGatewayHandle', this.gateways[0].handle)

                    }
                })
        }
    }
</script>

<style lang="scss">
    @import './sass/videos.scss';
</style>