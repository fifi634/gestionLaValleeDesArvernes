<script setup>
import OneClient from './oneClient.vue';
import {ref,onBeforeMount} from 'vue';
import { displayClients } from '#preload';

// Get client.id from button
const idActive = ref();
const displayOneClient = ref(false);
const clients = ref();

// Get data from preload
onBeforeMount(()=>{
    displayClients().then((res => clients.value = res));
});

const setIdActive = (id) =>{
    displayOneClient.value  = true;
    idActive.value = id;
}
</script>

<template>
<div class="widgetContainer">
    <h2 class="widget-title">Liste des clients</h2>
    <div id="test"></div>
    <div v-if="!(displayOneClient)">
        <ul>
            <li v-for="client in clients">
                <a href='#' @click="setIdActive(client.dataValues.id)">"{{client.dataValues.firstname + ' ' + client.dataValues.name}}"</a>
            </li>
        </ul>
    </div>
    <div v-else>
        <oneClient :id="idActive" />
    </div>
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
    font-size: 1.2em;
}

.widgetText {
    font-size: 1em;
}
</style>