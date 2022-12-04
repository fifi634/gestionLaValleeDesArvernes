<script lang="ts" setup>
import {ref, onBeforeMount} from 'vue';
import { displayClients } from '#preload';
import { RouterLink } from 'vue-router';

// // Get client.id from button
// const idActive = ref();
// const displayOneClient = ref(false);

// const setIdActive = (id) =>{
//     displayOneClient.value  = true;
//     idActive.value = id;
// }

// Get data from preload
const clients = ref();
onBeforeMount(()=>{
    displayClients().then((res => clients.value = res));
});
</script>


<template>
<div class="widgetContainer">
    <h2>Liste des clients</h2>
    <div id="test"></div>
    <ul>
        <li v-for="client in clients" :key="client.dataValues.id">
            <RouterLink :to="'/client/' + client.dataValues.id" >
                {{client.dataValues.id + ' ' + client.dataValues.firstname + ' ' + client.dataValues.name}}
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
</style>