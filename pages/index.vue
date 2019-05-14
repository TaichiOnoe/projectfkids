<template>
<v-app>
  
  <v-jumbotron
    :gradient="gradient"
    dark
    src="https://user-images.githubusercontent.com/42897791/57073541-555a3d80-6d1c-11e9-98fb-a8d7ed40f658.png"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">Health Good Bad Boys</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

    <v-container
      id="grid"
      fluid
      grid-list-sm
      tag="section"
      text-xs-center
    >
    <v-layout row wrap>
      <v-flex tag="h1" class="headline">About HGBB</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text>Health Good Bad Boys (HGBB)は2010年に設立され、9年目を迎えるゲーミングチームです。<br>フォートナイトをメインに、Twitch,Youtubeを通して配信も行っています。</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex tag="h1" class="headline"> Game Title</v-flex>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <v-card-text> 
                <div src='https://www.epicgames.com/fortnite/ja/home'>Fortnite </div> <br>
                <div href='https://www.minecraft.net/ja-jp/'>Minecraft</div><br>
                <div href='https://godfield.net/'> God Field</div> <br>
                <div>Rainbow Six Siege</div> <br>
                <div>Puzzle & Dragons</div>
                </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>

  <v-footer class="pa-3">
    <v-layout justify-center>   
   <div>&copy; {{ new Date().getFullYear() }}</div>
    <span>-HGBB</span>
    </v-layout>
  </v-footer>

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
