<template>
    <v-card flat tile style="padding-left:5px; padding-right: 5px">
        <v-img :src="product.imagelink" height="400px" class="black--text" style="text-align: center;background-color:#F0F0F0;">
            <h3 class="headline mb-0">{{ product.name }}</h3>
        </v-img>
        <v-card-title primary-title>
            <div>
                <!-- <h3 class="headline mb-0">{{ product.name }}</h3> -->
                <ul>
                    <li>Price: ${{ product.price }}</li>
                    <li>Color: {{ product.color }}</li>
                </ul>
            </div>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
    }
</style>
