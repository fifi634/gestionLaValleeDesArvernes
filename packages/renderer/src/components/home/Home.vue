<script setup lang="ts">
import WidgetClient from './WidgetClient.vue';
import { useWhereIAm } from '../../store';

// Add active class on menu button for watch rooting 
const store = useWhereIAm()
if(window.location.hash == '#/') { 
    store.homeActived = true;
    store.clientActived = false;
    store.dogActived = false;
 };
</script>

<template>
    <div>
        <WidgetClient />
    </div>
</template>