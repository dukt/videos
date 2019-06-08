<template>
    <div v-if="currentGateway" class="search">
        <input type="search" class="text fullwidth" :placeholder="'Search '+currentGateway.name+' videos…'"/>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'currentGateway',
            ]),
        }
    }
</script>