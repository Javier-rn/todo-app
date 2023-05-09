(()=>{"use strict";var n={917:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n",""]);const c=a},426:(n,e,r)=>{r.d(e,{Z:()=>p});var t=r(81),o=r.n(t),i=r(645),a=r.n(i),c=r(667),s=r.n(c),d=new URL(r(447),r.b),l=a()(o()),u=s()(d);l.push([n.id,"@font-face {\r\n  font-family: 'Montserrat';\r\n  src: url("+u+");\r\n}\r\n\r\nbody {\r\n  font-family: 'Montserrat', sans-serif;\r\n}\r\n\r\n.main-content {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n}\r\n\r\nheader {\r\n  background-color: #f98f13;\r\n  font-weight: bold;\r\n  height: 13vh;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 2px solid #004266;\r\n}\r\n\r\nheader h1 {\r\n  color: #004266;\r\n  margin-left: 30px;\r\n  font-size: 3em;\r\n  text-shadow: 3px 3px 0px #f98f13, 6px 6px 0px #004266;\r\n}\r\n\r\nnav {\r\n  background-color: #eae2b7;\r\n  height: 100vh;\r\n  border-right: 2px solid #004266;\r\n}\r\nnav .nav-header {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n#add-folder-btn {\r\n  margin: 0 5px;\r\n}\r\n\r\nbutton {\r\n  transform: scale(2);\r\n  background-color: #75928f41;\r\n  color: inherit;\r\n  border: none;\r\n  width: 20px;\r\n  height: 20px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  font: inherit;\r\n  cursor: pointer;\r\n  outline: inherit;\r\n  margin-right: 10px;\r\n}\r\n\r\nnav p {\r\n  font-weight: bold;\r\n  font-size: 1.1em;\r\n}\r\n\r\nnav ul {\r\n  margin: 30px 0;\r\n}\r\n\r\nnav ul li {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  margin: 10px 0;\r\n  padding: 10px 10px;\r\n  border-bottom: 1px solid #00426651;\r\n  border-radius: 5px;\r\n  background-color: #75928f1a;\r\n  cursor: pointer;\r\n  user-select: none;\r\n}\r\n\r\n#folders li button {\r\n  transform: scale(1.3);\r\n}\r\n\r\n#folders li input {\r\n  width: 70%;\r\n  background: none;\r\n  border: none;\r\n  outline: 1px solid #00426651;\r\n  border-radius: 3px;\r\n}\r\n\r\nnav ul li:active {\r\n  border: none;\r\n}\r\n\r\n.active {\r\n  background-color: #75928f63;\r\n  border-left: 3px solid #00426651;\r\n}\r\n\r\n/* nav ul li:last-child {\r\n    border: none;\r\n  } */\r\n\r\n.nav-content {\r\n  margin: 30px 20px;\r\n}\r\n\r\n.todos {\r\n  background-color: #eae2b7;\r\n  height: 100vh;\r\n}\r\n\r\n.todos-content {\r\n  margin: 60px 50px 60px 30px;\r\n  height: 70%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.reveal-inputs-btn {\r\n  margin-top: 1em;\r\n  align-self: center;\r\n}\r\n\r\n.add-todo-btn {\r\n  transform: scale(1);\r\n}\r\n\r\ninput[type='checkbox'] {\r\n  display: inline;\r\n  width: 16px;\r\n  height: 16px;\r\n}\r\n\r\n.row {\r\n  padding: 2px 0;\r\n  margin: 10px 0;\r\n  display: grid;\r\n  grid-template-columns: 0.3fr 0.3fr 1.5fr 4fr 1fr 0.7fr;\r\n  border-bottom: 1px solid #00426618;\r\n}\r\n\r\n.inputs {\r\n  display: grid;\r\n  grid-template-columns: 0.3fr 0.3fr 1.5fr 4fr 1fr 0.7fr;\r\n  align-items: center;\r\n}\r\n\r\n.inputs input {\r\n  width: 90%;\r\n  background: none;\r\n  border: none;\r\n  outline: 1px solid #00426651;\r\n  border-radius: 3px;\r\n  position: relative;\r\n  bottom: 0.5em;\r\n}\r\n.hidden {\r\n  visibility: hidden;\r\n}\r\n",""]);const p=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,t);t.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},447:(n,e,r)=>{n.exports=r.p+"3faa3eef13649db02044.ttf"}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),s=r.n(c),d=r(216),l=r.n(d),u=r(589),p=r.n(u),f=r(917),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=r(426),b={};b.styleTagTransform=p(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=o(),b.insertStyleElement=l(),e()(h.Z,b),h.Z&&h.Z.locals&&h.Z.locals;const g=[];function v(n){g.push(n)}const y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let x;const w=new Uint8Array(16);function E(){if(!x&&(x="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!x))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return x(w)}const k=[];for(let n=0;n<256;++n)k.push((n+256).toString(16).slice(1));const S=function(n,e,r){if(y.randomUUID&&!e&&!n)return y.randomUUID();const t=(n=n||{}).random||(n.rng||E)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,e){r=r||0;for(let n=0;n<16;++n)e[r+n]=t[n];return e}return function(n,e=0){return(k[n[e+0]]+k[n[e+1]]+k[n[e+2]]+k[n[e+3]]+"-"+k[n[e+4]]+k[n[e+5]]+"-"+k[n[e+6]]+k[n[e+7]]+"-"+k[n[e+8]]+k[n[e+9]]+"-"+k[n[e+10]]+k[n[e+11]]+k[n[e+12]]+k[n[e+13]]+k[n[e+14]]+k[n[e+15]]).toLowerCase()}(t)},A=class{constructor(n){this.name=n,this.todos=[],this.id=S()}addTodo(n){this.todos.push(n)}};function T(n){const e=document.querySelector("#folders").children;for(let n of e)n.className="";n.className="active"}const q=function(n,e){const r=document.createElement("li");r.textContent=n.name,function(n){n.addEventListener("click",(function(e){T(n)}))}(r),r.id=e,document.querySelector("#folders").append(r),T(r)};document.querySelector("#add-folder-btn").addEventListener("click",(function(n){const e=document.querySelector("#folders");if(2!==e.children[e.children.length-1].children.length){const n=document.createElement("input");n.setAttribute("type","text");const r=document.createElement("button");r.textContent="+",r.addEventListener("click",(function(n){const e=n.target.previousElementSibling.value;if(e){const r=new A(e);n.target.parentNode.remove(),v(r),q(r,r.id)}}));const t=document.createElement("li");t.append(n),t.append(r),e.append(t)}})),function(){const n=document.querySelector(".reveal-inputs-btn");n.addEventListener("click",(function(e){const r=e.target.parentNode.getElementsByClassName("row");[...r[r.length-1].classList].includes("inputs")||e.target.parentNode.insertBefore(function(){const n=document.createElement("div"),e=document.createElement("button"),r=document.createElement("span"),t=document.createElement("input"),o=document.createElement("input"),i=document.createElement("input"),a=document.createElement("input");return e.classList.add("add-todo-btn"),e.textContent="+",e.addEventListener("click",(function(n){const e=n.target.parentNode.getElementsByTagName("input"),r=e[0].value,t=e[1].value,o=e[2].value,i=e[3].value;new class{constructor(n,e,r,t){this.title=n,this.description=e,this.dueDate=r,this.priority=t}}(r,t,o,i),document.querySelector("#folders").querySelector(".active")})),t.setAttribute("type","text"),t.setAttribute("placeholder","Title"),o.setAttribute("type","text"),o.setAttribute("placeholder","Description"),i.setAttribute("type","text"),i.setAttribute("placeholder","Due"),a.setAttribute("type","text"),a.setAttribute("placeholder","Priority"),n.append(e),n.append(r),n.append(t),n.append(o),n.append(i),n.append(a),n.classList.add("row","inputs"),n}(),n)}))}();const L=new A("Main");v(L),q(L,L.id)})()})();