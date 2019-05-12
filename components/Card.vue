<template>

  <v-layout>
    <v-flex justify-center> 
      <v-card> 
        <v-img
          class="white--text"
          src="https://user-images.githubusercontent.com/42897791/56977043-47d37500-6baf-11e9-855c-15345b20fb38.jpg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <v-flex text-xs-center>
            <span class='headline'>{{items.name}}</span><br>
            <span>comment area{{items.comment}}</span>
          </v-flex>
        </v-card-title>
        <v-card-actions>
          <v-btn flat :href='items.twitch' target="_blank" :disabled="showbtnTwitch"> <i class="fab fa-twitch fa-2x"></i></v-btn>
          <v-btn flat :href='items.youtube' target="_blank" :disabled="showbtnYoutube"> <i class="fab fa-youtube fa-2x"></i></v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["items"],
  name: "card",

  data(){
    return{
    data: this.items,
    showbtnTwitch: false,
    showbtnYoutube: false,
    }
  },
    mounted() {
    this.IsnullTwitch();
    this.IsnullYoutube();
},
methods: {
    IsnullTwitch() {
      if (this.items.twitch == "") {
        this.showbtnTwitch = true;
      } else {
        this.showbtnTwitch = false;
      }
    },
    IsnullYoutube() {
      if (this.items.youtube == "") {
        this.showbtnYoutube = true;
      } else {
        this.showbtnYoutube = false;
      }
    }
}
}

</script>


