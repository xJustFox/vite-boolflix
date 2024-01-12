<script>
import AppSingleMovie from './Main/AppSingleMovie.vue';
import AppSingleTv from './Main/AppSingleTv.vue';
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
        AppSingleTv
    }
}
</script>

<template lang="">
    <main class="py-4">
        <div class="container-fluid px-4">
            <div v-if="!store.flagSearch">
                <div class="row flex-wrap gap-2 ">
                    <div class="col-12">MOVIES</div>
                    <AppSingleMovie v-for="(obj, index) in store.moviesSearch" :key="index" :movie="obj"/>
                </div>
                <div class="row flex-wrap gap-2 ">
                    <div class="col-12 mt-5 ">TV SERIES</div>
                    <AppSingleTv v-for="(obj, index) in store.tvSearch" :key="index" :tv="obj"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>