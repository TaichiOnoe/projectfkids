<template>
<v-app>
  
  <v-jumbotron
  dark
    src="https://user-images.githubusercontent.com/42897791/57073541-555a3d80-6d1c-11e9-98fb-a8d7ed40f658.png"
  >
    <v-container fill-height>
      <v-layout align-center>
        <v-flex text-xs-center>
          <h3 class="display-3">HEALTH GOOD BAD BOYS</h3>
        </v-flex>
      </v-layout>
    </v-container>
  </v-jumbotron>

    <v-container>

<v-layout justify-center my-5>
    <v-flex lg2 xs>
      <v-card>
      <v-img src='https://user-images.githubusercontent.com/42897791/57777178-2dc39600-775c-11e9-89b1-076300e258fb.png'
      >
      </v-img>
      </v-card>
    </v-flex>


<v-flex lg2 xs10 fill-height py-5 mx-5 text-xs-center>
  <v-container>
  <div class='headline'>About HGBB
    </div>
  </v-container>
      <span class='body-2'>
       Health Good Bad Boysは2010年に設立され、9年目を迎えるゲーミングチームです。フォートナイトをメインに、Twitch,Youtubeを通して配信も行っています。
      </span>
    </v-flex>
</v-layout>

<v-layout justify-center mt-5>
<v-flex lg2 xs12 fill-height py-5 mx-5 text-xs-center>
  <v-container>
  <div class='headline'>Game Title
    </div>
  </v-container>
      <span class='body-1'>
       Fortnite <br>
       Minecraft <br>
       Tom Clancy's Rainbow Six Siege <br>
       God Field <br>

      </span>
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

<style scoped>

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
