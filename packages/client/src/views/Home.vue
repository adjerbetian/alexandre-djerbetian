<template>
    <div class="main">
        <div class="right-align-row">
            <div class="splash">
                <h1>Alexandre Djerbetian</h1>
                <hr />
                <h2>Software Engineer</h2>

                <div class="buttons">
                    <router-link to="/home" class="red">Enter</router-link>
                    <a class="blue" href="https://drive.google.com/open?id=1XrMLYQ3-6v9i2ezMk6KeM0oBNfYDDiAN">
                        <font-awesome-icon pull="left" class="pull-down" icon="arrow-circle-down" />
                        <span class="larges-screen">Download resume</span>
                        <span class="small-screen">Resume</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss" scoped>
.main {
    height: 100vh;
    width: 100%;
    /*background: #95c9ee no-repeat left center;*/
    background: #95c9ee url("../assets/images/home/index.jpg") no-repeat left center;
    background-size: cover;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.right-align-row {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
}

.splash {
    text-align: center;
    max-width: 700px;

    hr {
        border-top: 1px solid white;
    }

    h1 {
        color: white;
        font-size: 64px;
        font-weight: 700;
        margin: 10px 0;
    }

    h2 {
        color: white;
        font-size: 32px;
        font-weight: 400;
        margin: 10px 0;
    }
}

.buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;

    a {
        border: white 1px solid;
        padding: 15px 25px;
        margin: 0 10px;

        &.blue {
            background-color: #5999ff;
            color: white;
        }

        &.red {
            background-color: #c12f26;
            color: white;
        }

        .pull-down {
            margin-top: 3px;
        }
    }
}

.small-screen {
    display: none;
}

@media (max-width: 1400px) {
    .splash h1 {
        font-size: 48px;
    }

    .splash h2 {
        font-size: 24px;
    }
}

@media (max-width: 1080px) {
    .main {
        justify-content: flex-start;
    }

    .larges-screen {
        display: none;
    }

    .small-screen {
        display: unset;
    }
}

@media (max-width: 700px) {
    .splash h1 {
        font-size: 32px;
    }

    .splash h2 {
        font-size: 20px;
    }
}
</style>
