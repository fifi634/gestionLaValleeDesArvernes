<script lang="ts" setup>
import StatusBar from '/@/components/StatusBar.vue';
import { colors } from './config.js';
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
  background: v-bind('colors.background');
  width: 100%;
  padding-bottom: 10px;
}

.statusbar {
  position: fixed;
  top: 0;
  right: 0;
}

.router {
  padding-top: 82px;
  display: flex;
  justify-content: center;
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
    color: v-bind('colors.font');
    
    padding: 7px 20px;
    margin: 10px 5px;
    max-width: 200px;
    
    background: v-bind('colors.backgroundButton');
    box-shadow: 0px 4px 4px v-bind('colors.shadow');
    border: 1px v-bind('colors.border') solid;
    border-radius: 20px;
}

button:hover {
  cursor: pointer;
  transition: 0.5s;
  background-color: v-bind('colors.primary');
  filter: invert(1);
}

button:active {
  background-color: v-bind('colors.primary');
  color: v-bind('colors.secondary');
  filter: inherit;
}

input, textarea {
    border: 1px v-bind('colors.border') solid;
    border-radius: 5px;
    padding: 5px;
}

.actionButton {
    color: v-bind('colors.secondary');
    background-color: v-bind('colors.primary');
}

.actionButton:active {
    background-color: v-bind('colors.secondary');
    color: v-bind('colors.font');
}
</style>
