<template>
      <div class="about">
        <v-container>
            <h2>Update a Product</h2>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field v-model="name" label="Name" required></v-text-field>
            </v-flex>
             <v-flex xs12>
              <v-text-field v-model="price" label="Price" required></v-text-field>
            </v-flex>
             <v-flex xs12>
              <v-text-field v-model="color" label="Color" required></v-text-field>
            </v-flex>
             <v-flex xs12>
              <v-text-field v-model="size" label="Size" required></v-text-field>
            </v-flex>
            <v-btn @click="updateProduct">Update</v-btn>
        </v-container>
  </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            // id: this.$route.params.id,
            id: this.id,
            name: this.name,
            price: this.price,
            color: this.color,
            size: this.size,
            product: {
            }
        }
    },
    created() {
        axios
        .get('https://guarded-headland-15878.herokuapp.com/products/update')
        .then((response) => {
            this.product = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    props: {
        //
    },
    methods: {
        updateProduct() {
            const productInfo = {
                id: this.id,
                name: this.name,
                price: this.price,
                color: this.color,
                size: this.size
            }
            console.log(productInfo)
            axios
            .put('https://guarded-headland-15878.herokuapp.com/products/' + this.id + '/update', productInfo)
            .then((res) => {
                alert('Product Updated!' + productInfo)
                this.$router.push('/')
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>
<style>
</style>