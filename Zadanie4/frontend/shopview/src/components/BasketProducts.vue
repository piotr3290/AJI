<template>
    <div>
        <b-table-simple hover><!--:items="products" :fields="fields"-->
            <b-thead>
                <b-tr>
                    <b-th>Name</b-th>
                    <b-th>Price</b-th>
                    <b-th>Amount</b-th>
                    <b-th></b-th>
                </b-tr>
            </b-thead>
            <b-tbody>

                <b-tr v-for="product in basket" v-bind:key="product.id">
                    <b-td>{{product.name_prod}}</b-td>
                    <b-td>{{euroFormat(product.price)}}</b-td>
                    <b-td>
                        <div>
                            <b-button type="button" v-on:click="decreaseAmount(product)">-</b-button>
                            {{product.amount}}
                            <b-button type="button" v-on:click="increaseAmount(product)">+</b-button>
                        </div>
                    </b-td>
                    <b-td>
                        <div>
                            <b-button type="button" v-on:click="deleteProduct(product)">X</b-button>
                        </div>
                    </b-td>
                </b-tr>
            </b-tbody>
        </b-table-simple>
        <div>
            <h3>Total value: <b>{{totalAmount}}</b></h3>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: "BasketProducts",
        methods: {
            increaseAmount: function (product) {
                product.amount += 1;
            },
            decreaseAmount: function (product) {
                product.amount -= 1;
                if (product.amount === 0) {
                    this.deleteProduct(product);
                }
            },
            deleteProduct: function (product) {
                product.amount = 0;
                _.remove(this.$route.params.basket, function (o) {
                    return o.id === product.id;
                })
            },
            euroFormat: function (number) {
                return Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(number)
            }
        },
        computed: {
            totalAmount: function () {
                let result = 0;
                for (let product of this.$route.params.basket) {
                    result += product.amount * product.price;
                }
                return this.euroFormat(result);
            }
        },
        data: function () {
            return {
                basket: []
            }
        },
        mounted() {
            this.basket = this.$route.params.basket;
        }
    }
</script>

<style scoped>

    td, th {
        background: #444 !important;
        color: #eeeeee !important;
    }

    h3 {
        text-align: right;
        margin-right: 10px;
    }

</style>
