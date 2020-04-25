<template>
    <router-link :to="`/movies/${movie.id}`" class="movie">
        <h3>{{ movie.title }}</h3>
        <div class="image">
            <img :alt="movie.title" :src="image" />
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Movie } from "entities";
import { imageService } from "../../services";

@Component
export default class MovieComponent extends Vue {
    @Prop(Object)
    movie!: Movie;

    get image() {
        return imageService.getImage("movies", this.movie.id);
    }
}
</script>

<style lang="scss" scoped>
.image {
    padding-top: 56.25%;
    position: relative;
    img {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
