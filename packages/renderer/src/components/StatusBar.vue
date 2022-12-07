<script setup lang="ts">
import { ref } from 'vue';
import Menu from './Menu.vue';

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

<style>
.menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 82px;

    background: #3A4C8A;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.status {
    font-family: inter-semiBold, sans-serif;
    color: #FFFFFF;
    font-size: 1.5em;
    padding: 25px 40px;
}

.return {
    margin: 30px;
    background-color: rgb(153, 17, 17);
    color: white;
}
</style>