<script lang="ts" setup>
import Header from './components/Header.vue';
import { colors } from './config.js';
</script>


<template>
  <div class="container">
    <Header class="header"/>
    <router-view class="router"></router-view>
  </div>
</template>


<style lang="scss">
/* General styles for all software */
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
  position: absolute;
  background: v-bind('colors.background');
  min-height: 97%;
  min-width: 98%;
  padding: 5px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: row;
    min-height: 96.4%;
    min-width: 97.4%;
    transition: 0.3s;
  }
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  transition: 0.5s;
  height: 100px;
  @media screen and (max-width: 970px) {
    position: inherit;
    height: 100%;
  }
}

.router {
  display: flex;
  padding-top: 82px;
  height: 100%;
  transition: 0.5s;

  @media screen and (max-width: 970px) {
    padding-top: inherit;
    margin-left: 200px;
  }
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
  transition: 0.5s;
  
  &:hover {
    cursor: pointer;
    background-color: v-bind('colors.primary');
    filter: invert(1);
  }

  &:active {
    background-color: v-bind('colors.primary');
    color: v-bind('colors.secondary');
    filter: inherit;
  }
}

input, textarea {
  border: 1px v-bind('colors.border') solid;
  border-radius: 5px;
  padding: 5px;
}

.actionButton {
  color: v-bind('colors.secondary');
  background-color: v-bind('colors.primary');

  &:active {
    background-color: v-bind('colors.secondary');
    color: v-bind('colors.font');
  }
}

.errMessage {
  font-family: inter-semiBold, sans-serif;
  color: v-bind('colors.dangerous');
  text-align: center;
}
</style>
