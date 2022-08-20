<template>
    <font-awesome-icon pull="left" :icon="icon" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
    props: {
        icon: {
            type: Object as PropType<string | string[]>,
            required: true,
        },
    },
});
</script>

<style scoped></style>
