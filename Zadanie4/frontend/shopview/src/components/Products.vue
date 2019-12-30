<template>
    <div>
        <b-table-simple hover><!--:items="products" :fields="fields"-->
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
                <b-td>{{euroFormat(product.price)}}</b-td>
                <b-td><b-form inline v-on:submit.prevent="onSubmit(product)"><b-form-group>
                    <b-input size="sm" required v-model="product.amount" min="1" type="number" placeholder="Enter quantity"/>
                    <b-button size="sm" type="submit">Buy</b-button>
                </b-form-group></b-form></b-td>
            </b-tr>
            </b-tbody>
        </b-table-simple>
    </div>
</template>

<script>
    export default {
        name: 'Products',
        props: ['products'],
        methods: {
            onSubmit: function (product) {
                let details = JSON.parse(JSON.stringify({id: product.id, amount: parseInt(product.amount)}));
                product.amount = '';
                this.$emit('productDetails', details);
            },
            euroFormat: function (number) {
                return Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(number)
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

    td,th {
        background: #444 !important;
        color: #eeeeee !important;
    }

    form {
        display: inline;
    }
    .form-control:focus {
        border-color: #9500ff;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(149, 0, 255, 0.6);
    }
</style>
