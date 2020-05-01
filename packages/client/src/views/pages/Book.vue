<template>
    <div v-if="book">
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
        <h1>{{ book.title }}</h1>
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

h1 {
    font-variant: small-caps;
    font-size: 52px;

    @media (max-width: $screen-size-s) {
        text-align: center;
    }
}

aside {
    float: right;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1420px) {
        width: calc(100% - 750px - 50px);
        min-width: 25%;
    }

    @media (max-width: $screen-size-l) {
        float: none;
        width: 300px;
        max-width: 90%;
        margin: 40px auto;
    }

    & > a {
        display: block;
        text-align: center;

        img {
            display: block;
        }
    }

    .rating {
        font-size: 44px;
        text-align: center;
        margin-bottom: 20px;

        @media (max-width: $screen-size-xl) {
            font-size: 32px;
        }
    }
}
</style>
