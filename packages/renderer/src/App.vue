<script lang="ts" setup>
import StatusBar from '/@/components/StatusBar.vue';
import Body from '/@/components/Body.vue';
</script>

<template>
<div class="container">
  <StatusBar />
  <Body />
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

p, a, input, button {
  font-family: inter-light, sans-serif;
}

h1, h2, h3,h4, h5, h6, label {
  font-family: inter-regular, sans-serif;
}
</style>
