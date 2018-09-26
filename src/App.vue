<template>
  <div>
    <div>
      <img id="logo" alt="Vue logo" src="./assets/logo.png">
    </div>
      <div id="app">
        <HelloWorld todo="Hello world" />
        <Forms />
        <SassyCSS />
      </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Forms from './components/Forms';
import SassyCSS from './components/SassyCSS';
import { TweenMax } from "gsap/TweenMax";

export default {
  name: 'app',
  components: {
    HelloWorld,
    Forms,
    SassyCSS
  },
  mounted: function () {
    TweenMax.to("#logo", 2, {x:1400, rotation:360, ease:Bounce.easeOut, scale:0.5, backgroundColor: 'red', border:'10px solid black', borderRadius:10, padding:30});
    TweenMax.to("#logo", 3, {x:700, rotation:-360, ease:Elastic.easeOut.config(1, 0.3), scale:0.3, delay: 2.5, backgroundColor: 'black', borderColor:'red'});
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
