<template>
    <div>
        <div>
            <app-searching @newSearchingDetails="searchMovies($event)"/>
        </div>
        <table>
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
                    <td><a v-for="movieCast in filteredMovies[index-1].cast"
                           v-bind:key="movieCast.id">
                        {{movieCast}}
                    </a>
                    </td>
                    <td><a v-for="movieGenre in filteredMovies[index-1].genres"
                           v-bind:key="movieGenre.id">
                        {{movieGenre}}
                    </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <input type="button" value="Load 10 more" v-on:click="increaseCounter()">
        <input type="button" value="filter" v-on:click="filterek()">
    </div>
</template>

<script>
    import Searching from "./Searching";
    import _ from 'lodash';

    export default {
        name: "MovieTable",
        props : ['allMovies'],
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

                    return o.year >= details.fromYearInput && (o.year <= details.toYearInput || !details.toYearInput )
                        && o.title.toLowerCase().includes(details.titleInput.toLowerCase()) && (_.findIndex(o.cast, function (o) {
                            return o.toLowerCase().includes(details.castInput.toLowerCase());
                        }) >= 0 || !details.castInput);
                });
            },
            filterek: function () {
                //alert(this.searchingDetails.fromYearInput);
               /* let users = [
                    {'user': 'barney', 'age': [36, 50], 'active': true},
                    {'user': 'fred', 'age': [40, 50], 'active': false},
                    {'user': 'pebbles', 'age': [1, 20], 'active': true},
                    {'user': 'pebbles', 'age': [], 'active': true}
                ];*/


                //this.zmienna = _.filter(this.myjson,function(o){return o.year >= 1950 & o.year <= 2000})


            }
        }
    }
</script>

<style scoped>
    th {
        border: black solid 1px;
    }

    td {
        border-bottom: black solid 1px;
        border-right: black solid 1px;

    }
</style>