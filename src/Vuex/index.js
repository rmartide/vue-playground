import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

let idCounter = 1;

const store = new Vuex.Store({
    state: {
        count: 0,
        tasks: [
            { text: 'Adding animation when the task is added', id: idCounter++ },
            { text: 'Use a checkbox on the left instead of a button', id: idCounter++ },
            { text: 'Extend the input and add some css', id: idCounter++ },
            { text: 'Try to add a delete animation with transition-group', id: idCounter++ }
        ]
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        addTask(state, { text }) {
            state.tasks.push({text, id: idCounter++});
        },
        delTask(state, { task }) {
            state.tasks.splice(state.tasks.indexOf(task), 1);
        }
    }
});

export default store;