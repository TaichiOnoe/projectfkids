<template>

  <v-layout>
    <v-flex justify-center text-xs-center> 
      <v-card> 
        <v-img
          :src='items.images'
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <v-flex text-xs-center>
            <span class='headline'>{{items.name}}</span><br>
            <!-- <span>{{items.comment}}</span> -->
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-btn flat :href='items.twitch' target="_blank" :disabled="showbtnTwitch"> <i class="fab fa-twitch fa-2x"></i></v-btn>
          <v-btn flat :href='items.youtube' target="_blank" :disabled="showbtnYoutube"> <i class="fab fa-youtube fa-2x"></i></v-btn>
          <v-btn flat :href='items.mixer' target="_blank" :disabled="showbtnMixer"> <i class="fab fa-microsoft fa-2x"></i></v-btn>
        </v-card-text>
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
    showbtnMixer: false
    }
  },
    mounted() {
    this.IsnullTwitch();
    this.IsnullYoutube();
    this.IsnullMixer();
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
    },
     IsnullMixer() {
      if (this.items.mixer == "") {
        this.showbtnMixer = true;
      } else {
        this.showbtnMixer = false;
      }
    }
}
}

</script>


