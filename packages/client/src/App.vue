<template>
    <div class="app">
        <NavBar class="navbar" />
        <div class="main-container">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import NavBar from "@/components/navbar/NavBar.vue";

export default Vue.extend({
    name: "App",
    components: {
        NavBar
    }
});
</script>

<style lang="scss">
@import "./assets/styles/variables";

body {
    background: url("./assets/images/background.png") fixed;
}

nav {
    position: fixed;
    z-index: 1;
}

.main-container {
    margin-left: 330px;
}

main {
    min-height: 100vh;
    padding: 50px;
    max-width: 1300px;
    margin: auto;

    @media (max-width: $screen-size-l) {
        padding: 50px 30px;
    }

    @media (max-width: $screen-size-s) {
        padding: 30px 10px;
    }
}

.toggleNavbar {
    display: none;
}

@media (max-width: $screen-size-l) {
    main {
        margin: 0;
    }

    nav {
        position: fixed;
        top: 0;
        left: -$navbarFullWidth;
        overflow-y: auto;
        height: 100vh;
        transition: left 0.5s;
        z-index: 1;

        &.show {
            left: 0;
        }
    }

    .toggleNavbar {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        display: block;
        padding: 5px 10px;
        border-radius: 0 0 10px 0;
        background-color: rgba(255, 255, 255, 0.3);
    }
}
</style>
