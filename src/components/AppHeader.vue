<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',

    data() {
        return {
            store,
            scrollPosition: null
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    },
    methods: {
        getHome() {
            store.flagProfile = false;
            store.flagSearch = true;
            store.moviesSearch = [];
            store.tvSearch = [];
        },
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    }
}
</script>

<template lang="">
    <div :class="store.flagSearch == false ? 'my-bgBlack' : '' ">
        <header class="px-5 py-1" :class="{change_color: scrollPosition > 100}" >   
            <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
                
                <div class="container-fluid p-0">
    
                    <!-- Left Content -->
                    <div class="d-flex align-items-center left-content">
                        <a class=" text-decoration-none  logoTitle fs-2" href="">BOOLFLIX</a>
                        
                        <!-- Middle Content < lg -->
                        <div class="d-block d-lg-none">
                            <ul class="navbar-nav me-auto mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle px-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Sfoglia
                                    </a>
                                    <ul class="dropdown-menu position-absolute my-drop">
                                      <li><a class="dropdown-item" href="" >Home</a></li>
                                      <li><a class="dropdown-item" href="#">Serie Tv</a></li>
                                      <li><a class="dropdown-item" href="#">Film</a></li>
                                      <li><a class="dropdown-item" href="#">Nuovi e Popolari</a></li>
                                      <li><a class="dropdown-item" href="#">La mia lista</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <!-- Middle Content -->
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 nav-menu">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" @click="getHome()">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Serie Tv</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Film</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Nuovi e Popolari</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">La mia lista</a>
                            </li>
                        </ul>     
                    </div>
    
                    <!-- Right Content -->
                    <div class="d-flex right-content" role="search">
                        <ul class=" list-unstyled m-0 d-flex ">

                            <!-- Search Bar -->
                            <li class="searchBar">
                                <div class="my-btn" :class="!store.searchAppear ? 'my-btn-active' : ''">
                                    <i class="bi bi-search my-pointer" @click="store.searchAppear = !store.searchAppear"></i>
                                    <input class=" my-input" type="text" placeholder="Search" v-model="store.searchText" @keyup.enter="$emit('button_search')">
                                </div>
                            </li>

                            <!-- Bell -->
                            <li class="mx-3">
                                <div class="my-bell my-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-bell"></i>
                                </div>
                                <!-- Menù Bell -->
                                <ul class="dropdown-menu dropdown-menu-end my-drop-bell my-drop">
                                    <li><button class="dropdown-item" type="button">Action</button></li>
                                    <li><button class="dropdown-item" type="button">Another action</button></li>
                                    <li><button class="dropdown-item" type="button">Something else here</button></li>
                                </ul>
                            </li>
                            <li>
                                <!-- Icon Profile -->
                                <div class="text-white my-pointer" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img class="userImg" src="https://i.pinimg.com/originals/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg" alt="">
                                    <i class="bi bi-caret-down-fill text-white"></i>
                                </div>
                                
                                <!-- Menù Icon Profile -->
                                <ul class="dropdown-menu dropdown-menu-end my-drop">
                                    <li><button class="dropdown-item" type="button">
                                        <img class="userImg" src="https://i.pinimg.com/564x/1b/a2/e6/1ba2e6d1d4874546c70c91f1024e17fb.jpg" alt="">
                                        Profilo 2
                                    </button></li>
                                    <li><button class="dropdown-item" type="button">
                                        <img class="userImg" src="https://i.pinimg.com/564x/b4/0b/51/b40b51418293936a6e0ad09ffa229cb7.jpg" alt="">
                                        Profilo 3
                                    </button></li>
                                    <li><button class="dropdown-item" type="button">
                                        <img class="userImg" src="https://i.pinimg.com/564x/32/3e/cc/323ecca68b7105d23184e783b86b0c5a.jpg" alt="">
                                        Profilo 4
                                    </button></li>
                                    <li><button class="dropdown-item" type="button">
                                        <img class="userImg" src="https://i.pinimg.com/564x/61/54/76/61547625e01d8daf941aae3ffb37f653.jpg" alt="">
                                        Profilo 5
                                    </button></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><button class="dropdown-item" type="button">Esci da Boolflix</button></li>
                                </ul>
                            </li>
                        </ul>
    
                    </div>
                </div>
            </nav>
        </header>
    </div>
    </template>

<style lang="scss" scoped>
@use '../style/partials/variables' as *;

.change_color {
    background-color: $my_black;
}

.my-bgBlack{
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 68px;
    background-color: $my_black;
}

header {
    transition: 0.3s linear;
    background: linear-gradient(0deg, rgba(38,38,38,0.08) 0%, rgba(38,38,38,0.7483368347338936) 100%);
    width: 100%;
    z-index: 1;
    position: fixed;
    top: 0;

    nav {
        height: 60px;

        .left-content {
            .my-drop {
                background-color: transparent;
            }
        }

        .right-content {
            .userImg {
                width: 30px
            }

            .searchBar{
                max-width: 250px;
                height: 29px;
                .my-input {
                    height: 29px;
                    width: 0;
                    border: 0;
                    margin-left: 5px;
                    cursor: default;
                }

                .my-btn,
                .my-input {
                    border: 0;
                    background-color: transparent;
                }
                
                .my-btn-active{
                    padding: 2px 5px;
                    border: 1px solid white;
                    background-color: $my_black;
                    .my-input{
                        cursor: text;
                        transition: 0.3s linear width;
                        width: 200px;
                    }
                    .bi-search::before {
                        padding-top: 0;
                    }
                }
                
                .my-input:focus {
                    outline: none;
                }
    
                .bi-search::before {
                    vertical-align: middle;
                    font-size: x-large;
                    padding-top: 3px;
                }
            }

            .my-bell {
                color: #fff;
                border: 0;
                background: transparent;
            }
            .bi-search{
                color: #fff;
            }

            .my-drop-bell{
                right: 60px;
            }


            .bi-bell::before {
                font-size: x-large;
                vertical-align: middle;
                padding-top: 3px;
            }
            .bi-search:hover, 
            .bi-bell:hover{
                color: rgb(226, 225, 225);
            }

            .bi-caret-down-fill::before {
                padding-left: 5px;
                font-size: x-small;
            }
        }
    }
}
</style>