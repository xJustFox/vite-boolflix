<script>
export default {
    name:'AppSingleMovie',
    data() {
        return {
        }
    },
    props: {
        movie: Object,
        
    }
}
</script>

<template lang="">
    <div class="col-2">
        <div><span class="fw-bold ">titolo:</span> {{movie.title}}</div>
        <div><span class="fw-bold ">titolo originale:</span> {{movie.original_title}}</div>
        <div><span class="fw-bold ">lingua originale:</span> {{movie.original_language}}</div>
        <div><span class="fw-bold ">voto:</span> {{movie.vote_average}}</div>
    </div>
</template>

<style lang="scss">
    
</style>