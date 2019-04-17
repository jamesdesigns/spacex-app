<template>
  <div>
    <v-btn v-on:click="getAllGraphql()">Connections</v-btn>
    {{ myProduct }}
    <!-- error: {{ error }} -->
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
            query productConnect {
                productsConnection {
                    edges {
                    node {
                        name
                    }
                    }
                    pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    }
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
