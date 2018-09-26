<template>
    <li :id="'task-' + task.id">{{task.text}} <button v-on:click="$emit('deltask', task);">x</button></li>
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
