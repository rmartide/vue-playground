<template>
    <div class="rml-list rml-list--themed">
        <h3>Todo Tasks</h3>
        <CustomInput v-model="todoTask" @keyup.enter="addTask"/>
        <ul class="rml-list__tasks">
            <TodoListItem v-for="task in tasks" :key="task.id" :task="task" @deltask="delTask">
            </TodoListItem>
        </ul>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import CustomInput from './CustomInput';
import { TweenLite } from "gsap/TweenMax";

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
                { text: 'Adding animation when the task is added', id: idCounter++ },
                { text: 'Use a checkbox on the left instead of a button', id: idCounter++ },
                { text: 'Extend the input and add some css', id: idCounter++ }
            ]
        }
    },
    methods: {
        addTask() {
            this.tasks.push({ text: this.todoTask, id: idCounter++});
        },
        delTask(task) {
            // this.tasks.splice(this.tasks.indexOf(task), 1);
            TweenLite.to(`#task-${task.id}`, 0, {textDecoration: 'line-through'});
            TweenLite.to(`#task-${task.id}`, 1, {display: 'none', opacity: 0, delay: 0.5})
            .eventCallback("onComplete", () => this.tasks.splice(this.tasks.indexOf(task), 1));
        }
    }
}
</script>

<style lang="scss">
</style>
