if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return a[e]||(i=new Promise(async i=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=i}else importScripts(e),i()})),i.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},i=(i,a)=>{Promise.all(i.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(i)};self.define=(i,c,n)=>{a[i]||(a[i]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+i.slice(1)};return Promise.all(c.map(i=>{switch(i){case"exports":return a;case"module":return r;default:return e(i)}})).then(e=>{const i=n(...e);return a.default||(a.default=i),a})}))}}define("./service-worker.js",["./workbox-17d1bea3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"quran-id"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/quran-id/404.html",revision:"44e7bbf4fda9fc4f759dadd174c85534"},{url:"/quran-id/css/2.777dc3dc.css",revision:"60e815274a6b2bfd8bb3d0903a819050"},{url:"/quran-id/css/3.9b186bf9.css",revision:"540ce6210f1d7c81b9c9ac7322a5b022"},{url:"/quran-id/css/4.97f5c4e0.css",revision:"39fb7683038e315cf7fa8fd5831daedc"},{url:"/quran-id/css/5.97f5c4e0.css",revision:"39fb7683038e315cf7fa8fd5831daedc"},{url:"/quran-id/css/6.97f5c4e0.css",revision:"39fb7683038e315cf7fa8fd5831daedc"},{url:"/quran-id/css/app.20be3ff7.css",revision:"49d083090b662924c2124a06a63d4f7b"},{url:"/quran-id/css/vendor.47319c51.css",revision:"60f6a3275828247cb1474d6aa47b6434"},{url:"/quran-id/favicon.ico",revision:"69bae22329adc918bde5f53ae3ec23e4"},{url:"/quran-id/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.9391e6e2.woff",revision:"04b7fd97f88b82dccce5ec446ccc29e6"},{url:"/quran-id/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.ddd11dab.woff",revision:"da2721c68b4bc80db8d4c404f76b118c"},{url:"/quran-id/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.877b9231.woff",revision:"bf0f407102faf3a0b521d3b545f547a5"},{url:"/quran-id/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.0344cc3c.woff",revision:"68d6dabfe54e245e7d5d5c16c3c4b1a9"},{url:"/quran-id/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.b555d228.woff",revision:"64bba9c4e8156c152050c657e9d24bf1"},{url:"/quran-id/fonts/KFOmCnqEu92Fr1Mu4mxM.9b78ea3b.woff",revision:"dc3e086fc0c5addc09702e111d2adb42"},{url:"/quran-id/fonts/ScheherazadeNew-Bold.98d979f2.woff",revision:"818c1ac75f9401fd0966a7c8e7c7792f"},{url:"/quran-id/fonts/ScheherazadeNew-Regular.43576f70.woff",revision:"378da562638e2d55bfe1f272098210a1"},{url:"/quran-id/fonts/UthmanicHafs1-Ver17.fc43f400.ttf",revision:"be12301c5fc4ed20e1c477ea2911fe4e"},{url:"/quran-id/fonts/ZekrQuran.68488709.woff2",revision:"eb4e4ca78932945759f656b36114ba5b"},{url:"/quran-id/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.a7d6a198.woff",revision:"2fe4e4645bd07e2af2f93df3460d0e0b"},{url:"/quran-id/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4c7c4ea2.woff2",revision:"45adca5a633472cf92229f56b2fa096e"},{url:"/quran-id/fonts/materialdesignicons-webfont.d8e8e0f7.woff",revision:"147e3378b44bc9570418b1eece10dd7c"},{url:"/quran-id/fonts/materialdesignicons-webfont.e9db4005.woff2",revision:"7a44ea195f395e1d086010e44555a5c4"},{url:"/quran-id/fonts/me_quran_volt_newmet.0df26bab.ttf",revision:"a79b204e9c3055c77f0d81921bd881c2"},{url:"/quran-id/icons/apple-icon-120x120.png",revision:"f2e1c6725b3d9d9c0a2b7962e2cff078"},{url:"/quran-id/icons/apple-icon-152x152.png",revision:"0c904f4868247d4a0d0c496b588899b2"},{url:"/quran-id/icons/apple-icon-167x167.png",revision:"b33cfd21e4a6339f357d8f3c5e7523d1"},{url:"/quran-id/icons/apple-icon-180x180.png",revision:"6cd275973fde564ed1c687f581946e4e"},{url:"/quran-id/icons/apple-launch-1125x2436.png",revision:"3321506bef1fff6fcf09277ffd3d90bf"},{url:"/quran-id/icons/apple-launch-1242x2208.png",revision:"6288b1eaf7cc3f5343617cb656c4ee73"},{url:"/quran-id/icons/apple-launch-1242x2688.png",revision:"8dc0cd90bb70aad8924c50f9fe16f86b"},{url:"/quran-id/icons/apple-launch-1536x2048.png",revision:"c5e42eba84321fac3232a745c600d7e1"},{url:"/quran-id/icons/apple-launch-1668x2224.png",revision:"17ecdb3c8e327a9f897e8167250d1385"},{url:"/quran-id/icons/apple-launch-1668x2388.png",revision:"648127b1ab3b7099cb14516748237965"},{url:"/quran-id/icons/apple-launch-2048x2732.png",revision:"9639cfea076bc8cfe30412a88128c813"},{url:"/quran-id/icons/apple-launch-640x1136.png",revision:"4c011f8b767f703297b682ec0b1cb94d"},{url:"/quran-id/icons/apple-launch-750x1334.png",revision:"6e870b4f555eac89322d1ee90a4747c6"},{url:"/quran-id/icons/apple-launch-828x1792.png",revision:"056474c6e811fed682557e4252e52bc0"},{url:"/quran-id/icons/favicon-128x128.png",revision:"4750ef553f86e8b59cdc576ac8ee29e5"},{url:"/quran-id/icons/favicon-16x16.png",revision:"46facc4cc29e44cab5a93ca67e30301d"},{url:"/quran-id/icons/favicon-32x32.png",revision:"21a05a8e9943b855cda0ceb9f9b3f1b5"},{url:"/quran-id/icons/favicon-96x96.png",revision:"c7d258e3ce4b4957ce753f24be0efa6b"},{url:"/quran-id/icons/icon-128x128.png",revision:"4750ef553f86e8b59cdc576ac8ee29e5"},{url:"/quran-id/icons/icon-192x192.png",revision:"a92aea05fa3a181f59f0a0116dde0053"},{url:"/quran-id/icons/icon-256x256.png",revision:"4cf233c35aa3eede178f23a3c2980191"},{url:"/quran-id/icons/icon-384x384.png",revision:"e48a8d9a2faa48a9b809dc3222799894"},{url:"/quran-id/icons/icon-512x512.png",revision:"58d5fcb069f02936d39cd6a6f1a32da9"},{url:"/quran-id/icons/ms-icon-144x144.png",revision:"74642c45e7fa4a9a59bb45b99eca7324"},{url:"/quran-id/icons/safari-pinned-tab.svg",revision:"f1e42cba43068cbdc459c174e879641e"},{url:"/quran-id/img/Bismillah.b2c875f4.svg",revision:"d2217127cc76f1aadac2ff72a3d64b90"},{url:"/quran-id/img/Quran-Kareem.e4fc4c05.svg",revision:"b9e05df1f5b42779c18c09881b8ca10a"},{url:"/quran-id/index.html",revision:"2e9fced41bda3a725056495598c43ee8"},{url:"/quran-id/js/2.36263d4b.js",revision:"4e5bdeb5985d9aa5856dc32d9231a04b"},{url:"/quran-id/js/3.6d3f4fc6.js",revision:"2a4246ad2bf4a7be66893a4944e0eb00"},{url:"/quran-id/js/4.8d43707d.js",revision:"6398ab1a0aaaa5bc069eea4c9ca8a224"},{url:"/quran-id/js/5.06ac14fc.js",revision:"6b9357b402eabe071031317165f4c4e3"},{url:"/quran-id/js/6.cdaa002e.js",revision:"2ac4ac0818462f310394e0bea8ab03cb"},{url:"/quran-id/js/7.b2c84b0a.js",revision:"2b0b2c207c42e6eafbee866bba1a8dec"},{url:"/quran-id/js/8.7cb3e3ef.js",revision:"f82148c6e88465eef82cd6adb3a708df"},{url:"/quran-id/js/9.f8e0fd57.js",revision:"4db5ddbae239c115c0fd248c58fbd908"},{url:"/quran-id/js/app.1a20ae4b.js",revision:"c3340ea4c6f139b864bbaac757cdf25d"},{url:"/quran-id/js/vendor.81b9ddac.js",revision:"c16cd7413fd9fc34030e6a719b189ff4"},{url:"/quran-id/manifest.json",revision:"2f2a4d981dd4cbeb009983c009fdb351"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/quran-id/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
