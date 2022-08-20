<template>
    <div class="container">
        <div class="wrapper">
            <iframe
                width="560"
                height="315"
                :src="`https://www.youtube.com/embed/${id}`"
                :title="title"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.wrapper {
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
</style>
