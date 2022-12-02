<script setup>
import { ref, computed } from 'vue';
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="menuContainer">
    <RouterLink to="/" class="menuButton">Accueil</RouterLink>
    <img src="../../icon/fast-forward-black.png" class="next" alt="" />
    <RouterLink to="/client" class="menuButton">Création d'un propriétaire</RouterLink>
</div>
<router-view></router-view>
</template>

<style>
.menuContainer {
    display: flex;
    align-items: center;
}

.menuButton {
    display:inline-block;
    text-decoration : none;

    font-family: inter-regular, sans-serif;
    font-size: 1em;
    color: #000000;
    
    padding: 15px 40px;
    margin: 15px 30px;
    
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px black solid;
    border-radius: 20px;
}

.menuButton:hover {
    background-color: #3A4C8A;
    filter: invert(1);
}

.next {
    align-items: center;
    width: 30px;
    height: 30px;
}
</style>