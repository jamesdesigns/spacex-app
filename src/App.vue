<template>
  <v-app>
    <v-toolbar app>
        <!-- <v-img
          v-bind:src="imagelogo"
          aspect-ratio="4.60"
        ></v-img> -->

                <v-img
          v-bind:src="imagelogo"
          width="50px"
          height="50px"
        ></v-img>
  
      <v-spacer></v-spacer>
       <!-- <v-btn
        flat
        href="https://github.com/jamesdesigns"
        target="_blank"
      >  -->
        <!-- <span class="mr-2">Product Store</span> -->
        
      <!-- </v-btn> -->

      <!-- <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn> -->
    </v-toolbar>
    <v-content>
      <!-- <HelloWorld/> -->
      <!-- <v-btn @click="toggle()">GraphQL Content</v-btn> -->
      <v-container>
       <spacexAllProducts/>
       <spacexOneProduct/>
       <spacexConnectProduct/>
       <spacexCreateProduct/>
       <spacexUpdateProduct/>
       <spacexDeleteProduct/>
      </v-container> 
             <display/> 
    </v-content>
  </v-app>
</template>

<script>
import display from './components/display'
import spacexAllProducts from './components/spacexAllProducts'
import spacexOneProduct from './components/spacexOneProduct'
import spacexConnectProduct from './components/spacexConnectProduct'
import spacexCreateProduct from './components/spacexCreateProduct'
import spacexUpdateProduct from './components/spacexUpdateProduct'
import spacexDeleteProduct from './components/spacexDeleteProduct'


export default {
  name: 'App',
  components: {
    display,
    spacexAllProducts,
    spacexOneProduct,
    spacexConnectProduct,
    spacexCreateProduct,
    spacexUpdateProduct,
    spacexDeleteProduct
  },
  data () {
    return {
      imagelogo: "http://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png",
      //
      isOpen: false
    }
  },
  methods: {
    toggle: function(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>
