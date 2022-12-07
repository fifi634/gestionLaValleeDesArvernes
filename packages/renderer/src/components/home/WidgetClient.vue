<script lang="ts" setup>
import {ref, onBeforeMount} from 'vue';
import { displayClients } from '#preload';
import { RouterLink } from 'vue-router';


// Get data from preload
const clients = ref();
onBeforeMount(()=>{
    displayClients().then((res => clients.value = res));
});
</script>


<template>
    <div class="widgetContainer">
        <h2>Liste des clients</h2>
        <ul class="client-list">
            <li v-for="client in clients" :key="client.dataValues.id">
                <RouterLink :to="'/client/' + client.dataValues.id" class="client" >
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
    width: 30%;
    background: #FFFFFF;

    border: 1px black solid;
    border-radius: 20px; 
}

.client {
    text-decoration : none;
    line-height: 25px;
}

.client:hover {
    color: #3A4C8A;
    filter: inherit;
}
</style>