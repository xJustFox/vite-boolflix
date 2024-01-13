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
    <header class="px-4 py-1 bg-black ">
        <div class="container-fluid ">
            <div class="row justify-content-between align-items-center ">
                <div class="col">
                    <span class="logoTitle fs-1">
                        BOOLFLIX
                    </span>
                        
                </div>
                <div class="col d-flex justify-content-end ">
                    <input class="m-2 " v-model="store.searchText">
                    <button class="m-2" @click="$emit('button_search')">Search</button>
                </div>
            </div>
            
        </div>
    </header>
</template>

<style lang="scss" scoped>
    
</style>