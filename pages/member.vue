<template>
    <v-app>
        <div>
            <v-container fluid grid-list-lg>

        <v-flex xs12 v-for="data in myjson" :key="data.id">
          <card :items="data"></card>
          </v-flex>
            </v-container>
        </div>
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
