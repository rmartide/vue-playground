<template>
    <div class="rml-list rml-list--themed">
        <TodoList />
    </div>
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
  min-width: 250px;
  min-height: 100px;
  display: inline-block;
  &--themed {
    background-color: gray;
  }
}
</style>
