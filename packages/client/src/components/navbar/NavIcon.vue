<template>
    <font-awesome-icon pull="left" :icon="icon" />
</template>

<script>
export default {
    name: "NavIcon",
    props: {
        icon: [String, Array]
    }
};
</script>

<style scoped></style>
