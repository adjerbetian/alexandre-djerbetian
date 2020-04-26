<template>
    <div class="navbar">
        <Profile />

        <div class="menuGroup">
            <div class="menuItems">
                <NavLink to="/resume/" icon="file">Resume</NavLink>
            </div>
        </div>

        <div class="menuGroup">
            <h3><NavIcon icon="code" />Coding</h3>
            <div class="menuItems">
                <NavLink to="/articles/" icon="pencil-alt">Articles</NavLink>
                <NavLink to="/books/" icon="book">Book Notes</NavLink>
                <NavLink to="/quotes/" icon="comment">Quotes</NavLink>
                <NavLink to="/videos/" :icon="['fab', 'youtube']">Videos</NavLink>
            </div>
        </div>

        <div class="menuGroup">
            <h3><NavIcon :icon="['far', 'user']" />Other</h3>
            <div class="menuItems">
                <NavLink to="/movies/" icon="film">Short movies</NavLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavIcon from "@/views/components/navbar/NavIcon.vue";
import NavLink from "@/views/components/navbar/NavLink.vue";
import Profile from "@/views/components/navbar/Profile.vue";

@Component({
    components: {
        Profile,
        NavIcon,
        NavLink
    }
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
@import "navbar";

.navbar {
    color: beige;
    width: $navbarFullWidth;
    background-color: $navbarBackground;
    min-height: 100vh;
    padding: 0 20px 20px;
    border-right: 1px solid $navbarBackgroundLight;
}

.menuGroup {
    margin-bottom: 40px;
    h3 {
        padding-left: 15px;
        color: $navbarColor;
        margin-bottom: 15px;
    }
}
.menuItems {
    background-color: $navbarBackgroundLight;
    border-radius: 5px;
    margin-top: 10px;
}
</style>
