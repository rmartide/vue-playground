<template>
    <div>
        Store.state.count: {{count}}
        <p><button @click="commit">Commit</button></p>
    </div>
</template>

<script>
export default {
    methods: {
        commit() {
            this.$store.commit('increment');
        }
    },
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
}
</script>

<style>

</style>
