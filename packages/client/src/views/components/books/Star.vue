<template>
    <div class="star">
        <div class="full" :style="{ width: width }">
            <font-awesome-icon :icon="['fas', 'heart']" />
        </div>
        <div>
            <font-awesome-icon :icon="['far', 'heart']" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class Star extends Vue {
    @Prop(Number) filling!: number;

    get width() {
        const width = 1 - Math.pow(1 - this.filling, 1.1);
        return `${width * 100}%`;
    }
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";

.star {
    position: relative;

    .full {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
}
</style>
