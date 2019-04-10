<template>
<v-container>
  <v-layout
    text-xs-center
    wrap 
>
<div> {{ pokemon }} </div>
</v-layout>
</v-container>
</template>
<script>
import axios from 'axios'
import gql from 'graphql-tag'

export default {
  components: {
    PokeCard
  },
  data() {
    return {
      info: "",
      pokemons: [],
    }
  },
  mounted () {
    // return axios
    // .get('https://pokeapi.co/api/v2/pokemon/1')
    // .then(response => (this.info = response))
  },
  apollo: {
    pokemons: gql`query {
      pokemons {
        name
        originalId
      }
    }`,
   }
  };
  </script>
  <style>
  </style>
    