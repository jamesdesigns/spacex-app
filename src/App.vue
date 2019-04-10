<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>SpaceX</span>
        <span class="font-weight-light"> Products</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
        
      </v-btn> -->

      <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
 
    </v-toolbar>

    <v-content>
      <HelloWorld/>
      <PokeList/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import PokeList from './components/PokeList'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // PokeList
  },
  data () {
    return {
      //
    }
  }
}
</script>
