<script lang="ts" setup>
import {ref, onBeforeMount} from 'vue';
import { displayDogs } from '#preload';
import { RouterLink } from 'vue-router';
import { colors } from '../../config';

// Get data from preload
const dogs = ref();
onBeforeMount(()=>{
    displayDogs().then((res => dogs.value = res));
});
</script>


<template>
    <div class="widgetDogContainer">
        <h2>Liste des chiens</h2>
        <ul class="dog-list">
            <li v-for="dog in dogs" :key="dog.dataValues.id">
                <RouterLink :to="'/dog/' + dog.dataValues.id" class="client" >
                    {{dog.dataValues.name}}
                </RouterLink>
            </li>
        </ul>
    </div> 
</template>


<style lang="scss">
/* Some styles come from WidgetClient.vue */
.widgetDogContainer {
    padding: 10px;
    margin: 50px;
    width: 30%;
    min-width: 350px;
    background: v-bind('colors.secondary');
    border: 1px v-bind('colors.border') solid;
    border-radius: 20px; 
}

// .client {
//     text-decoration : none;
//     line-height: 25px;

//     &:hover {
//         color: v-bind('colors.primary');
//         filter: inherit;
//     }
// }
</style>