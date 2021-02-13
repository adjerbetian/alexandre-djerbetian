<template>
    <div class="quote" :id="quote.id">
        <blockquote class="content" v-html="content" />

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
import { imageService } from "@/utils";

@Component
export default class QuoteComponent extends Vue {
    @Prop(Object) quote!: Quote;

    get content() {
        return this.quote.content.replace(
            /src="([^"]+)"/g,
            (_, file: string) => `src="${imageService.getImage("quotes", file)}"`
        );
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.quote {
    max-width: 900px;
}

.content {
    @include article;
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
