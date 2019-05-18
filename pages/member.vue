<template>
    <v-app>

        <v-jumbotron
  dark
    src="https://user-images.githubusercontent.com/42897791/57972767-ddf20280-79d9-11e9-8b56-183b86bb8926.jpg"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">
            FIND A STREAMER</h3>  
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

      <v-container>
        <v-layout wrap>
        <v-flex lg2 mx-4 my-2 v-for="data in myjson" :key="data.id">
          <card :items="data"></card>
          </v-flex>
        </v-layout>

      </v-container>
    </v-app>
</template>

<script>
import Card from "../components/Card.vue";
import json from "../assets/memberdata.json";

export default {
    data() {
    return {
      myjson: json,
    }
  },

components:{
    card:Card
}
}
</script>

