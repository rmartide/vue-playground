<template>
    <li :id="'task-' + task.id">
        <input type="checkbox" @change="$emit('deltask', task);"> {{task.text}}
    </li>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: {
        task: Object
    }
}
</script>

<style>
.cross-out {
  text-decoration: line-through;
}
</style>
