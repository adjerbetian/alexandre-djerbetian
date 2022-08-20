<template>
    <div class="navbar">
        <Profile class="profile" />

        <div class="menuGroup">
            <h3 class="resume"><NavLink to="/resume">Resume</NavLink></h3>
        </div>

        <div class="menuGroup">
            <h3>Coding</h3>
            <div class="menuItems">
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/books">Library</NavLink>
                <NavLink to="/quotes">Quotes</NavLink>
                <NavLink to="/videos">Videos</NavLink>
            </div>
        </div>

        <div class="menuGroup">
            <h3>Hobbies</h3>
            <div class="menuItems">
                <NavLink to="/movies">Short movies</NavLink>
            </div>
        </div>

        <div class="footer">
            <a href="https://github.com/adjerbetian/alexandre-djerbetian">
                <img width="20" src="/images/github.svg" alt="github" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import NavLink from "@/navbar/NavLink.vue";
import Profile from "@/navbar/Profile.vue";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        Profile,
        NavLink,
    },
});
</script>

<style lang="scss" scoped>
@import "src/navbar/navbar";

.navbar {
    color: $navbarColor;
    display: flex;
    flex-direction: column;
}

.menuGroup {
    margin-bottom: 40px;

    h3 {
        padding-left: 15px;
        color: $navbarColor;
        margin-bottom: 0;
    }
}
.menuItems {
    border-radius: 5px;
    padding-left: 40px;
}

.navbar > div:nth-last-child(2) {
    flex-grow: 1;
}
.footer {
    text-align: center;
}

@include laptop {
    .navbar {
        width: $navbarFullWidth;
        background-color: $navbarBackground;
        min-height: 100vh;
        padding: 0 30px 30px;
        border-right: 1px solid $navbarBackgroundLight;
    }
}
@include tablet-and-mobile {
    .navbar {
        position: absolute;
        right: 0;
    }

    .profile {
        display: none;
    }
}
</style>
