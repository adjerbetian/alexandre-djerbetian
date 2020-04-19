<template>
    <div class="movie">
        <h3>{{ movie.title }}</h3>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class MovieComponent extends Vue {
    @Prop(Object)
    movie!: { title: string };
}
</script>
