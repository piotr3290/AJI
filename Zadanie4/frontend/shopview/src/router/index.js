import Vue from 'vue'
import VueRouter from "vue-router";
import AllProducts from "../views/AllProducts";
import Basket from "../views/Basket";
import Home from "../views/Home";

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/products',
            name: 'products',
            component: AllProducts,
            params: {basket: []}
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket,
            params: {basket: []}
        }
    ]
});

export default router;
