<template>
    <div v-if="quote">
        <QuoteComponent :quote="quote" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Quote } from "@alex/entities";
import { fetchQuote } from "./quoteService";
import QuoteComponent from "./Quote.vue";

@Component({ components: { QuoteComponent } })
export default class QuotesPage extends Vue {
    quote: Quote | null = null;

    async mounted() {
        this.quote = await fetchQuote(this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
