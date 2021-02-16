<template>
    <div v-if="article" class="article" :id="article.id">
        <section class="content" v-html="content" />
        <SubscriptionForm />
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { BlogArticle } from "@alex/entities";
import { µ } from "@alex/micro";
import { imageService } from "@/utils";
import { blogService } from "./blogService";
import SubscriptionForm from "./SubscriptionForm.vue";

@Component({ components: { SubscriptionForm } })
export default class ArticlePage extends Vue {
    article: BlogArticle | null = null;
    interval?: ReturnType<typeof µ.startInterval>;

    async mounted() {
        if (process.env.NODE_ENV === "development") {
            this.interval = µ.startInterval(this.loadArticle, 3000);
        } else {
            await this.loadArticle();
        }
    }

    beforeDestroy() {
        this.interval?.stop();
    }

    async loadArticle() {
        this.article = await blogService.fetchArticle(this.$route.params.id);
    }

    get content() {
        return this.article?.content.replace(
            /src="([^"]+)"/g,
            (_, file: string) => `src="${imageService.getImage("blog", file)}"`
        );
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.article {
    margin: auto;
    max-width: 900px;
    font-size: 1.2em;

    /deep/ {
        header {
            h1 {
                text-align: center;
                font-size: 2em;
            }
            figure {
                margin: 0;
            }
        }

        h1,
        h2,
        h3,
        h4 {
            color: $primary;
        }

        h2 {
            margin-top: 1em;
            border-bottom: 1px primary(60) solid;
        }
        h3 {
            margin-top: 1em;
            //text-decoration: underline primary(70);
            &:before {
                content: "> ";
            }
        }

        hr {
            border-top: 2px primary(60) solid;
        }

        blockquote {
            font-style: italic;
        }

        li {
            margin-bottom: 0;
        }
    }
}

.content {
    @include article;
}
</style>
