<template>
  <v-app>
    <v-toolbar app>
        <v-img
          v-bind:src="imagelogo"
          width="50px"
          height="50px"
        ></v-img>
  
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-layout align-center>
      <v-btn color="info" @click="toggle()">GraphQL Data</v-btn>
      </v-layout>
      <v-container v-show="isOpen">
        <spacexAllProducts/>
        <spacexOneProduct/>
        <spacexConnectProduct/>
        <spacexCreateProduct/>
        <spacexUpdateProduct/>
        <spacexDeleteProduct/>
         <display/> 
      </v-container> 
       
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
