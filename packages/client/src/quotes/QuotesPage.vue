<template>
    <div>
        <h1>Some quotes</h1>
        <QuoteComponent v-for="quote in quotes" :key="quote.id" :quote="quote" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Quote } from "@alex/entities";
import { fetchAll } from "./quoteService";
import QuoteComponent from "./Quote.vue";

@Component({ components: { QuoteComponent } })
export default class QuotesPage extends Vue {
    quotes: Quote[] = [];

    async mounted() {
        this.quotes = await fetchAll();
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
