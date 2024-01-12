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
    computed: {
        // Funzione per inserire la bandiera
        getUrlFlag(){
            if (this.tv.original_language == 'en') {
                return `https://flagcdn.com/24x18/gb.png`;
            }
            else if (this.tv.original_language == 'uk'){
                return `https://flagcdn.com/24x18/ua.png`;
            }
            else if (this.tv.original_language == 'ja'){
                return `https://flagcdn.com/24x18/jp.png`;
            }
            else if (this.tv.original_language == 'ko'){
                return `https://flagcdn.com/24x18/kr.png`;
            }
            else if (this.tv.original_language == 'zh'){
                return `https://flagcdn.com/24x18/cn.png`;
            }
            else if (this.tv.original_language == 'hi'){
                return `https://flagcdn.com/24x18/in.png`;
            }
            else if (this.tv.original_language == 'el'){
                return `https://flagcdn.com/24x18/gr.png`;
            }
            else if (this.tv.original_language == 'cs'){
                return `https://flagcdn.com/24x18/pt.png`;
            }
            else if (this.tv.original_language == 'da'){
                return `https://flagcdn.com/24x18/dk.png`;
            }
            return `https://flagcdn.com/24x18/${this.tv.original_language}.png`;
        },
        getImg(){
            return `${store.apiImg}${this.tv.poster_path}`
        }
    }
}
</script>

<template lang="">
    <div class="my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="getImg" alt="">
            </div>
            <div class="back cardText">
                <div><span class="fw-bold ">titolo:</span> {{tv.name}}</div>
                <div><span class="fw-bold ">titolo originale:</span> {{tv.original_name}}</div>
                <div><span class="fw-bold ">lingua originale: </span> <img class="" :src="getUrlFlag"></div>
                <AppStar :vote="tv.vote_average" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    
</style>