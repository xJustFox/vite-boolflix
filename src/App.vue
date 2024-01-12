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
    getSearchMovies() {
      let apiSearchUrl = `${store.apiSearchMovie}?${store.apiToken}&query=${store.searchText}`;

      axios.get(apiSearchUrl).then((response) => {
        store.moviesSearch = response.data.results;
        store.flagMoviesSearch = false;
      })
    }
  },
  
}
</script>

<template>
  <AppHeader @button_search="getSearchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use './style/generals.scss' as *;
@use './style//partials/variables' as *;
</style>