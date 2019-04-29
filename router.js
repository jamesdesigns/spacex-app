import Vue from "vue"
import Router from "vue-router"
import spacexAllProducts from "./components/spacexAllProducts.vue"
import spacexConnectProduct from "./components/spacexConnectProduct.vue"
import spacexOneProduct from "./components/spacexOneProduct.vue"
import spacexCreateProduct from "./components/spacexCreateProduct.vue"
import spacexDeleteProduct from "./components/spacexDeleteProduct.vue"
import spacexUpdateProduct from "./components/spacexUpdateProduct.vue"

import allProductsREST from "./components/allProductsRest.vue"
import connectProductREST from "./components/connectProductREST"
import oneProductREST from "./components/oneProductREST"
import createProductREST from "./components/createProductREST"
import deleteProductREST from "./components/deleteProductREST"
import updateProductREST from "./components/updateProductREST"

import myProductCard from "./components/myProductCard"
import myProductCardREST from "./components/myProductCardREST"
import display from "./components/display"
import displayREST from "./displayREST"




Vue.use(Router);


export default new Router({
  routes: [
  
    {
        path: "/",
        name: "spacexAllProducts",
        redirect: "spacexAllProducts",
        component: spacexAllProducts
    },
    {
        path: "/spacexAllProducts",
        name: "spacexAllProducts",
        component: spacexAllProducts
    },
    {
        path: "/spacexConnectProduct",
        name: "spacexConnectProduct",
        component: spacexConnectProduct
    },
    {
        path: "/spacexOneProduct",
        name: "spacexOneProduct",
        component: spacexOneProduct
    },
    {
        path: "/spacexCreateProduct",
        name: "spacexCreateProduct",
        component: spacexCreateProduct
    },
    {
        path: "/spacexDeleteProduct",
        name: "spacexDeleteProduct",
        component: spacexDeleteProduct
    },
    {
        path: "/spacexUpdateProduct",
        name: "spacexUpdateProduct",
        component: spacexUpdateProduct
    },
    {
        path: "/allProductsREST",
        name: "allProductsREST",
        component: allProductsREST
    },
    {
        path: "/connectProductREST",
        name: "connectProductREST",
        component: connectProductREST
    },
    {
        path: "/oneProductREST",
        name: "oneProductREST",
        component: oneProductREST
     },
     {
        path: "/createProductREST",
        name: "createProductREST",
        component: createProductREST
     },
     {
        path: "/deleteProductREST",
        name: "deleteProductREST",
        component: deleteProductREST
     },
     {
         path: "/updateProductREST",
         name: "updateProductREST",
         component: updateProductREST
     },
     {
         path: "/myProductCard",
         name: "myProductCard",
         component: myProductCard
     },
     {
         path: "/myProductCardREST",
         name: "myProductCardREST",
         component: myProductCardREST
     },
     {
         path: "/display",
         name: "display",
         component: display
     },
     {
         path: "displayREST",
         name: "displayREST",
         component: displayREST
     }
  ]
});