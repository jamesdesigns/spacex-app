<template>
    <div>
        <v-container>
            <h2>Delete a Product</h2>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>
            <v-btn @click="deleteProduct">Delete</v-btn>
        </v-container>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            id: this.$route.params.id,
            product: {
            }
        }
    },
    created() {
        axios
        .get('https://guarded-headland-15878.herokuapp.com/products/')
        .then((res) => {
            this.product = res.data
            })
            .catch((error) => {
                console.log(error)
            })
    },
    methods: {
        deleteProduct() {
            const productInfo = {
                id: this.id
            }
            console.log(productInfo)
            axios
            .delete('https://guarded-headland-15878.herokuapp.com/products/' + this.id + '/delete')
            .then((res) => {
                alert('Product Deleted!' + productInfo)
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