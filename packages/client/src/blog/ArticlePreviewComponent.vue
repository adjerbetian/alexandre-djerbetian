<template>
    <article class="article-preview" v-html="article.summary" />
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { BlogArticle } from "@alex/entities";

@Component
export default class ArticlePreviewComponent extends Vue {
    @Prop(Object) article!: BlogArticle;
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.article-preview {
    @include article;

    /deep/ {
        h3 {
            color: $primary;
        }
    }
}
</style>
