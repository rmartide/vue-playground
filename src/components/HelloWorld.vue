<template>
<div>
    <div>{{todo}}</div>
    <button v-on:click="reverseMessage" v-bind:title="message">Clicked {{ count }} times</button>
    {{ message }}
    {{ count }}
</div>
</template>
<script>
export default {
  name: "HelloWorld",
  props: ["todo"],
  data: function() {
    return {
      message: "Top...",
      count: 0
    };
  },
  methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('');
        this.count++;
      }
  }
};
</script>
