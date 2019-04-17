<template>
  <div class="about">
      {{ error }}
      {{ returnedProduct }}
        <v-container>
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
        price: Float,
        color: String,
        size: String
    },
    returnedProduct: {}
  }),
  methods: {
    submitUpdate: function() {
      this.$apollo.mutate({
          mutation: gql`
                mutation updateProduct(
                    $id: ID
                    $name: String
                ) {
                    updateProduct(
                    data:{name: $name}
                    where:{id: $id}
                ) {
                    id
                    name
                    price
                    color
                    size
                }
                }
          `,
          variables: {
            id: this.product.id,
            name: this.product.name,
            price: this.product.price,
            color: this.product.color,
            size: this.product.size
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