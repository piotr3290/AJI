<template>
    <div id="app">
        <b-container fluid id="mainContainer">

            <b-row>
                <b-col id="col1" cols="2">

                    <b-nav vertical id="navbar">
                        <b-button variant="outline-info" href="#secTable">Movie table</b-button>
                        <b-button variant="outline-info" href="#secGenre">Movie genre</b-button>
                        <b-button variant="outline-info" href="#secCast">Movie cast</b-button>

                    </b-nav>
                </b-col>
                <b-col id="col2" cols="10">
                    <h1 id="secTable">Movies database</h1>
                    <app-movieTable v-bind:all-movies="myjson"/>
                    <app-movieGenre @randNewMovies="randGenre()" id="secGenre" v-bind:movie-list="randomMoviesGen"/>
                    <app-movieCast @randNewMovies="randCast()" id="secCast" v-bind:movie-list="randomMoviesCast"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
    import MovieTable from "./components/MovieTable";
    import json from "./movies.json";
    import MovieGenres from "./components/MovieGenres";
    import MovieCast from "./components/MovieCast";
    import _ from 'lodash';


    export default {
        name: 'app',
        components: {
            'app-movieTable': MovieTable,
            'app-movieGenre': MovieGenres,
            'app-movieCast': MovieCast
        },
        data: function () {
            return {
                myjson: json,
                randomMoviesGen: [],
                randomMoviesCast: []
            }
        },
        methods: {
            randMovies: function () {
                return _.slice(_.shuffle(this.myjson), 0, 100)
            },
            randGenre: function () {
                this.randomMoviesGen = this.randMovies();
            },
            randCast: function () {
                this.randomMoviesCast = this.randMovies();
            }
        },
        created() {
            this.randGenre();
            this.randCast();
        }
    }
</script>

<style>
    h1, h2 {
        text-align: center;
        margin: 30px !important;
    }
    button {
        margin-bottom: 30px !important;
    }

    html {
        scroll-behavior: smooth;
    }

    #navbar {
        position: sticky;
        top: 25%;
    }

    #col1 {
        padding-left: 20px;
    }

    #col2 {
        padding-right: 50px;
    }

    #navbar > * {
        margin-top: 20px;
        margin-bottom: 20px;
    }

</style>
