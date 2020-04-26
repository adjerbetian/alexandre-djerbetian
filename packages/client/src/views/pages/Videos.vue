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
import { VideoComponent } from "@/views/components";
import { videoService } from "@/services";
import { Video } from "entities";

@Component({
    components: { VideoComponent }
})
export default class VideosPage extends Vue {
    videos: Video[] = [];

    async mounted() {
        this.videos = await videoService.fetchAllVideos();
        // this.videos = [(await videoService.fetchAllVideos()).find((v) => v.isSmall())!];
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

$spacing: 10px;

.videos {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -$spacing;
    position: relative;
}

.video {
    margin: $spacing;
    border: 2px solid primary(30);
    border-radius: 20px;
    padding: 30px;
    background-color: white;
    flex-grow: 1;

    &.small {
        width: calc(50% - 2 * #{$spacing});
        min-width: 350px;
        max-width: 100%;
    }
}
</style>
