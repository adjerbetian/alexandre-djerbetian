<template>
    <div>
        <h1>Videos about coding</h1>
        <p>Here is a selection of videos I recommend.</p>

        <div class="videos">
            <VideoComponent v-for="video in videos" :key="video.id" :video="video" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import VideoComponent from "@/views/components/Video.vue";
import { videoService } from "@/services";
import { Video } from "entities";

@Component({
    components: { VideoComponent }
})
export default class VideosPage extends Vue {
    videos: Video[] = [];

    async mounted() {
        this.videos = await videoService.fetchAllVideos();
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";
</style>
