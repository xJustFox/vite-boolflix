<script>
import AppStar from './AppStar.vue';
import { store } from '../../store.js';

export default {
    name:'AppCard',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        media: Object,
        
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="store.getImg(media.img)" alt="">
            </div>
            <div class="back">
                <div><span class="fw-bold ">Titolo:</span> "{{media.name}}"</div>
                <div><span class="fw-bold ">Titolo originale:</span> "{{media.original_name}}"</div>
                <div><span class="fw-bold ">Lingua originale: </span> <img :src="store.getUrlFlag(media.language)" :alt="media.original_name"></div>
                <AppStar :vote="media.vote" />
                <div><span class="fw-bold ">Descrizione:</span> {{media.overview}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/card.scss' as *;
    
</style>