<template>
    <div class="home">
        <h1>Alexandre Djerbetian</h1>
        <div class="home-background"></div>

        <nav v-if="!isLaptop">
            <NavBar />
        </nav>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import NavBar from "@/navbar/NavBar.vue";

@Component({
    components: {
        NavBar,
    },
})
export default class HomePage extends Vue {
    get isLaptop() {
        return window.matchMedia("(min-width: 1081px)").matches;
    }
}
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
h1 {
    @include laptop {
        display: none;
    }
    color: cornsilk;
    position: relative;
    z-index: 1;

    @include mobile-xs {
        font-size: 1.6em;
    }
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
nav {
    position: relative;
}
</style>
