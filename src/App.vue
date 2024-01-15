<script>
import AppSelectProfile from './components/AppSelectProfile.vue';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './store.js';
import axios from "axios";

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
    getAdviced() {
      // Chiamata API Adviced Tv Series 
      this.getCallApi(store.apiAdvicedTv, store.tvAdviced, 'tv');
    },
    getTop() {
      // Chiamata API Top Film
      this.getCallApi(store.apiTopMovie, store.moviesTop, 'movie');
    },
    getPopular() {
      // Chiamata API Popular Film
      this.getCallApi(store.apiPopularMovie, store.moviesPopular, 'movie');
    },
    getSearch() {
      store.tvSearch = [];
      store.moviesSearch = [];

      // Chiamata API Film
      this.getCallApi(store.apiSearchMovie, store.moviesSearch, 'movieSrc');

      // Chiamata API Tv Serie 
      this.getCallApi(store.apiSearchTv, store.tvSearch, 'tvSrc');

      store.flagSearch = false
      store.searchText = '';
    },
    // Funzione che chiama l'Api
    getCallApi(url, mainArr, media) {
      let apiUrl;

      if (media == 'movieSrc' || media == 'tvSrc') {
        apiUrl = `${url}?${store.apiToken}&query=${store.searchText}&${store.apiLanguage}`;
      }
      else {
        apiUrl = `${url}?${store.apiToken}&${store.apiLanguage}`;
      }

      axios.get(apiUrl).then((response) => {
        let arr = response.data.results;

        if (media == 'tv' || media == 'tvSrc') {
          arr.forEach(element => {
            let obj = {
              name: element.name,
              original_name: element.original_name,
              img: element.poster_path,
              language: element.origin_country[0],
              vote: element.vote_average,
              overview: element.overview,
            }

            return mainArr.push(obj);
          });
        }
        else {
          arr.forEach(element => {
            let obj = {
              name: element.title,
              original_name: element.original_title,
              img: element.poster_path,
              language: element.original_language,
              vote: element.vote_average,
              overview: element.overview,
            }

            return mainArr.push(obj);
          });
        }
      });
    },
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