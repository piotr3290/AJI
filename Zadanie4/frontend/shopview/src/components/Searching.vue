<template>
    <div>
        <b-input-group label="Name:" label-for="inputNameID">
            <b-col cols="2">
                <b-form-select id="inputCategoryID" v-model="searchInput.selected" :options="options"></b-form-select>
            </b-col>
            <b-col cols="8">
                <b-form-input id="inputNameID" type="text" placeholder="Enter product's name"
                              v-model="searchInput.nameInput"></b-form-input>
            </b-col>
            <b-col cols="2">
                <b-button block type="button" v-on:click="search">Search</b-button>
            </b-col>
        </b-input-group>
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
            search: function () {
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

    [class|=col] {
        padding: 0;
    }
    .form-control:focus, .custom-select:focus {
        border-color: #9500ff;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(149, 0, 255, 0.6);
    }
</style>
