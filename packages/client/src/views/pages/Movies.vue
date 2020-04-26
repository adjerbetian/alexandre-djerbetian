<template>
    <div>
        <h1>List of directed short movies</h1>
        <div class="movies">
            <MovieComponent v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import MovieComponent from "@/views/components/movies/Movie.vue";
import { fetchAllMovies } from "@/services/movieService";
import { Movie } from "entities";
import { Component } from "vue-property-decorator";

@Component({
    components: { MovieComponent }
})
export default class MoviesPage extends Vue {
    movies: Movie[] = [];

    async mounted() {
        await this.fetchMovies();
    }
    async fetchMovies() {
        this.movies = await fetchAllMovies();
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -40px;

    & > * {
        margin: 40px;
        flex: 1 0 40%;
        min-width: 300px;
        max-width: 600px;
    }
}

@media (max-width: $screen-size-s) {
    .movies {
        display: block;
        margin: 0;

        & > * {
            display: block;
            margin: 0 0 40px;
        }
    }
}
</style>
