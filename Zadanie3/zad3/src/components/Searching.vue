<template>
    <div>
        <h2>Baza filmów</h2>
        <form>
            <label>
                Tytuł
                <input type="text" placeholder="Podaj tytuł lub fragment tytułu filmu"/>
            </label>
            <label>
                Rok produkcji od:
                <input type="number" placeholder="Liczba naturalna z przedziału 1900-2019"/>
            </label>
            <label>
                Rok produkcji do:
                <input type="number" placeholder="Liczba naturalna z przedziału 1900-2019"/>
            </label>
            <label>
                Obsada:
                <input type="text" placeholder="Imię i nazwisko"/>
            </label>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Searching"
    }
</script>

<style scoped>

</style>