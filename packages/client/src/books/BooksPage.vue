<template>
    <div>
        <h1>My library of coding books</h1>

        <div class="books">
            <div
                v-for="(book, n) in books"
                :key="book.id"
                :style="{ animationDelay: n * 100 + 'ms' }"
            >
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
import BookListItem from "./BookListItem.vue";
import Rating from "./Rating.vue";
import { fetchAll } from "./bookService";
import type { Book } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: { BookListItem, Rating },
    data() {
        return {
            books: [] as Book[],
        };
    },
    async mounted() {
        this.books = (await fetchAll()).sort((b1, b2) => b2.rating - b1.rating);
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.books {
    max-width: 900px;

    & > div > * {
        display: block;
    }
    & > div {
        animation: 1s appear both;
    }
}
@keyframes appear {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
