<template>
    <div>
        <app-searching @newSearchingDetails="searchMovies($event)"/>

        <table class="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Cast</th>
                <th>Genres</th>
            </tr>
            </thead>
            <tbody v-if="filteredMovies.length > 0">
            <tr v-for="index in Math.min(filteredMovies.length, counter)"
                v-bind:key="index">
                <td>
                    {{filteredMovies[index-1].title}}
                </td>
                <td>
                    {{filteredMovies[index-1].year}}
                </td>
                <td>
                    <ul>
                        <li v-for="movieCast in filteredMovies[index-1].cast"
                            v-bind:key="movieCast.id">
                            {{movieCast}}
                        </li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li v-for="movieGenre in filteredMovies[index-1].genres"
                            v-bind:key="movieGenre.id">
                            {{movieGenre}}
                        </li>
                    </ul>
                </td>
            </tr>
            </tbody>
        </table>
        <b-button block variant="outline-info" v-on:click="increaseCounter()">Show 10 more</b-button>
    </div>
</template>

<script>
    import Searching from "./Searching";
    import _ from 'lodash';

    export default {
        name: "MovieTable",
        props: ['allMovies'],
        components: {
            'app-searching': Searching
        },
        data: function () {
            return {
                counter: 10,
                filteredMovies: this.allMovies
            }
        },
        methods: {
            increaseCounter: function () {
                this.counter += 10;
            },
            searchMovies: function (details) {
                this.filteredMovies = _.filter(this.allMovies, function (o) {

                    return o.year >= details.fromYearInput && (o.year <= details.toYearInput || !details.toYearInput)
                        && o.title.toLowerCase().includes(details.titleInput.toLowerCase()) && (_.findIndex(o.cast, function (o) {
                            return o.toLowerCase().includes(details.castInput.toLowerCase());
                        }) >= 0 || !details.castInput);
                });
            }
        }
    }
</script>

<style scoped>
    table {
        text-align: center;
    }

    ul {
        list-style: none;
        text-align: center;
        padding: 0px;
        margin: 0px;
    }

    td {
        vertical-align: middle !important;
    }


</style>