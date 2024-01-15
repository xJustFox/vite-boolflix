<script>
import AppStar from './AppStar.vue';
import { store } from '../../store.js';

export default {
    name:'AppAdvicedTv',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        advicedTv: Object,
        
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="store.getImg(advicedTv.poster_path)" alt="">
            </div>
            <div class="back">
                <div><span class="fw-bold ">Titolo:</span> "{{advicedTv.name}}"</div>
                <div><span class="fw-bold ">Titolo originale:</span> "{{advicedTv.original_name}}"</div>
                <div><span class="fw-bold ">Lingua originale: </span> <img :src="store.getUrlFlag(advicedTv.original_language)" :alt="advicedTv.original_name"></div>
                <AppStar :vote="advicedTv.vote_average" />
                <div><span class="fw-bold ">Descrizione:</span> {{advicedTv.overview}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/card.scss' as *;
    
</style>