<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { searchClient } from '#preload';
import ModifyClient from './ModifyClient.vue';


// Get client
let client = ref();
onBeforeMount(()=>{
    const clientId = ref(window.location.hash.slice(9));
    searchClient(clientId.value).then(res => { client.value = res });
});

// When you're clicking on 'Modifier' button
let modifyToggle = ref(false);
const modifyClient = () => { modifyToggle.value = true }
</script>


<template>
<div class="groupModify-container">
    <div class="client-container" v-if="client">
        <h1 class="titre">Fiche client</h1>
        <div class="input-container">
            <label for="fistname" class="label">Prénom : </label>
            <span class="data" id="firstname">{{client.dataValues.firstname}}</span>
        </div>
        <div class="input-container">
            <label for="name" class="label">Nom : </label>
            <span class="data" id="name">{{client.dataValues.name}}</span>
        </div>
        <div class="input-container">
            <label for="phone" class="label">Téléphone : </label>
            <span class="data" id="phone">{{client.dataValues.phone}}</span>
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail : </label>
            <span class="data" id="email">{{client.dataValues.email}}</span>
        </div>
        <div class="input-container">
            <label for="address" class="label">Adresse : </label>
            <span id="address">{{client.dataValues.address}}</span>
        </div>
        <div>
            <button @click="modifyClient()">Modifier</button>
        </div>
    </div>   
    <div v-if="modifyToggle">
        <ModifyClient />
    </div>
</div>

</template>


<style>
.groupModify-container {
    display: flex;
}

.client-container {
    margin: 50px;
    padding: 20px;
    min-width: 300px;
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
</style>
