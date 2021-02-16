<template>
    <div class="blog">
        <h1>Blog</h1>
        <router-link
            v-for="article in articles"
            :key="article.id"
            :to="`/blog/${article.id}`"
            class="blog-link"
        >
            <ArticlePreviewComponent :article="article" />
        </router-link>

        <SubscriptionForm />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { BlogArticle } from "@alex/entities";
import ArticlePreviewComponent from "./ArticlePreviewComponent.vue";
import SubscriptionForm from "./SubscriptionForm.vue";
import { blogService } from "./blogService";

@Component({
    components: { ArticlePreviewComponent, SubscriptionForm },
})
export default class BlogPage extends Vue {
    articles: BlogArticle[] = [];

    async mounted() {
        this.articles = await blogService.fetchAllArticles();
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.blog {
    max-width: 900px;
}

.blog-link {
    color: unset;
}
</style>
