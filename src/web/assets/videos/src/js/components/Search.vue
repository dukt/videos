<template>
    <div v-if="currentGateway" class="videos-search">
        <input type="search" class="text fullwidth" v-model="query"
               :placeholder="'Search '+currentGateway.name+' videos…'"
               @input="debouncedSearch" @keyup.enter="search"/>
    </div>
</template>

<script>
    import debounce from 'lodash.debounce'

    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                query: '',
            }
        },

        computed: {
            ...mapGetters([
                'currentGateway',
            ]),

            debouncedSearch() {
                return debounce(() => {
                    this.search()
                }, 1000)
            }
        },

        methods: {
            search() {
                this.debouncedSearch.cancel()

                this.$store.commit('updateSelectedCollection', null)

                this.$store.dispatch('getVideos', {
                        gateway: this.currentGateway.handle,
                        method: 'search',
                        options: {
                            q: this.query
                        },
                    })
                    .catch(() => {
                        this.$store.dispatch('displayError', 'Couldn’t get videos.')
                    })
            }
        }
    }
</script>
