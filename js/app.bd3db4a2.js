(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],d=0,f=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},s=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),a=n.n(o);a.a},2961:function(t,e,n){"use strict";var o=n("4f10"),a=n.n(o);a.a},"31f2":function(t,e,n){"use strict";var o=n("ebce"),a=n.n(o);a.a},"4f10":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[t._m(0),o("div",{staticClass:"row justify-content-center"},[o("SassyCSS")],1),o("div",{staticClass:"row justify-content-center"},[o("StoreUser")],1),o("div",{staticClass:"row justify-content-center"},[o("form",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.showTests,expression:"showTests"}],staticClass:"form-check-inline",attrs:{type:"checkbox",id:"cst"},domProps:{checked:Array.isArray(t.showTests)?t._i(t.showTests,null)>-1:t.showTests},on:{change:function(e){var n=t.showTests,o=e.target,a=!!o.checked;if(Array.isArray(n)){var s=null,r=t._i(n,s);o.checked?r<0&&(t.showTests=n.concat([s])):r>-1&&(t.showTests=n.slice(0,r).concat(n.slice(r+1)))}else t.showTests=a}}}),o("label",{attrs:{for:"cst"}},[t._v("Show tests")])])]),o("div",{staticClass:"row justify-content-center"},[o("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated tada","leave-active-class":"animated bounceOutRight"}},[t.showTests?o("div",[o("HelloWorld",{attrs:{todo:"Hello world"}}),o("Forms")],1):t._e()])],1),o("div",{staticClass:"d-flex justify-content-center"},[o("button",{on:{click:t.animate}},[t._v("animate")])]),o("div",{staticClass:"d-flex justify-content-center mt-3"},[o("form",[o("input",{staticClass:"form-check-inline",attrs:{type:"checkbox"},on:{click:t.animate2}}),o("label",[t._v("Animate on check")])])]),o("img",{attrs:{src:n("6419"),id:"nyan"}})])},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row rml-logo-container"},[o("img",{attrs:{id:"logo",alt:"Vue logo",src:n("cf05")}})])}],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v(t._s(t.todo))]),n("button",{staticClass:"btn btn-danger",attrs:{id:"myWiggle"},on:{click:t.reverseMessage}},[t._v("Clicked "+t._s(t.count)+" times")]),t._m(0)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("GreenSock's TextPlugin"),n("span")])}],c=n("a5cf"),l={name:"HelloWorld",props:["todo"],data:function(){return{count:0}},methods:{reverseMessage:function(){this.count++;var t=new c["e"]({repeat:3,repeatDelay:1,yoyo:!0});t.to("h1 span",1,{text:" is so much fun!"})}}},u=l,d=(n("31f2"),n("2877")),f=Object(d["a"])(u,r,i,!1,null,null,null),m=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"},{name:"focus",rawName:"v-focus"}],domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("button",{on:{click:t.alertWritten}},[t._v("alert")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.number,expression:"number",modifiers:{number:!0}}],attrs:{type:"number",step:"50"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),n("p",[t._v(t._s(t.animatedNumber))]),n("p",{attrs:{id:"animatrix"}})])},v=[],h=(n("b680"),n("33a0")),b=n("cffa");b["a"].registerPlugin(h["a"]);var k={name:"Forms",data:function(){return{title:"We forms boyz",number:0,tweenedNumber:0}},methods:{alertWritten:function(){alert(this.title)}},computed:{animatedNumber:function(){return this.tweenedNumber.toFixed(0)}},watch:{number:function(t){c["f"].to(this.$data,.5,{tweenedNumber:t})},title:function(t){c["f"].to("#animatrix",.5,{text:{value:t},ease:"none"})}},directives:{placeholder:function(t){t.placeholder="From placeholder directive"}},mounted:function(){c["f"].to("#animatrix",.5,{text:{value:this.title},ease:"none"})}},y=k,g=Object(d["a"])(y,p,v,!1,null,null,null),_=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("TodoList")},w=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rml-list rml-list--themed"},[n("h3",{staticClass:"rml-list__header"},[t._v("Todo Tasks")]),n("CustomInput",{directives:[{name:"focus",rawName:"v-focus"}],on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask(e)}},model:{value:t.todoTask,callback:function(e){t.todoTask=e},expression:"todoTask"}}),n("transition-group",{staticClass:"rml-list__tasks",attrs:{appear:"",name:"custom-classes-transition","enter-active-class":"animated fadeIn",tag:"ul"},on:{leave:t.leave}},t._l(t.tasks,(function(e){return n("TodoListItem",{key:e.id,attrs:{task:e},on:{deltask:t.delTask}})})),1)],1)},C=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{attrs:{id:"task-"+t.task.id}},[n("input",{attrs:{type:"checkbox"},on:{change:function(e){return t.$emit("deltask",t.task)}}}),t._v(" "+t._s(t.task.text)+" ")])},j=[],$={name:"TodoListItem",props:{task:Object},mounted:function(){this.show=!0}},S=$,P=(n("9162"),Object(d["a"])(S,O,j,!1,null,null,null)),E=P.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g(t._b({attrs:{id:"rml-custom-input"},domProps:{value:t.value}},"input",t.$attrs,!1),t.inputListeners))},L=[],A=n("5530"),I={name:"CustomInput",inheritAttrs:!1,props:{value:{type:String,default:""}},computed:{inputListeners:function(){var t=this;return Object(A["a"])(Object(A["a"])({},this.$listeners),{},{input:function(e){return t.$emit("input",e.target.value)}})}}},W=I,M=(n("71d6"),Object(d["a"])(W,N,L,!1,null,null,null)),F=M.exports,H={name:"TodoList",components:{TodoListItem:E,CustomInput:F},data:function(){return{todoTask:""}},computed:{tasks:function(){return this.$store.state.tasks}},methods:{addTask:function(){if(this.todoTask){var t={text:this.todoTask};this.$store.commit("addTask",t),this.todoTask=""}},delTask:function(t){this.$store.commit("delTask",{task:t})},leave:function(t,e){c["f"].to(t,0,{textDecoration:"line-through"}),c["f"].to(t,1,{display:"none",opacity:0,delay:.25}).eventCallback("onComplete",e)}}},U=H,D=Object(d["a"])(U,T,C,!1,null,null,null),J=D.exports,R={name:"SassyCSS",components:{TodoList:J}},z=R,G=(n("2961"),Object(d["a"])(z,x,w,!1,null,null,null)),V=G.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" Store.state.count: "+t._s(t.count)+" "),n("p",[n("button",{on:{click:t.commit}},[t._v("Commit")])])])},B=[],K={methods:{commit:function(){this.$store.commit("increment")}},computed:{count:function(){return this.$store.state.count}}},Q=K,X=Object(d["a"])(Q,q,B,!1,null,null,null),Y=X.exports,Z=n("4476"),tt=n("0a47"),et={name:"app",data:function(){return{showTests:!1}},components:{HelloWorld:m,Forms:_,SassyCSS:V,StoreUser:Y},mounted:function(){var t=200,e=screen.width-t,n=(screen.width,.3),o=t*n,a=(e-o)/2;Z["a"].to("#logo",2,{x:e,rotation:360,ease:c["a"].easeOut,scale:.5,backgroundColor:"red",border:"10px solid black",borderRadius:10,padding:30}),Z["a"].to("#logo",3,{x:a,rotation:-360,ease:c["b"].easeOut.config(1,.3),scale:.3,delay:2.5,backgroundColor:"black",borderColor:"red"})},methods:{animate:function(){Z["a"].to("#nyan",0,{display:"block"}),Z["a"].to("#nyan",1.7,{right:"0",top:"0",ease:tt["a"].ease.config(.1,1,!1)}).eventCallback("onComplete",(function(){Z["a"].set("#nyan",{clearProps:"all",display:"none"})}))},animate2:function(t){t.target.checked&&(Z["a"].to("#nyan",0,{display:"block"}),Z["a"].to("#nyan",2,{right:"0",top:"0",ease:tt["a"].ease.config(.2,1.2,!1)}).eventCallback("onComplete",(function(){Z["a"].set("#nyan",{clearProps:"all",display:"none"})})))}}},nt=et,ot=(n("034f"),Object(d["a"])(nt,a,s,!1,null,null,null)),at=ot.exports,st=(n("c975"),n("a434"),n("2f62"));o["a"].use(st["a"]);var rt=1,it=new st["a"].Store({state:{count:0,tasks:[{text:"Add animation when the task is added",id:rt++},{text:"Use a checkbox on the left instead of a button",id:rt++},{text:"Extend the input and add some css",id:rt++},{text:"Try to add a delete animation with transition-group",id:rt++}]},mutations:{increment:function(t){t.count++},addTask:function(t,e){var n=e.text;t.tasks.push({text:n,id:rt++})},delTask:function(t,e){var n=e.task;t.tasks.splice(t.tasks.indexOf(n),1)}}}),ct=it;n("ab8b"),n("77ed");o["a"].config.productionTip=!1,o["a"].directive("focus",{inserted:function(t){t.focus()}}),new o["a"]({render:function(t){return t(at)},store:ct}).$mount("#app")},6419:function(t,e,n){t.exports=n.p+"img/nyan.be60edb7.png"},"71d6":function(t,e,n){"use strict";var o=n("d7ad"),a=n.n(o);a.a},"85ec":function(t,e,n){},9162:function(t,e,n){"use strict";var o=n("f6d4"),a=n.n(o);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d7ad:function(t,e,n){},ebce:function(t,e,n){},f6d4:function(t,e,n){}});
//# sourceMappingURL=app.bd3db4a2.js.map