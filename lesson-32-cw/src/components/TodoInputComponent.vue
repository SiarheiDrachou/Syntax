<template>
    <div class="col s11">
        <input 
            class        = "validate"
            type         = "text"
            placeholder  = "Что сделать?"
            :value = "value"
            @input = "$emit('input', $event.target.value)"
        />
    </div>
</template>

<script>
    export default {
        props: ['value']
    }
</script>