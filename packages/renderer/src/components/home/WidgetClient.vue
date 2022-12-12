<script lang="ts" setup>
import {ref, onBeforeMount} from 'vue';
import { displayClients } from '#preload';
import { RouterLink } from 'vue-router';
import { colors } from '../../config';

// Get data from preload
const clients = ref();
onBeforeMount(()=>{
    displayClients().then((res => clients.value = res));
});
</script>


<template>
    <div class="widgetContainer">
        <h2>Liste des propriétaires</h2>
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
    margin: 50px;
    width: 30%;
    min-width: 350px;
    background: v-bind('colors.secondary');

    border: 1px v-bind('colors.border') solid;
    border-radius: 20px; 
}

.client {
    text-decoration : none;
    line-height: 25px;
}

.client:hover {
    color: v-bind('colors.primary');
    filter: inherit;
}
</style>