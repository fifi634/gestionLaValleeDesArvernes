<script setup lang="ts">
import { useWhereIAm } from '../../store';

// Add active class on menu button for watch rooting 
const store = useWhereIAm()
if(window.location.hash == '#/dog') { 
    store.clientActived = false;
    store.homeActived = false;
    store.dogActived = true;
};
</script>

<template></template>