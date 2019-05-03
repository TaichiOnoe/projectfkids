<template>
  <v-layout>
    <v-flex xs12 >
      <v-card>
        <v-img
          class="white--text"
          src="https://user-images.githubusercontent.com/42897791/56977043-47d37500-6baf-11e9-855c-15345b20fb38.jpg"
        >
          <v-container>
            <v-layout>
              <v-flex xs12 flexbox>
                <span class="headline">{{items.name}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
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
    data: this.items
    }
  }
}

</script>
