<script lang='ts' setup>
import { ref, onBeforeMount } from 'vue';
import { displayClients, searchClient } from '#preload';

const display = window.location.href
let client = ref();
const clientId = ref(window.location.hash.slice(9));
console.log(client);
onBeforeMount(()=>{
    searchClient(clientId).then((res => {
        client = res
    }));
});

</script>

<template>
    <h1>Coucou  {{ client }}  <br/> Id: {{ clientId }}</h1>
    {{display}}
</template>