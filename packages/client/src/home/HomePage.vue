<template>
    <div class="home"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Home"
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$imageHeight: 1920 / 1371 * 100vh;

.home {
    position: relative;
    height: 100vh;
    background: #4c483c url("../assets/images/home/walter.jpg") no-repeat center left;
    background-size: cover;
}
@media (max-width: $screen-size-s) {
    .home {
        background-position-x: calc(-#{$imageHeight} / 2.08);
    }
}
</style>
