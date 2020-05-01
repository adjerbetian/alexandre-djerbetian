<template>
    <router-link :to="to" class="nav-link">
        <NavIcon :icon="icon" />
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import NavIcon from "./NavIcon.vue";

@Component({
    components: {
        NavIcon
    }
})
export default class NavLink extends Vue {
    @Prop([String, Array])
    icon!: string | string[];

    @Prop(String)
    to!: string;
}
</script>

<style scoped lang="scss">
@import "src/navbar/navbar";

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
