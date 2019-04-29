<template>
    <v-container>
        <h2>ALL PRODUCTS</h2>
        <v-layout row wrap>
            <v-flex
              v-for="product in products"
              :key="product.name"
              xs4
            >
                <myProductCard :product="product" width="200px" height="200px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import gql from 'graphql-tag'
import myProductCard from './myProductCard.vue'

    export default {
        name: "display",
        components: {
            myProductCard
        },
        data() {
            return {
                info: "",
                products: []
            }
        },
        mounted() {
            // 
        },
        apollo: {
            products: gql`query{
                products {
                    id
                    name
                    color
                    size
                    imagelink
                }
            }`
        }
    }
</script>

<style>
</style>