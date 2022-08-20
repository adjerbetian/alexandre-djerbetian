<template>
    <div class="profile-main">
        <router-link to="/" class="profileLink">
            <img src="/images/home/profile.jpg" alt="profile image" />
        </router-link>
        <h2>Alexandre Djerbetian</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "src/navbar/navbar";

.profile-main {
    padding: 60px 0;
    text-align: center;
    height: 350px;

    .profileLink {
        img {
            display: inline-block;
            width: 110px;
            border-radius: 100%;
        }
    }

    h2 {
        color: $navbarColor;
        margin-top: 30px;
        font-size: 1.2em;
    }
}
</style>
