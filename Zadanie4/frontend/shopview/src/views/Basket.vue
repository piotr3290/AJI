<template>
    <div>
        <h1>Basket</h1>
        <app-basket-products></app-basket-products>
        <app-basket-form></app-basket-form>
    </div>
</template>

<script>
    import BasketProducts from "../components/BasketProducts";
    import BasketForm from "../components/BasketForm";

    export default {
        name: "Basket",
        components: {
            'app-basket-products': BasketProducts,
            'app-basket-form': BasketForm
        }
    }
</script>

<style scoped>


</style>
