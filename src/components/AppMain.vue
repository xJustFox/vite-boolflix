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
    <main class="py-5">
        <div class="container-fluid px-4 ">
            <div v-if="!store.flagSearch">
                <div class="my-row flex-wrap">
                    <div class="col-12">
                        <h1 class="text-white m-0">MOVIES</h1>
                    </div>
                    <AppSingleMovie v-for="(obj, index) in store.moviesSearch" :key="index" :movie="obj"/>
                </div>
                <div class="my-row flex-wrap">
                    <div class="col-12 mt-5 ">
                        <h1 class="text-white m-0">TV SERIES</h1>
                    </div>
                    <AppSingleTv v-for="(obj, index) in store.tvSearch" :key="index" :tv="obj"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>