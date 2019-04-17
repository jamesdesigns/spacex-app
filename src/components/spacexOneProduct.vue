<template>
  <div class="about">
    <v-container>
        <v-text-field v-model="myProduct.id" label="ID" required></v-text-field>
      <v-btn color="info" v-on:click="getOneGraphql()">One</v-btn>
          {{ error }}
      {{ myProduct }}
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
        price: Float
      }
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
              }
            }
          `,
          variables: {
            id: this.myProduct.id,
            name: this.myProduct.name,
            price: this.myProduct.price
          }
        })
        .then(res => {
          this.myProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
<style>
</style>
