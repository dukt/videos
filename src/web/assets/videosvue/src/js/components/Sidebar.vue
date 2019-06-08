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
                    <template v-for="section in currentGateway.sections">
                        <li class="heading"><span>{{section.name}}</span></li>

                        <template v-for="collection in section.collections">
                            <li>
                                <a href="#" @click.prevent="getCollectionVideos(collection)">{{collection.name}}</a>
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
            getCollectionVideos(collection) {
                this.$store.dispatch('getVideos', {
                    gateway: this.currentGatewayHandle,
                    method: collection.method,
                    options: collection.options,
                })
            }
        }
    }
</script>