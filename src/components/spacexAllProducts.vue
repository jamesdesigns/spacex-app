<template>
  <div>
    <v-container>
        <h1>GraphQL Data</h1>
        <h2>All Products</h2>
        <v-btn v-on:click="getAllGraphql(), toggle()">View All</v-btn>
        <p v-show="isOpen">{{ myProduct.products }}  {{ error }}</p>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: {},
      isOpen: false
    };
  },
  methods: {
    getAllGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query allProducts {
              products {
                id
                name
                price
                color
                size
              }
            }
          `
        })
        .then(res => {
          this.myProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    },
    toggle: function() {
        this.isOpen = !this.isOpen
    }
  }
};
</script>
<style>
h1 {
    color:#fff;
    font-family:'Hind Vadodara', sans-serif;
    background-color: #2d5986;
    padding:3px 20px;
    margin-left: -20px;
    margin-bottom: 15px;
}
h2 {
    color: #2d5986;
    font-weight:600;
    font-family: 'Hind Vadodara', sans-serif;
}
</style>
