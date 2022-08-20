<template>
    <article class="quote" :id="quote.id">
        <blockquote class="content" v-html="content" />

        <router-link :to="`/quotes/${quote.id}`" class="caption">
            {{ quote.bookTitle }} -
            <span v-if="!quote.isInIntroduction()">chapter {{ quote.chapter }} - </span>
            <em>{{ quote.chapterTitle }}</em
            >, p{{ quote.page }}
        </router-link>
    </article>
</template>

<script lang="ts">
import { imageService } from "@/utils";
import type { Quote } from "@alex/entities";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    props: {
        quote: {
            type: Object as PropType<Quote>,
            required: true,
        },
    },
    computed: {
        content() {
            return this.quote.content.replace(
                /src="([^"]+)"/g,
                (_, file: string) => `src="${imageService.getImage("quotes", file)}"`
            );
        },
    },
});
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
