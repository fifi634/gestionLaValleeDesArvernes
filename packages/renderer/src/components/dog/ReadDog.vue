<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { searchDog } from '#preload';
// import ModifyDog from './ModifyDog.vue';
import { colors } from '../../config';

// Get dog
let dog = ref();
onBeforeMount(()=>{
    const dogId = ref(window.location.hash.slice(9));
    searchDog(dogId.value).then(res => { dog.value = res; });
});

// When you're clicking on 'Modifier' button
let isActive = ref(false);
const modifyDog = () => { isActive.value = !isActive.value };
</script>


<template>
    <div class="allReadClient-container">
        <div class="readClient-container" v-if="dog">
            <h1 class="titre">Fiche chien</h1>
            <div class="input-container">
                <label for="name" class="label">Nom : </label>
                <span class="data" name="name">{{dog.dataValues.name}}</span>
            </div>
            <div class="input-container">
                <label for="desciption" class="label">Description : </label>
                <span class="data" id="description">{{dog.dataValues.description}}</span>
            </div>
            <div class="input-container">
                <label for="vaccination" class="label">Vaccination : </label>
                <span class="data" id="phone">{{dog.dataValues.vaccination}}</span>
            </div>
            <div class="ctrlReadClient">
                <button class="button" @click="modifyDog()">
                    <span v-if="isActive">Fermer le panneau de modification</span>
                    <span v-else>Ouvrir le panneau de modification</span>
                </button>
            </div>
        </div>   
        <div v-if="isActive">
            <!-- <ModifyDog /> -->
        </div>
    </div>
</template>


<style lang="scss">
.allReadClient-container {
    display: flex;

    @media screen and (max-width: 970px) {
        flex-direction: column-reverse;
    }
}

.readClient-container {
    margin: 50px;
    padding: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
    border: v-bind('colors.border') solid 1px;
    background-color: v-bind('colors.secondary');
    border-radius: 20px;
}

.titre-formulaire {
    font-size: 2em;
}

.ctrlReadClient {
    display: flex;
    font-weight: 700;
    justify-content: center;
}
</style>
