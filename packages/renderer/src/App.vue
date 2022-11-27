<script lang="ts" setup>
import StatusBar from '/@/components/StatusBar.vue';
import Menu from '/@/components/Menu.vue';
</script>

<template>
  <div class="container">
    <StatusBar />
    <Menu />
  </div>
</template>

<style>
@font-face {
  font-family: inter-light;
  src: url('../font/inter/static/inter-Light.ttf')
}

@font-face {
  font-family: inter-regular;
  src: url('../font/inter/static/Inter-Regular.ttf')
}

.container {
  background: #ECECFA;;
}


</style>
