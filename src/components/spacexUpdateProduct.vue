<template>
  <div class="about">
        <v-container>
            
            <h2>Update a Product</h2>
          <v-flex xs12>
            <v-text-field v-model="product.id" label="id" required></v-text-field>
          </v-flex>
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
            <v-text-field v-model="product.imagelink" label="ImageLink" required></v-text-field>
          </v-flex>                 
      <v-btn @click="submitUpdate()">Update Product</v-btn>
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
        id: "",
        name: "",
        color: "",
        size: "",
        imagelink: ""
    },
    returnedProduct: {}
  }),
  methods: {
    submitUpdate: function() {
      this.$apollo.mutate({
          mutation: gql`
mutation updateProduct ( 
    $id: ID
    $name: String!
    $color: String!
    $size: String!
    $imagelink: String!
) {
    updateProduct(
        data:{ 
            name: $name
            color: $color
            size: $size
            imagelink: $imagelink
            }
        where:{ id: $id }    
    )
 {
    id
    name
    color
    size
    imagelink
 }
}
          `,
          variables: {
            id: this.product.id,
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