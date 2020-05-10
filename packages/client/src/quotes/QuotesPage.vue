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
                            @change="updateSearch"
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
import Vue from "vue";
import _ from "lodash";
import { Component } from "vue-property-decorator";
import { Book, Quote } from "@alex/entities";
import * as quoteService from "./quoteService";
import { bookService } from "@/books";
import QuoteComponent from "./Quote.vue";

@Component({ components: { QuoteComponent } })
export default class QuotesPage extends Vue {
    quotes: Quote[] = [];
    books: Book[] = [];
    bookFilters: string[] = [];

    async mounted() {
        this.initFiltersFromSearchQuery();
        this.books = await bookService.fetchAll();
        this.quotes = await quoteService.fetchAll({ books: this.bookFilters });

        this.$watch("$route.query.books", this.initFiltersFromSearchQuery);
    }
    initFiltersFromSearchQuery() {
        this.bookFilters.length = 0;
        this.bookFilters.push(...toArray(this.$route.query.books));
    }
    async updateSearch() {
        await this.$router.push({ query: { books: this.bookFilters } });
    }
}

function toArray(query: SearchQuery): string[] {
    if (!query) return [];
    if (typeof query === "string") return [query];

    return query.map((q) => q || "").filter((q) => !_.isEmpty(q));
}

type SearchQuery = string | (string | null)[];
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
