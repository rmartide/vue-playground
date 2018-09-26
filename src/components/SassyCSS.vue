<template>
    <TodoList />
</template>

<script>
import TodoList from './TodoList';

export default {
    name: 'SassyCSS',
    components: {
        TodoList
    }
}
</script>

<style lang="scss">
.rml-list {
  border: 1px solid black;
  border-radius: 10px;
  min-width: 250px;
  min-height: 150px;
  display: inline-block;
  padding: 15px;
  &--themed {
    background-color: gray;
  }
  &__tasks {
    color: white;
    text-align: left;
    list-style-type: none;
    padding-left: 0;
    margin-bottom: 0;
    margin-top: 10px;
  }
}
</style>
