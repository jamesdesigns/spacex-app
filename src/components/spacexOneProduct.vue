<template>
  <div class="about">
    <v-container>
        <h2>Product By ID</h2>
        <v-text-field v-model="myProduct.id" label="id" required></v-text-field>
      <v-btn v-on:click="getOneGraphql(), toggle()">VIEW PRODUCT ID</v-btn>

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
        id: "",
        name: "",
        color: "",
        size: ""
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
            ) {
                product(where:{id: $id}
                ) {
                    id
                    name
                    color
                    size
                }
            }
          `,
          variables: {
            id: this.myProduct.id,
            // name: this.myProduct.name,
            // size: this.myProduct.size
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
