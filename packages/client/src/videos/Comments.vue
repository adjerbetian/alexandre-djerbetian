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
import { textService } from "@/utils";
import type { Video } from "@alex/entities";
import type { PropType } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        video: {
            type: Object as PropType<Video>,
            required: true,
        },
    },
    methods: {
        parse(text: string) {
            return textService.parseInlineText(text);
        },
    },
});
</script>

<style lang="scss" scoped></style>
