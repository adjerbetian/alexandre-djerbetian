<template>
    <div class="cover">
        <div class="inner-cover">
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

.cover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateZ(0);
}

.book {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateZ(0);
}

.inner-cover {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 2000px;
}

.inner-cover {
    display: flex;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 2000px;
}

.inner-cover:before {
    content: "";
    width: 100%;
    position: absolute;
    height: 0;
    bottom: 14px;
    transform: rotateY(-20deg) translateZ(-20px);
    z-index: 0;
    box-shadow: 10px 12px 20px 13px rgba(0, 0, 0, 0.3);
}

.inner-cover .img {
    transform: rotateY(-20deg);
    width: 100%;
    z-index: 5;
    clear: both;
    height: 100%;
    background: #ddd;
}

.inner-cover .img img {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
}

.inner-cover .img:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-left: 4px solid rgba(0, 0, 0, 0.3);
    z-index: 2;
}

.img.front-page {
    position: absolute;
    z-index: 5;
    transform: rotateY(-20deg);
}

$offset: 1.25%;

.page {
    width: calc(100% - 20px);
    position: absolute;
    box-shadow: inset 0px -1px 2px rgba(50, 50, 50, 0.2), inset -1px 0px 1px rgba(150, 150, 150, 0.1);
    border-radius: 0 3px 3px 0;
    transform: rotateY(-20deg) translateZ(-5px);
    background: white;
}

.page-1 {
    height: calc(100% - 2px);
    right: -1 * $offset;
    z-index: 4;
}

.page-2 {
    height: calc(100% - 4px);
    right: -2 * $offset;
    z-index: 3;
}

.page-3 {
    height: calc(100% - 6px);
    right: -3 * $offset;
    z-index: 2;
}

.page-4 {
    height: calc(100% - 8px);
    right: -4 * $offset;
    z-index: 1;
}

.page-5 {
    height: calc(100% - 10px);
    right: -5 * $offset;
    z-index: 0;
}

.img.final-page {
    position: absolute;
    z-index: -1;
    right: -6 * $offset;
    transform: rotateY(-19deg) translateZ(-10px) scale(0.984);
}
</style>
