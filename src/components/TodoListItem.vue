<template>
    <li>{{task.text}}</li>
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

</style>
