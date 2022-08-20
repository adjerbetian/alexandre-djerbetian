<template>
    <div>
        <div class="stars" aria-hidden="true">
            <Star
                :data-test-id="`star-${value}`"
                v-for="(value, index) in fillings"
                :filling="value"
                :key="index"
            />
        </div>
        <span class="sr-only">Rating: {{ rating }}</span>
    </div>
</template>

<script lang="ts">
import Star from "./Star.vue";
import { getFillings } from "./rating";
import { defineComponent } from "vue";

export default defineComponent({
    components: { Star },
    props: {
        rating: {
            type: Number,
            required: true,
        },
    },
    computed: {
        fillings(): number[] {
            return getFillings(this.rating);
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.stars {
    color: primary(40);
}
</style>
