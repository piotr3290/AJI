<template>
        <b-col>
            <app-searching @searchingDetails="searchProducts($event)"/>
            <app-products @productDetails="addToBasket($event)" v-bind:products="filteredProducts"/>
        </b-col>
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
                filteredProducts: [],
                basket: []
            }
        },
        methods: {
            searchProducts: function (details) {
                this.filteredProducts = _.filter(this.products, function (prod) {
                    return prod.name_prod.toLowerCase().includes(details.nameInput.toLowerCase())
                        && (prod.category_id === details.selected || details.selected === 0)
                })
            },
            addToBasket: function (details) {
                let product = _.find(this.$route.params.basket, function (o) {
                    return o.id === details.id;
                });
                if (!product) {
                    product = JSON.parse(JSON.stringify(_.find(this.products, function (o) {
                        return o.id === details.id;
                    })));
                    product.amount = details.amount;
                    this.$route.params.basket.push(product)

                } else {
                    product.amount += details.amount;
                }

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
    div > * {
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    }

</style>
