<template>
    <div>
        <h1>Coding books library</h1>

        <div class="books">
            <div class="book" v-for="book in books" :key="book.id">
                <div class="cover">
                    <img :src="getCover(book)" alt="cover" />
                </div>
                <div class="description">
                    <h2>{{ book.title }}</h2>
                    <Rating class="rating" :rating="book.rating" />
                    <div class="author">{{ book.authors.join(", ") }}</div>
                    <div class="year">{{ book.releaseYear }}</div>
                </div>
            </div>
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

.book {
    display: flex;
    margin: 10px 0;
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    .cover {
        max-width: 100px;
        min-width: 100px;
        margin-right: 20px;
    }
    .description {
    }
}
</style>
