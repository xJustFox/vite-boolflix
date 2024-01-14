<script>
import AppStar from './AppStar.vue';
import { store  } from '../../store.js';

export default {
    name:'AppPopularMovie',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        popular: Object,
        
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="store.getImg(popular.poster_path)" alt="">
            </div>
            <div class="back cardText">
                <div><span class="fw-bold z-0">titolo:</span> "{{popular.title}}"</div>
                <div><span class="fw-bold ">titolo originale:</span> "{{popular.original_title}}"</div>
                <div><span class="fw-bold ">lingua originale: </span> <img class="" :src="store.getUrlFlag(popular.original_language)"></div>
                <AppStar :vote="popular.vote_average" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>