<template>
  <div class="container-fluid">
    <div class="row rml-logo-container">
      <img id="logo" alt="Vue logo" src="./assets/logo.png">
    </div>
      <div class="row justify-content-center">
        <SassyCSS />
      </div>
      <div class="row justify-content-center">
        <StoreUser />
      </div>
      <div class="row justify-content-center">
        <form>
          <input type="checkbox" class="form-check-inline" id="cst" v-model="showTests">
          <label for="cst">Show tests</label>
        </form>
      </div>
      <div class="row justify-content-center">
        <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
          <div v-if="showTests">
            <HelloWorld todo="Hello world" />
            <Forms />
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Forms from './components/Forms';
import SassyCSS from './components/SassyCSS';
import StoreUser from './components/StoreUser.vue';
import {
  TweenMax
} from "gsap/TweenMax";

export default {
  name: 'app',
  data() {
    return {
      showTests: false
    }
  },
  components: {
    HelloWorld,
    Forms,
    SassyCSS,
    StoreUser
  },
  mounted: function () {
    //const logo = document.getElementById('logo');
    const logoWidth = 200;
    const max = screen.width - logoWidth;
    const scale = 0.3;
    const scaledObjectWidth = logoWidth * scale;
    const half = (max - scaledObjectWidth) / 2;
    TweenMax.to("#logo", 2, {
      x: max,
      rotation: 360,
      ease: Bounce.easeOut,
      scale: 0.5,
      backgroundColor: 'red',
      border: '10px solid black',
      borderRadius: 10,
      padding: 30
    });
    TweenMax.to("#logo", 3, {
      x: half,
      rotation: -360,
      ease: Elastic.easeOut.config(1, 0.3),
      scale: 0.3,
      delay: 2.5,
      backgroundColor: 'black',
      borderColor: 'red'
    });
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

#logo {
  left: 0;
  position: absolute;
}

.rml-logo-container {
  height: 275px;
}
</style>
