<template>
    <div class="home">
        <h1>Bienvenue&nbsp;!</h1>
        <div class="pitch">
            <p>I am a JS developer, obsessed with clean code.</p>
            <p>This site gathers my notes. Feel free to go around!</p>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "Home"
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.home {
    position: relative;
    height: 100vh;
    padding: 70px;
    max-width: none !important;
    background: url("../assets/images/home/home.jpg") bottom right no-repeat;
    background-size: cover;
}
h1 {
    font-size: 2.3em;
    white-space: nowrap;
}
.pitch {
    font-size: 1.3em;
}

@media (max-width: $screen-size-l) {
    main {
        padding: 40px;
    }
    h1 {
        text-align: center;
    }
}

@media (max-width: $screen-size-s) {
    .pitch {
        font-size: 1.2em;
    }
}
@media (max-width: $screen-size-xs) {
    .pitch {
        font-size: 1em;
    }
}
</style>
