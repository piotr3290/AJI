<template>
    <div>
        <h2 v-b-tooltip.hover title="100 random movies group by genre">Filmography by genre</h2>


        <b-button block variant="outline-info" v-on:click="toggleShow()">{{show.value}}</b-button>
        <div v-if="show.isShown">
            <div>
                <b-button class="float-right" v-b-tooltip.hover title="Load new movies" variant="outline-info"
                          v-on:click="alertReload">Reload
                </b-button>
            </div>
            <ul id="genreList" v-if="grouped.length > 0">
                <li id="genreListEl" v-bind:key="i" v-for="i in grouped.length">{{grouped[i-1].genre}}
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
        name: "MovieGenres",
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
            grupuj: function () {
                _.each(this.movieList, function (o) {
                    if (o.genres.length == 0) {
                        o.genres.push("unknown");
                    }
                });

                let res = [];

                _.each(this.movieList, function (o) {
                    return _.each(o.genres, function (genre) {
                        res.push({'title': o.title, 'genre': genre})
                    })
                });
                this.grouped = _.each(_.sortBy(_.map(_.groupBy(res, 'genre'), function (o, gen) {
                    return {
                        genre: gen,
                        titles: _.map(o, 'title')
                    };
                }), ['genre']), function (o) {
                    o.titles = _.sortBy(o.titles);
                });


            },
            toggleShow: function () {
                if (this.show.isShown) {
                    this.show.value = 'Show';
                } else {
                    this.show.value = 'Hide';
                }
                this.show.isShown = !this.show.isShown;
            },
            alertReload: function () {
                this.$emit('randNewMovies');
                this.grupuj();
            }
        },
        mounted() {
            this.grupuj();
            this.alertReload();
        }
    }
</script>

<style scoped>
    #genreList {
        list-style-type: circle;
    }

    #titleList {
        list-style-image: url("../images.jpg");

    }

    #genreListEl {
        margin-bottom: 10px;
        margin-top: 15px;
    }

    ul a {
        padding: 5px;
        display: block;
    }

</style>