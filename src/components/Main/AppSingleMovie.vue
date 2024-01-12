<script>
import { store  } from '../../store.js';

export default {
    name:'AppSingleMovie',
    data() {
        return {
            store,
        }
    },
    props: {
        movie: Object,
        
    },
    computed: {
        getUrlFlag(){
            if (this.movie.original_language != 'en') {
                return `https://flagcdn.com/24x18/${this.movie.original_language}.png`
            }

            return `https://flagcdn.com/24x18/gb.png`
        },
        getImg(){
            return `${store.apiImg}${this.movie.poster_path}`
        }
    }
}
</script>

<template lang="">
    <div class="col-2 my-br">
        <div><img class="posterImg" :src="getImg" alt=""></div>
        <div><span class="fw-bold ">titolo:</span> {{movie.title}}</div>
        <div><span class="fw-bold ">titolo originale:</span> {{movie.original_title}}</div>
        <div><span class="fw-bold ">lingua originale: </span> <img class="" :src="getUrlFlag"></div>
        <div><span class="fw-bold ">voto:</span> {{movie.vote_average}}</div>
    </div>
</template>

<style lang="scss">
    
</style>