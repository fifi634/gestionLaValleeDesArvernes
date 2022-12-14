<script lang="ts" setup>
import { ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import { colors } from '../config';

//Change button color if we are on the page
let clientActived = ref(false);

watch( clientActived, () => {
    if(window.location.hash == '#/client') { clientActived.value = true } else { clientActived.value = false };
})
</script>


<template>
    <div class="menuContainer">
        <RouterLink to="/" class="menuButton">Accueil</RouterLink>
        <img src="../../icon/fast-forward-black.png" class="next" />
        <RouterLink to="/client" class="menuButton" :class="{active:clientActived}" v-bind="clientActived" alt="Créer un propriétaire">
            Création propriétaire
        </RouterLink>
        <img src="../../icon/fast-forward-black.png" class="next" />
        <RouterLink to="/dog" class="menuButton" alt="Créer un chien">Création chien</RouterLink>
    </div>
</template>


<style lang="scss">
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
    
    &:hover {
        background-color: v-bind('colors.primary');
        filter: invert(1);
        transition: 0.5s;
    }

    &:active {
        background-color: v-bind('colors.primary');
        color: v-bind('colors.secondary');
        filter: inherit;
    }
}

.next {
    align-items: center;
    width: 30px;
    height: 30px;
}

.active {
    background-color: v-bind('colors.primary');
    color: v-bind('colors.secondary');
    filter: invert(1);
    font-weight: 400;

    &:hover {
        font-weight: 600;
        transition: 0s;
    }
}
</style>