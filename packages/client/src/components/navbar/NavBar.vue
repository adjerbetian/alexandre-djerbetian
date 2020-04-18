<template>
    <nav>
        <div class="profile">
            <router-link to="/" class="profileLink">
                <img src="../../assets/images/home/profile.jpg" alt="profile image" />
            </router-link>
            <h2>Alexandre Djerbetian</h2>
        </div>

        <div class="menuItems">
            <NavLink to="/resume/" icon="file">Resume</NavLink>
        </div>

        <h3><NavIcon icon="code" />Coding</h3>
        <div class="menuItems">
            <NavLink to="/articles/" icon="pencil-alt">Articles</NavLink>
            <NavLink to="/books/" icon="book">Book Notes</NavLink>
            <NavLink to="/quotes/" icon="comment">Quotes</NavLink>
            <NavLink to="/videos/" :icon="['fab', 'youtube']">Videos</NavLink>
        </div>

        <h3><NavIcon :icon="['far', 'user']" />Other</h3>
        <div class="menuItems">
            <NavLink to="/movies/" icon="film">Short movies</NavLink>
        </div>
    </nav>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavIcon from "@/components/navbar/NavIcon.vue";
import NavLink from "@/components/navbar/NavLink.vue";

@Component({
    components: {
        NavIcon,
        NavLink
    }
})
export default class NavBar extends Vue {}
</script>

<style lang="scss" scoped>
@import "./navbar";

nav {
    color: beige;
    width: $navbarFullWidth;
    background-color: $navbarBackground;
    min-height: 100vh;
    padding: 0 20px;
    border-right: 1px solid $navbarBackgroundLight;
}
.profileLink {
    width: 150px;
}
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
.menuItems {
    background-color: $navbarBackgroundLight;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 40px;
}
</style>
