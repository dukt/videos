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
    export default {
        computed: {
            currentGatewayHandle: {
                get() {
                    return this.$root.currentGatewayHandle
                },
                set(value) {
                    this.$root.currentGatewayHandle = value
                }
            },

            currentGateway() {
                return this.$root.currentGateway
            },

            gateways() {
                return this.$root.gateways
            }
        },

        methods: {
            getCollectionVideos(collection) {
                this.$root.getVideos(this.currentGatewayHandle, collection.method, collection.options)
            }
        }
    }
</script>