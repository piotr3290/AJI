<template>
    <div>
        <h1>ALLPRODUCTS</h1>
        <app-searching @searchingDetails="searchProducts($event)"/>
        <app-products v-bind:products="filteredProducts"/>
    </div>
</template>

<script>
    import Products from '../components/Products.vue'
    import Searching from "../components/Searching";
    import axios from 'axios';
    import _ from 'lodash';


    export default {
        name: "AllProducts",
        components: {
            'app-products': Products,
            'app-searching': Searching
        },
        data: function () {
            return {
                products: [],
                filteredProducts: []
            }
        },
        methods: {
            searchProducts: function (details) {
                this.filteredProducts = _.filter(this.products, function (prod) {
                    return prod.name_prod.toLowerCase().includes(details.nameInput.toLowerCase())
                        && (prod.category_id === details.selected || details.selected === 0)
                })
            }
        },
        created() {
            axios.get('http://127.0.0.1:8081/products')
                .then(res => {
                    this.products = res.data;
                    this.filteredProducts = this.products;

                });
        }
    }
</script>

<style scoped>

</style>
