<template>
    <div>
        <slot name="button">
            <button class="btn waves-effect waves-light" type="submit" @input = "$emit('newTodo', addNewTodo)" > 
                Добавить
            </button>
        </slot>
    </div>
</template>