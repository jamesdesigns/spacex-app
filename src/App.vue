<template>
  <v-app>
    <v-toolbar app>
        <v-img
          v-bind:src="imagelogo"
          aspect-ratio="4.60"
        ></v-img>
  
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
      imagelogo: "http://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png",
      
      //
    }
  }
}
</script>
