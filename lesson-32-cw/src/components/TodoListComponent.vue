<template>
    <span class="new badge teal" data-badge-caption="выполнено">
        {{ doneTodos.length }} из {{ todoItems.length }}
    </span>
</template>

<script>
export default {
    props:['doneTodos', 'todoItems']
}
</script>