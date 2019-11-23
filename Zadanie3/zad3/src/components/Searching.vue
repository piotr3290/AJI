<template>
    <div>
        <h2>Baza filmów</h2>
        <form>
            <label>
                Tytuł
                <input type="text" placeholder="Podaj tytuł lub fragment tytułu filmu" v-model="searchInput.titleInput" />
            </label>
            <label>
                Rok produkcji od:
                <input type="number" placeholder="Liczba naturalna z przedziału 1900-2019" v-model="searchInput.fromYearInput"/>
            </label>
            <label>
                Rok produkcji do:
                <input type="number" placeholder="Liczba naturalna z przedziału 1900-2019" v-model="searchInput.toYearInput"/>
            </label>
            <label>
                Obsada:
                <input type="text" placeholder="Imię i nazwisko" v-model="searchInput.castInput"/>
            </label>
        </form>
        <input type="button" value="Search" v-on:click="search">

    </div>
</template>

<script>
    export default {
        name: "Searching",
        data: function() {
            return {
                searchInput : {
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