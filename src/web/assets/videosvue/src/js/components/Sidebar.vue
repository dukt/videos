<template>
    <div class="sidebar">
        <div class="select fullwidth">
            <select v-model="currentGatewayHandle">
                <option v-for="gateway in gateways" :value="gateway.handle">{{gateway.name}}</option>
            </select>
        </div>

        <nav>
            <ul>
                <template v-if="currentGateway">
                    <template v-for="(section, sectionKey) in currentGateway.sections">
                        <li class="heading"><span>{{section.name}}</span></li>

                        <template v-for="(collection, collectionKey) in section.collections">
                            <li>
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

        data() {
            return {
                selectedCollection: null,
            }
        },

        computed: {

            ...mapState({
                gateways: state => state.gateways,
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
                this.selectedCollection = this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)

                this.$store.dispatch('getVideos', {
                    gateway: this.currentGatewayHandle,
                    method: collection.method,
                    options: collection.options,
                })
                    .catch((error) => {
                        this.$store.dispatch('displayError', 'Couldn’t get videos.')
                    })
            },

            isCollectionSelected(sectionKey, collectionKey) {
                if (this.selectedCollection !== this.getCollectionUniqueKey(this.currentGatewayHandle, sectionKey, collectionKey)) {
                    return false
                }

                return true
            },

            getCollectionUniqueKey(gateway, sectionKey, collectionKey) {
                return gateway + ':' + sectionKey + ':' + collectionKey
            }
        }
    }
</script>