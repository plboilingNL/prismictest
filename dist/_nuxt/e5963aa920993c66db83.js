(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(t,e,n){t.exports=n(136)},136:function(t,e,n){"use strict";n.r(e),function(t){n(45),n(100),n(3);var e=n(24),r=(n(63),n(105),n(16)),o=(n(106),n(107),n(2),n(1),n(4),n(23),n(110),n(145),n(153),n(155),n(7)),c=n.n(o),l=n(126),f=n(88),h=n(8),d=n(40),m=n(73);c.a.component(m.a.name,m.a),c.a.component("NLink",m.a),t.fetch||(t.fetch=l.a);var v,x,y=[],w=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var _=c.a.config.errorHandler||console.error;function k(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map((function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter((function(t){return o[t]&&t.toLowerCase().includes("leave")})).forEach((function(t){e[t]=o[t]}))}return e}))}function C(t,e,n){return O.apply(this,arguments)}function O(){return(O=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,l,f,d=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(v.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(h.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(h.n)(e,(function(t,e){return{Component:t,instance:e}}));case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some((function(t){var r=t.Component,o=t.instance,c=r.options.watchQuery;return!0===c||(Array.isArray(c)?c.some((function(t){return d._diffQuery[t]})):"function"==typeof c&&c.apply(o,[e.query,n.query]))}))&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,f=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(f)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:f}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}}),t,this,[[4,12]])})))).apply(this,arguments)}function $(t,e){return w.serverRendered&&e&&Object(h.a)(t,e),t._Ctor=t,t}function j(t){var path=Object(h.d)(t.options.base,t.options.mode);return Object(h.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=$(Object(h.o)(e),w.data?w.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}}),t)})));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function R(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(h.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach((function(t){t.options.middleware&&(o=o.concat(t.options.middleware))}))),o=o.map((function(t){return"function"==typeof t?t:("function"!=typeof f.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),f.a[t])})),!c)return Object(h.k)(o,e)}function E(t,e,n){return T.apply(this,arguments)}function T(){return(T=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o,c,l,f,m,x,w,_,C,O,$,j,E,T,P,S,N=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?y=[]:(o=[],y=Object(h.e)(n,o).map((function(t,i){return Object(h.b)(n.matched[o[i]].path)(n.params)}))),c=!1,l=function(path){n.path===path.path&&N.$loading.finish&&N.$loading.finish(),n.path!==path.path&&N.$loading.pause&&N.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(h.p)(v,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=v.nuxt.dateErr,this._hadError=Boolean(v.nuxt.err),f=[],(m=Object(h.e)(e,f)).length){t.next=25;break}return t.next=14,R.call(this,m,v.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof d.a.layout?d.a.layout(v.context):d.a.layout);case 18:return x=t.sent,t.next=21,R.call(this,m,v.context,x);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return v.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return m.forEach((function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)})),this.setTransitions(k(m,e,n)),t.prev=27,t.next=30,R.call(this,m,v.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!v.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=m[0].options.layout)&&(w=w(v.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,R.call(this,m,v.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!v.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:_=!0,t.prev=46,C=!0,O=!1,$=void 0,t.prev=50,j=m[Symbol.iterator]();case 52:if(C=(E=j.next()).done){t.next=64;break}if("function"==typeof(T=E.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,T.options.validate(v.context);case 58:if(_=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:C=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),O=!0,$=t.t0;case 70:t.prev=70,t.prev=71,C||null==j.return||j.return();case 73:if(t.prev=73,!O){t.next=76;break}throw $;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(_){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(m.map((function(t,i){if(t._path=Object(h.b)(e.matched[f[i]].path)(e.params),t._dataRefresh=!1,N._pathChanged&&N._queryChanged||t._path!==y[i])t._dataRefresh=!0;else if(!N._pathChanged&&N._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some((function(t){return N._diffQuery[t]})))}if(!N._hadError&&N._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),l=o&&c?30:45;if(o){var d=Object(h.m)(t.options.asyncData,v.context).then((function(e){Object(h.a)(t,e),N.$loading.increase&&N.$loading.increase(l)}));r.push(d)}if(N.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(v.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then((function(t){N.$loading.increase&&N.$loading.increase(l)})),r.push(p)}return Promise.all(r)})));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(P=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,P));case 97:return y=[],Object(h.i)(P),"function"==typeof(S=d.a.layout)&&(S=S(v.context)),t.next=103,this.loadLayout(S);case 103:this.error(P),this.$nuxt.$emit("routeChanged",e,n,P),r();case 106:case"end":return t.stop()}}),t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])})))).apply(this,arguments)}function P(t,n){Object(h.c)(t,(function(t,n,r,o){return"object"!==Object(e.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,r.components[o]=t),t}))}function S(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?d.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(v.context)),this.setLayout(e)}function N(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],o=Object(h.f)(t,r),l=Object(h.e)(t,r);c.a.nextTick((function(){o.forEach((function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&l[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n]);window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}})),S.call(n,t)}))}}function D(t){window.onNuxtReadyCbs.forEach((function(e){"function"==typeof e&&e(t)})),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),x.afterEach((function(e,n){c.a.nextTick((function(){return t.$nuxt.$emit("routeChanged",e,n)}))}))}function A(){return(A=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v=e.app,x=e.router,t.next=4,Promise.all(j(x));case 4:return n=t.sent,r=new c.a(v),o=w.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),l=function(){r.$mount("#__nuxt"),x.afterEach(P),x.afterEach(N.bind(r)),c.a.nextTick((function(){D(r)}))},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(k(n,x.currentRoute)),y=x.currentRoute.matched.map((function(t){return Object(h.b)(t.path)(x.currentRoute.params)}))),r.$loading={},w.error&&r.error(w.error),x.beforeEach(C.bind(r)),x.beforeEach(E.bind(r)),!w.serverRendered){t.next=20;break}return l(),t.abrupt("return");case 20:f=function(){P(x.currentRoute,x.currentRoute),S.call(r,x.currentRoute),l()},E.call(r,x.currentRoute,x.currentRoute,(function(path){if(path){var t=x.afterEach((function(e,n){t(),f()}));x.push(path,void 0,(function(t){t&&_(t)}))}else f()}));case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(d.b)().then((function(t){return A.apply(this,arguments)})).catch(_)}.call(this,n(41))},165:function(t,e,n){"use strict";var r=n(69);n.n(r).a},166:function(t,e,n){"use strict";var r=n(70);n.n(r).a},169:function(t,e,n){"use strict";var r=n(71);n.n(r).a},40:function(t,e,n){"use strict";n(63),n(5),n(3),n(2),n(1),n(4);var r=n(16),o=n(0),c=(n(23),n(7)),l=n.n(c),f=n(127),h=n(89),d=n.n(h),m=n(44),v=n.n(m),x=n(90),y=n(8);"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",(function(){window.history.scrollRestoration="auto"})),window.addEventListener("load",(function(){window.history.scrollRestoration="manual"})));l.a.use(x.a);var w={mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=Object(y.e)(t);o.length<2&&o.every((function(t){return!1!==t.options.scrollToTop}))?r={x:0,y:0}:o.some((function(t){return t.options.scrollToTop}))&&(r={x:0,y:0}),n&&(r=n);var c=window.$nuxt;return t.path===e.path&&t.hash!==e.hash&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/products/:slug?",component:function(){return Object(y.j)(Promise.all([n.e(0),n.e(4)]).then(n.bind(null,205)))},name:"products-slug"},{path:"/",component:function(){return Object(y.j)(Promise.all([n.e(0),n.e(3)]).then(n.bind(null,206)))},name:"index"}],fallback:!1};var _,k={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var h=c[f]||l,d={};C.forEach((function(t){void 0!==h[t]&&(d[t]=h[t])}));var m={};O.forEach((function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))}));var v=m.beforeEnter;if(m.beforeEnter=function(t){if(window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")})),v)return v.call(o,t)},!1===h.css){var x=m.leave;(!x||x.length<2)&&(m.leave=function(t,e){x&&x.call(o,t),o.$nextTick(e)})}var y=t("routerView",data);return r.keepAlive&&(y=t("keep-alive",{props:r.keepAliveProps},[y])),t("transition",{props:d,on:m},[y])}},C=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],O=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],$={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},j=(n(165),n(29)),R=Object(j.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,E=(n(15),n(55)),T={name:"Nuxt",components:{NuxtChild:k,NuxtError:R},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(y.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(E.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){l.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},P=(n(45),{name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}}),S=(n(166),Object(j.a)(P,void 0,void 0,!1,null,null,null).exports),N=(n(167),n(168),n(169),{components:{MainNav:Object(j.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"nav"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Logo goes here")]),this._v(" "),e("ul",{staticClass:"nav-links"},[e("li",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/"}},[this._v("Homepage")])],1),this._v(" "),e("li",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/products/testing1"}},[this._v("Test 1")])],1),this._v(" "),e("li",{staticClass:"nav-link"},[e("nuxt-link",{attrs:{to:"/products/testing2"}},[this._v("Test2")])],1)])],1)}),[],!1,null,"46a912ea",null).exports}}),D={_default:Object(j.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("main-nav"),this._v(" "),e("nuxt")],1)}),[],!1,null,null,null).exports},A={head:{meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Heebo:300,400,500,700,800|Libre+Franklin:400,500,700&display=swap"}],script:[{src:"https://play.vidyard.com/embed/v4.js",async:!0}],__dangerouslyDisableSanitizers:["script"],style:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick((function(){window.$nuxt.$emit("triggerScroll")}))}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){l.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){l.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error,this.context=this.$options.context},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},refresh:(_=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=Object(y.f)(this.$route)).length){t.next=3;break}return t.abrupt("return");case 3:return this.$loading.start(),n=e.map(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e){var p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p=[],e.$options.fetch&&p.push(Object(y.m)(e.$options.fetch,o.context)),e.$options.asyncData&&p.push(Object(y.m)(e.$options.asyncData,o.context).then((function(t){for(var n in t)l.a.set(e.$data,n,t[n])}))),t.abrupt("return",Promise.all(p));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.prev=5,t.next=8,Promise.all(n);case 8:t.next=15;break;case 10:t.prev=10,t.t0=t.catch(5),this.$loading.fail(),Object(y.i)(t.t0),this.error(t.t0);case 15:this.$loading.finish();case 16:case"end":return t.stop()}}),t,this,[[5,10]])}))),function(){return _.apply(this,arguments)}),errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&D["_"+t]||(t="default"),this.layoutName=t,this.layout=D["_"+t],this.layout},loadLayout:function(t){return t&&D["_"+t]||(t="default"),Promise.resolve(D["_"+t])}},components:{NuxtLoading:S}},L=n(131);l.a.use(L.a,{});var M=n(130),B=function(t){return t.isBroken?"/not-found":"homepage"===t.type?"/":"product_page"===t.type?"/products/"+t.uid:"erp_page"===t.type?"/erp-integration/"+t.uid:"/not-found"},I=n(28),U=n.n(I),H=U.a.RichText.Elements,J=function(t,element,content,e){if(t===H.hyperlink){var n="",r=U.a.Link.url(element.data,linkResolver);if("Document"===element.data.link_type)n='<nuxt-link to="'.concat(r,'">').concat(content,"</nuxt-link>");else{var o=element.data.target?"target=\"'".concat(element.data.target,'\'" rel="noopener"'):"";n='<a href="'.concat(r,'" ').concat(o,">").concat(content,"</a>")}return n}if(t===H.image){var c='<img src="'.concat(element.url,'" alt="').concat(element.alt||"",'" copyright="').concat(element.copyright||"",'">');if(element.linkTo){var l=U.a.Link.url(element.linkTo,linkResolver);if("Document"===element.linkTo.link_type)c='<nuxt-link to="'.concat(l,'">').concat(c,"</nuxt-link>");else{var f=element.linkTo.target?'target="'.concat(element.linkTo.target,'" rel="noopener"'):"";c='<a href="'.concat(l,'" ').concat(f,">").concat(c,"</a>")}}var h=[element.label||"","block-img"];return c='<p class="'.concat(h.join(" "),'">').concat(c,"</p>")}return null};function K(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function z(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?K(source,!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):K(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}l.a.use(M.a,{linkResolver:B,htmlSerializer:J}),n.d(e,"b",(function(){return Q})),n.d(e,"a",(function(){return R})),l.a.component(d.a.name,d.a),l.a.component(v.a.name,z({},v.a,{render:function(t,e){return v.a._warned||(v.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),v.a.render(t,e)}})),l.a.component(k.name,k),l.a.component("NChild",k),l.a.component(T.name,T),l.a.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var F={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Q(t){return V.apply(this,arguments)}function V(){return(V=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,path,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new x.a(w);case 2:return n=t.sent,r=z({router:n,nuxt:{defaultTransition:F,transitions:[F],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},F,{name:t}):Object.assign({},F,t):F})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=Boolean(t),t=t?Object(y.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},A),o=e?e.next:function(t){return r.router.push(t)},e?c=n.resolve(e.url).route:(path=Object(y.d)(n.options.base),c=n.resolve(path).route),t.next=8,Object(y.p)(r,{route:c,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";l.a[n]||(l.a[n]=!0,l.a.use((function(){l.a.prototype.hasOwnProperty(t)||Object.defineProperty(l.a.prototype,t,{get:function(){return this.$root.$options[t]}})})))},t.next=12;break;case 12:t.next=15;break;case 15:if("function"!=typeof B){t.next=18;break}return t.next=18,B(r.context,f);case 18:if("function"!=typeof J){t.next=21;break}return t.next=21,J(r.context,f);case 21:t.next=24;break;case 24:return t.abrupt("return",{app:r,router:n});case 25:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},69:function(t,e,n){},70:function(t,e,n){},71:function(t,e,n){},73:function(t,e,n){"use strict";n(1),n(100),n(3),n(2),n(106),n(107);var r=n(7),o=n.n(r),c=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})}),1)},l=window.IntersectionObserver&&new window.IntersectionObserver((function(t){t.forEach((function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()}))}));e.a={name:"NuxtLink",extends:o.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||c(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(l.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){l&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),l.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map((function(t){return t.components.default})).filter((function(t){return"function"==typeof t&&!t.options&&!t.__prefetched}))},prefetch:function(){if(this.canPrefetch()){l.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var f=o.value,h=f();h instanceof Promise&&h.catch((function(){})),f.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}}},8:function(t,e,n){"use strict";n.d(e,"i",(function(){return v})),n.d(e,"j",(function(){return x})),n.d(e,"a",(function(){return y})),n.d(e,"o",(function(){return w})),n.d(e,"e",(function(){return _})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return C})),n.d(e,"n",(function(){return O})),n.d(e,"h",(function(){return $})),n.d(e,"p",(function(){return R})),n.d(e,"k",(function(){return T})),n.d(e,"m",(function(){return P})),n.d(e,"d",(function(){return S})),n.d(e,"b",(function(){return N})),n.d(e,"g",(function(){return D})),n.d(e,"l",(function(){return A}));n(5),n(3);var r=n(55),o=(n(26),n(157),n(158),n(24)),c=(n(38),n(39),n(84),n(121),n(15),n(63),n(16)),l=(n(45),n(2),n(1),n(4),n(23),n(0)),f=n(7),h=n.n(f);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function v(t){h.a.config.errorHandler&&h.a.config.errorHandler(t)}function x(t){return t.then((function(t){return t.default||t}))}function y(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),m({},data,{},e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function w(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=h.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function _(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).map((function(r){return e&&e.push(n),t.components[r]}))})))}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.instances).map((function(r){return e&&e.push(n),t.instances[r]}))})))}function C(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function O(t,e){return Promise.all(C(t,function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(n,r,o,c){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=4;break}return t.next=3,n();case 3:n=t.sent;case 4:return o.components[c]=n=w(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function $(t){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,O(e);case 4:return t.abrupt("return",m({},e,{meta:_(e).map((function(t,n){return m({},t.options.meta,{},(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){return E.apply(this,arguments)}function E(){return(E=Object(c.a)(regeneratorRuntime.mark((function t(e,n){var c,l,f,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=U(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([$(n.route),$(n.from)]);case 3:c=t.sent,l=Object(r.a)(c,2),f=l[0],h=l[1],n.route&&(e.context.route=f),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function T(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():P(t[0],e).then((function(){return T(t.slice(1),e)}))}function P(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function S(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function N(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=(r||{}).pretty?M:encodeURIComponent,c=0;c<t.length;c++){var l=t[c];if("string"!=typeof l){var f=data[l.name||"pathMatch"],h=void 0;if(null==f){if(l.optional){l.partial&&(path+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(Array.isArray(f)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var d=0;d<f.length;d++){if(h=o(f[d]),!e[c].test(h))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===d?l.prefix:l.delimiter)+h}}else{if(h=l.asterisk?encodeURI(f).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):o(f),!e[c].test(h))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+h+'"');path+=l.prefix+h}}else path+=l}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=L.exec(t));){var f=n[0],h=n[1],d=n.index;if(path+=t.slice(c,d),c=d+f.length,h)path+=h[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],k=n[7];path&&(r.push(path),path="");var C=null!=v&&null!=m&&m!==v,O="+"===_||"*"===_,$="?"===_||"*"===_,j=n[2]||l,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:j,optional:$,repeat:O,partial:C,asterisk:Boolean(k),pattern:pattern?I(pattern):k?".*":"[^"+B(j)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function D(t,e){var n={},r=m({},t,{},e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function A(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return m({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var L=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function U(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var h=l,d=Object(r.a)(h,2);path=d[0],c=d[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map((function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map((function(t){return[e,"=",t].join("")})).join("&"):e+"="+n})).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}},88:function(t,e,n){"use strict";e.a={}}},[[135,5,2,6]]]);