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
    <main class="py-2">
        <div class="container-fluid p-0 ">
            <div class="px-5" v-show="store.flagSearch">
                <h3 class="text-white m-0">Cerca il nome di un film o di una serie tv...</h3>
            </div>

            <div v-if="!store.flagSearch">

                <div  class="px-5">
                    <div v-if="store.moviesSearch.length > 0" class="my-default">
                        <h3  class="text-white m-0">Film<i class="bi bi-arrow-right text-white px-2"></i></h3>
                    </div>
                    <h3 v-else class="text-white m-0">Nessun film trovato...</h3>
                </div>

                <!-- Films -->
                <div class="my-row px-5">
                    <AppSingleMovie v-for="(obj, index) in store.moviesSearch" :key="index" :movie="obj"/>
                </div>

                <div class="mt-5 px-5">
                    <div v-if="store.tvSearch.length > 0" class="my-default"  >
                        <h3 class="text-white m-0">Serie Tv<i class="bi bi-arrow-right text-white px-2"></i></h3>
                    </div>
                    <h3 v-else class="text-white m-0">Nessuna serie tv trovata...</h3>
                </div>

                <!-- Tv Series -->
                <div class="my-row px-5">
                    <AppSingleTv v-for="(obj, index) in store.tvSearch" :key="index" :tv="obj"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.bi-arrow-right::before {
    font-size: x-large;
  }
    
</style>