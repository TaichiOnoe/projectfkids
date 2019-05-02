<template>
<v-app>
  <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-3 font-weight-thin  mb-3">HGBB</h1>
      <h4 class="subheading">Health Good Bad Boys</h4>
    </v-layout>
  </v-parallax>

<v-container>

<h1 class="title mb-3">
    About HGBB
</h1>

<h4 class="subheading">
    Health Good Bad Boys (HGBB)は親愛なるフレンドからなるゲーミングチームです。
</h4>
</v-container>

</v-app>
</template>

<script>
export default {
    
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

