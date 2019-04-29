<template>
    <div>
        <v-container>
            <h2>Create a Product</h2>
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
            <v-btn @click="createProduct">Create</v-btn>
        

        </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            name: "",
            price: "",
            color: "",
            size: ""
        }
    },
    methods: {
        createProduct () {
            const productInfo = {
                name: this.name,
                price: this.price,
                color: this.color,
                size: this.size
            }
            console.log(productInfo)
            axios
            .post('https://guarded-headland-15878.herokuapp.com/products/', productInfo)
            .then((res) => {
                alert('Product Created!')
                this.$router.push('/')
            })
            .catch(error => console.log(error))
        }
    }
}
</script>
<style>
</style>