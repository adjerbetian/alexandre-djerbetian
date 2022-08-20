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
import ArticlePreviewComponent from "./ArticlePreviewComponent.vue";
import SubscriptionForm from "./SubscriptionForm.vue";
import { blogService } from "./blogService";
import type { BlogArticle } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: { ArticlePreviewComponent, SubscriptionForm },
    data() {
        return {
            articles: [] as BlogArticle[],
        };
    },
    async mounted() {
        this.articles = await blogService.fetchAllArticles();
    },
});
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
