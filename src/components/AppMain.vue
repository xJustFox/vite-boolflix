<script>
import AppCard from './Main/AppCard.vue';
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
        AppCard,
    }
}
</script>

<template lang="">
    <main>
        <div class="container-fluid p-0 ">

            <!-- Home page -->
            <div class="position-relative" v-if="store.flagSearch">
                <!-- Jumbo -->
                <AppJumbo/>
                <div class="containerFilms">

                    <h3 class="text-white m-0 px-5">Perchè hai guardato Mind Hunter<i class="bi bi-arrow-right text-white px-2"></i></h3>
                    <div class="my-row px-5">
                        <AppCard v-for="(obj, index) in store.tvAdviced" :key="index" :media="obj"/>
                    </div>
                    
                    <!-- Popular Films -->
                    <div class="my-pt">
                        <h3 class="text-white m-0 px-5">I nostri migliori suggerimenti per te<i class="bi bi-arrow-right text-white px-2"></i></h3>
                        <div class="my-row px-5">
                            <AppCard v-for="(obj, index) in store.moviesPopular" :key="index" :media="obj"/>
                        </div>
                    </div>
    
                    <!-- Top Rated Films -->
                    <div class="my-pt">
                        <h3 class="text-white m-0 px-5">I titoli del momento<i class="bi bi-arrow-right text-white px-2"></i></h3>
                        <div class="my-row px-5">
                            <AppCard v-for="(obj, index) in store.moviesTop" :key="index" :media="obj"/>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search Main Page -->
            <div class="mainSearch" v-else>

                <!-- Films title -->
                <div class="px-5">
                    <div v-if="store.moviesSearch.length > 0" class="my-default">
                        <h3  class="text-white m-0">Film<i class="bi bi-arrow-right text-white px-2"></i></h3>
                    </div>
                    <h3 v-else class="text-white m-0">Nessun film trovato...</h3>
                </div>

                <!-- Films -->
                <div class="my-row px-5">
                    <AppCard v-for="(obj, index) in store.moviesSearch" :key="index" :media="obj"/>
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
                    <AppCard v-for="(obj, index) in store.tvSearch" :key="index" :media="obj"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    .containerFilms {
        position: relative;
        bottom: 100px;

        .my-pt {
            margin-top: 65px
        }
    }

    .mainSearch {
        height: 100vh;
        overflow-y: scroll;
        padding-top: 80px;
        padding-bottom: 30px;
    }

    .my-row {
        display: flex;
        overflow-x: scroll;
    }
}
</style>