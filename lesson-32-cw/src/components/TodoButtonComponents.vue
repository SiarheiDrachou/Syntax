<template>
    <div>
        <button class="btn waves-effect waves-light" type="submit" @input = "$emit('newTodo', addNewTodo)" >
            <slot name="button"></slot>
        </button>
    </div>
</template>