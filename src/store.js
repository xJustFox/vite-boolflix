import { reactive } from "vue";

export const store = reactive({
    // utilizzare il '?/& query=' per ricercare un film specifico tramite nome
    apiSearchMovie: 'https://api.themoviedb.org/3/search/movie',
    // utilizzare il '?/& query=' per ricercare una serie tv specifica tramite nome
    apiSearchTv: 'https://api.themoviedb.org/3/search/tv',
    apiImg: 'https://image.tmdb.org/t/p/w500',
    apiToken: 'api_key=3b5b5dcfa6bfdf7b0d812359db249350',

    moviesSearch: [],
    tvSearch: [],
    flagSearch: true,
    searchText: '',


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
    }
})