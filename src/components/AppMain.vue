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
            <div v-show="store.flagSearch"><h1 class="text-white m-0">
                Cerca il nome di un film o di una serie tv...</h1></div>
            <div v-if="!store.flagSearch">
                <div class="my-row flex-wrap">
                    <div class="col-12">
                        <h1 v-if="store.moviesSearch.length > 0" class="text-white m-0">Film</h1>
                        <h1 v-else class="text-white m-0">Nessun film trovato...</h1>
                    </div>
                    <AppSingleMovie v-for="(obj, index) in store.moviesSearch" :key="index" :movie="obj"/>

                    <div class="col-12 mt-5 ">
                        <h1 v-if="store.moviesSearch.length > 0" class="text-white m-0">Serie Tv</h1>
                        <h1 v-else class="text-white m-0">Nessuna serie tv trovata...</h1>
                    </div>
                    <AppSingleTv v-for="(obj, index) in store.tvSearch" :key="index" :tv="obj"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    
</style>