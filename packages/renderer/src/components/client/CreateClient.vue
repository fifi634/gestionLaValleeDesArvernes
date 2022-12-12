<script lang="ts" setup>
import { ref } from 'vue';
import { createClient } from '#preload';
import { colors } from '../../config';

// Get form input
const name = ref();
const firstname = ref();
const phone = ref();
const email = ref();
const address = ref();
const postalCode = ref();
const city = ref();

// When you're clicking on 'Créer' button
let newClient;

const addClient = async () =>{
    newClient = {
        name: name.value,
        firstname: firstname.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        postalCode: postalCode.value,
        city: city.value,
    };
    
    // Check minimum input
    if(newClient.name || newClient.firstname) {
        let id = await createClient(newClient)
            .then((res) => { return res.id })
            .catch((err) => console.log(err))
        ;
        window.location.href = '#/client/' + id;
    } else {
        alert("J'ai besoin d'un nom et d'un prénom au minimum.")
    };
};
</script>


<template>
    <div class="createClient-container">
        <h1 class="titre-formulaire">Création propriétaire</h1>
        <div class="input-container">
            <label for="fistname">Prénom : </label>
            <span class="data"></span>
            <input v-model="firstname" id="firstname" pattern="([A-Z])\w+" required />

        </div>
        <div class="input-container">
            <label for="name">Nom : </label>
            <input v-model="name" id="name" />
        </div>
        <div class="input-container">
            <label for="phone">Téléphone : </label>
            <input type="tel" v-model="phone" id="phone" pattern="[0-9]{20}" />
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail : </label>
            <input type="email" v-model="email" id="email" />
        </div>
        <div class="input-container">
            <label for="address">Adresse : </label>
            <div>
                <textarea class="address" v-model="address" name="address" placeholder="adresse" />
                <div class="city-container">
                    <input type="text" class="postalCode" v-model="postalCode" name="address" placeholder="code" />
                    <input type="text" v-model="city" name="address" placeholder="ville" />
                </div>
            </div>
        </div>
        <div class="ctrlCreateClient">
            <button class="actionButton" @click="addClient()">Créer</button>
        </div>
    </div>
</template>


<style>
.createClient-container {
    margin: 50px;
    padding: 20px;
    width: 350px;

    display: flex;
    flex-direction: column;

    border: v-bind('colors.border') solid 1px;
    background-color: v-bind('colors.secondary');
    border-radius: 20px;
}

.titre-formulaire {
    font-size: 2em;
}

.input-container {
    display: flex;
    margin: 10px 0; 
    justify-content: space-between;   
    align-items: center;
}

.ctrlCreateClient {
    display: flex;
    justify-content: center;
}

.city-container {
    display: flex;
    flex-direction: row;
}

.address {
    width: 255px;
}

.postalCode {
    width: 50px;
    margin-right: 5px;
}
</style>