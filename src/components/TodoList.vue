<template>
    <div class="rml-list rml-list--themed">
        <h3>Todo Tasks</h3>
        <CustomInput v-focus v-model="todoTask" @keyup.enter="addTask" />
        <transition-group appear name="custom-classes-transition" enter-active-class="animated rubberBand" class="rml-list__tasks" tag="ul">
            <TodoListItem v-for="task in tasks" :key="task.id" :task="task" @deltask="delTask">
            </TodoListItem>
        </transition-group>
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
                { text: 'Extend the input and add some css', id: idCounter++ },
                { text: 'Try to add a delete animation with transition-group', id: idCounter++ }
            ]
        }
    },
    methods: {
        addTask() {
            if (this.todoTask) {
                this.tasks.push({ text: this.todoTask, id: idCounter++ });
                this.todoTask = '';
            }
        },
        delTask(task) {
            // this.tasks.splice(this.tasks.indexOf(task), 1);
            TweenLite.to(`#task-${task.id}`, 0, { textDecoration: 'line-through' });
            TweenLite.to(`#task-${task.id}`, 1, { display: 'none', opacity: 0, delay: 0.5 })
                .eventCallback("onComplete", () => this.tasks.splice(this.tasks.indexOf(task), 1));
        }
    }
}
</script>

<style lang="scss">
</style>
