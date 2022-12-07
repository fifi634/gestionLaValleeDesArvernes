<script lang="ts" setup>
// Components link
import StatusBar from '/@/components/StatusBar.vue';
import Menu from '/@/components/Menu.vue';
</script>

<template>
  <div class="container">
      <StatusBar class="statusbar"/>
      <div class="router">
        <router-view ></router-view>
      </div>
  </div>
</template>

<style>
@font-face {
  font-family: inter-light;
  src: url('../font/inter/static/inter-Light.ttf');
}

@font-face {
  font-family: inter-regular;
  src: url('../font/inter/static/Inter-Regular.ttf');
}

@font-face {
  font-family: inter-semiBold;
  src: url('../font/inter/static/Inter-SemiBold.ttf');
}

.container {
  background: #ECECFA;
  width: 100%;
  padding-bottom: 10px;
}

.statusbar {
  position: fixed;
  top: 0;
  right: 0;
}

.router {
  /* position: fixed; */
  padding-top: 82px;
}

p, a, input, button, span {
  font-family: inter-light, sans-serif;
}

h1, h2, h3,h4, h5, h6, label {
  font-family: inter-regular, sans-serif;
  white-space: nowrap;
}

button {
    font-family: inter-semiBold, sans-serif;
    font-size: 1em;
    color: #000000;
    
    padding: 7px 20px;
    margin: 10px 5px;
    max-width: 200px;
    
    background: #efeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px black solid;
    border-radius: 20px;
}

button:hover {
  cursor: pointer;
  transition: 0.5s;
  background-color: #3A4C8A;
  filter: invert(1);
}

button:active {
  background-color: #3A4C8A;
  color: white;
  filter: inherit;
}

.actionButton {
    color: white;
    background-color: #3A4C8A;
}

.actionButton:active {
    background-color: white;
    color: black;
}

input {
  padding: 5px;
}
</style>
