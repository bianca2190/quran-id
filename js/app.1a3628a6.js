(function(e){function t(t){for(var n,a,i=t[0],s=t[1],c=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);h&&h(t);while(d.length)d.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(u.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={1:0},o={1:0},u=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{2:"1b9c84b9",3:"055e5cb4",4:"302ce413",5:"2f1b29c3",6:"703d6c3f",7:"c794d00e",8:"5ca6e3b1"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={2:1,3:1,4:1,5:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{2:"97f5c4e0",3:"97f5c4e0",4:"97f5c4e0",5:"0e433876",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",o=s.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=u[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===n||l===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],h.parentNode.removeChild(h),r(u)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(h);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/quran-id/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var h=l;u.push([0,0]),r()})({0:function(e,t,r){e.exports=r("2f39")},"0047":function(e,t,r){},"2f39":function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"getSurahList",(function(){return L})),r.d(n,"getSurah",(function(){return P})),r.d(n,"getSurahLastRead",(function(){return j})),r.d(n,"getQuranReaderScrollPosition",(function(){return R}));var a={};r.r(a),r.d(a,"showLoading",(function(){return O})),r.d(a,"hideLoading",(function(){return x})),r.d(a,"updateSurahList",(function(){return T})),r.d(a,"updateSurah",(function(){return q})),r.d(a,"updateSurahLastRead",(function(){return Q})),r.d(a,"updateQuranReaderScrollPosition",(function(){return _}));var o={};r.r(o),r.d(o,"fetchSurahList",(function(){return A})),r.d(o,"fetchSurah",(function(){return k})),r.d(o,"setSurahLastRead",(function(){return E})),r.d(o,"removeSurahLastRead",(function(){return N})),r.d(o,"setQuranReaderScrollPosition",(function(){return $}));r("e6cf"),r("5319"),r("7d6e"),r("e54f"),r("985d"),r("0047");var u=r("2b0e"),i=r("1f91"),s=r("42d2"),c=r("b05d"),l=r("2a19"),d=r("18d6"),h=r("9c64");u["a"].use(c["a"],{config:{},lang:i["a"],iconSet:s["a"],plugins:{Notify:l["a"],LocalStorage:d["a"],Meta:h["a"]}});var f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},p=[],m={name:"App"},g=m,b=r("2877"),v=Object(b["a"])(g,f,p,!1,null,null,null),y=v.exports,S=r("2f62"),w=function(){return{surahList:[],surah:null,surahLastRead:d["a"].getItem("surah-last-read"),quranReaderScrollPosition:d["a"].getItem("surah-list-scroll-position"),loading:{fetchSurahList:!1,fetchSurah:!1}}};function L(e){return e.surahList}function P(e){return e.surah}function j(e){return e.surahLastRead}function R(e){return e.quranReaderScrollPosition}function O(e,t){e.loading[t]=!0}function x(e,t){e.loading[t]=!1}function T(e,t){e.surahList=t}function q(e,t){e.surah=t}function Q(e,t){e.surahLastRead=t}function _(e,t){e.quranReaderScrollPosition=t}r("ddb0");function A(e){return e.commit("showLoading","fetchSurahList"),new Promise(((t,r)=>{this.$httpQuran({url:"chapters",params:{language:"id"}}).then((r=>{e.commit("updateSurahList",r.data.chapters),e.commit("hideLoading","fetchSurahList"),t(r)})).catch((t=>{e.commit("hideLoading","fetchSurahList"),r(t)}))}))}async function k(e,t){e.commit("showLoading","fetchSurah");const r=await this.$httpQuran({url:`chapters/${t}`,params:{language:"id"}}).then((e=>e.data.chapter)).catch((e=>console.log(e))),n=[{url:"quran/verses/uthmani",params:{chapter_number:t}},{url:"quran/translations/33",params:{chapter_number:t,fields:"verse_number"}}],a=[];return n.forEach((e=>{a.push(new Promise(((t,r)=>{this.$httpQuran({url:e.url,params:e.params}).then((e=>{t(e.data)})).catch((e=>{console.log(e),r(e)}))})))})),Promise.all(a).then((t=>{const n=t[0].verses,a=t[1].translations,o=Object.assign({ayahs:n,translations:a},r);e.commit("updateSurah",o),e.commit("hideLoading","fetchSurah")})).catch((t=>{console.log(t),e.commit("hideLoading","fetchSurah")}))}function E(e,{surah:t,offsetTop:r}){const n=Object.assign({offsetTop:r},t);d["a"].set("surah-last-read",n),e.commit("updateSurahLastRead",n)}function N(e){d["a"].remove("surah-last-read"),e.commit("updateSurahLastRead",null)}function $(e,{offsetTop:t}){d["a"].set("surah-list-scroll-position",t),e.commit("updateQuranReaderScrollPosition",t)}var C={namespaced:!0,state:w,getters:n,mutations:a,actions:o};u["a"].use(S["a"]);var B=function(){const e=new S["a"].Store({modules:{quran:C},strict:!1});return e},M=r("8c4f");const D=[{path:"/",component:()=>Promise.all([r.e(0),r.e(6)]).then(r.bind(null,"713b")),children:[{path:"",alias:"reader",name:"QuranReader",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"8fc9"))},{path:"reader/:surahId",name:"QuranReaderDetail",component:()=>Promise.all([r.e(0),r.e(8)]).then(r.bind(null,"d942")),props:!0},{path:"player",name:"QuranPlayer",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"9ad9"))},{path:"bookmark",name:"QuranBookmark",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"4d15"))},{path:"about",name:"AboutIndex",component:()=>Promise.all([r.e(0),r.e(2)]).then(r.bind(null,"a7b5"))}]},{path:"*",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"e51e"))}];var I=D;u["a"].use(M["a"]);var V=function(){const e=new M["a"]({scrollBehavior:()=>({x:0,y:0}),routes:I,mode:"hash",base:"/quran-id/"});return e},J=async function(){const e="function"===typeof B?await B({Vue:u["a"]}):B,t="function"===typeof V?await V({Vue:u["a"],store:e}):V;e.$router=t;const r={router:t,store:e,render:e=>e(y),el:"#q-app"};return{app:r,store:e,router:t}},F=r("9483"),U=r("a002"),z=r.n(U);Object(F["a"])("/quran-id/service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){l["a"].create({classes:"notify-update no-box-shadow",message:"Terdapat pembaruan.",icon:"update",closeBtn:"Perbarui",timeout:1e4,onDismiss(){z.a.clear().then((function(){window.location.reload()})).catch((function(e){console.log("Localforage",e)}))}})},offline(){},error(){}});var H=r("bc3a"),K=r.n(H),W=r("6f0d");const X=Object(W["setupCache"])({maxAge:0}),G=K.a.create({adapter:X.adapter,baseURL:"https://api.quran.com/api/v4/",headers:{"X-Requested-With":"xmlhttprequest"}});var Y=({store:e,Vue:t})=>{t.prototype.$http=K.a,e.$http=K.a,t.prototype.$httpQuran=G,e.$httpQuran=G};l["a"].registerType("toast",{classes:"notify-toast no-box-shadow",badgeStyle:"display: none",timeout:3e3}),l["a"].registerType("toast-error",{classes:"notify-toast error no-box-shadow",badgeStyle:"display: none",timeout:3e3});var Z=r("0831"),ee=r("9224");const{getScrollTarget:te,setScrollPosition:re}=Z["a"];var ne=({Vue:e})=>{e.mixin({data(){return{basmalahArabic:"﷽",productName:ee["b"],productDescription:ee["a"]}},methods:{removeFootNote(e){const t=/<sup\s+foot_note=\d+>\d+<\/sup>/gi;return e.replaceAll(t,"")},scrollToElement(e,t=-66){const r=te(e),n=e.offsetTop+t,a=1e3;re(r,n,a)},normalizeSurahNameTranslation(e){return e.replace(/\\/g,"")},arabicNumber(e){const t=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],r="&#1757;";return r+e.toString().split("").map((e=>t[e])).join("")}}})};/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&r.e(0).then(r.t.bind(null,"a0db",7));const ae="/quran-id/",oe=/\/\//,ue=e=>(ae+e).replace(oe,"/");async function ie(){const{app:e,store:t,router:r}=await J();let n=!1;const a=e=>{n=!0;const t=Object(e)===e?ue(r.resolve(e).route.fullPath):e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),i=[Y,void 0,ne];for(let c=0;!1===n&&c<i.length;c++)if("function"===typeof i[c])try{await i[c]({app:e,router:r,store:t,Vue:u["a"],ssrContext:null,redirect:a,urlPath:o,publicPath:ae})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==n&&new u["a"](e)}ie()},9224:function(e){e.exports=JSON.parse('{"a":"Al-Quran dan Terjemahan","b":"Al-Quran"}')}});