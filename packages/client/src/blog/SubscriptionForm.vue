<template>
    <div>
        <form
            method="post"
            class="subscription-form"
            accept-charset="UTF-8"
            action="https://www.aweber.com/scripts/addlead.pl"
        >
            <div style="display: none">
                <input type="hidden" name="meta_web_form_id" value="882265854" />
                <input type="hidden" name="meta_split_id" value="" />
                <input type="hidden" name="listname" value="awlist5952171" />
                <input
                    type="hidden"
                    name="redirect"
                    value="https://www.aweber.com/thankyou-coi.htm?m=text"
                />

                <input type="hidden" name="meta_adtracking" value="Simple" />
                <input type="hidden" name="meta_message" value="1" />
                <input type="hidden" name="meta_required" value="email" />

                <input type="hidden" name="meta_tooltip" value="" />
            </div>
            <input placeholder="email" type="email" name="email" required />
            <input type="submit" name="submit" value="Subscribe" />
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
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
