<script lang="ts" setup>
    // import { ref, computed } from 'vue';
    // import Home from '/@/App.vue';

    // // Simple router
    // const routes = {
    //     '/home':Home,
    // }

    // const currentPath = ref(window.location.hash);

    // window.addEventListener('hashchange', () => {
    // currentPath.value = window.location.hash
    // });

    // const currentView = computed(() => {
    //     return routes[currentPath.value.slice(1) || '/'] || NotFound;
    // });
</script>

<template>
    <div class="accueil">
        <div>
            <p class="status">Accueil</p>
        </div>
        <div>
            <img class='home-button' src="../../icon/home-white.png" alt="Retour à l'accueil" href="#/home" />
        </div>

    </div>
</template>

<style>
    .accueil {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: auto;
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

    .home-button {
        width: 30px;
        margin: 25px;
    }
</style>