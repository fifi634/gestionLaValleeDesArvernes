<script setup>
import {ref, onBeforeMount} from 'vue';
import { displayClients } from '#preload';
import { RouterLink } from 'vue-router';

// // Get client.id from button
// const idActive = ref();
// const displayOneClient = ref(false);

// Get data from preload
const clients = ref();
onBeforeMount(()=>{
    displayClients().then((res => clients.value = res));
});

// const setIdActive = (id) =>{
//     displayOneClient.value  = true;
//     idActive.value = id;
// }
</script>


<template>
<div class="widgetContainer">
    <h2 class="widget-title">Liste des clients</h2>
    <div id="test"></div>
    <ul>
        <li v-for="client in clients">
            <RouterLink to='/client'>
                {{client.dataValues.firstname + ' ' + client.dataValues.name}}
            </RouterLink>
        </li>
    </ul>
</div> 
</template>


<style>
.widgetContainer {
    padding: 10px;
    margin: 10px;
    background: #FFFFFF;

    border: 1px black solid;
    border-radius: 20px; 
}

.widgetTitle {
    font-family: inter-regular, sans-serif;
    font-size: 1.2em;
}

.widgetText {
    font-family: inter-light, sans-serif;
    font-size: 1em;
}
</style>