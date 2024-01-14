<script>
import { store } from '../store.js';

export default {
    name: 'AppSelectProfile',
    data() {
        return {
            store,
        }
    },
    methods: {
        getProfile(){
            store.flagProfile = false;
        }
    },
}
</script>

<template>
    <main>
        <div class="fixed-top logoTitle fs-1 px-4">Boolflix</div>
        <div class="container-fluid h-100">
            <div class="d-flex align-items-center h-100">
                <div>
                    <div class="text-center my-4">
                        <h1 class="title">Chi vuole guardare Boolflix?</h1>
                    </div>
                    <div class="d-flex justify-content-center gap-5">
                        <div class="my-col text-center p-0 " v-for="(item, index) in store.profileList" :key="index" @click="getProfile()">
                            <img :src="item.img" alt="">
                            <div class="text-profile">{{item.name}}</div>
                        </div>
                    </div>
                    <div class="text-center">
                        <button class="my-btn">Gestisci i profili</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

main {
    min-width: 700px;
    padding: 90px;
    color: grey;
    overflow-y: scroll;

    .title {
        font-size: 70px;
        color: white;
    }

    .my-col {
        min-width: 100px;
        max-width: calc(100% / 8);

        img {
            width: 100%;
        }

        .text-profile {
            font-size: 25px;
            margin-top: 15px;
        }

        &:hover {
            color: white;
            cursor: pointer;
        }

        &:hover img {
            transform: scale(1.05);
            border: 3px solid white;
        }
    }

    .my-btn {
        margin-top: 120px;
        font-size: 25px;
        padding: 10px 30px;
        color: gray;
        border-color: gray;
        background-color: $my_black;

        &:hover {
            color: white;
            border-color: white;
        }
    }
}
</style>