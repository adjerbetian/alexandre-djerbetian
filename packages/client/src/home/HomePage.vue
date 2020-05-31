<template>
    <div class="home">
        <div class="home-background"></div>
        <transition-group name="fade">
            <div
                class="word"
                v-for="word in words"
                :class="{ right: word.position.right }"
                :key="word.id"
                :style="{
                    top: `${word.position.y}%`
                }"
            >
                {{ word.content }}
            </div>
        </transition-group>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { words } from "./wordService";

const DELAY = 3000;
const DURATION = 2.5 * DELAY;

@Component
export default class HomePage extends Vue {
    words = words.all;

    mounted() {
        this.printWord();
        setInterval(this.printWord, DELAY);
    }
    printWord() {
        words.addWord({
            right: Math.random() > 0.5,
            yMin: 10,
            yMax: 70
        });
        setTimeout(() => words.removeWord(), DURATION);
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
.home-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url("../assets/images/home/walter.jpg") no-repeat center left;
    background-size: cover;

    @media (max-width: $screen-size-l) {
        width: calc(100% + calc(#{$imageHeight} / 2.08));
        left: calc(-#{$imageHeight} / 2.08);
        max-width: $imageHeight;

        @media (min-aspect-ratio: 960 / 1371) {
            box-sizing: border-box;
            box-shadow: 0 0 10vh 10vh $background-color inset;
        }
    }
}
.word {
    $padding: 50px;
    $slide: 50px;
    $duration: 3s;

    position: absolute;
    color: white;
    line-height: 0.8em;

    transition: opacity $duration, transform $duration;
    &.fade-enter,
    &.fade-leave-to {
        opacity: 0;
    }
    &.fade-enter {
        transform: translateX(-$slide);
    }

    @media (min-width: $screen-size-l) {
        left: $padding;

        &.right {
            left: unset;
            right: $padding;
            text-align: right;

            &.fade-enter {
                transform: translateX($slide);
            }
        }
    }
    @media (max-width: $screen-size-l) {
        right: $padding;
        text-align: right;

        &.fade-enter {
            transform: translateX($slide);
        }
    }
    @media (min-width: $screen-size-s) {
        font-size: 3em;
    }
    @media (max-width: $screen-size-s) {
        font-size: 2em;
    }
    @media (max-width: $screen-size-xs) {
        font-size: 1.5em;
    }
}
</style>
