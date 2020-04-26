<template>
    <div class="video">
        <h3>{{ video.title }}</h3>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Video } from "entities";
import BaseImage from "@/views/components/utils/BaseImage.vue";

@Component({
    components: { BaseImage }
})
export default class VideoComponent extends Vue {
    @Prop(Object)
    video!: Video;
}
</script>

<style lang="scss" scoped>
.video {
}
</style>
