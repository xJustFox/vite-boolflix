<script>
import AppCard from './AppCard.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { store } from '../../store';

export default {
    name: 'AppCarousel',
    data() {
        return {
            store,
            breakpoints: {

                576: {
                    itemsToShow: 2.3,
                    snapAlign: 'start',
                },
                // 700px and up
                768: {
                    itemsToShow: 3.3,
                    snapAlign: 'start',
                },
                // 1024 and up
                992: {
                    itemsToShow: 5.3,
                    snapAlign: 'start',
                },
                1200: {
                    itemsToShow: 6.3,
                    snapAlign: 'start',
                }
            },
        }
    },
    components: {
        AppCard,
        Carousel,
        Slide,
    },
    props: {
        arrayMedia: Array,

    },
    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
    },
}
</script>

<template lang="">
    <div class="px-5 position-relative w-100">

        <Carousel ref="carousel" :wrapAround="true" :breakpoints="breakpoints">
            <Slide v-for="slide in arrayMedia" :key="slide">
                <AppCard :media="slide"/>
            </Slide>
        </Carousel>

        <div class="btnPrev" @click="prev"><i class="bi bi-chevron-left"></i></div>
        <div class="btnNext" @click="next"><i class="bi bi-chevron-right"></i></div>
    </div>
</template>

<style lang="scss" scoped>
.btnNext,
.btnPrev {
    position: absolute;
    top: 50%;
    border: 1px solid gray;
    background-color: rgba(44, 44, 44, 0.506);

    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }

    .bi-chevron-right::before,
    .bi-chevron-left::before {
        font-size: 35px;
        color: white;
        vertical-align: middle;
    }
}

.btnNext {
    right: 25px;
}

.btnPrev {
    left: 25px;
}
</style>