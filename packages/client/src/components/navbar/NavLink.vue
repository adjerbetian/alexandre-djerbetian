<template>
    <router-link :to="to" class="nav-link">
        <NavIcon :icon="icon" />
        <slot></slot>
    </router-link>
</template>

<script>
import NavIcon from "./NavIcon";

export default {
    name: "NavLink",
    components: {
        NavIcon
    },
    props: {
        icon: [String, Array],
        to: String
    }
};
</script>

<style scoped lang="scss">
@import "./navbar";

.nav-link {
    border-radius: 5px;
    color: $navbarColor;
    padding: 10px 20px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: $navbarBackgroundLightLight;
    }
}
</style>
