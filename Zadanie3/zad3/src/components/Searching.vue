<template>
    <div>
        <b-form-group label-cols-sm="3" label="Title:" label-for="inputTitleID">
            <b-form-input id="inputTitleID" type="text" placeholder="Enter movie's title"
                          v-model="searchInput.titleInput"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="Year from:" label-for="inputFromID">
            <b-input id="inputFromID" type="number" placeholder="Enter integer 1900-2019"
                     v-model="searchInput.fromYearInput"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="To:" label-for="inputToID">
            <b-input id="inputToID" type="number" placeholder="Enter integer 1900-2019"
                     v-model="searchInput.toYearInput"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="Cast:" label-for="inputCastID">
            <b-input id="inputCastID" type="text" placeholder="Enter name" v-model="searchInput.castInput"/>
        </b-form-group>

        <b-button block variant="outline-info" type="button" v-on:click="search">Search</b-button>

    </div>
</template>

<script>
    export default {
        name: "Searching",
        data: function () {
            return {
                searchInput: {
                    titleInput: '',
                    fromYearInput: '',
                    toYearInput: '',
                    castInput: ''
                }
            }
        },
        methods: {
            search() {
                this.$emit('newSearchingDetails', this.searchInput)
            }
        }
    }
</script>

<style scoped>

</style>