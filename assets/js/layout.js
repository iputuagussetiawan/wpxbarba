/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,function(){function t(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,"symbol"==typeof(e=function(t,n){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key))?e:String(e),i)}var e}function n(n,r,i){return r&&t(n.prototype,r),i&&t(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},r.apply(this,arguments)}function i(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n)}function e(t){return e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},e(t)}function o(t,n){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},o(t,n)}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function s(t,n,r){return s=u()?Reflect.construct.bind():function(t,n,r){var i=[null];i.push.apply(i,n);var e=new(Function.bind.apply(t,i));return r&&o(e,r.prototype),e},s.apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return s(t,arguments,e(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)},f(t)}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a,h=function(){this.before=void 0,this.beforeLeave=void 0,this.leave=void 0,this.afterLeave=void 0,this.beforeEnter=void 0,this.enter=void 0,this.afterEnter=void 0,this.after=void 0};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(a||(a={}));var v=a.off,d=/*#__PURE__*/function(){function t(t){this.t=void 0,this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=a[t]};var n=t.prototype;return n.error=function(){this.i(console.error,a.error,[].slice.call(arguments))},n.warn=function(){this.i(console.warn,a.warning,[].slice.call(arguments))},n.info=function(){this.i(console.info,a.info,[].slice.call(arguments))},n.debug=function(){this.i(console.log,a.debug,[].slice.call(arguments))},n.i=function(n,r,i){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(i))},t}();function l(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function p(t){return t&&t.sensitive?"":"i"}var m={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},w=/*#__PURE__*/function(){function t(){this.o=m,this.u=void 0,this.h={after:null,before:null,parent:null}}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u||(this.u=new DOMParser),this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&(this.v(t),t.parentNode.removeChild(t))},n.addContainer=function(t,n){var r=this.getContainer()||this.h.before;r?this.l(t,r):this.h.after?this.h.after.parentNode.insertBefore(t,this.h.after):this.h.parent?this.h.parent.appendChild(t):n.appendChild(t)},n.getSibling=function(){return this.h},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){var t=[].slice.call(arguments).length;if(0===t)throw new Error("resolveUrl requires at least one argument; got none.");var n=document.createElement("base");if(n.href=arguments[0],1===t)return n.href;var r=document.getElementsByTagName("head")[0];r.insertBefore(n,r.firstChild);for(var i,e=document.createElement("a"),o=1;o<t;o++)e.href=arguments[o],n.href=i=e.href;return r.removeChild(n),i},n.l=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},n.v=function(t){return this.h={after:t.nextElementSibling,before:t.previousElementSibling,parent:t.parentElement},this.h},t}(),b=new w,y=/*#__PURE__*/function(){function t(){this.p=void 0,this.m=[],this.P=-1}var i=t.prototype;return i.init=function(t,n){this.p="barba";var r={data:{},ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.P=0,this.m.push(r);var i={from:this.p,index:this.P,states:[].concat(this.m)};window.history&&window.history.replaceState(i,"",t)},i.change=function(t,n,r){if(r&&r.state){var i=r.state,e=i.index;n=this.g(this.P-e),this.replace(i.states),this.P=e}else this.add(t,n);return n},i.add=function(t,n,r,i){var e=null!=r?r:this.R(n),o={data:null!=i?i:{},ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};switch(e){case"push":this.P=this.size,this.m.push(o);break;case"replace":this.set(this.P,o)}var u={from:this.p,index:this.P,states:[].concat(this.m)};switch(e){case"push":window.history&&window.history.pushState(u,"",t);break;case"replace":window.history&&window.history.replaceState(u,"",t)}},i.store=function(t,n){var i=n||this.P,e=this.get(i);e.data=r({},e.data,t),this.set(i,e);var o={from:this.p,index:this.P,states:[].concat(this.m)};window.history.replaceState(o,"")},i.update=function(t,n){var i=n||this.P,e=r({},this.get(i),t);this.set(i,e)},i.remove=function(t){t?this.m.splice(t,1):this.m.pop(),this.P--},i.clear=function(){this.m=[],this.P=-1},i.replace=function(t){this.m=t},i.get=function(t){return this.m[t]},i.set=function(t,n){return this.m[t]=n},i.R=function(t){var n="push",r=t,i=m.prefix+"-"+m.history;return r.hasAttribute&&r.hasAttribute(i)&&(n=r.getAttribute(i)),n},i.g=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.m[this.P]}},{key:"previous",get:function(){return this.P<1?null:this.m[this.P-1]}},{key:"size",get:function(){return this.m.length}}]),t}(),P=new y,g=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then(function(t){var r=n.next;if(t){var i=b.toElement(t.html);r.namespace=b.getNamespace(i),r.container=b.getContainer(i),r.url=t.url,r.html=t.html,P.update({ns:r.namespace});var e=b.toDocument(t.html);document.title=e.title}})}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(t){return Promise.reject(t)}},E=function t(n,r,i){return n instanceof RegExp?function(t,n){if(!n)return t;for(var r=/\((?:\?<(.*?)>)?(?!\?)/g,i=0,e=r.exec(t.source);e;)n.push({name:e[1]||i++,prefix:"",suffix:"",modifier:"",pattern:""}),e=r.exec(t.source);return t}(n,r):Array.isArray(n)?function(n,r,i){var e=n.map(function(n){return t(n,r,i).source});return new RegExp("(?:".concat(e.join("|"),")"),p(i))}(n,r,i):function(t,n,r){return function(t,n,r){void 0===r&&(r={});for(var i=r.strict,e=void 0!==i&&i,o=r.start,u=void 0===o||o,s=r.end,f=void 0===s||s,c=r.encode,a=void 0===c?function(t){return t}:c,h=r.delimiter,v=void 0===h?"/#?":h,d=r.endsWith,m="[".concat(l(void 0===d?"":d),"]|$"),w="[".concat(l(v),"]"),b=u?"^":"",y=0,P=t;y<P.length;y++){var g=P[y];if("string"==typeof g)b+=l(a(g));else{var E=l(a(g.prefix)),x=l(a(g.suffix));if(g.pattern)if(n&&n.push(g),E||x)if("+"===g.modifier||"*"===g.modifier){var R="*"===g.modifier?"?":"";b+="(?:".concat(E,"((?:").concat(g.pattern,")(?:").concat(x).concat(E,"(?:").concat(g.pattern,"))*)").concat(x,")").concat(R)}else b+="(?:".concat(E,"(").concat(g.pattern,")").concat(x,")").concat(g.modifier);else b+="+"===g.modifier||"*"===g.modifier?"((?:".concat(g.pattern,")").concat(g.modifier,")"):"(".concat(g.pattern,")").concat(g.modifier);else b+="(?:".concat(E).concat(x,")").concat(g.modifier)}}if(f)e||(b+="".concat(w,"?")),b+=r.endsWith?"(?=".concat(m,")"):"$";else{var k=t[t.length-1],O="string"==typeof k?w.indexOf(k[k.length-1])>-1:void 0===k;e||(b+="(?:".concat(w,"(?=").concat(m,"))?")),O||(b+="(?=".concat(w,"|").concat(m,")"))}return new RegExp(b,p(r))}(function(t,n){void 0===n&&(n={});for(var r=function(t){for(var n=[],r=0;r<t.length;){var i=t[r];if("*"!==i&&"+"!==i&&"?"!==i)if("\\"!==i)if("{"!==i)if("}"!==i)if(":"!==i)if("("!==i)n.push({type:"CHAR",index:r,value:t[r++]});else{var e=1,o="";if("?"===t[s=r+1])throw new TypeError('Pattern cannot start with "?" at '.concat(s));for(;s<t.length;)if("\\"!==t[s]){if(")"===t[s]){if(0==--e){s++;break}}else if("("===t[s]&&(e++,"?"!==t[s+1]))throw new TypeError("Capturing groups are not allowed at ".concat(s));o+=t[s++]}else o+=t[s++]+t[s++];if(e)throw new TypeError("Unbalanced pattern at ".concat(r));if(!o)throw new TypeError("Missing pattern at ".concat(r));n.push({type:"PATTERN",index:r,value:o}),r=s}else{for(var u="",s=r+1;s<t.length;){var f=t.charCodeAt(s);if(!(f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||95===f))break;u+=t[s++]}if(!u)throw new TypeError("Missing parameter name at ".concat(r));n.push({type:"NAME",index:r,value:u}),r=s}else n.push({type:"CLOSE",index:r,value:t[r++]});else n.push({type:"OPEN",index:r,value:t[r++]});else n.push({type:"ESCAPED_CHAR",index:r++,value:t[r++]});else n.push({type:"MODIFIER",index:r,value:t[r++]})}return n.push({type:"END",index:r,value:""}),n}(t),i=n.prefixes,e=void 0===i?"./":i,o="[^".concat(l(n.delimiter||"/#?"),"]+?"),u=[],s=0,f=0,c="",a=function(t){if(f<r.length&&r[f].type===t)return r[f++].value},h=function(t){var n=a(t);if(void 0!==n)return n;var i=r[f],e=i.index;throw new TypeError("Unexpected ".concat(i.type," at ").concat(e,", expected ").concat(t))},v=function(){for(var t,n="";t=a("CHAR")||a("ESCAPED_CHAR");)n+=t;return n};f<r.length;){var d=a("CHAR"),p=a("NAME"),m=a("PATTERN");if(p||m)-1===e.indexOf(b=d||"")&&(c+=b,b=""),c&&(u.push(c),c=""),u.push({name:p||s++,prefix:b,suffix:"",pattern:m||o,modifier:a("MODIFIER")||""});else{var w=d||a("ESCAPED_CHAR");if(w)c+=w;else if(c&&(u.push(c),c=""),a("OPEN")){var b=v(),y=a("NAME")||"",P=a("PATTERN")||"",g=v();h("CLOSE"),u.push({name:y||(P?s++:""),pattern:y&&!P?o:P,prefix:b,suffix:g,modifier:a("MODIFIER")||""})}else h("END")}}return u}(t,r),n,r)}(n,r,i)},x={__proto__:null,update:g,nextTick:function(){return new Promise(function(t){window.requestAnimationFrame(t)})},pathToRegexp:E},R=function(){return window.location.origin},k=function(t){return void 0===t&&(t=window.location.href),O(t).port},O=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var i=r[0].substring(1);n=parseInt(i,10)}var e,o=t.replace(R(),""),u={},s=o.indexOf("#");s>=0&&(e=o.slice(s+1),o=o.slice(0,s));var f=o.indexOf("?");return f>=0&&(u=T(o.slice(f+1)),o=o.slice(0,f)),{hash:e,path:o,port:n,query:u}},T=function(t){return t.split("&").reduce(function(t,n){var r=n.split("=");return t[r[0]]=r[1],t},{})},A=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},j={__proto__:null,getHref:function(){return window.location.href},getAbsoluteHref:function(t,n){return void 0===n&&(n=document.baseURI),new URL(t,n).href},getOrigin:R,getPort:k,getPath:function(t){return void 0===t&&(t=window.location.href),O(t).path},getQuery:function(t,n){return void 0===n&&(n=!1),n?JSON.stringify(O(t).query):O(t).query},getHash:function(t){return O(t).hash},parse:O,parseQuery:T,clean:A};function M(t,n,i,e,o){return void 0===n&&(n=2e3),new Promise(function(u,s){var f=new XMLHttpRequest;f.onreadystatechange=function(){if(f.readyState===XMLHttpRequest.DONE)if(200===f.status){var n=""!==f.responseURL&&f.responseURL!==t?f.responseURL:t;u({html:f.responseText,url:r({href:n},O(n))}),e.update(t,{status:"fulfilled",target:n})}else if(f.status){var o={status:f.status,statusText:f.statusText};i(t,o),s(o),e.update(t,{status:"rejected"})}},f.ontimeout=function(){var r=new Error("Timeout error ["+n+"]");i(t,r),s(r),e.update(t,{status:"rejected"})},f.onerror=function(){var n=new Error("Fetch error");i(t,n),s(n),e.update(t,{status:"rejected"})},f.open("GET",t),f.timeout=n,f.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),f.setRequestHeader("x-barba","yes"),o.all().forEach(function(t,n){f.setRequestHeader(n,t)}),f.send()})}function N(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then}function S(t,n){return void 0===n&&(n={}),function(){var r=arguments,i=!1,e=new Promise(function(e,o){n.async=function(){return i=!0,function(t,n){t?o(t):e(n)}};var u=t.apply(n,[].slice.call(r));i||(N(u)?u.then(e,o):e(u))});return e}}var C=/*#__PURE__*/function(t){function n(){var n;return(n=t.call(this)||this).logger=new d("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}i(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach(function(n){t[n]||(t[n]=function(r,i){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:i||{},fn:r})})})},r.do=function(t){var n=arguments,r=this;if(this.registered.has(t)){var i=Promise.resolve();return this.registered.get(t).forEach(function(t){i=i.then(function(){return S(t.fn,t.ctx).apply(void 0,[].slice.call(n,1))})}),i.catch(function(n){r.logger.debug("Hook error ["+t+"]"),r.logger.error(n)})}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach(function(n){delete t[n]}),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach(function(n,r){return t.push(r)}),this.logger.info("Registered hooks: "+t.join(","))},n}(h),L=new C,H=/*#__PURE__*/function(){function t(t){if(this.k=void 0,this.O=[],"boolean"==typeof t)this.k=t;else{var n=Array.isArray(t)?t:[t];this.O=n.map(function(t){return E(t)})}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.k)return this.k;var n=O(t).path;return this.O.some(function(t){return null!==t.exec(n)})},t}(),_=/*#__PURE__*/function(t){function n(n){var r;return(r=t.call(this,n)||this).T=new Map,r}i(n,t);var e=n.prototype;return e.set=function(t,n,r,i,e){return this.T.set(t,{action:r,request:n,status:i,target:null!=e?e:t}),{action:r,request:n,status:i,target:e}},e.get=function(t){return this.T.get(t)},e.getRequest=function(t){return this.T.get(t).request},e.getAction=function(t){return this.T.get(t).action},e.getStatus=function(t){return this.T.get(t).status},e.getTarget=function(t){return this.T.get(t).target},e.has=function(t){return!this.checkHref(t)&&this.T.has(t)},e.delete=function(t){return this.T.delete(t)},e.update=function(t,n){var i=r({},this.T.get(t),n);return this.T.set(t,i),i},n}(H),D=/*#__PURE__*/function(){function t(){this.A=new Map}var n=t.prototype;return n.set=function(t,n){return this.A.set(t,n),{name:n}},n.get=function(t){return this.A.get(t)},n.all=function(){return this.A},n.has=function(t){return this.A.has(t)},n.delete=function(t){return this.A.delete(t)},n.clear=function(){return this.A.clear()},t}(),B=function(){return!window.history.pushState},q=function(t){return!t.el||!t.href},F=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},I=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},U=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},$=function(t){var n=t.el;return void 0!==n.port&&k()!==k(n.href)},Q=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},X=function(t){return t.el.hasAttribute(m.prefix+"-"+m.prevent)},z=function(t){return Boolean(t.el.closest("["+m.prefix+"-"+m.prevent+'="all"]'))},G=function(t){var n=t.href;return A(n)===A()&&k(n)===k()},J=/*#__PURE__*/function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}i(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",B),this.add("exists",q),this.add("newTab",F),this.add("blank",I),this.add("corsDomain",U),this.add("corsPort",$),this.add("download",Q),this.add("preventSelf",X),this.add("preventAll",z),this.add("sameUrl",G,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,i){return this.tests.get(t)({el:n,event:r,href:i})},r.checkLink=function(t,n,r){var i=this;return this.suite.some(function(e){return i.run(e,t,n,r)})},n}(H),W=/*#__PURE__*/function(t){function n(r,i){var e;return void 0===i&&(i="Barba error"),(e=t.call.apply(t,[this].concat([].slice.call(arguments,2)))||this).error=void 0,e.label=void 0,e.error=r,e.label=i,Error.captureStackTrace&&Error.captureStackTrace(c(e),n),e.name="BarbaError",e}return i(n,t),n}(/*#__PURE__*/f(Error)),K=/*#__PURE__*/function(){function t(t){void 0===t&&(t=[]),this.logger=new d("@barba/core"),this.all=[],this.page=[],this.once=[],this.j=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){"rule"===t?this.j.splice(n.position||0,0,n.value):this.all.push(n),this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var i=n.once?this.once:this.page;i=i.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var e=new Map,o=i.find(function(i){var o=!0,u={};return n.self&&"self"===i.name?(e.set(i,u),!0):(r.j.reverse().forEach(function(n){o&&(o=r.M(i,n,t,u),i.from&&i.to&&(o=r.M(i,n,t,u,"from")&&r.M(i,n,t,u,"to")),i.from&&!i.to&&(o=r.M(i,n,t,u,"from")),!i.from&&i.to&&(o=r.M(i,n,t,u,"to")))}),e.set(i,u),o)}),u=e.get(o),s=[];if(s.push(n.once?"once":"page"),n.self&&s.push("self"),u){var f,c=[o];Object.keys(u).length>0&&c.push(u),(f=this.logger).info.apply(f,["Transition found ["+s.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+s.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map(function(n){return t.N(n)}).sort(function(t,n){return t.priority-n.priority}).reverse().map(function(t){return delete t.priority,t}),this.page=this.all.filter(function(t){return void 0!==t.leave||void 0!==t.enter}),this.once=this.all.filter(function(t){return void 0!==t.once})},n.M=function(t,n,r,i,e){var o=!0,u=!1,s=t,f=n.name,c=f,a=f,h=f,v=e?s[e]:s,d="to"===e?r.next:r.current;if(e?v&&v[f]:v[f]){switch(n.type){case"strings":default:var l=Array.isArray(v[c])?v[c]:[v[c]];d[c]&&-1!==l.indexOf(d[c])&&(u=!0),-1===l.indexOf(d[c])&&(o=!1);break;case"object":var p=Array.isArray(v[a])?v[a]:[v[a]];d[a]?(d[a].name&&-1!==p.indexOf(d[a].name)&&(u=!0),-1===p.indexOf(d[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(e?(i[e]=i[e]||{},i[e][f]=s[e][f]):i[f]=s[f])}return o},n.S=function(t,n,r){var i=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(i+=Math.pow(10,r),t.from&&t.from[n]&&(i+=1),t.to&&t.to[n]&&(i+=2)),i},n.N=function(t){var n=this;t.priority=0;var r=0;return this.j.forEach(function(i,e){r+=n.S(t,i.name,e+1)}),t.priority=r,t},t}();function V(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}var Y=/*#__PURE__*/function(){function t(t){void 0===t&&(t=[]),this.logger=new d("@barba/core"),this.store=void 0,this.C=!1,this.store=new K(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var i=function(){e.C=!1},e=this,o=r||{};e.C=!0;var u=V(function(){return Promise.resolve(e.L("beforeOnce",n,o)).then(function(){return Promise.resolve(e.once(n,o)).then(function(){return Promise.resolve(e.L("afterOnce",n,o)).then(function(){})})})},function(t){e.C=!1,e.logger.debug("Transition error [before/after/once]"),e.logger.error(t)});return Promise.resolve(u&&u.then?u.then(i):i())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,i=t.page,e=t.wrapper;try{var o=function(t){u.C=!1},u=this,s=r||{},f=!0===s.sync||!1;u.C=!0;var c=V(function(){function t(){return Promise.resolve(u.L("before",n,s)).then(function(){function t(t){return Promise.resolve(u.remove(n)).then(function(){return Promise.resolve(u.L("after",n,s)).then(function(){})})}var r=function(){if(f)return V(function(){return Promise.resolve(u.add(n,e)).then(function(){return Promise.resolve(u.L("beforeLeave",n,s)).then(function(){return Promise.resolve(u.L("beforeEnter",n,s)).then(function(){return Promise.resolve(Promise.all([u.leave(n,s),u.enter(n,s)])).then(function(){return Promise.resolve(u.L("afterLeave",n,s)).then(function(){return Promise.resolve(u.L("afterEnter",n,s)).then(function(){})})})})})})},function(t){if(u.H(t))throw new W(t,"Transition error [sync]")});var t=function(t){return V(function(){var t=function(){if(!1!==r)return Promise.resolve(u.add(n,e)).then(function(){return Promise.resolve(u.L("beforeEnter",n,s)).then(function(){return Promise.resolve(u.enter(n,s,r)).then(function(){return Promise.resolve(u.L("afterEnter",n,s)).then(function(){})})})})}();if(t&&t.then)return t.then(function(){})},function(t){if(u.H(t))throw new W(t,"Transition error [before/after/enter]")})},r=!1,o=V(function(){return Promise.resolve(u.L("beforeLeave",n,s)).then(function(){return Promise.resolve(Promise.all([u.leave(n,s),g(i,n)]).then(function(t){return t[0]})).then(function(t){return r=t,Promise.resolve(u.L("afterLeave",n,s)).then(function(){})})})},function(t){if(u.H(t))throw new W(t,"Transition error [before/after/leave]")});return o&&o.then?o.then(t):t()}();return r&&r.then?r.then(t):t()})}var r=function(){if(f)return Promise.resolve(g(i,n)).then(function(){})}();return r&&r.then?r.then(t):t()},function(t){if(u.C=!1,t.name&&"BarbaError"===t.name)throw u.logger.debug(t.label),u.logger.error(t.error),t;throw u.logger.debug("Transition error [page]"),u.logger.error(t),t});return Promise.resolve(c&&c.then?c.then(o):o())}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(L.do("once",t,n)).then(function(){return n.once?S(n.once,n)(t):Promise.resolve()})}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(L.do("leave",t,n)).then(function(){return n.leave?S(n.leave,n)(t):Promise.resolve()})}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(L.do("enter",t,n)).then(function(){return n.enter?S(n.enter,n)(t,r):Promise.resolve()})}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return b.addContainer(t.next.container,n),L.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return b.removeContainer(t.current.container),L.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.H=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.L=function(t,n,r){try{return Promise.resolve(L.do(t,n,r)).then(function(){return r[t]?S(r[t],r)(n):Promise.resolve()})}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.C},set:function(t){this.C=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return"self"===t.name})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),t}(),Z=/*#__PURE__*/function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach(function(t){n.byNamespace.set(t.namespace,t)}),this.names.forEach(function(t){L[t](n._(t))}))}return t.prototype._=function(t){var n=this;return function(r){var i=t.match(/enter/i)?r.next:r.current,e=n.byNamespace.get(i.namespace);return e&&e[t]?S(e[t],e)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var tt={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},nt=/*#__PURE__*/function(){function t(){this.version="2.10.2",this.schemaPage=tt,this.Logger=d,this.logger=new d("@barba/core"),this.plugins=[],this.timeout=void 0,this.cacheIgnore=void 0,this.cacheFirstPage=void 0,this.prefetchIgnore=void 0,this.preventRunning=void 0,this.hooks=L,this.cache=void 0,this.headers=void 0,this.prevent=void 0,this.transitions=void 0,this.views=void 0,this.dom=b,this.helpers=x,this.history=P,this.request=M,this.url=j,this.D=void 0,this.B=void 0,this.q=void 0,this.F=void 0}var i=t.prototype;return i.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},i.init=function(t){var n=void 0===t?{}:t,i=n.transitions,e=void 0===i?[]:i,o=n.views,u=void 0===o?[]:o,s=n.schema,f=void 0===s?m:s,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,l=void 0!==v&&v,p=n.cacheFirstPage,w=void 0!==p&&p,b=n.prefetchIgnore,y=void 0!==b&&b,P=n.preventRunning,g=void 0!==P&&P,E=n.prevent,x=void 0===E?null:E,R=n.debug,k=n.logLevel;if(d.setLevel(!0===(void 0!==R&&R)?"debug":void 0===k?"off":k),this.logger.info(this.version),Object.keys(f).forEach(function(t){m[t]&&(m[t]=f[t])}),this.B=c,this.timeout=h,this.cacheIgnore=l,this.cacheFirstPage=w,this.prefetchIgnore=y,this.preventRunning=g,this.q=this.dom.getWrapper(),!this.q)throw new Error("[@barba/core] No Barba wrapper found");this.I();var O=this.data.current;if(!O.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new _(l),this.headers=new D,this.prevent=new J(y),this.transitions=new Y(e),this.views=new Z(u),null!==x){if("function"!=typeof x)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",x)}this.history.init(O.url.href,O.namespace),w&&this.cache.set(O.url.href,Promise.resolve({html:O.html,url:O.url}),"init","fulfilled"),this.U=this.U.bind(this),this.$=this.$.bind(this),this.X=this.X.bind(this),this.G(),this.plugins.forEach(function(t){return t.init()});var T=this.data;T.trigger="barba",T.next=T.current,T.current=r({},this.schemaPage),this.hooks.do("ready",T),this.once(T),this.I()},i.destroy=function(){this.I(),this.J(),this.history.clear(),this.hooks.clear(),this.plugins=[]},i.force=function(t){window.location.assign(t)},i.go=function(t,n,r){var i;if(void 0===n&&(n="barba"),this.F=null,this.transitions.isRunning)this.force(t);else if(!(i="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t)&&this.url.getQuery(this.history.current.url,!0)===this.url.getQuery(t,!0):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(this.cache.has(t)?this.cache.get(t).target:t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,null!=r?r:void 0,i)},i.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var i=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then(function(){})}}();return i&&i.then?i.then(r):r()})}catch(t){return Promise.reject(t)}},i.page=function(t,n,i,e){try{var o,u=function(){var t=s.data;return Promise.resolve(s.hooks.do("page",t)).then(function(){var n=function(n,r){try{var i=(u=s.transitions.get(t,{once:!1,self:e}),Promise.resolve(s.transitions.doPage({data:t,page:o,transition:u,wrapper:s.q})).then(function(){s.I()}))}catch(t){return r()}var u;return i&&i.then?i.then(void 0,r):i}(0,function(){0===d.getLevel()&&s.force(t.next.url.href)});if(n&&n.then)return n.then(function(){})})},s=this;if(s.data.next.url=r({href:t},s.url.parse(t)),s.data.trigger=n,s.data.event=i,s.cache.has(t))o=s.cache.update(t,{action:"click"}).request;else{var f=s.request(t,s.timeout,s.onRequestError.bind(s,n),s.cache,s.headers);f.then(function(r){r.url.href!==t&&s.history.add(r.url.href,n,"replace")}),o=s.cache.set(t,f,"click","pending").request}var c=function(){if(s.transitions.shouldWait)return Promise.resolve(g(o,s.data)).then(function(){})}();return Promise.resolve(c&&c.then?c.then(u):u())}catch(t){return Promise.reject(t)}},i.onRequestError=function(t){this.transitions.isRunning=!1;var n=[].slice.call(arguments,1),r=n[0],i=n[1],e=this.cache.getAction(r);return this.cache.delete(r),this.B&&!1===this.B(t,e,r,i)||"click"===e&&this.force(r),!1},i.prefetch=function(t){var n=this;t=this.url.getAbsoluteHref(t),this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba"),this.cache,this.headers).catch(function(t){n.logger.error(t)}),"prefetch","pending")},i.G=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.U),document.addEventListener("touchstart",this.U)),document.addEventListener("click",this.$),window.addEventListener("popstate",this.X)},i.J=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.U),document.removeEventListener("touchstart",this.U)),document.removeEventListener("click",this.$),window.removeEventListener("popstate",this.X)},i.U=function(t){var n=this,r=this.W(t);if(r){var i=this.url.getAbsoluteHref(this.dom.getHref(r));this.prevent.checkHref(i)||this.cache.has(i)||this.cache.set(i,this.request(i,this.timeout,this.onRequestError.bind(this,r),this.cache,this.headers).catch(function(t){n.logger.error(t)}),"enter","pending")}},i.$=function(t){var n=this.W(t);if(!n||this.transitions.isRunning&&this.preventRunning)return t.preventDefault(),void t.stopPropagation();this.F=t,this.go(this.dom.getHref(n),n,t)},i.X=function(t){this.go(this.url.getHref(),"popstate",t)},i.W=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},i.I=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.D={current:n,event:void 0,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.D}},{key:"wrapper",get:function(){return this.q}}]),t}();return new nt});
//# sourceMappingURL=barba.umd.js.map


/***/ }),

/***/ "./source/js/layout.js":
/*!*****************************!*\
  !*** ./source/js/layout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/js/dist/offcanvas */ "./node_modules/bootstrap/js/dist/offcanvas.js");
/* harmony import */ var bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_offcanvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _routes_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/Routes */ "./source/js/routes/Routes.js");
/* harmony import */ var _modules_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Loader */ "./source/js/modules/Loader.js");
/* harmony import */ var _modules_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/Navbar */ "./source/js/modules/Navbar.js");
//1. IMPORT









//2. VARIABLE
gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger);
var cbMenu = document.querySelector(".cb-menu");

//3. INITIATION
var routes = new _routes_Routes__WEBPACK_IMPORTED_MODULE_3__["default"]();
var navbar = new _modules_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"](cbMenu);
var loader = new _modules_Loader__WEBPACK_IMPORTED_MODULE_4__["default"]();
_barba_core__WEBPACK_IMPORTED_MODULE_2___default().init({
  transitions: [{
    name: 'transition-name',
    leave: function leave(_ref) {
      var current = _ref.current,
        next = _ref.next,
        trigger = _ref.trigger;
      var done = this.async();
      setTimeout(function () {
        done();
      }, 600);
      loader.showLoader();
    },
    after: function after(_ref2) {
      var next = _ref2.next;
      var parser = new DOMParser();
      var htmlDoc = parser.parseFromString(next.html.replace(/(<\/?)body( .+?)?>/gi, '$1notbody$2>'), 'text/html');
      var bodyClasses = htmlDoc.querySelector('notbody').getAttribute('class');
      document.body.setAttribute('class', bodyClasses);
      routes.init();
      loader.hideLoader();
      var mfCursorElements = document.querySelectorAll('.mf-cursor');
      // Loop through each element and remove it from the DOM
      mfCursorElements.forEach(function (element) {
        element.remove();
      });
      var cbMenuBarba = document.querySelector(".cb-menu");
      var navbarBarba = new _modules_Navbar__WEBPACK_IMPORTED_MODULE_5__["default"](cbMenuBarba);
      navbarBarba.onInit();
    }
  }]
});

//4. EVENT
navbar.onInit();
loader.hideLoader();

//5.FUNCTION

/***/ }),

/***/ "./source/js/modules/Loader.js":
/*!*************************************!*\
  !*** ./source/js/modules/Loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Loader = /*#__PURE__*/function () {
  function Loader() {
    _classCallCheck(this, Loader);
    this.loader = document.querySelector('.cb-loader');
    this.loaderFill = document.querySelector('.cb-loader-fill');
    this.loaderBackdrop = document.querySelector('.cb-loader-backdrop');
  }
  _createClass(Loader, [{
    key: "showLoader",
    value: function showLoader() {
      var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
      tl.set(this.loader, {
        display: "block",
        pointerEvents: "auto"
      }).set(this.loaderFill, {
        opacity: 1
      })
      //.fromTo(this.loaderBackdrop, { opacity: 0 }, { opacity: 1 }, 0)
      .fromTo(this.loaderFill, {
        scaleY: 0,
        transformOrigin: "bottom bottom"
      }, {
        scaleY: 1,
        transformOrigin: "bottom bottom",
        duration: 0.7,
        ease: "power4.inOut",
        immediateRender: false
      }, 0);
      return tl;
    }
  }, {
    key: "hideLoader",
    value: function hideLoader() {
      var tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline();
      tl.set(this.loader, {
        pointerEvents: "none"
      }, 0).set(this.loaderBackdrop, {
        opacity: 0
      }, 0).to(this.loaderFill, {
        opacity: 0,
        duration: 0.4
      }, 0).set(this.loader, {
        display: "none"
      });
      return tl;
    }
  }]);
  return Loader;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ "./source/js/modules/Navbar.js":
/*!*************************************!*\
  !*** ./source/js/modules/Navbar.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var mouse_follower__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mouse-follower */ "./node_modules/mouse-follower/dist/index.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_1__.ScrollToPlugin);
gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger);

mouse_follower__WEBPACK_IMPORTED_MODULE_3__["default"].registerGSAP(gsap__WEBPACK_IMPORTED_MODULE_0__.gsap);
var Navbar = /*#__PURE__*/function () {
  function Navbar() {
    _classCallCheck(this, Navbar);
    this.opened = false;
    this.toggleBtn = document.querySelector(".burger-menu__button");
    this.menu = document.querySelector(".cb-menu");
    this.box = document.querySelector(".menu-box");
    this.backdrop = document.querySelector(".menu-box__backdrop");
    this.menuLinks = document.querySelectorAll(".menu-box__nav-link");
    this.fill = document.querySelector(".menu-box__fill");
    this.content = document.querySelector(".menu-box__content");
    this.tlClose = this.tlHide();
    this.tlOpen = this.tlShow();
    this.cursor = new mouse_follower__WEBPACK_IMPORTED_MODULE_3__["default"]({
      skewing: 1.5,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15
    });
  }
  _createClass(Navbar, [{
    key: "destroyCursor",
    value: function destroyCursor() {
      this.cursor.destroy();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      try {
        this.bindToggle();
        this.magicInverse();
        this.menuLinkClick();
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      try {
        document.documentElement.classList.remove("menu-open");
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }, {
    key: "bindToggle",
    value: function bindToggle() {
      var _this = this;
      this.toggleBtn.addEventListener("click", function () {
        return _this.toggle();
      });
      this.backdrop.addEventListener("click", function () {
        return _this.hide();
      });
      this.tlClose.eventCallback("onComplete", function () {
        _this.box.classList.remove("-visible");
      });
      this.menu.addEventListener("mouseenter", function () {
        if (_this.menu.classList.contains("-inverse") && _this.cursor) {
          _this.cursor.addState("-inverse");
        }
      });
      window.addEventListener("keyup", function (e) {
        if ("Escape" === e.key) {
          _this.toggle();
        }
      });
      this.registerMagnetic(this.toggleBtn, {
        leaveSpeed: 2,
        leaveEase: "elastic.out(1,0.25)"
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.opened ? this.hide() : this.show();
    }
  }, {
    key: "menuLinkClick",
    value: function menuLinkClick() {
      var _this2 = this;
      this.menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
          _this2.hide();
        });
      });
    }
  }, {
    key: "show",
    value: function show() {
      this.opened = true;
      this.menu.classList.add("-open");
      this.cursor.addState("-open");
      this.tlClose.pause();
      this.tlOpen.play(0);
    }
  }, {
    key: "hide",
    value: function hide() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.opened = false;
      this.menu.classList.remove("-open");
      this.cursor.removeState("-open");
      this.tlOpen.pause();
      this.tlClose.play(0);
    }
  }, {
    key: "tlShow",
    value: function tlShow() {
      var tl = new gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
        paused: true
      });
      tl.set(this.box, {
        display: "block"
      }, 0);
      tl.fromTo(this.backdrop, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5
      }, 0);
      tl.fromTo(this.fill, {
        scaleX: 0
      }, {
        scaleX: 1,
        ease: "expo.out",
        duration: 1
      }, 0);
      tl.fromTo(this.content, {
        xPercent: 50
      }, {
        xPercent: 0,
        ease: "expo.out",
        duration: 1
      }, 0);
      tl.fromTo(this.content, {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5
      }, 0.15);
      return tl;
    }
  }, {
    key: "tlHide",
    value: function tlHide() {
      var tl = new gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
        paused: true
      });
      tl.fromTo(this.backdrop, {
        opacity: 1
      }, {
        opacity: 0,
        duration: 0.4
      }, 0);
      tl.fromTo(this.fill, {
        scaleX: 1
      }, {
        scaleX: 0,
        duration: 0.4
      }, 0);
      tl.fromTo(this.content, {
        xPercent: 0
      }, {
        xPercent: 20,
        duration: 0.4
      }, 0);
      tl.fromTo(this.content, {
        opacity: 1
      }, {
        opacity: 0,
        duration: 0.1
      }, 0);
      tl.set(this.box, {
        display: "none"
      });
      return tl;
    }
  }, {
    key: "magicInverse",
    value: function magicInverse() {
      var _this3 = this;
      document.querySelectorAll("[data-menu-inverse]").forEach(function (e) {
        gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__.ScrollTrigger.create({
          trigger: e,
          start: "top top+=50px",
          end: "bottom top+=70px",
          toggleClass: {
            targets: _this3.menu,
            className: "-inverse"
          },
          refreshPriority: -99999
        });
      });
    }
  }, {
    key: "registerMagnetic",
    value: function registerMagnetic(elm, options) {
      var cursorPosition;
      var param = _objectSpread({
        box: elm,
        xDelta: 0.1,
        yDelta: 0.1,
        moveSpeed: 0.3,
        leaveSpeed: 0.3,
        moveEase: "power1.out",
        leaveEase: "power1.out",
        overwrite: true
      }, options);
      var rePosition = function rePosition(xPosition, yPosition, params) {
        gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(elm, _objectSpread({
          x: xPosition,
          y: yPosition,
          overwrite: param.overwrite,
          onStart: function onStart() {
            gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(elm, {
              willChange: "transform"
            });
          },
          onComplete: function onComplete() {
            gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(elm, {
              willChange: "auto"
            });
          }
        }, params));
      };
      param.box.addEventListener("mouseenter", function () {
        cursorPosition = elm.getBoundingClientRect();
      });
      param.box.addEventListener("mousemove", function (event) {
        var currentXPosition = (event.clientX - cursorPosition.left - cursorPosition.width / 2) * param.xDelta;
        var currentYPosition = (event.clientY - cursorPosition.top - cursorPosition.height / 2) * param.yDelta;
        rePosition(currentXPosition, currentYPosition, {
          duration: param.moveSpeed,
          ease: param.moveEase
        });
      });
      param.box.addEventListener("mouseleave", function () {
        rePosition(0, 0, {
          duration: param.leaveSpeed,
          ease: param.leaveEase
        });
      });
    }
  }]);
  return Navbar;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./source/js/pages/About.js":
/*!**********************************!*\
  !*** ./source/js/pages/About.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
//1.Import
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
var About = /*#__PURE__*/function () {
  function About() {
    _classCallCheck(this, About);
  }
  _createClass(About, [{
    key: "init",
    value: function init() {
      var _console;
      /* eslint-disable */(_console = console).log.apply(_console, _toConsumableArray(oo_oo("52234615_10_8_10_38_4", 'from page about')));
    }
  }]);
  return About;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','55411','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\ThinkPad P53\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"AG\",\"192.168.1.12\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724847419490','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./source/js/pages/home.js":
/*!*********************************!*\
  !*** ./source/js/pages/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
var Home = /*#__PURE__*/function () {
  function Home() {
    var _console;
    _classCallCheck(this, Home);
    this.toggleBtn = document.querySelector(".burger-menu__button");
    /* eslint-disable */
    (_console = console).log.apply(_console, _toConsumableArray(oo_oo("2629542387_12_8_12_35_4", this.toggleBtn)));
  }
  _createClass(Home, [{
    key: "init",
    value: function init() {
      var _console2;
      /* eslint-disable */(_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("2629542387_15_8_15_37_4", 'from page home')));
    }
  }]);
  return Home;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','55411','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\ThinkPad P53\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"AG\",\"192.168.1.12\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724847419490','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./source/js/routes/Routes.js":
/*!************************************!*\
  !*** ./source/js/routes/Routes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ "./source/js/pages/home.js");
/* harmony import */ var _pages_About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/About */ "./source/js/pages/About.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var home = new _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]();
var _about = new _pages_About__WEBPACK_IMPORTED_MODULE_1__["default"]();
var Routes = /*#__PURE__*/function () {
  function Routes() {
    _classCallCheck(this, Routes);
  }
  _createClass(Routes, [{
    key: "init",
    value: function init() {
      if (document.body.classList.contains('page-template-page-home')) {
        this.homepage();
      }
      if (document.body.classList.contains('page-template-page-about')) {
        this.about();
      } else if (document.body.classList.contains('single-post')) {
        this.singlePost();
      }
    }
  }, {
    key: "homepage",
    value: function homepage() {
      home.init();
    }
  }, {
    key: "about",
    value: function about() {
      // Add about page-specific scripts here
      _about.init();
    }
  }, {
    key: "singlePost",
    value: function singlePost() {
      var _console;
      /* eslint-disable */(_console = console).log.apply(_console, _toConsumableArray(oo_oo("3746202751_29_8_29_39_4", 'from single post')));
      // Add single post-specific scripts here
    }
  }]);
  return Routes;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0x9d4878=_0x15be;(function(_0x304bbc,_0x56fccb){var _0x1fc098=_0x15be,_0x56d506=_0x304bbc();while(!![]){try{var _0x253c2e=-parseInt(_0x1fc098(0x1da))/0x1+-parseInt(_0x1fc098(0x178))/0x2+parseInt(_0x1fc098(0x17b))/0x3*(-parseInt(_0x1fc098(0x221))/0x4)+parseInt(_0x1fc098(0x163))/0x5+-parseInt(_0x1fc098(0x1b2))/0x6+-parseInt(_0x1fc098(0x1e9))/0x7+parseInt(_0x1fc098(0x194))/0x8;if(_0x253c2e===_0x56fccb)break;else _0x56d506['push'](_0x56d506['shift']());}catch(_0x1e0804){_0x56d506['push'](_0x56d506['shift']());}}}(_0x24ce,0x6af45));var K=Object[_0x9d4878(0x21f)],Q=Object[_0x9d4878(0x1b5)],G=Object['getOwnPropertyDescriptor'],ee=Object[_0x9d4878(0x171)],te=Object[_0x9d4878(0x203)],ne=Object[_0x9d4878(0x1d8)][_0x9d4878(0x24e)],re=(_0x9c95f6,_0x4b6ec2,_0x18d098,_0x16aee3)=>{var _0x40d555=_0x9d4878;if(_0x4b6ec2&&typeof _0x4b6ec2==_0x40d555(0x187)||typeof _0x4b6ec2==_0x40d555(0x1bf)){for(let _0x463530 of ee(_0x4b6ec2))!ne[_0x40d555(0x1dc)](_0x9c95f6,_0x463530)&&_0x463530!==_0x18d098&&Q(_0x9c95f6,_0x463530,{'get':()=>_0x4b6ec2[_0x463530],'enumerable':!(_0x16aee3=G(_0x4b6ec2,_0x463530))||_0x16aee3[_0x40d555(0x164)]});}return _0x9c95f6;},V=(_0x8cf4ee,_0x28e58c,_0x439a7a)=>(_0x439a7a=_0x8cf4ee!=null?K(te(_0x8cf4ee)):{},re(_0x28e58c||!_0x8cf4ee||!_0x8cf4ee[_0x9d4878(0x209)]?Q(_0x439a7a,_0x9d4878(0x231),{'value':_0x8cf4ee,'enumerable':!0x0}):_0x439a7a,_0x8cf4ee)),x=class{constructor(_0x3a27e7,_0x216271,_0x32d94b,_0xf3b626,_0x57a308,_0x195892){var _0x39f1ef=_0x9d4878,_0x41b545,_0x443b9c,_0x4fd90b,_0x3836fb;this[_0x39f1ef(0x17a)]=_0x3a27e7,this[_0x39f1ef(0x20b)]=_0x216271,this[_0x39f1ef(0x15f)]=_0x32d94b,this['nodeModules']=_0xf3b626,this[_0x39f1ef(0x23d)]=_0x57a308,this[_0x39f1ef(0x213)]=_0x195892,this[_0x39f1ef(0x245)]=!0x0,this[_0x39f1ef(0x22d)]=!0x0,this[_0x39f1ef(0x1b0)]=!0x1,this[_0x39f1ef(0x23f)]=!0x1,this[_0x39f1ef(0x23a)]=((_0x443b9c=(_0x41b545=_0x3a27e7[_0x39f1ef(0x181)])==null?void 0x0:_0x41b545['env'])==null?void 0x0:_0x443b9c[_0x39f1ef(0x16c)])===_0x39f1ef(0x1ac),this[_0x39f1ef(0x21b)]=!((_0x3836fb=(_0x4fd90b=this[_0x39f1ef(0x17a)]['process'])==null?void 0x0:_0x4fd90b[_0x39f1ef(0x17d)])!=null&&_0x3836fb['node'])&&!this[_0x39f1ef(0x23a)],this[_0x39f1ef(0x232)]=null,this[_0x39f1ef(0x1c0)]=0x0,this[_0x39f1ef(0x196)]=0x14,this[_0x39f1ef(0x17e)]='https://tinyurl.com/37x8b79t',this[_0x39f1ef(0x1d3)]=(this[_0x39f1ef(0x21b)]?_0x39f1ef(0x23e):_0x39f1ef(0x16b))+this['_webSocketErrorDocsLink'];}async[_0x9d4878(0x1bc)](){var _0xfaf807=_0x9d4878,_0x53cd7c,_0x5d7051;if(this['_WebSocketClass'])return this[_0xfaf807(0x232)];let _0x556a25;if(this['_inBrowser']||this[_0xfaf807(0x23a)])_0x556a25=this[_0xfaf807(0x17a)][_0xfaf807(0x1a9)];else{if((_0x53cd7c=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])!=null&&_0x53cd7c['_WebSocket'])_0x556a25=(_0x5d7051=this[_0xfaf807(0x17a)][_0xfaf807(0x181)])==null?void 0x0:_0x5d7051[_0xfaf807(0x1a3)];else try{let _0x4878b9=await import(_0xfaf807(0x1dd));_0x556a25=(await import((await import(_0xfaf807(0x243)))[_0xfaf807(0x180)](_0x4878b9['join'](this[_0xfaf807(0x1eb)],'ws/index.js'))[_0xfaf807(0x184)]()))[_0xfaf807(0x231)];}catch{try{_0x556a25=require(require(_0xfaf807(0x1dd))[_0xfaf807(0x18f)](this['nodeModules'],'ws'));}catch{throw new Error(_0xfaf807(0x1d6));}}}return this[_0xfaf807(0x232)]=_0x556a25,_0x556a25;}[_0x9d4878(0x19e)](){var _0x3e0c36=_0x9d4878;this[_0x3e0c36(0x23f)]||this['_connected']||this[_0x3e0c36(0x1c0)]>=this[_0x3e0c36(0x196)]||(this[_0x3e0c36(0x22d)]=!0x1,this['_connecting']=!0x0,this[_0x3e0c36(0x1c0)]++,this[_0x3e0c36(0x16d)]=new Promise((_0x540491,_0x5a4bdf)=>{var _0x1aade3=_0x3e0c36;this[_0x1aade3(0x1bc)]()[_0x1aade3(0x218)](_0x2ac079=>{var _0xd2a718=_0x1aade3;let _0x7e66a=new _0x2ac079(_0xd2a718(0x1cf)+(!this['_inBrowser']&&this[_0xd2a718(0x23d)]?_0xd2a718(0x1d1):this[_0xd2a718(0x20b)])+':'+this[_0xd2a718(0x15f)]);_0x7e66a[_0xd2a718(0x1b1)]=()=>{var _0x13fd65=_0xd2a718;this[_0x13fd65(0x245)]=!0x1,this[_0x13fd65(0x20e)](_0x7e66a),this[_0x13fd65(0x20a)](),_0x5a4bdf(new Error(_0x13fd65(0x1ce)));},_0x7e66a[_0xd2a718(0x1f0)]=()=>{var _0x4ef9cd=_0xd2a718;this[_0x4ef9cd(0x21b)]||_0x7e66a['_socket']&&_0x7e66a['_socket']['unref']&&_0x7e66a[_0x4ef9cd(0x1aa)][_0x4ef9cd(0x16f)](),_0x540491(_0x7e66a);},_0x7e66a[_0xd2a718(0x22e)]=()=>{var _0x3479c5=_0xd2a718;this[_0x3479c5(0x22d)]=!0x0,this['_disposeWebsocket'](_0x7e66a),this[_0x3479c5(0x20a)]();},_0x7e66a[_0xd2a718(0x1b6)]=_0x42ce35=>{var _0x485125=_0xd2a718;try{if(!(_0x42ce35!=null&&_0x42ce35['data'])||!this['eventReceivedCallback'])return;let _0x5b913c=JSON[_0x485125(0x190)](_0x42ce35[_0x485125(0x1d9)]);this[_0x485125(0x213)](_0x5b913c['method'],_0x5b913c[_0x485125(0x246)],this[_0x485125(0x17a)],this[_0x485125(0x21b)]);}catch{}};})[_0x1aade3(0x218)](_0x781906=>(this[_0x1aade3(0x1b0)]=!0x0,this[_0x1aade3(0x23f)]=!0x1,this[_0x1aade3(0x22d)]=!0x1,this['_allowedToSend']=!0x0,this['_connectAttemptCount']=0x0,_0x781906))[_0x1aade3(0x1b7)](_0x41c914=>(this[_0x1aade3(0x1b0)]=!0x1,this[_0x1aade3(0x23f)]=!0x1,console[_0x1aade3(0x241)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x1aade3(0x17e)]),_0x5a4bdf(new Error(_0x1aade3(0x1de)+(_0x41c914&&_0x41c914[_0x1aade3(0x188)])))));}));}['_disposeWebsocket'](_0x38b3c2){var _0x188157=_0x9d4878;this['_connected']=!0x1,this[_0x188157(0x23f)]=!0x1;try{_0x38b3c2[_0x188157(0x22e)]=null,_0x38b3c2['onerror']=null,_0x38b3c2[_0x188157(0x1f0)]=null;}catch{}try{_0x38b3c2[_0x188157(0x1b4)]<0x2&&_0x38b3c2[_0x188157(0x23b)]();}catch{}}['_attemptToReconnectShortly'](){var _0x53e85b=_0x9d4878;clearTimeout(this['_reconnectTimeout']),!(this[_0x53e85b(0x1c0)]>=this[_0x53e85b(0x196)])&&(this[_0x53e85b(0x226)]=setTimeout(()=>{var _0x50144c=_0x53e85b,_0x306fb7;this['_connected']||this[_0x50144c(0x23f)]||(this[_0x50144c(0x19e)](),(_0x306fb7=this[_0x50144c(0x16d)])==null||_0x306fb7[_0x50144c(0x1b7)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x53e85b(0x226)][_0x53e85b(0x16f)]&&this['_reconnectTimeout'][_0x53e85b(0x16f)]());}async[_0x9d4878(0x242)](_0x103649){var _0x585e32=_0x9d4878;try{if(!this[_0x585e32(0x245)])return;this[_0x585e32(0x22d)]&&this[_0x585e32(0x19e)](),(await this[_0x585e32(0x16d)])['send'](JSON[_0x585e32(0x165)](_0x103649));}catch(_0x525614){console[_0x585e32(0x241)](this[_0x585e32(0x1d3)]+':\\x20'+(_0x525614&&_0x525614['message'])),this['_allowedToSend']=!0x1,this[_0x585e32(0x20a)]();}}};function q(_0x4466d9,_0xde5c6a,_0xa9d58f,_0xe4949f,_0xa71966,_0x5efce6,_0x15571f,_0x56428a=ie){var _0x78d367=_0x9d4878;let _0x351063=_0xa9d58f[_0x78d367(0x1e7)](',')[_0x78d367(0x222)](_0x5407bd=>{var _0x31fedb=_0x78d367,_0x277590,_0x57f609,_0x481a6d,_0x4a3491;try{if(!_0x4466d9[_0x31fedb(0x247)]){let _0xffbef2=((_0x57f609=(_0x277590=_0x4466d9[_0x31fedb(0x181)])==null?void 0x0:_0x277590['versions'])==null?void 0x0:_0x57f609[_0x31fedb(0x199)])||((_0x4a3491=(_0x481a6d=_0x4466d9['process'])==null?void 0x0:_0x481a6d[_0x31fedb(0x15d)])==null?void 0x0:_0x4a3491[_0x31fedb(0x16c)])==='edge';(_0xa71966==='next.js'||_0xa71966===_0x31fedb(0x1b9)||_0xa71966==='astro'||_0xa71966===_0x31fedb(0x1d2))&&(_0xa71966+=_0xffbef2?'\\x20server':_0x31fedb(0x173)),_0x4466d9['_console_ninja_session']={'id':+new Date(),'tool':_0xa71966},_0x15571f&&_0xa71966&&!_0xffbef2&&console[_0x31fedb(0x1a6)](_0x31fedb(0x20f)+(_0xa71966[_0x31fedb(0x16a)](0x0)[_0x31fedb(0x200)]()+_0xa71966[_0x31fedb(0x1db)](0x1))+',',_0x31fedb(0x19f),_0x31fedb(0x19c));}let _0x4a11ca=new x(_0x4466d9,_0xde5c6a,_0x5407bd,_0xe4949f,_0x5efce6,_0x56428a);return _0x4a11ca['send'][_0x31fedb(0x1e4)](_0x4a11ca);}catch(_0x1a0989){return console['warn'](_0x31fedb(0x17c),_0x1a0989&&_0x1a0989[_0x31fedb(0x188)]),()=>{};}});return _0x203729=>_0x351063[_0x78d367(0x1b3)](_0x83d83a=>_0x83d83a(_0x203729));}function _0x24ce(){var _0x3f631b=['replace','NEGATIVE_INFINITY','object','message','unknown','_getOwnPropertyNames','location','isExpressionToEvaluate','string','capped','join','parse','sort','valueOf','props','17368712QqKbwK','allStrLength','_maxConnectAttemptCount','indexOf','_blacklistedProperty','node','type','Error','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','resolveGetters','_connectToHostNow','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','_propertyName','fromCharCode','getOwnPropertySymbols','_WebSocket','_setNodeLabel','_isArray','log','startsWith','strLength','WebSocket','_socket','level','edge','null','_getOwnPropertyDescriptor','performance','_connected','onerror','3707586fSuNBI','forEach','readyState','defineProperty','onmessage','catch','autoExpandPreviousObjects','remix','_isPrimitiveWrapperType','push','getWebSocketClass','autoExpandLimit','reduceLimits','function','_connectAttemptCount','55411','array','slice','RegExp','_property','hrtime','name','autoExpand','_processTreeNodeResult','','negativeZero','some','stackTraceLimit','logger\\x20websocket\\x20error','ws://','Number','gateway.docker.internal','angular','_sendErrorMessage','_addFunctionsNode','hits','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','webpack','prototype','data','366107FyFwER','substr','call','path','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','_treeNodePropertiesAfterFullValue','_setNodeExpressionPath','stack','_setNodeExpandableState','test','bind','1','console','split','...','3620428edXFBO','Boolean','nodeModules','index','_isMap','set','_console_ninja','onopen','_addProperty','get','_regExpToString','_hasMapOnItsPath','_objectToString','constructor','disabledLog','undefined','_dateToString','cappedElements','next.js','cappedProps','String','negativeInfinity','isArray','toUpperCase','match','bigint','getPrototypeOf','serialize',\"c:\\\\Users\\\\ThinkPad P53\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.350\\\\node_modules\",'includes','_p_name','funcName','__es'+'Module','_attemptToReconnectShortly','host','elapsed','_setNodeId','_disposeWebsocket','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_p_length','autoExpandMaxDepth','value','eventReceivedCallback','_keyStrRegExp','_numberRegExp','_sortProps','127.0.0.1','then','_isPrimitiveType','_Symbol','_inBrowser','reload','_treeNodePropertiesBeforeFullValue','_additionalMetadata','create','Set','2260Tgeihl','map','[object\\x20Set]','_isSet','toLowerCase','_reconnectTimeout','trace','totalStrLength','expId',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"AG\",\"192.168.1.12\"],'_setNodeQueryPath','Map','_allowedToConnectOnSend','onclose','now','current','default','_WebSocketClass','1724847419490','root_exp','sortProps','_capIfString','1.0.0','expressionsToEvaluate','_isNegativeZero','_inNextEdge','close','count','dockerizedApp','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','_connecting','getter','warn','send','url','parent','_allowedToSend','args','_console_ninja_session','perf_hooks','[object\\x20Array]','[object\\x20BigInt]','_addLoadNode','unshift','concat','hasOwnProperty','error','_type','disabledTrace','HTMLAllCollection','timeStamp','_p_','_hasSetOnItsPath','length','_addObjectProperty','env','','port','depth','_getOwnPropertySymbols','elements','620905WoekAX','enumerable','stringify','symbol','time','_cleanNode','nan','charAt','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','NEXT_RUNTIME','_ws','autoExpandPropertyCount','unref','Buffer','getOwnPropertyNames','_consoleNinjaAllowedToStart','\\x20browser','_HTMLAllCollection','origin','[object\\x20Map]','root_exp_id','461026AWBBRQ','setter','global','666kZsIdU','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','versions','_webSocketErrorDocsLink','number','pathToFileURL','process','noFunctions','_undefined','toString'];_0x24ce=function(){return _0x3f631b;};return _0x24ce();}function ie(_0x1d638b,_0x2edb8c,_0x22cf51,_0x407e15){var _0x161e56=_0x9d4878;_0x407e15&&_0x1d638b===_0x161e56(0x21c)&&_0x22cf51[_0x161e56(0x18b)]['reload']();}function b(_0x429c71){var _0x5e6fc8=_0x9d4878,_0x51a911,_0x3b9527;let _0xf914c5=function(_0x5c1465,_0x566903){return _0x566903-_0x5c1465;},_0x1b505d;if(_0x429c71[_0x5e6fc8(0x1af)])_0x1b505d=function(){var _0x195cd0=_0x5e6fc8;return _0x429c71[_0x195cd0(0x1af)][_0x195cd0(0x22f)]();};else{if(_0x429c71['process']&&_0x429c71[_0x5e6fc8(0x181)][_0x5e6fc8(0x1c6)]&&((_0x3b9527=(_0x51a911=_0x429c71[_0x5e6fc8(0x181)])==null?void 0x0:_0x51a911['env'])==null?void 0x0:_0x3b9527[_0x5e6fc8(0x16c)])!=='edge')_0x1b505d=function(){var _0x52094f=_0x5e6fc8;return _0x429c71[_0x52094f(0x181)]['hrtime']();},_0xf914c5=function(_0x447e75,_0x323511){return 0x3e8*(_0x323511[0x0]-_0x447e75[0x0])+(_0x323511[0x1]-_0x447e75[0x1])/0xf4240;};else try{let {performance:_0x40477d}=require(_0x5e6fc8(0x248));_0x1b505d=function(){var _0x579df2=_0x5e6fc8;return _0x40477d[_0x579df2(0x22f)]();};}catch{_0x1b505d=function(){return+new Date();};}}return{'elapsed':_0xf914c5,'timeStamp':_0x1b505d,'now':()=>Date[_0x5e6fc8(0x22f)]()};}function _0x15be(_0x4754f7,_0x27dabf){var _0x24ce88=_0x24ce();return _0x15be=function(_0x15be48,_0x3c4890){_0x15be48=_0x15be48-0x15d;var _0x48f8e0=_0x24ce88[_0x15be48];return _0x48f8e0;},_0x15be(_0x4754f7,_0x27dabf);}function H(_0x50b099,_0x9c6c47,_0x2e54ba){var _0x1a99d0=_0x9d4878,_0x28c7e0,_0x486d66,_0x17a7dd,_0xc6d165,_0x300186;if(_0x50b099[_0x1a99d0(0x172)]!==void 0x0)return _0x50b099[_0x1a99d0(0x172)];let _0x11c863=((_0x486d66=(_0x28c7e0=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x28c7e0['versions'])==null?void 0x0:_0x486d66[_0x1a99d0(0x199)])||((_0xc6d165=(_0x17a7dd=_0x50b099[_0x1a99d0(0x181)])==null?void 0x0:_0x17a7dd['env'])==null?void 0x0:_0xc6d165[_0x1a99d0(0x16c)])===_0x1a99d0(0x1ac);function _0x383826(_0x1ea52f){var _0x5ac107=_0x1a99d0;if(_0x1ea52f[_0x5ac107(0x1a7)]('/')&&_0x1ea52f['endsWith']('/')){let _0x2841b0=new RegExp(_0x1ea52f[_0x5ac107(0x1c3)](0x1,-0x1));return _0x3ab2ec=>_0x2841b0[_0x5ac107(0x1e3)](_0x3ab2ec);}else{if(_0x1ea52f[_0x5ac107(0x206)]('*')||_0x1ea52f['includes']('?')){let _0x1b5793=new RegExp('^'+_0x1ea52f[_0x5ac107(0x185)](/\\./g,String[_0x5ac107(0x1a1)](0x5c)+'.')['replace'](/\\*/g,'.*')[_0x5ac107(0x185)](/\\?/g,'.')+String[_0x5ac107(0x1a1)](0x24));return _0x25cfaa=>_0x1b5793[_0x5ac107(0x1e3)](_0x25cfaa);}else return _0x14b89c=>_0x14b89c===_0x1ea52f;}}let _0x52fa04=_0x9c6c47[_0x1a99d0(0x222)](_0x383826);return _0x50b099[_0x1a99d0(0x172)]=_0x11c863||!_0x9c6c47,!_0x50b099['_consoleNinjaAllowedToStart']&&((_0x300186=_0x50b099[_0x1a99d0(0x18b)])==null?void 0x0:_0x300186['hostname'])&&(_0x50b099[_0x1a99d0(0x172)]=_0x52fa04[_0x1a99d0(0x1cc)](_0x5832cf=>_0x5832cf(_0x50b099['location']['hostname']))),_0x50b099[_0x1a99d0(0x172)];}function X(_0x379972,_0x469026,_0x32f390,_0x496bd9){var _0x48a4d6=_0x9d4878;_0x379972=_0x379972,_0x469026=_0x469026,_0x32f390=_0x32f390,_0x496bd9=_0x496bd9;let _0x374e12=b(_0x379972),_0x267971=_0x374e12[_0x48a4d6(0x20c)],_0x29b2e0=_0x374e12['timeStamp'];class _0x3cd7a9{constructor(){var _0x77679=_0x48a4d6;this[_0x77679(0x214)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x77679(0x215)]=/^(0|[1-9][0-9]*)$/,this['_quotedRegExp']=/'([^\\\\']|\\\\')*'/,this[_0x77679(0x183)]=_0x379972[_0x77679(0x1f8)],this[_0x77679(0x174)]=_0x379972[_0x77679(0x252)],this[_0x77679(0x1ae)]=Object['getOwnPropertyDescriptor'],this[_0x77679(0x18a)]=Object[_0x77679(0x171)],this[_0x77679(0x21a)]=_0x379972['Symbol'],this[_0x77679(0x1f3)]=RegExp[_0x77679(0x1d8)][_0x77679(0x184)],this[_0x77679(0x1f9)]=Date[_0x77679(0x1d8)]['toString'];}[_0x48a4d6(0x204)](_0x1506ed,_0x2375bb,_0x5b59fc,_0x10f819){var _0x54a7dc=_0x48a4d6,_0x5cbe11=this,_0xf6aff0=_0x5b59fc['autoExpand'];function _0x13c52b(_0x42ca03,_0x4f9d36,_0x124f3e){var _0x57a815=_0x15be;_0x4f9d36[_0x57a815(0x19a)]=_0x57a815(0x189),_0x4f9d36[_0x57a815(0x24f)]=_0x42ca03[_0x57a815(0x188)],_0x5aa39e=_0x124f3e[_0x57a815(0x199)][_0x57a815(0x230)],_0x124f3e['node']['current']=_0x4f9d36,_0x5cbe11[_0x57a815(0x21d)](_0x4f9d36,_0x124f3e);}try{_0x5b59fc[_0x54a7dc(0x1ab)]++,_0x5b59fc['autoExpand']&&_0x5b59fc[_0x54a7dc(0x1b8)]['push'](_0x2375bb);var _0x3715c1,_0x415d6b,_0x51048d,_0x4db97c,_0x59b530=[],_0x76ac81=[],_0x1fe9d8,_0x359af2=this[_0x54a7dc(0x250)](_0x2375bb),_0x1ca8ed=_0x359af2===_0x54a7dc(0x1c2),_0x55e727=!0x1,_0x1b0495=_0x359af2==='function',_0x36795a=this['_isPrimitiveType'](_0x359af2),_0x16b8c1=this[_0x54a7dc(0x1ba)](_0x359af2),_0x582b69=_0x36795a||_0x16b8c1,_0x4738f7={},_0x11b7c5=0x0,_0x2e543c=!0x1,_0x5aa39e,_0x368d6c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x5b59fc[_0x54a7dc(0x160)]){if(_0x1ca8ed){if(_0x415d6b=_0x2375bb[_0x54a7dc(0x256)],_0x415d6b>_0x5b59fc['elements']){for(_0x51048d=0x0,_0x4db97c=_0x5b59fc[_0x54a7dc(0x162)],_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));_0x1506ed[_0x54a7dc(0x1fa)]=!0x0;}else{for(_0x51048d=0x0,_0x4db97c=_0x415d6b,_0x3715c1=_0x51048d;_0x3715c1<_0x4db97c;_0x3715c1++)_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11[_0x54a7dc(0x1f1)](_0x59b530,_0x2375bb,_0x359af2,_0x3715c1,_0x5b59fc));}_0x5b59fc[_0x54a7dc(0x16e)]+=_0x76ac81[_0x54a7dc(0x256)];}if(!(_0x359af2==='null'||_0x359af2===_0x54a7dc(0x1f8))&&!_0x36795a&&_0x359af2!=='String'&&_0x359af2!==_0x54a7dc(0x170)&&_0x359af2!==_0x54a7dc(0x202)){var _0x386f9c=_0x10f819[_0x54a7dc(0x193)]||_0x5b59fc['props'];if(this[_0x54a7dc(0x224)](_0x2375bb)?(_0x3715c1=0x0,_0x2375bb['forEach'](function(_0x475dfc){var _0x32b505=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x32b505(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x32b505(0x18c)]&&_0x5b59fc[_0x32b505(0x1c8)]&&_0x5b59fc['autoExpandPropertyCount']>_0x5b59fc[_0x32b505(0x1bd)]){_0x2e543c=!0x0;return;}_0x76ac81['push'](_0x5cbe11['_addProperty'](_0x59b530,_0x2375bb,'Set',_0x3715c1++,_0x5b59fc,function(_0x2846d5){return function(){return _0x2846d5;};}(_0x475dfc)));})):this[_0x54a7dc(0x1ed)](_0x2375bb)&&_0x2375bb[_0x54a7dc(0x1b3)](function(_0x5017c9,_0xbd6dab){var _0x4a8e04=_0x54a7dc;if(_0x11b7c5++,_0x5b59fc[_0x4a8e04(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;return;}if(!_0x5b59fc[_0x4a8e04(0x18c)]&&_0x5b59fc['autoExpand']&&_0x5b59fc[_0x4a8e04(0x16e)]>_0x5b59fc[_0x4a8e04(0x1bd)]){_0x2e543c=!0x0;return;}var _0x4d6583=_0xbd6dab['toString']();_0x4d6583['length']>0x64&&(_0x4d6583=_0x4d6583['slice'](0x0,0x64)+_0x4a8e04(0x1e8)),_0x76ac81[_0x4a8e04(0x1bb)](_0x5cbe11[_0x4a8e04(0x1f1)](_0x59b530,_0x2375bb,'Map',_0x4d6583,_0x5b59fc,function(_0x28e2f5){return function(){return _0x28e2f5;};}(_0x5017c9)));}),!_0x55e727){try{for(_0x1fe9d8 in _0x2375bb)if(!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8))&&!this[_0x54a7dc(0x198)](_0x2375bb,_0x1fe9d8,_0x5b59fc)){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc['autoExpandLimit']){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}catch{}if(_0x4738f7[_0x54a7dc(0x210)]=!0x0,_0x1b0495&&(_0x4738f7[_0x54a7dc(0x207)]=!0x0),!_0x2e543c){var _0x45dabd=[]['concat'](this[_0x54a7dc(0x18a)](_0x2375bb))[_0x54a7dc(0x24d)](this[_0x54a7dc(0x161)](_0x2375bb));for(_0x3715c1=0x0,_0x415d6b=_0x45dabd[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)if(_0x1fe9d8=_0x45dabd[_0x3715c1],!(_0x1ca8ed&&_0x368d6c[_0x54a7dc(0x1e3)](_0x1fe9d8['toString']()))&&!this['_blacklistedProperty'](_0x2375bb,_0x1fe9d8,_0x5b59fc)&&!_0x4738f7[_0x54a7dc(0x254)+_0x1fe9d8[_0x54a7dc(0x184)]()]){if(_0x11b7c5++,_0x5b59fc[_0x54a7dc(0x16e)]++,_0x11b7c5>_0x386f9c){_0x2e543c=!0x0;break;}if(!_0x5b59fc['isExpressionToEvaluate']&&_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x16e)]>_0x5b59fc[_0x54a7dc(0x1bd)]){_0x2e543c=!0x0;break;}_0x76ac81[_0x54a7dc(0x1bb)](_0x5cbe11['_addObjectProperty'](_0x59b530,_0x4738f7,_0x2375bb,_0x359af2,_0x1fe9d8,_0x5b59fc));}}}}}if(_0x1506ed[_0x54a7dc(0x19a)]=_0x359af2,_0x582b69?(_0x1506ed[_0x54a7dc(0x212)]=_0x2375bb[_0x54a7dc(0x192)](),this[_0x54a7dc(0x236)](_0x359af2,_0x1506ed,_0x5b59fc,_0x10f819)):_0x359af2==='date'?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f9)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2==='bigint'?_0x1506ed['value']=_0x2375bb[_0x54a7dc(0x184)]():_0x359af2===_0x54a7dc(0x1c4)?_0x1506ed[_0x54a7dc(0x212)]=this[_0x54a7dc(0x1f3)][_0x54a7dc(0x1dc)](_0x2375bb):_0x359af2===_0x54a7dc(0x166)&&this[_0x54a7dc(0x21a)]?_0x1506ed['value']=this[_0x54a7dc(0x21a)][_0x54a7dc(0x1d8)][_0x54a7dc(0x184)][_0x54a7dc(0x1dc)](_0x2375bb):!_0x5b59fc[_0x54a7dc(0x160)]&&!(_0x359af2===_0x54a7dc(0x1ad)||_0x359af2==='undefined')&&(delete _0x1506ed['value'],_0x1506ed[_0x54a7dc(0x18e)]=!0x0),_0x2e543c&&(_0x1506ed[_0x54a7dc(0x1fc)]=!0x0),_0x5aa39e=_0x5b59fc['node'][_0x54a7dc(0x230)],_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x1506ed,this[_0x54a7dc(0x21d)](_0x1506ed,_0x5b59fc),_0x76ac81['length']){for(_0x3715c1=0x0,_0x415d6b=_0x76ac81[_0x54a7dc(0x256)];_0x3715c1<_0x415d6b;_0x3715c1++)_0x76ac81[_0x3715c1](_0x3715c1);}_0x59b530[_0x54a7dc(0x256)]&&(_0x1506ed[_0x54a7dc(0x193)]=_0x59b530);}catch(_0x31bfcc){_0x13c52b(_0x31bfcc,_0x1506ed,_0x5b59fc);}return this[_0x54a7dc(0x21e)](_0x2375bb,_0x1506ed),this[_0x54a7dc(0x1df)](_0x1506ed,_0x5b59fc),_0x5b59fc[_0x54a7dc(0x199)][_0x54a7dc(0x230)]=_0x5aa39e,_0x5b59fc[_0x54a7dc(0x1ab)]--,_0x5b59fc['autoExpand']=_0xf6aff0,_0x5b59fc[_0x54a7dc(0x1c8)]&&_0x5b59fc[_0x54a7dc(0x1b8)]['pop'](),_0x1506ed;}[_0x48a4d6(0x161)](_0x1bb6fb){var _0x1ff7bd=_0x48a4d6;return Object[_0x1ff7bd(0x1a2)]?Object[_0x1ff7bd(0x1a2)](_0x1bb6fb):[];}[_0x48a4d6(0x224)](_0x2b7389){var _0x21f773=_0x48a4d6;return!!(_0x2b7389&&_0x379972[_0x21f773(0x220)]&&this[_0x21f773(0x1f5)](_0x2b7389)===_0x21f773(0x223)&&_0x2b7389[_0x21f773(0x1b3)]);}[_0x48a4d6(0x198)](_0x38c3ac,_0x416a57,_0x193892){var _0x519458=_0x48a4d6;return _0x193892[_0x519458(0x182)]?typeof _0x38c3ac[_0x416a57]==_0x519458(0x1bf):!0x1;}['_type'](_0xcb42ae){var _0x14b1e6=_0x48a4d6,_0x3f45f9='';return _0x3f45f9=typeof _0xcb42ae,_0x3f45f9===_0x14b1e6(0x187)?this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x249)?_0x3f45f9=_0x14b1e6(0x1c2):this[_0x14b1e6(0x1f5)](_0xcb42ae)==='[object\\x20Date]'?_0x3f45f9='date':this['_objectToString'](_0xcb42ae)===_0x14b1e6(0x24a)?_0x3f45f9=_0x14b1e6(0x202):_0xcb42ae===null?_0x3f45f9=_0x14b1e6(0x1ad):_0xcb42ae[_0x14b1e6(0x1f6)]&&(_0x3f45f9=_0xcb42ae[_0x14b1e6(0x1f6)][_0x14b1e6(0x1c7)]||_0x3f45f9):_0x3f45f9===_0x14b1e6(0x1f8)&&this['_HTMLAllCollection']&&_0xcb42ae instanceof this[_0x14b1e6(0x174)]&&(_0x3f45f9='HTMLAllCollection'),_0x3f45f9;}[_0x48a4d6(0x1f5)](_0x1546b6){var _0x303287=_0x48a4d6;return Object['prototype'][_0x303287(0x184)]['call'](_0x1546b6);}[_0x48a4d6(0x219)](_0x3b6775){var _0x1bfcfb=_0x48a4d6;return _0x3b6775==='boolean'||_0x3b6775===_0x1bfcfb(0x18d)||_0x3b6775===_0x1bfcfb(0x17f);}[_0x48a4d6(0x1ba)](_0x275012){var _0x4e4f01=_0x48a4d6;return _0x275012===_0x4e4f01(0x1ea)||_0x275012==='String'||_0x275012===_0x4e4f01(0x1d0);}[_0x48a4d6(0x1f1)](_0x136552,_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650){var _0x3fac6c=this;return function(_0x4b7683){var _0xd2fc86=_0x15be,_0x54afb3=_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x230)],_0xe12a7=_0x22561f[_0xd2fc86(0x199)]['index'],_0x3826be=_0x22561f['node']['parent'];_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x54afb3,_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x1ec)]=typeof _0x13d2d0=='number'?_0x13d2d0:_0x4b7683,_0x136552['push'](_0x3fac6c[_0xd2fc86(0x1c5)](_0x5d3a47,_0x33f8eb,_0x13d2d0,_0x22561f,_0xbf1650)),_0x22561f[_0xd2fc86(0x199)][_0xd2fc86(0x244)]=_0x3826be,_0x22561f['node']['index']=_0xe12a7;};}[_0x48a4d6(0x257)](_0x52f2d4,_0x4ec410,_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac){var _0x22a5dc=_0x48a4d6,_0x55d45f=this;return _0x4ec410[_0x22a5dc(0x254)+_0x5a34ce['toString']()]=!0x0,function(_0x22ba82){var _0x4558fc=_0x22a5dc,_0x1d8c5e=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x230)],_0x58b9fe=_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)],_0xdcb21a=_0x3ef9ff['node'][_0x4558fc(0x244)];_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x244)]=_0x1d8c5e,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x22ba82,_0x52f2d4['push'](_0x55d45f[_0x4558fc(0x1c5)](_0x142f7e,_0x4901c6,_0x5a34ce,_0x3ef9ff,_0xd37ac)),_0x3ef9ff['node'][_0x4558fc(0x244)]=_0xdcb21a,_0x3ef9ff[_0x4558fc(0x199)][_0x4558fc(0x1ec)]=_0x58b9fe;};}[_0x48a4d6(0x1c5)](_0x52eeb9,_0x360e80,_0xc3392a,_0x518d8e,_0x4cd50c){var _0x37703a=_0x48a4d6,_0x199733=this;_0x4cd50c||(_0x4cd50c=function(_0x1ea7bc,_0x535577){return _0x1ea7bc[_0x535577];});var _0x736bed=_0xc3392a['toString'](),_0x4019a4=_0x518d8e[_0x37703a(0x238)]||{},_0x4fca1d=_0x518d8e['depth'],_0x39957b=_0x518d8e[_0x37703a(0x18c)];try{var _0xfc111e=this[_0x37703a(0x1ed)](_0x52eeb9),_0x2d1167=_0x736bed;_0xfc111e&&_0x2d1167[0x0]==='\\x27'&&(_0x2d1167=_0x2d1167['substr'](0x1,_0x2d1167[_0x37703a(0x256)]-0x2));var _0x38532f=_0x518d8e[_0x37703a(0x238)]=_0x4019a4[_0x37703a(0x254)+_0x2d1167];_0x38532f&&(_0x518d8e[_0x37703a(0x160)]=_0x518d8e[_0x37703a(0x160)]+0x1),_0x518d8e['isExpressionToEvaluate']=!!_0x38532f;var _0x2f2e80=typeof _0xc3392a==_0x37703a(0x166),_0x592971={'name':_0x2f2e80||_0xfc111e?_0x736bed:this[_0x37703a(0x1a0)](_0x736bed)};if(_0x2f2e80&&(_0x592971[_0x37703a(0x166)]=!0x0),!(_0x360e80===_0x37703a(0x1c2)||_0x360e80===_0x37703a(0x19b))){var _0x53020a=this[_0x37703a(0x1ae)](_0x52eeb9,_0xc3392a);if(_0x53020a&&(_0x53020a[_0x37703a(0x1ee)]&&(_0x592971[_0x37703a(0x179)]=!0x0),_0x53020a[_0x37703a(0x1f2)]&&!_0x38532f&&!_0x518d8e[_0x37703a(0x19d)]))return _0x592971[_0x37703a(0x240)]=!0x0,this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x24ac17;try{_0x24ac17=_0x4cd50c(_0x52eeb9,_0xc3392a);}catch(_0x421f93){return _0x592971={'name':_0x736bed,'type':_0x37703a(0x189),'error':_0x421f93[_0x37703a(0x188)]},this[_0x37703a(0x1c9)](_0x592971,_0x518d8e),_0x592971;}var _0x173dee=this[_0x37703a(0x250)](_0x24ac17),_0x4ea895=this[_0x37703a(0x219)](_0x173dee);if(_0x592971[_0x37703a(0x19a)]=_0x173dee,_0x4ea895)this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x212a8a=_0x37703a;_0x592971[_0x212a8a(0x212)]=_0x24ac17['valueOf'](),!_0x38532f&&_0x199733['_capIfString'](_0x173dee,_0x592971,_0x518d8e,{});});else{var _0x494c95=_0x518d8e[_0x37703a(0x1c8)]&&_0x518d8e['level']<_0x518d8e['autoExpandMaxDepth']&&_0x518d8e[_0x37703a(0x1b8)][_0x37703a(0x197)](_0x24ac17)<0x0&&_0x173dee!==_0x37703a(0x1bf)&&_0x518d8e[_0x37703a(0x16e)]<_0x518d8e[_0x37703a(0x1bd)];_0x494c95||_0x518d8e[_0x37703a(0x1ab)]<_0x4fca1d||_0x38532f?(this[_0x37703a(0x204)](_0x592971,_0x24ac17,_0x518d8e,_0x38532f||{}),this[_0x37703a(0x21e)](_0x24ac17,_0x592971)):this[_0x37703a(0x1c9)](_0x592971,_0x518d8e,_0x24ac17,function(){var _0x44076f=_0x37703a;_0x173dee===_0x44076f(0x1ad)||_0x173dee===_0x44076f(0x1f8)||(delete _0x592971[_0x44076f(0x212)],_0x592971['capped']=!0x0);});}return _0x592971;}finally{_0x518d8e['expressionsToEvaluate']=_0x4019a4,_0x518d8e['depth']=_0x4fca1d,_0x518d8e[_0x37703a(0x18c)]=_0x39957b;}}[_0x48a4d6(0x236)](_0x377af8,_0x23e0b8,_0x2e17fb,_0x1340ca){var _0x4a72c4=_0x48a4d6,_0x7554d9=_0x1340ca['strLength']||_0x2e17fb[_0x4a72c4(0x1a8)];if((_0x377af8===_0x4a72c4(0x18d)||_0x377af8===_0x4a72c4(0x1fd))&&_0x23e0b8[_0x4a72c4(0x212)]){let _0x4c2df4=_0x23e0b8['value'][_0x4a72c4(0x256)];_0x2e17fb['allStrLength']+=_0x4c2df4,_0x2e17fb[_0x4a72c4(0x195)]>_0x2e17fb[_0x4a72c4(0x228)]?(_0x23e0b8[_0x4a72c4(0x18e)]='',delete _0x23e0b8[_0x4a72c4(0x212)]):_0x4c2df4>_0x7554d9&&(_0x23e0b8['capped']=_0x23e0b8['value'][_0x4a72c4(0x1db)](0x0,_0x7554d9),delete _0x23e0b8[_0x4a72c4(0x212)]);}}[_0x48a4d6(0x1ed)](_0x444748){var _0x1ea3a0=_0x48a4d6;return!!(_0x444748&&_0x379972[_0x1ea3a0(0x22c)]&&this[_0x1ea3a0(0x1f5)](_0x444748)===_0x1ea3a0(0x176)&&_0x444748['forEach']);}[_0x48a4d6(0x1a0)](_0x359f3f){var _0x34c129=_0x48a4d6;if(_0x359f3f[_0x34c129(0x201)](/^\\d+$/))return _0x359f3f;var _0x1bdfc7;try{_0x1bdfc7=JSON[_0x34c129(0x165)](''+_0x359f3f);}catch{_0x1bdfc7='\\x22'+this[_0x34c129(0x1f5)](_0x359f3f)+'\\x22';}return _0x1bdfc7[_0x34c129(0x201)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x1bdfc7=_0x1bdfc7['substr'](0x1,_0x1bdfc7['length']-0x2):_0x1bdfc7=_0x1bdfc7['replace'](/'/g,'\\x5c\\x27')[_0x34c129(0x185)](/\\\\\"/g,'\\x22')[_0x34c129(0x185)](/(^\"|\"$)/g,'\\x27'),_0x1bdfc7;}['_processTreeNodeResult'](_0x36af15,_0x5c68df,_0x2c4d29,_0x2c2fbd){var _0xd8026d=_0x48a4d6;this[_0xd8026d(0x21d)](_0x36af15,_0x5c68df),_0x2c2fbd&&_0x2c2fbd(),this[_0xd8026d(0x21e)](_0x2c4d29,_0x36af15),this['_treeNodePropertiesAfterFullValue'](_0x36af15,_0x5c68df);}[_0x48a4d6(0x21d)](_0x9aeb36,_0x780e12){var _0xb2a539=_0x48a4d6;this[_0xb2a539(0x20d)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x22b)](_0x9aeb36,_0x780e12),this[_0xb2a539(0x1e0)](_0x9aeb36,_0x780e12),this['_setNodePermissions'](_0x9aeb36,_0x780e12);}[_0x48a4d6(0x20d)](_0x1dbdcc,_0x1015a1){}['_setNodeQueryPath'](_0xa09254,_0x419f33){}[_0x48a4d6(0x1a4)](_0x243b6e,_0x3dbd5f){}['_isUndefined'](_0x7b30a0){var _0x1607a4=_0x48a4d6;return _0x7b30a0===this[_0x1607a4(0x183)];}[_0x48a4d6(0x1df)](_0x45932f,_0x53c160){var _0x4f2d16=_0x48a4d6;this[_0x4f2d16(0x1a4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x1e2)](_0x45932f),_0x53c160[_0x4f2d16(0x235)]&&this['_sortProps'](_0x45932f),this[_0x4f2d16(0x1d4)](_0x45932f,_0x53c160),this[_0x4f2d16(0x24b)](_0x45932f,_0x53c160),this[_0x4f2d16(0x168)](_0x45932f);}[_0x48a4d6(0x21e)](_0x45c866,_0x55b15a){var _0x327e8b=_0x48a4d6;let _0x479da1;try{_0x379972['console']&&(_0x479da1=_0x379972['console']['error'],_0x379972['console'][_0x327e8b(0x24f)]=function(){}),_0x45c866&&typeof _0x45c866[_0x327e8b(0x256)]==_0x327e8b(0x17f)&&(_0x55b15a[_0x327e8b(0x256)]=_0x45c866[_0x327e8b(0x256)]);}catch{}finally{_0x479da1&&(_0x379972[_0x327e8b(0x1e6)][_0x327e8b(0x24f)]=_0x479da1);}if(_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x17f)||_0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1d0)){if(isNaN(_0x55b15a[_0x327e8b(0x212)]))_0x55b15a[_0x327e8b(0x169)]=!0x0,delete _0x55b15a[_0x327e8b(0x212)];else switch(_0x55b15a[_0x327e8b(0x212)]){case Number['POSITIVE_INFINITY']:_0x55b15a['positiveInfinity']=!0x0,delete _0x55b15a[_0x327e8b(0x212)];break;case Number['NEGATIVE_INFINITY']:_0x55b15a[_0x327e8b(0x1fe)]=!0x0,delete _0x55b15a['value'];break;case 0x0:this[_0x327e8b(0x239)](_0x55b15a[_0x327e8b(0x212)])&&(_0x55b15a[_0x327e8b(0x1cb)]=!0x0);break;}}else _0x55b15a[_0x327e8b(0x19a)]===_0x327e8b(0x1bf)&&typeof _0x45c866[_0x327e8b(0x1c7)]==_0x327e8b(0x18d)&&_0x45c866['name']&&_0x55b15a[_0x327e8b(0x1c7)]&&_0x45c866[_0x327e8b(0x1c7)]!==_0x55b15a['name']&&(_0x55b15a[_0x327e8b(0x208)]=_0x45c866[_0x327e8b(0x1c7)]);}['_isNegativeZero'](_0x2dfb8c){var _0x3c8184=_0x48a4d6;return 0x1/_0x2dfb8c===Number[_0x3c8184(0x186)];}[_0x48a4d6(0x216)](_0x1c3ea0){var _0x1e32b2=_0x48a4d6;!_0x1c3ea0[_0x1e32b2(0x193)]||!_0x1c3ea0[_0x1e32b2(0x193)][_0x1e32b2(0x256)]||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x1c2)||_0x1c3ea0[_0x1e32b2(0x19a)]===_0x1e32b2(0x22c)||_0x1c3ea0['type']==='Set'||_0x1c3ea0['props'][_0x1e32b2(0x191)](function(_0x40a6da,_0x13394f){var _0x562a58=_0x1e32b2,_0x44531b=_0x40a6da[_0x562a58(0x1c7)][_0x562a58(0x225)](),_0x2968e8=_0x13394f[_0x562a58(0x1c7)][_0x562a58(0x225)]();return _0x44531b<_0x2968e8?-0x1:_0x44531b>_0x2968e8?0x1:0x0;});}[_0x48a4d6(0x1d4)](_0x56e7f9,_0x418fc2){var _0x4a4ee2=_0x48a4d6;if(!(_0x418fc2[_0x4a4ee2(0x182)]||!_0x56e7f9[_0x4a4ee2(0x193)]||!_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)])){for(var _0x2c1744=[],_0x3fc3ea=[],_0x30318a=0x0,_0x4d5884=_0x56e7f9[_0x4a4ee2(0x193)][_0x4a4ee2(0x256)];_0x30318a<_0x4d5884;_0x30318a++){var _0x460aae=_0x56e7f9[_0x4a4ee2(0x193)][_0x30318a];_0x460aae[_0x4a4ee2(0x19a)]===_0x4a4ee2(0x1bf)?_0x2c1744[_0x4a4ee2(0x1bb)](_0x460aae):_0x3fc3ea['push'](_0x460aae);}if(!(!_0x3fc3ea[_0x4a4ee2(0x256)]||_0x2c1744[_0x4a4ee2(0x256)]<=0x1)){_0x56e7f9[_0x4a4ee2(0x193)]=_0x3fc3ea;var _0x1867c8={'functionsNode':!0x0,'props':_0x2c1744};this['_setNodeId'](_0x1867c8,_0x418fc2),this[_0x4a4ee2(0x1a4)](_0x1867c8,_0x418fc2),this['_setNodeExpandableState'](_0x1867c8),this['_setNodePermissions'](_0x1867c8,_0x418fc2),_0x1867c8['id']+='\\x20f',_0x56e7f9['props'][_0x4a4ee2(0x24c)](_0x1867c8);}}}[_0x48a4d6(0x24b)](_0x4799f5,_0x9981bb){}[_0x48a4d6(0x1e2)](_0x31c3e6){}[_0x48a4d6(0x1a5)](_0x1ce3ac){var _0x2d6895=_0x48a4d6;return Array[_0x2d6895(0x1ff)](_0x1ce3ac)||typeof _0x1ce3ac==_0x2d6895(0x187)&&this['_objectToString'](_0x1ce3ac)==='[object\\x20Array]';}['_setNodePermissions'](_0x2622cd,_0x4c9fd8){}[_0x48a4d6(0x168)](_0xabf9b8){var _0x112e95=_0x48a4d6;delete _0xabf9b8['_hasSymbolPropertyOnItsPath'],delete _0xabf9b8[_0x112e95(0x255)],delete _0xabf9b8[_0x112e95(0x1f4)];}[_0x48a4d6(0x1e0)](_0x269daa,_0xb12718){}}let _0x946099=new _0x3cd7a9(),_0x5a6b29={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x5522e8={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x574fde(_0x14c2a1,_0x168ac9,_0x3d9728,_0x1e1214,_0x372384,_0x4e2435){var _0x4c01d0=_0x48a4d6;let _0x5a21b2,_0x3edba8;try{_0x3edba8=_0x29b2e0(),_0x5a21b2=_0x32f390[_0x168ac9],!_0x5a21b2||_0x3edba8-_0x5a21b2['ts']>0x1f4&&_0x5a21b2['count']&&_0x5a21b2[_0x4c01d0(0x167)]/_0x5a21b2[_0x4c01d0(0x23c)]<0x64?(_0x32f390[_0x168ac9]=_0x5a21b2={'count':0x0,'time':0x0,'ts':_0x3edba8},_0x32f390[_0x4c01d0(0x1d5)]={}):_0x3edba8-_0x32f390[_0x4c01d0(0x1d5)]['ts']>0x32&&_0x32f390[_0x4c01d0(0x1d5)]['count']&&_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]/_0x32f390['hits'][_0x4c01d0(0x23c)]<0x64&&(_0x32f390[_0x4c01d0(0x1d5)]={});let _0x3bc375=[],_0x33f013=_0x5a21b2[_0x4c01d0(0x1be)]||_0x32f390[_0x4c01d0(0x1d5)]['reduceLimits']?_0x5522e8:_0x5a6b29,_0x3bdc83=_0x54adde=>{var _0x209541=_0x4c01d0;let _0x5a4229={};return _0x5a4229[_0x209541(0x193)]=_0x54adde[_0x209541(0x193)],_0x5a4229['elements']=_0x54adde[_0x209541(0x162)],_0x5a4229['strLength']=_0x54adde[_0x209541(0x1a8)],_0x5a4229[_0x209541(0x228)]=_0x54adde[_0x209541(0x228)],_0x5a4229['autoExpandLimit']=_0x54adde['autoExpandLimit'],_0x5a4229[_0x209541(0x211)]=_0x54adde[_0x209541(0x211)],_0x5a4229['sortProps']=!0x1,_0x5a4229[_0x209541(0x182)]=!_0x469026,_0x5a4229[_0x209541(0x160)]=0x1,_0x5a4229[_0x209541(0x1ab)]=0x0,_0x5a4229[_0x209541(0x229)]=_0x209541(0x177),_0x5a4229['rootExpression']=_0x209541(0x234),_0x5a4229[_0x209541(0x1c8)]=!0x0,_0x5a4229['autoExpandPreviousObjects']=[],_0x5a4229[_0x209541(0x16e)]=0x0,_0x5a4229[_0x209541(0x19d)]=!0x0,_0x5a4229['allStrLength']=0x0,_0x5a4229[_0x209541(0x199)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x5a4229;};for(var _0x17c8df=0x0;_0x17c8df<_0x372384[_0x4c01d0(0x256)];_0x17c8df++)_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'timeNode':_0x14c2a1==='time'||void 0x0},_0x372384[_0x17c8df],_0x3bdc83(_0x33f013),{}));if(_0x14c2a1==='trace'){let _0x25e4e2=Error[_0x4c01d0(0x1cd)];try{Error[_0x4c01d0(0x1cd)]=0x1/0x0,_0x3bc375[_0x4c01d0(0x1bb)](_0x946099[_0x4c01d0(0x204)]({'stackNode':!0x0},new Error()[_0x4c01d0(0x1e1)],_0x3bdc83(_0x33f013),{'strLength':0x1/0x0}));}finally{Error[_0x4c01d0(0x1cd)]=_0x25e4e2;}}return{'method':_0x4c01d0(0x1a6),'version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':_0x3bc375,'id':_0x168ac9,'context':_0x4e2435}]};}catch(_0x3b9703){return{'method':'log','version':_0x496bd9,'args':[{'ts':_0x3d9728,'session':_0x1e1214,'args':[{'type':'unknown','error':_0x3b9703&&_0x3b9703['message']}],'id':_0x168ac9,'context':_0x4e2435}]};}finally{try{if(_0x5a21b2&&_0x3edba8){let _0x5d1e94=_0x29b2e0();_0x5a21b2['count']++,_0x5a21b2['time']+=_0x267971(_0x3edba8,_0x5d1e94),_0x5a21b2['ts']=_0x5d1e94,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]++,_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]+=_0x267971(_0x3edba8,_0x5d1e94),_0x32f390['hits']['ts']=_0x5d1e94,(_0x5a21b2['count']>0x32||_0x5a21b2[_0x4c01d0(0x167)]>0x64)&&(_0x5a21b2[_0x4c01d0(0x1be)]=!0x0),(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x23c)]>0x3e8||_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x167)]>0x12c)&&(_0x32f390[_0x4c01d0(0x1d5)][_0x4c01d0(0x1be)]=!0x0);}}catch{}}}return _0x574fde;}((_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5ee3c2,_0x122092,_0x1d7929,_0x43984e,_0x5a70b1,_0x5f4168)=>{var _0x8af81c=_0x9d4878;if(_0x64dc38[_0x8af81c(0x1ef)])return _0x64dc38[_0x8af81c(0x1ef)];if(!H(_0x64dc38,_0x1d7929,_0x4cf6e3))return _0x64dc38['_console_ninja']={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x64dc38[_0x8af81c(0x1ef)];let _0x2907ad=b(_0x64dc38),_0x10052f=_0x2907ad[_0x8af81c(0x20c)],_0x1e6da0=_0x2907ad[_0x8af81c(0x253)],_0x44a8b7=_0x2907ad[_0x8af81c(0x22f)],_0xdc9ed={'hits':{},'ts':{}},_0x5e3ee9=X(_0x64dc38,_0x43984e,_0xdc9ed,_0x5ee3c2),_0x5e4ade=_0x304e2f=>{_0xdc9ed['ts'][_0x304e2f]=_0x1e6da0();},_0x56ef43=(_0x1314e3,_0x88bf94)=>{var _0x45434e=_0x8af81c;let _0xa765d2=_0xdc9ed['ts'][_0x88bf94];if(delete _0xdc9ed['ts'][_0x88bf94],_0xa765d2){let _0xfb9508=_0x10052f(_0xa765d2,_0x1e6da0());_0x16af11(_0x5e3ee9(_0x45434e(0x167),_0x1314e3,_0x44a8b7(),_0x33a203,[_0xfb9508],_0x88bf94));}},_0x36769f=_0x421346=>{var _0xab90ed=_0x8af81c,_0xa6990e;return _0x4cf6e3===_0xab90ed(0x1fb)&&_0x64dc38[_0xab90ed(0x175)]&&((_0xa6990e=_0x421346==null?void 0x0:_0x421346[_0xab90ed(0x246)])==null?void 0x0:_0xa6990e['length'])&&(_0x421346[_0xab90ed(0x246)][0x0][_0xab90ed(0x175)]=_0x64dc38[_0xab90ed(0x175)]),_0x421346;};_0x64dc38[_0x8af81c(0x1ef)]={'consoleLog':(_0x29d71f,_0x3dec54)=>{var _0x2a382d=_0x8af81c;_0x64dc38[_0x2a382d(0x1e6)]['log'][_0x2a382d(0x1c7)]!==_0x2a382d(0x1f7)&&_0x16af11(_0x5e3ee9('log',_0x29d71f,_0x44a8b7(),_0x33a203,_0x3dec54));},'consoleTrace':(_0x26df15,_0x6fd449)=>{var _0x143c31=_0x8af81c;_0x64dc38['console']['log'][_0x143c31(0x1c7)]!==_0x143c31(0x251)&&_0x16af11(_0x36769f(_0x5e3ee9('trace',_0x26df15,_0x44a8b7(),_0x33a203,_0x6fd449)));},'consoleTime':_0x3a6211=>{_0x5e4ade(_0x3a6211);},'consoleTimeEnd':(_0x3cfb15,_0x1295a8)=>{_0x56ef43(_0x1295a8,_0x3cfb15);},'autoLog':(_0x50cf13,_0x1117fc)=>{var _0x5c1e1b=_0x8af81c;_0x16af11(_0x5e3ee9(_0x5c1e1b(0x1a6),_0x1117fc,_0x44a8b7(),_0x33a203,[_0x50cf13]));},'autoLogMany':(_0x18e694,_0x221fd9)=>{_0x16af11(_0x5e3ee9('log',_0x18e694,_0x44a8b7(),_0x33a203,_0x221fd9));},'autoTrace':(_0x1edc5d,_0x34e8cc)=>{var _0x23d3c0=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x23d3c0(0x227),_0x34e8cc,_0x44a8b7(),_0x33a203,[_0x1edc5d])));},'autoTraceMany':(_0x75d9b4,_0x6a58b2)=>{var _0x22e692=_0x8af81c;_0x16af11(_0x36769f(_0x5e3ee9(_0x22e692(0x227),_0x75d9b4,_0x44a8b7(),_0x33a203,_0x6a58b2)));},'autoTime':(_0x4c1a9a,_0x49cdda,_0xcb7416)=>{_0x5e4ade(_0xcb7416);},'autoTimeEnd':(_0x513752,_0x2d9a88,_0x25f4ae)=>{_0x56ef43(_0x2d9a88,_0x25f4ae);},'coverage':_0x15bad9=>{_0x16af11({'method':'coverage','version':_0x5ee3c2,'args':[{'id':_0x15bad9}]});}};let _0x16af11=q(_0x64dc38,_0x5fb82,_0x3713b9,_0x395701,_0x4cf6e3,_0x5a70b1,_0x5f4168),_0x33a203=_0x64dc38[_0x8af81c(0x247)];return _0x64dc38['_console_ninja'];})(globalThis,_0x9d4878(0x217),_0x9d4878(0x1c1),_0x9d4878(0x205),_0x9d4878(0x1d7),_0x9d4878(0x237),_0x9d4878(0x233),_0x9d4878(0x22a),_0x9d4878(0x15e),_0x9d4878(0x1ca),_0x9d4878(0x1e5));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/

/***/ }),

/***/ "./node_modules/bootstrap/js/dist/base-component.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/base-component.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap base-component.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./dom/data.js */ "./node_modules/bootstrap/js/dist/dom/data.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./util/config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Data, EventHandler, Config, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap base-component.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const VERSION = '5.3.1';

  /**
   * Class definition
   */

  class BaseComponent extends Config {
    constructor(element, config) {
      super();
      element = index_js.getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      Data.set(this._element, this.constructor.DATA_KEY, this);
    }

    // Public
    dispose() {
      Data.remove(this._element, this.constructor.DATA_KEY);
      EventHandler.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      index_js.executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }

    // Static
    static getInstance(element) {
      return Data.get(index_js.getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === 'object' ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  }

  return BaseComponent;

}));
//# sourceMappingURL=base-component.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/data.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/data.js ***!
  \****************************************************/
/***/ (function(module) {

/*!
  * Bootstrap data.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/data.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * Constants
   */

  const elementMap = new Map();
  const data = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, new Map());
      }
      const instanceMap = elementMap.get(element);

      // make it clear we only want one instance per element
      // can be removed later when multiple key/instances are fine to be used
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        // eslint-disable-next-line no-console
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);

      // free up element references if there are no instances left for an element
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  return data;

}));
//# sourceMappingURL=data.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/event-handler.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/event-handler.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap event-handler.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/event-handler.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  const stripNameRegex = /\..*/;
  const stripUidRegex = /::\d+$/;
  const eventRegistry = {}; // Events storage
  let uidEvent = 1;
  const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  };
  const nativeEvents = new Set(['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll']);

  /**
   * Private methods
   */

  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, {
        delegateTarget: element
      });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let {
        target
      } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, {
            delegateTarget: target
          });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find(event => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === 'string';
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== 'string' || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);

    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in customEvents) {
      const wrapFunction = fn => {
        return function (event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ''));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, '');
    return customEvents[event] || event;
  }
  const EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== 'string' || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith('.');
      if (typeof callable !== 'undefined') {
        // Simplest case: handler is passed, remove that listener ONLY.
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, '');
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== 'string' || !element) {
        return null;
      }
      const $ = index_js.getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, {
        bubbles,
        cancelable: true
      }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch (_unused) {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }

  return EventHandler;

}));
//# sourceMappingURL=event-handler.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/manipulator.js":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/manipulator.js ***!
  \***********************************************************/
/***/ (function(module) {

/*!
  * Bootstrap manipulator.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/manipulator.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  function normalizeData(value) {
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === '' || value === 'null') {
      return null;
    }
    if (typeof value !== 'string') {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (_unused) {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, chr => `-${chr.toLowerCase()}`);
  }
  const Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter(key => key.startsWith('bs') && !key.startsWith('bsConfig'));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, '');
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };

  return Manipulator;

}));
//# sourceMappingURL=manipulator.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/dom/selector-engine.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/dom/selector-engine.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap selector-engine.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap dom/selector-engine.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const getSelector = element => {
    let selector = element.getAttribute('data-bs-target');
    if (!selector || selector === '#') {
      let hrefAttribute = element.getAttribute('href');

      // The only valid content that could double as a selector are IDs or classes,
      // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
      // `document.querySelector` will rightfully complain it is invalid.
      // See https://github.com/twbs/bootstrap/issues/32273
      if (!hrefAttribute || !hrefAttribute.includes('#') && !hrefAttribute.startsWith('.')) {
        return null;
      }

      // Just in case some CMS puts out a full URL with the anchor appended
      if (hrefAttribute.includes('#') && !hrefAttribute.startsWith('#')) {
        hrefAttribute = `#${hrefAttribute.split('#')[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== '#' ? hrefAttribute.trim() : null;
    }
    return index_js.parseSelector(selector);
  };
  const SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter(child => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map(selector => `${selector}:not([tabindex^="-"])`).join(',');
      return this.find(focusables, element).filter(el => !index_js.isDisabled(el) && index_js.isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };

  return SelectorEngine;

}));
//# sourceMappingURL=selector-engine.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/modal.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/modal.js ***!
  \*************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap modal.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap modal.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'modal';
  const DATA_KEY = 'bs.modal';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const ESCAPE_KEY = 'Escape';
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DISMISS = `click.dismiss${EVENT_KEY}`;
  const EVENT_MOUSEDOWN_DISMISS = `mousedown.dismiss${EVENT_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const CLASS_NAME_OPEN = 'modal-open';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_STATIC = 'modal-static';
  const OPEN_SELECTOR = '.modal.show';
  const SELECTOR_DIALOG = '.modal-dialog';
  const SELECTOR_MODAL_BODY = '.modal-body';
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="modal"]';
  const Default = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    focus: 'boolean',
    keyboard: 'boolean'
  };

  /**
   * Class definition
   */

  class Modal extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._dialog = SelectorEngine.findOne(SELECTOR_DIALOG, this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new ScrollBarHelper();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown || this._isTransitioning) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._isTransitioning = true;
      this._scrollBar.hide();
      document.body.classList.add(CLASS_NAME_OPEN);
      this._adjustDialog();
      this._backdrop.show(() => this._showElement(relatedTarget));
    }
    hide() {
      if (!this._isShown || this._isTransitioning) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._isShown = false;
      this._isTransitioning = true;
      this._focustrap.deactivate();
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
    }
    dispose() {
      EventHandler.off(window, EVENT_KEY);
      EventHandler.off(this._dialog, EVENT_KEY);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }

    // Private
    _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        // 'static' option will be translated to true, and booleans will keep their value,
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _showElement(relatedTarget) {
      // try to append dynamic modal
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = 'block';
      this._element.removeAttribute('aria-hidden');
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.scrollTop = 0;
      const modalBody = SelectorEngine.findOne(SELECTOR_MODAL_BODY, this._dialog);
      if (modalBody) {
        modalBody.scrollTop = 0;
      }
      index_js.reflow(this._element);
      this._element.classList.add(CLASS_NAME_SHOW);
      const transitionComplete = () => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(transitionComplete, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      });
      EventHandler.on(window, EVENT_RESIZE, () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      EventHandler.on(this._element, EVENT_MOUSEDOWN_DISMISS, event => {
        // a bad trick to segregate clicks that may start inside dialog but end outside, and avoid listen to scrollbar clicks
        EventHandler.one(this._element, EVENT_CLICK_DISMISS, event2 => {
          if (this._element !== event.target || this._element !== event2.target) {
            return;
          }
          if (this._config.backdrop === 'static') {
            this._triggerBackdropTransition();
            return;
          }
          if (this._config.backdrop) {
            this.hide();
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = 'none';
      this._element.setAttribute('aria-hidden', true);
      this._element.removeAttribute('aria-modal');
      this._element.removeAttribute('role');
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(CLASS_NAME_OPEN);
        this._resetAdjustments();
        this._scrollBar.reset();
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      });
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_FADE);
    }
    _triggerBackdropTransition() {
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      if (hideEvent.defaultPrevented) {
        return;
      }
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const initialOverflowY = this._element.style.overflowY;
      // return if the following background transition hasn't yet completed
      if (initialOverflowY === 'hidden' || this._element.classList.contains(CLASS_NAME_STATIC)) {
        return;
      }
      if (!isModalOverflowing) {
        this._element.style.overflowY = 'hidden';
      }
      this._element.classList.add(CLASS_NAME_STATIC);
      this._queueCallback(() => {
        this._element.classList.remove(CLASS_NAME_STATIC);
        this._queueCallback(() => {
          this._element.style.overflowY = initialOverflowY;
        }, this._dialog);
      }, this._dialog);
      this._element.focus();
    }

    /**
     * The following methods are used to handle overflowing modals
     */

    _adjustDialog() {
      const isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;
      const scrollbarWidth = this._scrollBar.getWidth();
      const isBodyOverflowing = scrollbarWidth > 0;
      if (isBodyOverflowing && !isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingLeft' : 'paddingRight';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
      if (!isBodyOverflowing && isModalOverflowing) {
        const property = index_js.isRTL() ? 'paddingRight' : 'paddingLeft';
        this._element.style[property] = `${scrollbarWidth}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    }

    // Static
    static jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        const data = Modal.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](relatedTarget);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    EventHandler.one(target, EVENT_SHOW, showEvent => {
      if (showEvent.defaultPrevented) {
        // only register focus restorer if modal will actually get shown
        return;
      }
      EventHandler.one(target, EVENT_HIDDEN, () => {
        if (index_js.isVisible(this)) {
          this.focus();
        }
      });
    });

    // avoid conflict when clicking modal toggler while another one is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen) {
      Modal.getInstance(alreadyOpen).hide();
    }
    const data = Modal.getOrCreateInstance(target);
    data.toggle(this);
  });
  componentFunctions_js.enableDismissTrigger(Modal);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Modal);

  return Modal;

}));
//# sourceMappingURL=modal.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/offcanvas.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/offcanvas.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap offcanvas.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ./base-component.js */ "./node_modules/bootstrap/js/dist/base-component.js"), __webpack_require__(/*! ./dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./util/backdrop.js */ "./node_modules/bootstrap/js/dist/util/backdrop.js"), __webpack_require__(/*! ./util/component-functions.js */ "./node_modules/bootstrap/js/dist/util/component-functions.js"), __webpack_require__(/*! ./util/focustrap.js */ "./node_modules/bootstrap/js/dist/util/focustrap.js"), __webpack_require__(/*! ./util/index.js */ "./node_modules/bootstrap/js/dist/util/index.js"), __webpack_require__(/*! ./util/scrollbar.js */ "./node_modules/bootstrap/js/dist/util/scrollbar.js")) :
  0;
})(this, (function (BaseComponent, EventHandler, SelectorEngine, Backdrop, componentFunctions_js, FocusTrap, index_js, ScrollBarHelper) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap offcanvas.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'offcanvas';
  const DATA_KEY = 'bs.offcanvas';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
  const ESCAPE_KEY = 'Escape';
  const CLASS_NAME_SHOW = 'show';
  const CLASS_NAME_SHOWING = 'showing';
  const CLASS_NAME_HIDING = 'hiding';
  const CLASS_NAME_BACKDROP = 'offcanvas-backdrop';
  const OPEN_SELECTOR = '.offcanvas.show';
  const EVENT_SHOW = `show${EVENT_KEY}`;
  const EVENT_SHOWN = `shown${EVENT_KEY}`;
  const EVENT_HIDE = `hide${EVENT_KEY}`;
  const EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY}`;
  const EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  const EVENT_RESIZE = `resize${EVENT_KEY}`;
  const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  const EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY}`;
  const SELECTOR_DATA_TOGGLE = '[data-bs-toggle="offcanvas"]';
  const Default = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    scroll: 'boolean'
  };

  /**
   * Class definition
   */

  class Offcanvas extends BaseComponent {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = EventHandler.trigger(this._element, EVENT_SHOW, {
        relatedTarget
      });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new ScrollBarHelper().hide();
      }
      this._element.setAttribute('aria-modal', true);
      this._element.setAttribute('role', 'dialog');
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        EventHandler.trigger(this._element, EVENT_SHOWN, {
          relatedTarget
        });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = EventHandler.trigger(this._element, EVENT_HIDE);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW, CLASS_NAME_HIDING);
        this._element.removeAttribute('aria-modal');
        this._element.removeAttribute('role');
        if (!this._config.scroll) {
          new ScrollBarHelper().reset();
        }
        EventHandler.trigger(this._element, EVENT_HIDDEN);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }

    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === 'static') {
          EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };

      // 'static' option will be translated to true, and booleans will keep their value
      const isVisible = Boolean(this._config.backdrop);
      return new Backdrop({
        className: CLASS_NAME_BACKDROP,
        isVisible,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new FocusTrap({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, event => {
        if (event.key !== ESCAPE_KEY) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }

    // Static
    static jQueryInterface(config) {
      return this.each(function () {
        const data = Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== 'string') {
          return;
        }
        if (data[config] === undefined || config.startsWith('_') || config === 'constructor') {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  }

  /**
   * Data API implementation
   */

  EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (event) {
    const target = SelectorEngine.getElementFromSelector(this);
    if (['A', 'AREA'].includes(this.tagName)) {
      event.preventDefault();
    }
    if (index_js.isDisabled(this)) {
      return;
    }
    EventHandler.one(target, EVENT_HIDDEN, () => {
      // focus on trigger when it is closed
      if (index_js.isVisible(this)) {
        this.focus();
      }
    });

    // avoid conflict when clicking a toggler of an offcanvas, while another is open
    const alreadyOpen = SelectorEngine.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of SelectorEngine.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  EventHandler.on(window, EVENT_RESIZE, () => {
    for (const element of SelectorEngine.find('[aria-modal][class*=show][class*=offcanvas-]')) {
      if (getComputedStyle(element).position !== 'fixed') {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  componentFunctions_js.enableDismissTrigger(Offcanvas);

  /**
   * jQuery
   */

  index_js.defineJQueryPlugin(Offcanvas);

  return Offcanvas;

}));
//# sourceMappingURL=offcanvas.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/backdrop.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/backdrop.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap backdrop.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (EventHandler, Config, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/backdrop.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'backdrop';
  const CLASS_NAME_FADE = 'fade';
  const CLASS_NAME_SHOW = 'show';
  const EVENT_MOUSEDOWN = `mousedown.bs.${NAME}`;
  const Default = {
    className: 'modal-backdrop',
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: 'body' // give the choice to place backdrop under different elements
  };

  const DefaultType = {
    className: 'string',
    clickCallback: '(function|null)',
    isAnimated: 'boolean',
    isVisible: 'boolean',
    rootElement: '(element|string)'
  };

  /**
   * Class definition
   */

  class Backdrop extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    show(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        index_js.reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        index_js.execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        index_js.execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW);
      this._emulateAnimation(() => {
        this.dispose();
        index_js.execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      EventHandler.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }

    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement('div');
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      // use getElement() with the default "body" to get a fresh Element on each instantiation
      config.rootElement = index_js.getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      EventHandler.on(element, EVENT_MOUSEDOWN, () => {
        index_js.execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      index_js.executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  }

  return Backdrop;

}));
//# sourceMappingURL=backdrop.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/component-functions.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/component-functions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

/*!
  * Bootstrap component-functions.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (exports, EventHandler, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/component-functions.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const enableDismissTrigger = (component, method = 'hide') => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    EventHandler.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function (event) {
      if (['A', 'AREA'].includes(this.tagName)) {
        event.preventDefault();
      }
      if (index_js.isDisabled(this)) {
        return;
      }
      const target = SelectorEngine.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);

      // Method argument is left, for Alert and only, as it doesn't implement the 'hide' method
      instance[method]();
    });
  };

  exports.enableDismissTrigger = enableDismissTrigger;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=component-functions.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/config.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/config.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap config.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Manipulator, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/config.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Class definition
   */

  class Config {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = index_js.isElement(element) ? Manipulator.getDataAttribute(element, 'config') : {}; // try to parse

      return {
        ...this.constructor.Default,
        ...(typeof jsonConfig === 'object' ? jsonConfig : {}),
        ...(index_js.isElement(element) ? Manipulator.getDataAttributes(element) : {}),
        ...(typeof config === 'object' ? config : {})
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = index_js.isElement(value) ? 'element' : index_js.toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
      }
    }
  }

  return Config;

}));
//# sourceMappingURL=config.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/focustrap.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/focustrap.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap focustrap.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/event-handler.js */ "./node_modules/bootstrap/js/dist/dom/event-handler.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./config.js */ "./node_modules/bootstrap/js/dist/util/config.js")) :
  0;
})(this, (function (EventHandler, SelectorEngine, Config) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/focustrap.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const NAME = 'focustrap';
  const DATA_KEY = 'bs.focustrap';
  const EVENT_KEY = `.${DATA_KEY}`;
  const EVENT_FOCUSIN = `focusin${EVENT_KEY}`;
  const EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY}`;
  const TAB_KEY = 'Tab';
  const TAB_NAV_FORWARD = 'forward';
  const TAB_NAV_BACKWARD = 'backward';
  const Default = {
    autofocus: true,
    trapElement: null // The element to trap focus inside of
  };

  const DefaultType = {
    autofocus: 'boolean',
    trapElement: 'element'
  };

  /**
   * Class definition
   */

  class FocusTrap extends Config {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }

    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }

    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      EventHandler.off(document, EVENT_KEY); // guard against infinite focus loop
      EventHandler.on(document, EVENT_FOCUSIN, event => this._handleFocusin(event));
      EventHandler.on(document, EVENT_KEYDOWN_TAB, event => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      EventHandler.off(document, EVENT_KEY);
    }

    // Private
    _handleFocusin(event) {
      const {
        trapElement
      } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = SelectorEngine.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  }

  return FocusTrap;

}));
//# sourceMappingURL=focustrap.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/index.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/index.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports) {

/*!
  * Bootstrap index.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? factory(exports) :
  0;
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/index.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */

  const MAX_UID = 1000000;
  const MILLISECONDS_MULTIPLIER = 1000;
  const TRANSITION_END = 'transitionend';

  /**
   * Properly escape IDs selectors to handle weird IDs
   * @param {string} selector
   * @returns {string}
   */
  const parseSelector = selector => {
    if (selector && window.CSS && window.CSS.escape) {
      // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };

  // Shout-out Angus Croll (https://goo.gl/pxwQGp)
  const toType = object => {
    if (object === null || object === undefined) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };

  /**
   * Public Util API
   */

  const getUID = prefix => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  const getTransitionDurationFromElement = element => {
    if (!element) {
      return 0;
    }

    // Get transition-duration of the element
    let {
      transitionDuration,
      transitionDelay
    } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);

    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }

    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(',')[0];
    transitionDelay = transitionDelay.split(',')[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  const triggerTransitionEnd = element => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  const isElement = object => {
    if (!object || typeof object !== 'object') {
      return false;
    }
    if (typeof object.jquery !== 'undefined') {
      object = object[0];
    }
    return typeof object.nodeType !== 'undefined';
  };
  const getElement = object => {
    // it's a jQuery object or a node element
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === 'string' && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  const isVisible = element => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue('visibility') === 'visible';
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest('details:not([open])');
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest('summary');
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  const isDisabled = element => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains('disabled')) {
      return true;
    }
    if (typeof element.disabled !== 'undefined') {
      return element.disabled;
    }
    return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
  };
  const findShadowRoot = element => {
    if (!document.documentElement.attachShadow) {
      return null;
    }

    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === 'function') {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }

    // when we don't find a shadow root
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  const noop = () => {};

  /**
   * Trick to restart an element's animation
   *
   * @param {HTMLElement} element
   * @return void
   *
   * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
   */
  const reflow = element => {
    element.offsetHeight; // eslint-disable-line no-unused-expressions
  };

  const getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery')) {
      return window.jQuery;
    }
    return null;
  };
  const DOMContentLoadedCallbacks = [];
  const onDOMContentLoaded = callback => {
    if (document.readyState === 'loading') {
      // add listener on the first call when the document is in loading state
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener('DOMContentLoaded', () => {
          for (const callback of DOMContentLoadedCallbacks) {
            callback();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  const isRTL = () => document.documentElement.dir === 'rtl';
  const defineJQueryPlugin = plugin => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      /* istanbul ignore if */
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  const execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === 'function' ? possibleCallback(...args) : defaultValue;
  };
  const executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({
      target
    }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };

  /**
   * Return the previous/next element of a list.
   *
   * @param {array} list    The list of elements
   * @param activeElement   The active element
   * @param shouldGetNext   Choose to get next or previous element
   * @param isCycleAllowed
   * @return {Element|elem} The proper element
   */
  const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);

    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  exports.defineJQueryPlugin = defineJQueryPlugin;
  exports.execute = execute;
  exports.executeAfterTransition = executeAfterTransition;
  exports.findShadowRoot = findShadowRoot;
  exports.getElement = getElement;
  exports.getNextActiveElement = getNextActiveElement;
  exports.getTransitionDurationFromElement = getTransitionDurationFromElement;
  exports.getUID = getUID;
  exports.getjQuery = getjQuery;
  exports.isDisabled = isDisabled;
  exports.isElement = isElement;
  exports.isRTL = isRTL;
  exports.isVisible = isVisible;
  exports.noop = noop;
  exports.onDOMContentLoaded = onDOMContentLoaded;
  exports.parseSelector = parseSelector;
  exports.reflow = reflow;
  exports.toType = toType;
  exports.triggerTransitionEnd = triggerTransitionEnd;

  Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

}));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/bootstrap/js/dist/util/scrollbar.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap/js/dist/util/scrollbar.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
  * Bootstrap scrollbar.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
   true ? module.exports = factory(__webpack_require__(/*! ../dom/manipulator.js */ "./node_modules/bootstrap/js/dist/dom/manipulator.js"), __webpack_require__(/*! ../dom/selector-engine.js */ "./node_modules/bootstrap/js/dist/dom/selector-engine.js"), __webpack_require__(/*! ./index.js */ "./node_modules/bootstrap/js/dist/util/index.js")) :
  0;
})(this, (function (Manipulator, SelectorEngine, index_js) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Bootstrap util/scrollBar.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
   * --------------------------------------------------------------------------
   */


  /**
   * Constants
   */

  const SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  const SELECTOR_STICKY_CONTENT = '.sticky-top';
  const PROPERTY_PADDING = 'padding-right';
  const PROPERTY_MARGIN = 'margin-right';

  /**
   * Class definition
   */

  class ScrollBarHelper {
    constructor() {
      this._element = document.body;
    }

    // Public
    getWidth() {
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      // give padding to element to balance the hidden scrollbar width
      this._setElementAttributes(this._element, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      // trick: We adjust positive paddingRight and negative marginRight to sticky-top elements to keep showing fullwidth
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, calculatedValue => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, calculatedValue => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow');
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }

    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow');
      this._element.style.overflow = 'hidden';
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = element => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        Manipulator.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = element => {
        const value = Manipulator.getDataAttribute(element, styleProperty);
        // We only want to remove the property if the value is `null`; the value can also be zero
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        Manipulator.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (index_js.isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of SelectorEngine.find(selector, this._element)) {
        callBack(sel);
      }
    }
  }

  return ScrollBarHelper;

}));
//# sourceMappingURL=scrollbar.js.map


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = target._gsap.x ? target._gsap[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (target._gsap.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && properties.split(",").forEach(function (p) {
    return saver.save(p);
  });
  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
    parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    target.style[prop] = start;
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/Observer.js":
/*!***************************************!*\
  !*** ./node_modules/gsap/Observer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Observer: () => (/* binding */ Observer),
/* harmony export */   _getProxyProp: () => (/* binding */ _getProxyProp),
/* harmony export */   _getScrollFunc: () => (/* binding */ _getScrollFunc),
/* harmony export */   _getTarget: () => (/* binding */ _getTarget),
/* harmony export */   _getVelocityProp: () => (/* binding */ _getVelocityProp),
/* harmony export */   _horizontal: () => (/* binding */ _horizontal),
/* harmony export */   _isViewport: () => (/* binding */ _isViewport),
/* harmony export */   _proxies: () => (/* binding */ _proxies),
/* harmony export */   _scrollers: () => (/* binding */ _scrollers),
/* harmony export */   _vertical: () => (/* binding */ _vertical),
/* harmony export */   "default": () => (/* binding */ Observer)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _clamp,
    _win,
    _doc,
    _docEl,
    _body,
    _isTouch,
    _pointerType,
    ScrollTrigger,
    _root,
    _normalizer,
    _eventTypes,
    _context,
    _getGSAP = function _getGSAP() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _startup = 1,
    _observers = [],
    _scrollers = [],
    _proxies = [],
    _getTime = Date.now,
    _bridge = function _bridge(name, value) {
  return value;
},
    _integrate = function _integrate() {
  var core = ScrollTrigger.core,
      data = core.bridge || {},
      scrollers = core._scrollers,
      proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;

  _bridge = function _bridge(name, value) {
    return data[name](value);
  };
},
    _getProxyProp = function _getProxyProp(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
},
    _isViewport = function _isViewport(el) {
  return !!~_root.indexOf(el);
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _scrollLeft = "scrollLeft",
    _scrollTop = "scrollTop",
    _onScroll = function _onScroll() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
},
    _scrollCacheFunc = function _scrollCacheFunc(f, doNotCache) {
  var cachingFunc = function cachingFunc(value) {
    // since reading the scrollTop/scrollLeft/pageOffsetY/pageOffsetX can trigger a layout, this function allows us to cache the value so it only gets read fresh after a "scroll" event fires (or while we're refreshing because that can lengthen the page and alter the scroll position). when "soft" is true, that means don't actually set the scroll, but cache the new value instead (useful in ScrollSmoother)
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual"); // otherwise the new position will get overwritten by the browser onload.

      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0); //TODO: iOS Bug: if you allow it to go to 0, Safari can start to report super strange (wildly inaccurate) touch positions!

      f(value);
      cachingFunc.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value); // set scroll (notify ScrollTrigger so it can dispatch a "scrollStart" event if necessary
    } else if (doNotCache || _scrollers.cache !== cachingFunc.cacheID || _bridge("ref")) {
      cachingFunc.cacheID = _scrollers.cache;
      cachingFunc.v = f();
    }

    return cachingFunc.v + cachingFunc.offset;
  };

  cachingFunc.offset = 0;
  return f && cachingFunc;
},
    _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
},
    _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function (value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
},
    _getTarget = function _getTarget(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
},
    _getScrollFunc = function _getScrollFunc(element, _ref) {
  var s = _ref.s,
      sc = _ref.sc;
  // we store the scroller functions in an alternating sequenced Array like [element, verticalScrollFunc, horizontalScrollFunc, ...] so that we can minimize memory, maximize performance, and we also record the last position as a ".rec" property in order to revert to that after refreshing to ensure things don't shift around.
  _isViewport(element) && (element = _doc.scrollingElement || _docEl);

  var i = _scrollers.indexOf(element),
      offset = sc === _vertical.sc ? 1 : 2;

  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll); // clear the cache when a scroll occurs

  var prev = _scrollers[i + offset],
      func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function (value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth"); // only set it the first time (don't reset every time a scrollFunc is requested because perhaps it happens during a refresh() when it's disabled in ScrollTrigger.

  return func;
},
    _getVelocityProp = function _getVelocityProp(value, minTimeRefresh, useDelta) {
  var v1 = value,
      v2 = value,
      t1 = _getTime(),
      t2 = t1,
      min = minTimeRefresh || 50,
      dropToZeroTime = Math.max(500, min * 3),
      update = function update(value, force) {
    var t = _getTime();

    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value;
    } else {
      // not totally necessary, but makes it a bit more accurate by adjusting the v1 value according to the new slope. This way we're not just ignoring the incoming data. Removing for now because it doesn't seem to make much practical difference and it's probably not worth the kb.
      v1 = v2 + (value - v2) / (t - t2) * (t1 - t2);
    }
  },
      reset = function reset() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  },
      getVelocity = function getVelocity(latestValue) {
    var tOld = t2,
        vOld = v2,
        t = _getTime();

    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1000;
  };

  return {
    update: update,
    reset: reset,
    getVelocity: getVelocity
  };
},
    _getEvent = function _getEvent(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
},
    _getAbsoluteMax = function _getAbsoluteMax(a) {
  var max = Math.max.apply(Math, a),
      min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
},
    _setScrollTrigger = function _setScrollTrigger() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
},
    _initCore = function _initCore(core) {
  gsap = core || _getGSAP();

  if (gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;

    _context = gsap.core.context || function () {};

    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse"; // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function () {
      return _startup = 0;
    }, 500);

    _setScrollTrigger();

    _coreInitted = 1;
  }

  return _coreInitted;
};

_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /*#__PURE__*/function () {
  function Observer(vars) {
    this.init(vars);
  }

  var _proto = Observer.prototype;

  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance,
        dragMinimum = vars.dragMinimum,
        type = vars.type,
        target = vars.target,
        lineHeight = vars.lineHeight,
        debounce = vars.debounce,
        preventDefault = vars.preventDefault,
        onStop = vars.onStop,
        onStopDelay = vars.onStopDelay,
        ignore = vars.ignore,
        wheelSpeed = vars.wheelSpeed,
        event = vars.event,
        onDragStart = vars.onDragStart,
        onDragEnd = vars.onDragEnd,
        onDrag = vars.onDrag,
        onPress = vars.onPress,
        onRelease = vars.onRelease,
        onRight = vars.onRight,
        onLeft = vars.onLeft,
        onUp = vars.onUp,
        onDown = vars.onDown,
        onChangeX = vars.onChangeX,
        onChangeY = vars.onChangeY,
        onChange = vars.onChange,
        onToggleX = vars.onToggleX,
        onToggleY = vars.onToggleY,
        onHover = vars.onHover,
        onHoverEnd = vars.onHoverEnd,
        onMove = vars.onMove,
        ignoreCheck = vars.ignoreCheck,
        isNormalizer = vars.isNormalizer,
        onGestureStart = vars.onGestureStart,
        onGestureEnd = vars.onGestureEnd,
        onWheel = vars.onWheel,
        onEnable = vars.onEnable,
        onDisable = vars.onDisable,
        onClick = vars.onClick,
        scrollSpeed = vars.scrollSpeed,
        capture = vars.capture,
        allowClicks = vars.allowClicks,
        lockAxis = vars.lockAxis,
        onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22); // note: browser may report "normal", so default to 22.

    var id,
        onStopDelayedCall,
        dragged,
        moved,
        wheeled,
        locked,
        axis,
        self = this,
        prevDeltaX = 0,
        prevDeltaY = 0,
        scrollFuncX = _getScrollFunc(target, _horizontal),
        scrollFuncY = _getScrollFunc(target, _vertical),
        scrollX = scrollFuncX(),
        scrollY = scrollFuncY(),
        limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown",
        // for devices that accommodate mouse events and touch events, we need to distinguish.
    isViewport = _isViewport(target),
        ownerDoc = target.ownerDocument || _doc,
        deltaX = [0, 0, 0],
        // wheel, scroll, pointer/touch
    deltaY = [0, 0, 0],
        onClickTime = 0,
        clickCapture = function clickCapture() {
      return onClickTime = _getTime();
    },
        _ignoreCheck = function _ignoreCheck(e, isPointerOrTouch) {
      return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    },
        onStopFunc = function onStopFunc() {
      self._vx.reset();

      self._vy.reset();

      onStopDelayedCall.pause();
      onStop && onStop(self);
    },
        update = function update() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX),
          dy = self.deltaY = _getAbsoluteMax(deltaY),
          changedX = Math.abs(dx) >= tolerance,
          changedY = Math.abs(dy) >= tolerance;

      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY); // in ScrollTrigger.normalizeScroll(), we need to know if it was touch/pointer so we need access to the deltaX/deltaY Arrays before we clear them out.

      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }

      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }

      if (moved || dragged) {
        onMove && onMove(self);

        if (dragged) {
          onDrag(self);
          dragged = false;
        }

        moved = false;
      }

      locked && !(locked = false) && onLockAxis && onLockAxis(self);

      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }

      id = 0;
    },
        onDelta = function onDelta(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;

      self._vx.update(x);

      self._vy.update(y);

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        onTouchOrPointerDelta = function onTouchOrPointerDelta(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }

      if (axis !== "y") {
        deltaX[2] += x;

        self._vx.update(x, true); // update the velocity as frequently as possible instead of in the debounced function so that very quick touch-scrolls (flicks) feel natural. If it's the mouse/touch/pointer, force it so that we get snappy/accurate momentum scroll.

      }

      if (axis !== "x") {
        deltaY[2] += y;

        self._vy.update(y, true);
      }

      debounce ? id || (id = requestAnimationFrame(update)) : update();
    },
        _onDrag = function _onDrag(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y,
          isDragging = self.isDragging;
      self.x = x;
      self.y = y;

      if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
        onDrag && (dragged = true);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
        isDragging || onDragStart && onDragStart(self);
      }
    },
        _onPress = self.onPress = function (e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }

      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e); // note: may need to preventDefault(?) Won't side-scroll on iOS Safari if we do, though.

      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;

      self._vx.reset(); // otherwise the t2 may be stale if the user touches and flicks super fast and releases in less than 2 requestAnimationFrame ticks, causing velocity to be 0.


      self._vy.reset();

      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);

      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    },
        _onRelease = self.onRelease = function (e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }

      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);

      var isTrackingDrag = !isNaN(self.y - self.startY),
          wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3),
          // some touch devices need some wiggle room in terms of sensing clicks - the finger may move a few pixels.
      eventData = _getEvent(e);

      if (!wasDragging && isTrackingDrag) {
        self._vx.reset();

        self._vy.reset();

        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function () {
            // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                //some browsers (like mobile Safari) don't properly trigger the click event
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }

      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, wasDragging);
    },
        _onGestureStart = function _onGestureStart(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    },
        _onGestureEnd = function _onGestureEnd() {
      return (self.isGesturing = false) || onGestureEnd(self);
    },
        onScroll = function onScroll(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = scrollFuncX(),
          y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    },
        _onWheel = function _onWheel(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    },
        _onMove = function _onMove(e) {
      if (_ignoreCheck(e)) {
        return;
      }

      var x = e.clientX,
          y = e.clientY,
          dx = x - self.x,
          dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    },
        _onHover = function _onHover(e) {
      self.event = e;
      onHover(self);
    },
        _onHoverEnd = function _onHoverEnd(e) {
      self.event = e;
      onHoverEnd(self);
    },
        _onClick = function _onClick(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };

    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;

    _context(this);

    self.enable = function (e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, preventDefault, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, preventDefault, capture);

        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, preventDefault, capture);

          _addListener(ownerDoc, _eventTypes[2], _onRelease);

          _addListener(ownerDoc, _eventTypes[3], _onRelease);

          allowClicks && _addListener(target, "click", clickCapture, false, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }

        self.isEnabled = true;
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }

      return self;
    };

    self.disable = function () {
      if (self.isEnabled) {
        // only remove the _onScroll listener if there aren't any others that rely on the functionality.
        _observers.filter(function (o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);

        if (self.isPressed) {
          self._vx.reset();

          self._vy.reset();

          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }

        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);

        _removeListener(target, "wheel", _onWheel, capture);

        _removeListener(target, _eventTypes[0], _onPress, capture);

        _removeListener(ownerDoc, _eventTypes[2], _onRelease);

        _removeListener(ownerDoc, _eventTypes[3], _onRelease);

        _removeListener(target, "click", clickCapture, true);

        _removeListener(target, "click", _onClick);

        _removeListener(ownerDoc, "gesturestart", _onGestureStart);

        _removeListener(ownerDoc, "gestureend", _onGestureEnd);

        _removeListener(target, _pointerType + "enter", _onHover);

        _removeListener(target, _pointerType + "leave", _onHoverEnd);

        _removeListener(target, _pointerType + "move", _onMove);

        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };

    self.kill = self.revert = function () {
      self.disable();

      var i = _observers.indexOf(self);

      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };

    _observers.push(self);

    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };

  _createClass(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);

  return Observer;
}();
Observer.version = "3.12.2";

Observer.create = function (vars) {
  return new Observer(vars);
};

Observer.register = _initCore;

Observer.getAll = function () {
  return _observers.slice();
};

Observer.getById = function (id) {
  return _observers.filter(function (o) {
    return o.vars.id === id;
  })[0];
};

_getGSAP() && gsap.registerPlugin(Observer);


/***/ }),

/***/ "./node_modules/gsap/ScrollToPlugin.js":
/*!*********************************************!*\
  !*** ./node_modules/gsap/ScrollToPlugin.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollToPlugin: () => (/* binding */ ScrollToPlugin),
/* harmony export */   "default": () => (/* binding */ ScrollToPlugin)
/* harmony export */ });
/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _coreInitted,
    _window,
    _docEl,
    _body,
    _toArray,
    _config,
    ScrollTrigger,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _max = function _max(element, axis) {
  var dim = axis === "x" ? "Width" : "Height",
      scroll = "scroll" + dim,
      client = "client" + dim;
  return element === _window || element === _docEl || element === _body ? Math.max(_docEl[scroll], _body[scroll]) - (_window["inner" + dim] || _docEl[client] || _body[client]) : element[scroll] - element["offset" + dim];
},
    _buildGetter = function _buildGetter(e, axis) {
  //pass in an element and an axis ("x" or "y") and it'll return a getter function for the scroll position of that element (like scrollTop or scrollLeft, although if the element is the window, it'll use the pageXOffset/pageYOffset or the documentElement's scrollTop/scrollLeft or document.body's. Basically this streamlines things and makes a very fast getter across browsers.
  var p = "scroll" + (axis === "x" ? "Left" : "Top");

  if (e === _window) {
    if (e.pageXOffset != null) {
      p = "page" + axis.toUpperCase() + "Offset";
    } else {
      e = _docEl[p] != null ? _docEl : _body;
    }
  }

  return function () {
    return e[p];
  };
},
    _clean = function _clean(value, index, target, targets) {
  _isFunction(value) && (value = value(index, target, targets));

  if (typeof value !== "object") {
    return _isString(value) && value !== "max" && value.charAt(1) !== "=" ? {
      x: value,
      y: value
    } : {
      y: value
    }; //if we don't receive an object as the parameter, assume the user intends "y".
  } else if (value.nodeType) {
    return {
      y: value,
      x: value
    };
  } else {
    var result = {},
        p;

    for (p in value) {
      result[p] = p !== "onAutoKill" && _isFunction(value[p]) ? value[p](index, target, targets) : value[p];
    }

    return result;
  }
},
    _getOffset = function _getOffset(element, container) {
  element = _toArray(element)[0];

  if (!element || !element.getBoundingClientRect) {
    return console.warn("scrollTo target doesn't exist. Using 0") || {
      x: 0,
      y: 0
    };
  }

  var rect = element.getBoundingClientRect(),
      isRoot = !container || container === _window || container === _body,
      cRect = isRoot ? {
    top: _docEl.clientTop - (_window.pageYOffset || _docEl.scrollTop || _body.scrollTop || 0),
    left: _docEl.clientLeft - (_window.pageXOffset || _docEl.scrollLeft || _body.scrollLeft || 0)
  } : container.getBoundingClientRect(),
      offsets = {
    x: rect.left - cRect.left,
    y: rect.top - cRect.top
  };

  if (!isRoot && container) {
    //only add the current scroll position if it's not the window/body.
    offsets.x += _buildGetter(container, "x")();
    offsets.y += _buildGetter(container, "y")();
  }

  return offsets;
},
    _parseVal = function _parseVal(value, target, axis, currentVal, offset) {
  return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target, axis) - offset : Math.min(_max(target, axis), _getOffset(value, target)[axis] - offset);
},
    _initCore = function _initCore() {
  gsap = _getGSAP();

  if (_windowExists() && gsap && typeof document !== "undefined" && document.body) {
    _window = window;
    _body = document.body;
    _docEl = document.documentElement;
    _toArray = gsap.utils.toArray;
    gsap.config({
      autoKillThreshold: 7
    });
    _config = gsap.config();
    _coreInitted = 1;
  }
};

var ScrollToPlugin = {
  version: "3.12.2",
  name: "scrollTo",
  rawVars: 1,
  register: function register(core) {
    gsap = core;

    _initCore();
  },
  init: function init(target, value, tween, index, targets) {
    _coreInitted || _initCore();
    var data = this,
        snapType = gsap.getProperty(target, "scrollSnapType");
    data.isWin = target === _window;
    data.target = target;
    data.tween = tween;
    value = _clean(value, index, target, targets);
    data.vars = value;
    data.autoKill = !!value.autoKill;
    data.getX = _buildGetter(target, "x");
    data.getY = _buildGetter(target, "y");
    data.x = data.xPrev = data.getX();
    data.y = data.yPrev = data.getY();
    ScrollTrigger || (ScrollTrigger = gsap.core.globals().ScrollTrigger);
    gsap.getProperty(target, "scrollBehavior") === "smooth" && gsap.set(target, {
      scrollBehavior: "auto"
    });

    if (snapType && snapType !== "none") {
      // disable scroll snapping to avoid strange behavior
      data.snap = 1;
      data.snapInline = target.style.scrollSnapType;
      target.style.scrollSnapType = "none";
    }

    if (value.x != null) {
      data.add(data, "x", data.x, _parseVal(value.x, target, "x", data.x, value.offsetX || 0), index, targets);

      data._props.push("scrollTo_x");
    } else {
      data.skipX = 1;
    }

    if (value.y != null) {
      data.add(data, "y", data.y, _parseVal(value.y, target, "y", data.y, value.offsetY || 0), index, targets);

      data._props.push("scrollTo_y");
    } else {
      data.skipY = 1;
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt,
        target = data.target,
        tween = data.tween,
        autoKill = data.autoKill,
        xPrev = data.xPrev,
        yPrev = data.yPrev,
        isWin = data.isWin,
        snap = data.snap,
        snapInline = data.snapInline,
        x,
        y,
        yDif,
        xDif,
        threshold;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    x = isWin || !data.skipX ? data.getX() : xPrev;
    y = isWin || !data.skipY ? data.getY() : yPrev;
    yDif = y - yPrev;
    xDif = x - xPrev;
    threshold = _config.autoKillThreshold;

    if (data.x < 0) {
      //can't scroll to a position less than 0! Might happen if someone uses a Back.easeOut or Elastic.easeOut when scrolling back to the top of the page (for example)
      data.x = 0;
    }

    if (data.y < 0) {
      data.y = 0;
    }

    if (autoKill) {
      //note: iOS has a bug that throws off the scroll by several pixels, so we need to check if it's within 7 pixels of the previous one that we set instead of just looking for an exact match.
      if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target, "x")) {
        data.skipX = 1; //if the user scrolls separately, we should stop tweening!
      }

      if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target, "y")) {
        data.skipY = 1; //if the user scrolls separately, we should stop tweening!
      }

      if (data.skipX && data.skipY) {
        tween.kill();
        data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
      }
    }

    if (isWin) {
      _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
    } else {
      data.skipY || (target.scrollTop = data.y);
      data.skipX || (target.scrollLeft = data.x);
    }

    if (snap && (ratio === 1 || ratio === 0)) {
      y = target.scrollTop;
      x = target.scrollLeft;
      snapInline ? target.style.scrollSnapType = snapInline : target.style.removeProperty("scroll-snap-type");
      target.scrollTop = y + 1; // bug in Safari causes the element to totally reset its scroll position when scroll-snap-type changes, so we need to set it to a slightly different value and then back again to work around this bug.

      target.scrollLeft = x + 1;
      target.scrollTop = y;
      target.scrollLeft = x;
    }

    data.xPrev = data.x;
    data.yPrev = data.y;
    ScrollTrigger && ScrollTrigger.update();
  },
  kill: function kill(property) {
    var both = property === "scrollTo";

    if (both || property === "scrollTo_x") {
      this.skipX = 1;
    }

    if (both || property === "scrollTo_y") {
      this.skipY = 1;
    }
  }
};
ScrollToPlugin.max = _max;
ScrollToPlugin.getOffset = _getOffset;
ScrollToPlugin.buildGetter = _buildGetter;
_getGSAP() && gsap.registerPlugin(ScrollToPlugin);


/***/ }),

/***/ "./node_modules/gsap/ScrollTrigger.js":
/*!********************************************!*\
  !*** ./node_modules/gsap/ScrollTrigger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ScrollTrigger: () => (/* binding */ ScrollTrigger),
/* harmony export */   "default": () => (/* binding */ ScrollTrigger)
/* harmony export */ });
/* harmony import */ var _Observer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer.js */ "./node_modules/gsap/Observer.js");
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var gsap,
    _coreInitted,
    _win,
    _doc,
    _docEl,
    _body,
    _root,
    _resizeDelay,
    _toArray,
    _clamp,
    _time2,
    _syncInterval,
    _refreshing,
    _pointerIsDown,
    _transformProp,
    _i,
    _prevWidth,
    _prevHeight,
    _autoRefresh,
    _sort,
    _suppressOverwrites,
    _ignoreResize,
    _normalizer,
    _ignoreMobileResize,
    _baseScreenHeight,
    _baseScreenWidth,
    _fixIOSBug,
    _context,
    _scrollRestoration,
    _div100vh,
    _100vh,
    _limitCallbacks,
    // if true, we'll only trigger callbacks if the active state toggles, so if you scroll immediately past both the start and end positions of a ScrollTrigger (thus inactive to inactive), neither its onEnter nor onLeave will be called. This is useful during startup.
_startup = 1,
    _getTime = Date.now,
    _time1 = _getTime(),
    _lastScrollTime = 0,
    _enabled = 0,
    _parseClamp = function _parseClamp(value, type, self) {
  var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
},
    _keepClamp = function _keepClamp(value, clamp) {
  return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
},
    _rafBugFix = function _rafBugFix() {
  return _enabled && requestAnimationFrame(_rafBugFix);
},
    // in some browsers (like Firefox), screen repaints weren't consistent unless we had SOMETHING queued up in requestAnimationFrame()! So this just creates a super simple loop to keep it alive and smooth out repaints.
_pointerDownHandler = function _pointerDownHandler() {
  return _pointerIsDown = 1;
},
    _pointerUpHandler = function _pointerUpHandler() {
  return _pointerIsDown = 0;
},
    _passThrough = function _passThrough(v) {
  return v;
},
    _round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _isViewport = function _isViewport(e) {
  return !!~_root.indexOf(e);
},
    _getViewportDimension = function _getViewportDimension(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win["inner" + dimensionProperty]) || _docEl["client" + dimensionProperty] || _body["client" + dimensionProperty];
},
    _getBoundsFunc = function _getBoundsFunc(element) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, "getBoundingClientRect") || (_isViewport(element) ? function () {
    _winOffsets.width = _win.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function () {
    return _getBounds(element);
  });
},
    _getSizeFunc = function _getSizeFunc(scroller, isViewport, _ref) {
  var d = _ref.d,
      d2 = _ref.d2,
      a = _ref.a;
  return (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "getBoundingClientRect")) ? function () {
    return a()[d];
  } : function () {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
},
    _getOffsetsFunc = function _getOffsetsFunc(element, isViewport) {
  return !isViewport || ~_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.indexOf(element) ? _getBoundsFunc(element) : function () {
    return _winOffsets;
  };
},
    _maxScroll = function _maxScroll(element, _ref2) {
  var s = _ref2.s,
      d2 = _ref2.d2,
      d = _ref2.d,
      a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport(element) ? (_docEl[s] || _body[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
},
    _iterateAutoRefresh = function _iterateAutoRefresh(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
},
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _endAnimation = function _endAnimation(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
},
    _callback = function _callback(self, func) {
  if (self.enabled) {
    var result = func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
},
    _abs = Math.abs,
    _left = "left",
    _top = "top",
    _right = "right",
    _bottom = "bottom",
    _width = "width",
    _height = "height",
    _Right = "Right",
    _Left = "Left",
    _Top = "Top",
    _Bottom = "Bottom",
    _padding = "padding",
    _margin = "margin",
    _Width = "Width",
    _Height = "Height",
    _px = "px",
    _getComputedStyle = function _getComputedStyle(element) {
  return _win.getComputedStyle(element);
},
    _makePositionable = function _makePositionable(element) {
  // if the element already has position: absolute or fixed, leave that, otherwise make it position: relative
  var position = _getComputedStyle(element).position;

  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _getBounds = function _getBounds(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1),
      bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
},
    _getSize = function _getSize(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
},
    _getLabelRatioArray = function _getLabelRatioArray(timeline) {
  var a = [],
      labels = timeline.labels,
      duration = timeline.duration(),
      p;

  for (p in labels) {
    a.push(labels[p] / duration);
  }

  return a;
},
    _getClosestLabel = function _getClosestLabel(animation) {
  return function (value) {
    return gsap.utils.snap(_getLabelRatioArray(animation), value);
  };
},
    _snapDirectional = function _snapDirectional(snapIncrementOrArray) {
  var snap = gsap.utils.snap(snapIncrementOrArray),
      a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function (a, b) {
    return a - b;
  });
  return a ? function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var i;

    if (!direction) {
      return snap(value);
    }

    if (direction > 0) {
      value -= threshold; // to avoid rounding errors. If we're too strict, it might snap forward, then immediately again, and again.

      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }

      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;

      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }

    return a[0];
  } : function (value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }

    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
},
    _getLabelAtDirection = function _getLabelAtDirection(timeline) {
  return function (value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
},
    _multiListener = function _multiListener(func, element, types, callback) {
  return types.split(",").forEach(function (type) {
    return func(element, type, callback);
  });
},
    _addListener = function _addListener(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
},
    _removeListener = function _removeListener(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
},
    _wheelListener = function _wheelListener(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;

  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
},
    _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
},
    _defaults = {
  toggleActions: "play",
  anticipatePin: 0
},
    _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
},
    _offsetToPx = function _offsetToPx(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="),
        relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;

    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }

    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }

  return value;
},
    _createMarker = function _createMarker(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor,
      endColor = _ref4.endColor,
      fontSize = _ref4.fontSize,
      indent = _ref4.indent,
      fontWeight = _ref4.fontWeight;

  var e = _doc.createElement("div"),
      useFixedPosition = _isViewport(container) || (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(container, "pinType") === "fixed",
      isScroller = type.indexOf("scroller") !== -1,
      parent = useFixedPosition ? _body : container,
      isStart = type.indexOf("start") !== -1,
      color = isStart ? startColor : endColor,
      css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";

  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];

  _positionMarker(e, 0, direction, isStart);

  return e;
},
    _positionMarker = function _positionMarker(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  },
      side = direction[flipped ? "os2" : "p2"],
      oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap.set(marker, vars);
},
    _triggers = [],
    _ids = {},
    _rafID,
    _sync = function _sync() {
  return _getTime() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
},
    _onScroll = function _onScroll() {
  // previously, we tried to optimize performance by batching/deferring to the next requestAnimationFrame(), but discovered that Safari has a few bugs that make this unworkable (especially on iOS). See https://codepen.io/GreenSock/pen/16c435b12ef09c38125204818e7b45fc?editors=0010 and https://codepen.io/GreenSock/pen/JjOxYpQ/3dd65ccec5a60f1d862c355d84d14562?editors=0010 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503?editors=0010
  if (!_normalizer || !_normalizer.isPressed || _normalizer.startX > _body.clientWidth) {
    // if the user is dragging the scrollbar, allow it.
    _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;

    if (_normalizer) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll(); // Safari in particular (on desktop) NEEDS the immediate update rather than waiting for a requestAnimationFrame() whereas iOS seems to benefit from waiting for the requestAnimationFrame() tick, at least when normalizing. See https://codepen.io/GreenSock/pen/qBYozqO?editors=0110

    }

    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime();
  }
},
    _setBaseDimensions = function _setBaseDimensions() {
  _baseScreenWidth = _win.innerWidth;
  _baseScreenHeight = _win.innerHeight;
},
    _onResize = function _onResize() {
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  !_refreshing && !_ignoreResize && !_doc.fullscreenElement && !_doc.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win.innerWidth || Math.abs(_win.innerHeight - _baseScreenHeight) > _win.innerHeight * 0.25) && _resizeDelay.restart(true);
},
    // ignore resizes triggered by refresh()
_listeners = {},
    _emptyArray = [],
    _softRefresh = function _softRefresh() {
  return _removeListener(ScrollTrigger, "scrollEnd", _softRefresh) || _refreshAll(true);
},
    _dispatch = function _dispatch(type) {
  return _listeners[type] && _listeners[type].map(function (f) {
    return f();
  }) || _emptyArray;
},
    _savedStyles = [],
    // when ScrollTrigger.saveStyles() is called, the inline styles are recorded in this Array in a sequential format like [element, cssText, gsCache, media]. This keeps it very memory-efficient and fast to iterate through.
_revertRecorded = function _revertRecorded(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
},
    _revertAll = function _revertAll(kill, media) {
  var trigger;

  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];

    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }

  media && _revertRecorded(media);
  media || _dispatch("revert");
},
    _clearScrollMemory = function _clearScrollMemory(scrollRestoration, force) {
  // zero-out all the recorded scroll positions. Don't use _triggers because if, for example, .matchMedia() is used to create some ScrollTriggers and then the user resizes and it removes ALL ScrollTriggers, and then go back to a size where there are ScrollTriggers, it would have kept the position(s) saved from the initial state.
  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;
  (force || !_refreshingAll) && _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win.history.scrollRestoration = _scrollRestoration = scrollRestoration);
},
    _refreshingAll,
    _refreshID = 0,
    _queueRefreshID,
    _queueRefreshAll = function _queueRefreshAll() {
  // we don't want to call _refreshAll() every time we create a new ScrollTrigger (for performance reasons) - it's better to batch them. Some frameworks dynamically load content and we can't rely on the window's "load" or "DOMContentLoaded" events to trigger it.
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function () {
      return id === _refreshID && _refreshAll(true);
    });
  }
},
    _refresh100vh = function _refresh100vh() {
  _body.appendChild(_div100vh);

  _100vh = _div100vh.offsetHeight || _win.innerHeight;

  _body.removeChild(_div100vh);
},
    _refreshAll = function _refreshAll(force, skipRevert) {
  if (_lastScrollTime && !force) {
    _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

    return;
  }

  _refresh100vh();

  _refreshingAll = ScrollTrigger.isRefreshing = true;

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  }); // force the clearing of the cache because some browsers take a little while to dispatch the "scroll" event and the user may have changed the scroll position and then called ScrollTrigger.refresh() right away


  var refreshInits = _dispatch("refreshInit");

  _sort && ScrollTrigger.sort();
  skipRevert || _revertAll();

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto"); // smooth scrolling interferes

      obj(0);
    }
  });

  _triggers.slice(0).forEach(function (t) {
    return t.refresh();
  }); // don't loop with _i because during a refresh() someone could call ScrollTrigger.update() which would iterate through _i resulting in a skip.


  _triggers.forEach(function (t, i) {
    // nested pins (pinnedContainer) with pinSpacing may expand the container, so we must accommodate that here.
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight",
          original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });

  _triggers.forEach(function (t) {
    // the scroller's max scroll position may change after all the ScrollTriggers refreshed (like pinning could push it down), so we need to loop back and correct any with end: "max". Same for anything with a clamped end
    var max = _maxScroll(t.scroller, t._dir);

    (t.vars.end === "max" || t._endClamp && t.end > max) && t.setPositions(t.start, Math.max(t.start + 1, max), true);
  });

  refreshInits.forEach(function (result) {
    return result && result.render && result.render(-1);
  }); // if the onRefreshInit() returns an animation (typically a gsap.set()), revert it. This makes it easy to put things in a certain spot before refreshing for measurement purposes, and then put things back.

  _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function () {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });

  _clearScrollMemory(_scrollRestoration, 1);

  _resizeDelay.pause();

  _refreshID++;
  _refreshingAll = 2;

  _updateAll(2);

  _triggers.forEach(function (t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });

  _refreshingAll = ScrollTrigger.isRefreshing = false;

  _dispatch("refresh");
},
    _lastScroll = 0,
    _direction = 1,
    _primary,
    _updateAll = function _updateAll(force) {
  if (!_refreshingAll || force === 2) {
    ScrollTrigger.isUpdating = true;
    _primary && _primary.update(0); // ScrollSmoother uses refreshPriority -9999 to become the primary that gets updated before all others because it affects the scroll position.

    var l = _triggers.length,
        time = _getTime(),
        recordVelocity = time - _time1 >= 50,
        scroll = l && _triggers[0].scroll();

    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);

    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;

        _dispatch("scrollEnd");
      }

      _time2 = _time1;
      _time1 = time;
    }

    if (_direction < 0) {
      _i = l;

      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }

      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }

    ScrollTrigger.isUpdating = false;
  }

  _rafID = 0;
},
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]),
    _swapPinOut = function _swapPinOut(pin, spacer, state) {
  _setState(state);

  var cache = pin._gsap;

  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;

    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }

  pin._gsap.swappedIn = false;
},
    _swapPinIn = function _swapPinIn(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length,
        spacerStyle = spacer.style,
        pinStyle = pin.style,
        p;

    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }

    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";

    _setState(spacerState);

    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];

    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }

    pin._gsap.swappedIn = true;
  }
},
    _capsExp = /([A-Z])/g,
    _setState = function _setState(state) {
  if (state) {
    var style = state.t.style,
        l = state.length,
        i = 0,
        p,
        value;
    (state.t._gsap || gsap.core.getCache(state.t)).uncache = 1; // otherwise transforms may be off

    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];

      if (value) {
        style[p] = value;
      } else if (style[p]) {
        style.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
},
    _getState = function _getState(element) {
  // returns an Array with alternating values like [property, value, property, value] and a "t" property pointing to the target (element). Makes it fast and cheap.
  var l = _stateProps.length,
      style = element.style,
      state = [],
      i = 0;

  for (; i < l; i++) {
    state.push(_stateProps[i], style[_stateProps[i]]);
  }

  state.t = element;
  return state;
},
    _copyState = function _copyState(state, override, omitOffsets) {
  var result = [],
      l = state.length,
      i = omitOffsets ? 8 : 0,
      // skip top, left, right, bottom if omitOffsets is true
  p;

  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }

  result.t = state.t;
  return result;
},
    _winOffsets = {
  left: 0,
  top: 0
},
    // // potential future feature (?) Allow users to calculate where a trigger hits (scroll position) like getScrollPosition("#id", "top bottom")
// _getScrollPosition = (trigger, position, {scroller, containerAnimation, horizontal}) => {
// 	scroller = _getTarget(scroller || _win);
// 	let direction = horizontal ? _horizontal : _vertical,
// 		isViewport = _isViewport(scroller);
// 	_getSizeFunc(scroller, isViewport, direction);
// 	return _parsePosition(position, _getTarget(trigger), _getSizeFunc(scroller, isViewport, direction)(), direction, _getScrollFunc(scroller, direction)(), 0, 0, 0, _getOffsetsFunc(scroller, isViewport)(), isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, 0, containerAnimation ? containerAnimation.duration() : _maxScroll(scroller), containerAnimation);
// },
_parsePosition = function _parsePosition(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self));

  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }

  var time = containerAnimation ? containerAnimation.time() : 0,
      p1,
      p2,
      element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value); // convert a string number like "45" to an actual number

  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "),
        bounds,
        localOffset,
        globalOffset,
        display;
    element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger, self) || _body;
    bounds = _getBounds(element) || {};

    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      // if display is "none", it won't report getBoundingClientRect() properly
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }

    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset; // adjust for the marker
  } else {
    containerAnimation && (value = gsap.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }

  if (clampZeroProp) {
    self[clampZeroProp] = value || -0.001;
    value < 0 && (value = 0);
  }

  if (marker) {
    var position = value + scrollerSize,
        isStart = marker._isStart;
    p1 = "scroll" + direction.d2;

    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body[p1], _docEl[p1]) : marker.parentNode[p1]) <= position + 1);

    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }

  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }

  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
},
    _prefixExp = /(webkit|moz|length|cssText|inset)/i,
    _reparent = function _reparent(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style = element.style,
        p,
        cs;

    if (parent === _body) {
      element._stOrig = style.cssText; // record original inline styles so we can revert them later

      cs = _getComputedStyle(element);

      for (p in cs) {
        // must copy all relevant styles to ensure that nothing changes visually when we reparent to the <body>. Skip the vendor prefixed ones.
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
          style[p] = cs[p];
        }
      }

      style.top = top;
      style.left = left;
    } else {
      style.cssText = element._stOrig;
    }

    gsap.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
},
    _interruptionTracker = function _interruptionTracker(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue,
      last2 = last1;
  return function (value) {
    var current = Math.round(getValueFunc()); // round because in some [very uncommon] Windows environments, scroll can get reported with decimals even though it was set without.

    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      // if the user scrolls, kill the tween. iOS Safari intermittently misreports the scroll position, it may be the most recently-set one or the one before that! When Safari is zoomed (CMD-+), it often misreports as 1 pixel off too! So if we set the scroll position to 125, for example, it'll actually report it as 124.
      value = current;
      onInterrupt && onInterrupt();
    }

    last2 = last1;
    last1 = value;
    return value;
  };
},
    _shiftMarker = function _shiftMarker(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap.set(marker, vars);
},
    // _mergeAnimations = animations => {
// 	let tl = gsap.timeline({smoothChildTiming: true}).startTime(Math.min(...animations.map(a => a.globalTime(0))));
// 	animations.forEach(a => {let time = a.totalTime(); tl.add(a); a.totalTime(time); });
// 	tl.smoothChildTiming = false;
// 	return tl;
// },
// returns a function that can be used to tween the scroll position in the direction provided, and when doing so it'll add a .tween property to the FUNCTION itself, and remove it when the tween completes or gets killed. This gives us a way to have multiple ScrollTriggers use a central function for any given scroller and see if there's a scroll tween running (which would affect if/how things get updated)
_getTweenCreator = function _getTweenCreator(scroller, direction) {
  var getScroll = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
      prop = "_scroll" + direction.p2,
      // add a tweenable property to the scroller that's a getter/setter function, like _scrollTop or _scrollLeft. This way, if someone does gsap.killTweensOf(scroller) it'll kill the scroll tween.
  getTween = function getTween(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween.tween,
        onComplete = vars.onComplete,
        modifiers = {};
    initialValue = initialValue || getScroll();

    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function () {
      tween.kill();
      getTween.tween = 0;
    });

    change2 = change1 && change2 || 0; // if change1 is 0, we set that to the difference and ignore change2. Otherwise, there would be a compound effect.

    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.modifiers = modifiers;

    modifiers[prop] = function () {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };

    vars.onUpdate = function () {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++;

      _updateAll();
    };

    vars.onComplete = function () {
      getTween.tween = 0;
      onComplete && onComplete.call(tween);
    };

    tween = getTween.tween = gsap.to(scroller, vars);
    return tween;
  };

  scroller[prop] = getScroll;

  getScroll.wheelHandler = function () {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };

  _addListener(scroller, "wheel", getScroll.wheelHandler); // Windows machines handle mousewheel scrolling in chunks (like "3 lines per scroll") meaning the typical strategy for cancelling the scroll isn't as sensitive. It's much more likely to match one of the previous 2 scroll event positions. So we kill any snapping as soon as there's a wheel event.


  ScrollTrigger.isTouch && _addListener(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};

var ScrollTrigger = /*#__PURE__*/function () {
  function ScrollTrigger(vars, animation) {
    _coreInitted || ScrollTrigger.register(gsap) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");

    _context(this);

    this.init(vars, animation);
  }

  var _proto = ScrollTrigger.prototype;

  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true); // in case it's being initted again

    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }

    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);

    var _vars = vars,
        onUpdate = _vars.onUpdate,
        toggleClass = _vars.toggleClass,
        id = _vars.id,
        onToggle = _vars.onToggle,
        onRefresh = _vars.onRefresh,
        scrub = _vars.scrub,
        trigger = _vars.trigger,
        pin = _vars.pin,
        pinSpacing = _vars.pinSpacing,
        invalidateOnRefresh = _vars.invalidateOnRefresh,
        anticipatePin = _vars.anticipatePin,
        onScrubComplete = _vars.onScrubComplete,
        onSnapComplete = _vars.onSnapComplete,
        once = _vars.once,
        snap = _vars.snap,
        pinReparent = _vars.pinReparent,
        pinSpacer = _vars.pinSpacer,
        containerAnimation = _vars.containerAnimation,
        fastScrollEnd = _vars.fastScrollEnd,
        preventOverlaps = _vars.preventOverlaps,
        direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical,
        isToggle = !scrub && scrub !== 0,
        scroller = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.scroller || _win),
        scrollerCache = gsap.core.getCache(scroller),
        isViewport = _isViewport(scroller),
        useFixedPosition = ("pinType" in vars ? vars.pinType : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "pinType") || isViewport && "fixed") === "fixed",
        callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack],
        toggleActions = isToggle && vars.toggleActions.split(" "),
        markers = "markers" in vars ? vars.markers : _defaults.markers,
        borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0,
        self = this,
        onRefreshInit = vars.onRefreshInit && function () {
      return vars.onRefreshInit(self);
    },
        getScrollerSize = _getSizeFunc(scroller, isViewport, direction),
        getScrollerOffsets = _getOffsetsFunc(scroller, isViewport),
        lastSnap = 0,
        lastRefresh = 0,
        prevProgress = 0,
        scrollFunc = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, direction),
        tweenTo,
        pinCache,
        snapFunc,
        scroll1,
        scroll2,
        start,
        end,
        markerStart,
        markerEnd,
        markerStartTrigger,
        markerEndTrigger,
        markerVars,
        executingOnRefresh,
        change,
        pinOriginalState,
        pinActiveState,
        pinState,
        spacer,
        offset,
        pinGetter,
        pinSetter,
        pinStart,
        pinChange,
        spacingStart,
        spacerState,
        markerStartSetter,
        pinMoves,
        markerEndSetter,
        cs,
        snap1,
        snap2,
        scrubTween,
        scrubSmooth,
        snapDurClamp,
        snapDelayedCall,
        prevScroll,
        prevAnimProgress,
        caMarkerSetter,
        customRevertReturn; // for the sake of efficiency, _startClamp/_endClamp serve like a truthy value indicating that clamping was enabled on the start/end, and ALSO store the actual pre-clamped numeric value. We tap into that in ScrollSmoother for speed effects. So for example, if start="clamp(top bottom)" results in a start of -100 naturally, it would get clamped to 0 but -100 would be stored in _startClamp.


    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;

    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self); // used by ScrollSmoother
    }

    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      left: _getTweenCreator(scroller, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];

    self.scrubDuration = function (value) {
      scrubSmooth = _isNumber(value) && value;

      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };

    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true); // special case: if this ScrollTrigger gets re-initted, a from() tween with a stagger could get initted initially and then reverted on the re-init which means it'll need to get rendered again here to properly display things. Otherwise, See https://greensock.com/forums/topic/36777-scrollsmoother-splittext-nextjs/ and https://codepen.io/GreenSock/pen/eYPyPpd?editors=0010

      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }

    if (snap) {
      // TODO: potential idea: use legitimate CSS scroll snapping by pushing invisible elements into the DOM that serve as snap positions, and toggle the document.scrollingElement.style.scrollSnapType onToggle. See https://codepen.io/GreenSock/pen/JjLrgWM for a quick proof of concept.
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }

      "scrollBehavior" in _body.style && gsap.set(isViewport ? [_body, _docEl] : scroller, {
        scrollBehavior: "auto"
      }); // smooth scrolling doesn't work with snap.

      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.forEach(function (o) {
        return _isFunction(o) && o.target === (isViewport ? _doc.scrollingElement || _docEl : scroller) && (o.smooth = false);
      }); // note: set smooth to false on both the vertical and horizontal scroll getters/setters


      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function (value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp(snapDurClamp.min, snapDurClamp.max) : _clamp(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function () {
        var scroll = scrollFunc(),
            refreshedRecently = _getTime() - lastRefresh < 500,
            tween = tweenTo.tween;

        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change,
              totalProgress = animation && !isToggle ? animation.totalProgress() : progress,
              velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime() - _time2) * 1000 || 0,
              change1 = gsap.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185),
              naturalEnd = progress + (snap.inertia === false ? 0 : change1),
              endValue = _clamp(0, 1, snapFunc(naturalEnd, self)),
              endScroll = Math.round(start + endValue * change),
              _snap = snap,
              onStart = _snap.onStart,
              _onInterrupt = _snap.onInterrupt,
              _onComplete = _snap.onComplete;

          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              // there's an overlapping snap! So we must figure out which one is closer and let that tween live.
              return;
            }

            if (snap.inertia === false) {
              change1 = endValue - progress;
            }

            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }

    id && (_ids[id] = self);
    trigger = self.trigger = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(trigger || pin !== true && pin); // if a trigger has some kind of scroll-related effect applied that could contaminate the "y" or "x" position (like a ScrollSmoother effect), we needed a way to temporarily revert it, so we use the stRevert property of the gsCache. It can return another function that we'll call at the end so it can return to its normal state.

    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });

    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding); // if the parent is display: flex, don't apply pinSpacing by default. We should check that pin.parentNode is an element (not shadow dom window)

      self.pin = pin;
      pinCache = gsap.core.getCache(pin);

      if (!pinCache.spacer) {
        // record the spacer and pinOriginalState on the cache in case someone tries pinning the same element with MULTIPLE ScrollTriggers - we don't want to have multiple spacers or record the "original" pin state after it has already been affected by another ScrollTrigger.
        if (pinSpacer) {
          pinSpacer = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement); // for React & Angular

          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }

        pinCache.spacer = spacer = pinSpacer || _doc.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }

      vars.force3D !== false && gsap.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap.getProperty(pin);
      pinSetter = gsap.quickSetter(pin, direction.a, _px); // pin.firstChild && !_maxScroll(pin, direction) && (pin.style.overflow = "hidden"); // protects from collapsing margins, but can have unintended consequences as demonstrated here: https://codepen.io/GreenSock/pen/1e42c7a73bfa409d2cf1e184e7a4248d so it was removed in favor of just telling people to set up their CSS to avoid the collapsing margins (overflow: hidden | auto is just one option. Another is border-top: 1px solid transparent).

      _swapPinIn(pin, spacer, cs);

      pinState = _getState(pin);
    }

    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];

      var content = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "content") || scroller);

      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap.quickSetter([markerStart, markerEnd], direction.a, _px));

      if (!useFixedPosition && !(_Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.length && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getProxyProp)(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body : scroller);

        gsap.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }

    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate,
          oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function () {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }

    self.previous = function () {
      return _triggers[_triggers.indexOf(self) - 1];
    };

    self.next = function () {
      return _triggers[_triggers.indexOf(self) + 1];
    };

    self.revert = function (revert, temp) {
      if (!temp) {
        return self.kill(true);
      } // for compatibility with gsap.context() and gsap.matchMedia() which call revert()


      var r = revert !== false || !self.enabled,
          prevRefreshing = _refreshing;

      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0); // record the scroll so we can revert later (repositioning/pinning things can affect scroll position). In the static refresh() method, we first record all the scroll positions as a reference.

          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }

        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
          return m.style.display = r ? "none" : "block";
        });

        if (r) {
          _refreshing = self;
          self.update(r); // make sure the pin is back in its original position so that all the measurements are correct. do this BEFORE swapping the pin out
        }

        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }

        r || self.update(r); // when we're restoring, the update should run AFTER swapping the pin into its pin-spacer.

        _refreshing = prevRefreshing; // restore. We set it to true during the update() so that things fire properly in there.

        self.isReverted = r;
      }
    };

    self.refresh = function (soft, force, position, pinOffset) {
      // position is typically only defined if it's coming from setPositions() - it's a way to skip the normal parsing. pinOffset is also only from setPositions() and is mostly related to fancy stuff we need to do in ScrollSmoother with effects
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }

      if (pin && soft && _lastScrollTime) {
        _addListener(ScrollTrigger, "scrollEnd", _softRefresh);

        return;
      }

      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;

      if (tweenTo.tween && !position) {
        // we skip this if a position is passed in because typically that's from .setPositions() and it's best to allow in-progress snapping to continue.
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }

      scrubTween && scrubTween.pause();
      invalidateOnRefresh && animation && animation.revert({
        kill: false
      }).invalidate();
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false; // we'll set this to true in the sub-pins if we find any

      var size = getScrollerSize(),
          scrollerBounds = getScrollerOffsets(),
          max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction),
          isFirstRefresh = change <= 0.01,
          offset = 0,
          otherPinOffset = pinOffset || 0,
          parsedEnd = _isObject(position) ? position.end : vars.end,
          parsedEndTrigger = vars.endTrigger || trigger,
          parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"),
          pinnedContainer = self.pinnedContainer = vars.pinnedContainer && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.pinnedContainer, self),
          triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0,
          i = triggerIndex,
          cs,
          bounds,
          scroll,
          isVertical,
          override,
          curTrigger,
          curPin,
          oppositeScroll,
          initted,
          revertedPins,
          forcedOverflow,
          markerStartOffset,
          markerEndOffset;

      if (markers && _isObject(position)) {
        // if we alter the start/end positions with .setPositions(), it generally feeds in absolute NUMBERS which don't convey information about where to line up the markers, so to keep it intuitive, we record how far the trigger positions shift after applying the new numbers and then offset by that much in the opposite direction. We do the same to the associated trigger markers too of course.
        markerStartOffset = gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap.getProperty(markerEndTrigger, direction.p);
      }

      while (i--) {
        // user might try to pin the same element more than once, so we must find any prior triggers with the same pin, revert them, and determine how long they're pinning so that we can offset things appropriately. Make sure we revert from last to first so that things "rewind" properly.
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self); // if it's a timeline-based trigger that hasn't been fully initialized yet because it's waiting for 1 tick, just force the refresh() here, otherwise if it contains a pin that's supposed to affect other ScrollTriggers further down the page, they won't be adjusted properly.

        curPin = curTrigger.pin;

        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger); // we'll revert from first to last to make sure things reach their end state properly

          curTrigger.revert(true, true);
        }

        if (curTrigger !== _triggers[i]) {
          // in case it got removed.
          triggerIndex--;
          i--;
        }
      }

      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -0.001 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));

      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset; // _parsePosition won't factor in the offset if the start is a number, so do it here.

          parsedEndTrigger = trigger;
        }
      }

      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -0.001;
      offset = 0;
      i = triggerIndex;

      while (i--) {
        curTrigger = _triggers[i];
        curPin = curTrigger.pin;

        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);

          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            // numeric start values shouldn't be offset at all - treat them as absolute
            offset += cs * (1 - curTrigger.progress);
          }

          curPin === pin && (otherPinOffset += cs);
        }
      }

      start += offset;
      end += offset;
      self._startClamp && (self._startClamp += offset);

      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -0.001;
        end = Math.min(end, _maxScroll(scroller, direction));
      }

      change = end - start || (start -= 0.01) && 0.001;

      if (isFirstRefresh) {
        // on the very first refresh(), the prevProgress couldn't have been accurate yet because the start/end were never calculated, so we set it here. Before 3.11.5, it could lead to an inaccurate scroll position restoration with snapping.
        prevProgress = gsap.utils.clamp(0, 1, gsap.utils.normalize(start, end, prevScroll));
      }

      self._pinPush = otherPinOffset;

      if (markerStart && offset) {
        // offset the markers if necessary
        cs = {};
        cs[direction.a] = "+=" + offset;
        pinnedContainer && (cs[direction.p] = "-=" + scrollFunc());
        gsap.set([markerStart, markerEnd], cs);
      }

      if (pin) {
        cs = _getComputedStyle(pin);
        isVertical = direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical;
        scroll = scrollFunc(); // recalculate because the triggers can affect the scroll

        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;

        if (!max && end > 1) {
          // makes sure the scroller has a scrollbar, otherwise if something has width: 100%, for example, it would be too big (exclude the scrollbar). See https://greensock.com/forums/topic/25182-scrolltrigger-width-of-page-increase-where-markers-are-set-to-false/
          forcedOverflow = (isViewport ? _doc.scrollingElement || _docEl : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };

          if (isViewport && _getComputedStyle(_body)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            // avoid an extra scrollbar if BOTH <html> and <body> have overflow set to "scroll"
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }

        _swapPinIn(pin, spacer, cs);

        pinState = _getState(pin); // transforms will interfere with the top/left/right/bottom placement, so remove them temporarily. getBoundingClientRect() factors in transforms.

        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(scroller, isVertical ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical)();

        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          i && spacerState.push(direction.d, i + _px); // for box-sizing: border-box (must include padding).

          _setState(spacerState);

          if (pinnedContainer) {
            // in ScrollTrigger.refresh(), we need to re-evaluate the pinContainer's size because this pinSpacing may stretch it out, but we can't just add the exact distance because depending on layout, it may not push things down or it may only do so partially.
            _triggers.forEach(function (t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }

          useFixedPosition && scrollFunc(prevScroll);
        }

        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs[_padding];
          override[_padding + _Top] = cs[_padding + _Top];
          override[_padding + _Right] = cs[_padding + _Right];
          override[_padding + _Bottom] = cs[_padding + _Bottom];
          override[_padding + _Left] = cs[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }

        if (animation) {
          // the animation might be affecting the transform, so we must jump to the end, check the value, and compensate accordingly. Otherwise, when it becomes unpinned, the pinSetter() will get set to a value that doesn't include whatever the animation did.
          initted = animation._initted; // if not, we must invalidate() after this step, otherwise it could lock in starting values prematurely.

          _suppressOverwrites(1);

          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2); // transform is the last property/value set in the state Array. Since the animation is controlling that, we should omit it.

          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime()); // if, for example, a toggleAction called play() and then refresh() happens and when we render(1) above, it would cause the animation to complete and get removed from its parent, so this makes sure it gets put back in.

          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }

        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        // it may be INSIDE a pinned element, so walk up the tree and look for any elements with _pinOffset to compensate because anything with pinSpacing that's already scrolled would throw off the measurements in getBoundingClientRect()
        bounds = trigger.parentNode;

        while (bounds && bounds !== _body) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }

          bounds = bounds.parentNode;
        }
      }

      revertedPins && revertedPins.forEach(function (t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc(); // reset velocity

      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }

      self.revert(false, true);
      lastRefresh = _getTime();

      if (snapDelayedCall) {
        lastSnap = -1; // just so snapping gets re-enabled, clear out any recorded last value
        // self.isActive && scrollFunc(start + change * prevProgress); // previously this line was here to ensure that when snapping kicks in, it's from the previous progress but in some cases that's not desirable, like an all-page ScrollTrigger when new content gets added to the page, that'd totally change the progress.

        snapDelayedCall.restart(true);
      }

      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true); // must force a re-render because if saveStyles() was used on the target(s), the styles could have been wiped out during the refresh().

      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation) {
        // ensures that the direction is set properly (when refreshing, progress is set back to 0 initially, then back again to wherever it needs to be) and that callbacks are triggered.
        animation && !isToggle && animation.totalProgress(containerAnimation && start < -0.001 && !prevProgress ? gsap.utils.normalize(start, end, 0) : prevProgress, true); // to avoid issues where animation callbacks like onStart aren't triggered.

        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }

      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();

      if (!isNaN(markerStartOffset)) {
        // numbers were passed in for the position which are absolute, so instead of just putting the markers at the very bottom of the viewport, we figure out how far they shifted down (it's safe to assume they were originally positioned in closer relation to the trigger element with values like "top", "center", a percentage or whatever, so we offset that much in the opposite direction to basically revert them to the relative position thy were at previously.
        markerStartOffset -= gsap.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap.getProperty(markerEndTrigger, direction.p);

        _shiftMarker(markerStartTrigger, direction, markerStartOffset);

        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));

        _shiftMarker(markerEndTrigger, direction, markerEndOffset);

        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }

      isFirstRefresh && !_refreshingAll && self.update(); // edge case - when you reload a page when it's already scrolled down, some browsers fire a "scroll" event before DOMContentLoaded, triggering an updateAll(). If we don't update the self.progress as part of refresh(), then when it happens next, it may record prevProgress as 0 when it really shouldn't, potentially causing a callback in an animation to fire again.

      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        // when refreshing all, we do extra work to correct pinnedContainer sizes and ensure things don't exceed the maxScroll, so we should do all the refreshes at the end after all that work so that the start/end values are corrected.
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };

    self.getVelocity = function () {
      return (scrollFunc() - scroll2) / (_getTime() - _time2) * 1000 || 0;
    };

    self.endAnimation = function () {
      _endAnimation(self.callbackAnimation);

      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };

    self.labelToScroll = function (label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };

    self.getTrailing = function (name) {
      var i = _triggers.indexOf(self),
          a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);

      return (_isString(name) ? a.filter(function (t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function (t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };

    self.update = function (reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }

      var scroll = _refreshingAll === true ? prevScroll : self.scroll(),
          p = reset ? 0 : (scroll - start) / change,
          clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0,
          prevProgress = self.progress,
          isActive,
          wasActive,
          toggleState,
          action,
          stateChanged,
          toggled,
          isAtMax,
          isTakingAction;

      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;

        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      } // anticipate the pinning a few ticks ahead of time based on velocity to avoid a visual glitch due to the fact that most browsers do scrolling on a separate thread (not synced with requestAnimationFrame).


      anticipatePin && !clipped && pin && !_refreshing && !_startup && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime() - _time2) * anticipatePin && (clipped = 0.0001);

      if (clipped !== prevProgress && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress && prevProgress < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress; // could go from start all the way to end, thus it didn't toggle but it did change state in a sense (may need to fire a callback)

        self.direction = clipped > prevProgress ? 1 : -1;
        self.progress = clipped;

        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress ? 0 : clipped === 1 ? 1 : prevProgress === 1 ? 2 : 3; // 0 = enter, 1 = leave, 2 = enterBack, 3 = leaveBack (we prioritize the FIRST encounter, thus if you scroll really fast past the onEnter and onLeave in one tick, it'd prioritize onEnter.

          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState]; // if it didn't toggle, that means it shot right past and since we prioritize the "enter" action, we should switch to the "leave" in this case (but only if one is defined)

            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }

        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function (t) {
          return t.endAnimation();
        }));

        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start); // if there's a scrub on both the container animation and this one (or a ScrollSmoother), the update order would cause this one not to have rendered yet, so it wouldn't make any progress before we .restart() it heading toward the new progress so it'd appear stuck thus we force a render here.

            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              // legacy support (courtesy), before 3.10.0
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }

        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);

          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction); // if it's at the VERY end of the page, don't switch away from position: fixed because it's pointless and it could cause a brief flash when the user scrolls back up (when it gets pinned again)

            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true),
                    _offset = scroll - start;

                _reparent(pin, _body, bounds.top + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? _offset : 0) + _px, bounds.left + (direction === _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }

            _setState(isActive || isAtMax ? pinActiveState : pinState);

            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }

        snap && !tweenTo.tween && !_refreshing && !_startup && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function (el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        }); // classes could affect positioning, so do it even if reset or refreshing is true.

        onUpdate && !isToggle && !reset && onUpdate(self);

        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }

            onUpdate && onUpdate(self);
          }

          if (toggled || !_limitCallbacks) {
            // on startup, the page could be scrolled and we don't want to fire callbacks that didn't toggle. For example onEnter shouldn't fire if the ScrollTrigger isn't actually entered.
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0); // a callback shouldn't be called again if once is true.

            if (!toggled) {
              // it's possible to go completely past, like from before the start to after the end (or vice-versa) in which case BOTH callbacks should be fired in that order
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }

          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);

            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      } // update absolutely-positioned markers (only if the scroller isn't the viewport)


      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }

      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };

    self.enable = function (reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;

        _addListener(scroller, "resize", _onResize);

        isViewport || _addListener(scroller, "scroll", _onScroll);
        onRefreshInit && _addListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }

        refresh !== false && self.refresh();
      }
    };

    self.getTween = function (snap) {
      return snap && tweenTo ? tweenTo.tween : scrubTween;
    };

    self.setPositions = function (newStart, newEnd, keepClamp, pinOffset) {
      // doesn't persist after refresh()! Intended to be a way to override values that were set during refresh(), like you could set it in onRefresh()
      if (containerAnimation) {
        // convert ratios into scroll positions. Remember, start/end values on ScrollTriggers that have a containerAnimation refer to the time (in seconds), NOT scroll positions.
        var st = containerAnimation.scrollTrigger,
            duration = containerAnimation.duration(),
            _change = st.end - st.start;

        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }

      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };

    self.adjustPinSpacing = function (amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;

        _setState(spacerState);
      }
    };

    self.disable = function (reset, allowAnimation) {
      if (self.enabled) {
        reset !== false && self.revert(true, true);
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener(ScrollTrigger, "refreshInit", onRefreshInit);

        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }

        if (!isViewport) {
          var i = _triggers.length;

          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return; //don't remove the listeners if there are still other triggers referencing it.
            }
          }

          _removeListener(scroller, "resize", _onResize);

          isViewport || _removeListener(scroller, "scroll", _onScroll);
        }
      }
    };

    self.kill = function (revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];

      var i = _triggers.indexOf(self);

      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--; // if we're in the middle of a refresh() or update(), splicing would cause skips in the index, so adjust...
      // if no other ScrollTrigger instances of the same scroller are found, wipe out any recorded scroll position. Otherwise, in a single page application, for example, it could maintain scroll position when it really shouldn't.

      i = 0;

      _triggers.forEach(function (t) {
        return t.scroller === self.scroller && (i = 1);
      });

      i || _refreshingAll || (self.scroll.rec = 0);

      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }

      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function (m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);

      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;

        _triggers.forEach(function (t) {
          return t.pin === pin && i++;
        });

        i || (pinCache.spacer = 0); // if there aren't any more ScrollTriggers with the same pin, remove the spacer, otherwise it could be contaminated with old/stale values if the user re-creates a ScrollTrigger for the same element.
      }

      vars.onKill && vars.onKill(self);
    };

    _triggers.push(self);

    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);

    if (animation && animation.add && !change) {
      // if the animation is a timeline, it may not have been populated yet, so it wouldn't render at the proper place on the first refresh(), thus we should schedule one for the next tick. If "change" is defined, we know it must be re-enabling, thus we can refresh() right away.
      var updateFunc = self.update; // some browsers may fire a scroll event BEFORE a tick elapses and/or the DOMContentLoaded fires. So there's a chance update() will be called BEFORE a refresh() has happened on a Timeline-attached ScrollTrigger which means the start/end won't be calculated yet. We don't want to add conditional logic inside the update() method (like check to see if end is defined and if not, force a refresh()) because that's a function that gets hit a LOT (performance). So we swap out the real update() method for this one that'll re-attach it the first time it gets called and of course forces a refresh().

      self.update = function () {
        self.update = updateFunc;
        start || end || self.refresh();
      };

      gsap.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }

    pin && _queueRefreshAll(); // pinning could affect the positions of other things, so make sure we queue a full refresh()
  };

  ScrollTrigger.register = function register(core) {
    if (!_coreInitted) {
      gsap = core || _getGSAP();
      _windowExists() && window.document && ScrollTrigger.enable();
      _coreInitted = _enabled;
    }

    return _coreInitted;
  };

  ScrollTrigger.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }

    return _defaults;
  };

  ScrollTrigger.disable = function disable(reset, kill) {
    _enabled = 0;

    _triggers.forEach(function (trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });

    _removeListener(_win, "wheel", _onScroll);

    _removeListener(_doc, "scroll", _onScroll);

    clearInterval(_syncInterval);

    _removeListener(_doc, "touchcancel", _passThrough);

    _removeListener(_body, "touchstart", _passThrough);

    _multiListener(_removeListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

    _multiListener(_removeListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

    _resizeDelay.kill();

    _iterateAutoRefresh(_removeListener);

    for (var i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

      _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
    }
  };

  ScrollTrigger.enable = function enable() {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;

    if (gsap) {
      _toArray = gsap.utils.toArray;
      _clamp = gsap.utils.clamp;
      _context = gsap.core.context || _passThrough;
      _suppressOverwrites = gsap.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win.history.scrollRestoration || "auto";
      _lastScroll = _win.pageYOffset;
      gsap.core.globals("ScrollTrigger", ScrollTrigger); // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

      if (_body) {
        _enabled = 1;
        _div100vh = document.createElement("div"); // to solve mobile browser address bar show/hide resizing, we shouldn't rely on window.innerHeight. Instead, use a <div> with its height set to 100vh and measure that since that's what the scrolling is based on anyway and it's not affected by address bar showing/hiding.

        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";

        _refresh100vh();

        _rafBugFix();

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.register(gsap); // isTouch is 0 if no touch, 1 if ONLY touch, and 2 if it can accommodate touch but also other types like mouse/pointer.

        ScrollTrigger.isTouch = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch;
        _fixIOSBug = _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent); // since 2017, iOS has had a bug that causes event.clientX/Y to be inaccurate when a scroll occurs, thus we must alternate ignoring every other touchmove event to work around it. See https://bugs.webkit.org/show_bug.cgi?id=181954 and https://codepen.io/GreenSock/pen/ExbrPNa/087cef197dc35445a0951e8935c41503

        _addListener(_win, "wheel", _onScroll); // mostly for 3rd party smooth scrolling libraries.


        _root = [_win, _doc, _docEl, _body];

        if (gsap.matchMedia) {
          ScrollTrigger.matchMedia = function (vars) {
            var mm = gsap.matchMedia(),
                p;

            for (p in vars) {
              mm.add(p, vars[p]);
            }

            return mm;
          };

          gsap.addEventListener("matchMediaInit", function () {
            return _revertAll();
          });
          gsap.addEventListener("matchMediaRevert", function () {
            return _revertRecorded();
          });
          gsap.addEventListener("matchMedia", function () {
            _refreshAll(0, 1);

            _dispatch("matchMedia");
          });
          gsap.matchMedia("(orientation: portrait)", function () {
            // when orientation changes, we should take new base measurements for the ignoreMobileResize feature.
            _setBaseDimensions();

            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }

        _setBaseDimensions();

        _addListener(_doc, "scroll", _onScroll); // some browsers (like Chrome), the window stops dispatching scroll events on the window if you scroll really fast, but it's consistent on the document!


        var bodyStyle = _body.style,
            border = bodyStyle.borderTopStyle,
            AnimationProto = gsap.core.Animation.prototype,
            bounds,
            i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        }); // only for backwards compatibility (Animation.revert() was added after 3.10.4)

        bodyStyle.borderTopStyle = "solid"; // works around an issue where a margin of a child element could throw off the bounds of the _body, making it seem like there's a margin when there actually isn't. The border ensures that the bounds are accurate.

        bounds = _getBounds(_body);
        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.m = Math.round(bounds.top + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical.sc()) || 0; // accommodate the offset of the <body> caused by margins and/or padding

        _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.m = Math.round(bounds.left + _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style"); // TODO: (?) maybe move to leveraging the velocity mechanism in Observer and skip intervals.

        _syncInterval = setInterval(_sync, 250);
        gsap.delayedCall(0.5, function () {
          return _startup = 0;
        });

        _addListener(_doc, "touchcancel", _passThrough); // some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document.


        _addListener(_body, "touchstart", _passThrough); //works around Safari bug: https://greensock.com/forums/topic/21450-draggable-in-iframe-on-mobile-is-buggy/


        _multiListener(_addListener, _doc, "pointerdown,touchstart,mousedown", _pointerDownHandler);

        _multiListener(_addListener, _doc, "pointerup,touchend,mouseup", _pointerUpHandler);

        _transformProp = gsap.utils.checkPrefix("transform");

        _stateProps.push(_transformProp);

        _coreInitted = _getTime();
        _resizeDelay = gsap.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc, "visibilitychange", function () {
          var w = _win.innerWidth,
              h = _win.innerHeight;

          if (_doc.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc, "DOMContentLoaded", _refreshAll, _win, "load", _refreshAll, _win, "resize", _onResize];

        _iterateAutoRefresh(_addListener);

        _triggers.forEach(function (trigger) {
          return trigger.enable(0, 1);
        });

        for (i = 0; i < _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.length; i += 3) {
          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 1]);

          _wheelListener(_removeListener, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i], _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers[i + 2]);
        }
      }
    }
  };

  ScrollTrigger.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger.isTouch === 1 && vars.ignoreMobileResize);

    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener) || _iterateAutoRefresh(_addListener, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };

  ScrollTrigger.scrollerProxy = function scrollerProxy(target, vars) {
    var t = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(target),
        i = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.indexOf(t),
        isViewport = _isViewport(t);

    if (~i) {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.splice(i, isViewport ? 6 : 2);
    }

    if (vars) {
      isViewport ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(_win, vars, _body, vars, _docEl, vars) : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies.unshift(t, vars);
    }
  };

  ScrollTrigger.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function (t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };

  ScrollTrigger.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element) : element).getBoundingClientRect(),
        offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win.innerHeight;
  };

  ScrollTrigger.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element));
    var bounds = element.getBoundingClientRect(),
        size = bounds[horizontal ? _width : _height],
        offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win.innerWidth : (bounds.top + offset) / _win.innerHeight;
  };

  ScrollTrigger.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function (t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });

    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function (f) {
        return f();
      });
    }
  };

  return ScrollTrigger;
}();
ScrollTrigger.version = "3.12.2";

ScrollTrigger.saveStyles = function (targets) {
  return targets ? _toArray(targets).forEach(function (target) {
    // saved styles are recorded in a consecutive alternating Array, like [element, cssText, transform attribute, cache, matchMedia, ...]
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);

      i >= 0 && _savedStyles.splice(i, 5);

      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap.core.getCache(target), _context());
    }
  }) : _savedStyles;
};

ScrollTrigger.revert = function (soft, media) {
  return _revertAll(!soft, media);
};

ScrollTrigger.create = function (vars, animation) {
  return new ScrollTrigger(vars, animation);
};

ScrollTrigger.refresh = function (safe) {
  return safe ? _onResize() : (_coreInitted || ScrollTrigger.register()) && _refreshAll(true);
};

ScrollTrigger.update = function (force) {
  return ++_Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache && _updateAll(force === true ? 2 : 0);
};

ScrollTrigger.clearScrollMemory = _clearScrollMemory;

ScrollTrigger.maxScroll = function (element, horizontal) {
  return _maxScroll(element, horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getScrollFunc = function (element, horizontal) {
  return (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)((0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(element), horizontal ? _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal : _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
};

ScrollTrigger.getById = function (id) {
  return _ids[id];
};

ScrollTrigger.getAll = function () {
  return _triggers.filter(function (t) {
    return t.vars.id !== "ScrollSmoother";
  });
}; // it's common for people to ScrollTrigger.getAll(t => t.kill()) on page routes, for example, and we don't want it to ruin smooth scrolling by killing the main ScrollSmoother one.


ScrollTrigger.isScrolling = function () {
  return !!_lastScrollTime;
};

ScrollTrigger.snapDirectional = _snapDirectional;

ScrollTrigger.addEventListener = function (type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};

ScrollTrigger.removeEventListener = function (type, callback) {
  var a = _listeners[type],
      i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};

ScrollTrigger.batch = function (targets, vars) {
  var result = [],
      varsCopy = {},
      interval = vars.interval || 0.016,
      batchMax = vars.batchMax || 1e9,
      proxyCallback = function proxyCallback(type, callback) {
    var elements = [],
        triggers = [],
        delay = gsap.delayedCall(interval, function () {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function (self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  },
      p;

  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }

  if (_isFunction(batchMax)) {
    batchMax = batchMax();

    _addListener(ScrollTrigger, "refresh", function () {
      return batchMax = vars.batchMax();
    });
  }

  _toArray(targets).forEach(function (target) {
    var config = {};

    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }

    config.trigger = target;
    result.push(ScrollTrigger.create(config));
  });

  return result;
}; // to reduce file size. clamps the scroll and also returns a duration multiplier so that if the scroll gets chopped shorter, the duration gets curtailed as well (otherwise if you're very close to the top of the page, for example, and swipe up really fast, it'll suddenly slow down and take a long time to reach the top).


var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
},
    _allowNativePanning = function _allowNativePanning(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch ? " pinch-zoom" : "") : "none"; // note: Firefox doesn't support it pinch-zoom properly, at least in addition to a pan-x or pan-y.
  }

  target === _docEl && _allowNativePanning(_body, direction);
},
    _overflow = {
  auto: 1,
  scroll: 1
},
    _nestedScroll = function _nestedScroll(_ref5) {
  var event = _ref5.event,
      target = _ref5.target,
      axis = _ref5.axis;

  var node = (event.changedTouches ? event.changedTouches[0] : event).target,
      cache = node._gsap || gsap.core.getCache(node),
      time = _getTime(),
      cs;

  if (!cache._isScrollT || time - cache._isScrollT > 2000) {
    // cache for 2 seconds to improve performance.
    while (node && node !== _body && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }

    cache._isScroll = node && node !== target && !_isViewport(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }

  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
},
    // capture events on scrollable elements INSIDE the <body> and allow those by calling stopPropagation() when we find a scrollable ancestor
_inputObserver = function _inputObserver(target, type, inputs, nested) {
  return _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.create({
    target: target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type: type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener(_doc, _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.eventTypes[0], _captureInputs, true);
    }
  });
},
    _inputExp = /(input|label|select|textarea)/i,
    _inputIsFocused,
    _captureInputs = function _captureInputs(e) {
  var isInput = _inputExp.test(e.target.tagName);

  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
},
    _getScrollNormalizer = function _getScrollNormalizer(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";

  var _vars2 = vars,
      normalizeScrollX = _vars2.normalizeScrollX,
      momentum = _vars2.momentum,
      allowNestedScroll = _vars2.allowNestedScroll,
      onRelease = _vars2.onRelease,
      self,
      maxY,
      target = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.target) || _docEl,
      smoother = gsap.core.globals().ScrollSmoother,
      smootherInstance = smoother && smoother.get(),
      content = _fixIOSBug && (vars.content && (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getTarget)(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()),
      scrollFuncY = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical),
      scrollFuncX = (0,_Observer_js__WEBPACK_IMPORTED_MODULE_0__._getScrollFunc)(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal),
      scale = 1,
      initialScale = (_Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer.isTouch && _win.visualViewport ? _win.visualViewport.scale * _win.visualViewport.width : _win.outerWidth) / _win.innerWidth,
      wheelRefresh = 0,
      resolveMomentumDuration = _isFunction(momentum) ? function () {
    return momentum(self);
  } : function () {
    return momentum || 2.8;
  },
      lastRefreshID,
      skipTouchMove,
      inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll),
      resumeTouchMove = function resumeTouchMove() {
    return skipTouchMove = false;
  },
      scrollClampX = _passThrough,
      scrollClampY = _passThrough,
      updateClamps = function updateClamps() {
    maxY = _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical);
    scrollClampY = _clamp(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp(0, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal)));
    lastRefreshID = _refreshID;
  },
      removeContentOffset = function removeContentOffset() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  },
      ignoreDrag = function ignoreDrag() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);

      var offset = _round(self.deltaY / 2),
          scroll = scrollClampY(scrollFuncY.v - offset);

      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;

        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);

        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache;

        _updateAll();
      }

      return true;
    }

    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  },
      tween,
      startScrollX,
      startScrollY,
      onStopDelayedCall,
      onResize = function onResize() {
    // if the window resizes, like on an iPhone which Apple FORCES the address bar to show/hide even if we event.preventDefault(), it may be scrolling too far now that the address bar is showing, so we must dynamically adjust the momentum tween.
    updateClamps();

    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };

  content && gsap.set(content, {
    y: "+=0"
  }); // to ensure there's a cache (element._gsap)

  vars.ignoreCheck = function (e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };

  vars.onPress = function () {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win.visualViewport && _win.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };

  vars.onRelease = vars.onGestureStart = function (self, wasDragging) {
    scrollFuncY.offset && removeContentOffset();

    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers.cache++; // make sure we're pulling the non-cached value
      // alternate algorithm: durX = Math.min(6, Math.abs(self.velocityX / 800)),	dur = Math.max(durX, Math.min(6, Math.abs(self.velocityY / 800))); dur = dur * (0.4 + (1 - _power4In(dur / 6)) * 0.6)) * (momentumSpeed || 1)

      var dur = resolveMomentumDuration(),
          currentScroll,
          endScroll;

      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self.velocityX / 0.227; // the constant .227 is from power4(0.05). velocity is inverted because scrolling goes in the opposite direction.

        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }

      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self.velocityY / 0.227; // the constant .227 is from power4(0.05)

      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _Observer_js__WEBPACK_IMPORTED_MODULE_0__._vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);

      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        // iOS bug: it'll show the address bar but NOT fire the window "resize" event until the animation is done but we must protect against overshoot so we leverage an onUpdate to do so.
        gsap.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }

    onRelease && onRelease(self);
  };

  vars.onWheel = function () {
    tween._ts && tween.pause();

    if (_getTime() - wheelRefresh > 1000) {
      // after 1 second, refresh the clamps otherwise that'll only happen when ScrollTrigger.refresh() is called or for touch-scrolling.
      lastRefreshID = 0;
      wheelRefresh = _getTime();
    }
  };

  vars.onChange = function (self, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self.startX - self.x) : scrollFuncX() + dx - xArray[1])); // for more precision, we track pointer/touch movement from the start, otherwise it'll drift.

    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy,
          y = isTouch ? startScrollY + self.startY - self.y : scrollFuncY() + dy - yArray[1],
          yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }

    (dy || dx) && _updateAll();
  };

  vars.onEnable = function () {
    _allowNativePanning(target, normalizeScrollX ? false : "x");

    ScrollTrigger.addEventListener("refresh", onResize);

    _addListener(_win, "resize", onResize);

    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }

    inputObserver.enable();
  };

  vars.onDisable = function () {
    _allowNativePanning(target, true);

    _removeListener(_win, "resize", onResize);

    ScrollTrigger.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };

  vars.lockAxis = vars.lockAxis !== false;
  self = new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
  self.iOS = _fixIOSBug; // used in the Observer getCachedScroll() function to work around an iOS bug that wreaks havoc with TouchEvent.clientY if we allow scroll to go all the way back to 0.

  _fixIOSBug && !scrollFuncY() && scrollFuncY(1); // iOS bug causes event.clientY values to freak out (wildly inaccurate) if the scroll position is exactly 0.

  _fixIOSBug && gsap.ticker.add(_passThrough); // prevent the ticker from sleeping

  onStopDelayedCall = self._dc;
  tween = gsap.to(self, {
    ease: "power4",
    paused: true,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function () {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  }); // we need the modifier to sense if the scroll position is altered outside of the momentum tween (like with a scrollTo tween) so we can pause() it to prevent conflicts.

  return self;
};

ScrollTrigger.sort = function (func) {
  return _triggers.sort(func || function (a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
  });
};

ScrollTrigger.observe = function (vars) {
  return new _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer(vars);
};

ScrollTrigger.normalizeScroll = function (vars) {
  if (typeof vars === "undefined") {
    return _normalizer;
  }

  if (vars === true && _normalizer) {
    return _normalizer.enable();
  }

  if (vars === false) {
    return _normalizer && _normalizer.kill();
  }

  var normalizer = vars instanceof _Observer_js__WEBPACK_IMPORTED_MODULE_0__.Observer ? vars : _getScrollNormalizer(vars);
  _normalizer && _normalizer.target === normalizer.target && _normalizer.kill();
  _isViewport(normalizer.target) && (_normalizer = normalizer);
  return normalizer;
};

ScrollTrigger.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._getVelocityProp,
  _inputObserver: _inputObserver,
  _scrollers: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._scrollers,
  _proxies: _Observer_js__WEBPACK_IMPORTED_MODULE_0__._proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP() && gsap.registerPlugin(ScrollTrigger);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (_windowExists() && config) {
    // edge case: some build tools may pass in a null/undefined value
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    config && _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _raf = _win.requestAnimationFrame;

          _registerPluginQueue.forEach(_createPlugin);
        }

        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), true);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.vars.immediateRender ? -Infinity : this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      onUpdateParams = vars.onUpdateParams,
      callbackScope = vars.callbackScope,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate,
        onUpdateParams: onUpdateParams,
        callbackScope: callbackScope,
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return 1;
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c);
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      var tweens = this.getTweens();
      this.data.forEach(function (t) {
        // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
        if (t.data === "isFlip") {
          t.revert();
          t.getChildren(true, true, false).forEach(function (tween) {
            return tweens.splice(tweens.indexOf(tween), 1);
          });
        }
      }); // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort

      tweens.map(function (t) {
        return {
          g: t.globalTime(0),
          t: t
        };
      }).sort(function (a, b) {
        return b.g - a.g || -Infinity;
      }).forEach(function (o) {
        return o.t.revert(revert);
      }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

      this.data.forEach(function (e) {
        return !(e instanceof Tween) && e.revert && e.revert(revert);
      });

      this._r.forEach(function (f) {
        return f(revert, _this4);
      });

      this.isReverted = true;
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context);
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.2";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./source/scss/layout.scss":
/*!*********************************!*\
  !*** ./source/scss/layout.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./source/scss/tmdr-admin.scss":
/*!*************************************!*\
  !*** ./source/scss/tmdr-admin.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/mouse-follower/dist/index.module.js":
/*!**********************************************************!*\
  !*** ./node_modules/mouse-follower/dist/index.module.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MouseFollower)
/* harmony export */ });
/*!
 * Cuberto Mouse Follower
 * https://cuberto.com/
 *
 * @version 1.1.2
 * @author Cuberto, Artem Dordzhiev (Draft)
 */
var MouseFollower = /*#__PURE__*/function () {
  /**
   * @typedef {Object} MouseFollowerOptions
   * @property {string|HTMLElement|null} [el] Existed cursor element.
   * @property {string|HTMLElement|null} [container] Cursor container.
   * @property {string} [className] Cursor root element class name.
   * @property {string} [innerClassName] Inner element class name.
   * @property {string} [textClassName] Text element class name.
   * @property {string} [mediaClassName] Media element class name.
   * @property {string} [mediaBoxClassName] Media inner element class name.
   * @property {string} [iconSvgClassName] SVG sprite class name.
   * @property {string} [iconSvgNamePrefix] SVG sprite icon class name prefix.
   * @property {string} [iconSvgSrc] SVG sprite source.
   * @property {string|null} [dataAttr] Name of data attribute for changing cursor state directly in HTML.
   * @property {string} [hiddenState] Hidden state name.
   * @property {string} [textState] Text state name.
   * @property {string} [iconState] Icon state name.
   * @property {string|null} [activeState] Active (mousedown) state name. Set false to disable.
   * @property {string} [mediaState] Media (image/video) state name.
   * @property {Object} [stateDetection] State detection rules.
   * @property {boolean} [visible] Is cursor visible by default.
   * @property {boolean} [visibleOnState] Automatically show/hide cursor when state added.
   * @property {number} [speed] Cursor movement speed.
   * @property {string} [ease] Timing function of cursor movement.
   * @property {boolean} [overwrite] Overwrite or remain cursor position when `mousemove` event happens.
   * @property {number} [skewing] Default skewing factor.
   * @property {number} [skewingText] Skewing effect factor in a text state.
   * @property {number} [skewingIcon] Skewing effect factor in a icon state.
   * @property {number} [skewingMedia] Skewing effect factor in a media (image/video) state.
   * @property {number} [skewingDelta] Skewing effect base delta.
   * @property {number} [skewingDeltaMax] Skew effect max delta.
   * @property {number} [stickDelta] Stick effect delta.
   * @property {number} [showTimeout] Delay before show.
   * @property {boolean} [hideOnLeave] Hide the cursor when mouse leave container.
   * @property {number} [hideTimeout] Delay before hiding. It should be equal to the CSS hide animation time.
   * @property {number[]} [initialPos] Array (x, y) of initial cursor position.
   */

  /**
   * Register GSAP animation library.
   *
   * @param {gsap} gsap GSAP library.
   */
  MouseFollower.registerGSAP = function registerGSAP(gsap) {
    MouseFollower.gsap = gsap;
  }
  /**
   * Create cursor instance.
   *
   * @param {MouseFollowerOptions} [options] Cursor options.
   */
  ;

  function MouseFollower(options) {
    if (options === void 0) {
      options = {};
    }

    /** @type {MouseFollowerOptions} **/
    this.options = Object.assign({}, {
      el: null,
      container: document.body,
      className: 'mf-cursor',
      innerClassName: 'mf-cursor-inner',
      textClassName: 'mf-cursor-text',
      mediaClassName: 'mf-cursor-media',
      mediaBoxClassName: 'mf-cursor-media-box',
      iconSvgClassName: 'mf-svgsprite',
      iconSvgNamePrefix: '-',
      iconSvgSrc: '',
      dataAttr: 'cursor',
      hiddenState: '-hidden',
      textState: '-text',
      iconState: '-icon',
      activeState: '-active',
      mediaState: '-media',
      stateDetection: {
        '-pointer': 'a,button'
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: 'expo.out',
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.15,
      showTimeout: 0,
      hideOnLeave: true,
      hideTimeout: 300,
      hideMediaTimeout: 300,
      initialPos: [-window.innerWidth, -window.innerHeight]
    }, options);
    if (this.options.visible && options.stateDetection == null) this.options.stateDetection['-hidden'] = 'iframe';
    this.gsap = MouseFollower.gsap || window.gsap;
    this.el = typeof this.options.el === 'string' ? document.querySelector(this.options.el) : this.options.el;
    this.container = typeof this.options.container === 'string' ? document.querySelector(this.options.container) : this.options.container;
    this.skewing = this.options.skewing;
    this.pos = {
      x: this.options.initialPos[0],
      y: this.options.initialPos[1]
    };
    this.vel = {
      x: 0,
      y: 0
    };
    this.event = {};
    this.events = [];
    this.init();
  }
  /**
   * Init cursor.
   */


  var _proto = MouseFollower.prototype;

  _proto.init = function init() {
    if (!this.el) this.create();
    this.createSetter();
    this.bind();
    this.render(true);
    this.ticker = this.render.bind(this, false);
    this.gsap.ticker.add(this.ticker);
  }
  /**
   * Create cursor DOM element and append to container.
   */
  ;

  _proto.create = function create() {
    this.el = document.createElement('div');
    this.el.className = this.options.className;
    this.el.classList.add(this.options.hiddenState);
    this.inner = document.createElement('div');
    this.inner.className = this.options.innerClassName;
    this.text = document.createElement('div');
    this.text.className = this.options.textClassName;
    this.media = document.createElement('div');
    this.media.className = this.options.mediaClassName;
    this.mediaBox = document.createElement('div');
    this.mediaBox.className = this.options.mediaBoxClassName;
    this.media.appendChild(this.mediaBox);
    this.inner.appendChild(this.media);
    this.inner.appendChild(this.text);
    this.el.appendChild(this.inner);
    this.container.appendChild(this.el);
  }
  /**
   * Create GSAP setters.
   */
  ;

  _proto.createSetter = function createSetter() {
    this.setter = {
      x: this.gsap.quickSetter(this.el, 'x', 'px'),
      y: this.gsap.quickSetter(this.el, 'y', 'px'),
      rotation: this.gsap.quickSetter(this.el, 'rotation', 'deg'),
      scaleX: this.gsap.quickSetter(this.el, 'scaleX'),
      scaleY: this.gsap.quickSetter(this.el, 'scaleY'),
      wc: this.gsap.quickSetter(this.el, 'willChange'),
      inner: {
        rotation: this.gsap.quickSetter(this.inner, 'rotation', 'deg')
      }
    };
  }
  /**
   * Create and attach events.
   */
  ;

  _proto.bind = function bind() {
    var _this = this;

    this.event.mouseleave = function () {
      return _this.hide();
    };

    this.event.mouseenter = function () {
      return _this.show();
    };

    this.event.mousedown = function () {
      return _this.addState(_this.options.activeState);
    };

    this.event.mouseup = function () {
      return _this.removeState(_this.options.activeState);
    };

    this.event.mousemoveOnce = function () {
      return _this.show();
    };

    this.event.mousemove = function (e) {
      _this.gsap.to(_this.pos, {
        x: _this.stick ? _this.stick.x - (_this.stick.x - e.clientX) * _this.options.stickDelta : e.clientX,
        y: _this.stick ? _this.stick.y - (_this.stick.y - e.clientY) * _this.options.stickDelta : e.clientY,
        overwrite: _this.options.overwrite,
        ease: _this.options.ease,
        duration: _this.visible ? _this.options.speed : 0,
        onUpdate: function onUpdate() {
          return _this.vel = {
            x: e.clientX - _this.pos.x,
            y: e.clientY - _this.pos.y
          };
        }
      });
    };

    this.event.mouseover = function (e) {
      for (var target = e.target; target && target !== _this.container; target = target.parentNode) {
        if (e.relatedTarget && target.contains(e.relatedTarget)) break;

        for (var state in _this.options.stateDetection) {
          if (target.matches(_this.options.stateDetection[state])) _this.addState(state);
        }

        if (_this.options.dataAttr) {
          var params = _this.getFromDataset(target);

          if (params.state) _this.addState(params.state);
          if (params.text) _this.setText(params.text);
          if (params.icon) _this.setIcon(params.icon);
          if (params.img) _this.setImg(params.img);
          if (params.video) _this.setVideo(params.video);
          if (typeof params.show !== 'undefined') _this.show();
          if (typeof params.stick !== 'undefined') _this.setStick(params.stick || target);
        }
      }
    };

    this.event.mouseout = function (e) {
      for (var target = e.target; target && target !== _this.container; target = target.parentNode) {
        if (e.relatedTarget && target.contains(e.relatedTarget)) break;

        for (var state in _this.options.stateDetection) {
          if (target.matches(_this.options.stateDetection[state])) _this.removeState(state);
        }

        if (_this.options.dataAttr) {
          var params = _this.getFromDataset(target);

          if (params.state) _this.removeState(params.state);
          if (params.text) _this.removeText();
          if (params.icon) _this.removeIcon();
          if (params.img) _this.removeImg();
          if (params.video) _this.removeVideo();
          if (typeof params.show !== 'undefined') _this.hide();
          if (typeof params.stick !== 'undefined') _this.removeStick();
        }
      }
    };

    if (this.options.hideOnLeave) {
      this.container.addEventListener('mouseleave', this.event.mouseleave, {
        passive: true
      });
    }

    if (this.options.visible) {
      this.container.addEventListener('mouseenter', this.event.mouseenter, {
        passive: true
      });
    }

    if (this.options.activeState) {
      this.container.addEventListener('mousedown', this.event.mousedown, {
        passive: true
      });
      this.container.addEventListener('mouseup', this.event.mouseup, {
        passive: true
      });
    }

    this.container.addEventListener('mousemove', this.event.mousemove, {
      passive: true
    });

    if (this.options.visible) {
      this.container.addEventListener('mousemove', this.event.mousemoveOnce, {
        passive: true,
        once: true
      });
    }

    if (this.options.stateDetection || this.options.dataAttr) {
      this.container.addEventListener('mouseover', this.event.mouseover, {
        passive: true
      });
      this.container.addEventListener('mouseout', this.event.mouseout, {
        passive: true
      });
    }
  }
  /**
   * Render the cursor in a new position.
   *
   * @param {boolean} [force=false] Force render.
   */
  ;

  _proto.render = function render(force) {
    if (force !== true && (this.vel.y === 0 || this.vel.x === 0)) {
      this.setter.wc('auto');
      return;
    }

    this.trigger('render');
    this.setter.wc('transform');
    this.setter.x(this.pos.x);
    this.setter.y(this.pos.y);

    if (this.skewing) {
      var distance = Math.sqrt(Math.pow(this.vel.x, 2) + Math.pow(this.vel.y, 2));
      var scale = Math.min(distance * this.options.skewingDelta, this.options.skewingDeltaMax) * this.skewing;
      var angle = Math.atan2(this.vel.y, this.vel.x) * 180 / Math.PI;
      this.setter.rotation(angle);
      this.setter.scaleX(1 + scale);
      this.setter.scaleY(1 - scale);
      this.setter.inner.rotation(-angle);
    }
  }
  /**
   * Show cursor.
   */
  ;

  _proto.show = function show() {
    var _this2 = this;

    this.trigger('show');
    clearInterval(this.visibleInt);
    this.visibleInt = setTimeout(function () {
      _this2.el.classList.remove(_this2.options.hiddenState);

      _this2.visible = true;

      _this2.render(true);
    }, this.options.showTimeout);
  }
  /**
   * Hide cursor.
   */
  ;

  _proto.hide = function hide() {
    var _this3 = this;

    this.trigger('hide');
    clearInterval(this.visibleInt);
    this.el.classList.add(this.options.hiddenState);
    this.visibleInt = setTimeout(function () {
      return _this3.visible = false;
    }, this.options.hideTimeout);
  }
  /**
   * Toggle cursor.
   *
   * @param {boolean} [force] Force state.
   */
  ;

  _proto.toggle = function toggle(force) {
    if (force === true || force !== false && !this.visible) {
      this.show();
    } else {
      this.hide();
    }
  }
  /**
   * Add state/states to the cursor.
   *
   * @param {string} state State name.
   */
  ;

  _proto.addState = function addState(state) {
    var _this$el$classList;

    this.trigger('addState', state);
    if (state === this.options.hiddenState) return this.hide();

    (_this$el$classList = this.el.classList).add.apply(_this$el$classList, state.split(' '));

    if (this.options.visibleOnState) this.show();
  }
  /**
   * Remove state/states from cursor.
   *
   * @param {string} state State name.
   */
  ;

  _proto.removeState = function removeState(state) {
    var _this$el$classList2;

    this.trigger('removeState', state);
    if (state === this.options.hiddenState) return this.show();

    (_this$el$classList2 = this.el.classList).remove.apply(_this$el$classList2, state.split(' '));

    if (this.options.visibleOnState && this.el.className === this.options.className) this.hide();
  }
  /**
   * Toggle cursor state.
   *
   * @param {string} state State name.
   * @param {boolean} [force] Force state.
   */
  ;

  _proto.toggleState = function toggleState(state, force) {
    if (force === true || force !== false && !this.el.classList.contains(state)) {
      this.addState(state);
    } else {
      this.removeState(state);
    }
  }
  /**
   * Set factor of skewing effect.
   *
   * @param {number} value Skewing factor.
   */
  ;

  _proto.setSkewing = function setSkewing(value) {
    this.gsap.to(this, {
      skewing: value
    });
  }
  /**
   * Reverts skewing factor to default.
   */
  ;

  _proto.removeSkewing = function removeSkewing() {
    this.gsap.to(this, {
      skewing: this.options.skewing
    });
  }
  /**
   * Stick cursor to the element.
   *
   * @param {string|HTMLElement} element Element or selector.
   */
  ;

  _proto.setStick = function setStick(element) {
    var el = typeof element === 'string' ? document.querySelector(element) : element;
    var rect = el.getBoundingClientRect();
    this.stick = {
      y: rect.top + rect.height / 2,
      x: rect.left + rect.width / 2
    };
  }
  /**
   * Unstick cursor from the element.
   */
  ;

  _proto.removeStick = function removeStick() {
    this.stick = false;
  }
  /**
   * Transform cursor to text mode with a given string.
   *
   * @param {string} text Text.
   */
  ;

  _proto.setText = function setText(text) {
    this.text.innerHTML = text;
    this.addState(this.options.textState);
    this.setSkewing(this.options.skewingText);
  }
  /**
   * Reverts cursor from text mode.
   */
  ;

  _proto.removeText = function removeText() {
    this.removeState(this.options.textState);
    this.removeSkewing();
  }
  /**
   * Transform cursor to svg icon mode.
   *
   * @param {string} name Icon identifier.
   * @param {string} [style=""] Additional SVG styles.
   */
  ;

  _proto.setIcon = function setIcon(name, style) {
    if (style === void 0) {
      style = '';
    }

    this.text.innerHTML = "<svg class='" + this.options.iconSvgClassName + " " + this.options.iconSvgNamePrefix + name + "'" + (" style='" + style + "'><use xlink:href='" + this.options.iconSvgSrc + "#" + name + "'></use></svg>");
    this.addState(this.options.iconState);
    this.setSkewing(this.options.skewingIcon);
  }
  /**
   * Reverts cursor from icon mode.
   */
  ;

  _proto.removeIcon = function removeIcon() {
    this.removeState(this.options.iconState);
    this.removeSkewing();
  }
  /**
   * Transform cursor to media mode with a given element.
   *
   * @param {HTMLElement} element Element.
   */
  ;

  _proto.setMedia = function setMedia(element) {
    var _this4 = this;

    clearTimeout(this.mediaInt);

    if (element) {
      this.mediaBox.innerHTML = '';
      this.mediaBox.appendChild(element);
    }

    this.mediaInt = setTimeout(function () {
      return _this4.addState(_this4.options.mediaState);
    }, 20);
    this.setSkewing(this.options.skewingMedia);
  }
  /**
   * Revert cursor from media mode.
   */
  ;

  _proto.removeMedia = function removeMedia() {
    var _this5 = this;

    clearTimeout(this.mediaInt);
    this.removeState(this.options.mediaState);
    this.mediaInt = setTimeout(function () {
      return _this5.mediaBox.innerHTML = '';
    }, this.options.hideMediaTimeout);
    this.removeSkewing();
  }
  /**
   * Transform cursor to image mode.
   *
   * @param {string} url Image url.
   */
  ;

  _proto.setImg = function setImg(url) {
    if (!this.mediaImg) this.mediaImg = new Image();
    if (this.mediaImg.src !== url) this.mediaImg.src = url;
    this.setMedia(this.mediaImg);
  }
  /**
   * Reverts cursor from image mode.
   */
  ;

  _proto.removeImg = function removeImg() {
    this.removeMedia();
  }
  /**
   * Transform cursor to video mode.
   *
   * @param {string} url Video url.
   */
  ;

  _proto.setVideo = function setVideo(url) {
    if (!this.mediaVideo) {
      this.mediaVideo = document.createElement('video');
      this.mediaVideo.muted = true;
      this.mediaVideo.loop = true;
      this.mediaVideo.autoplay = true;
    }

    if (this.mediaVideo.src !== url) {
      this.mediaVideo.src = url;
      this.mediaVideo.load();
    }

    this.mediaVideo.play();
    this.setMedia(this.mediaVideo);
  }
  /**
   * Reverts cursor from video mode.
   */
  ;

  _proto.removeVideo = function removeVideo() {
    if (this.mediaVideo && this.mediaVideo.readyState > 2) this.mediaVideo.pause();
    this.removeMedia();
  }
  /**
   * Attach an event handler function.
   *
   * @param {string} event Event name.
   * @param {function} callback Callback.
   */
  ;

  _proto.on = function on(event, callback) {
    if (!(this.events[event] instanceof Array)) this.off(event);
    this.events[event].push(callback);
  }
  /**
   * Remove an event handler.
   *
   * @param {string} event Event name.
   * @param {function} [callback] Callback.
   */
  ;

  _proto.off = function off(event, callback) {
    if (callback) {
      this.events[event] = this.events[event].filter(function (f) {
        return f !== callback;
      });
    } else {
      this.events[event] = [];
    }
  }
  /**
   * Execute all handlers for the given event type.
   *
   * @param {string} event Event name.
   * @param params Extra parameters.
   */
  ;

  _proto.trigger = function trigger(event) {
    var _arguments = arguments,
        _this6 = this;

    if (!this.events[event]) return;
    this.events[event].forEach(function (f) {
      return f.call.apply(f, [_this6, _this6].concat([].slice.call(_arguments, 1)));
    });
  }
  /**
   * Get cursor options from data attribute of a given element.
   *
   * @param {HTMLElement} element Element.
   * @return {Object} Options.
   */
  ;

  _proto.getFromDataset = function getFromDataset(element) {
    var dataset = element.dataset;
    return {
      state: dataset[this.options.dataAttr],
      show: dataset[this.options.dataAttr + 'Show'],
      text: dataset[this.options.dataAttr + 'Text'],
      icon: dataset[this.options.dataAttr + 'Icon'],
      img: dataset[this.options.dataAttr + 'Img'],
      video: dataset[this.options.dataAttr + 'Video'],
      stick: dataset[this.options.dataAttr + 'Stick']
    };
  }
  /**
   * Destroy cursor instance.
   */
  ;

  _proto.destroy = function destroy() {
    this.trigger('destroy');
    this.gsap.ticker.remove(this.ticker);
    this.container.removeEventListener('mouseleave', this.event.mouseleave);
    this.container.removeEventListener('mouseenter', this.event.mouseenter);
    this.container.removeEventListener('mousedown', this.event.mousedown);
    this.container.removeEventListener('mouseup', this.event.mouseup);
    this.container.removeEventListener('mousemove', this.event.mousemove);
    this.container.removeEventListener('mousemove', this.event.mousemoveOnce);
    this.container.removeEventListener('mouseover', this.event.mouseover);
    this.container.removeEventListener('mouseout', this.event.mouseout);

    if (this.el) {
      this.container.removeChild(this.el);
      this.el = null;
      this.mediaImg = null;
      this.mediaVideo = null;
    }
  };

  return MouseFollower;
}();




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/assets/js/layout": 0,
/******/ 			"assets/css/layout": 0,
/******/ 			"assets/css/tmdr-admin": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["assets/css/layout","assets/css/tmdr-admin"], () => (__webpack_require__("./source/js/layout.js")))
/******/ 	__webpack_require__.O(undefined, ["assets/css/layout","assets/css/tmdr-admin"], () => (__webpack_require__("./source/scss/layout.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/layout","assets/css/tmdr-admin"], () => (__webpack_require__("./source/scss/tmdr-admin.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=layout.js.map