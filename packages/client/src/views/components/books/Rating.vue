<template>
    <div>
        <div class="stars" aria-hidden="true">
            <Star :data-test-id="`star-${value}`" v-for="(value, index) in fillings" :filling="value" :key="index" />
        </div>
        <span class="sr-only">Rating: {{ rating }}</span>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { getFillings } from "./rating";
import Star from "./Star.vue";

@Component({ components: { Star } })
export default class RatingComponent extends Vue {
    @Prop(Number) rating!: number;

    get fillings(): number[] {
        return getFillings(this.rating);
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";

.stars {
    color: primary(40);
}
</style>
