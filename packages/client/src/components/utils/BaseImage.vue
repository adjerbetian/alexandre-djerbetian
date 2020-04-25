<!--  See https://blog.lichter.io/posts/dynamic-images-vue-nuxt/ -->
<template>
    <img :src="src" :alt="alt" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { imageService } from "@/services";

@Component
export default class BaseImage extends Vue {
    @Prop(String) type!: string;
    @Prop(String) alt!: string;
    @Prop(String) name!: string;

    get src() {
        return imageService.getImage(this.type, this.name);
    }
}
</script>

<style lang="scss" scoped></style>
