<template>
    <div class="home">
        <transition-group name="fade">
            <div
                class="word"
                v-for="word in words"
                :key="word.id"
                :style="{
                    [word.position.left ? `left` : `right`]: `50px`,
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
        words.addWord();
        setTimeout(() => words.removeWord(), DURATION);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$imageHeight: 1920 / 1371 * 100vh;

.home {
    position: relative;
    height: 100vh;
    background: #4c483c url("../assets/images/home/walter.jpg") no-repeat center left;
    background-size: cover;
}
.word {
    position: absolute;
    font-size: 2em;
    color: white;

    transition: opacity 2s;

    &.fade-enter,
    &.fade-leave-to {
        opacity: 0;
    }
}
@media (max-width: $screen-size-s) {
    .home {
        background-position-x: calc(-#{$imageHeight} / 2.08);
    }
}
</style>
