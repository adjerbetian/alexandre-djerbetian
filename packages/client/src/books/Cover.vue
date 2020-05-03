<template>
    <div>
        <div class="wrapper">
            <div class="book-cover">
                <img :src="coverSrc" :alt="`cover of ${book.title}`" style="visibility: hidden;" />

                <div class="cover-page front-page"><img :src="coverSrc" :alt="`cover of ${book.title}`" /></div>
                <div class="hard-side"><img :src="coverSrc" :alt="`cover of ${book.title}`" /></div>
                <div class="white-pages"></div>
                <div class="cover-page final-page"><img :src="coverSrc" :alt="`cover of ${book.title}`" /></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Book } from "entities";
import { imageService } from "@/utils";

@Component
export default class BookCover extends Vue {
    @Prop(Object) book!: Book;

    get coverSrc(): string {
        return imageService.getImage("books", this.book.id);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$rotation: -20deg;
.wrapper {
    perspective: 2000px;
}

.book-cover {
    display: flex;
    transform-style: preserve-3d;
    perspective: 2000px;
    transform: translateZ(-100px) rotateX(-6deg) rotateY($rotation);
    transition: transform ease 0.5s;
}
.wrapper:hover {
    .book-cover {
        transform: rotateY(0);
    }
}
.cover-page {
    position: absolute;
    img {
        display: block;
        border-radius: 0 2% 2% 0;
    }
}
$deep: 0.2;
.cover-page.final-page {
    transform: rotateY(90deg) translateX($deep * 100%) rotateY(-90deg);
    img {
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    }
}
$page-ratio-x: 0.98;
$page-ratio-y: 0.97;
.white-pages {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: scaleY($page-ratio-y) translateX(50% * $page-ratio-x) rotateY(90deg) translateX($deep * 50%)
        scaleX($deep);
    background-color: white;
    background-image: linear-gradient(to right, #e1e1e1 30%, #ccc);
    background-size: 10%;
}
.hard-side {
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateX(-50%) rotateY(90deg) translateX($deep * 50%) scaleX($deep);
}
</style>
