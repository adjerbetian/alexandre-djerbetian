<template>
    <router-link :to="`/movies/${movie.id}`" class="movie">
        <h3>{{ movie.title }}</h3>
        <div class="cover">
            <BaseImage type="movies" :alt="movie.title" :name="movie.id" />
        </div>
    </router-link>
</template>

<script lang="ts">
import { BaseImage } from "@/utils";
import type { Movie } from "@alex/entities";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        BaseImage,
    },
    props: {
        movie: {
            type: Object as PropType<Movie>,
            required: true,
        },
    },
});
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
