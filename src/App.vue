<template>
  <div>
    <div>
      <img id="logo" alt="Vue logo" src="./assets/logo.png">
    </div>
      <div id="app">
        <HelloWorld todo="Hello world" />
        <Forms />
      </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Forms from './components/Forms';
import { TweenMax } from "gsap/TweenMax";

export default {
  name: 'app',
  components: {
    HelloWorld,
    Forms
  },
  mounted: function () {
    TweenMax.to("#logo", 2, {x:1200, rotation:360, ease:Bounce.easeOut, scale:0.5, backgroundColor: 'red', border:'10px solid black', borderRadius:10, padding:30});
    TweenMax.to("#logo", 3, {x:0, rotation:-360, ease:Elastic.easeOut.config(1, 0.3), scale:1, delay: 2.5, backgroundColor: 'yellow', borderColor:'red'});
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
