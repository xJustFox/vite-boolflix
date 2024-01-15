import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    apiAdvicedTv: 'https://api.themoviedb.org/3/tv/67744/similar',
    apiPopularMovie: 'https://api.themoviedb.org/3/tv/popular',
    apiTopMovie: 'https://api.themoviedb.org/3/movie/top_rated',

    // utilizzare il '?/& query=' per ricercare un film specifico tramite nome
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    // utilizzare il '?/& query=' per ricercare una serie tv specifica tramite nome
    apiSearchTv: 'https://api.themoviedb.org/3/search/tv',

    apiImg: 'https://image.tmdb.org/t/p/w500',
    apiToken: 'api_key=3b5b5dcfa6bfdf7b0d812359db249350',
    apiLanguage: 'language=it-IT',

    tvAdviced: [],
    moviesPopular: [],
    moviesTop: [],
    moviesSearch: [],
    tvSearch: [],
    flagSearch: true,
    flagProfile: true,
    searchAppear: true,
    searchText: '',

    profileList: [
        {
            name: 'Profile 1',
            img: 'https://i.pinimg.com/originals/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg',
        },
        {
            name: 'Profile 2',
            img: 'https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg',
        },
        {
            name: 'Profile 3',
            img: 'https://i.pinimg.com/564x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg',
        },
        {
            name: 'Profile 4',
            img: 'https://i.pinimg.com/564x/32/3e/cc/323ecca68b7105d23184e783b86b0c5a.jpg',
        },
        {
            name: 'Profile 5',
            img: 'https://i.pinimg.com/564x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg',
        },
    ],
})