<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { searchClient, modifyClient, eraseClient } from '#preload';

// Get client
const client = ref();
const clientId = ref(window.location.hash.slice(9));
onBeforeMount(()=>{
    searchClient(clientId.value).then(res => {
        client.value = res.dataValues;
    });
});


// Get form input
let name = ref();
let firstname = ref();
let phone = ref();
let email = ref();
let address = ref();
let postalCode = ref();
let city= ref();


// When you're clicking on 'Sauvegarder les modifications' button
let editClient = ref();
const setClient = async () =>{
    editClient =ref({
        name: name.value,
        firstname: firstname.value,
        phone: phone.value,
        email: email.value,
        address: address.value,
        postalCode: postalCode.value,
        city: city.value,
    });
    await modifyClient(JSON.stringify(editClient), clientId.value);
    window.location.reload()
};

// When you're clicking on link "Supprimer un propriétaire"
const deleteClient = () => {
    eraseClient(clientId.value);
    window.location.href = '#/';
}
</script>


<template>
    <div class="modifyClient-container">
        <h1 class="titre-formulaire">Modification propriétaire</h1>
        <div class="input-container">
            <label for="fistname" class="label">Prénom : </label>
            <span class="data"></span>
            <input v-model="firstname" id="firstname" :placeholder="client ? client.firstname : ''" required />
        </div>
        <div class="input-container">
            <label for="name" class="label">Nom : </label>
            <input v-model="name" id="name" :placeholder="client ? client.name : ''"/>
        </div>
        <div class="input-container">
            <label for="phone" class="label">Téléphone : </label>
            <input type="tel" v-model="phone" id="phone" pattern="[0-9]{10}" :placeholder="client ? client.phone : ''" />
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail : </label>
            <input type="email" v-model="email" id="email" :placeholder="client ? client.email : ''" />
        </div>
        <div class="input-container">
            <label for="address" class="label">Adresse : </label>
            <div>
                <textarea 
                    class="address" 
                    v-model="address" 
                    name="address" 
                    :placeholder="client ? client.address : 'adresse'" 
                />
                <div class="city-container">
                    <input 
                        type="text" 
                        class="postalCode" 
                        v-model="postalCode" 
                        name="address" 
                        :placeholder="client ? client.postalCode : 'code'" 
                    />
                    <input type="text" v-model="city" name="address" :placeholder="client ? client.city : 'ville'" />
                </div>
            </div>
        </div>
        <div class="ctrlModifyClient">
            <button @click="setClient" class="actionButton">Sauvegarder les modifications</button>
            <a href="#/" @click="deleteClient()" class="delete">Supprimer le propriétaire</a>
        </div>
    </div>
</template>


<style>
.modifyClient-container {
    display: flex;
    flex-direction: column;
    margin: 50px;
    padding: 20px;
    

    border: black solid 1px;
    background-color: #FFFFFF;
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

.label {
    margin-right: 10px;
}

input, textarea {
    border: 1px black solid;
    border-radius: 5px;
}

.ctrlModifyClient {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.delete {
    color: rgb(153, 17, 17);
}

.delete:hover {
    font-weight: 700;
}
</style>