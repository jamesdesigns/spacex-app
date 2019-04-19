<template>
  <div class="about">
    <v-container>
        <h1>View One Product</h1>
        <v-text-field v-model="myProduct.id" label="ID" required></v-text-field>
      <v-btn color="info" v-on:click="getOneGraphql()">One</v-btn>
        <div v-show="isOpen"> {{ error }} {{ myProduct }} </div>
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: {
        id: String,
        name: String,
        price: Float,
        size: String
      },
      isOpen: false
    };
  },
  methods: {
    getOneGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query oneProduct (
              $id: ID
            ){
              product(where: {id: $id}
              ) {
                id
                name
                price
                size
              }
            }
          `,
          variables: {
            id: this.myProduct.id,
            name: this.myProduct.name,
            price: this.myProduct.price,
            size: this.myProduct.size
          }
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
</style>
