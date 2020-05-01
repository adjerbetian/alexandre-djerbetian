<template>
    <router-link :to="`/movies/${movie.id}`" class="movie">
        <h3>{{ movie.title }}</h3>
        <div class="cover">
            <BaseImage type="movies" :alt="movie.title" :name="movie.id" />
        </div>
    </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Movie } from "entities";
import { BaseImage } from "@/utils";

@Component({
    components: { BaseImage }
})
export default class MovieComponent extends Vue {
    @Prop(Object)
    movie!: Movie;
}
</script>

<style lang="scss" scoped>
.cover {
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
