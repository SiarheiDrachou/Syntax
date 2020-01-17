<template>
    <li class = "collection-item" >
        <button class="btn waves-effect waves-light w-100" type="submit" @click = "$emit('delete-item')" @input = "$emit('newTodo', addNewTodo)" >
            <slot name="delete"></slot>
        </button>
    </li>
</template>

<style lang="scss" scoped>
    .btn {
        width: 100%;
        padding: 0;
    }
</style>