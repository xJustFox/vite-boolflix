<script>
import AppSelectProfile from './components/AppSelectProfile.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './store.js';
import axios from 'axios';

export default {
  components:{
    AppSelectProfile,
    AppHeader,
    AppMain
  },
  created() {
    this.getPopular()
    this.getTop()
    this.getAdviced()
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getAdviced(){
      let apiAdvicedTvUrl = `${store.apiAdvicedTv}?${store.apiToken}`;
      // Chiamata API Adviced Series TV
      axios.get(apiAdvicedTvUrl).then((response) => {
        store.tvAdviced = response.data.results;
      });
    },
    getTop(){
      let apiTopMoviesUrl = `${store.apiTopMovie}?${store.apiToken}`;
      // Chiamata API Top Film
      axios.get(apiTopMoviesUrl).then((response) => {
        store.moviesTop = response.data.results;
      });
    },
    getPopular() {
      let apiPopularMoviesUrl = `${store.apiPopularMovie}?${store.apiToken}`;
      // Chiamata API Popular Film
      axios.get(apiPopularMoviesUrl).then((response) => {
        store.moviesPopular = response.data.results;
      });
    },
    getSearch() {
      let apiSearchMoviesUrl = `${store.apiSearchMovie}?${store.apiToken}&query=${store.searchText}`;
      let apiSearchTvUrl = `${store.apiSearchTv}?${store.apiToken}&query=${store.searchText}`
      // Chiamata API Film
      axios.get(apiSearchMoviesUrl).then((response) => {
        store.moviesSearch = response.data.results;
        store.flagSearch = false
      });

      // Chiamata API Serie Tv
      axios.get(apiSearchTvUrl).then((response) => {
        store.tvSearch = response.data.results;
        store.flagSearch = false
      })

      store.searchText = '';
    }
  },
  
}
</script>

<template>
  <div v-if="store.flagProfile">
    <AppSelectProfile/>
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