<template>
    <div>
        <b-form v-on:submit.prevent="finalize">
            <b-form-group label-cols="4" label="Username:" label-for="inputUsernameID">
                <b-form-input required id="inputUsernameID" type="text" placeholder="Enter your username"
                              v-model="userData.username"/>
            </b-form-group>
            <b-form-group label-cols="4" label="Email address:" label-for="inputEmailID">
                <b-form-input required id="inputEmailID" type="email" placeholder="Enter your email address"
                              v-model="userData.email"/>
            </b-form-group>
            <b-form-group label-cols="4" label="Phone number:" label-for="inputPhoneID">
                <vue-tel-input class="magic_flag" validCharactersOnly required v-model="userData.phone"></vue-tel-input>
            </b-form-group>
            <b-button type="submit">Finalize</b-button>
        </b-form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "BasketForm",
        data: function () {
            return {
                userData: {
                    username: '',
                    email: '',
                    phone: ''
                }
            }
        },
        methods: {
            finalize: function (event) {
                let products = [];
                for (let product of this.$route.params.basket) {
                    products.push({order_id: 8, product_id: product.id, amount: product.amount})
                }

                if (products.length === 0) {
                    alert("Your basket is empty.")
                } else {
                    let self = this;
                    axios({
                        method: 'post',
                        url: 'http://127.0.0.1:8081/orders',
                        data: {
                            status_id: 1,
                            username: this.userData.username,
                            email: this.userData.email,
                            phone: this.userData.phone,
                            products: products
                        }
                    })
                        .then(function () {
                            alert('Your order has been placed!');
                            event.target.reset();
                            while (self.$route.params.basket.length > 0) {
                                self.$route.params.basket.pop();
                            }
                            self.$router.push('/');

                        })
                        .catch(function (error) {
                            alert(JSON.stringify(error));
                        });

                }
            }
        }
    }
</script>

<style scoped>
    .form-control:focus, .vue-tel-input:focus-within {
        border-color: #9500ff;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(149, 0, 255, 0.6);
    }

    button {
        float: right;
    }

</style>
