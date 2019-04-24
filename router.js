import Vue from "vue";
import Router from "vue-router";
import spacexAllProducts from "./components/spacexAllProducts.vue"



Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      name: "spacexAllProducts",
      redirect: "spacexAllProducts",
      component: spacexAllProducts
    },
  ]
});