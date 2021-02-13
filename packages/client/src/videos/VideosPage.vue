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
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { Video } from "@alex/entities";
import { fetchAllVideos } from "./videoService";
import VideoComponent from "./Video.vue";

@Component({
    components: { VideoComponent },
})
export default class VideosPage extends Vue {
    videos: Video[] = [];

    async mounted() {
        this.videos = await fetchAllVideos();
    }
}
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
    }
}
</style>
