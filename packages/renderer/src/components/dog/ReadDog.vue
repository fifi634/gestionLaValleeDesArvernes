<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { searchDog } from '#preload';
import ModifyDog from './ModifyDog.vue';
import { colors } from '../../config';

// Get dog
let dog = ref();
console.log()
onBeforeMount(() => {
    const dogId = ref(window.location.hash.slice(6));
    searchDog(dogId.value).then(res => { dog.value = res; });
});

// When you're clicking on 'Modifier' button
let isActive = ref(false);
const modifyDog = () => { isActive.value = !isActive.value };
</script>


<template>
    <div class="allRead-container">
        <div class="readDog-container" v-if="dog">
            <div class="title-container">
                <h1 class="titre">Fiche chien</h1>
                <img class='dogAvatar' :src="dog.dataValues.photo" alt="photo du chien" />
            </div>

            <div class="input-container">
                <label for="name" class="label">Nom : </label>
                <span class="data" name="name">{{ dog.dataValues.name }}</span>
            </div>
            <div class="input-container">
                <label for="desciption" class="label">Description : </label>
                <span class="data" name="description">{{ dog.dataValues.description }}</span>
            </div>
            <div class="input-container">
                <label for="vaccination" class="label">Vaccination : </label>
                <span class="data" name="phone">{{ dog.dataValues.vaccination }}</span>
            </div>
            <div class="ctrlRead">
                <button class="button" @click="modifyDog()">
                    <span v-if="isActive">Fermer le panneau de modification</span>
                    <span v-else>Ouvrir le panneau de modification</span>
                </button>
            </div>
        </div>
        <div v-if="isActive">
            <ModifyDog />
        </div>
    </div>
</template>


<style lang="scss">
/* Some styles come from ReadClient.vue */
.readDog-container {
    margin: 50px;
    padding: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    border: v-bind('colors.border') solid 1px;
    background-color: v-bind('colors.secondary');
    border-radius: 20px;
}

.title-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.dogAvatar {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;
}
</style>
