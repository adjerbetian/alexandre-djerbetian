<template>
    <router-link :to="to" active-class="active" class="nav-link">
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
    @Prop(String)
    to!: string;
}
</script>

<style scoped lang="scss">
@import "src/navbar/navbar";

.nav-link {
    border-radius: 5px;
    color: $navbarColor;
    margin-left: -20px;
    padding: 10px 20px;
    display: flex;
    align-items: center;

    &:hover {
        background-color: $navbarBackgroundLightLight;
    }
}

.active {
    color: lighten($navbarBackground, 50%);
}
</style>
