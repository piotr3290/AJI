<template>
    <div>
        <h1>Products</h1>
        <h2>id {{p}}</h2>
        <h2>ilosc {{amount}}</h2>
        <b-table-simple dark hover><!--:items="products" :fields="fields"-->
            <b-thead>
           <b-tr>
                <b-th>Name</b-th>
                <b-th>Description</b-th>
                <b-th>Price</b-th>
               <b-th></b-th>
            </b-tr>
            </b-thead>
            <b-tbody>

            <b-tr v-for="product in products" v-bind:key="product.id">
                <b-td>{{product.name_prod}}</b-td>
                <b-td>{{product.description_prod}}</b-td>
                <b-td>{{product.price}}</b-td>
                <b-td><b-form inline v-on:submit="buy(product.id, product.amount)"><b-form-group>
                    <b-input v-model="product.amount" min="1" type="number" placeholder="Enter quantity"/>
                </b-form-group><b-button type="submit">Buy</b-button></b-form></b-td>
            </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: 'Products',
        props: ['products'],
        data: function () {
            return {
                p:0,
                amount: 1,
              fields: [
                {
                  key: 'name_prod',
                  label: 'Name',
                  sortable: true
                },
                {
                  key: 'description_prod',
                  label: 'Description',
                  sortable: true
                },
                {
                  key: 'price',
                  label: 'Price',
                  sortable: true
                }
              ]
            }
        },
        methods: {
            buy: function (id, amount) {
                this.p=id;
                this.amount = amount;

            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
