if(!self.define){let e,d={};const i=(i,n)=>(i=new URL(i+".js",n).href,d[i]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=d,document.head.appendChild(e)}else e=i,importScripts(i),d()})).then((()=>{let e=d[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(d[r])return;let s={};const f=e=>i(e,r),a={module:{uri:r},exports:s,require:f};d[r]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(c(...e),s)))}}define(["./workbox-0300ce97"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"414.bundle.js",revision:"6dd168b522c0458c3934cd6443ad5f93"},{url:"989.bundle.js",revision:"ec00b2162f817f70cd1f70f94edfe852"},{url:"989.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"8ca859c5c41b9ae708a3986f280d0292"},{url:"app~3be1d310.bundle.js",revision:"d3e9fddc696206e7006e4caea14de640"},{url:"app~8a5603d9.bundle.js",revision:"8dc0e5c4bb2aed38b6cba9dbb55b32b5"},{url:"app~8a5603d9.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a51fa3f5.bundle.js",revision:"c6ded6dbd85b284ae5ff2b3aec4a2547"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"1eec7479fc7c3dc54b67cfb50dcbccd3"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"82ba6b51b86fdde09debc42f78e2fee3"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"favicon.png",revision:"3d7d7aa15b44ef9c864b1b3d9c1c3c67"},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"index.html",revision:"5d9c87f3f938ddb0746b8139d01d9c83"},{url:"logo.png",revision:"18d06e49d7fd8ddea32ddac07c7673cf"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"2023-05-26T23:17:02.050Z",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
