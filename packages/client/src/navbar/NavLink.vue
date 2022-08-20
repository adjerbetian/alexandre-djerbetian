<template>
    <router-link :to="to" active-class="active" class="nav-link">
        <slot></slot>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        to: {
            type: String,
            required: true,
        },
    },
});
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

    @include laptop {
        &:hover {
            background-color: $navbarBackgroundLightLight;
        }
    }
}

.active {
    color: lighten($navbarBackground, 50%);
}
</style>
