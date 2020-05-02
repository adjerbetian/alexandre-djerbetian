<template>
    <div>
        <h1>My library of coding books</h1>

        <div class="books">
            <div v-for="book in books" :key="book.id">
                <router-link v-if="book.hasNotes()" :to="`/books/${book.id}`">
                    <BookListItem :book="book" />
                </router-link>
                <div v-else>
                    <BookListItem :book="book" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Book } from "entities";
import { fetchAll } from "./bookService";
import Rating from "./Rating.vue";
import BookListItem from "@/books/BookListItem.vue";

@Component({
    components: { BookListItem, Rating }
})
export default class BooksPage extends Vue {
    books: Book[] = [];

    async mounted() {
        this.books = (await fetchAll()).sort((b1, b2) => b2.rating - b1.rating);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.books {
    max-width: 900px;

    & > div > * {
        display: block;
    }
}
</style>
