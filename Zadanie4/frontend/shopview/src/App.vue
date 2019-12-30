<template>
    <div id="app">
        <b-container>
            <b-row>
                <b-col>
                    <h1>Shop pracz</h1>
                    <nav>
                        <ul>
                            <li>
                                <router-link :to="{name: 'home'}" exact>Home
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'products', params: {basket}}" exact>Show products
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="{name: 'basket', params: {basket}}" exact>Show basket</router-link>
                            </li>
                        </ul>
                    </nav>

                    <router-view/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>

    export default {
        name: 'app',
        data: function () {
            return {
                basket: []
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #444;
        margin-top: 10px;
    }

    ul {
        list-style-type: none;
        text-align: center;
        margin: 0 !important;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #fff !important;
        text-decoration: none !important;
        padding: 6px 8px;
        border-radius: 10px;
    }

    nav {
        background: #444;
        padding: 14px 0;
        margin-bottom: 40px;
    }

    .router-link-active {
        background: #eeeeee;
        color: #444 !important;
        font-weight: bold;

    }
    button {
        background: #eeeeee !important;
        color: #444 !important;
        border: none;
    }


</style>
