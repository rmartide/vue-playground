<template>
    <input id="rml-custom-input" :value="value" v-bind="$attrs" v-on="inputListeners" />
</template>

<script>
import Vue from 'vue';

export default {
    name: 'CustomInput',
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        inputListeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
</script>

<style>
    #rml-custom-input {
        width: 100%;
        border: 2px solid brown;
        padding: 5px;
        border-radius: 5px;
    }
</style>
