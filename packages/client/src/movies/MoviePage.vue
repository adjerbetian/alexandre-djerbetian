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
import { fetchMovie } from "./movieService";
import { validationService } from "@/utils";
import { Youtube } from "@/videos";
import type { Movie } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Youtube,
    },
    data() {
        return {
            movie: null as Movie | null,
        };
    },
    async mounted() {
        validationService.assertIsId(this.$route.params.id);
        await this.fetchMovie(this.$route.params.id);
    },
    methods: {
        async fetchMovie(id: string) {
            this.movie = await fetchMovie(id);
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.youtube {
    margin: 20px 0;
    max-width: 1080px;
}
</style>
