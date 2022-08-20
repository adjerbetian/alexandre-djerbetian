<template>
    <div v-if="book" class="book">
        <h1 class="when-small">{{ book.title }}</h1>

        <aside>
            <BookCover :book="book" :hover="false" />
            <Rating class="rating" :rating="book.rating" />
            <div class="author">
                <strong>{{ authorWording }}:</strong>
                {{ book.authors.join(", ") }}
            </div>
            <div class="year"><strong>Year:</strong> {{ book.releaseYear }}</div>
        </aside>

        <div class="reviews">
            <h1 class="when-large">{{ book.title }}</h1>

            <div class="review">
                <h2>General review</h2>
                <div v-html="generalReview"></div>
            </div>

            <div class="review">
                <h2>What I especially liked</h2>
                <div v-html="goodReview"></div>
            </div>

            <div class="review">
                <h2>What I liked less</h2>
                <div v-html="lessGoodReview"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import BookCover from "./Cover.vue";
import Rating from "./Rating.vue";
import { fetchBook } from "./bookService";
import { textService, validationService } from "@/utils";
import type { Book } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: { Rating, BookCover },
    data() {
        return {
            book: null as Book | null,
        };
    },
    async mounted() {
        validationService.assertIsId(this.$route.params.id);
        await this.fetchBook(this.$route.params.id);
    },
    computed: {
        generalReview() {
            return textService.parseText(this.book?.notes.pre || "No review");
        },
        goodReview() {
            return textService.parseText(this.book?.notes.good || "No review");
        },
        lessGoodReview() {
            return textService.parseText(this.book?.notes.lessGood || "No review");
        },
        authorWording() {
            const nAuthors = this.book?.authors.length || 0;
            return nAuthors > 1 ? "Authors" : "Author";
        },
    },
    methods: {
        async fetchBook(id: string) {
            this.book = await fetchBook(id);
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.when-large {
    display: none;
}

@media (min-width: $screen-size-m) {
    .book {
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-start;
        .reviews {
            flex: 1;
            margin-right: 50px;
        }
    }
    .when-small {
        display: none;
    }
    .when-large {
        display: inherit;
    }
}

h1 {
    font-variant: small-caps;
    font-size: 52px;
}

h2 {
    color: $primary;
}

aside {
    float: right;
    width: 30%;
    max-width: 400px;
    min-width: unquote("max(25%, 200px)");

    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: $screen-size-m) {
        float: none;
        width: 300px;
        max-width: 90%;
        margin: 40px auto;
    }

    .rating {
        font-size: unquote("min(max(3vw, 32px),50px)");
        text-align: center;
        margin-bottom: 20px;
    }
}

.review {
    @include article;
    margin: 20px 0;
}
</style>
