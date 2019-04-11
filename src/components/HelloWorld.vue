<template>
<v-container>
  <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
  <v-layout
    text-xs-center
    wrap 
>


<v-flex xs12 sm6 offset-sm3>
      <v-card>
             <v-card-actions class="blue-grey lighten-3">
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
        <v-img
          class="white--text"
          
          aspect-ratio="1"
          v-bind:src="imagelink"
        ></v-img>

        <v-card-title primary-title class="d-flex blue-grey lighten-5">
          <div>
            <h3 class="headline font-weight-light">{{ name }}</h3>
            <div class="font-weight-medium"> {{ color }} </div>
             <div class="font-weight-medium"> {{ size }} </div>
              <div class="display-1 font-weight-bold"> ${{ price }} </div>
          </div>
        </v-card-title>

        <v-card-actions class="d-flex blue-grey lighten-5">
          <v-btn class="white--text" color="blue">BUY</v-btn>
          <!-- <v-btn class="white--text" color="blue">ADD TO FAVORITES</v-btn> -->

        </v-card-actions>

              
      </v-card>
    </v-flex>


<div> {{ info }} 

    <!-- <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>

    <img v-bind:src="imagelink">
    <h2>{{ name }}</h2>
    <p>${{ price }}</p>
    <p>{{ color }}</p>
    <p>{{ size }}</p> -->
    
    
</div>
</v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
import gql from 'graphql-tag'

export default {
  // components: {
  //   PokeCard
  // },
  data() {
    return {
      name: "Active Track Jacket",
      price: 40,
      color: "Black",
      size: "XL",
      imagelink: "https://pull01-spacexshop.netdna-ssl.com/media/catalog/product/cache/1/small_image/504x504/9df78eab33525d08d6e5fb8d27136e95/s/p/spacex-logo-jacket.png",
      
      info: "",
      // pokemons: [],
       items: [
    {
      text: 'Home',
      disabled: false,
      href: 'breadcrumbs_dashboard'
    },
    {
      text: 'Products',
      disabled: false,
      href: 'breadcrumbs_link_1'
    },
    {
    text: 'Details',
    disabled: true,
    href: 'breadcrumbs_link_2'
    }
  ],
    }
  },
   
  mounted () {
    // return axios
    // .get('https://pokeapi.co/api/v2/pokemon/1')
    // .then(response => (this.info = response))
  },
  apollo: {
    // pokemons: gql`query {
    //   pokemons {
    //     name
    //     originalId
    //   }
    // }`,
   }
  };
  </script>
  <style>
  </style>
    