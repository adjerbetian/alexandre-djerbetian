<template>
    <font-awesome-icon pull="left" :icon="icon" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class NavIcon extends Vue {
    @Prop({ type: [String, Array] })
    icon!: string | string[];
}
</script>

<style scoped></style>
