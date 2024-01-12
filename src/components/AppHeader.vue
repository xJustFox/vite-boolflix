<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <header>
        <input class=" form" placeholders="Movies name" v-model="store.searchText">
        <button class="btn btn-sm btn-primary" @click="$emit('button_search')">Search</button>
    </header>
</template>

<style lang="scss" scoped>
    
</style>