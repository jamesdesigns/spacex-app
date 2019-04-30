<template>
<div>
    <v-container>
        <v-layout row wrap>
            <v-flex
              v-for="product in products"
              :key="product._id"
              xs4
            >
                 <myProductCardREST :product="product" width="200px" height="400px"/>
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
    created() {
        axios
        .get('https://guarded-headland-15878.herokuapp.com/products/')
        .then((response) => {
            this.products = response.data
        })
        .catch(error => console.log(error))
    }
}
</script>
<style>
</style>