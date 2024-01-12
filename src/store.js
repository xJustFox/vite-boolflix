import { reactive  } from "vue";

export const store = reactive({
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    // utilizzare il '?/& query=' per ricercare un film specifico tramite nome
    apiToken: 'api_key=3b5b5dcfa6bfdf7b0d812359db249350',

    moviesSearch: [],
    flagMoviesSearch: true,
    searchText: '', 
})