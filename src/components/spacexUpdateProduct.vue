<template>
  <div class="about">
        <v-container>
            <v-card>
            <h1>Update Product</h1>
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
            </v-card>
        </v-container>
  </div>
</template>

<script>
import gql from "graphql-tag";
export default {
  data: () => ({
    error: "",
    product: {
        id: String,
        name: String,
        price: Float32Array,
        color: String,
        size: String
    },
    returnedProduct: {}
  }),
  methods: {
    submitUpdate: function() {
      this.$apollo.mutate({
          mutation: gql`
                mutation updateProduct (
                    $id: ID
                    $name: String
                    ) {
                    updateProduct(
                        where: { id: $id }, 
                        data:{ name: $name }
                    )
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