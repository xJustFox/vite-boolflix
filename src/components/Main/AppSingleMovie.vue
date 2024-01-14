<script>
import AppStar from './AppStar.vue';
import { store  } from '../../store.js';

export default {
    name:'AppSingleMovie',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        movie: Object,
        
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="store.getImg(movie.poster_path)" alt="">
            </div>
            <div class="back">
                <div><span class="fw-bold z-0">titolo:</span> "{{movie.title}}"</div>
                <div><span class="fw-bold ">titolo originale:</span> "{{movie.original_title}}"</div>
                <div><span class="fw-bold ">lingua originale: </span> <img :src="store.getUrlFlag(movie.original_language)" :alt="movie.original_name"></div>
                <AppStar :vote="movie.vote_average" />
                <div><span class="fw-bold ">Descrizione:</span> {{movie.overview}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/card.scss' as *;
    
</style>