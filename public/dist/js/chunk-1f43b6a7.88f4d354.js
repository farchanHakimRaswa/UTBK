(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f43b6a7"],{"0fd9":function(e,t,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),u=["sm","md","lg","xl"],l=["start","end","center"];function c(e,t){return u.reduce((function(n,r){return n[e+Object(o["t"])(r)]=t(),n}),{})}var d=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},f=c("align",(function(){return{type:String,default:null,validator:d}})),v=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},h=c("justify",(function(){return{type:String,default:null,validator:v}})),g=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},p=c("alignContent",(function(){return{type:String,default:null,validator:g}})),m={align:Object.keys(f),justify:Object.keys(h),alignContent:Object.keys(p)},b={align:"align",justify:"justify",alignContent:"align-content"};function k(e,t,n){var r=b[e];if(null!=n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var y=new Map;t["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},h),{},{alignContent:{type:String,default:null,validator:g}},p),render:function(e,t){var n=t.props,a=t.data,i=t.children,o="";for(var u in n)o+=String(n[u]);var l=y.get(o);return l||function(){var e,t;for(t in l=[],m)m[t].forEach((function(e){var r=n[e],a=k(t,e,r);a&&l.push(a)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(e,"align-".concat(n.align),n.align),Object(r["a"])(e,"justify-".concat(n.justify),n.justify),Object(r["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),y.set(o,l)}(),e(n.tag,Object(s["a"])(a,{staticClass:"row",class:l}),i)}})},"4ec9":function(e,t,n){"use strict";var r=n("6d61"),a=n("6566");e.exports=r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},"615b":function(e,t,n){},"62ad":function(e,t,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),i=(n("4b85"),n("2b0e")),s=n("d9f7"),o=n("80d2"),u=["sm","md","lg","xl"],l=function(){return u.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),c=function(){return u.reduce((function(e,t){return e["offset"+Object(o["t"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return u.reduce((function(e,t){return e["order"+Object(o["t"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(l),offset:Object.keys(c),order:Object.keys(d)};function v(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var h=new Map;t["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},c),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,i=t.children,o=(t.parent,"");for(var u in n)o+=String(n[u]);var l=h.get(o);return l||function(){var e,t;for(t in l=[],f)f[t].forEach((function(e){var r=n[e],a=v(t,e,r);a&&l.push(a)}));var a=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!a||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),h.set(o,l)}(),e(n.tag,Object(s["a"])(a,{class:l}),i)}})},6566:function(e,t,n){"use strict";var r=n("9bf2").f,a=n("7c73"),i=n("e2cc"),s=n("0366"),o=n("19aa"),u=n("2266"),l=n("7dd0"),c=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),h=v.set,g=v.getterFor;e.exports={getConstructor:function(e,t,n,l){var c=e((function(e,r){o(e,c,t),h(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=r&&u(r,e[l],e,n)})),v=g(t),p=function(e,t,n){var r,a,i=v(e),s=m(e,t);return s?s.value=n:(i.last=s={index:a=f(t,!0),key:t,value:n,previous:r=i.last,next:void 0,removed:!1},i.first||(i.first=s),r&&(r.next=s),d?i.size++:e.size++,"F"!==a&&(i.index[a]=s)),e},m=function(e,t){var n,r=v(e),a=f(t);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==t)return n};return i(c.prototype,{clear:function(){var e=this,t=v(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=v(t),r=m(t,e);if(r){var a=r.next,i=r.previous;delete n.index[r.index],r.removed=!0,i&&(i.next=a),a&&(a.previous=i),n.first==r&&(n.first=a),n.last==r&&(n.last=i),d?n.size--:t.size--}return!!r},forEach:function(e){var t,n=v(this),r=s(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!m(this,e)}}),i(c.prototype,n?{get:function(e){var t=m(this,e);return t&&t.value},set:function(e,t){return p(this,0===e?0:e,t)}}:{add:function(e){return p(this,e=0===e?0:e,e)}}),d&&r(c.prototype,"size",{get:function(){return v(this).size}}),c},setStrong:function(e,t,n){var r=t+" Iterator",a=g(t),i=g(r);l(e,t,(function(e,t){h(this,{type:r,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=i(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(t)}}},"6d61":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("94ca"),s=n("6eeb"),o=n("f183"),u=n("2266"),l=n("19aa"),c=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),h=n("7156");e.exports=function(e,t,n){var g=-1!==e.indexOf("Map"),p=-1!==e.indexOf("Weak"),m=g?"set":"add",b=a[e],k=b&&b.prototype,y=b,x={},j=function(e){var t=k[e];s(k,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(p&&!c(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return p&&!c(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(p&&!c(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(i(e,"function"!=typeof b||!(p||k.forEach&&!d((function(){(new b).entries().next()})))))y=n.getConstructor(t,e,g,m),o.REQUIRED=!0;else if(i(e,!0)){var w=new y,O=w[m](p?{}:-0,1)!=w,S=d((function(){w.has(1)})),C=f((function(e){new b(e)})),R=!p&&d((function(){var e=new b,t=5;while(t--)e[m](t,t);return!e.has(-0)}));C||(y=t((function(t,n){l(t,y,e);var r=h(new b,t,y);return void 0!=n&&u(n,r[m],r,g),r})),y.prototype=k,k.constructor=y),(S||R)&&(j("delete"),j("has"),g&&j("get")),(R||O)&&j(m),p&&k.clear&&delete k.clear}return x[e]=y,r({global:!0,forced:y!=b},x),v(y,e),p||n.setStrong(y,e,g),y}},"73cf":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-card",{staticClass:"pa-8",attrs:{width:"500"}},[n("v-form",{ref:"loginForm",model:{value:e.isFormValid,callback:function(t){e.isFormValid=t},expression:"isFormValid"}},[n("v-text-field",{attrs:{label:"Nama",type:"text",rules:e.nameRules,required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),n("v-text-field",{attrs:{label:"Username",type:"text",rules:e.usernameRules,required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}}),n("v-text-field",{attrs:{label:"NISN",type:"text",rules:e.nisnRules,required:""},model:{value:e.user.nisn,callback:function(t){e.$set(e.user,"nisn",t)},expression:"user.nisn"}}),n("v-text-field",{attrs:{label:"No Telp (WA)",type:"tel",rules:e.phoneNumRules,required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),n("v-text-field",{attrs:{label:"Email",type:"email",rules:e.emailRules,required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),n("v-text-field",{attrs:{label:"Asal sekolah",type:"text",rules:e.originRules,required:""},model:{value:e.user.origin,callback:function(t){e.$set(e.user,"origin",t)},expression:"user.origin"}}),n("div",{staticClass:"text-center"},[n("v-btn",{staticClass:"mb-8 success",attrs:{type:"submit",width:"100%",disabled:!e.isFormValid||e.isLoading,loading:e.isLoading},on:{click:function(t){return t.preventDefault(),e.register()}}},[e._v("Register")]),n("router-link",{attrs:{to:{name:"Login"}}},[e._v("Kembali ke login")])],1)],1),n("div",{staticClass:"h6 red--text",attrs:{hidden:0===e.errorMessage.length}},[e._v(e._s(e.errorMessage))])],1)],1)],1)],1)],1)},a=[],i=(n("96cf"),n("1da1")),s=n("98df"),o={name:"Register",data:function(){return{user:new s["a"],isFormValid:!1,isLoading:!1,errorMessage:"",nameRules:[function(e){return!!e||"Mohon masukkan nama"},function(e){return!!e&&e.length>=10||"Minimal 10 karakter"}],usernameRules:[function(e){return!!e||"Mohon masukkan username"}],nisnRules:[function(e){return!!e||"Mohon masukkan NISN"},function(e){return!!e&&10==e.length||"NISN adalah berjumlah 10 karakter"},function(e){return/^([\s\d]+)$/.test(e)||"Mohon masukkan NISN yang valid"}],phoneNumRules:[function(e){return!!e||"Mohon masukkan no telepon"},function(e){return!!e&&e.length>=10||"Minimal 10 karakter"},function(e){return/\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/.test(e)||"Mohon masukkan nomor telepon yang valid"}],emailRules:[function(e){return!!e||"Mohon masukkan email"},function(e){return/.+@.+/.test(e)||"Alamat email tidak valid"}],originRules:[function(e){return!!e||"Mohon masukkan asal sekolah"}]}},computed:{isLoggedIn:function(){return this.$store.state.auth.status.isLoggedIn}},methods:{register:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.isLoading=!0,e.prev=1,e.next=4,this.$store.dispatch("auth/register",this.user);case 4:t=e.sent,200===t.status&&(this.isSnackbarShown=!0,this.$router.push({name:"Login",params:{isRegisterSuccess:!0}})),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),this.errorMessage=e.t0;case 11:this.isLoading=!1;case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.isLoggedIn&&this.$router.push("home")}},u=o,l=n("2877"),c=n("6544"),d=n.n(c),f=n("8336"),v=n("b0af"),h=n("62ad"),g=n("a523"),p=n("4bd4"),m=n("0fd9"),b=n("8654"),k=Object(l["a"])(u,r,a,!1,null,null,null);t["default"]=k.exports;d()(k,{VBtn:f["a"],VCard:v["a"],VCol:h["a"],VContainer:g["a"],VForm:p["a"],VRow:m["a"],VTextField:b["a"]})},b0af:function(e,t,n){"use strict";n("0481"),n("4069"),n("a9e3");var r=n("5530"),a=(n("615b"),n("10d2")),i=n("297c"),s=n("1c87"),o=n("58df");t["a"]=Object(o["a"])(i["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},a["a"].options.computed.classes.call(this))},styles:function(){var e=Object(r["a"])({},a["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),n=t.tag,r=t.data;return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(n,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-1f43b6a7.88f4d354.js.map