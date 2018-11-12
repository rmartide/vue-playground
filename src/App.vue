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
    <div class="d-flex justify-content-center">
      <button @click="animate">animate</button>
    </div>
    <div class="d-flex justify-content-center mt-3">
      <form>
        <input type="checkbox" class="form-check-inline" @click="animate2">
        <label>Animate on check</label>
      </form>
    </div>
    <img src="./assets/nyan.png" id="nyan">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Forms from './components/Forms';
import SassyCSS from './components/SassyCSS';
import StoreUser from './components/StoreUser.vue';
import {
  TweenMax, SlowMo
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
    const maxnyan = screen.width - 168;
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
  },
  methods: {
    animate() {
      TweenMax.to("#nyan", 0, { display: 'block' });
      TweenMax.to("#nyan", 1.7, { right: '0', top: '0', ease: SlowMo.ease.config(0.1, 1, false) })
        .eventCallback("onComplete", () => {
          TweenMax.set("#nyan", { clearProps: 'all', display: 'none' });
        });
    },
    animate2(event) {
      if (event.target.checked) {
        TweenMax.to("#nyan", 0, { display: 'block' });
        TweenMax.to("#nyan", 2, { right: '0', top: '0', ease: SlowMo.ease.config(0.2, 1.2, false) })
          .eventCallback("onComplete", () => {
            TweenMax.set("#nyan", { clearProps: 'all', display: 'none' });
          });
      }
    }
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

#nyan {
  position: absolute;
  height: 5%;
  width: 5%;
  bottom: 0;
  transform: rotate(-40deg);
  display: none;
}
</style>
