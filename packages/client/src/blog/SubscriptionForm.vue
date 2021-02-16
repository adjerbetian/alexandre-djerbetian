<template>
    <form @submit="onSubmit" class="subscription-form">
        <input type="email" placeholder="email" v-model="email" required />
        <input type="submit" value="Subscribe" />
    </form>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class SubscribeForm extends Vue {
    email = "";

    async onSubmit(e: Event) {
        e.preventDefault();
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

$radius: 15px;

.subscription-form {
    margin-top: 50px;
    display: flex;

    input {
        width: 100%;
        padding: 12px;
        margin: 0;
        display: inline-block;
        border: 1px solid transparent;
        box-sizing: border-box;

        &[type="email"] {
            border-radius: $radius 0 0 $radius;

            &:focus {
                border: 1px solid primary(85);
                outline: none;
            }
        }

        &[type="submit"] {
            background-color: primary(50);
            color: white;
            border: none;
            cursor: pointer;
            max-width: 100px;
            border-radius: 0 $radius $radius 0;

            &:hover {
                opacity: 0.8;
            }
        }
    }
}
</style>
