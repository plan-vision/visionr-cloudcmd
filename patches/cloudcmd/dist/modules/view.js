!function(e){function t(t){for(var r,u,s=t[0],c=t[1],a=t[2],d=0,l=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(f&&f(t);l.length;)l.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={19:0},i=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var f=c;i.push([92,0]),n()}({168:function(e,t){},92:function(e,t,n){"use strict";n(168);const r=n(13),o=n(14),i=n(4),u=n(0),s=n(3),c=n(93),a=n(2),{time:f}=n(10),{FS:d}=n(6),l=n(16),p=n(17),m=n(5),y=n(1),{encode:h}=n(18),{isArray:w}=Array,v=u((e,t)=>t.test(e)),g=u((e,t,n,r)=>e(r,t,n))(p.add),b=e=>RegExp(`\\.${e}$`,"i"),C=m.css;e.exports.show=async function(e,t){const n=CloudCmd.prefixURL+d;if(O)return;t&&!1===t.bindKeys||p.addKey(F);if(j=a("div",{className:"view",notAppend:!0}),j.tabIndex=0,e)return w(e)?j.append(...e):j.append(e),void c.open(j,function(e,t){const n={...e};if(!t)return n;const o=Object.keys(t);for(const e of o){const o=!!n[e],u=t[e];if(!r.function(u)||!o){n[e]=t[e];continue}const s=n[e];n[e]=()=>{i.series([s,u])}}return n}(P,t));y.show.load();const u=n+x.path;switch(function(e){if((e=>/\.(pdf)$/i.test(e))(e))return"pdf";if(D(e))return"image";if(function(e){return E(e)||function(e){return/\.(mp4|avi|webm)$/i.test(e)}(e)}(e))return"media"}(u)){default:return void x.getData((e,t)=>{if(e)return y.hide();const n=document.createTextNode(t),r={...P};CloudCmd.config("showFileName")&&(r.title=x.name),j.append(n),c.open(j,r)});case"image":return function(e){const t=x.files.map(DOM.getCurrentPath).filter(D),n=t.map(t=>{return{href:e+t,title:h((n=t,n.split("/").pop()))};var n}),r={index:t.indexOf(x.path),autoSize:!0,arrows:!0,keys:!0,helpers:{title:{}}},o={...P,...r};c.open(n,o)}(n);case"media":return async function(e){const[t,n]=await async function(e){!function(e){if("string"!=typeof e)throw Error("src should be a string!")}(e);const[t,n]=await s(l.get,"view/media-tmpl");if(t)return[t];const{name:r}=x;M||(M=n);const i=E(r),u=o(M,{src:e,type:i?"audio":"video",name:r});return[null,a("div",{innerHTML:u})]}(e);if(t)return alert(t);const r={...P,autoSize:!0,afterShow:()=>{n.querySelector("audio, video").focus()}};c.open(n,r)}(u);case"pdf":return function(e){const t=a("iframe",{src:e,width:"100%",height:"100%"});t.addEventListener("load",()=>{t.contentWindow.addEventListener("keydown",F)});const n={...P};CloudCmd.config("showFileName")&&(n.title=x.name);c.open(t,n)}(u)}},e.exports.hide=k;let O=!1;CloudCmd.View=e.exports;const x=DOM.CurrentInfo,{Key:S}=CloudCmd;let j,M;const P={beforeShow:e=>{y.hide(),S.unsetBind(),i(e)},beforeClose:e=>{p.rmKey(F),S.setBind(),i(e)},afterShow:e=>{j.focus(),i(e)},onOverlayClick:_,afterClose:i,autoSize:!1,helpers:{title:{}}};function k(){c.close()}function D(e){return["jp(e|g|eg)","gif","png","bmp","webp","svg","ico"].map(b).some(v(e))}function E(e){return/\.(mp3|ogg|m4a)$/i.test(e)}e.exports.init=async()=>{await async function(){const{prefix:e}=CloudCmd;f("View load"),O=!0,await C(e+"/dist/view.css"),O=!1}();["click","contextmenu"].forEach(g(void 0,_))};function _(e){!function(e){const t=DOM.getCurrentByPosition(e);if(!t)return;const{files:n,filesPassive:r}=x,o=~n.indexOf(t),i=~r.indexOf(t);if(!o&&!i)return;if(DOM.isCurrentFile(t))return;DOM.setCurrentFile(t)}({x:e.clientX,y:e.clientY})}function F({keyCode:e}){e===S.ESC&&k()}}});
//# sourceMappingURL=view.js.map