<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { searchClient } from '#preload';
import ModifyClient from './ModifyClient.vue';
import { colors } from '../../config';

// Get client
let client = ref();
onBeforeMount(()=>{
    const clientId = ref(window.location.hash.slice(9));
    searchClient(clientId.value).then(res => { client.value = res; });
});

// When you're clicking on 'Modifier' button
let isActive = ref(false);
const modifyClient = () => { isActive.value = !isActive.value };
</script>


<template>
    <div class="allReadClient-container">
        <div class="readClient-container" v-if="client">
            <h1 class="titre">Fiche propriétaire</h1>
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
                <div>
                <span class="address" name="address">
                    {{client.dataValues.address}}<br />
                    {{client.dataValues.postalCode}} {{client.dataValues.city}}
                </span>
            </div>
            </div>
            <div class="ctrlReadClient">
                <button class="button" :class="{active:isActive}" @click="modifyClient()">
                    <span v-if="isActive">Fermer le panneau de modification</span>
                    <span v-else>Ouvrir le panneau de modification</span>
                </button>
            </div>
        </div>   
        <div v-if="isActive">
            <ModifyClient />
        </div>
    </div>
</template>


<style>
.allReadClient-container {
    display: flex;
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

.active {
    background-color: v-bind('colors.primary');
    color: v-bind('colors.secondary');
    filter: invert(1);
    font-weight: 400;
}

.active:hover {
    font-weight: 600;
    transition: 0s;
}

@media screen and (max-width: 1000px) {
    .allReadClient-container {
        flex-direction: column-reverse;
    }
}
</style>
