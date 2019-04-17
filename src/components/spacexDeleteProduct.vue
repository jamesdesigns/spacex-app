<template>
  <div class="about">
      {{ error }}
      {{ returnedProduct }}
        <v-container>
          <v-flex xs12>
            <v-text-field v-model="product.id" label="id" required></v-text-field>
          </v-flex>
      <v-btn color="error" @click="submitDelete()">Delete</v-btn>
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
        name: String
    },
    returnedProduct: {}
  }),
  methods: {
    submitDelete: function() {
      this.$apollo.mutate({
          mutation: gql`
                mutation deleteProduct(
                    $id: ID
                ) {
                    deleteProduct (
                        where: {id: $id }) 
                    {
                        id
                        name
                    }
                    }
          `,
          variables: {
            id: this.product.id,
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
