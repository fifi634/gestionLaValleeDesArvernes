<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { searchDog, modifyDog, eraseDog } from '#preload';
import { colors } from '../../config';

// Get dog
const dog = ref();
const dogId = ref(window.location.hash.slice(6));
onBeforeMount(()=>{
    searchDog(dogId.value).then(res => {
        dog.value = res.dataValues;
    });
});


// Get form input
const name = ref();
const description = ref();
const vaccination = ref();

// Get dog photo
const dogFile = ref();
const ordinanceFile = ref();

const handleFileUpload = () => {
    console.log(dogFile.value.files);
    console.log(ordinanceFile.value.files);
};


// When you're clicking on 'Sauvegarder les modifications' button
let editDog = ref();
const setDog = async () =>{
    editDog =ref({
        name: name.value,
        description: description.value,
        vaccination: vaccination.value,
    });
    await modifyDog(JSON.stringify(editDog), dogId.value);
    window.location.reload()
};

// When you're clicking on link "Supprimer un propriétaire"
const deleteDog = () => {
    eraseDog(dogId.value);
    window.location.href = '#/';
}
</script>


<template>
    <div class="modifyDog-container">
        <h1 class="titre-formulaire">Modification chien</h1>
        <div class="input-container">
            <label for="name">Nom : </label>
            <input v-model="name" name="name" class="dogInput" :placeholder="dog ? dog.name : ''" required/>
        </div>
        <div class="input-container">
            <label for="photo">Photo : </label>
            <input type="file" ref="dogFile" v-on:change="handleFileUpload()" name="photo" class="dogInput" />
        </div>
        <div class="input-container">
            <label for="description" class="label">Description : </label>
            <textarea class="dogInput" v-model="description" name="description" :placeholder="dog ? dog.description : ''" />
        </div>
        <div class="input-container">
            <label for="vaccination" class="label">Vaccination : </label>
            <textarea class="dogInput" v-model="vaccination" name="vaccination" :placeholder="dog ? dog.vaccination : ''" />
        </div>
        <div class="input-container">
            <label for="ordinance">Ordonnance : </label>
            <input type="file" ref="ordinanceFile" v-on:change="handleFileUpload()" name="ordinance" class="dogInput" />
        </div>
        <div class="ctrlModifyClient">
            <button @click="setDog" class="actionButton">Sauvegarder les modifications</button>
            <a href="#/" @click="deleteDog()" class="delete">Supprimer le chien</a>
        </div>
    </div>
</template>


<style lang="scss">
/* Lot of styles come from "CreateDog.vue" */
.modifyDog-container {
    display: flex;
    flex-direction: column;
    margin: 50px;
    padding: 20px;    
    border: v-bind('colors.border') solid 1px;
    background-color: v-bind('colors.secondary');
    border-radius: 20px;
}

.delete {
    color: v-bind('colors.dangerous');

    &:hover {
        font-weight: 700;
    }
}
</style>