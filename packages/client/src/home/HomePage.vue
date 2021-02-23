<template>
    <div class="home">
        <div class="home-background"></div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class HomePage extends Vue {}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$imageRatio: 1920 / 1371;
$imageHeight: $imageRatio * 100vh;
$background-color: #4c483c;

.home {
    position: relative;
    height: 100vh;
    background: $background-color;
}
.home-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("../assets/images/home/home-0.jpg") no-repeat center left;
    background-size: cover;

    @include tablet-and-mobile {
        width: calc(100% + calc(#{$imageHeight} / 2.08));
        left: calc(-#{$imageHeight} / 2.08);
        max-width: $imageHeight;

        @media (min-aspect-ratio: 960 / 1371) {
            box-sizing: border-box;
            box-shadow: 0 0 10vh 10vh $background-color inset;
        }
    }
}
</style>
