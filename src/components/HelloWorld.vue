<template>
  <div>
    <div>{{todo}}</div>
    <button id="myWiggle" class="btn btn-danger" v-on:click="reverseMessage">Clicked {{ count }} times</button>
    <h1>GreenSock's TextPlugin<span></span></h1>
  </div>
</template>
<script>

import { TweenLite, TimelineMax } from "gsap/TweenMax";
import TextPlugin from "gsap/TextPlugin";
export default {
  name: "HelloWorld",
  props: ["todo"],
  data: function () {
    return {
      count: 0
    };
  },
  methods: {
    reverseMessage: function () {
      this.count++;
      // TweenLite.to(this.$data, 0.5, { message: "TOP KAK" });
      var tl = new TimelineMax({ repeat: 3, repeatDelay: 1, yoyo: true });
      tl.to("h1 span", 1, { text: " is so much fun!" })
    }
  }
};
</script>

<style>
  h1 span {
    color: green;
  }
</style>

