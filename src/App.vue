<script>
import AppSelectProfile from './components/AppSelectProfile.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './store.js';

export default {
  components: {
    AppSelectProfile,
    AppHeader,
    AppMain
  },
  created() {
    this.getAdviced()
    this.getTop()
    this.getPopular()
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getAdviced(){
      // Chiamata API Adviced Tv Series 
      store.getCallApi(store.apiAdvicedTv, store.tvAdviced, 'tv');
    },
    getTop(){
      // Chiamata API Top Film
      store.getCallApi(store.apiTopMovie, store.moviesTop, 'movie');
    },
    getPopular() {
      // Chiamata API Popular Film
      store.getCallApi(store.apiPopularMovie, store.moviesPopular, 'movie');
    },
    getSearch() {
      store.tvSearch = []; 
      store.moviesSearch = [];
      
      // Chiamata API Film
      store.getCallApi(store.apiSearchMovie, store.moviesSearch, 'movieSrc');
      
      // Chiamata API Tv Serie 
      store.getCallApi(store.apiSearchTv, store.tvSearch, 'tvSrc');
      
      store.flagSearch = false
      store.searchText = '';
    }
  },

}
</script>

<template>
  <div v-if="store.flagProfile">
    <AppSelectProfile />
  </div>
  <div v-else>
    <AppHeader @button_search="getSearch" />
    <AppMain />
  </div>
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style//partials/variables' as *;
</style>