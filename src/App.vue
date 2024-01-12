<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './store.js';
import axios from 'axios';

export default {
  components:{
    AppHeader,
    AppMain
  },
  created() {

  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getSearch() {
      let apiSearchMoviesUrl = `${store.apiSearchMovie}?${store.apiToken}&query=${store.searchText}`;
      let apiSearchTvUrl = `${store.apiSearchTv}?${store.apiToken}&query=${store.searchText}`

      // Chiamata API Film
      axios.get(apiSearchMoviesUrl).then((response) => {
        store.moviesSearch = response.data.results;
        store.flagSearch = false;
      });

      // Chiamata API Serie Tv
      axios.get(apiSearchTvUrl).then((response) => {
        store.tvSearch = response.data.results;
        store.flagSearch = false;
      })
    }
  },
  
}
</script>

<template>
  <AppHeader @button_search="getSearch" />
  <AppMain />
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style//partials/variables' as *;
</style>