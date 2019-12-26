<template>
    <div>
        <b-form-group label="Name:" label-for="inputNameID">
            <b-form-input id="inputNameID" type="text" placeholder="Enter product's name"
                          v-model="searchInput.nameInput"></b-form-input>
        </b-form-group>
        <b-form-group label="Category:" label-for="inputCategoryID">
        <b-form-select id="inputCategoryID" v-model="searchInput.selected" :options="options"></b-form-select>
        <b-button block variant="outline-info" type="button" v-on:click="search">Search</b-button>
        </b-form-group>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Searching",
        data: function () {
            return {
                searchInput: {
                    nameInput: '',
                    selected: 0,
                },
                options: [{value: 0, text: 'All'}],
            }
        },
        methods: {
            search: function() {
                this.$emit('searchingDetails', this.searchInput);
            }
        },
        mounted() {
            let categories = [];
            axios.get('http://127.0.0.1:8081/categories')
                .then(res => {
                    categories = res.data;
                    for (let category of categories) {
                        this.options.push({value: category.id, text: category.name_cat})
                    }
                });

        }
    }
</script>

<style scoped>

</style>
