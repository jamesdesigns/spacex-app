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
            products: []
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },

    methods: {
        viewOne(){
            axios
                .get('https://guarded-headland-15878.herokuapp.com/products/' + this.id)
                .then((response) => {
                    this.products = response.data
                    console.log(res)
                })
                .catch(error => console.log(error))
            },
            toggle: function() {
                this.isOpen = !this.isOpen
            }
        }
    
        // created(){
        //     axios
        //         .get('https://guarded-headland-15878.herokuapp.com/products/all')
        //         .then((response) => {
        //             this.products = response.data
        //         })
        //         .catch(error => console.log(error))
        //         }
}
</script>
<style>
</style>