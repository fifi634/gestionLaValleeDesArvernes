<script setup lang="ts">
import { displayClients } from '#preload';

// Get data from preload
let clients = [];
const clientsData = displayClients();
clientsData.then(res => res.forEach(elem => {clients.push(elem)}));
console.log('log client : ', clients)
</script>

<template>
<div class="widgetContainer">
    <h2 class="widget-title">Liste des clients</h2>
    <div id="test"></div>
    <ul>
        <li v-for="client in clients">
            <a href="#" alt="{{client.dataValues.firstname + ' ' + client.dataValues.name}}">{{(client.dataValues.firstname + ' ' + client.dataValues.name)}}</a>
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
    font-size: 1.2em;
}

.widgetText {
    font-size: 1em;
}
</style>