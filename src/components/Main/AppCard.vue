<script>
import AppStar from './AppStar.vue';
import { store } from '../../store.js';

export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    },
    components: {
        AppStar
    },
    props: {
        media: Object,

    },
    methods: {
        // Funzione che restituisce l'immagine
        getImg(path) {
            return `${store.apiImg}${path}`
        },
        // Funzione che sostituisce l'original_language con quello corretto e aggiunge la bandiera
        getUrlFlag(language) {
            let urlImg;
            switch (language.toLowerCase()) {
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
                    urlImg = `https://flagcdn.com/24x18/${language.toLowerCase()}.png`;
                    break;
            }
            return urlImg
        },
    },
}
</script>

<template lang="">
    <div class="col-6 col-sm-4 col-lg-3 col-xl-2 col-xxl-2 my-col">
        <div class="my-card">
            <div class="front">
                <img class="posterImg" :src="media.img ? `${getImg(media.img)}` : 'https://dessertdivine.com.au/wp-content/uploads/2022/02/Image-Not-Available.png'" alt="">
            </div>
            <div class="back">
                <div><span class="fw-bold ">Titolo:</span> "{{media.name}}"</div>
                <div><span class="fw-bold ">Titolo originale:</span> "{{media.original_name}}"</div>
                <div><span class="fw-bold ">Lingua originale: </span> <img :src="this.getUrlFlag(media.language)" :alt="media.original_name"></div>
                <AppStar :vote="media.vote" />
                <div><span class="fw-bold ">Descrizione:</span> {{media.overview}}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../style/card.scss' as *;
</style>