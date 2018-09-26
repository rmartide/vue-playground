<template>
    <input :value="value" v-bind="$attrs" v-on="inputListeners" />
</template>

<script>
export default {
    name: 'CustomInput',
    inheritAttrs: false,
    props: ['value'],
    computed: {
        inputListeners: function () {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style>
</style>
