<template>
    <div>
        <v-container>
            <h2>Product By ID</h2>
            <v-flex xs12>
              <v-text-field v-model="id" label="ID" required></v-text-field>
            </v-flex>

            <v-btn @click="viewOne(), toggle()">VIEW PRODUCT ID</v-btn>
            <v-card v-show="isOpen">
            {{ products.name}}
            </v-card>
        </v-container>
    </div>
</template>

 <script>
import axios from 'axios'
export default {
    data () {
        return {
            products: {
                id: "",
                name: "",
                price: "",
                color: "",
                size: ""
            },
            id: this.$route.params.id,
            isOpen: false
        }
    },
    props: {

    },

    created() {
        axios.get('https://guarded-headland-15878.herokuapp.com/products/')
        .then((response) => {
            this.products = response.data
        })
        .catch(error => console.log(error))
    },

    methods: {
        viewOne(){
            axios
                .get('https://guarded-headland-15878.herokuapp.com/products/' + this.id)
                .then((response) => {
                    this.products = response.data
                    console.log(response)
                })
                .catch(error => console.log(error))
            },
            toggle: function() {
                this.isOpen = !this.isOpen
            }
        }
}
</script>
<style>
</style>