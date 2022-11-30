<script setup>
import { ref, computed } from 'vue';
import AddClient from './AddClient.vue';
import DisplayClient from './DisplayClient.vue';

/**
 * Router
 */
const routes = {
    '/Client': AddClient,
    '/Accueil': DisplayClient
}

/**
 * Update the current component state by listening to browser hashchange events 
 * or using the History API.
 */
const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
currentPath.value = window.location.hash
});

const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/Accueil'] || '/Accueil';
});
</script>

<template>
<div class="menuContainer">
    <a href='#/Accueil' class="menuButton">Accueil</a>
    <img src="../../icon/fast-forward-black.png" class="next" alt="" />
    <a href='#/Client' class="menuButton">Création d'un propriétaire</a>        
</div>
<component :is="currentView" />
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