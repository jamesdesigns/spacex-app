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
            <v-text-field v-model="product.price" label="Price" required></v-text-field>
          </v-flex>
          <v-flex xs12>
          <v-text-field v-model="product.color" label="Color" required></v-text-field>
          </v-flex>   
          <v-flex xs12>
            <v-text-field v-model="product.size" label="Size" required></v-text-field>
          </v-flex>                 
      <v-btn @click="submitUpdate()">Update</v-btn>
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
        price: "",
        color: "",
        size: ""
    },
    returnedProduct: {}
  }),
  methods: {
    submitUpdate: function() {
      this.$apollo.mutate({
          mutation: gql`
mutation updateProduct { 
    updateProduct(where: {
    id: "_ENTER_EXISTING_ID_"
},
data: {
    name: "Musk Track Jacket",
    price: 30,
    color: "Light Gray",
    size: "Large",
    imagelink: "https://product-image-update.png"
})
 {
    id
    name
 }
}
          `,
          variables: {
            id: this.product.id,
            name: this.product.name,
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