<template>
    <div v-if="movie">
        <h1>{{ movie.title }}</h1>
        <Youtube class="youtube" :id="movie.youtubeId" :title="movie.title" />
        <ul>
            <li><strong>Année :</strong> {{ movie.year }}</li>
            <li><strong>Direction :</strong> {{ movie.direction }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Movie } from "entities";
import { Component } from "vue-property-decorator";
import { Youtube } from "@/videos";
import { fetchMovie } from "./movieService";

@Component({
    components: { Youtube }
})
export default class MoviesPage extends Vue {
    movie?: Movie | null = null;

    async mounted() {
        await this.fetchMovie(this.$route.params.id);
    }
    async fetchMovie(id: string) {
        this.movie = await fetchMovie(id);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.youtube {
    margin: 20px 0;
    max-width: 1080px;
}
</style>
