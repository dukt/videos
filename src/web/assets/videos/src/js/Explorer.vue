<template>
    <div id="videos" class="h-full">
        <div class="body" :class="{
            'has-sidebar': !loading,
            'flex justify-center': loading
        }">
            <div :class="{
            'content has-sidebar': !loading,
            '': loading,
        }">
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
                        const selectedCollection = this.getCollectionUniqueKey(currentGateway.handle, 0, 0)
                        this.$store.commit('updateSelectedCollection', selectedCollection)

                        this.$store.commit('updateVideosLoading', true)
                        this.$store.dispatch('getVideos', {
                                gateway: currentGateway.handle,
                                method: collection.method,
                                options: collection.options,
                            })
                            .then(() => {
                                this.$store.commit('updateVideosLoading', false)
                            })
                            .catch(() => {
                                this.$store.commit('updateVideosLoading', false)
                                this.$store.dispatch('displayError', 'Couldn’t get videos.')
                            })
                    }
                })
        }
    }
</script>
