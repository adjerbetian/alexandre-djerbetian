<template>
    <div v-if="book" class="book">
        <h1 class="when-small">{{ book.title }}</h1>

        <aside>
            <div class="cover">
                <img :src="getCover()" alt="cover" />
            </div>
            <Rating class="rating" :rating="book.rating" />
            <div class="author">
                <strong>{{ authorWording }}:</strong> {{ book.authors.join(", ") }}
            </div>
            <div class="year"><strong>Year:</strong> {{ book.releaseYear }}</div>
        </aside>

        <div class="reviews">
            <h1 class="when-large">{{ book.title }}</h1>

            <div class="review">
                <h2>General review</h2>
            </div>

            <div class="review">
                <h2>What I liked especially</h2>
            </div>

            <div class="review">
                <h2>What I liked less</h2>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { bookService, imageService } from "@/services";
import { Book } from "entities";
import Rating from "@/views/components/books/Rating.vue";

@Component({
    components: { Rating }
})
export default class BookPage extends Vue {
    book?: Book | null = null;

    async mounted() {
        await this.fetchBook(this.$route.params.id);
    }
    async fetchBook(id: string) {
        this.book = await bookService.fetchBook(id);
    }

    getCover(): string {
        if (!this.book) return "";
        return imageService.getImage("books", this.book.id);
    }
    get authorWording() {
        const nAuthors = this.book?.authors.length || 0;
        return nAuthors > 1 ? "Authors" : "Author";
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

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
            margin-right: 20px;
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

    @media (max-width: $screen-size-s) {
        text-align: center;
    }
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

    .cover {
        img {
            display: block;
        }
    }
    .rating {
        font-size: unquote("min(max(3vw, 32px),50px)");
        text-align: center;
        margin-bottom: 20px;
    }
}

.review {
    background-color: white;
    border: 1px solid $primary;
    border-radius: 20px;

    padding: 20px;
    margin: 20px 0;
}
</style>
