<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import { colors } from '../config';
</script>

<template>
    <div class="menuContainer">
        <RouterLink to="/" class="menuButton">Accueil</RouterLink>
        <img src="../../icon/fast-forward-black.png" class="next" alt="" />
        <RouterLink to="/client" class="menuButton">Création propriétaire</RouterLink>
        <img src="../../icon/fast-forward-black.png" class="next" alt="" />
        <RouterLink to="/dog" class="menuButton">Création chien</RouterLink>
    </div>
</template>

<style>
.menuContainer {
    display: flex;
    align-items: center;
}

.menuButton {
    display:inline-block;
    text-decoration : none;

    font-family: inter-semiBold, sans-serif;
    font-size: 1em;
    color: v-bind('colors.font');
    
    padding: 15px 40px;
    margin: 15px 30px;
    
    background: v-bind('colors.secondary');
    box-shadow: 0px 4px 4px v-bind('colors.shadow');
    border: 1px v-bind('colors.border') solid;
    border-radius: 20px;
}

.menuButton:hover {
    background-color: v-bind('colors.primary');
    filter: invert(1);
    transition: 0.5s;
}

.menuButton:active {
  background-color: v-bind('colors.primary');
  color: v-bind('colors.secondary');
  filter: inherit;
}

.next {
    align-items: center;
    width: 30px;
    height: 30px;
}
</style>