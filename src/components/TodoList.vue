<template>
    <div class="rml-list rml-list--themed">
        <h3 class="rml-list__header">Todo Tasks</h3>
        <CustomInput v-focus v-model="todoTask" @keyup.enter="addTask" />
        <transition-group appear name="custom-classes-transition" enter-active-class="animated fadeIn" v-on:leave="leave" class="rml-list__tasks" tag="ul">
            <TodoListItem v-for="task in tasks" :key="task.id" :task="task" @deltask="delTask">
            </TodoListItem>
        </transition-group>
    </div>
</template>

<script>
import TodoListItem from './TodoListItem';
import CustomInput from './CustomInput';
import { TweenLite } from "gsap/TweenMax";


export default {
    name: 'TodoList',
    components: {
        TodoListItem,
        CustomInput
    },
    data() {
        return {
            todoTask: ''
        }
    },
    computed: {
        tasks() {
            return this.$store.state.tasks;
        }
    }
    ,
    methods: {
        addTask() {
            if (this.todoTask) {
                const text = { text: this.todoTask }
                this.$store.commit('addTask', text);
                this.todoTask = '';
            }
        },
        delTask(task) {
            this.$store.commit('delTask', { task });
        },
        leave(el, done) {
            TweenLite.to(el, 0, { textDecoration: 'line-through' });
            TweenLite.to(el, 1, { display: 'none', opacity: 0, delay: 0.25 })
                .eventCallback("onComplete", done);
        }
    }
}
</script>

<style lang="scss">
</style>
