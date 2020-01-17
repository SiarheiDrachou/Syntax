<template>
    <li class = "collection-item" >
        <label 
            class  = "grey-text" 
            :class = "{ 
                'text-lighten-2' : isChecked,
                'text-darken-4'  : !isChecked
            }"
        >
            <input type="checkbox" :value="isChecked" @change="$emit('checked-change', !isChecked)" />
            <span :style="{ textDecoration: isChecked ? 'line-through' : 'none' }"> 
                <slot></slot>
            </span>
        </label>

        <i 
            class  = "material-icons right"
            @click = "$emit('remove-item')"
        > 
            close 
        </i>

        <i 
            class  = "material-icons right"
            @click = "$emit('create-item')"
        > 
            create 
        </i>
    </li>
</template>

<script>
    export default {
        props: {
            isChecked: {
                type: Boolean
            }
        }
    }
</script>

<style lang="scss" scoped>
    .collection-item .material-icons {
        cursor: pointer;
    }

    .collection-item .material-icons:first-of-type {
       font-size: 20px;
       margin-left: auto;
       margin-right: 8px
    }
</style>