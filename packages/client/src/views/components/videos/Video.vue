<template>
    <div class="video">
        <h2>
            {{ video.title }} - <em class="details">{{ video.speaker }} {{ video.year }}</em>
        </h2>
        <div class="description">
            <Youtube class="youtube" :title="video.title" :id="video.youtubeId" />
            <CommentsComponent class="side" :video="video" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Video } from "entities";
import Youtube from "../Youtube.vue";
import CommentsComponent from "./Comments.vue";

@Component({
    components: { Youtube, CommentsComponent }
})
export default class VideoComponent extends Vue {
    @Prop(Object)
    video!: Video;
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/variables";

.video {
    margin-top: 50px;
    margin-bottom: 50px;
    border: 2px solid primary(30);
    border-radius: 20px;
    padding: 30px;
    background-color: white;
}

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

@media (max-width: $screen-size-s) {
    .youtube {
        min-width: 60%;
    }
    .side {
        min-width: 60%;
    }
}
</style>
