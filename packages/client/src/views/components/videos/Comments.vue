<template>
    <div>
        <p v-if="video.comments" v-html="parse(video.comments)"></p>
        <ul>
            <li v-for="(moment, key) in video.moments" :key="key">
                <a
                    :href="`https://youtu.be/${video.youtubeId}?t=${moment.time}`"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ moment.time }}
                </a>
                - <span v-html="parse(moment.content)"></span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Video } from "entities";
import { textService } from "@/services";

@Component
export default class CommentsComponent extends Vue {
    @Prop(Object)
    video!: Video;

    parse(text: string) {
        return textService.parseText(text);
    }
}
</script>

<style lang="scss" scoped></style>
