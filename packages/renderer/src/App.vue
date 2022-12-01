<script lang="ts" setup>
// Components link
import StatusBar from '/@/components/StatusBar.vue';
import Router from '/@/components/Router.vue';
</script>

<template>
<div class="container">
  <StatusBar />
  <Router />
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
  padding-bottom: 5px;
}

p, h1, h2, h3, h4, a, button, input, label, span {
  font-family: inter-regular, sans-serif;
}
</style>
