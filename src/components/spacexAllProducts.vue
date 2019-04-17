<template>
  <div>
    <v-btn color="info" v-on:click="getAllGraphql()">All</v-btn>
    {{ myProduct }}
    error: {{ error }}
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myProduct: {}
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
    }
  }
};
</script>
<style>
</style>
