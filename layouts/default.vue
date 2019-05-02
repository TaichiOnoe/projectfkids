<template>
  <v-app dark>
        <v-toolbar flat>
           <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat to='home'>Home</v-btn>
      <v-btn flat to='member'>Member</v-btn>
      <v-btn flat>twitch</v-btn>
    </v-toolbar-items>
</v-toolbar>

    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
