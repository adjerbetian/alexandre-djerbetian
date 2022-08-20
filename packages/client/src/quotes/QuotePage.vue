<template>
    <div v-if="quote">
        <QuoteComponent :quote="quote" />
    </div>
</template>

<script lang="ts">
import QuoteComponent from "./Quote.vue";
import { fetchQuote } from "./quoteService";
import { validationService } from "@/utils";
import type { Quote } from "@alex/entities";
import { defineComponent } from "vue";

export default defineComponent({
    components: { QuoteComponent },
    data() {
        return {
            quote: null as Quote | null,
        };
    },
    async mounted() {
        validationService.assertIsId(this.$route.params.id);
        this.quote = await fetchQuote(this.$route.params.id);
    },
});
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
</style>
