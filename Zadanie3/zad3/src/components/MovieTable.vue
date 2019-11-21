<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Cast</th>
                <th>Genres</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="index in counter"
                    v-bind:key="index">
                    <td>
                        {{myjson[index].title}}
                    </td>
                    <td>
                        {{myjson[index].year}}
                    </td>
                    <td> <a v-for="movieCast in myjson[index].cast"
                        v-bind:key="movieCast.id">
                        {{movieCast}}
                    </a>
                    </td>
                    <td> <a v-for="movieGenre in myjson[index].genres"
                        v-bind:key="movieGenre.id">
                        {{movieGenre}}
                    </a>
                    </td>
                </tr>
            </tbody>
        </table>
        <input type="button" value="Load 10 more" v-on:click="increaseCounter()">
    </div>
</template>

<script>
    import json from "../movies.json";
    export default {
        name: "MovieTable",
        data: function () {
            return{
                myjson : json,
                counter : 10
            }
        },
        methods : {
            increaseCounter : function(){
                this.counter += 10;
            }
        }

    }
</script>

<style scoped>
    th{
        border: black solid 1px;
    }
    td{
        border-bottom: black solid 1px;
        border-right: black solid 1px;

    }
</style>