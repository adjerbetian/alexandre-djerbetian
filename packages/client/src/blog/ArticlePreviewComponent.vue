<template>
    <article class="article-preview">
        <div class="tile">
            <img :src="image" alt="Tile" />
        </div>
        <div class="content" v-html="article.summary"></div>
    </article>
</template>

<script lang="ts">
import { imageService } from "@/utils";
import type { BlogArticle } from "@alex/entities";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    props: {
        article: {
            type: Object as PropType<BlogArticle>,
            required: true,
        },
    },
    computed: {
        image() {
            return imageService.getImage("blog", this.article.cover);
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.article-preview {
    @include article;

    display: flex;

    @include mobile {
        flex-direction: column;
    }

    .tile {
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        @include tablet-and-laptop {
            max-width: 200px;
            margin-right: 10px;
        }
    }

    .content :deep(h3) {
        color: $primary;
    }
}
</style>
