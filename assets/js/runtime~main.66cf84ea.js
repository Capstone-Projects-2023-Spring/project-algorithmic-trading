(()=>{"use strict";var e,a,c,d,t,r={},f={};function b(e){var a=f[e];if(void 0!==a)return a.exports;var c=f[e]={id:e,loaded:!1,exports:{}};return r[e].call(c.exports,c,c.exports,b),c.loaded=!0,c.exports}b.m=r,b.c=f,e=[],b.O=(a,c,d,t)=>{if(!c){var r=1/0;for(i=0;i<e.length;i++){c=e[i][0],d=e[i][1],t=e[i][2];for(var f=!0,o=0;o<c.length;o++)(!1&t||r>=t)&&Object.keys(b.O).every((e=>b.O[e](c[o])))?c.splice(o--,1):(f=!1,t<r&&(r=t));if(f){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,d,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var r={};a=a||[null,c({}),c([]),c(c)];for(var f=2&d&&e;"object"==typeof f&&!~a.indexOf(f);f=c(f))Object.getOwnPropertyNames(f).forEach((a=>r[a]=()=>e[a]));return r.default=()=>e,b.d(t,r),t},b.d=(e,a)=>{for(var c in a)b.o(a,c)&&!b.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,c)=>(b.f[c](e,a),a)),[])),b.u=e=>"assets/js/"+({53:"935f2afb",686:"debda829",713:"b5fae9ec",720:"7695628c",740:"986fb218",751:"6c261d36",1194:"4e1a3442",1270:"f85a1a6c",1506:"71f2d541",1650:"fc3d0314",1996:"9ca7995a",2154:"8478f4e6",2602:"3969468d",3085:"1f391b9e",3196:"a854a899",3206:"f8409a7e",3211:"83adae89",3344:"819c0b7d",3470:"97b83a15",3729:"80b850c9",3783:"208c22c0",3860:"fb650936",3961:"ed7b2b8d",4033:"72dce597",4195:"c4f5d8e4",4533:"92d98dc0",4966:"86928986",5216:"863266b1",5509:"61dd07e5",5813:"f99371b7",6225:"c0b1a2d5",6582:"f8907193",6585:"61760bca",6654:"5410c81d",6711:"ecf98249",6937:"c28e829f",7349:"db8db704",7414:"393be207",7607:"651d1379",7799:"fdeefd99",7918:"17896441",8126:"91c4cfa2",8513:"05989c46",8525:"8c39825e",8612:"f0ad3fbb",8794:"5bc0003a",9123:"25cd59bd",9169:"c8f9dd72",9496:"43d31808",9514:"1be78505",9617:"bafd4460",9817:"14eb3368"}[e]||e)+"."+{53:"f5b1f3c1",686:"88d26c26",713:"216700bc",720:"cb0cc9bf",740:"ba3d3aa5",751:"732ee4b7",1194:"8c414b77",1270:"028c4c9d",1506:"11f725ba",1650:"a951ab1a",1996:"2205a85a",2154:"9f3a5a65",2547:"0ddce3c3",2602:"d14693ee",3085:"3108908b",3196:"a2441777",3206:"e372ca32",3211:"1454e4a7",3344:"2aed7c64",3470:"634b6829",3729:"88b35509",3783:"c076f8d9",3860:"73448568",3961:"d61e410f",4033:"545a05a1",4195:"f193b538",4533:"8a8633c4",4912:"86524f4c",4966:"1a149363",4972:"e70ff803",5216:"929da084",5509:"16c8da6c",5813:"3e37621c",6225:"15480cc7",6582:"dc553579",6585:"fa355399",6654:"b9d1c0cf",6711:"e222b848",6937:"da76886c",7349:"1bb37041",7414:"b3058095",7607:"0f1b6c9b",7799:"3f3f02ca",7918:"25f79f4f",8126:"abb553eb",8513:"6f8ff1c9",8525:"da11f6dc",8612:"31e0dc56",8794:"27702bff",9123:"215c1466",9169:"249a068d",9496:"73dae1a5",9514:"ce69a6d8",9617:"cb175e9c",9817:"6e502322"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},t="create-project-docs:",b.l=(e,a,c,r)=>{if(d[e])d[e].push(a);else{var f,o;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){f=l;break}}f||(o=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,b.nc&&f.setAttribute("nonce",b.nc),f.setAttribute("data-webpack",t+c),f.src=e),d[e]=[a];var u=(a,c)=>{f.onerror=f.onload=null,clearTimeout(s);var t=d[e];if(delete d[e],f.parentNode&&f.parentNode.removeChild(f),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=u.bind(null,f.onerror),f.onload=u.bind(null,f.onload),o&&document.head.appendChild(f)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),b.p="/project-algorithmic-trading/",b.gca=function(e){return e={17896441:"7918",86928986:"4966","935f2afb":"53",debda829:"686",b5fae9ec:"713","7695628c":"720","986fb218":"740","6c261d36":"751","4e1a3442":"1194",f85a1a6c:"1270","71f2d541":"1506",fc3d0314:"1650","9ca7995a":"1996","8478f4e6":"2154","3969468d":"2602","1f391b9e":"3085",a854a899:"3196",f8409a7e:"3206","83adae89":"3211","819c0b7d":"3344","97b83a15":"3470","80b850c9":"3729","208c22c0":"3783",fb650936:"3860",ed7b2b8d:"3961","72dce597":"4033",c4f5d8e4:"4195","92d98dc0":"4533","863266b1":"5216","61dd07e5":"5509",f99371b7:"5813",c0b1a2d5:"6225",f8907193:"6582","61760bca":"6585","5410c81d":"6654",ecf98249:"6711",c28e829f:"6937",db8db704:"7349","393be207":"7414","651d1379":"7607",fdeefd99:"7799","91c4cfa2":"8126","05989c46":"8513","8c39825e":"8525",f0ad3fbb:"8612","5bc0003a":"8794","25cd59bd":"9123",c8f9dd72:"9169","43d31808":"9496","1be78505":"9514",bafd4460:"9617","14eb3368":"9817"}[e]||e,b.p+b.u(e)},(()=>{var e={1303:0,532:0};b.f.j=(a,c)=>{var d=b.o(e,a)?e[a]:void 0;if(0!==d)if(d)c.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>d=e[a]=[c,t]));c.push(d[2]=t);var r=b.p+b.u(a),f=new Error;b.l(r,(c=>{if(b.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var t=c&&("load"===c.type?"missing":c.type),r=c&&c.target&&c.target.src;f.message="Loading chunk "+a+" failed.\n("+t+": "+r+")",f.name="ChunkLoadError",f.type=t,f.request=r,d[1](f)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,c)=>{var d,t,r=c[0],f=c[1],o=c[2],n=0;if(r.some((a=>0!==e[a]))){for(d in f)b.o(f,d)&&(b.m[d]=f[d]);if(o)var i=o(b)}for(a&&a(c);n<r.length;n++)t=r[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},c=self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})(),b.nc=void 0})();