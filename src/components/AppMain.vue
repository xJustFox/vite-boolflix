<script>
import AppSingleMovie from './Main/AppSingleMovie.vue';
import AppSingleTv from './Main/AppSingleTv.vue';
import AppAdvicedTv from './Main/AppAdvicedTv.vue';
import AppPopularMovie from './Main/AppPopularMovie.vue';
import AppTopMovie from './Main/AppTopMovie.vue';
import AppJumbo from './Main/AppJumbo.vue';
import { store } from '../store.js';

export default {
    name: 'AppMain',

    data() {
        return {
            store,
        }
    },
    components: {
        AppJumbo,
        AppSingleMovie,
        AppSingleTv,
        AppAdvicedTv,
        AppPopularMovie,
        AppTopMovie,
    }
}
</script>

<template lang="">
    <main>
        <div class="container-fluid p-0 ">

            <!-- Home page -->
            <div class="position-relative" v-show="store.flagSearch">
                <!-- Jumbo -->
                <AppJumbo/>
                <div class="containerFilms">

                    <h3 class="text-white m-0 px-5">Perchè hai guardato Mind Hunter<i class="bi bi-arrow-right text-white px-2"></i></h3>
                    <div class="my-row px-5">
                        <AppAdvicedTv v-for="(obj, index) in store.tvAdviced" :key="index" :advicedTv="obj"/>
                    </div>
                    
                    <!-- Popular Films -->
                    <div class="my-pt">
                        <h3 class="text-white m-0 px-5">I nostri migliori suggerimenti per te<i class="bi bi-arrow-right text-white px-2"></i></h3>
                        <div class="my-row px-5">
                            <AppPopularMovie v-for="(obj, index) in store.moviesPopular" :key="index" :popular="obj"/>
                        </div>
                    </div>
    
                    <!-- Top Rated Films -->
                    <div class="my-pt">
                        <h3 class="text-white m-0 px-5">I titoli del momento<i class="bi bi-arrow-right text-white px-2"></i></h3>
                        <div class="my-row px-5">
                            <AppTopMovie v-for="(obj, index) in store.moviesTop" :key="index" :top="obj"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mainSearch" v-if="!store.flagSearch">

                <!-- Films title -->
                <div class="px-5">
                    <div v-if="store.moviesSearch.length > 0" class="my-default">
                        <h3  class="text-white m-0">Film<i class="bi bi-arrow-right text-white px-2"></i></h3>
                    </div>
                    <h3 v-else class="text-white m-0">Nessun film trovato...</h3>
                </div>

                <!-- Films -->
                <div class="my-row px-5">
                    <AppSingleMovie v-for="(obj, index) in store.moviesSearch" :key="index" :movie="obj"/>
                </div>

                <!-- Tv Series title -->
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


main {
    .containerFilms{
        position: relative;
        bottom: 100px;

        .my-pt{
            margin-top: 65px
        }
    }
    .mainSearch{
        height: 100vh;
        overflow-y: scroll;
        padding: 30px 0;
    }
    .my-row {
        display: flex;
        overflow-x: scroll;
    }
}
</style>