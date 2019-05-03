<template>
<v-app>
  <v-parallax
    dark
    src="https://user-images.githubusercontent.com/42897791/57073541-555a3d80-6d1c-11e9-98fb-a8d7ed40f658.png"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h1 class="display-3 font-weight-thin  mb-4">HGBB</h1>
      <h4 class="subheading">Health Good Bad Boys</h4>
    </v-layout>
  </v-parallax>

<v-container>
<v-flex xs12>
<h1 class="headline mb-3 font-weight-thin">
    About HGBB
</h1>
<h4 class="subheading mb-3">
  Health Good Bad Boys (HGBB)は2010年に設立され、9年目を迎えるゲーミングチームです。
</h4>
</v-flex>

<v-flex>
<h1 class = "headline mb-3 font-weight-thin">
  Game Title
</h1>
<h4 class="subheading mb-3">
  Fortnite <br>
  Minecraft<br>
  God Field
</h4>

</v-flex>
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
