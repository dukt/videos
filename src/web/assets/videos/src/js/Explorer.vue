<template>
    <div id="videos" class="videos-explorer h-full">
        <div class="body has-sidebar">
            <div class="content has-sidebar">
                <template v-if="loading">
                    <div class="spinner"></div>
                </template>
                <template v-else>
                    <sidebar></sidebar>

                    <div class="main">
                        <search class="mb-6"></search>

                        <template v-if="videosLoading">
                            <div class="spinner"></div>
                        </template>
                        <template v-else>
                            <videos :videos="videos"></videos>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import utils from './helpers/utils'
    import Sidebar from './components/Sidebar'
    import Search from './components/Search'
    import Videos from './components/Videos'

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
                        const currentGateway = this.gateways[0]
                        this.$store.commit('updateCurrentGatewayHandle', currentGateway.handle)

                        const collection = currentGateway.sections[0].collections[0]
                        const selectedCollection = utils.getCollectionUniqueKey(currentGateway.handle, 0, 0)
                        this.$store.commit('updateSelectedCollection', selectedCollection)

                        this.$store.dispatch('getVideos', {
                                gateway: currentGateway.handle,
                                method: collection.method,
                                options: collection.options,
                            })
                            .catch(() => {
                                this.$store.dispatch('displayError', 'Couldn’t get videos.')
                            })
                    }
                })
        }
    }
</script>
