<script setup lang="ts">
import { ref } from 'vue';
import Menu from './Menu.vue';
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
        <!-- <div>
            <p class="status">{{currentPath}}</p>
        </div> -->
        <Menu />
        <div>
            <button class="return" @click="$router.back()">Retour</button>
        </div>
    </div>
</template>

<style lang="scss">
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: auto;

    background: v-bind('colors.primary');
    filter: drop-shadow(0px 4px 4px v-bind('colors.shadow'));
}

/* .status {
    font-family: inter-semiBold, sans-serif;
    color: #FFFFFF;
    font-size: 1.5em;
    padding: 25px 40px;
} */

.return {
    margin: 30px;
    background-color: v-bind('colors.dangerous');
    color: v-bind('colors.secondary');
}
</style>