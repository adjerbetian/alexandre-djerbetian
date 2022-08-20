<!--  See https://blog.lichter.io/posts/dynamic-images-vue-nuxt/ -->
<template>
    <img :src="src" :alt="alt" />
</template>

<script lang="ts">
import { imageService } from "./imageService";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        type: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        src() {
            return imageService.getImage(this.type, this.name);
        },
    },
});
</script>

<style lang="scss" scoped></style>
