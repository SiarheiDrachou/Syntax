<template>
    <div>
        <slot name="header">
            <h4 v-neon-text:white = "'#e8ba00'"> Список дел: </h4>
        </slot>
    </div>
</template>

<script>
    import helpers from "@/mixins/helpers";
    export default {
        mixins: [helpers]
    }
</script>