<template>
    <div v-if="article" class="article" :id="article.id">
        <section class="content" v-html="content" />
        <SubscriptionForm />
    </div>
</template>

<script lang="ts">
import SubscriptionForm from "./SubscriptionForm.vue";
import { blogService } from "./blogService";
import { imageService, validationService } from "@/utils";
import type { BlogArticle } from "@alex/entities";
import { µ } from "@alex/micro";
import { defineComponent } from "vue";

export default defineComponent({
    components: { SubscriptionForm },
    data() {
        return {
            article: null as BlogArticle | null,
            interval: undefined as ReturnType<typeof µ.startInterval> | undefined,
        };
    },
    async mounted() {
        if (import.meta.env.MODE === "development") {
            this.interval = µ.startInterval(this.loadArticle, 3000);
        } else {
            await this.loadArticle();
        }
    },
    beforeUnmount() {
        this.interval?.stop();
    },
    computed: {
        content() {
            return this.article?.content.replace(
                /src="([^"]+)"/g,
                (_, file: string) => `src="${imageService.getImage("blog", file)}"`
            );
        },
    },
    methods: {
        async loadArticle() {
            validationService.assertIsId(this.$route.params.id);
            this.article = await blogService.fetchArticle(this.$route.params.id);
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.article {
    margin: auto;
    max-width: 900px;
    font-size: 1.2em;

    :deep {
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
