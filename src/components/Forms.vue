<template>
	<div>
		<input v-model="title" v-focus />
		<button v-on:click="alertWritten">alert</button>
		<input v-model.number="number" type="number" step="50" />
		<p>{{animatedNumber}}</p>
		<p id="animatrix"></p>
		<!-- <input v-placeholder class="form-control-sm" /> -->
	</div>
</template>

<script>

import { TweenLite } from "gsap/all";
import TextPlugin from "gsap/TextPlugin";
import gsap from "gsap";
gsap.registerPlugin(TextPlugin);

export default {
	name: "Forms",
	data() {
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
			return this.tweenedNumber.toFixed(0);
		}
	},
	watch: {
		number: function (newValue) {
			TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
		},
		title: function (newValue) {
			TweenLite.to("#animatrix", 0.5, { text: { value: newValue }, ease: "none" });
		}
	},
	directives: {
		placeholder: function (el) {
			//Without specifying the hook is the same on bind and update
			el.placeholder = "From placeholder directive";
		}
    },
    mounted() {
        TweenLite.to("#animatrix", 0.5, { text: { value: this.title }, ease: "none" });
    }
};
</script>

<style>
</style>
