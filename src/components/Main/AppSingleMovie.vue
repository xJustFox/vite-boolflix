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
    computed: {
        getUrlFlag(){
            if (this.movie.original_language == 'en') {
                return `https://flagcdn.com/24x18/gb.png`;
            }
            else if (this.movie.original_language == 'uk'){
                return `https://flagcdn.com/24x18/ua.png`;
            }
            else if (this.movie.original_language == 'ja'){
                return `https://flagcdn.com/24x18/jp.png`;
            }
            else if (this.movie.original_language == 'ko'){
                return `https://flagcdn.com/24x18/kr.png`;
            }
            else if (this.movie.original_language == 'zh'){
                return `https://flagcdn.com/24x18/cn.png`;
            }
            else if (this.movie.original_language == 'hi'){
                return `https://flagcdn.com/24x18/in.png`;
            }
            else if (this.movie.original_language == 'el'){
                return `https://flagcdn.com/24x18/gr.png`;
            }
            else if (this.movie.original_language == 'cs'){
                return `https://flagcdn.com/24x18/pt.png`;
            }
            else if (this.movie.original_language == 'da'){
                return `https://flagcdn.com/24x18/dk.png`;
            }
            return `https://flagcdn.com/24x18/${this.movie.original_language}.png`;
        },
        getImg(){
            return `${store.apiImg}${this.movie.poster_path}`
        },
        
    }
}
</script>

<template lang="">
    <div class="col-2 my-br">
        <div><img class="posterImg" :src="getImg" alt=""></div>
        <div><span class="fw-bold ">titolo:</span> {{movie.title}}</div>
        <div><span class="fw-bold ">titolo originale:</span> {{movie.original_title}}</div>
        <div><span class="fw-bold ">lingua originale: </span> <img class="" :src="getUrlFlag"></div>
        <AppStar :vote="movie.vote_average" />
    </div>
</template>

<style lang="scss">
    
</style>