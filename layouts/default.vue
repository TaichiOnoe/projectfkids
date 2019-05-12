<template>
  <v-app dark>
        <v-toolbar flat>
           <v-spacer></v-spacer>
      <v-toolbar-items>
      <v-btn flat to='/'>Home</v-btn>
      <v-btn flat to='member'>Member</v-btn>
    </v-toolbar-items>
</v-toolbar>

    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>


