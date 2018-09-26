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
export default {
    name: 'TodoList',
    components: {
        TodoListItem,
        CustomInput
    },
    data() {
        return {
            tasks: [
                { text: 'Master vue', id: 2 },
                { text: 'Eat a bocadillo', id: 1 }
            ],
            todoTask: '',
            idCounter: 0
        }
    },
    methods: {
        addTask() {
            console.log(this.todoTask);
        }
    }
}
</script>

<style lang="scss">
</style>
