<template>
    <main class="movies">
        <h1>List of directed short movies</h1>

        <div class="movies">
            <MovieComponent v-for="movie in movies" :movie="movie" />
        </div>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import MovieComponent from "@/components/movies/Movie.vue";
import { fetchAllMovies } from "@/services/movieService";
import { Movie } from "entities";

export default Vue.extend({
    components: { MovieComponent },
    data() {
        return {
            movies: [] as Movie[]
        };
    },
    async mounted() {
        this.fetchMovies();
    },
    methods: {
        async fetchMovies() {
            this.movies = await fetchAllMovies();
        }
    }
});
</script>
