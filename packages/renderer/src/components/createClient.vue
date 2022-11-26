<script lang='ts' setup>
import {ref} from 'vue';

// Get form input
const name = ref();
const firstname = ref();
const phone = ref();
const email = ref();
const adress = ref();

// Create info input object
const client = {
    name: name.value,
    firstname: firstname.value,
    phone: phone.value,
    email: email.value,
    adress: adress.value,
};

function sendClient() {
    console.log("j'ai récupéré " + name.value)
}
</script>

<template>
    <h1>Création client</h1>
        <div class="input-container">
            <label for="fistname" class="label">Prénom</label>
            <input v-model="firstname" id="firstname" required />
        </div>
        <div class="input-container">
            <label for="name" class="label">Nom</label>
            <input v-model="name" id="name" />
        </div>
        <div class="input-container">
            <label for="phone" class="label">Téléphone</label>
            <input type="tel" v-model="phone" id="phone" pattern="[0-9]{10}" />
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail</label>
            <input type="email" v-model="email" id="email" />
        </div>
        <div class="input-container">
            <label for="adress" class="label">Adresse</label>
            <textarea v-model="adress" id="adress"/>
        </div>
        <div>
            <button @click="sendClient()">Créer</button>
        </div>
    <p> Le nom du client est {{ name }}</p> 
</template>

<style>
.input-container {
    margin-bottom: 10px;
    display: flex;
}

.label {
    margin-right: 10px;
}
</style>