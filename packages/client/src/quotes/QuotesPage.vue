<template>
    <div>
        <h1>Some quotes</h1>

        <div class="filters">
            <h2>Filters</h2>
            <div class="filters-group">
                <h3>Books</h3>
                <div class="filters-list">
                    <label
                        v-for="book in books"
                        :key="book.id"
                        :title="`${book.title} - ${book.authors.join(', ')} - ${book.releaseYear}`"
                    >
                        <input
                            type="checkbox"
                            v-model="bookFilters"
                            :value="book.id"
                            @change="onFilterUpdate"
                        />
                        {{ book.title }}
                    </label>
                </div>
            </div>
        </div>

        <QuoteComponent v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div>
</template>

<script lang="ts">
import QuoteComponent from "./Quote.vue";
import * as quoteService from "./quoteService";
import type { Book, Quote } from "@alex/entities";
import { µ } from "@alex/micro";
import { defineComponent } from "vue";

export default defineComponent({
    components: { QuoteComponent },
    data() {
        return {
            quotes: [] as Quote[],
            books: [] as Book[],
            bookFilters: [] as string[],
        };
    },

    async mounted() {
        this.books = await quoteService.fetchAllBooks();

        await this.initFiltersFromSearchQuery();
        this.$watch("$route.query.books", this.initFiltersFromSearchQuery);
    },
    methods: {
        async initFiltersFromSearchQuery() {
            this.bookFilters.length = 0;
            this.bookFilters.push(...µ.toArray(this.$route.query.books));
            await this.refreshQuotes();
        },
        async onFilterUpdate() {
            await this.refreshQuotes();
            await this.$router.push({ query: { books: this.bookFilters } });
        },
        async refreshQuotes() {
            this.quotes = await quoteService.fetchAll({ books: this.bookFilters });
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
