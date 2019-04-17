<template>
    <v-container>
        <v-layout row wrap>
            <v-flex
              v-for="product in products"
              :key="product.name"
              xs4
            >
                <productCard :product="product" width="200px" height="200px"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import gql from 'graphql-tag'
import productCard from './productCard.vue'

    export default {
        name: "display",
        components: {
            productCard
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
                    name
                    price
                    color
                    size
                    imagelink
                }
            }`,
        }
    }
</script>

<style>
</style>