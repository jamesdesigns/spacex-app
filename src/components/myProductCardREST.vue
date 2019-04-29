<template>
    <v-card flat tile style="padding-left:5px; padding-right: 5px">
       
        <h3 class="headline mb-0">{{ product.name }}</h3>
      
        <v-card-title primary-title>
            <div >
                <h3 class="headline mb-0">{{ product.name }}</h3>
                <ul>
                    <li>ID: {{ product.id }}</li>
                    <li>Name: {{ product.name }}</li>
                    <li>Price: {{ product.price }}</li>
                    <li>Color: {{ product.color }}</li>
                    <li>Size: {{ product.size }}</li>
                </ul>
            </div>
        </v-card-title>
    </v-card>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            //
        }
    },
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    mounted() {
        axios
        .get('https://guarded-headland-15878.herokuapp.com/products/')
        .then((res) => {
            this.products = res.data
        })
        .catch(error => console.log(error))
    }
}
</script>
<style>
</style>