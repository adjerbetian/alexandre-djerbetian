<template>
    <div>
        <h1>Videos about coding</h1>
        <p>Here is a selection of videos I recommend.</p>

        <div class="videos">
            <VideoComponent
                v-for="video in videos"
                :key="video.id"
                :video="video"
                class="video"
                :class="{ small: video.isSmall() }"
            />
        </div>
    </div>
</template>

<script lang="ts">
import VideoComponent from "./Video.vue";
import { fetchAllVideos } from "./videoService";
import type { Video } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: { VideoComponent },
    data() {
        return {
            videos: [] as Video[],
        };
    },
    async mounted() {
        this.videos = await fetchAllVideos();
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$spacing: 10px;

.videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -$spacing;
    position: relative;
    max-width: 1200px;
}

.video {
    @include article;
    margin: $spacing;
    flex-grow: 1;

    &.small {
        width: calc(50% - 2 * #{$spacing});
        min-width: 350px;
        max-width: 100%;

        @media (max-width: $screen-size-xs) {
            min-width: 70%;
        }
    }
}
</style>
