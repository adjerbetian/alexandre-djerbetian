<template>
    <div>
        <h1>Bienvenue&nbsp;!</h1>

        <div class="pitch">
            <p>I am a JS developer, slightly obsessed by clean code.</p>
            <p>
                I created this site mainly to help me take notes on the coding books I'm reading. If it can help you
                too, I'll be glad!
            </p>
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
@import "../../assets/styles/variables";

main {
    position: relative;
    height: 100vh;
    padding: 70px;
    max-width: none !important;
    background: url("../../assets/images/home/home.jpg") bottom right no-repeat;
    background-size: cover;
}
h1 {
    font-size: 2.3em;
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

@media (max-width: $screen-size-xs) {
    .pitch {
        font-size: 1em;
    }
}
</style>
