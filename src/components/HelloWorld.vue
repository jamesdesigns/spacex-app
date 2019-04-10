<template>
<v-container>
  <v-layout
    text-xs-center
    wrap 
>
<div> {{ info }} </div>
</v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
import gql from 'graphql-tag'

export default {
  data() {
    return {
      info: ""
    }
  },
  mounted () {
    // return axios
    // .get('https://pokeapi.co/api/v2/pokemon/1')
    // .then(response => (this.info = response))
  },
  apollo: {
    pokemon: gql`query {
      pokemons {
        name
      }
    }`,
   }
  };
  </script>
  <style>
  </style>
    