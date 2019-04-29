<template>
  <div>
    <v-container>
     
        <h2>Find Product By Type</h2>
        <v-btn v-on:click="getAllGraphql(), toggle()">Search Product</v-btn>
        <div v-show="isOpen">{{ myItem }} {{ error }}</div>
  
    </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data() {
    return {
      error: "",
      myItem: {},
      isOpen: false
    };
  },
  methods: {
    getAllGraphql: function() {
      this.$apollo
        .query({
          query: gql`
            query findProductByType {
                 product(where: { id: "1" }) {
                name
            }
                 productsConnection(where: {
                    name_contains: "Hoodie"
                })
                {
                    edges {
                        node {
                            id
                            name
                        }
                    }
                }
            }
                }
          `
        })
        .then(res => {
          this.myItem = res.data;
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