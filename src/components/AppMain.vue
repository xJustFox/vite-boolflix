<script>
import AppSingleMovie from './Main/AppSingleMovie.vue';
import {store} from '../store.js';

export default {
    name: 'AppMain',

    data() {
        return {
            store,
        }
    },
    components: {
        AppSingleMovie,
    }
}
</script>

<template lang="">
    <main class="pt-4">
        <div class="container-fluid px-4">
            <div class="row justify-content-center  flex-wrap gap-2 ">
                <AppSingleMovie v-for="(obj, index) in store.moviesSearch" :key="index" :movie="obj"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>