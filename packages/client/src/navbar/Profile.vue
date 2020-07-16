<template>
    <div class="profile-main">
        <router-link to="/" class="profileLink">
            <img src="../assets/images/home/profile.jpg" alt="profile image" />
        </router-link>
        <h2>Alexandre Djerbetian</h2>
    </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Profile extends Vue {}
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
