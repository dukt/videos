<template>
    <div class="sidebar">
        <div class="px-2">
            <div class="select fullwidth">
                <select v-model="currentGatewayHandle">
                    <option v-for="(gateway, gatewayKey) in gateways" :value="gateway.handle" :key="`gateway-${gatewayKey}`">{{gateway.name}}</option>
                </select>
            </div>
        </div>

        <nav>
            <ul>
                <template v-if="currentGateway">
                    <template v-for="(section, sectionKey) in currentGateway.sections">
                        <li class="heading" :key="`section-${sectionKey}`"><span>{{section.name}}</span></li>

                        <template v-for="(collection, collectionKey) in section.collections">
                            <li :key="`collection-${sectionKey}-${collectionKey}`">
                                <a href="#" :class="{sel: isCollectionSelected(sectionKey, collectionKey)}" @click.prevent="handleCollectionClick(sectionKey, collectionKey, collection)">{{collection.name}}</a>
                            </li>
                        </template>
                    </template>
                </template>
            </ul>
        </nav>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {

        computed: {

            ...mapState({
                gateways: state => state.gateways,
                selectedCollection: state => state.selectedCollection,
            }),

            ...mapGetters([
                'currentGateway',
            ]),

            currentGatewayHandle: {
                get() {
                    return this.$store.state.currentGatewayHandle
                },
                set(value) {
                    this.$store.commit('updateCurrentGatewayHandle', value)
                }
            },
        },

        methods: {
            handleCollectionClick(sectionKey, collectionKey, collection) {
                const selectedCollection = this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)

                this.$store.commit('updateSelectedCollection', selectedCollection)

                this.$store.dispatch('getVideos', {
                    gateway: this.currentGatewayHandle,
                    method: collection.method,
                    options: collection.options,
                })
                    .catch(() => {
                        this.$store.dispatch('displayError', 'Couldn’t get videos.')
                    })
            },

            isCollectionSelected(sectionKey, collectionKey) {
                if (this.selectedCollection !== this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)) {
                    return false
                }

                return true
            },
        }
    }
</script>