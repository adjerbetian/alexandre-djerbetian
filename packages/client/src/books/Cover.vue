<template>
    <div class="cover">
        <img :src="coverSrc" :alt="`cover of ${book.title}`" style="visibility: hidden;" />

        <div class="img front-page">
            <img :src="coverSrc" :alt="`cover of ${book.title}`" />
        </div>
        <div class="page page-1"></div>
        <div class="page page-2"></div>
        <div class="page page-3"></div>
        <div class="page page-4"></div>
        <div class="page page-5"></div>
        <div class="img final-page">
            <img :src="coverSrc" :alt="`cover of ${book.title}`" />
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

.cover {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 2000px;
}

.cover .img {
    position: absolute;
    transform: rotateY($rotation);
    width: 100%;
    height: 100%;
}

.cover .img img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 0 2% 2% 0;
}

.page {
    width: 100%;
    position: absolute;
    box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.2), inset -1px 0px 1px rgba(150, 150, 150, 0.1);
    border-radius: 0 1% 1% 0;
    transform: rotateY($rotation) translateZ(-5px);
    background: white;
}

$offset: 0.8%;
$sizeOffset: 1%;

.img.front-page {
    z-index: 0;
}
@mixin page($number) {
    height: 99% - $number * $sizeOffset;
    right: 0.5% - $number * $offset;
    z-index: -$number;
}
.page-1 {
    @include page(1);
}
.page-2 {
    @include page(2);
}
.page-3 {
    @include page(3);
}
.page-4 {
    @include page(4);
}
.page-5 {
    @include page(5);
}

.img.final-page {
    height: 101% - 6 * $sizeOffset;
    right: -6 * $offset;
    z-index: -6;
    transform: rotateY($rotation) translateZ(-5px);
}
</style>
