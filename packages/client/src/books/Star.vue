<template>
    <div class="star">
        <div class="full" :style="{ width: width }">
            <FontAwesomeIcon :icon="['fas', 'heart']" />
        </div>
        <div>
            <FontAwesomeIcon :icon="['far', 'heart']" />
        </div>
    </div>
</template>

<script lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        FontAwesomeIcon,
    },
    props: {
        filling: {
            type: Number,
            required: true,
        },
    },
    computed: {
        width() {
            const width = 1 - Math.pow(1 - this.filling, 1.1);
            return `${width * 100}%`;
        },
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";

.star {
    display: inline-block;
    position: relative;

    .full {
        position: absolute;
        top: 0;
        left: 0;
        overflow: hidden;
    }
}
</style>
