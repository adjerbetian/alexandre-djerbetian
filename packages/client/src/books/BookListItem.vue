<template>
    <div
        class="book"
        :class="{ hover: book.hasNotes() }"
        @mouseover="hover = true"
        @mouseleave="hover = false"
    >
        <BookCover class="cover" :hover="hover" :book="book" />
        <div class="description">
            <h2>{{ book.title }}</h2>
            <Rating class="rating" :rating="book.rating" />
            <div class="author">{{ book.authors.join(", ") }}</div>
            <div class="year">{{ book.releaseYear }}</div>
        </div>
        <div class="hasNotes" v-if="book.hasNotes()" title="go to notes">&#x1F5D2;</div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Book } from "entities";
import { imageService } from "@/utils";
import Rating from "./Rating.vue";
import BookCover from "./Cover.vue";

@Component({
    components: { Rating, BookCover }
})
export default class BookListItem extends Vue {
    @Prop(Object) book!: Book;
    hover = false;

    get cover(): string {
        return imageService.getImage("books", this.book.id);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.book {
    background-color: white;
    transition: border-color 0.2s, background-color 0.2s;
    border: solid 1px primary(30);
    border-radius: 20px;

    &.hover:hover {
        background-color: primary(93);
        border-color: primary(50);
    }

    color: inherit;

    display: flex;
    margin: 10px;
    padding: 20px;

    h2 {
        margin-bottom: 0.5rem;
    }
    .cover {
        max-width: 100px;
        min-width: 100px;
        margin-right: 20px;
    }
    .description {
        flex: 1;
    }
    .hasNotes {
        @media (min-width: $screen-size-xl) {
            font-size: 90px;
        }
        @media (max-width: $screen-size-xl) {
            font-size: 70px;
        }
        @media (max-width: $screen-size-l) {
            font-size: 90px;
        }
        @media (max-width: $screen-size-m) {
            font-size: 70px;
        }
        @media (max-width: $screen-size-s) {
            font-size: 50px;
        }
        @media (max-width: $screen-size-xs) {
            font-size: 30px;
        }
    }
}
</style>