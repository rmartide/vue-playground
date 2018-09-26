<template>
    <transition name="custom-classes-transition" enter-active-class="animated rubberBand">
        <li :id="'task-' + task.id" v-if="show">
            <input type="checkbox" @change="$emit('deltask', task);"> {{task.text}}
    </li>
    </transition>
</template>

<script>

export default {
    name: 'TodoListItem',
    data() {
        return {
            show: false
        }
    },
    props: {
        task: Object
    },
    mounted() {
        this.show = true;
    }
}
</script>

<style>
.cross-out {
  text-decoration: line-through;
}
</style>
