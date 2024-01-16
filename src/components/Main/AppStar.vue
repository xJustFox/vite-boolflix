<script>
import { store  } from '../../store.js';

export default {
    name: 'AppStar',
    data() {
        return {
            store,
            five: [1,2,3,4,5],
        }
    },
    props: {
        vote: Number,
        
    },
    methods: {
    },
    computed: {
        // Funzione che trasforma il voto da 1 a 10 decimale in un numero intero da 1 a 5  
        getStarVote(){
            return Math.round(this.vote / 2);    
        },
    }
}
</script>

<template lang="">
    <div><span class="fw-bold">voto:</span> 
        <span class="contStar px-2 ">
            <i class="bi-star-fill" :class="i <= getStarVote ? 'goldenStar' : 'grayStar'" v-for="(i, index) in five" :key="index"></i>
        </span>
    </div>
</template>

<style lang="scss" scoped>
    .goldenStar{
        color: goldenrod;
    }
    .grayStar{
        color: gray;
    }
</style>