<template>
    <div>
        {{title}}
        <input v-focus v-model="title">
        <button v-on:click="alertWritten">alert</button>
        <input v-model.number="number" type="number" step="50">
        <p>{{animatedNumber}}</p>
        <p id="animatrix"></p>
        <input />
    </div>
</template>

<script>

import { TweenLite } from "gsap/TweenMax";
import TextPlugin from "gsap/TextPlugin";

export default {
    name: "Forms",
    data: function () {
        return {
            title: "We forms boyz",
            number: 0,
            tweenedNumber: 0
        };
    },
    methods: {
        alertWritten: function () {
            alert(this.title);
        }
    },
    computed: {
        animatedNumber: function () {
            return this.tweenedNumber;
        }
    },
    watch: {
        number: function (newValue) {
            TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
        },
        title: function (newValue) {
            TweenLite.to("#animatrix", 2, { text: newValue, delimiter: " "});
        }
    },
    directives: {
        focus: {
            inserted: (el) => {
                el.focus();
            }
        }
    }
};
</script>

<style>
</style>
