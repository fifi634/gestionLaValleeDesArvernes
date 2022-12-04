<script setup>
import { ref, onBeforeMount } from 'vue';
import { searchClient, modifyClient } from '#preload';

// Get client
const getClient = ref();
onBeforeMount(()=>{
    const clientId = ref(window.location.hash.slice(9));
    searchClient(clientId.value).then(res => { getClient.value = res });
});


// Get form input
let name = ref();
let firstname = ref();
let phone = ref();
let email = ref();
let adress = ref();
if (getClient) {
    console.log(getClient.value)
    name = ref();
    firstname = ref();
    phone = ref();
    email = ref();
    adress = ref();
}

// When you're clicking on 'Sauvegarder les modifications' button
let editClient;
const setClient = () =>{
    editClient = {
        name: name.value,
        firstname: firstname.value,
        phone: phone.value,
        email: email.value,
        adress: adress.value,
    }
    console.log('client modified : ', editClient)
    modifyClient(editClient);
}

// When you're cliking on "Fermer" button
let modifToggle = ref(true);
const closeModif = () => { modifToggle.value = false};
</script>


<template>
    <div class="client-container" v-if="modifyClient">
        <h1 class="titre-formulaire">Modification client</h1>
        <div class="input-container">
            <label for="fistname" class="label">Prénom : </label>
            <span class="data"></span>
            <input v-model="firstname" id="firstname" required />

        </div>
        <div class="input-container">
            <label for="name" class="label">Nom : </label>
            <input v-model="name" id="name" />
        </div>
        <div class="input-container">
            <label for="phone" class="label">Téléphone : </label>
            <input type="tel" v-model="phone" id="phone" pattern="[0-9]{10}" />
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail : </label>
            <input type="email" v-model="email" id="email" />
        </div>
        <div class="input-container">
            <label for="adress" class="label">Adresse : </label>
            <textarea v-model="adress" id="adress"/>
        </div>
        <div>
            <button @click="setClient()">Sauvegarder les modifications</button>
            <button @click="closeModif()">Fermer</button>
        </div>
    </div>
</template>


<style>
.client-container {
    margin: 50px;
    padding: 20px;
    min-width: 200px;
    width: 30%;

    display: flex;
    flex-direction: column;

    border: black solid 1px;
    background-color: #FFFFFF;
    border-radius: 20px;
}

.titre-formulaire {
    font-size: 2em;
}

.input-container {
    margin-bottom: 10px;
    justify-content: center;
}

.label {
    margin-right: 10px;
}
</style>