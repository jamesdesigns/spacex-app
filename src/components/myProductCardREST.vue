<template>
<div>
    <v-card flat tile style="padding-left:5px; padding-right: 5px">
       
        <h3 class="headline mb-0">{{ products.name }}</h3>
      
        <v-card-title primary-title>
            <div >
                <h3 class="headline mb-0">{{ products.name }}</h3>
                <ul>
                    <li>ID: {{ products._id }}</li>
                    <li>Name: {{ products.name }}</li>
                    <li>Price: {{ products.price }}</li>
                    <li>Color: {{ products.color }}</li>
                    <li>Size: {{ products.size }}</li>
                </ul>
            </div>
        </v-card-title>
    </v-card>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            
        }
    },
    props: {
        products: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
</style>