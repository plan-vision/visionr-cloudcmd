!function(t){function e(e){for(var n,a,u=e[0],l=e[1],c=e[2],f=0,d=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(s&&s(e);d.length;)d.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,u=1;u<r.length;u++){var l=r[u];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},o={15:0},i=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/dist/";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var s=l;i.push([110,0]),r()}({110:function(t,e,r){"use strict";const n=r(3);r(174);const o=r(4),i=r(5),a=r(11),u=r(1),l=i.parallel,{Dialog:c}=a,{Key:s,config:f}=CloudCmd;let d,p,y;CloudCmd.Terminal=e;const h=async()=>{const{prefix:t}=CloudCmd,e=CloudCmd.prefix+"/gritty"+"/gritty.js",r=t+"/dist/terminal.css",[o]=await n(l,[e,r]);if(o){const t=o.target.src.replace(window.location.href,"");return c.alert(`file ${t} could not be loaded`)}d=!0};function m(){CloudCmd.View.hide()}function C(t){t.emit("auth",f("username"),f("password")),t.on("reject",()=>{c.alert("Wrong credentials!")})}t.exports.init=async()=>{f("terminal")&&(u.show.load("top"),await CloudCmd.View(),await h(),await function(){const t={env:{ACTIVE_DIR:a.getCurrentDirPath,PASSIVE_DIR:a.getNotCurrentDirPath,CURRENT_NAME:a.getCurrentName,CURRENT_PATH:a.getCurrentPath},prefix:CloudCmd.prefixSocket+"/gritty",socketPath:CloudCmd.prefix,fontFamily:"Droid Sans Mono"},{socket:e,terminal:r}=gritty(document.body,t);y=e,p=r,p.onKey(({domEvent:t})=>{const{keyCode:e,shiftKey:r}=t;r&&e===s.ESC&&m()}),y.on("connect",o.with(C,e))}())},t.exports.show=function(){if(!d)return;if(!f("terminal"))return;CloudCmd.View.show(p.element,{afterShow:()=>{p.focus()}})},t.exports.hide=m}});
//# sourceMappingURL=terminal.js.map