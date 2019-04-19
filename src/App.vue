<template>
  <v-app>
    <v-toolbar app>
        <v-img
          v-bind:src="imagelogo"
          width="50px"
          height="50px"
        ></v-img>
        <!-- <v-card-text>
        <p class="subheading text-xs-right">Product Store</p>
        </v-card-text> -->
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-card-text style="height: 50px;padding-top:50px;padding-bottom:50px;" class="grey lighten-5 text-xs-center">
      <v-btn color="info" @click="toggle()">GraphQL Data</v-btn>
      </v-card-text>
      <v-container v-show="isOpen">
        <spacexAllProducts/>
        <spacexConnectProduct/>
        <spacexOneProduct/>
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
