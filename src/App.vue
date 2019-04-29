<template>
  <v-app>
    <v-toolbar app>
        <v-img
          v-bind:src="imagelogo"
          max-width="350px"
          max-height="70px"
        ></v-img>
      <v-spacer></v-spacer>

      <v-btn color="info" 
      @click="toggleTwo()">Open GraphQL Data</v-btn>

      <v-btn 
      @click="toggle()">Open RESTful Data</v-btn>
    </v-toolbar>

    <v-content>
      <v-img 
      v-bind:src="imageHome"
      height="375px"
      >
      </v-img>

      <v-container v-show="isOpen">
        <spacexAllProducts/>
        <spacexConnectProduct/>
        <spacexOneProduct/>
        <spacexCreateProduct/>
        <spacexUpdateProduct/>
        <spacexDeleteProduct/>
         <display/> 
      </v-container> 

      <v-container v-show="open">
         <allProductsREST/>
         <connectProductREST/>
         <oneProductREST/>
         <createProductREST/>
         <updateProductREST/>
         <deleteProductREST/>
         <myProductCardREST/>
         <dispalyREST/>
         <myProductCardREST/>
      </v-container>

    </v-content>
  </v-app>
</template>
<script>
import display from './components/display'
import spacexAllProducts from './components/spacexAllProducts'
import spacexConnectProduct from './components/spacexConnectProduct'
import spacexOneProduct from './components/spacexOneProduct'
import spacexCreateProduct from './components/spacexCreateProduct'
import spacexUpdateProduct from './components/spacexUpdateProduct'
import spacexDeleteProduct from './components/spacexDeleteProduct'

import displayREST from './components/displayREST'
import allProductsREST from './components/allProductsREST'
import connectProductREST from './components/connectProductREST'
import oneProductREST from './components/oneProductREST'
import createProductREST from './components/createProductREST'
import updateProductREST from './components/updateProductREST'
import deleteProductREST from './components/deleteProductREST'
import myProductCardREST from './components/myProductCardREST'

export default {
  name: 'App',
  components: {
    display,
    spacexAllProducts,
    spacexOneProduct,
    spacexConnectProduct,
    spacexCreateProduct,
    spacexUpdateProduct,
    spacexDeleteProduct,

    displayREST,
    allProductsREST,
    connectProductREST,
    oneProductREST,
    createProductREST,
    updateProductREST,
    deleteProductREST,
    myProductCardREST
  },
  data () {
    return {
      imagelogo: "http://www.stickpng.com/assets/images/5842a770a6515b1e0ad75afe.png",
      imageHome: "https://www.spacex.com/sites/spacex/files/styles/new_gallery_large/public/2013_-_11_vandenberg_sunset_rocket_on_pad.jpg?itok=d6cI50Qk",
      open: false,
      isOpen: false
    }
  },
  methods: {
    toggle: function(){
      this.open = !this.open
      if(this.isOpen) {
        this.open = false
      }
    },
    toggleTwo: function(){
      this.isOpen = !this.isOpen
      if(this.open) {
        this.isOpen = false
      }
    }
  }
}
</script>
<style>
</style>
