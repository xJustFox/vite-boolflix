<script>
import AppStar from './AppStar.vue';
import { store  } from '../../store.js';

export default {
    name:'AppSingleTv',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        tv: Object,
        
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="store.getImg(tv.poster_path)" alt="">
            </div>
            <div class="back">
                <div><span class="fw-bold ">titolo:</span> "{{tv.name}}"</div>
                <div><span class="fw-bold ">titolo originale:</span> "{{tv.original_name}}"</div>
                <div><span class="fw-bold ">lingua originale: </span> <img :src="store.getUrlFlag(tv.original_language)" :alt="tv.original_name"></div>
                <AppStar :vote="tv.vote_average" />
                <div><span class="fw-bold ">Descrizione:</span> {{tv.overview}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/card.scss' as *;
    
</style>