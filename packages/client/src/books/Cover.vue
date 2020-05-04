<template>
    <div class="wrapper" :class="{ hover }">
        <div>
            <div class="book-cover">
                <img :src="coverSrc" :alt="alt" style="visibility: hidden;" />

                <img class="cover-page front-page" :src="coverSrc" :alt="alt" />
                <div class="hard-side"><img :src="coverSrc" :alt="alt" /></div>
                <div class="white-pages"></div>
                <img class="cover-page final-page" :src="coverSrc" :alt="alt" />
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
    @Prop(Boolean) hover!: boolean;

    get coverSrc(): string {
        return imageService.getImage("books", this.book.id);
    }

    get alt(): string {
        return `cover of ${this.book.title}`;
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$rotation: -20deg;
.wrapper > div {
    perspective: 2000px;
    display: flex;
    justify-content: center;
}

.book-cover {
    display: flex;
    transform-style: preserve-3d;
    transition: transform ease 0.5s;

    animation: 1s appear;
    /* prettier-ignore */
    transform:
            translateZ(-100px)
            rotateX(-6deg)
            rotateY($rotation);
}
.wrapper:hover,
.wrapper.hover {
    .book-cover {
        transform: none;
    }
}
@keyframes appear {
    from {
        transform: none;
    }
}
.cover-page {
    position: absolute;
    display: block;
    border-radius: 0 2% 2% 0;
}
$deep: 0.2;
.cover-page.final-page {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    /* prettier-ignore */
    transform:
            rotateY(90deg)
            translateX($deep * 100%)
            rotateY(-90deg);
}
$page-ratio-x: 0.98;
$page-ratio-y: 0.98;
.white-pages {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: white;
    background-image: linear-gradient(to right, #e1e1e1 30%, #ccc);
    background-size: 10%;

    /* prettier-ignore */
    transform:
            scaleY($page-ratio-y)
            translateX(50% * $page-ratio-x)
            rotateY(90deg)
            translateX($deep * 50%)
            scaleX($deep);
}
.hard-side {
    width: 100%;
    height: 100%;
    position: absolute;

    /* prettier-ignore */
    transform:
            translateX(-50%)
            rotateY(90deg)
            translateX($deep * 50%)
            scaleX($deep);
}
</style>
