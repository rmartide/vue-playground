<template>
    <div>
        <h3>Todo</h3>
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
                { text: 'Master vue', id: idCounter++ },
                { text: 'Eat a bocadillo', id: idCounter++ }
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
            var animation = TweenLite.to(`#task-${task.id}`, 1, {display: 'none', opacity: 0, delay: 0.5});
            animation.eventCallback("onComplete", () => this.tasks.splice(this.tasks.indexOf(task), 1));
        }
    }
}
</script>

<style lang="scss">
</style>
