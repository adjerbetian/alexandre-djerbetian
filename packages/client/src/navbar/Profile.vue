<template>
    <div class="profile">
        <router-link to="/" class="profileLink">
            <img src="../assets/images/home/profile.jpg" alt="profile image" />
        </router-link>
        <h2>Alexandre Djerbetian</h2>
    </div>
</template>

<script lang="ts">
export default {
    name: "Profile"
};
</script>

<style lang="scss" scoped>
@import "src/navbar/navbar";

h3 {
    padding-left: 15px;
    color: $navbarColor;
    margin-bottom: 15px;
}

.profile {
    padding: 60px 0;
    text-align: center;
    height: 350px;

    img {
        display: inline-block;
        width: 150px;
        border-radius: 100%;
    }

    h2 {
        margin-top: 30px;
        color: $navbarColor;
        justify-content: center;
    }
}
</style>
