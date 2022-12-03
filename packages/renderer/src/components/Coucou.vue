<script setup>
import { ref, onBeforeMount, defineComponent } from 'vue';
import { displayClients } from '#preload';

const display = window.location.href
let clients = ref();


onBeforeMount(()=>{
    displayClients().then((res => {
        clients = res
    }));
});

</script>

<template>
    <p>{{ display }}</p>
</template>