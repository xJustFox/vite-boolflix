<script>
import AppStar from './AppStar.vue';
import { store } from '../../store.js';

export default {
    name:'AppTopMovie',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        top: Object,
        
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="store.getImg(top.poster_path)" alt="">
            </div>
            <div class="back">
                <div><span class="fw-bold ">Titolo:</span> "{{top.title}}"</div>
                <div><span class="fw-bold ">Titolo originale:</span> "{{top.original_title}}"</div>
                <div><span class="fw-bold ">Lingua originale: </span> <img :src="store.getUrlFlag(top.original_language)" :alt="top.original_name"></div>
                <AppStar :vote="top.vote_average" />
                <div><span class="fw-bold ">Descrizione:</span> {{top.overview}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/card.scss' as *;
    
</style>