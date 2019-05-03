<template>
    <v-app>
        <v-container grid-list-xl>
        <v-layout wrap>  
        <v-flex v-for="data in myjson" :key="data.id">
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
