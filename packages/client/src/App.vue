<template>
    <div class="app">
        <NavBar class="navbar" />
        <router-view class="main" />
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
.navbar {
    position: fixed;
}
.main {
    margin-left: 330px;
}
</style>
