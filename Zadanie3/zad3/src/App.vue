<template>
    <div id="app">
        <div>
            <HelloWorld/>
        </div>
        <div>
            <Searching/>
        </div>
      <div>
        <MovieTable/>
      </div>
    </div>
</template>


<script>
    import HelloWorld from "./components/HelloWorld.vue";
    import Searching from "./components/Searching";
    import MovieTable from "./components/MovieTable";

    export default {
        name: 'app',
        components: {
            HelloWorld,
            Searching,
            MovieTable
        }
    }
</script>

<style>

    body {
        background: #20262E;
        padding: 20px;
        font-family: Helvetica;
    }

    #app {
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        transition: all 0.2s;
    }

</style>
