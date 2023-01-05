<script setup lang="ts">
import { useWhereIAm } from '../../store';
import { ref } from 'vue';
import { colors } from '../../config';
import { createDog, getDogPicture } from '#preload';

// Add active class on menu button for watch rooting 
const store = useWhereIAm();
if (window.location.hash == '#/dog') {
    store.clientActived = false;
    store.homeActived = false;
    store.dogActived = true;
}

// Get form input
const name = ref();
const description = ref();
const vaccination = ref();

// Get files
const dogFile = ref();
// let ordinanceFiles = ref();


// const displayFiles = (files = []) => {
//     const fileListElem = document.getElementById('filelist');
//     fileListElem.innerHTML = '';

//     files.forEach(file => {
//         const itemDomElem = document.createElement('div');
//         itemDomElem.setAttribute('id', file.name);
//         itemDomElem.setAttribute('data-filepath', 'file.path');

//         itemDomElem.innerHTML = `
//             <div>
//                 <p>${file.name}</p>
//                 <p>${file.size} kb </p>
//             </div>
//         `;

//         fileListElem?.appendChild(itemDomElem);
//     });
// };



// const handleOrdinanceUpload = () => {
//     // Generate single name of ordinance files
//     for(let file of ordinanceFiles.value.files) {
//         console.log(file);
//     }
// };

// When you're clicking on 'Créer' button
let newDog;
let goBox = ref(false);
let goDog = ref(false);
let errInput = ref(false);
let errFormat = ref(false);

const addDog = async () => {
    newDog = {
        name: name.value,
        description: description.value,
        vaccination: vaccination.value,
    };
    console.log(newDog)
    // Check if it has a minimum input required, then add dog and redirection
    if (newDog.name) {
        let id = await createDog(newDog)
            .then((res) => { return res.id; })
            .catch((err) => console.log(err))
            ;
        if (dogFile) getDogPicture(dogFile, id, newDog.name);
        if (goDog.value == true) window.location.href = '#/dog/';
        if (goBox.value == true) window.location.href = '#/box/';
        if (!goDog.value && !goBox.value) window.location.href = '#/dog/' + id;
    } else {
        errInput.value = true;
    }
};
</script>

<template>
    <div class="createDog-container">
        <h1 class="titre-formulaire">Création chien</h1>
        <div class="input-container">
            <label for="name">Nom : </label>
            <input v-model="name" name="name" class="dogInput" />
        </div>
        <div class="input-container">
            <label for="photo">Photo : </label>
            <input type="file" ref="dogFile" name="photo" class="dogInput" accept="image/*" />
        </div>
        <div class="input-container">
            <label for="description" class="label">Description : </label>
            <textarea class="dogInput" v-model="description" name="description" />
        </div>
        <div class="input-container">
            <label for="vaccination" class="label">Vaccination : </label>
            <textarea class="dogInput" v-model="vaccination" name="vaccination" />
        </div>
        <div class="input-container">
            <label for="ordinance">Ordonnance : </label>
            <input type="file" ref="ordinanceFile" multiple="true" accept="image/*, application/pdf" name="ordinance"
                class="dogInput-multipleFile" />
            <div id="filelist"></div>
        </div>
        <div class="ctrlCreateClient">
            <button @click="addDog(); goBox = false; goDog = false">Créer sans ajout de box</button>
            <button @click="addDog(); goBox = false; goDog = true">Créer et ajouter un nouveau chien</button>
            <button class="actionButton" @click="addDog(); goBox = true; goDog = false">Créer et ajouter un box</button>
        </div>
        <div v-if="errInput">
            <p class="errMessage">J'ai besoin d'un d'un nom pour créer un chien.</p>
        </div>
        <div v-if="errFormat">
            <p class="errMessage">J'ai besoin d'un d'un nom pour créer un chien.</p>
        </div>
    </div>
</template>

<style lang="scss">
/* Some styles come from CreateClient */
.createDog-container {
    margin: 120px 50px 50px 50px;
    padding: 20px;
    width: 600px;
    display: flex;
    flex-direction: column;
    border: v-bind('colors.border') solid 1px;
    background-color: v-bind('colors.secondary');
    border-radius: 20px;

    @media screen and (max-width: 970px) {
        margin: 50px 50px 50px 250px;
    }
}

.dogInput {
    width: 400px;
}

.dogInput-multipleFile {
    width: 400px;
    margin-left: 85px;
}
</style>