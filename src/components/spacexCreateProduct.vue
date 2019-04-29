<template>
  <div class="about">
        <v-container>
            <h2>Create a Product</h2>
          <v-flex xs12>
            <v-text-field v-model="product.name" label="Name" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.color" label="Color" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.size" label="Size" required></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-text-field v-model="product.imagelink" label="imagelink"></v-text-field>
          </v-flex>
          
      <v-btn @click="submitProduct()">Add Product</v-btn>
        {{ error }}
        {{ returnedProduct }}      
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    product: {
    name: "",
    color: "",
    size: "",
    imagelink: ""
    },
    returnedProduct: {}
  }),
  methods: {
    submitProduct: function() {
      this.$apollo.mutate({
          mutation: gql`
            mutation createProduct(
                $name: String!
                $color: String!
                $size: String!
                $imagelink: String!
            ) {
                createProduct(
                  data: {
                    name: $name
                    color: $color
                    size: $size
                    imagelink: $imagelink
                }
              ) 
                {
                    name
                    color
                    size
                    imagelink
                }
            }
          `,
          variables: {
            name: this.product.name,
            color: this.product.color,
            size: this.product.size,
            imagelink: this.product.imagelink
          }
        })
        .then(res => {
          this.returnedProduct = res.data;
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};
</script>
