<script lang="ts" setup>
import { ref, onBeforeMount, defineComponent } from 'vue';
import { createClient, searchClient } from '#preload';


// Get client
let client = ref();
const clientId = ref(window.location.hash.slice(9));

onBeforeMount(()=>{
    searchClient(clientId.value).then(res => { client.value = res; console.log(res) });
});

const props = defineProps({
    name:String
});

// Get form input
const name = ref();
const firstname = ref();
const phone = ref();
const email = ref();
const adress = ref();

// When you're clicking on 'Créer' button
let newClient;
const addClient = () =>{
    newClient = {
        name: name.value,
        firstname: firstname.value,
        phone: phone.value,
        email: email.value,
        adress: adress.value,
    }
    console.log('client created : ', newClient)
    createClient(newClient);
}
</script>


<template>
<div v-if="client == null">
    <div class="client-container">
        <h1 class="titre-formulaire">Création client</h1>
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
            <button @click="addClient()">Créer</button>
        </div>
    </div>  
</div>
<div v-else>
    <div class="client-container">
        <h1 class="titre-formulaire">Fiche client</h1>
        <div class="input-container">
            <label for="fistname" class="label">Prénom : </label>
            <span class="data" id="firstname">{{ client.dataValues.firstname }}</span>
        </div>
        <div class="input-container">
            <label for="name" class="label">Nom : </label>
            <span class="data" id="name">{{ client.dataValues.name }}</span>
        </div>
        <div class="input-container">
            <label for="phone" class="label">Téléphone : </label>
            <span class="data" id="phone">{{ client.dataValues.phone }}</span>
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail : </label>
            <span class="data" id="email">{{ client.dataValues.email }}</span>
        </div>
        <div class="input-container">
            <label for="address" class="label">Adresse : </label>
            <span class="data" id="address">{{ client.dataValues.address }}</span>
        </div>
        <div>
            <button @click="">Modifier</button>
        </div>
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

.data {
    margin: 5px;
}
</style>