<script setup>
    import { ref, computed } from 'vue';
    import AddClient from './AddClient.vue';
    import DisplayClient from './DisplayClient.vue'

    /**
     * Simple router
     */
    const routes = {
        '/addClient': AddClient,
        '/': DisplayClient
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
        return routes[currentPath.value.slice(1) || '/'] || '/';
    });
</script>

<template>
        <button href="/addClient">Création d'un propriétaire</button>
  <component :is="currentView" />
</template>

<style>
    button {
        font-family: inter-regular, sans-serif;
        font-size: 1em;
        
        min-width: 200px;
        min-height: 80px;
        margin: 20px;
        padding: 25px 40px;

        background: #F6F8FF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border: 1px black solid;
        border-radius: 20px;    
    }
</style>