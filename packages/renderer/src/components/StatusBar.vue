<script setup>
import { ref } from 'vue';
// import colors from '../config';

// Display component in status bar
const currentPath = ref(window.location.hash);
window.addEventListener('hashchange', () => {
    const link = window.location.hash; 
    currentPath.value = link.slice(2);
}); 
</script>

<template>
<div class="accueil">
    <div>
        <p class="status">{{currentPath}}</p>
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
    background: url('../../icon/home-white.png');
    width: 30px;
    margin: 12px;
}
</style>