!function(e){function t(t){for(var r,u,c=t[0],i=t[1],a=t[2],d=0,f=[];d<c.length;d++)u=c[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(l&&l(t);f.length;)f.shift()();return s.push.apply(s,a||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={18:0},s=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var l=i;s.push([113,0]),n()}({113:function(e,t,n){"use strict";n(175);const r=n(0),o=n(8),s=n(7),u=n(5),c=n(2),i=n(21),a=n(3),{codeFrameColumns:l}=n(114),d=n(1),f=n(12),p=n(129),m=n(130),y=n(131),h=n(132),{runSelected:b}=n(133),x=u.css,C=s();CloudCmd.UserMenu=e.exports;const{Key:g}=CloudCmd;e.exports.init=async()=>{await Promise.all([x(CloudCmd.prefix+"/dist/user-menu.css"),CloudCmd.View()])},e.exports.show=async function(){d.show.load("top");const{dirPath:e}=w,t=await fetch(`${CloudCmd.prefix}/api/v1/user-menu?dir=${e}`),n=await t.text(),[r,o]=i(p,n);if(d.hide(),r)return f.alert(S({error:r,source:n}));C(n);const{names:s,keys:u,items:a,settings:l}=h(o);if(l.run)return b(l.select,a,P);const m=c("button",{className:"cloudcmd-user-menu-button",innerText:"User Menu"}),y=c("select",{className:"cloudcmd-user-menu",innerHTML:v(s),size:10});m.addEventListener("click",M(a,y)),y.addEventListener("dblclick",k(o)),y.addEventListener("keydown",j({keys:u,userMenu:o}));CloudCmd.View.show([m,y],{autoSize:!0,afterShow:()=>y.focus()})},e.exports.hide=O;const{CurrentInfo:w}=DOM;function v(e){const t=[];for(const n of e)t.push(`<option>${n}</option>`);return t.join("")}function O(){CloudCmd.View.hide()}const k=r(async(e,t)=>{const{value:n}=t.target;await P(e[n])}),M=o(async(e,{value:t})=>{await P(e[t])}),j=r(async({keys:e,userMenu:t},n)=>{const{keyCode:r,target:o}=n,s=n.key.toUpperCase();let u;if(n.preventDefault(),n.stopPropagation(),r===g.ESC)return O();if(r===g.ENTER)u=t[o.value];else{if(!e[s])return m(o,n);u=e[s]}await P(u)}),P=async e=>{O();const[t]=await a(e,{DOM:DOM,CloudCmd:CloudCmd,tryToCatch:a});if(!t)return;const n=C();return f.alert(S({error:t,source:n}))};function S({error:e,source:t}){const{code:n}=e;if(!n||"frame"===n)return e.message;const[r,o]=y(e);return`<pre>${l(t,{start:{line:r,column:o}},{message:e.message,highlightCode:!1})}</pre>`}},129:function(e,t,n){"use strict";e.exports=e=>{const t={};return Function("module",e)(t),t.exports}},130:function(e,t,n){"use strict";const{J:r,K:o,UP:s,DOWN:u}=n(35);e.exports=(e,{keyCode:t})=>t===u||t===r?function(e){const{length:t}=e;e.selectedIndex===t-1?e.selectedIndex=0:++e.selectedIndex}(e):t===s||t===o?function(e){const{length:t}=e;e.selectedIndex?--e.selectedIndex:e.selectedIndex=t-1}(e):void 0},131:function(e,t,n){"use strict";const r=e=>"number"==typeof e;e.exports=e=>{const{lineNumber:t,columnNumber:n}=e;if(r(t)&&r(n))return[t,n];const o=e.stack.indexOf(">"),s=e.stack.slice(o+1),u=s.indexOf(")"),c=s.slice(1,u),[i,a]=c.split(":");return[Number(i),Number(a)]}},132:function(e,t,n){"use strict";const{entries:r,assign:o}=Object;e.exports=e=>{const t=[],n={},s={},u={};for(const[c,i]of r(e)){if("__settings"===c){o(u,e[c]);continue}if(/^_/.test(c))continue;t.push(c);const[r,a]=c.split(" - ");n[r]=i,s[a]=i}return{names:t,keys:n,items:s,settings:u}}},133:function(e,t,n){"use strict";e.exports.runSelected=async(e,t,n)=>{for(const r of e)await n(t[r])}},175:function(e,t){}});
//# sourceMappingURL=user-menu.js.map