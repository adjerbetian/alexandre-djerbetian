<template>
    <div>
        <h2>
            {{ video.title }} -
            <em class="details">{{ video.speaker }} {{ video.year }}</em>
        </h2>
        <div class="description">
            <Youtube class="youtube" :title="video.title" :id="video.youtubeId" />
            <CommentsComponent v-if="!isSmall" class="side" :video="video" />
        </div>
    </div>
</template>

<script lang="ts">
import CommentsComponent from "./Comments.vue";
import Youtube from "./Youtube.vue";
import type { Video } from "@alex/entities";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: { Youtube, CommentsComponent },
    props: {
        video: {
            type: Object as PropType<Video>,
            required: true,
        },
    },
    computed: {
        isSmall() {
            return !this.video.comments && this.video.moments.length === 0;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

h2 .details {
    font-size: 0.8em;
    font-weight: normal;
}

.description {
    display: flex;
    flex-wrap: wrap;
    margin: -20px;
}

.youtube {
    margin: 20px;
    padding-top: 8px;

    min-width: 300px;
    flex: 1;

    @media (max-width: $screen-size-xs) {
        min-width: inherit;
    }

    .youtubeWrapper {
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
}

.side {
    margin: 20px;
    flex: 1.2;
    min-width: 300px;
}

@include mobile {
    .youtube {
        min-width: 60%;
    }
    .side {
        min-width: 60%;
    }
}
</style>
