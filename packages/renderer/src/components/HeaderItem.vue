<script setup lang="ts">
import { ref } from 'vue';
import Menu from './MenuItem.vue';
import { colors } from '../config.js';

// Display component in status bar
const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
    const link = window.location.hash;
    currentPath.value = link;
});
</script>

<template>
    <div class="menu">
        <Menu />
        <button class="return" @click="$router.back()">Retour</button>
    </div>
</template>

<style lang="scss">
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background: v-bind('colors.primary');
    filter: drop-shadow(0px 4px 4px v-bind('colors.shadow'));

    @media screen and (max-width: 970px) {
        flex-direction: column;
        width: 200px;
    }
}

.return {
    margin: 30px;
    background-color: v-bind('colors.dangerous');
    color: v-bind('colors.secondary');
}
</style>