<template>
    <div id="app">
        <h1>Welcome in our shop</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/products" exact>Show products</router-link>
                </li>
                <li>
                    <router-link to="/basket" exact>Show basket</router-link>
                </li>
            </ul>
        </nav>

        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {}
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
        padding: 6px 8px ;
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
    }
</style>
