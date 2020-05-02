<template>
    <div class="quote">
        <blockquote :id="quote.id">
            <div class="quoteLink">
                <a :href="`#${quote.id}`">
                    <font-awesome-icon icon="link" />
                </a>
            </div>
            <div v-html="parseContent(quote.content)"></div>
        </blockquote>

        <div class="caption">
            {{ quote.bookTitle }} -
            <span v-if="!quote.isInIntroduction()">chapter {{ quote.chapter }} -</span>
            <em>{{ quote.chapterTitle }}</em
            >, p{{ quote.page }}
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Quote } from "entities";
import { textService } from "@/utils";

@Component
export default class QuoteComponent extends Vue {
    @Prop(Object) quote!: Quote;

    parseContent() {
        return textService.parseText(this.quote.content);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.quote {
    max-width: 900px;

    & > blockquote {
        border: 1px solid primary(30);
        border-radius: 15px;
        padding: 20px;
        background-color: $quote-background-color;
        margin: 0;
        position: relative;

        p {
            text-align: justify;
        }

        .quoteLink {
            font-size: 13px;
            position: absolute;
            right: 6px;
            top: 3px;

            a {
                color: primary(80);
                transition: 0.5s;
            }
        }

        &:hover {
            .quoteLink {
                a {
                    color: primary(50);
                }
            }
        }

        & + div {
            text-align: right;
            color: primary(30);
            margin-bottom: 30px;
        }

        blockquote {
            font-style: italic;
        }
    }
}
</style>
