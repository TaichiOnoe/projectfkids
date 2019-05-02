<template>
<v-app>
  <v-parallax
    dark
    src="https://user-images.githubusercontent.com/42897791/57068404-9fd3be00-6d0c-11e9-8a8c-d329af72b095.png"
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
    Health Good Bad Boys (HGBB)は2010年に設立され、9年目を迎えるゲーミングチームです。
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

