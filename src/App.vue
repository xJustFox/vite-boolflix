<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './main.js';
import axios from 'axios';

export default {
  data() {
    return {
      store,
    }
  },
  components:{
    AppHeader,
    AppMain
  }
  
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './style/generals.scss' as *;
@use './style//partials/variables' as *;
</style>