<template>
<v-container>
  <v-layout
    text-xs-center
    wrap 
>
<div> {{ info }} 

    <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
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
    