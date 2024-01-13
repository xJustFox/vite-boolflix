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
    <header class="px-4 py-1">
        
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
                    <button class="my-btn" @click="$emit('button_search')"><i class="bi bi-search"></i></button>
                    <input class=" my-input" type="text" placeholder="Search" v-model="store.searchText">
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
.my-btn{
    padding: 3px 5px;
    border: 1px solid white;
    border-right: 0;
}
.my-input{
    width: 150px;
    border: 1px solid white;
    border-left: 0;    
}

.my-btn,
.my-input{
    height: 30px;
    background-color: black;
}
.my-input:focus {
    outline: none;
}
.bi-search::before {
    vertical-align: top;
    padding: 3px 0;
}

</style>