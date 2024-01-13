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
            <div class="back cardText">
                <div><span class="fw-bold ">titolo:</span> "{{tv.name}}"</div>
                <div><span class="fw-bold ">titolo originale:</span> "{{tv.original_name}}"</div>
                <div><span class="fw-bold ">lingua originale: </span> <img class="" :src="store.getUrlFlag(tv.original_language)"></div>
                <AppStar :vote="tv.vote_average" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>