<template>
    <div>
        <h1>List of directed short movies</h1>
        <div class="movies">
            <MovieComponent v-for="movie in movies" :key="movie.id" :movie="movie" />
        </div>
    </div>
</template>

<script lang="ts">
import MovieComponent from "./Movie.vue";
import { fetchAllMovies } from "./movieService";
import type { Movie } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        MovieComponent,
    },
    data() {
        return {
            movies: [] as Movie[],
        };
    },
    async mounted() {
        this.movies = await fetchAllMovies();
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1080px;

    & > * {
        display: block;
        flex: 1 0 35%;
        min-width: 300px;
        max-width: 600px;
    }

    @include tablet-and-laptop {
        margin: -40px;

        & > * {
            margin: 40px;
        }
    }

    @include mobile {
        display: block;
        margin: 0;

        & > * {
            margin: 0 0 40px;
        }
    }
}
</style>
