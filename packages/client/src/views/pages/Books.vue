<template>
    <div>
        <h1>Coding books library</h1>

        <div class="books">
            <router-link :to="`/books/${book.id}`" class="book" v-for="book in books" :key="book.id">
                <div class="cover">
                    <img :src="getCover(book)" alt="cover" />
                </div>
                <div class="description">
                    <h2>{{ book.title }}</h2>
                    <Rating class="rating" :rating="book.rating" />
                    <div class="author">{{ book.authors.join(", ") }}</div>
                    <div class="year">{{ book.releaseYear }}</div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { bookService, imageService } from "@/services";
import { Book } from "entities";
import Rating from "@/views/components/books/Rating.vue";

@Component({
    components: { Rating }
})
export default class BooksPage extends Vue {
    books: Book[] = [];

    async mounted() {
        this.books = (await bookService.fetchAll()).sort((b1, b2) => b2.rating - b1.rating);
    }

    getCover(book: Book): string {
        return imageService.getImage("books", book.id);
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.books {
    max-width: 900px;
}

.book {
    background-color: white;
    border: solid 1px primary(20);
    border-radius: 20px;

    display: flex;
    margin: 10px;
    padding: 20px;

    .cover {
        max-width: 100px;
        min-width: 100px;
        margin-right: 20px;

        img {
            display: block;
        }
    }
}
</style>
