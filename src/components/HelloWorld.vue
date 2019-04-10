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
export default {
  data() {
    return {
      info: ""
    }
  },
  mounted () {
    return axios
    .get('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => (this.info = response))
  }
  }
  </script>
  <style>
  </style>
    