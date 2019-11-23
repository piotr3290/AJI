<template>
    <div id="app">
        <div>
            <app-movieTable v-bind:all-movies="myjson"/>
        </div>
        <div>
            <app-movieGenre v-bind:movie-list="randomMovies()"/>
        </div>
    </div>
</template>


<script>
    import MovieTable from "./components/MovieTable";
    import json from "./movies.json";
    import MovieGenres from "./components/MovieGenres";
    import _ from 'lodash';


    export default {
        name: 'app',
        components: {
            'app-movieTable': MovieTable,
            'app-movieGenre': MovieGenres
        },
        data: function () {
            return{
                myjson: json
            }
        },
        methods: {
            randomMovies: function () {
                return _.slice(_.shuffle(this.myjson),0,100)
            }
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
