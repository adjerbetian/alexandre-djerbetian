<template>
    <div class="app">
        <NavBar class="navbar" />
        <router-view class="main" />
    </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";

export default {
    name: "App",
    components: {
        NavBar
    }
};
</script>

<style lang="scss">
.navbar {
    position: fixed;
}
.main {
    margin-left: 330px;
}
</style>
