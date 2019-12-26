import Vue from 'vue'
import VueRouter from "vue-router";
import AllProducts from "../views/AllProducts";
import Basket from "../views/Basket";

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/products',
            name: 'products',
            component: AllProducts
        },
        {
            path: '/basket',
            name: 'basket',
            component: Basket
        }
    ]
});

export default router;
