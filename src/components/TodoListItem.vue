<template>
    <li :id="'task-' + task.id">{{task.text}} <button v-on:click="handleClick">x</button></li>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: {
        task: Object
    },
    methods: {
        handleClick() {
            this.$emit('deltask', this.task);
        }
    }
}
</script>

<style>
.cross-out {
  text-decoration: line-through;
}
</style>
