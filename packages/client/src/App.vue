<template>
    <div class="app">
        <nav v-if="isLaptop">
            <NavBar />
        </nav>
        <main>
            <router-view class="page" />
        </main>
    </div>
</template>

<script lang="ts">
import { api } from "./utils";
import { NavBar } from "@/navbar";
import { defineComponent } from "vue";

export default defineComponent({
    name: "App",
    components: {
        NavBar,
    },
    async mounted() {
        await api.ping("/");
    },
    computed: {
        isLaptop() {
            return window.matchMedia("(min-width: 1081px)").matches;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "./assets/styles/variables";

main {
    margin-left: $navbarFullWidth;

    @include tablet-and-mobile {
        margin: 0;
    }
}

nav {
    position: fixed;
    z-index: 1;
    height: 100vh;
    padding: 0;
    overflow-y: auto;
}

.page {
    min-height: 100vh;
    padding: 50px;

    @include tablet-and-mobile {
        padding: 50px 30px;
    }

    @include mobile {
        padding: 30px 10px;
    }
}
</style>
