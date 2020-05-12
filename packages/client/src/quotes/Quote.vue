<template>
    <div class="quote" :id="quote.id">
        <blockquote class="content" v-html="quote.content" />

        <router-link :to="`/quotes/${quote.id}`" class="caption">
            {{ quote.bookTitle }} -
            <span v-if="!quote.isInIntroduction()">chapter {{ quote.chapter }} - </span>
            <em>{{ quote.chapterTitle }}</em
            >, p{{ quote.page }}
        </router-link>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Quote } from "@alex/entities";

@Component
export default class QuoteComponent extends Vue {
    @Prop(Object) quote!: Quote;
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.quote {
    max-width: 900px;
}

.content {
    border: 1px solid primary(30);
    border-radius: 15px;
    padding: 20px;
    background-color: $quote-background-color;
    margin: 0;
    position: relative;

    p {
        text-align: justify;
    }

    blockquote {
        font-style: italic;
    }
}

.caption {
    display: block;
    text-align: right;
    color: primary(30);
    margin-bottom: 30px;
}
</style>
