<script>
import { store  } from '../../store.js';

export default {
    name:'AppSingleTv',
    data() {
        return {
            store,
        }
    },
    props: {
        tv: Object,
        
    },
    computed: {
        // Funzione per inserire la bandiera
        getUrlFlag(){
            if (this.tv.original_language != 'en') {
                return `https://flagcdn.com/24x18/${this.tv.original_language}.png`
            }

            return `https://flagcdn.com/24x18/gb.png`
        },
        getImg(){
            return `${store.apiImg}${this.tv.poster_path}`
        }
    }
}
</script>

<template lang="">
    <div class="col-2 my-br">
        <div><img class="posterImg" :src="getImg" alt=""></div>
        <div><span class="fw-bold ">titolo:</span> {{tv.name}}</div>
        <div><span class="fw-bold ">titolo originale:</span> {{tv.original_name}}</div>
        <div><span class="fw-bold ">lingua originale: </span> <img class="" :src="getUrlFlag"></div>
        <div><span class="fw-bold ">voto:</span> {{tv.vote_average}}</div>
    </div>
</template>

<style lang="scss">
    
</style>