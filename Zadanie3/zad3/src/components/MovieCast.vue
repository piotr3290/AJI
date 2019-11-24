<template>
    <div>
        <h2 v-b-tooltip.hover title="100 random movies group by cast">Filmography by cast</h2>
        <b-button block variant="outline-info" v-on:click="toggleShow()">{{show.value}}</b-button>
        <div v-if="show.isShown">
            <div>
                <b-button class="float-right" v-b-tooltip.hover title="Load new movies" variant="outline-info"
                          v-on:click="alertReload">Reload
                </b-button>
            </div>
            <ul id="genreList" v-if="grouped.length > 0">
                <li id="genreListEl" v-bind:key="i" v-for="i in grouped.length">{{grouped[i-1].cast}}
                    <ul id="titleList">
                        <li v-bind:key="j" v-for="j in grouped[i-1].titles.length">
                            <a>{{grouped[i-1].titles[j-1]}}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: "MovieCast",
        props: ['movieList'],
        data: function () {
            return {
                grouped: [],
                show: {
                    isShown: false,
                    value: 'Show'
                }
            }
        },
        methods: {
            grupuj2: function () {

                _.each(this.movieList, function (o) {
                    if (o.cast.length == 0) {
                        o.cast.push("unknown");
                    }
                });
                let res = [];
                _.each(this.movieList, function (o) {
                    return _.each(o.cast, function (cast) {
                        res.push({'title': o.title, 'cast': cast})
                    })
                });
                this.grouped = _.sortBy(_.map(_.groupBy(res, 'cast'), function (o, cas) {
                    return {
                        cast: cas,
                        titles: _.map(o, 'title')
                    };
                }), ['cast', 'titles']);


            },
            toggleShow() {
                if (this.show.isShown) {
                    this.show.value = 'Show';
                } else {
                    this.show.value = 'Hide';
                }
                this.show.isShown = !this.show.isShown;
            },
            alertReload: function () {
                this.$emit('randNewMovies');
                this.grupuj2();
            }
        },
        mounted() {
            this.grupuj2();
            this.alertReload();
        }

    }
</script>

<style scoped>
    #titleList {
        list-style-image: url("../images.jpg");

    }

    ul a {
        padding: 5px;
        display: block;
    }

</style>