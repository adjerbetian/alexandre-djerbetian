<template>
    <main v-if="movie">
        <h1>{{ movie.title }}</h1>
        <Youtube :id="movie.youtubeId" :title="movie.title" />
        <ul>
            <li><strong>Année :</strong> {{ movie.year }}</li>
            <li><strong>Direction :</strong> {{ movie.direction }}</li>
        </ul>
    </main>
</template>

<script lang="ts">
import Vue from "vue";
import { Movie } from "entities";
import { Component } from "vue-property-decorator";
import { movieService } from "@/services";
import Youtube from "@/views/components/Youtube.vue";

@Component({
    components: { Youtube }
})
export default class MoviesPage extends Vue {
    movie?: Movie | null = null;

    async mounted() {
        await this.fetchMovie(this.$route.params.id);
    }
    async fetchMovie(id: string) {
        this.movie = await movieService.fetchMovie(id);
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
</style>
