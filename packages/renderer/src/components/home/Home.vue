<script setup lang="ts">
import WidgetClient from './WidgetClient.vue';
import WidgetDog from './WidgetDog.vue';
import { useWhereIAm } from '../../store';

// Add active class on menu button for watch rooting 
const store = useWhereIAm()
if (window.location.hash == '#/') {
    store.homeActived = true;
    store.clientActived = false;
    store.dogActived = false;
};
</script>

<template>
    <div class="widget-container">
        <WidgetClient />
        <WidgetDog />
    </div>
</template>

<style lang="scss">
.widget-container {
    transition: 0.5s;

    @media screen and (max-width: 970px) {
        display: flex;
        flex-direction: column;
    }
}
</style>