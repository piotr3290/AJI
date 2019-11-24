<template>
    <div>
        <b-form-group label-cols-sm="3" label="Title:" label-for="inputTitleID">
            <b-form-input id="inputTitleID" type="text" placeholder="Podaj tytuł lub fragment tytułu filmu"
                          v-model="searchInput.titleInput"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="Rok produkcji od:" label-for="inputFromID">
            <b-input id="inputFromID" type="number" placeholder="Liczba naturalna z przedziału 1900-2019"
                     v-model="searchInput.fromYearInput"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="Rok produkcji do:" label-for="inputToID">
            <b-input id="inputToID" type="number" placeholder="Liczba naturalna z przedziału 1900-2019"
                     v-model="searchInput.toYearInput"/>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="Obsada:" label-for="inputCastID">
            <b-input id="inputCastID" type="text" placeholder="Imię i nazwisko" v-model="searchInput.castInput"/>
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