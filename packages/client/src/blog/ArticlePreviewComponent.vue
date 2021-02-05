<template>
    <article class="article-preview">
        <div class="tile">
            <img :src="image" alt="Tile" />
        </div>
        <div class="content" v-html="article.summary"></div>
    </article>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { BlogArticle } from "@alex/entities";
import { imageService } from "@/utils";

@Component
export default class ArticlePreviewComponent extends Vue {
    @Prop(Object) article!: BlogArticle;

    get image() {
        return imageService.getImage("blog", this.article.cover);
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.article-preview {
    @include article;

    display: flex;

    @media (max-width: $screen-size-s) {
        flex-direction: column;
    }
    @media (min-width: $screen-size-s + 1) {
        .tile {
            max-width: 200px;
            margin-right: 10px;
        }
    }

    .tile {
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .content /deep/ {
        h3 {
            color: $primary;
        }
    }
}
</style>
