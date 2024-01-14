import { reactive } from "vue";

export const store = reactive({
    // utilizzare il '?/& query=' per ricercare un film specifico tramite nome
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    // utilizzare il '?/& query=' per ricercare una serie tv specifica tramite nome
    apiSearchTv: 'https://api.themoviedb.org/3/search/tv',
    apiPopularMovie: 'https://api.themoviedb.org/3/movie/popular',
    apiImg: 'https://image.tmdb.org/t/p/w500',
    apiToken: 'api_key=3b5b5dcfa6bfdf7b0d812359db249350',

    moviesPopular: [],
    moviesSearch: [],
    tvSearch: [],
    flagSearch: true,
    flagProfile: true,
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


    // Funzione che sostituisce l'original_language con quello corretto e aggiunge la bandiera
    getUrlFlag(language) {
        let urlImg;

        switch (language) {
            case 'en':
                urlImg = `https://flagcdn.com/24x18/gb.png`;
                break;
            case 'uk':
                urlImg = `https://flagcdn.com/24x18/ua.png`;
                break;
            case 'ja':
                urlImg = `https://flagcdn.com/24x18/jp.png`;
                break;
            case 'ko':
                urlImg = `https://flagcdn.com/24x18/kr.png`;
                break;
            case 'zh':
                urlImg = `https://flagcdn.com/24x18/cn.png`;
                break;
            case 'hi':
                urlImg = `https://flagcdn.com/24x18/in.png`;
                break;
            case 'el':
                urlImg = `https://flagcdn.com/24x18/gr.png`;
                break;
            case 'cs':
                urlImg = `https://flagcdn.com/24x18/pt.png`;
                break;
            case 'da':
                urlImg = `https://flagcdn.com/24x18/dk.png`;
                break;
            default:
                urlImg = `https://flagcdn.com/24x18/${language}.png`;
                break;
        }

        return urlImg
    },
    // Funzione che restituisce l'immagine
    getImg(path) {
        return `${this.apiImg}${path}`
    },
})