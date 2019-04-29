<template>
<div>
   <v-container>
      <h1>RESTful Data</h1>
       <h2>All Products</h2>
       <v-btn v-on:click="mounted(), toggle()">View All</v-btn>
       <v-card v-show="isOpen">{{ products.products }}  {{ error }}</v-card>
        <v-layout row wrap>
            <v-flex
              v-for="product in products"
              :key="product.products"
              xs4
            > {{ product.id }}

                <myProductCardREST :product="product" width="200px" height="200px"/>
            </v-flex>
        </v-layout>
    </v-container> 
    </div>
</template>

<script>
import axios from 'axios'

import myProductCardREST from './myProductCardREST.vue'
export default {
    name: "displayREST",
    components: {
        myProductCardREST
    },
    data() {
        return {
            products: []
        }
    },
    mounted() {
       axios
        .get('https://guarded-headland-15878.herokuapp.com/products/')
        .then(response => ( this.products = response.data.products ))
        .catch(error => {
            console.log(error)
        })
    },
}
</script>
<style>
</style>