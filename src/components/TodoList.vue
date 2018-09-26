<template>
    <div>
        <h3>Todo</h3>
        <CustomInput v-model="todoTask" @keyup.enter="addTask"/>
        <ul class="rml-list__tasks">
            <TodoListItem v-for="task in tasks" :key="task.id" :task="task">
            </TodoListItem>
        </ul>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import CustomInput from './CustomInput';

let idCounter = 1;

export default {
    name: 'TodoList',
    components: {
        TodoListItem,
        CustomInput
    },
    data() {
        return {
            todoTask: '',
            tasks: [
                { text: 'Master vue', id: idCounter++ },
                { text: 'Eat a bocadillo', id: idCounter++ }
            ]
        }
    },
    methods: {
        addTask() {
            this.tasks.push({ text: this.todoTask, id: idCounter++});
        }
    }
}
</script>

<style lang="scss">
</style>
