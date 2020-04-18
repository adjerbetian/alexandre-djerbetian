<template>
    <main class="movies">
        <h1>List of directed short movies</h1>

        <div class="movies">
            <Movie v-for="movie in movies" :movie="movie" />
        </div>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import Movie from "../components/movies/Movie.vue";

export default Vue.extend({
    components: { Movie },
    data() {
        return {
            movies: [
                { title: `Chaque homme doit inventer son chemin` },
                { title: `Le monde à l'envers` },
                { title: `Royale with Cheese` },
                { title: `120 ans d'histoire` },
                { title: `The snowman and the Bee` },
                { title: `Maxi Best Of` }
            ]
        };
    }
});
</script>
