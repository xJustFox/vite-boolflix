<script>
import { store } from '../store.js';

export default {
    name: 'AppHeader',
    
    data() {
        return {
            store,
        }
    },
}
</script>

<template lang="">
    <header class="px-4 py-1 bg-black ">
        
        <nav class="navbar navbar-expand-lg" data-bs-theme="dark">
            
            <div class="container-fluid p-0">
                <div class="d-flex align-items-center">
                    <a class=" text-decoration-none  logoTitle fs-3" href="#">BOOLFLIX</a>
                    
                    <div class="d-block d-lg-none">
                        <ul class="navbar-nav me-auto mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle p-0 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                  Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                  <li><a class="dropdown-item" href="#">Action</a></li>
                                  <li><a class="dropdown-item" href="#">Another action</a></li>
                                  <li><hr class="dropdown-divider"></li>
                                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
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

                <div class="d-flex" role="search">
                    <input class="form-control form-control-sm  me-2" type="search" placeholder="Search" aria-label="Search" v-model="store.searchText">
                    <button class="btn btn-sm btn-outline-success " type="submit" @click="$emit('button_search')">Search</button>
                </div>

            </div>
        </nav>
        <!-- <div class="container-fluid ">
            <div class="row justify-content-between align-items-center ">
                <div class="col">
                    <span class="logoTitle fs-1">
                        BOOLFLIX
                    </span>
                        
                </div>
                <div class="col d-flex justify-content-end align-items-center ">
                        <ul class="list-unstyled d-flex m-0 text-white">
                            <li>
                                <i class="bi bi-search my-btn" @click="$emit('button_search')"></i>
                                <input class="my-input" v-model="store.searchText">
                            </li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                </div>
            </div>
            
        </div> -->
    </header>
</template>

<style lang="scss" scoped>
nav{
    height: 60px;
}

.bi-search::before {
    height: 20px;
    vertical-align: bottom;
    padding: 2px 5px;
}
.my-input,
.my-btn{
    display: inline-block;
    vertical-align: middle;
    color: white;
    height: 25px;
    background-color: #201f1f;
    border: 0;
}
.ul .li{
    padding: 0 10px;
}
</style>