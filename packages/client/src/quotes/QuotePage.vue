<template>
    <div v-if="quote">
        <QuoteComponent :quote="quote" />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Quote } from "entities";
import { fetchQuote } from "./quoteService";
import QuoteComponent from "./Quote.vue";

@Component({ components: { QuoteComponent } })
export default class QuotesPage extends Vue {
    @Prop(Object) quote!: Quote;

    async mounted() {
        this.quote = await fetchQuote(this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
