(function(e){function t(t){for(var r,o,i=t[0],l=t[1],s=t[2],p=0,u=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(u.length)u.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"28cb":function(e,t,n){},3421:function(e,t,n){"use strict";n("28cb")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function a(e,t,n,a,c,o){var i=Object(r["k"])("FolderView");return Object(r["g"])(),Object(r["c"])(i,{name:"$",folders:e.folders,files:e.files},null,8,["folders","files"])}n("b0c0");var c=n("bfb3"),o=n.n(c);Object(r["i"])("data-v-eb3bf2b6");var i={class:"container"},l=Object(r["f"])("div",{class:"fold__img"},[Object(r["f"])("img",{src:o.a,class:"fold"})],-1),s={class:"fold__name"};function f(e,t,n,a,c,o){var f=Object(r["k"])("FolderView",!0),p=Object(r["k"])("FileView");return Object(r["g"])(),Object(r["e"])("div",i,[Object(r["f"])("div",{class:"fold",onClick:t[0]||(t[0]=function(){return o.toggleFolder&&o.toggleFolder.apply(o,arguments)})},[l,Object(r["f"])("p",s,Object(r["l"])(n.name),1)]),c.opened?(Object(r["g"])(),Object(r["e"])(r["a"],{key:0},[(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(n.folders,(function(e){return Object(r["g"])(),Object(r["c"])(f,{name:e.name,folders:e.folders,files:e.files},null,8,["name","folders","files"])})),256)),(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(n.files,(function(e){return Object(r["g"])(),Object(r["c"])(p,{name:e.name},null,8,["name"])})),256))],64)):Object(r["d"])("",!0)])}Object(r["h"])();var p=n("612a"),u=n.n(p);Object(r["i"])("data-v-6a5a0f52");var d={class:"container"},b={class:"item"},g=Object(r["f"])("div",{class:"item__img"},[Object(r["f"])("img",{src:u.a,class:"item"})],-1),m={class:"item__name"};function j(e,t,n,a,c,o){return Object(r["g"])(),Object(r["e"])("div",d,[Object(r["f"])("div",b,[g,Object(r["f"])("p",m,Object(r["l"])(n.name),1)])])}Object(r["h"])();var O={name:"FileView",props:{name:String}},v=(n("3421"),n("d959")),y=n.n(v);const h=y()(O,[["render",j],["__scopeId","data-v-6a5a0f52"]]);var w=h,_={name:"FolderView",components:{FileView:w},props:{name:String,folders:Array,files:Array},data:function(){return{opened:!1}},methods:{toggleFolder:function(){this.opened=!this.opened}}};n("c86e");const k=y()(_,[["render",f],["__scopeId","data-v-eb3bf2b6"]]);var x=k,F={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},P={name:"App",components:{FolderView:x},data:function(){return F}};n("ffa2");const S=y()(P,[["render",a]]);var V=S;Object(r["b"])(V).mount("#app")},"5cc9":function(e,t,n){},"612a":function(e,t,n){e.exports=n.p+"img/file.600688c7.png"},"7a60":function(e,t,n){},bfb3:function(e,t,n){e.exports=n.p+"img/folder.ef3cd91d.png"},c86e:function(e,t,n){"use strict";n("5cc9")},ffa2:function(e,t,n){"use strict";n("7a60")}});
//# sourceMappingURL=app.e6d26204.js.map