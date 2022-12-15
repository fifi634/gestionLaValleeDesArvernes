<script lang="ts" setup>
import { ref } from 'vue';
import { createClient } from '#preload';
import { colors } from '../../config';
import { useWhereIAm } from '../../store';

// Add active class on menu button for watch rooting 
const store = useWhereIAm()
if(window.location.hash == '#/client') { 
    store.clientActived = true;
    store.homeActived = false;
    store.dogActived = false;
};

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
let goDog = ref(false);
let errInput = ref(false);

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
    
    // Check if it has a minimum input required
    if(newClient.name || newClient.firstname) {
        let id = await createClient(newClient)
            .then((res) => { return res.id })
            .catch((err) => console.log(err))
        ;
        if(goDog.value == false) window.location.href = '#/client/' + id;
        else window.location.href = '#/dog/';
    } else {
        errInput.value = true;
    };
};
</script>


<template>
    <div class="createClient-container">
        <h1 class="titre-formulaire">Création propriétaire</h1>
        <div class="input-container">
            <label for="fistname">Prénom : </label>
            <input v-model="firstname" name="firstname" required />
        </div>
        <div class="input-container">
            <label for="name">Nom : </label>
            <input v-model="name" name="name" />
        </div>
        <div class="input-container">
            <label for="phone">Téléphone : </label>
            <input type="tel" v-model="phone" name="phone" />
        </div>
        <div class="input-container">
            <label for="email" class="label">E-mail : </label>
            <input type="email" v-model="email" name="email" />
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
            <button @click="addClient(); goDog=false">Créer sans ajout de chien</button>
            <button class="actionButton" @click="addClient(); goDog=true">Créer et ajouter un chien</button>
        </div>
        <div v-if="errInput">
            <p class="errMessage">J'ai besoin d'un prénom et d'un nom <br /> pour créer un propriétaire.</p>
        </div>
    </div>
</template>


<style lang="scss">
.createClient-container {
    display: flex;
    flex-direction: column;
    margin: 120px 50px 50px 50px;
    padding: 20px;
    width: 400px;  
    border: v-bind('colors.border') solid 1px;
    background-color: v-bind('colors.secondary');
    border-radius: 20px;

    @media screen and (max-width: 970px) {
        margin: 50px 50px 50px 250px;
    }
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