(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))e(u);new MutationObserver(u=>{for(const n of u)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function l(u){const n={};return u.integrity&&(n.integrity=u.integrity),u.referrerPolicy&&(n.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?n.credentials="include":u.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(u){if(u.ep)return;u.ep=!0;const n=l(u);fetch(u.href,n)}})();function Fr(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wo={exports:{}},vn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir=Symbol.for("react.transitional.element"),Pr=Symbol.for("react.fragment");function $o(t,a,l){var e=null;if(l!==void 0&&(e=""+l),a.key!==void 0&&(e=""+a.key),"key"in a){l={};for(var u in a)u!=="key"&&(l[u]=a[u])}else l=a;return a=l.ref,{$$typeof:Ir,type:t,key:e,ref:a!==void 0?a:null,props:l}}vn.Fragment=Pr;vn.jsx=$o;vn.jsxs=$o;Wo.exports=vn;var A=Wo.exports,Fo={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=Symbol.for("react.transitional.element"),td=Symbol.for("react.portal"),ad=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),ed=Symbol.for("react.profiler"),ud=Symbol.for("react.consumer"),nd=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),fd=Symbol.for("react.memo"),Io=Symbol.for("react.lazy"),od=Symbol.for("react.activity"),xf=Symbol.iterator;function sd(t){return t===null||typeof t!="object"?null:(t=xf&&t[xf]||t["@@iterator"],typeof t=="function"?t:null)}var Po={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},t0=Object.assign,a0={};function ee(t,a,l){this.props=t,this.context=a,this.refs=a0,this.updater=l||Po}ee.prototype.isReactComponent={};ee.prototype.setState=function(t,a){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,a,"setState")};ee.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function l0(){}l0.prototype=ee.prototype;function vc(t,a,l){this.props=t,this.context=a,this.refs=a0,this.updater=l||Po}var xc=vc.prototype=new l0;xc.constructor=vc;t0(xc,ee.prototype);xc.isPureReactComponent=!0;var Sf=Array.isArray;function zi(){}var F={H:null,A:null,T:null,S:null},e0=Object.prototype.hasOwnProperty;function Sc(t,a,l){var e=l.ref;return{$$typeof:yc,type:t,key:a,ref:e!==void 0?e:null,props:l}}function rd(t,a){return Sc(t.type,a,t.props)}function zc(t){return typeof t=="object"&&t!==null&&t.$$typeof===yc}function dd(t){var a={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return a[l]})}var zf=/\/+/g;function Gn(t,a){return typeof t=="object"&&t!==null&&t.key!=null?dd(""+t.key):a.toString(36)}function hd(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(zi,zi):(t.status="pending",t.then(function(a){t.status==="pending"&&(t.status="fulfilled",t.value=a)},function(a){t.status==="pending"&&(t.status="rejected",t.reason=a)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Tl(t,a,l,e,u){var n=typeof t;(n==="undefined"||n==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(n){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case yc:case td:i=!0;break;case Io:return i=t._init,Tl(i(t._payload),a,l,e,u)}}if(i)return u=u(t),i=e===""?"."+Gn(t,0):e,Sf(u)?(l="",i!=null&&(l=i.replace(zf,"$&/")+"/"),Tl(u,a,l,"",function(r){return r})):u!=null&&(zc(u)&&(u=rd(u,l+(u.key==null||t&&t.key===u.key?"":(""+u.key).replace(zf,"$&/")+"/")+i)),a.push(u)),1;i=0;var c=e===""?".":e+":";if(Sf(t))for(var f=0;f<t.length;f++)e=t[f],n=c+Gn(e,f),i+=Tl(e,a,l,n,u);else if(f=sd(t),typeof f=="function")for(t=f.call(t),f=0;!(e=t.next()).done;)e=e.value,n=c+Gn(e,f++),i+=Tl(e,a,l,n,u);else if(n==="object"){if(typeof t.then=="function")return Tl(hd(t),a,l,e,u);throw a=String(t),Error("Objects are not valid as a React child (found: "+(a==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":a)+"). If you meant to render a collection of children, use an array instead.")}return i}function du(t,a,l){if(t==null)return t;var e=[],u=0;return Tl(t,e,"","",function(n){return a.call(l,n,u++)}),e}function md(t){if(t._status===-1){var a=t._result;a=a(),a.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=a)}if(t._status===1)return t._result.default;throw t._result}var Ef=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},gd={map:du,forEach:function(t,a,l){du(t,function(){a.apply(this,arguments)},l)},count:function(t){var a=0;return du(t,function(){a++}),a},toArray:function(t){return du(t,function(a){return a})||[]},only:function(t){if(!zc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=od;U.Children=gd;U.Component=ee;U.Fragment=ad;U.Profiler=ed;U.PureComponent=vc;U.StrictMode=ld;U.Suspense=cd;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return F.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,a,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=t0({},t.props),u=t.key;if(a!=null)for(n in a.key!==void 0&&(u=""+a.key),a)!e0.call(a,n)||n==="key"||n==="__self"||n==="__source"||n==="ref"&&a.ref===void 0||(e[n]=a[n]);var n=arguments.length-2;if(n===1)e.children=l;else if(1<n){for(var i=Array(n),c=0;c<n;c++)i[c]=arguments[c+2];e.children=i}return Sc(t.type,u,e)};U.createContext=function(t){return t={$$typeof:nd,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:ud,_context:t},t};U.createElement=function(t,a,l){var e,u={},n=null;if(a!=null)for(e in a.key!==void 0&&(n=""+a.key),a)e0.call(a,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(u[e]=a[e]);var i=arguments.length-2;if(i===1)u.children=l;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];u.children=c}if(t&&t.defaultProps)for(e in i=t.defaultProps,i)u[e]===void 0&&(u[e]=i[e]);return Sc(t,n,u)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:id,render:t}};U.isValidElement=zc;U.lazy=function(t){return{$$typeof:Io,_payload:{_status:-1,_result:t},_init:md}};U.memo=function(t,a){return{$$typeof:fd,type:t,compare:a===void 0?null:a}};U.startTransition=function(t){var a=F.T,l={};F.T=l;try{var e=t(),u=F.S;u!==null&&u(l,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(zi,Ef)}catch(n){Ef(n)}finally{a!==null&&l.types!==null&&(a.types=l.types),F.T=a}};U.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()};U.use=function(t){return F.H.use(t)};U.useActionState=function(t,a,l){return F.H.useActionState(t,a,l)};U.useCallback=function(t,a){return F.H.useCallback(t,a)};U.useContext=function(t){return F.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,a){return F.H.useDeferredValue(t,a)};U.useEffect=function(t,a){return F.H.useEffect(t,a)};U.useEffectEvent=function(t){return F.H.useEffectEvent(t)};U.useId=function(){return F.H.useId()};U.useImperativeHandle=function(t,a,l){return F.H.useImperativeHandle(t,a,l)};U.useInsertionEffect=function(t,a){return F.H.useInsertionEffect(t,a)};U.useLayoutEffect=function(t,a){return F.H.useLayoutEffect(t,a)};U.useMemo=function(t,a){return F.H.useMemo(t,a)};U.useOptimistic=function(t,a){return F.H.useOptimistic(t,a)};U.useReducer=function(t,a,l){return F.H.useReducer(t,a,l)};U.useRef=function(t){return F.H.useRef(t)};U.useState=function(t){return F.H.useState(t)};U.useSyncExternalStore=function(t,a,l){return F.H.useSyncExternalStore(t,a,l)};U.useTransition=function(){return F.H.useTransition()};U.version="19.2.3";Fo.exports=U;var lt=Fo.exports;const pd=Fr(lt);var u0={exports:{}},xn={},n0={exports:{}},i0={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function a(y,S){var O=y.length;y.push(S);t:for(;0<O;){var j=O-1>>>1,k=y[j];if(0<u(k,S))y[j]=S,y[O]=k,O=j;else break t}}function l(y){return y.length===0?null:y[0]}function e(y){if(y.length===0)return null;var S=y[0],O=y.pop();if(O!==S){y[0]=O;t:for(var j=0,k=y.length,Oa=k>>>1;j<Oa;){var ia=2*(j+1)-1,Sl=y[ia],tl=ia+1,ru=y[tl];if(0>u(Sl,O))tl<k&&0>u(ru,Sl)?(y[j]=ru,y[tl]=O,j=tl):(y[j]=Sl,y[ia]=O,j=ia);else if(tl<k&&0>u(ru,O))y[j]=ru,y[tl]=O,j=tl;else break t}}return S}function u(y,S){var O=y.sortIndex-S.sortIndex;return O!==0?O:y.id-S.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var n=performance;t.unstable_now=function(){return n.now()}}else{var i=Date,c=i.now();t.unstable_now=function(){return i.now()-c}}var f=[],r=[],p=1,g=null,d=3,m=!1,x=!1,E=!1,Y=!1,s=typeof setTimeout=="function"?setTimeout:null,o=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;function b(y){for(var S=l(r);S!==null;){if(S.callback===null)e(r);else if(S.startTime<=y)e(r),S.sortIndex=S.expirationTime,a(f,S);else break;S=l(r)}}function T(y){if(E=!1,b(y),!x)if(l(f)!==null)x=!0,H||(H=!0,$t());else{var S=l(r);S!==null&&re(T,S.startTime-y)}}var H=!1,z=-1,_=5,D=-1;function R(){return Y?!0:!(t.unstable_now()-D<_)}function zt(){if(Y=!1,H){var y=t.unstable_now();D=y;var S=!0;try{t:{x=!1,E&&(E=!1,o(z),z=-1),m=!0;var O=d;try{a:{for(b(y),g=l(f);g!==null&&!(g.expirationTime>y&&R());){var j=g.callback;if(typeof j=="function"){g.callback=null,d=g.priorityLevel;var k=j(g.expirationTime<=y);if(y=t.unstable_now(),typeof k=="function"){g.callback=k,b(y),S=!0;break a}g===l(f)&&e(f),b(y)}else e(f);g=l(f)}if(g!==null)S=!0;else{var Oa=l(r);Oa!==null&&re(T,Oa.startTime-y),S=!1}}break t}finally{g=null,d=O,m=!1}S=void 0}}finally{S?$t():H=!1}}}var $t;if(typeof h=="function")$t=function(){h(zt)};else if(typeof MessageChannel<"u"){var su=new MessageChannel,qn=su.port2;su.port1.onmessage=zt,$t=function(){qn.postMessage(null)}}else $t=function(){s(zt,0)};function re(y,S){z=s(function(){y(t.unstable_now())},S)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(y){y.callback=null},t.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<y?Math.floor(1e3/y):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_next=function(y){switch(d){case 1:case 2:case 3:var S=3;break;default:S=d}var O=d;d=S;try{return y()}finally{d=O}},t.unstable_requestPaint=function(){Y=!0},t.unstable_runWithPriority=function(y,S){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var O=d;d=y;try{return S()}finally{d=O}},t.unstable_scheduleCallback=function(y,S,O){var j=t.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?j+O:j):O=j,y){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=O+k,y={id:p++,callback:S,priorityLevel:y,startTime:O,expirationTime:k,sortIndex:-1},O>j?(y.sortIndex=O,a(r,y),l(f)===null&&y===l(r)&&(E?(o(z),z=-1):E=!0,re(T,O-j))):(y.sortIndex=k,a(f,y),x||m||(x=!0,H||(H=!0,$t()))),y},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(y){var S=d;return function(){var O=d;d=S;try{return y.apply(this,arguments)}finally{d=O}}}})(i0);n0.exports=i0;var bd=n0.exports,c0={exports:{}},St={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yd=lt;function f0(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ma(){}var xt={d:{f:Ma,r:function(){throw Error(f0(522))},D:Ma,C:Ma,L:Ma,m:Ma,X:Ma,S:Ma,M:Ma},p:0,findDOMNode:null},vd=Symbol.for("react.portal");function xd(t,a,l){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vd,key:e==null?null:""+e,children:t,containerInfo:a,implementation:l}}var Te=yd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Sn(t,a){if(t==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=xt;St.createPortal=function(t,a){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(f0(299));return xd(t,a,null,l)};St.flushSync=function(t){var a=Te.T,l=xt.p;try{if(Te.T=null,xt.p=2,t)return t()}finally{Te.T=a,xt.p=l,xt.d.f()}};St.preconnect=function(t,a){typeof t=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,xt.d.C(t,a))};St.prefetchDNS=function(t){typeof t=="string"&&xt.d.D(t)};St.preinit=function(t,a){if(typeof t=="string"&&a&&typeof a.as=="string"){var l=a.as,e=Sn(l,a.crossOrigin),u=typeof a.integrity=="string"?a.integrity:void 0,n=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;l==="style"?xt.d.S(t,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:e,integrity:u,fetchPriority:n}):l==="script"&&xt.d.X(t,{crossOrigin:e,integrity:u,fetchPriority:n,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};St.preinitModule=function(t,a){if(typeof t=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var l=Sn(a.as,a.crossOrigin);xt.d.M(t,{crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0})}}else a==null&&xt.d.M(t)};St.preload=function(t,a){if(typeof t=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var l=a.as,e=Sn(l,a.crossOrigin);xt.d.L(t,l,{crossOrigin:e,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};St.preloadModule=function(t,a){if(typeof t=="string")if(a){var l=Sn(a.as,a.crossOrigin);xt.d.m(t,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:l,integrity:typeof a.integrity=="string"?a.integrity:void 0})}else xt.d.m(t)};St.requestFormReset=function(t){xt.d.r(t)};St.unstable_batchedUpdates=function(t,a){return t(a)};St.useFormState=function(t,a,l){return Te.H.useFormState(t,a,l)};St.useFormStatus=function(){return Te.H.useHostTransitionStatus()};St.version="19.2.3";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(t){console.error(t)}}o0(),c0.exports=St;var Sd=c0.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var st=bd,s0=lt,zd=Sd;function v(t){var a="https://react.dev/errors/"+t;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)a+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ie(t){var a=t,l=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,a.flags&4098&&(l=a.return),t=a.return;while(t)}return a.tag===3?l:null}function d0(t){if(t.tag===13){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function h0(t){if(t.tag===31){var a=t.memoizedState;if(a===null&&(t=t.alternate,t!==null&&(a=t.memoizedState)),a!==null)return a.dehydrated}return null}function Tf(t){if(Ie(t)!==t)throw Error(v(188))}function Ed(t){var a=t.alternate;if(!a){if(a=Ie(t),a===null)throw Error(v(188));return a!==t?null:t}for(var l=t,e=a;;){var u=l.return;if(u===null)break;var n=u.alternate;if(n===null){if(e=u.return,e!==null){l=e;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===l)return Tf(u),t;if(n===e)return Tf(u),a;n=n.sibling}throw Error(v(188))}if(l.return!==e.return)l=u,e=n;else{for(var i=!1,c=u.child;c;){if(c===l){i=!0,l=u,e=n;break}if(c===e){i=!0,e=u,l=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===l){i=!0,l=n,e=u;break}if(c===e){i=!0,e=n,l=u;break}c=c.sibling}if(!i)throw Error(v(189))}}if(l.alternate!==e)throw Error(v(190))}if(l.tag!==3)throw Error(v(188));return l.stateNode.current===l?t:a}function m0(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t;for(t=t.child;t!==null;){if(a=m0(t),a!==null)return a;t=t.sibling}return null}var I=Object.assign,Td=Symbol.for("react.element"),hu=Symbol.for("react.transitional.element"),ve=Symbol.for("react.portal"),Ml=Symbol.for("react.fragment"),g0=Symbol.for("react.strict_mode"),Ei=Symbol.for("react.profiler"),p0=Symbol.for("react.consumer"),ma=Symbol.for("react.context"),Ec=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),Ai=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),_a=Symbol.for("react.lazy"),Oi=Symbol.for("react.activity"),Ad=Symbol.for("react.memo_cache_sentinel"),Af=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=Af&&t[Af]||t["@@iterator"],typeof t=="function"?t:null)}var Od=Symbol.for("react.client.reference");function Mi(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Od?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ml:return"Fragment";case Ei:return"Profiler";case g0:return"StrictMode";case Ti:return"Suspense";case Ai:return"SuspenseList";case Oi:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case ve:return"Portal";case ma:return t.displayName||"Context";case p0:return(t._context.displayName||"Context")+".Consumer";case Ec:var a=t.render;return t=t.displayName,t||(t=a.displayName||a.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tc:return a=t.displayName||null,a!==null?a:Mi(t.type)||"Memo";case _a:a=t._payload,t=t._init;try{return Mi(t(a))}catch{}}return null}var xe=Array.isArray,M=s0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=zd.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,il={pending:!1,data:null,method:null,action:null},_i=[],_l=-1;function ua(t){return{current:t}}function ht(t){0>_l||(t.current=_i[_l],_i[_l]=null,_l--)}function J(t,a){_l++,_i[_l]=t.current,t.current=a}var ea=ua(null),qe=ua(null),Ga=ua(null),Lu=ua(null);function Vu(t,a){switch(J(Ga,a),J(qe,t),J(ea,null),a.nodeType){case 9:case 11:t=(t=a.documentElement)&&(t=t.namespaceURI)?Ho(t):0;break;default:if(t=a.tagName,a=a.namespaceURI)a=Ho(a),t=Cr(a,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ht(ea),J(ea,t)}function Kl(){ht(ea),ht(qe),ht(Ga)}function Di(t){t.memoizedState!==null&&J(Lu,t);var a=ea.current,l=Cr(a,t.type);a!==l&&(J(qe,t),J(ea,l))}function wu(t){qe.current===t&&(ht(ea),ht(qe)),Lu.current===t&&(ht(Lu),We._currentValue=il)}var Xn,Of;function ll(t){if(Xn===void 0)try{throw Error()}catch(l){var a=l.stack.trim().match(/\n( *(at )?)/);Xn=a&&a[1]||"",Of=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xn+t+Of}var Qn=!1;function Zn(t,a){if(!t||Qn)return"";Qn=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(a){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(m){var d=m}Reflect.construct(t,[],g)}else{try{g.call()}catch(m){d=m}t.call(g.prototype)}}else{try{throw Error()}catch(m){d=m}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(m){if(m&&d&&typeof m.stack=="string")return[m.stack,d.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),r=c.split(`
`);for(u=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;u<r.length&&!r[u].includes("DetermineComponentFrameRoot");)u++;if(e===f.length||u===r.length)for(e=f.length-1,u=r.length-1;1<=e&&0<=u&&f[e]!==r[u];)u--;for(;1<=e&&0<=u;e--,u--)if(f[e]!==r[u]){if(e!==1||u!==1)do if(e--,u--,0>u||f[e]!==r[u]){var p=`
`+f[e].replace(" at new "," at ");return t.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",t.displayName)),p}while(1<=e&&0<=u);break}}}finally{Qn=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?ll(l):""}function Md(t,a){switch(t.tag){case 26:case 27:case 5:return ll(t.type);case 16:return ll("Lazy");case 13:return t.child!==a&&a!==null?ll("Suspense Fallback"):ll("Suspense");case 19:return ll("SuspenseList");case 0:case 15:return Zn(t.type,!1);case 11:return Zn(t.type.render,!1);case 1:return Zn(t.type,!0);case 31:return ll("Activity");default:return""}}function Mf(t){try{var a="",l=null;do a+=Md(t,l),l=t,t=t.return;while(t);return a}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ui=Object.prototype.hasOwnProperty,Ac=st.unstable_scheduleCallback,Ln=st.unstable_cancelCallback,_d=st.unstable_shouldYield,Dd=st.unstable_requestPaint,Yt=st.unstable_now,Ud=st.unstable_getCurrentPriorityLevel,b0=st.unstable_ImmediatePriority,y0=st.unstable_UserBlockingPriority,Ku=st.unstable_NormalPriority,Nd=st.unstable_LowPriority,v0=st.unstable_IdlePriority,Hd=st.log,jd=st.unstable_setDisableYieldValue,Pe=null,Rt=null;function Ya(t){if(typeof Hd=="function"&&jd(t),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Pe,t)}catch{}}var Ct=Math.clz32?Math.clz32:Cd,Yd=Math.log,Rd=Math.LN2;function Cd(t){return t>>>=0,t===0?32:31-(Yd(t)/Rd|0)|0}var mu=256,gu=262144,pu=4194304;function el(t){var a=t&42;if(a!==0)return a;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function zn(t,a,l){var e=t.pendingLanes;if(e===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~n,e!==0?u=el(e):(i&=c,i!==0?u=el(i):l||(l=c&~t,l!==0&&(u=el(l))))):(c=e&~n,c!==0?u=el(c):i!==0?u=el(i):l||(l=e&~t,l!==0&&(u=el(l)))),u===0?0:a!==0&&a!==u&&!(a&n)&&(n=u&-u,l=a&-a,n>=l||n===32&&(l&4194048)!==0)?a:u}function tu(t,a){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&a)===0}function Bd(t,a){switch(t){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x0(){var t=pu;return pu<<=1,!(pu&62914560)&&(pu=4194304),t}function Vn(t){for(var a=[],l=0;31>l;l++)a.push(t);return a}function au(t,a){t.pendingLanes|=a,a!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function qd(t,a,l,e,u,n){var i=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,r=t.hiddenUpdates;for(l=i&~l;0<l;){var p=31-Ct(l),g=1<<p;c[p]=0,f[p]=-1;var d=r[p];if(d!==null)for(r[p]=null,p=0;p<d.length;p++){var m=d[p];m!==null&&(m.lane&=-536870913)}l&=~g}e!==0&&S0(t,e,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~a))}function S0(t,a,l){t.pendingLanes|=a,t.suspendedLanes&=~a;var e=31-Ct(a);t.entangledLanes|=a,t.entanglements[e]=t.entanglements[e]|1073741824|l&261930}function z0(t,a){var l=t.entangledLanes|=a;for(t=t.entanglements;l;){var e=31-Ct(l),u=1<<e;u&a|t[e]&a&&(t[e]|=a),l&=~u}}function E0(t,a){var l=a&-a;return l=l&42?1:Oc(l),l&(t.suspendedLanes|a)?0:l}function Oc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Mc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function T0(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Jr(t.type))}function _f(t,a){var l=Q.p;try{return Q.p=t,a()}finally{Q.p=l}}var Ia=Math.random().toString(36).slice(2),gt="__reactFiber$"+Ia,_t="__reactProps$"+Ia,ue="__reactContainer$"+Ia,Ni="__reactEvents$"+Ia,Gd="__reactListeners$"+Ia,Xd="__reactHandles$"+Ia,Df="__reactResources$"+Ia,lu="__reactMarker$"+Ia;function _c(t){delete t[gt],delete t[_t],delete t[Ni],delete t[Gd],delete t[Xd]}function Dl(t){var a=t[gt];if(a)return a;for(var l=t.parentNode;l;){if(a=l[ue]||l[gt]){if(l=a.alternate,a.child!==null||l!==null&&l.child!==null)for(t=Bo(t);t!==null;){if(l=t[gt])return l;t=Bo(t)}return a}t=l,l=t.parentNode}return null}function ne(t){if(t=t[gt]||t[ue]){var a=t.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return t}return null}function Se(t){var a=t.tag;if(a===5||a===26||a===27||a===6)return t.stateNode;throw Error(v(33))}function Gl(t){var a=t[Df];return a||(a=t[Df]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function dt(t){t[lu]=!0}var A0=new Set,O0={};function pl(t,a){Jl(t,a),Jl(t+"Capture",a)}function Jl(t,a){for(O0[t]=a,t=0;t<a.length;t++)A0.add(a[t])}var Qd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Uf={},Nf={};function Zd(t){return Ui.call(Nf,t)?!0:Ui.call(Uf,t)?!1:Qd.test(t)?Nf[t]=!0:(Uf[t]=!0,!1)}function _u(t,a,l){if(Zd(a))if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(a);return;case"boolean":var e=a.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(a);return}}t.setAttribute(a,""+l)}}function bu(t,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttribute(a,""+l)}}function ca(t,a,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(a,l,""+e)}}function Qt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function M0(t){var a=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Ld(t,a,l){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,a);if(!t.hasOwnProperty(a)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var u=e.get,n=e.set;return Object.defineProperty(t,a,{configurable:!0,get:function(){return u.call(this)},set:function(i){l=""+i,n.call(this,i)}}),Object.defineProperty(t,a,{enumerable:e.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[a]}}}}function Hi(t){if(!t._valueTracker){var a=M0(t)?"checked":"value";t._valueTracker=Ld(t,a,""+t[a])}}function _0(t){if(!t)return!1;var a=t._valueTracker;if(!a)return!0;var l=a.getValue(),e="";return t&&(e=M0(t)?t.checked?"true":"false":t.value),t=e,t!==l?(a.setValue(t),!0):!1}function Ju(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vd=/[\n"\\]/g;function Vt(t){return t.replace(Vd,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function ji(t,a,l,e,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),a!=null?i==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+Qt(a)):t.value!==""+Qt(a)&&(t.value=""+Qt(a)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),a!=null?Yi(t,i,Qt(a)):l!=null?Yi(t,i,Qt(l)):e!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+Qt(c):t.removeAttribute("name")}function D0(t,a,l,e,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),a!=null||l!=null){if(!(n!=="submit"&&n!=="reset"||a!=null)){Hi(t);return}l=l!=null?""+Qt(l):"",a=a!=null?""+Qt(a):l,c||a===t.value||(t.value=a),t.defaultValue=a}e=e??u,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),Hi(t)}function Yi(t,a,l){a==="number"&&Ju(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Xl(t,a,l,e){if(t=t.options,a){a={};for(var u=0;u<l.length;u++)a["$"+l[u]]=!0;for(l=0;l<t.length;l++)u=a.hasOwnProperty("$"+t[l].value),t[l].selected!==u&&(t[l].selected=u),u&&e&&(t[l].defaultSelected=!0)}else{for(l=""+Qt(l),a=null,u=0;u<t.length;u++){if(t[u].value===l){t[u].selected=!0,e&&(t[u].defaultSelected=!0);return}a!==null||t[u].disabled||(a=t[u])}a!==null&&(a.selected=!0)}}function U0(t,a,l){if(a!=null&&(a=""+Qt(a),a!==t.value&&(t.value=a),l==null)){t.defaultValue!==a&&(t.defaultValue=a);return}t.defaultValue=l!=null?""+Qt(l):""}function N0(t,a,l,e){if(a==null){if(e!=null){if(l!=null)throw Error(v(92));if(xe(e)){if(1<e.length)throw Error(v(93));e=e[0]}l=e}l==null&&(l=""),a=l}l=Qt(a),t.defaultValue=l,e=t.textContent,e===l&&e!==""&&e!==null&&(t.value=e),Hi(t)}function kl(t,a){if(a){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=a;return}}t.textContent=a}var wd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hf(t,a,l){var e=a.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?e?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="":e?t.setProperty(a,l):typeof l!="number"||l===0||wd.has(a)?a==="float"?t.cssFloat=l:t[a]=(""+l).trim():t[a]=l+"px"}function H0(t,a,l){if(a!=null&&typeof a!="object")throw Error(v(62));if(t=t.style,l!=null){for(var e in l)!l.hasOwnProperty(e)||a!=null&&a.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var u in a)e=a[u],a.hasOwnProperty(u)&&l[u]!==e&&Hf(t,u,e)}else for(var n in a)a.hasOwnProperty(n)&&Hf(t,n,a[n])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Kd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Du(t){return Jd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ga(){}var Ri=null;function Uc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ul=null,Ql=null;function jf(t){var a=ne(t);if(a&&(t=a.stateNode)){var l=t[_t]||null;t:switch(t=a.stateNode,a.type){case"input":if(ji(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),a=l.name,l.type==="radio"&&a!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Vt(""+a)+'"][type="radio"]'),a=0;a<l.length;a++){var e=l[a];if(e!==t&&e.form===t.form){var u=e[_t]||null;if(!u)throw Error(v(90));ji(e,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(a=0;a<l.length;a++)e=l[a],e.form===t.form&&_0(e)}break t;case"textarea":U0(t,l.value,l.defaultValue);break t;case"select":a=l.value,a!=null&&Xl(t,!!l.multiple,a,!1)}}}var wn=!1;function j0(t,a,l){if(wn)return t(a,l);wn=!0;try{var e=t(a);return e}finally{if(wn=!1,(Ul!==null||Ql!==null)&&(Yn(),Ul&&(a=Ul,t=Ql,Ql=Ul=null,jf(a),t)))for(a=0;a<t.length;a++)jf(t[a])}}function Ge(t,a){var l=t.stateNode;if(l===null)return null;var e=l[_t]||null;if(e===null)return null;l=e[a];t:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(v(231,a,typeof l));return l}var xa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ci=!1;if(xa)try{var he={};Object.defineProperty(he,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",he,he),window.removeEventListener("test",he,he)}catch{Ci=!1}var Ra=null,Nc=null,Uu=null;function Y0(){if(Uu)return Uu;var t,a=Nc,l=a.length,e,u="value"in Ra?Ra.value:Ra.textContent,n=u.length;for(t=0;t<l&&a[t]===u[t];t++);var i=l-t;for(e=1;e<=i&&a[l-e]===u[n-e];e++);return Uu=u.slice(t,1<e?1-e:void 0)}function Nu(t){var a=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&a===13&&(t=13)):t=a,t===10&&(t=13),32<=t||t===13?t:0}function yu(){return!0}function Yf(){return!1}function Dt(t){function a(l,e,u,n,i){this._reactName=l,this._targetInst=u,this.type=e,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?yu:Yf,this.isPropagationStopped=Yf,this}return I(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=yu)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=yu)},persist:function(){},isPersistent:yu}),a}var bl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},En=Dt(bl),eu=I({},bl,{view:0,detail:0}),kd=Dt(eu),Kn,Jn,me,Tn=I({},eu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==me&&(me&&t.type==="mousemove"?(Kn=t.screenX-me.screenX,Jn=t.screenY-me.screenY):Jn=Kn=0,me=t),Kn)},movementY:function(t){return"movementY"in t?t.movementY:Jn}}),Rf=Dt(Tn),Wd=I({},Tn,{dataTransfer:0}),$d=Dt(Wd),Fd=I({},eu,{relatedTarget:0}),kn=Dt(Fd),Id=I({},bl,{animationName:0,elapsedTime:0,pseudoElement:0}),Pd=Dt(Id),th=I({},bl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ah=Dt(th),lh=I({},bl,{data:0}),Cf=Dt(lh),eh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ih(t){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(t):(t=nh[t])?!!a[t]:!1}function Hc(){return ih}var ch=I({},eu,{key:function(t){if(t.key){var a=eh[t.key]||t.key;if(a!=="Unidentified")return a}return t.type==="keypress"?(t=Nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?Nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),fh=Dt(ch),oh=I({},Tn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Dt(oh),sh=I({},eu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),rh=Dt(sh),dh=I({},bl,{propertyName:0,elapsedTime:0,pseudoElement:0}),hh=Dt(dh),mh=I({},Tn,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gh=Dt(mh),ph=I({},bl,{newState:0,oldState:0}),bh=Dt(ph),yh=[9,13,27,32],jc=xa&&"CompositionEvent"in window,Ae=null;xa&&"documentMode"in document&&(Ae=document.documentMode);var vh=xa&&"TextEvent"in window&&!Ae,R0=xa&&(!jc||Ae&&8<Ae&&11>=Ae),qf=" ",Gf=!1;function C0(t,a){switch(t){case"keyup":return yh.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Nl=!1;function xh(t,a){switch(t){case"compositionend":return B0(a);case"keypress":return a.which!==32?null:(Gf=!0,qf);case"textInput":return t=a.data,t===qf&&Gf?null:t;default:return null}}function Sh(t,a){if(Nl)return t==="compositionend"||!jc&&C0(t,a)?(t=Y0(),Uu=Nc=Ra=null,Nl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return R0&&a.locale!=="ko"?null:a.data;default:return null}}var zh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a==="input"?!!zh[t.type]:a==="textarea"}function q0(t,a,l,e){Ul?Ql?Ql.push(e):Ql=[e]:Ul=e,a=dn(a,"onChange"),0<a.length&&(l=new En("onChange","change",null,l,e),t.push({event:l,listeners:a}))}var Oe=null,Xe=null;function Eh(t){jr(t,0)}function An(t){var a=Se(t);if(_0(a))return t}function Qf(t,a){if(t==="change")return a}var G0=!1;if(xa){var Wn;if(xa){var $n="oninput"in document;if(!$n){var Zf=document.createElement("div");Zf.setAttribute("oninput","return;"),$n=typeof Zf.oninput=="function"}Wn=$n}else Wn=!1;G0=Wn&&(!document.documentMode||9<document.documentMode)}function Lf(){Oe&&(Oe.detachEvent("onpropertychange",X0),Xe=Oe=null)}function X0(t){if(t.propertyName==="value"&&An(Xe)){var a=[];q0(a,Xe,t,Uc(t)),j0(Eh,a)}}function Th(t,a,l){t==="focusin"?(Lf(),Oe=a,Xe=l,Oe.attachEvent("onpropertychange",X0)):t==="focusout"&&Lf()}function Ah(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return An(Xe)}function Oh(t,a){if(t==="click")return An(a)}function Mh(t,a){if(t==="input"||t==="change")return An(a)}function _h(t,a){return t===a&&(t!==0||1/t===1/a)||t!==t&&a!==a}var qt=typeof Object.is=="function"?Object.is:_h;function Qe(t,a){if(qt(t,a))return!0;if(typeof t!="object"||t===null||typeof a!="object"||a===null)return!1;var l=Object.keys(t),e=Object.keys(a);if(l.length!==e.length)return!1;for(e=0;e<l.length;e++){var u=l[e];if(!Ui.call(a,u)||!qt(t[u],a[u]))return!1}return!0}function Vf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wf(t,a){var l=Vf(t);t=0;for(var e;l;){if(l.nodeType===3){if(e=t+l.textContent.length,t<=a&&e>=a)return{node:l,offset:a-t};t=e}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Vf(l)}}function Q0(t,a){return t&&a?t===a?!0:t&&t.nodeType===3?!1:a&&a.nodeType===3?Q0(t,a.parentNode):"contains"in t?t.contains(a):t.compareDocumentPosition?!!(t.compareDocumentPosition(a)&16):!1:!1}function Z0(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var a=Ju(t.document);a instanceof t.HTMLIFrameElement;){try{var l=typeof a.contentWindow.location.href=="string"}catch{l=!1}if(l)t=a.contentWindow;else break;a=Ju(t.document)}return a}function Yc(t){var a=t&&t.nodeName&&t.nodeName.toLowerCase();return a&&(a==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||a==="textarea"||t.contentEditable==="true")}var Dh=xa&&"documentMode"in document&&11>=document.documentMode,Hl=null,Bi=null,Me=null,qi=!1;function Kf(t,a,l){var e=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;qi||Hl==null||Hl!==Ju(e)||(e=Hl,"selectionStart"in e&&Yc(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Me&&Qe(Me,e)||(Me=e,e=dn(Bi,"onSelect"),0<e.length&&(a=new En("onSelect","select",null,a,l),t.push({event:a,listeners:e}),a.target=Hl)))}function al(t,a){var l={};return l[t.toLowerCase()]=a.toLowerCase(),l["Webkit"+t]="webkit"+a,l["Moz"+t]="moz"+a,l}var jl={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionrun:al("Transition","TransitionRun"),transitionstart:al("Transition","TransitionStart"),transitioncancel:al("Transition","TransitionCancel"),transitionend:al("Transition","TransitionEnd")},Fn={},L0={};xa&&(L0=document.createElement("div").style,"AnimationEvent"in window||(delete jl.animationend.animation,delete jl.animationiteration.animation,delete jl.animationstart.animation),"TransitionEvent"in window||delete jl.transitionend.transition);function yl(t){if(Fn[t])return Fn[t];if(!jl[t])return t;var a=jl[t],l;for(l in a)if(a.hasOwnProperty(l)&&l in L0)return Fn[t]=a[l];return t}var V0=yl("animationend"),w0=yl("animationiteration"),K0=yl("animationstart"),Uh=yl("transitionrun"),Nh=yl("transitionstart"),Hh=yl("transitioncancel"),J0=yl("transitionend"),k0=new Map,Gi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gi.push("scrollEnd");function Pt(t,a){k0.set(t,a),pl(a,[t])}var ku=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Xt=[],Yl=0,Rc=0;function On(){for(var t=Yl,a=Rc=Yl=0;a<t;){var l=Xt[a];Xt[a++]=null;var e=Xt[a];Xt[a++]=null;var u=Xt[a];Xt[a++]=null;var n=Xt[a];if(Xt[a++]=null,e!==null&&u!==null){var i=e.pending;i===null?u.next=u:(u.next=i.next,i.next=u),e.pending=u}n!==0&&W0(l,u,n)}}function Mn(t,a,l,e){Xt[Yl++]=t,Xt[Yl++]=a,Xt[Yl++]=l,Xt[Yl++]=e,Rc|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function Cc(t,a,l,e){return Mn(t,a,l,e),Wu(t)}function vl(t,a){return Mn(t,null,null,a),Wu(t)}function W0(t,a,l){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l);for(var u=!1,n=t.return;n!==null;)n.childLanes|=l,e=n.alternate,e!==null&&(e.childLanes|=l),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&a!==null&&(u=31-Ct(l),t=n.hiddenUpdates,e=t[u],e===null?t[u]=[a]:e.push(a),a.lane=l|536870912),n):null}function Wu(t){if(50<Ce)throw Ce=0,ic=null,Error(v(185));for(var a=t.return;a!==null;)t=a,a=t.return;return t.tag===3?t.stateNode:null}var Rl={};function jh(t,a,l,e){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ht(t,a,l,e){return new jh(t,a,l,e)}function Bc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ba(t,a){var l=t.alternate;return l===null?(l=Ht(t.tag,a,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=a,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,a=t.dependencies,l.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function $0(t,a){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=a,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,a=l.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),t}function Hu(t,a,l,e,u,n){var i=0;if(e=t,typeof t=="function")Bc(t)&&(i=1);else if(typeof t=="string")i=qm(t,l,ea.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Oi:return t=Ht(31,l,a,u),t.elementType=Oi,t.lanes=n,t;case Ml:return cl(l.children,u,n,a);case g0:i=8,u|=24;break;case Ei:return t=Ht(12,l,a,u|2),t.elementType=Ei,t.lanes=n,t;case Ti:return t=Ht(13,l,a,u),t.elementType=Ti,t.lanes=n,t;case Ai:return t=Ht(19,l,a,u),t.elementType=Ai,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ma:i=10;break t;case p0:i=9;break t;case Ec:i=11;break t;case Tc:i=14;break t;case _a:i=16,e=null;break t}i=29,l=Error(v(130,t===null?"null":typeof t,"")),e=null}return a=Ht(i,l,a,u),a.elementType=t,a.type=e,a.lanes=n,a}function cl(t,a,l,e){return t=Ht(7,t,e,a),t.lanes=l,t}function In(t,a,l){return t=Ht(6,t,null,a),t.lanes=l,t}function F0(t){var a=Ht(18,null,null,0);return a.stateNode=t,a}function Pn(t,a,l){return a=Ht(4,t.children!==null?t.children:[],t.key,a),a.lanes=l,a.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},a}var Jf=new WeakMap;function wt(t,a){if(typeof t=="object"&&t!==null){var l=Jf.get(t);return l!==void 0?l:(a={value:t,source:a,stack:Mf(a)},Jf.set(t,a),a)}return{value:t,source:a,stack:Mf(a)}}var Cl=[],Bl=0,$u=null,Ze=0,Zt=[],Lt=0,ka=null,ta=1,aa="";function da(t,a){Cl[Bl++]=Ze,Cl[Bl++]=$u,$u=t,Ze=a}function I0(t,a,l){Zt[Lt++]=ta,Zt[Lt++]=aa,Zt[Lt++]=ka,ka=t;var e=ta;t=aa;var u=32-Ct(e)-1;e&=~(1<<u),l+=1;var n=32-Ct(a)+u;if(30<n){var i=u-u%5;n=(e&(1<<i)-1).toString(32),e>>=i,u-=i,ta=1<<32-Ct(a)+u|l<<u|e,aa=n+t}else ta=1<<n|l<<u|e,aa=t}function qc(t){t.return!==null&&(da(t,1),I0(t,1,0))}function Gc(t){for(;t===$u;)$u=Cl[--Bl],Cl[Bl]=null,Ze=Cl[--Bl],Cl[Bl]=null;for(;t===ka;)ka=Zt[--Lt],Zt[Lt]=null,aa=Zt[--Lt],Zt[Lt]=null,ta=Zt[--Lt],Zt[Lt]=null}function P0(t,a){Zt[Lt++]=ta,Zt[Lt++]=aa,Zt[Lt++]=ka,ta=a.id,aa=a.overflow,ka=t}var pt=null,$=null,G=!1,Xa=null,Kt=!1,Xi=Error(v(519));function Wa(t){var a=Error(v(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Le(wt(a,t)),Xi}function kf(t){var a=t.stateNode,l=t.type,e=t.memoizedProps;switch(a[gt]=t,a[_t]=e,l){case"dialog":C("cancel",a),C("close",a);break;case"iframe":case"object":case"embed":C("load",a);break;case"video":case"audio":for(l=0;l<Je.length;l++)C(Je[l],a);break;case"source":C("error",a);break;case"img":case"image":case"link":C("error",a),C("load",a);break;case"details":C("toggle",a);break;case"input":C("invalid",a),D0(a,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":C("invalid",a);break;case"textarea":C("invalid",a),N0(a,e.value,e.defaultValue,e.children)}l=e.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||a.textContent===""+l||e.suppressHydrationWarning===!0||Rr(a.textContent,l)?(e.popover!=null&&(C("beforetoggle",a),C("toggle",a)),e.onScroll!=null&&C("scroll",a),e.onScrollEnd!=null&&C("scrollend",a),e.onClick!=null&&(a.onclick=ga),a=!0):a=!1,a||Wa(t,!0)}function Wf(t){for(pt=t.return;pt;)switch(pt.tag){case 5:case 31:case 13:Kt=!1;return;case 27:case 3:Kt=!0;return;default:pt=pt.return}}function zl(t){if(t!==pt)return!1;if(!G)return Wf(t),G=!0,!1;var a=t.tag,l;if((l=a!==3&&a!==27)&&((l=a===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||rc(t.type,t.memoizedProps)),l=!l),l&&$&&Wa(t),Wf(t),a===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));$=Co(t)}else if(a===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(317));$=Co(t)}else a===27?(a=$,Pa(t.type)?(t=gc,gc=null,$=t):$=a):$=pt?kt(t.stateNode.nextSibling):null;return!0}function rl(){$=pt=null,G=!1}function ti(){var t=Xa;return t!==null&&(Ot===null?Ot=t:Ot.push.apply(Ot,t),Xa=null),t}function Le(t){Xa===null?Xa=[t]:Xa.push(t)}var Qi=ua(null),xl=null,pa=null;function Ua(t,a,l){J(Qi,a._currentValue),a._currentValue=l}function ya(t){t._currentValue=Qi.current,ht(Qi)}function Zi(t,a,l){for(;t!==null;){var e=t.alternate;if((t.childLanes&a)!==a?(t.childLanes|=a,e!==null&&(e.childLanes|=a)):e!==null&&(e.childLanes&a)!==a&&(e.childLanes|=a),t===l)break;t=t.return}}function Li(t,a,l,e){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<a.length;f++)if(c.context===a[f]){n.lanes|=l,c=n.alternate,c!==null&&(c.lanes|=l),Zi(n.return,l,t),e||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(v(341));i.lanes|=l,n=i.alternate,n!==null&&(n.lanes|=l),Zi(i,l,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function ie(t,a,l,e){t=null;for(var u=a,n=!1;u!==null;){if(!n){if(u.flags&524288)n=!0;else if(u.flags&262144)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(v(387));if(i=i.memoizedProps,i!==null){var c=u.type;qt(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===Lu.current){if(i=u.alternate,i===null)throw Error(v(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(We):t=[We])}u=u.return}t!==null&&Li(a,t,l,e),a.flags|=262144}function Fu(t){for(t=t.firstContext;t!==null;){if(!qt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dl(t){xl=t,pa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bt(t){return ts(xl,t)}function vu(t,a){return xl===null&&dl(t),ts(t,a)}function ts(t,a){var l=a._currentValue;if(a={context:a,memoizedValue:l,next:null},pa===null){if(t===null)throw Error(v(308));pa=a,t.dependencies={lanes:0,firstContext:a},t.flags|=524288}else pa=pa.next=a;return l}var Yh=typeof AbortController<"u"?AbortController:function(){var t=[],a=this.signal={aborted:!1,addEventListener:function(l,e){t.push(e)}};this.abort=function(){a.aborted=!0,t.forEach(function(l){return l()})}},Rh=st.unstable_scheduleCallback,Ch=st.unstable_NormalPriority,ct={$$typeof:ma,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new Yh,data:new Map,refCount:0}}function uu(t){t.refCount--,t.refCount===0&&Rh(Ch,function(){t.controller.abort()})}var _e=null,Vi=0,Wl=0,Zl=null;function Bh(t,a){if(_e===null){var l=_e=[];Vi=0,Wl=df(),Zl={status:"pending",value:void 0,then:function(e){l.push(e)}}}return Vi++,a.then($f,$f),a}function $f(){if(--Vi===0&&_e!==null){Zl!==null&&(Zl.status="fulfilled");var t=_e;_e=null,Wl=0,Zl=null;for(var a=0;a<t.length;a++)(0,t[a])()}}function qh(t,a){var l=[],e={status:"pending",value:null,reason:null,then:function(u){l.push(u)}};return t.then(function(){e.status="fulfilled",e.value=a;for(var u=0;u<l.length;u++)(0,l[u])(a)},function(u){for(e.status="rejected",e.reason=u,u=0;u<l.length;u++)(0,l[u])(void 0)}),e}var Ff=M.S;M.S=function(t,a){mr=Yt(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Bh(t,a),Ff!==null&&Ff(t,a)};var fl=ua(null);function Qc(){var t=fl.current;return t!==null?t:K.pooledCache}function ju(t,a){a===null?J(fl,fl.current):J(fl,a.pool)}function as(){var t=Qc();return t===null?null:{parent:ct._currentValue,pool:t}}var ce=Error(v(460)),Zc=Error(v(474)),_n=Error(v(542)),Iu={then:function(){}};function If(t){return t=t.status,t==="fulfilled"||t==="rejected"}function ls(t,a,l){switch(l=t[l],l===void 0?t.push(a):l!==a&&(a.then(ga,ga),a=l),a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,to(t),t;default:if(typeof a.status=="string")a.then(ga,ga);else{if(t=K,t!==null&&100<t.shellSuspendCounter)throw Error(v(482));t=a,t.status="pending",t.then(function(e){if(a.status==="pending"){var u=a;u.status="fulfilled",u.value=e}},function(e){if(a.status==="pending"){var u=a;u.status="rejected",u.reason=e}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw t=a.reason,to(t),t}throw ol=a,ce}}function ul(t){try{var a=t._init;return a(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ol=l,ce):l}}var ol=null;function Pf(){if(ol===null)throw Error(v(459));var t=ol;return ol=null,t}function to(t){if(t===ce||t===_n)throw Error(v(483))}var Ll=null,Ve=0;function xu(t){var a=Ve;return Ve+=1,Ll===null&&(Ll=[]),ls(Ll,t,a)}function ge(t,a){a=a.props.ref,t.ref=a!==void 0?a:null}function Su(t,a){throw a.$$typeof===Td?Error(v(525)):(t=Object.prototype.toString.call(a),Error(v(31,t==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":t)))}function es(t){function a(s,o){if(t){var h=s.deletions;h===null?(s.deletions=[o],s.flags|=16):h.push(o)}}function l(s,o){if(!t)return null;for(;o!==null;)a(s,o),o=o.sibling;return null}function e(s){for(var o=new Map;s!==null;)s.key!==null?o.set(s.key,s):o.set(s.index,s),s=s.sibling;return o}function u(s,o){return s=ba(s,o),s.index=0,s.sibling=null,s}function n(s,o,h){return s.index=h,t?(h=s.alternate,h!==null?(h=h.index,h<o?(s.flags|=67108866,o):h):(s.flags|=67108866,o)):(s.flags|=1048576,o)}function i(s){return t&&s.alternate===null&&(s.flags|=67108866),s}function c(s,o,h,b){return o===null||o.tag!==6?(o=In(h,s.mode,b),o.return=s,o):(o=u(o,h),o.return=s,o)}function f(s,o,h,b){var T=h.type;return T===Ml?p(s,o,h.props.children,b,h.key):o!==null&&(o.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_a&&ul(T)===o.type)?(o=u(o,h.props),ge(o,h),o.return=s,o):(o=Hu(h.type,h.key,h.props,null,s.mode,b),ge(o,h),o.return=s,o)}function r(s,o,h,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==h.containerInfo||o.stateNode.implementation!==h.implementation?(o=Pn(h,s.mode,b),o.return=s,o):(o=u(o,h.children||[]),o.return=s,o)}function p(s,o,h,b,T){return o===null||o.tag!==7?(o=cl(h,s.mode,b,T),o.return=s,o):(o=u(o,h),o.return=s,o)}function g(s,o,h){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=In(""+o,s.mode,h),o.return=s,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case hu:return h=Hu(o.type,o.key,o.props,null,s.mode,h),ge(h,o),h.return=s,h;case ve:return o=Pn(o,s.mode,h),o.return=s,o;case _a:return o=ul(o),g(s,o,h)}if(xe(o)||de(o))return o=cl(o,s.mode,h,null),o.return=s,o;if(typeof o.then=="function")return g(s,xu(o),h);if(o.$$typeof===ma)return g(s,vu(s,o),h);Su(s,o)}return null}function d(s,o,h,b){var T=o!==null?o.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return T!==null?null:c(s,o,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case hu:return h.key===T?f(s,o,h,b):null;case ve:return h.key===T?r(s,o,h,b):null;case _a:return h=ul(h),d(s,o,h,b)}if(xe(h)||de(h))return T!==null?null:p(s,o,h,b,null);if(typeof h.then=="function")return d(s,o,xu(h),b);if(h.$$typeof===ma)return d(s,o,vu(s,h),b);Su(s,h)}return null}function m(s,o,h,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return s=s.get(h)||null,c(o,s,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case hu:return s=s.get(b.key===null?h:b.key)||null,f(o,s,b,T);case ve:return s=s.get(b.key===null?h:b.key)||null,r(o,s,b,T);case _a:return b=ul(b),m(s,o,h,b,T)}if(xe(b)||de(b))return s=s.get(h)||null,p(o,s,b,T,null);if(typeof b.then=="function")return m(s,o,h,xu(b),T);if(b.$$typeof===ma)return m(s,o,h,vu(o,b),T);Su(o,b)}return null}function x(s,o,h,b){for(var T=null,H=null,z=o,_=o=0,D=null;z!==null&&_<h.length;_++){z.index>_?(D=z,z=null):D=z.sibling;var R=d(s,z,h[_],b);if(R===null){z===null&&(z=D);break}t&&z&&R.alternate===null&&a(s,z),o=n(R,o,_),H===null?T=R:H.sibling=R,H=R,z=D}if(_===h.length)return l(s,z),G&&da(s,_),T;if(z===null){for(;_<h.length;_++)z=g(s,h[_],b),z!==null&&(o=n(z,o,_),H===null?T=z:H.sibling=z,H=z);return G&&da(s,_),T}for(z=e(z);_<h.length;_++)D=m(z,s,_,h[_],b),D!==null&&(t&&D.alternate!==null&&z.delete(D.key===null?_:D.key),o=n(D,o,_),H===null?T=D:H.sibling=D,H=D);return t&&z.forEach(function(zt){return a(s,zt)}),G&&da(s,_),T}function E(s,o,h,b){if(h==null)throw Error(v(151));for(var T=null,H=null,z=o,_=o=0,D=null,R=h.next();z!==null&&!R.done;_++,R=h.next()){z.index>_?(D=z,z=null):D=z.sibling;var zt=d(s,z,R.value,b);if(zt===null){z===null&&(z=D);break}t&&z&&zt.alternate===null&&a(s,z),o=n(zt,o,_),H===null?T=zt:H.sibling=zt,H=zt,z=D}if(R.done)return l(s,z),G&&da(s,_),T;if(z===null){for(;!R.done;_++,R=h.next())R=g(s,R.value,b),R!==null&&(o=n(R,o,_),H===null?T=R:H.sibling=R,H=R);return G&&da(s,_),T}for(z=e(z);!R.done;_++,R=h.next())R=m(z,s,_,R.value,b),R!==null&&(t&&R.alternate!==null&&z.delete(R.key===null?_:R.key),o=n(R,o,_),H===null?T=R:H.sibling=R,H=R);return t&&z.forEach(function($t){return a(s,$t)}),G&&da(s,_),T}function Y(s,o,h,b){if(typeof h=="object"&&h!==null&&h.type===Ml&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case hu:t:{for(var T=h.key;o!==null;){if(o.key===T){if(T=h.type,T===Ml){if(o.tag===7){l(s,o.sibling),b=u(o,h.props.children),b.return=s,s=b;break t}}else if(o.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===_a&&ul(T)===o.type){l(s,o.sibling),b=u(o,h.props),ge(b,h),b.return=s,s=b;break t}l(s,o);break}else a(s,o);o=o.sibling}h.type===Ml?(b=cl(h.props.children,s.mode,b,h.key),b.return=s,s=b):(b=Hu(h.type,h.key,h.props,null,s.mode,b),ge(b,h),b.return=s,s=b)}return i(s);case ve:t:{for(T=h.key;o!==null;){if(o.key===T)if(o.tag===4&&o.stateNode.containerInfo===h.containerInfo&&o.stateNode.implementation===h.implementation){l(s,o.sibling),b=u(o,h.children||[]),b.return=s,s=b;break t}else{l(s,o);break}else a(s,o);o=o.sibling}b=Pn(h,s.mode,b),b.return=s,s=b}return i(s);case _a:return h=ul(h),Y(s,o,h,b)}if(xe(h))return x(s,o,h,b);if(de(h)){if(T=de(h),typeof T!="function")throw Error(v(150));return h=T.call(h),E(s,o,h,b)}if(typeof h.then=="function")return Y(s,o,xu(h),b);if(h.$$typeof===ma)return Y(s,o,vu(s,h),b);Su(s,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,o!==null&&o.tag===6?(l(s,o.sibling),b=u(o,h),b.return=s,s=b):(l(s,o),b=In(h,s.mode,b),b.return=s,s=b),i(s)):l(s,o)}return function(s,o,h,b){try{Ve=0;var T=Y(s,o,h,b);return Ll=null,T}catch(z){if(z===ce||z===_n)throw z;var H=Ht(29,z,null,s.mode);return H.lanes=b,H.return=s,H}finally{}}}var hl=es(!0),us=es(!1),Da=!1;function Lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wi(t,a){t=t.updateQueue,a.updateQueue===t&&(a.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Qa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,a,l){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,X&2){var u=e.pending;return u===null?a.next=a:(a.next=u.next,u.next=a),e.pending=a,a=Wu(t),W0(t,null,l),a}return Mn(t,e,a,l),Wu(t)}function De(t,a,l){if(a=a.updateQueue,a!==null&&(a=a.shared,(l&4194048)!==0)){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,z0(t,l)}}function ai(t,a){var l=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,l===e)){var u=null,n=null;if(l=l.firstBaseUpdate,l!==null){do{var i={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,l=l.next}while(l!==null);n===null?u=n=a:n=n.next=a}else u=n=a;l={baseState:e.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=a:t.next=a,l.lastBaseUpdate=a}var Ki=!1;function Ue(){if(Ki){var t=Zl;if(t!==null)throw t}}function Ne(t,a,l,e){Ki=!1;var u=t.updateQueue;Da=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,r=f.next;f.next=null,i===null?n=r:i.next=r,i=f;var p=t.alternate;p!==null&&(p=p.updateQueue,c=p.lastBaseUpdate,c!==i&&(c===null?p.firstBaseUpdate=r:c.next=r,p.lastBaseUpdate=f))}if(n!==null){var g=u.baseState;i=0,p=r=f=null,c=n;do{var d=c.lane&-536870913,m=d!==c.lane;if(m?(q&d)===d:(e&d)===d){d!==0&&d===Wl&&(Ki=!0),p!==null&&(p=p.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var x=t,E=c;d=a;var Y=l;switch(E.tag){case 1:if(x=E.payload,typeof x=="function"){g=x.call(Y,g,d);break t}g=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=E.payload,d=typeof x=="function"?x.call(Y,g,d):x,d==null)break t;g=I({},g,d);break t;case 2:Da=!0}}d=c.callback,d!==null&&(t.flags|=64,m&&(t.flags|=8192),m=u.callbacks,m===null?u.callbacks=[d]:m.push(d))}else m={lane:d,tag:c.tag,payload:c.payload,callback:c.callback,next:null},p===null?(r=p=m,f=g):p=p.next=m,i|=d;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;m=c,c=m.next,m.next=null,u.lastBaseUpdate=m,u.shared.pending=null}}while(!0);p===null&&(f=g),u.baseState=f,u.firstBaseUpdate=r,u.lastBaseUpdate=p,n===null&&(u.shared.lanes=0),Fa|=i,t.lanes=i,t.memoizedState=g}}function ns(t,a){if(typeof t!="function")throw Error(v(191,t));t.call(a)}function is(t,a){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)ns(l[t],a)}var $l=ua(null),Pu=ua(0);function ao(t,a){t=Ta,J(Pu,t),J($l,a),Ta=t|a.baseLanes}function Ji(){J(Pu,Ta),J($l,$l.current)}function Vc(){Ta=Pu.current,ht($l),ht(Pu)}var Gt=ua(null),Jt=null;function Na(t){var a=t.alternate;J(et,et.current&1),J(Gt,t),Jt===null&&(a===null||$l.current!==null||a.memoizedState!==null)&&(Jt=t)}function ki(t){J(et,et.current),J(Gt,t),Jt===null&&(Jt=t)}function cs(t){t.tag===22?(J(et,et.current),J(Gt,t),Jt===null&&(Jt=t)):Ha()}function Ha(){J(et,et.current),J(Gt,Gt.current)}function Nt(t){ht(Gt),Jt===t&&(Jt=null),ht(et)}var et=ua(0);function tn(t){for(var a=t;a!==null;){if(a.tag===13){var l=a.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||hc(l)||mc(l)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Sa=0,N=null,w=null,nt=null,an=!1,Vl=!1,ml=!1,ln=0,we=0,wl=null,Gh=0;function tt(){throw Error(v(321))}function wc(t,a){if(a===null)return!1;for(var l=0;l<a.length&&l<t.length;l++)if(!qt(t[l],a[l]))return!1;return!0}function Kc(t,a,l,e,u,n){return Sa=n,N=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,M.H=t===null||t.memoizedState===null?qs:ef,ml=!1,n=l(e,u),ml=!1,Vl&&(n=os(a,l,e,u)),fs(t),n}function fs(t){M.H=Ke;var a=w!==null&&w.next!==null;if(Sa=0,nt=w=N=null,an=!1,we=0,wl=null,a)throw Error(v(300));t===null||ft||(t=t.dependencies,t!==null&&Fu(t)&&(ft=!0))}function os(t,a,l,e){N=t;var u=0;do{if(Vl&&(wl=null),we=0,Vl=!1,25<=u)throw Error(v(301));if(u+=1,nt=w=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}M.H=Gs,n=a(l,e)}while(Vl);return n}function Xh(){var t=M.H,a=t.useState()[0];return a=typeof a.then=="function"?nu(a):a,t=t.useState()[0],(w!==null?w.memoizedState:null)!==t&&(N.flags|=1024),a}function Jc(){var t=ln!==0;return ln=0,t}function kc(t,a,l){a.updateQueue=t.updateQueue,a.flags&=-2053,t.lanes&=~l}function Wc(t){if(an){for(t=t.memoizedState;t!==null;){var a=t.queue;a!==null&&(a.pending=null),t=t.next}an=!1}Sa=0,nt=w=N=null,Vl=!1,we=ln=0,wl=null}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?N.memoizedState=nt=t:nt=nt.next=t,nt}function ut(){if(w===null){var t=N.alternate;t=t!==null?t.memoizedState:null}else t=w.next;var a=nt===null?N.memoizedState:nt.next;if(a!==null)nt=a,w=t;else{if(t===null)throw N.alternate===null?Error(v(467)):Error(v(310));w=t,t={memoizedState:w.memoizedState,baseState:w.baseState,baseQueue:w.baseQueue,queue:w.queue,next:null},nt===null?N.memoizedState=nt=t:nt=nt.next=t}return nt}function Dn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function nu(t){var a=we;return we+=1,wl===null&&(wl=[]),t=ls(wl,t,a),a=N,(nt===null?a.memoizedState:nt.next)===null&&(a=a.alternate,M.H=a===null||a.memoizedState===null?qs:ef),t}function Un(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return nu(t);if(t.$$typeof===ma)return bt(t)}throw Error(v(438,String(t)))}function $c(t){var a=null,l=N.updateQueue;if(l!==null&&(a=l.memoCache),a==null){var e=N.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(a={data:e.data.map(function(u){return u.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),l===null&&(l=Dn(),N.updateQueue=l),l.memoCache=a,l=a.data[a.index],l===void 0)for(l=a.data[a.index]=Array(t),e=0;e<t;e++)l[e]=Ad;return a.index++,l}function za(t,a){return typeof a=="function"?a(t):a}function Yu(t){var a=ut();return Fc(a,w,t)}function Fc(t,a,l){var e=t.queue;if(e===null)throw Error(v(311));e.lastRenderedReducer=l;var u=t.baseQueue,n=e.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}a.baseQueue=u=n,e.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{a=u.next;var c=i=null,f=null,r=a,p=!1;do{var g=r.lane&-536870913;if(g!==r.lane?(q&g)===g:(Sa&g)===g){var d=r.revertLane;if(d===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),g===Wl&&(p=!0);else if((Sa&d)===d){r=r.next,d===Wl&&(p=!0);continue}else g={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},f===null?(c=f=g,i=n):f=f.next=g,N.lanes|=d,Fa|=d;g=r.action,ml&&l(n,g),n=r.hasEagerState?r.eagerState:l(n,g)}else d={lane:g,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},f===null?(c=f=d,i=n):f=f.next=d,N.lanes|=g,Fa|=g;r=r.next}while(r!==null&&r!==a);if(f===null?i=n:f.next=c,!qt(n,t.memoizedState)&&(ft=!0,p&&(l=Zl,l!==null)))throw l;t.memoizedState=n,t.baseState=i,t.baseQueue=f,e.lastRenderedState=n}return u===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function li(t){var a=ut(),l=a.queue;if(l===null)throw Error(v(311));l.lastRenderedReducer=t;var e=l.dispatch,u=l.pending,n=a.memoizedState;if(u!==null){l.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);qt(n,a.memoizedState)||(ft=!0),a.memoizedState=n,a.baseQueue===null&&(a.baseState=n),l.lastRenderedState=n}return[n,e]}function ss(t,a,l){var e=N,u=ut(),n=G;if(n){if(l===void 0)throw Error(v(407));l=l()}else l=a();var i=!qt((w||u).memoizedState,l);if(i&&(u.memoizedState=l,ft=!0),u=u.queue,Ic(hs.bind(null,e,u,t),[t]),u.getSnapshot!==a||i||nt!==null&&nt.memoizedState.tag&1){if(e.flags|=2048,Fl(9,{destroy:void 0},ds.bind(null,e,u,l,a),null),K===null)throw Error(v(349));n||Sa&127||rs(e,a,l)}return l}function rs(t,a,l){t.flags|=16384,t={getSnapshot:a,value:l},a=N.updateQueue,a===null?(a=Dn(),N.updateQueue=a,a.stores=[t]):(l=a.stores,l===null?a.stores=[t]:l.push(t))}function ds(t,a,l,e){a.value=l,a.getSnapshot=e,ms(a)&&gs(t)}function hs(t,a,l){return l(function(){ms(a)&&gs(t)})}function ms(t){var a=t.getSnapshot;t=t.value;try{var l=a();return!qt(t,l)}catch{return!0}}function gs(t){var a=vl(t,2);a!==null&&Mt(a,t,2)}function Wi(t){var a=vt();if(typeof t=="function"){var l=t;if(t=l(),ml){Ya(!0);try{l()}finally{Ya(!1)}}}return a.memoizedState=a.baseState=t,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},a}function ps(t,a,l,e){return t.baseState=l,Fc(t,w,typeof e=="function"?e:za)}function Qh(t,a,l,e,u){if(Hn(t))throw Error(v(485));if(t=a.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};M.T!==null?l(!0):n.isTransition=!1,e(n),l=a.pending,l===null?(n.next=a.pending=n,bs(a,n)):(n.next=l.next,a.pending=l.next=n)}}function bs(t,a){var l=a.action,e=a.payload,u=t.state;if(a.isTransition){var n=M.T,i={};M.T=i;try{var c=l(u,e),f=M.S;f!==null&&f(i,c),lo(t,a,c)}catch(r){$i(t,a,r)}finally{n!==null&&i.types!==null&&(n.types=i.types),M.T=n}}else try{n=l(u,e),lo(t,a,n)}catch(r){$i(t,a,r)}}function lo(t,a,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(e){eo(t,a,e)},function(e){return $i(t,a,e)}):eo(t,a,l)}function eo(t,a,l){a.status="fulfilled",a.value=l,ys(a),t.state=l,a=t.pending,a!==null&&(l=a.next,l===a?t.pending=null:(l=l.next,a.next=l,bs(t,l)))}function $i(t,a,l){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do a.status="rejected",a.reason=l,ys(a),a=a.next;while(a!==e)}t.action=null}function ys(t){t=t.listeners;for(var a=0;a<t.length;a++)(0,t[a])()}function vs(t,a){return a}function uo(t,a){if(G){var l=K.formState;if(l!==null){t:{var e=N;if(G){if($){a:{for(var u=$,n=Kt;u.nodeType!==8;){if(!n){u=null;break a}if(u=kt(u.nextSibling),u===null){u=null;break a}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){$=kt(u.nextSibling),e=u.data==="F!";break t}}Wa(e)}e=!1}e&&(a=l[0])}}return l=vt(),l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:a},l.queue=e,l=Rs.bind(null,N,e),e.dispatch=l,e=Wi(!1),n=lf.bind(null,N,!1,e.queue),e=vt(),u={state:a,dispatch:null,action:t,pending:null},e.queue=u,l=Qh.bind(null,N,u,n,l),u.dispatch=l,e.memoizedState=t,[a,l,!1]}function no(t){var a=ut();return xs(a,w,t)}function xs(t,a,l){if(a=Fc(t,a,vs)[0],t=Yu(za)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var e=nu(a)}catch(i){throw i===ce?_n:i}else e=a;a=ut();var u=a.queue,n=u.dispatch;return l!==a.memoizedState&&(N.flags|=2048,Fl(9,{destroy:void 0},Zh.bind(null,u,l),null)),[e,n,t]}function Zh(t,a){t.action=a}function io(t){var a=ut(),l=w;if(l!==null)return xs(a,l,t);ut(),a=a.memoizedState,l=ut();var e=l.queue.dispatch;return l.memoizedState=t,[a,e,!1]}function Fl(t,a,l,e){return t={tag:t,create:l,deps:e,inst:a,next:null},a=N.updateQueue,a===null&&(a=Dn(),N.updateQueue=a),l=a.lastEffect,l===null?a.lastEffect=t.next=t:(e=l.next,l.next=t,t.next=e,a.lastEffect=t),t}function Ss(){return ut().memoizedState}function Ru(t,a,l,e){var u=vt();N.flags|=t,u.memoizedState=Fl(1|a,{destroy:void 0},l,e===void 0?null:e)}function Nn(t,a,l,e){var u=ut();e=e===void 0?null:e;var n=u.memoizedState.inst;w!==null&&e!==null&&wc(e,w.memoizedState.deps)?u.memoizedState=Fl(a,n,l,e):(N.flags|=t,u.memoizedState=Fl(1|a,n,l,e))}function co(t,a){Ru(8390656,8,t,a)}function Ic(t,a){Nn(2048,8,t,a)}function Lh(t){N.flags|=4;var a=N.updateQueue;if(a===null)a=Dn(),N.updateQueue=a,a.events=[t];else{var l=a.events;l===null?a.events=[t]:l.push(t)}}function zs(t){var a=ut().memoizedState;return Lh({ref:a,nextImpl:t}),function(){if(X&2)throw Error(v(440));return a.impl.apply(void 0,arguments)}}function Es(t,a){return Nn(4,2,t,a)}function Ts(t,a){return Nn(4,4,t,a)}function As(t,a){if(typeof a=="function"){t=t();var l=a(t);return function(){typeof l=="function"?l():a(null)}}if(a!=null)return t=t(),a.current=t,function(){a.current=null}}function Os(t,a,l){l=l!=null?l.concat([t]):null,Nn(4,4,As.bind(null,a,t),l)}function Pc(){}function Ms(t,a){var l=ut();a=a===void 0?null:a;var e=l.memoizedState;return a!==null&&wc(a,e[1])?e[0]:(l.memoizedState=[t,a],t)}function _s(t,a){var l=ut();a=a===void 0?null:a;var e=l.memoizedState;if(a!==null&&wc(a,e[1]))return e[0];if(e=t(),ml){Ya(!0);try{t()}finally{Ya(!1)}}return l.memoizedState=[e,a],e}function tf(t,a,l){return l===void 0||Sa&1073741824&&!(q&261930)?t.memoizedState=a:(t.memoizedState=l,t=pr(),N.lanes|=t,Fa|=t,l)}function Ds(t,a,l,e){return qt(l,a)?l:$l.current!==null?(t=tf(t,l,e),qt(t,a)||(ft=!0),t):!(Sa&42)||Sa&1073741824&&!(q&261930)?(ft=!0,t.memoizedState=l):(t=pr(),N.lanes|=t,Fa|=t,a)}function Us(t,a,l,e,u){var n=Q.p;Q.p=n!==0&&8>n?n:8;var i=M.T,c={};M.T=c,lf(t,!1,a,l);try{var f=u(),r=M.S;if(r!==null&&r(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var p=qh(f,e);He(t,a,p,Bt(t))}else He(t,a,e,Bt(t))}catch(g){He(t,a,{then:function(){},status:"rejected",reason:g},Bt())}finally{Q.p=n,i!==null&&c.types!==null&&(i.types=c.types),M.T=i}}function Vh(){}function Fi(t,a,l,e){if(t.tag!==5)throw Error(v(476));var u=Ns(t).queue;Us(t,u,a,il,l===null?Vh:function(){return Hs(t),l(e)})}function Ns(t){var a=t.memoizedState;if(a!==null)return a;a={memoizedState:il,baseState:il,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:il},next:null};var l={};return a.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:l},next:null},t.memoizedState=a,t=t.alternate,t!==null&&(t.memoizedState=a),a}function Hs(t){var a=Ns(t);a.next===null&&(a=t.alternate.memoizedState),He(t,a.next.queue,{},Bt())}function af(){return bt(We)}function js(){return ut().memoizedState}function Ys(){return ut().memoizedState}function wh(t){for(var a=t.return;a!==null;){switch(a.tag){case 24:case 3:var l=Bt();t=Qa(l);var e=Za(a,t,l);e!==null&&(Mt(e,a,l),De(e,a,l)),a={cache:Xc()},t.payload=a;return}a=a.return}}function Kh(t,a,l){var e=Bt();l={lane:e,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Hn(t)?Cs(a,l):(l=Cc(t,a,l,e),l!==null&&(Mt(l,t,e),Bs(l,a,e)))}function Rs(t,a,l){var e=Bt();He(t,a,l,e)}function He(t,a,l,e){var u={lane:e,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Hn(t))Cs(a,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=a.lastRenderedReducer,n!==null))try{var i=a.lastRenderedState,c=n(i,l);if(u.hasEagerState=!0,u.eagerState=c,qt(c,i))return Mn(t,a,u,0),K===null&&On(),!1}catch{}finally{}if(l=Cc(t,a,u,e),l!==null)return Mt(l,t,e),Bs(l,a,e),!0}return!1}function lf(t,a,l,e){if(e={lane:2,revertLane:df(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Hn(t)){if(a)throw Error(v(479))}else a=Cc(t,l,e,2),a!==null&&Mt(a,t,2)}function Hn(t){var a=t.alternate;return t===N||a!==null&&a===N}function Cs(t,a){Vl=an=!0;var l=t.pending;l===null?a.next=a:(a.next=l.next,l.next=a),t.pending=a}function Bs(t,a,l){if(l&4194048){var e=a.lanes;e&=t.pendingLanes,l|=e,a.lanes=l,z0(t,l)}}var Ke={readContext:bt,use:Un,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useLayoutEffect:tt,useInsertionEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useSyncExternalStore:tt,useId:tt,useHostTransitionStatus:tt,useFormState:tt,useActionState:tt,useOptimistic:tt,useMemoCache:tt,useCacheRefresh:tt};Ke.useEffectEvent=tt;var qs={readContext:bt,use:Un,useCallback:function(t,a){return vt().memoizedState=[t,a===void 0?null:a],t},useContext:bt,useEffect:co,useImperativeHandle:function(t,a,l){l=l!=null?l.concat([t]):null,Ru(4194308,4,As.bind(null,a,t),l)},useLayoutEffect:function(t,a){return Ru(4194308,4,t,a)},useInsertionEffect:function(t,a){Ru(4,2,t,a)},useMemo:function(t,a){var l=vt();a=a===void 0?null:a;var e=t();if(ml){Ya(!0);try{t()}finally{Ya(!1)}}return l.memoizedState=[e,a],e},useReducer:function(t,a,l){var e=vt();if(l!==void 0){var u=l(a);if(ml){Ya(!0);try{l(a)}finally{Ya(!1)}}}else u=a;return e.memoizedState=e.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},e.queue=t,t=t.dispatch=Kh.bind(null,N,t),[e.memoizedState,t]},useRef:function(t){var a=vt();return t={current:t},a.memoizedState=t},useState:function(t){t=Wi(t);var a=t.queue,l=Rs.bind(null,N,a);return a.dispatch=l,[t.memoizedState,l]},useDebugValue:Pc,useDeferredValue:function(t,a){var l=vt();return tf(l,t,a)},useTransition:function(){var t=Wi(!1);return t=Us.bind(null,N,t.queue,!0,!1),vt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,a,l){var e=N,u=vt();if(G){if(l===void 0)throw Error(v(407));l=l()}else{if(l=a(),K===null)throw Error(v(349));q&127||rs(e,a,l)}u.memoizedState=l;var n={value:l,getSnapshot:a};return u.queue=n,co(hs.bind(null,e,n,t),[t]),e.flags|=2048,Fl(9,{destroy:void 0},ds.bind(null,e,n,l,a),null),l},useId:function(){var t=vt(),a=K.identifierPrefix;if(G){var l=aa,e=ta;l=(e&~(1<<32-Ct(e)-1)).toString(32)+l,a="_"+a+"R_"+l,l=ln++,0<l&&(a+="H"+l.toString(32)),a+="_"}else l=Gh++,a="_"+a+"r_"+l.toString(32)+"_";return t.memoizedState=a},useHostTransitionStatus:af,useFormState:uo,useActionState:uo,useOptimistic:function(t){var a=vt();a.memoizedState=a.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=l,a=lf.bind(null,N,!0,l),l.dispatch=a,[t,a]},useMemoCache:$c,useCacheRefresh:function(){return vt().memoizedState=wh.bind(null,N)},useEffectEvent:function(t){var a=vt(),l={impl:t};return a.memoizedState=l,function(){if(X&2)throw Error(v(440));return l.impl.apply(void 0,arguments)}}},ef={readContext:bt,use:Un,useCallback:Ms,useContext:bt,useEffect:Ic,useImperativeHandle:Os,useInsertionEffect:Es,useLayoutEffect:Ts,useMemo:_s,useReducer:Yu,useRef:Ss,useState:function(){return Yu(za)},useDebugValue:Pc,useDeferredValue:function(t,a){var l=ut();return Ds(l,w.memoizedState,t,a)},useTransition:function(){var t=Yu(za)[0],a=ut().memoizedState;return[typeof t=="boolean"?t:nu(t),a]},useSyncExternalStore:ss,useId:js,useHostTransitionStatus:af,useFormState:no,useActionState:no,useOptimistic:function(t,a){var l=ut();return ps(l,w,t,a)},useMemoCache:$c,useCacheRefresh:Ys};ef.useEffectEvent=zs;var Gs={readContext:bt,use:Un,useCallback:Ms,useContext:bt,useEffect:Ic,useImperativeHandle:Os,useInsertionEffect:Es,useLayoutEffect:Ts,useMemo:_s,useReducer:li,useRef:Ss,useState:function(){return li(za)},useDebugValue:Pc,useDeferredValue:function(t,a){var l=ut();return w===null?tf(l,t,a):Ds(l,w.memoizedState,t,a)},useTransition:function(){var t=li(za)[0],a=ut().memoizedState;return[typeof t=="boolean"?t:nu(t),a]},useSyncExternalStore:ss,useId:js,useHostTransitionStatus:af,useFormState:io,useActionState:io,useOptimistic:function(t,a){var l=ut();return w!==null?ps(l,w,t,a):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:$c,useCacheRefresh:Ys};Gs.useEffectEvent=zs;function ei(t,a,l,e){a=t.memoizedState,l=l(e,a),l=l==null?a:I({},a,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var Ii={enqueueSetState:function(t,a,l){t=t._reactInternals;var e=Bt(),u=Qa(e);u.payload=a,l!=null&&(u.callback=l),a=Za(t,u,e),a!==null&&(Mt(a,t,e),De(a,t,e))},enqueueReplaceState:function(t,a,l){t=t._reactInternals;var e=Bt(),u=Qa(e);u.tag=1,u.payload=a,l!=null&&(u.callback=l),a=Za(t,u,e),a!==null&&(Mt(a,t,e),De(a,t,e))},enqueueForceUpdate:function(t,a){t=t._reactInternals;var l=Bt(),e=Qa(l);e.tag=2,a!=null&&(e.callback=a),a=Za(t,e,l),a!==null&&(Mt(a,t,l),De(a,t,l))}};function fo(t,a,l,e,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,i):a.prototype&&a.prototype.isPureReactComponent?!Qe(l,e)||!Qe(u,n):!0}function oo(t,a,l,e){t=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(l,e),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(l,e),a.state!==t&&Ii.enqueueReplaceState(a,a.state,null)}function gl(t,a){var l=a;if("ref"in a){l={};for(var e in a)e!=="ref"&&(l[e]=a[e])}if(t=t.defaultProps){l===a&&(l=I({},l));for(var u in t)l[u]===void 0&&(l[u]=t[u])}return l}function Xs(t){ku(t)}function Qs(t){console.error(t)}function Zs(t){ku(t)}function en(t,a){try{var l=t.onUncaughtError;l(a.value,{componentStack:a.stack})}catch(e){setTimeout(function(){throw e})}}function so(t,a,l){try{var e=t.onCaughtError;e(l.value,{componentStack:l.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pi(t,a,l){return l=Qa(l),l.tag=3,l.payload={element:null},l.callback=function(){en(t,a)},l}function Ls(t){return t=Qa(t),t.tag=3,t}function Vs(t,a,l,e){var u=l.type.getDerivedStateFromError;if(typeof u=="function"){var n=e.value;t.payload=function(){return u(n)},t.callback=function(){so(a,l,e)}}var i=l.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){so(a,l,e),typeof u!="function"&&(La===null?La=new Set([this]):La.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function Jh(t,a,l,e,u){if(l.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(a=l.alternate,a!==null&&ie(a,l,u,!0),l=Gt.current,l!==null){switch(l.tag){case 31:case 13:return Jt===null?on():l.alternate===null&&at===0&&(at=3),l.flags&=-257,l.flags|=65536,l.lanes=u,e===Iu?l.flags|=16384:(a=l.updateQueue,a===null?l.updateQueue=new Set([e]):a.add(e),mi(t,e,u)),!1;case 22:return l.flags|=65536,e===Iu?l.flags|=16384:(a=l.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([e])},l.updateQueue=a):(l=a.retryQueue,l===null?a.retryQueue=new Set([e]):l.add(e)),mi(t,e,u)),!1}throw Error(v(435,l.tag))}return mi(t,e,u),on(),!1}if(G)return a=Gt.current,a!==null?(!(a.flags&65536)&&(a.flags|=256),a.flags|=65536,a.lanes=u,e!==Xi&&(t=Error(v(422),{cause:e}),Le(wt(t,l)))):(e!==Xi&&(a=Error(v(423),{cause:e}),Le(wt(a,l))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,e=wt(e,l),u=Pi(t.stateNode,e,u),ai(t,u),at!==4&&(at=2)),!1;var n=Error(v(520),{cause:e});if(n=wt(n,l),Re===null?Re=[n]:Re.push(n),at!==4&&(at=2),a===null)return!0;e=wt(e,l),l=a;do{switch(l.tag){case 3:return l.flags|=65536,t=u&-u,l.lanes|=t,t=Pi(l.stateNode,e,t),ai(l,t),!1;case 1:if(a=l.type,n=l.stateNode,(l.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(La===null||!La.has(n))))return l.flags|=65536,u&=-u,l.lanes|=u,u=Ls(u),Vs(u,t,l,e),ai(l,u),!1}l=l.return}while(l!==null);return!1}var uf=Error(v(461)),ft=!1;function mt(t,a,l,e){a.child=t===null?us(a,null,l,e):hl(a,t.child,l,e)}function ro(t,a,l,e,u){l=l.render;var n=a.ref;if("ref"in e){var i={};for(var c in e)c!=="ref"&&(i[c]=e[c])}else i=e;return dl(a),e=Kc(t,a,l,i,n,u),c=Jc(),t!==null&&!ft?(kc(t,a,u),Ea(t,a,u)):(G&&c&&qc(a),a.flags|=1,mt(t,a,e,u),a.child)}function ho(t,a,l,e,u){if(t===null){var n=l.type;return typeof n=="function"&&!Bc(n)&&n.defaultProps===void 0&&l.compare===null?(a.tag=15,a.type=n,ws(t,a,n,e,u)):(t=Hu(l.type,null,e,a,a.mode,u),t.ref=a.ref,t.return=a,a.child=t)}if(n=t.child,!nf(t,u)){var i=n.memoizedProps;if(l=l.compare,l=l!==null?l:Qe,l(i,e)&&t.ref===a.ref)return Ea(t,a,u)}return a.flags|=1,t=ba(n,e),t.ref=a.ref,t.return=a,a.child=t}function ws(t,a,l,e,u){if(t!==null){var n=t.memoizedProps;if(Qe(n,e)&&t.ref===a.ref)if(ft=!1,a.pendingProps=e=n,nf(t,u))t.flags&131072&&(ft=!0);else return a.lanes=t.lanes,Ea(t,a,u)}return tc(t,a,l,e,u)}function Ks(t,a,l,e){var u=e.children,n=t!==null?t.memoizedState:null;if(t===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if(a.flags&128){if(n=n!==null?n.baseLanes|l:l,t!==null){for(e=a.child=t.child,u=0;e!==null;)u=u|e.lanes|e.childLanes,e=e.sibling;e=u&~n}else e=0,a.child=null;return mo(t,a,n,l,e)}if(l&536870912)a.memoizedState={baseLanes:0,cachePool:null},t!==null&&ju(a,n!==null?n.cachePool:null),n!==null?ao(a,n):Ji(),cs(a);else return e=a.lanes=536870912,mo(t,a,n!==null?n.baseLanes|l:l,l,e)}else n!==null?(ju(a,n.cachePool),ao(a,n),Ha(),a.memoizedState=null):(t!==null&&ju(a,null),Ji(),Ha());return mt(t,a,u,l),a.child}function ze(t,a){return t!==null&&t.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function mo(t,a,l,e,u){var n=Qc();return n=n===null?null:{parent:ct._currentValue,pool:n},a.memoizedState={baseLanes:l,cachePool:n},t!==null&&ju(a,null),Ji(),cs(a),t!==null&&ie(t,a,e,!0),a.childLanes=u,null}function Cu(t,a){return a=un({mode:a.mode,children:a.children},t.mode),a.ref=t.ref,t.child=a,a.return=t,a}function go(t,a,l){return hl(a,t.child,null,l),t=Cu(a,a.pendingProps),t.flags|=2,Nt(a),a.memoizedState=null,t}function kh(t,a,l){var e=a.pendingProps,u=(a.flags&128)!==0;if(a.flags&=-129,t===null){if(G){if(e.mode==="hidden")return t=Cu(a,e),a.lanes=536870912,ze(null,t);if(ki(a),(t=$)?(t=qr(t,Kt),t=t!==null&&t.data==="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ka!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},l=F0(t),l.return=a,a.child=l,pt=a,$=null)):t=null,t===null)throw Wa(a);return a.lanes=536870912,null}return Cu(a,e)}var n=t.memoizedState;if(n!==null){var i=n.dehydrated;if(ki(a),u)if(a.flags&256)a.flags&=-257,a=go(t,a,l);else if(a.memoizedState!==null)a.child=t.child,a.flags|=128,a=null;else throw Error(v(558));else if(ft||ie(t,a,l,!1),u=(l&t.childLanes)!==0,ft||u){if(e=K,e!==null&&(i=E0(e,l),i!==0&&i!==n.retryLane))throw n.retryLane=i,vl(t,i),Mt(e,t,i),uf;on(),a=go(t,a,l)}else t=n.treeContext,$=kt(i.nextSibling),pt=a,G=!0,Xa=null,Kt=!1,t!==null&&P0(a,t),a=Cu(a,e),a.flags|=4096;return a}return t=ba(t.child,{mode:e.mode,children:e.children}),t.ref=a.ref,a.child=t,t.return=a,t}function Bu(t,a){var l=a.ref;if(l===null)t!==null&&t.ref!==null&&(a.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(v(284));(t===null||t.ref!==l)&&(a.flags|=4194816)}}function tc(t,a,l,e,u){return dl(a),l=Kc(t,a,l,e,void 0,u),e=Jc(),t!==null&&!ft?(kc(t,a,u),Ea(t,a,u)):(G&&e&&qc(a),a.flags|=1,mt(t,a,l,u),a.child)}function po(t,a,l,e,u,n){return dl(a),a.updateQueue=null,l=os(a,e,l,u),fs(t),e=Jc(),t!==null&&!ft?(kc(t,a,n),Ea(t,a,n)):(G&&e&&qc(a),a.flags|=1,mt(t,a,l,n),a.child)}function bo(t,a,l,e,u){if(dl(a),a.stateNode===null){var n=Rl,i=l.contextType;typeof i=="object"&&i!==null&&(n=bt(i)),n=new l(e,n),a.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ii,a.stateNode=n,n._reactInternals=a,n=a.stateNode,n.props=e,n.state=a.memoizedState,n.refs={},Lc(a),i=l.contextType,n.context=typeof i=="object"&&i!==null?bt(i):Rl,n.state=a.memoizedState,i=l.getDerivedStateFromProps,typeof i=="function"&&(ei(a,l,i,e),n.state=a.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&Ii.enqueueReplaceState(n,n.state,null),Ne(a,e,n,u),Ue(),n.state=a.memoizedState),typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!0}else if(t===null){n=a.stateNode;var c=a.memoizedProps,f=gl(l,c);n.props=f;var r=n.context,p=l.contextType;i=Rl,typeof p=="object"&&p!==null&&(i=bt(p));var g=l.getDerivedStateFromProps;p=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,p||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||r!==i)&&oo(a,n,e,i),Da=!1;var d=a.memoizedState;n.state=d,Ne(a,e,n,u),Ue(),r=a.memoizedState,c||d!==r||Da?(typeof g=="function"&&(ei(a,l,g,e),r=a.memoizedState),(f=Da||fo(a,l,f,e,d,r,i))?(p||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(a.flags|=4194308)):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=e,a.memoizedState=r),n.props=e,n.state=r,n.context=i,e=f):(typeof n.componentDidMount=="function"&&(a.flags|=4194308),e=!1)}else{n=a.stateNode,wi(t,a),i=a.memoizedProps,p=gl(l,i),n.props=p,g=a.pendingProps,d=n.context,r=l.contextType,f=Rl,typeof r=="object"&&r!==null&&(f=bt(r)),c=l.getDerivedStateFromProps,(r=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==g||d!==f)&&oo(a,n,e,f),Da=!1,d=a.memoizedState,n.state=d,Ne(a,e,n,u),Ue();var m=a.memoizedState;i!==g||d!==m||Da||t!==null&&t.dependencies!==null&&Fu(t.dependencies)?(typeof c=="function"&&(ei(a,l,c,e),m=a.memoizedState),(p=Da||fo(a,l,p,e,d,m,f)||t!==null&&t.dependencies!==null&&Fu(t.dependencies))?(r||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,m,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,m,f)),typeof n.componentDidUpdate=="function"&&(a.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&d===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&d===t.memoizedState||(a.flags|=1024),a.memoizedProps=e,a.memoizedState=m),n.props=e,n.state=m,n.context=f,e=p):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&d===t.memoizedState||(a.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&d===t.memoizedState||(a.flags|=1024),e=!1)}return n=e,Bu(t,a),e=(a.flags&128)!==0,n||e?(n=a.stateNode,l=e&&typeof l.getDerivedStateFromError!="function"?null:n.render(),a.flags|=1,t!==null&&e?(a.child=hl(a,t.child,null,u),a.child=hl(a,null,l,u)):mt(t,a,l,u),a.memoizedState=n.state,t=a.child):t=Ea(t,a,u),t}function yo(t,a,l,e){return rl(),a.flags|=256,mt(t,a,l,e),a.child}var ui={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ni(t){return{baseLanes:t,cachePool:as()}}function ii(t,a,l){return t=t!==null?t.childLanes&~l:0,a&&(t|=jt),t}function Js(t,a,l){var e=a.pendingProps,u=!1,n=(a.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(et.current&2)!==0),i&&(u=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,t===null){if(G){if(u?Na(a):Ha(),(t=$)?(t=qr(t,Kt),t=t!==null&&t.data!=="&"?t:null,t!==null&&(a.memoizedState={dehydrated:t,treeContext:ka!==null?{id:ta,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},l=F0(t),l.return=a,a.child=l,pt=a,$=null)):t=null,t===null)throw Wa(a);return mc(t)?a.lanes=32:a.lanes=536870912,null}var c=e.children;return e=e.fallback,u?(Ha(),u=a.mode,c=un({mode:"hidden",children:c},u),e=cl(e,u,l,null),c.return=a,e.return=a,c.sibling=e,a.child=c,e=a.child,e.memoizedState=ni(l),e.childLanes=ii(t,i,l),a.memoizedState=ui,ze(null,e)):(Na(a),ac(a,c))}var f=t.memoizedState;if(f!==null&&(c=f.dehydrated,c!==null)){if(n)a.flags&256?(Na(a),a.flags&=-257,a=ci(t,a,l)):a.memoizedState!==null?(Ha(),a.child=t.child,a.flags|=128,a=null):(Ha(),c=e.fallback,u=a.mode,e=un({mode:"visible",children:e.children},u),c=cl(c,u,l,null),c.flags|=2,e.return=a,c.return=a,e.sibling=c,a.child=e,hl(a,t.child,null,l),e=a.child,e.memoizedState=ni(l),e.childLanes=ii(t,i,l),a.memoizedState=ui,a=ze(null,e));else if(Na(a),mc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var r=i.dgst;i=r,e=Error(v(419)),e.stack="",e.digest=i,Le({value:e,source:null,stack:null}),a=ci(t,a,l)}else if(ft||ie(t,a,l,!1),i=(l&t.childLanes)!==0,ft||i){if(i=K,i!==null&&(e=E0(i,l),e!==0&&e!==f.retryLane))throw f.retryLane=e,vl(t,e),Mt(i,t,e),uf;hc(c)||on(),a=ci(t,a,l)}else hc(c)?(a.flags|=192,a.child=t.child,a=null):(t=f.treeContext,$=kt(c.nextSibling),pt=a,G=!0,Xa=null,Kt=!1,t!==null&&P0(a,t),a=ac(a,e.children),a.flags|=4096);return a}return u?(Ha(),c=e.fallback,u=a.mode,f=t.child,r=f.sibling,e=ba(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,r!==null?c=ba(r,c):(c=cl(c,u,l,null),c.flags|=2),c.return=a,e.return=a,e.sibling=c,a.child=e,ze(null,e),e=a.child,c=t.child.memoizedState,c===null?c=ni(l):(u=c.cachePool,u!==null?(f=ct._currentValue,u=u.parent!==f?{parent:f,pool:f}:u):u=as(),c={baseLanes:c.baseLanes|l,cachePool:u}),e.memoizedState=c,e.childLanes=ii(t,i,l),a.memoizedState=ui,ze(t.child,e)):(Na(a),l=t.child,t=l.sibling,l=ba(l,{mode:"visible",children:e.children}),l.return=a,l.sibling=null,t!==null&&(i=a.deletions,i===null?(a.deletions=[t],a.flags|=16):i.push(t)),a.child=l,a.memoizedState=null,l)}function ac(t,a){return a=un({mode:"visible",children:a},t.mode),a.return=t,t.child=a}function un(t,a){return t=Ht(22,t,null,a),t.lanes=0,t}function ci(t,a,l){return hl(a,t.child,null,l),t=ac(a,a.pendingProps.children),t.flags|=2,a.memoizedState=null,t}function vo(t,a,l){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a),Zi(t.return,a,l)}function fi(t,a,l,e,u,n){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:e,tail:l,tailMode:u,treeForkCount:n}:(i.isBackwards=a,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=l,i.tailMode=u,i.treeForkCount=n)}function ks(t,a,l){var e=a.pendingProps,u=e.revealOrder,n=e.tail;e=e.children;var i=et.current,c=(i&2)!==0;if(c?(i=i&1|2,a.flags|=128):i&=1,J(et,i),mt(t,a,e,l),e=G?Ze:0,!c&&t!==null&&t.flags&128)t:for(t=a.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vo(t,l,a);else if(t.tag===19)vo(t,l,a);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===a)break t;for(;t.sibling===null;){if(t.return===null||t.return===a)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(l=a.child,u=null;l!==null;)t=l.alternate,t!==null&&tn(t)===null&&(u=l),l=l.sibling;l=u,l===null?(u=a.child,a.child=null):(u=l.sibling,l.sibling=null),fi(a,!1,u,l,n,e);break;case"backwards":case"unstable_legacy-backwards":for(l=null,u=a.child,a.child=null;u!==null;){if(t=u.alternate,t!==null&&tn(t)===null){a.child=u;break}t=u.sibling,u.sibling=l,l=u,u=t}fi(a,!0,l,null,n,e);break;case"together":fi(a,!1,null,null,void 0,e);break;default:a.memoizedState=null}return a.child}function Ea(t,a,l){if(t!==null&&(a.dependencies=t.dependencies),Fa|=a.lanes,!(l&a.childLanes))if(t!==null){if(ie(t,a,l,!1),(l&a.childLanes)===0)return null}else return null;if(t!==null&&a.child!==t.child)throw Error(v(153));if(a.child!==null){for(t=a.child,l=ba(t,t.pendingProps),a.child=l,l.return=a;t.sibling!==null;)t=t.sibling,l=l.sibling=ba(t,t.pendingProps),l.return=a;l.sibling=null}return a.child}function nf(t,a){return t.lanes&a?!0:(t=t.dependencies,!!(t!==null&&Fu(t)))}function Wh(t,a,l){switch(a.tag){case 3:Vu(a,a.stateNode.containerInfo),Ua(a,ct,t.memoizedState.cache),rl();break;case 27:case 5:Di(a);break;case 4:Vu(a,a.stateNode.containerInfo);break;case 10:Ua(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,ki(a),null;break;case 13:var e=a.memoizedState;if(e!==null)return e.dehydrated!==null?(Na(a),a.flags|=128,null):l&a.child.childLanes?Js(t,a,l):(Na(a),t=Ea(t,a,l),t!==null?t.sibling:null);Na(a);break;case 19:var u=(t.flags&128)!==0;if(e=(l&a.childLanes)!==0,e||(ie(t,a,l,!1),e=(l&a.childLanes)!==0),u){if(e)return ks(t,a,l);a.flags|=128}if(u=a.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),J(et,et.current),e)break;return null;case 22:return a.lanes=0,Ks(t,a,l,a.pendingProps);case 24:Ua(a,ct,t.memoizedState.cache)}return Ea(t,a,l)}function Ws(t,a,l){if(t!==null)if(t.memoizedProps!==a.pendingProps)ft=!0;else{if(!nf(t,l)&&!(a.flags&128))return ft=!1,Wh(t,a,l);ft=!!(t.flags&131072)}else ft=!1,G&&a.flags&1048576&&I0(a,Ze,a.index);switch(a.lanes=0,a.tag){case 16:t:{var e=a.pendingProps;if(t=ul(a.elementType),a.type=t,typeof t=="function")Bc(t)?(e=gl(t,e),a.tag=1,a=bo(null,a,t,e,l)):(a.tag=0,a=tc(null,a,t,e,l));else{if(t!=null){var u=t.$$typeof;if(u===Ec){a.tag=11,a=ro(null,a,t,e,l);break t}else if(u===Tc){a.tag=14,a=ho(null,a,t,e,l);break t}}throw a=Mi(t)||t,Error(v(306,a,""))}}return a;case 0:return tc(t,a,a.type,a.pendingProps,l);case 1:return e=a.type,u=gl(e,a.pendingProps),bo(t,a,e,u,l);case 3:t:{if(Vu(a,a.stateNode.containerInfo),t===null)throw Error(v(387));e=a.pendingProps;var n=a.memoizedState;u=n.element,wi(t,a),Ne(a,e,null,l);var i=a.memoizedState;if(e=i.cache,Ua(a,ct,e),e!==n.cache&&Li(a,[ct],l,!0),Ue(),e=i.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=n,a.memoizedState=n,a.flags&256){a=yo(t,a,e,l);break t}else if(e!==u){u=wt(Error(v(424)),a),Le(u),a=yo(t,a,e,l);break t}else{switch(t=a.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for($=kt(t.firstChild),pt=a,G=!0,Xa=null,Kt=!0,l=us(a,null,e,l),a.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(rl(),e===u){a=Ea(t,a,l);break t}mt(t,a,e,l)}a=a.child}return a;case 26:return Bu(t,a),t===null?(l=Go(a.type,null,a.pendingProps,null))?a.memoizedState=l:G||(l=a.type,t=a.pendingProps,e=hn(Ga.current).createElement(l),e[gt]=a,e[_t]=t,yt(e,l,t),dt(e),a.stateNode=e):a.memoizedState=Go(a.type,t.memoizedProps,a.pendingProps,t.memoizedState),null;case 27:return Di(a),t===null&&G&&(e=a.stateNode=Gr(a.type,a.pendingProps,Ga.current),pt=a,Kt=!0,u=$,Pa(a.type)?(gc=u,$=kt(e.firstChild)):$=u),mt(t,a,a.pendingProps.children,l),Bu(t,a),t===null&&(a.flags|=4194304),a.child;case 5:return t===null&&G&&((u=e=$)&&(e=Am(e,a.type,a.pendingProps,Kt),e!==null?(a.stateNode=e,pt=a,$=kt(e.firstChild),Kt=!1,u=!0):u=!1),u||Wa(a)),Di(a),u=a.type,n=a.pendingProps,i=t!==null?t.memoizedProps:null,e=n.children,rc(u,n)?e=null:i!==null&&rc(u,i)&&(a.flags|=32),a.memoizedState!==null&&(u=Kc(t,a,Xh,null,null,l),We._currentValue=u),Bu(t,a),mt(t,a,e,l),a.child;case 6:return t===null&&G&&((t=l=$)&&(l=Om(l,a.pendingProps,Kt),l!==null?(a.stateNode=l,pt=a,$=null,t=!0):t=!1),t||Wa(a)),null;case 13:return Js(t,a,l);case 4:return Vu(a,a.stateNode.containerInfo),e=a.pendingProps,t===null?a.child=hl(a,null,e,l):mt(t,a,e,l),a.child;case 11:return ro(t,a,a.type,a.pendingProps,l);case 7:return mt(t,a,a.pendingProps,l),a.child;case 8:return mt(t,a,a.pendingProps.children,l),a.child;case 12:return mt(t,a,a.pendingProps.children,l),a.child;case 10:return e=a.pendingProps,Ua(a,a.type,e.value),mt(t,a,e.children,l),a.child;case 9:return u=a.type._context,e=a.pendingProps.children,dl(a),u=bt(u),e=e(u),a.flags|=1,mt(t,a,e,l),a.child;case 14:return ho(t,a,a.type,a.pendingProps,l);case 15:return ws(t,a,a.type,a.pendingProps,l);case 19:return ks(t,a,l);case 31:return kh(t,a,l);case 22:return Ks(t,a,l,a.pendingProps);case 24:return dl(a),e=bt(ct),t===null?(u=Qc(),u===null&&(u=K,n=Xc(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=l),u=n),a.memoizedState={parent:e,cache:u},Lc(a),Ua(a,ct,u)):(t.lanes&l&&(wi(t,a),Ne(a,null,null,l),Ue()),u=t.memoizedState,n=a.memoizedState,u.parent!==e?(u={parent:e,cache:e},a.memoizedState=u,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=u),Ua(a,ct,e)):(e=n.cache,Ua(a,ct,e),e!==u.cache&&Li(a,[ct],l,!0))),mt(t,a,a.pendingProps.children,l),a.child;case 29:throw a.pendingProps}throw Error(v(156,a.tag))}function fa(t){t.flags|=4}function oi(t,a,l,e,u){if((a=(t.mode&32)!==0)&&(a=!1),a){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(vr())t.flags|=8192;else throw ol=Iu,Zc}else t.flags&=-16777217}function xo(t,a){if(a.type!=="stylesheet"||a.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Zr(a))if(vr())t.flags|=8192;else throw ol=Iu,Zc}function zu(t,a){a!==null&&(t.flags|=4),t.flags&16384&&(a=t.tag!==22?x0():536870912,t.lanes|=a,Il|=a)}function pe(t,a){if(!G)switch(t.tailMode){case"hidden":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?a||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function W(t){var a=t.alternate!==null&&t.alternate.child===t.child,l=0,e=0;if(a)for(var u=t.child;u!==null;)l|=u.lanes|u.childLanes,e|=u.subtreeFlags&65011712,e|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)l|=u.lanes|u.childLanes,e|=u.subtreeFlags,e|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=e,t.childLanes=l,a}function $h(t,a,l){var e=a.pendingProps;switch(Gc(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return W(a),null;case 1:return W(a),null;case 3:return l=a.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),a.memoizedState.cache!==e&&(a.flags|=2048),ya(ct),Kl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(zl(a)?fa(a):t===null||t.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,ti())),W(a),null;case 26:var u=a.type,n=a.memoizedState;return t===null?(fa(a),n!==null?(W(a),xo(a,n)):(W(a),oi(a,u,null,e,l))):n?n!==t.memoizedState?(fa(a),W(a),xo(a,n)):(W(a),a.flags&=-16777217):(t=t.memoizedProps,t!==e&&fa(a),W(a),oi(a,u,t,e,l)),null;case 27:if(wu(a),l=Ga.current,u=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&fa(a);else{if(!e){if(a.stateNode===null)throw Error(v(166));return W(a),null}t=ea.current,zl(a)?kf(a):(t=Gr(u,e,l),a.stateNode=t,fa(a))}return W(a),null;case 5:if(wu(a),u=a.type,t!==null&&a.stateNode!=null)t.memoizedProps!==e&&fa(a);else{if(!e){if(a.stateNode===null)throw Error(v(166));return W(a),null}if(n=ea.current,zl(a))kf(a);else{var i=hn(Ga.current);switch(n){case 1:n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":n=i.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":n=i.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":n=i.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?n.multiple=!0:e.size&&(n.size=e.size);break;default:n=typeof e.is=="string"?i.createElement(u,{is:e.is}):i.createElement(u)}}n[gt]=a,n[_t]=e;t:for(i=a.child;i!==null;){if(i.tag===5||i.tag===6)n.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===a)break t;for(;i.sibling===null;){if(i.return===null||i.return===a)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}a.stateNode=n;t:switch(yt(n,u,e),u){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&fa(a)}}return W(a),oi(a,a.type,t===null?null:t.memoizedProps,a.pendingProps,l),null;case 6:if(t&&a.stateNode!=null)t.memoizedProps!==e&&fa(a);else{if(typeof e!="string"&&a.stateNode===null)throw Error(v(166));if(t=Ga.current,zl(a)){if(t=a.stateNode,l=a.memoizedProps,e=null,u=pt,u!==null)switch(u.tag){case 27:case 5:e=u.memoizedProps}t[gt]=a,t=!!(t.nodeValue===l||e!==null&&e.suppressHydrationWarning===!0||Rr(t.nodeValue,l)),t||Wa(a,!0)}else t=hn(t).createTextNode(e),t[gt]=a,a.stateNode=t}return W(a),null;case 31:if(l=a.memoizedState,t===null||t.memoizedState!==null){if(e=zl(a),l!==null){if(t===null){if(!e)throw Error(v(318));if(t=a.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(v(557));t[gt]=a}else rl(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;W(a),t=!1}else l=ti(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return a.flags&256?(Nt(a),a):(Nt(a),null);if(a.flags&128)throw Error(v(558))}return W(a),null;case 13:if(e=a.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=zl(a),e!==null&&e.dehydrated!==null){if(t===null){if(!u)throw Error(v(318));if(u=a.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(v(317));u[gt]=a}else rl(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;W(a),u=!1}else u=ti(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return a.flags&256?(Nt(a),a):(Nt(a),null)}return Nt(a),a.flags&128?(a.lanes=l,a):(l=e!==null,t=t!==null&&t.memoizedState!==null,l&&(e=a.child,u=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(u=e.alternate.memoizedState.cachePool.pool),n=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==u&&(e.flags|=2048)),l!==t&&l&&(a.child.flags|=8192),zu(a,a.updateQueue),W(a),null);case 4:return Kl(),t===null&&hf(a.stateNode.containerInfo),W(a),null;case 10:return ya(a.type),W(a),null;case 19:if(ht(et),e=a.memoizedState,e===null)return W(a),null;if(u=(a.flags&128)!==0,n=e.rendering,n===null)if(u)pe(e,!1);else{if(at!==0||t!==null&&t.flags&128)for(t=a.child;t!==null;){if(n=tn(t),n!==null){for(a.flags|=128,pe(e,!1),t=n.updateQueue,a.updateQueue=t,zu(a,t),a.subtreeFlags=0,t=l,l=a.child;l!==null;)$0(l,t),l=l.sibling;return J(et,et.current&1|2),G&&da(a,e.treeForkCount),a.child}t=t.sibling}e.tail!==null&&Yt()>cn&&(a.flags|=128,u=!0,pe(e,!1),a.lanes=4194304)}else{if(!u)if(t=tn(n),t!==null){if(a.flags|=128,u=!0,t=t.updateQueue,a.updateQueue=t,zu(a,t),pe(e,!0),e.tail===null&&e.tailMode==="hidden"&&!n.alternate&&!G)return W(a),null}else 2*Yt()-e.renderingStartTime>cn&&l!==536870912&&(a.flags|=128,u=!0,pe(e,!1),a.lanes=4194304);e.isBackwards?(n.sibling=a.child,a.child=n):(t=e.last,t!==null?t.sibling=n:a.child=n,e.last=n)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Yt(),t.sibling=null,l=et.current,J(et,u?l&1|2:l&1),G&&da(a,e.treeForkCount),t):(W(a),null);case 22:case 23:return Nt(a),Vc(),e=a.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(a.flags|=8192):e&&(a.flags|=8192),e?l&536870912&&!(a.flags&128)&&(W(a),a.subtreeFlags&6&&(a.flags|=8192)):W(a),l=a.updateQueue,l!==null&&zu(a,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==l&&(a.flags|=2048),t!==null&&ht(fl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),ya(ct),W(a),null;case 25:return null;case 30:return null}throw Error(v(156,a.tag))}function Fh(t,a){switch(Gc(a),a.tag){case 1:return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 3:return ya(ct),Kl(),t=a.flags,t&65536&&!(t&128)?(a.flags=t&-65537|128,a):null;case 26:case 27:case 5:return wu(a),null;case 31:if(a.memoizedState!==null){if(Nt(a),a.alternate===null)throw Error(v(340));rl()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 13:if(Nt(a),t=a.memoizedState,t!==null&&t.dehydrated!==null){if(a.alternate===null)throw Error(v(340));rl()}return t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 19:return ht(et),null;case 4:return Kl(),null;case 10:return ya(a.type),null;case 22:case 23:return Nt(a),Vc(),t!==null&&ht(fl),t=a.flags,t&65536?(a.flags=t&-65537|128,a):null;case 24:return ya(ct),null;case 25:return null;default:return null}}function $s(t,a){switch(Gc(a),a.tag){case 3:ya(ct),Kl();break;case 26:case 27:case 5:wu(a);break;case 4:Kl();break;case 31:a.memoizedState!==null&&Nt(a);break;case 13:Nt(a);break;case 19:ht(et);break;case 10:ya(a.type);break;case 22:case 23:Nt(a),Vc(),t!==null&&ht(fl);break;case 24:ya(ct)}}function iu(t,a){try{var l=a.updateQueue,e=l!==null?l.lastEffect:null;if(e!==null){var u=e.next;l=u;do{if((l.tag&t)===t){e=void 0;var n=l.create,i=l.inst;e=n(),i.destroy=e}l=l.next}while(l!==u)}}catch(c){L(a,a.return,c)}}function $a(t,a,l){try{var e=a.updateQueue,u=e!==null?e.lastEffect:null;if(u!==null){var n=u.next;e=n;do{if((e.tag&t)===t){var i=e.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=a;var f=l,r=c;try{r()}catch(p){L(u,f,p)}}}e=e.next}while(e!==n)}}catch(p){L(a,a.return,p)}}function Fs(t){var a=t.updateQueue;if(a!==null){var l=t.stateNode;try{is(a,l)}catch(e){L(t,t.return,e)}}}function Is(t,a,l){l.props=gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(e){L(t,a,e)}}function je(t,a){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof l=="function"?t.refCleanup=l(e):l.current=e}}catch(u){L(t,a,u)}}function la(t,a){var l=t.ref,e=t.refCleanup;if(l!==null)if(typeof e=="function")try{e()}catch(u){L(t,a,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(u){L(t,a,u)}else l.current=null}function Ps(t){var a=t.type,l=t.memoizedProps,e=t.stateNode;try{t:switch(a){case"button":case"input":case"select":case"textarea":l.autoFocus&&e.focus();break t;case"img":l.src?e.src=l.src:l.srcSet&&(e.srcset=l.srcSet)}}catch(u){L(t,t.return,u)}}function si(t,a,l){try{var e=t.stateNode;vm(e,t.type,l,a),e[_t]=a}catch(u){L(t,t.return,u)}}function tr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Pa(t.type)||t.tag===4}function ri(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||tr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Pa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lc(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,a):(a=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,a.appendChild(t),l=l._reactRootContainer,l!=null||a.onclick!==null||(a.onclick=ga));else if(e!==4&&(e===27&&Pa(t.type)&&(l=t.stateNode,a=null),t=t.child,t!==null))for(lc(t,a,l),t=t.sibling;t!==null;)lc(t,a,l),t=t.sibling}function nn(t,a,l){var e=t.tag;if(e===5||e===6)t=t.stateNode,a?l.insertBefore(t,a):l.appendChild(t);else if(e!==4&&(e===27&&Pa(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(nn(t,a,l),t=t.sibling;t!==null;)nn(t,a,l),t=t.sibling}function ar(t){var a=t.stateNode,l=t.memoizedProps;try{for(var e=t.type,u=a.attributes;u.length;)a.removeAttributeNode(u[0]);yt(a,e,l),a[gt]=t,a[_t]=l}catch(n){L(t,t.return,n)}}var ha=!1,it=!1,di=!1,So=typeof WeakSet=="function"?WeakSet:Set,rt=null;function Ih(t,a){if(t=t.containerInfo,oc=bn,t=Z0(t),Yc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var e=l.getSelection&&l.getSelection();if(e&&e.rangeCount!==0){l=e.anchorNode;var u=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{l.nodeType,n.nodeType}catch{l=null;break t}var i=0,c=-1,f=-1,r=0,p=0,g=t,d=null;a:for(;;){for(var m;g!==l||u!==0&&g.nodeType!==3||(c=i+u),g!==n||e!==0&&g.nodeType!==3||(f=i+e),g.nodeType===3&&(i+=g.nodeValue.length),(m=g.firstChild)!==null;)d=g,g=m;for(;;){if(g===t)break a;if(d===l&&++r===u&&(c=i),d===n&&++p===e&&(f=i),(m=g.nextSibling)!==null)break;g=d,d=g.parentNode}g=m}l=c===-1||f===-1?null:{start:c,end:f}}else l=null}l=l||{start:0,end:0}}else l=null;for(sc={focusedElem:t,selectionRange:l},bn=!1,rt=a;rt!==null;)if(a=rt,t=a.child,(a.subtreeFlags&1028)!==0&&t!==null)t.return=a,rt=t;else for(;rt!==null;){switch(a=rt,n=a.alternate,t=a.flags,a.tag){case 0:if(t&4&&(t=a.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)u=t[l],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&n!==null){t=void 0,l=a,u=n.memoizedProps,n=n.memoizedState,e=l.stateNode;try{var x=gl(l.type,u);t=e.getSnapshotBeforeUpdate(x,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(E){L(l,l.return,E)}}break;case 3:if(t&1024){if(t=a.stateNode.containerInfo,l=t.nodeType,l===9)dc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":dc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(v(163))}if(t=a.sibling,t!==null){t.return=a.return,rt=t;break}rt=a.return}}function lr(t,a,l){var e=l.flags;switch(l.tag){case 0:case 11:case 15:sa(t,l),e&4&&iu(5,l);break;case 1:if(sa(t,l),e&4)if(t=l.stateNode,a===null)try{t.componentDidMount()}catch(i){L(l,l.return,i)}else{var u=gl(l.type,a.memoizedProps);a=a.memoizedState;try{t.componentDidUpdate(u,a,t.__reactInternalSnapshotBeforeUpdate)}catch(i){L(l,l.return,i)}}e&64&&Fs(l),e&512&&je(l,l.return);break;case 3:if(sa(t,l),e&64&&(t=l.updateQueue,t!==null)){if(a=null,l.child!==null)switch(l.child.tag){case 27:case 5:a=l.child.stateNode;break;case 1:a=l.child.stateNode}try{is(t,a)}catch(i){L(l,l.return,i)}}break;case 27:a===null&&e&4&&ar(l);case 26:case 5:sa(t,l),a===null&&e&4&&Ps(l),e&512&&je(l,l.return);break;case 12:sa(t,l);break;case 31:sa(t,l),e&4&&nr(t,l);break;case 13:sa(t,l),e&4&&ir(t,l),e&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=cm.bind(null,l),Mm(t,l))));break;case 22:if(e=l.memoizedState!==null||ha,!e){a=a!==null&&a.memoizedState!==null||it,u=ha;var n=it;ha=e,(it=a)&&!n?ra(t,l,(l.subtreeFlags&8772)!==0):sa(t,l),ha=u,it=n}break;case 30:break;default:sa(t,l)}}function er(t){var a=t.alternate;a!==null&&(t.alternate=null,er(a)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(a=t.stateNode,a!==null&&_c(a)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var P=null,At=!1;function oa(t,a,l){for(l=l.child;l!==null;)ur(t,a,l),l=l.sibling}function ur(t,a,l){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Pe,l)}catch{}switch(l.tag){case 26:it||la(l,a),oa(t,a,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:it||la(l,a);var e=P,u=At;Pa(l.type)&&(P=l.stateNode,At=!1),oa(t,a,l),Be(l.stateNode),P=e,At=u;break;case 5:it||la(l,a);case 6:if(e=P,u=At,P=null,oa(t,a,l),P=e,At=u,P!==null)if(At)try{(P.nodeType===9?P.body:P.nodeName==="HTML"?P.ownerDocument.body:P).removeChild(l.stateNode)}catch(n){L(l,a,n)}else try{P.removeChild(l.stateNode)}catch(n){L(l,a,n)}break;case 18:P!==null&&(At?(t=P,Yo(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),le(t)):Yo(P,l.stateNode));break;case 4:e=P,u=At,P=l.stateNode.containerInfo,At=!0,oa(t,a,l),P=e,At=u;break;case 0:case 11:case 14:case 15:$a(2,l,a),it||$a(4,l,a),oa(t,a,l);break;case 1:it||(la(l,a),e=l.stateNode,typeof e.componentWillUnmount=="function"&&Is(l,a,e)),oa(t,a,l);break;case 21:oa(t,a,l);break;case 22:it=(e=it)||l.memoizedState!==null,oa(t,a,l),it=e;break;default:oa(t,a,l)}}function nr(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{le(t)}catch(l){L(a,a.return,l)}}}function ir(t,a){if(a.memoizedState===null&&(t=a.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{le(t)}catch(l){L(a,a.return,l)}}function Ph(t){switch(t.tag){case 31:case 13:case 19:var a=t.stateNode;return a===null&&(a=t.stateNode=new So),a;case 22:return t=t.stateNode,a=t._retryCache,a===null&&(a=t._retryCache=new So),a;default:throw Error(v(435,t.tag))}}function Eu(t,a){var l=Ph(t);a.forEach(function(e){if(!l.has(e)){l.add(e);var u=fm.bind(null,t,e);e.then(u,u)}})}function Et(t,a){var l=a.deletions;if(l!==null)for(var e=0;e<l.length;e++){var u=l[e],n=t,i=a,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(Pa(c.type)){P=c.stateNode,At=!1;break t}break;case 5:P=c.stateNode,At=!1;break t;case 3:case 4:P=c.stateNode.containerInfo,At=!0;break t}c=c.return}if(P===null)throw Error(v(160));ur(n,i,u),P=null,At=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)cr(a,t),a=a.sibling}var It=null;function cr(t,a){var l=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Et(a,t),Tt(t),e&4&&($a(3,t,t.return),iu(3,t),$a(5,t,t.return));break;case 1:Et(a,t),Tt(t),e&512&&(it||l===null||la(l,l.return)),e&64&&ha&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?e:l.concat(e))));break;case 26:var u=It;if(Et(a,t),Tt(t),e&512&&(it||l===null||la(l,l.return)),e&4){var n=l!==null?l.memoizedState:null;if(e=t.memoizedState,l===null)if(e===null)if(t.stateNode===null){t:{e=t.type,l=t.memoizedProps,u=u.ownerDocument||u;a:switch(e){case"title":n=u.getElementsByTagName("title")[0],(!n||n[lu]||n[gt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(e),u.head.insertBefore(n,u.querySelector("head > title"))),yt(n,e,l),n[gt]=t,dt(n),e=n;break t;case"link":var i=Qo("link","href",u).get(e+(l.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&n.getAttribute("rel")===(l.rel==null?null:l.rel)&&n.getAttribute("title")===(l.title==null?null:l.title)&&n.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){i.splice(c,1);break a}}n=u.createElement(e),yt(n,e,l),u.head.appendChild(n);break;case"meta":if(i=Qo("meta","content",u).get(e+(l.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(l.content==null?null:""+l.content)&&n.getAttribute("name")===(l.name==null?null:l.name)&&n.getAttribute("property")===(l.property==null?null:l.property)&&n.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&n.getAttribute("charset")===(l.charSet==null?null:l.charSet)){i.splice(c,1);break a}}n=u.createElement(e),yt(n,e,l),u.head.appendChild(n);break;default:throw Error(v(468,e))}n[gt]=t,dt(n),e=n}t.stateNode=e}else Zo(u,t.type,t.stateNode);else t.stateNode=Xo(u,e,t.memoizedProps);else n!==e?(n===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):n.count--,e===null?Zo(u,t.type,t.stateNode):Xo(u,e,t.memoizedProps)):e===null&&t.stateNode!==null&&si(t,t.memoizedProps,l.memoizedProps)}break;case 27:Et(a,t),Tt(t),e&512&&(it||l===null||la(l,l.return)),l!==null&&e&4&&si(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Et(a,t),Tt(t),e&512&&(it||l===null||la(l,l.return)),t.flags&32){u=t.stateNode;try{kl(u,"")}catch(x){L(t,t.return,x)}}e&4&&t.stateNode!=null&&(u=t.memoizedProps,si(t,u,l!==null?l.memoizedProps:u)),e&1024&&(di=!0);break;case 6:if(Et(a,t),Tt(t),e&4){if(t.stateNode===null)throw Error(v(162));e=t.memoizedProps,l=t.stateNode;try{l.nodeValue=e}catch(x){L(t,t.return,x)}}break;case 3:if(Xu=null,u=It,It=mn(a.containerInfo),Et(a,t),It=u,Tt(t),e&4&&l!==null&&l.memoizedState.isDehydrated)try{le(a.containerInfo)}catch(x){L(t,t.return,x)}di&&(di=!1,fr(t));break;case 4:e=It,It=mn(t.stateNode.containerInfo),Et(a,t),Tt(t),It=e;break;case 12:Et(a,t),Tt(t);break;case 31:Et(a,t),Tt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Eu(t,e)));break;case 13:Et(a,t),Tt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(jn=Yt()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Eu(t,e)));break;case 22:u=t.memoizedState!==null;var f=l!==null&&l.memoizedState!==null,r=ha,p=it;if(ha=r||u,it=p||f,Et(a,t),it=p,ha=r,Tt(t),e&8192)t:for(a=t.stateNode,a._visibility=u?a._visibility&-2:a._visibility|1,u&&(l===null||f||ha||it||nl(t)),l=null,a=t;;){if(a.tag===5||a.tag===26){if(l===null){f=l=a;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var g=f.memoizedProps.style,d=g!=null&&g.hasOwnProperty("display")?g.display:null;c.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(x){L(f,f.return,x)}}}else if(a.tag===6){if(l===null){f=a;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){L(f,f.return,x)}}}else if(a.tag===18){if(l===null){f=a;try{var m=f.stateNode;u?Ro(m,!0):Ro(f.stateNode,!1)}catch(x){L(f,f.return,x)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===t)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break t;for(;a.sibling===null;){if(a.return===null||a.return===t)break t;l===a&&(l=null),a=a.return}l===a&&(l=null),a.sibling.return=a.return,a=a.sibling}e&4&&(e=t.updateQueue,e!==null&&(l=e.retryQueue,l!==null&&(e.retryQueue=null,Eu(t,l))));break;case 19:Et(a,t),Tt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Eu(t,e)));break;case 30:break;case 21:break;default:Et(a,t),Tt(t)}}function Tt(t){var a=t.flags;if(a&2){try{for(var l,e=t.return;e!==null;){if(tr(e)){l=e;break}e=e.return}if(l==null)throw Error(v(160));switch(l.tag){case 27:var u=l.stateNode,n=ri(t);nn(t,n,u);break;case 5:var i=l.stateNode;l.flags&32&&(kl(i,""),l.flags&=-33);var c=ri(t);nn(t,c,i);break;case 3:case 4:var f=l.stateNode.containerInfo,r=ri(t);lc(t,r,f);break;default:throw Error(v(161))}}catch(p){L(t,t.return,p)}t.flags&=-3}a&4096&&(t.flags&=-4097)}function fr(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var a=t;fr(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),t=t.sibling}}function sa(t,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)lr(t,a.alternate,a),a=a.sibling}function nl(t){for(t=t.child;t!==null;){var a=t;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),nl(a);break;case 1:la(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&Is(a,a.return,l),nl(a);break;case 27:Be(a.stateNode);case 26:case 5:la(a,a.return),nl(a);break;case 22:a.memoizedState===null&&nl(a);break;case 30:nl(a);break;default:nl(a)}t=t.sibling}}function ra(t,a,l){for(l=l&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var e=a.alternate,u=t,n=a,i=n.flags;switch(n.tag){case 0:case 11:case 15:ra(u,n,l),iu(4,n);break;case 1:if(ra(u,n,l),e=n,u=e.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(r){L(e,e.return,r)}if(e=n,u=e.updateQueue,u!==null){var c=e.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)ns(f[u],c)}catch(r){L(e,e.return,r)}}l&&i&64&&Fs(n),je(n,n.return);break;case 27:ar(n);case 26:case 5:ra(u,n,l),l&&e===null&&i&4&&Ps(n),je(n,n.return);break;case 12:ra(u,n,l);break;case 31:ra(u,n,l),l&&i&4&&nr(u,n);break;case 13:ra(u,n,l),l&&i&4&&ir(u,n);break;case 22:n.memoizedState===null&&ra(u,n,l),je(n,n.return);break;case 30:break;default:ra(u,n,l)}a=a.sibling}}function cf(t,a){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&uu(l))}function ff(t,a){t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&uu(t))}function Ft(t,a,l,e){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)or(t,a,l,e),a=a.sibling}function or(t,a,l,e){var u=a.flags;switch(a.tag){case 0:case 11:case 15:Ft(t,a,l,e),u&2048&&iu(9,a);break;case 1:Ft(t,a,l,e);break;case 3:Ft(t,a,l,e),u&2048&&(t=null,a.alternate!==null&&(t=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==t&&(a.refCount++,t!=null&&uu(t)));break;case 12:if(u&2048){Ft(t,a,l,e),t=a.stateNode;try{var n=a.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,a.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){L(a,a.return,f)}}else Ft(t,a,l,e);break;case 31:Ft(t,a,l,e);break;case 13:Ft(t,a,l,e);break;case 23:break;case 22:n=a.stateNode,i=a.alternate,a.memoizedState!==null?n._visibility&2?Ft(t,a,l,e):Ye(t,a):n._visibility&2?Ft(t,a,l,e):(n._visibility|=2,Al(t,a,l,e,(a.subtreeFlags&10256)!==0||!1)),u&2048&&cf(i,a);break;case 24:Ft(t,a,l,e),u&2048&&ff(a.alternate,a);break;default:Ft(t,a,l,e)}}function Al(t,a,l,e,u){for(u=u&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var n=t,i=a,c=l,f=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:Al(n,i,c,f,u),iu(8,i);break;case 23:break;case 22:var p=i.stateNode;i.memoizedState!==null?p._visibility&2?Al(n,i,c,f,u):Ye(n,i):(p._visibility|=2,Al(n,i,c,f,u)),u&&r&2048&&cf(i.alternate,i);break;case 24:Al(n,i,c,f,u),u&&r&2048&&ff(i.alternate,i);break;default:Al(n,i,c,f,u)}a=a.sibling}}function Ye(t,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var l=t,e=a,u=e.flags;switch(e.tag){case 22:Ye(l,e),u&2048&&cf(e.alternate,e);break;case 24:Ye(l,e),u&2048&&ff(e.alternate,e);break;default:Ye(l,e)}a=a.sibling}}var Ee=8192;function El(t,a,l){if(t.subtreeFlags&Ee)for(t=t.child;t!==null;)sr(t,a,l),t=t.sibling}function sr(t,a,l){switch(t.tag){case 26:El(t,a,l),t.flags&Ee&&t.memoizedState!==null&&Gm(l,It,t.memoizedState,t.memoizedProps);break;case 5:El(t,a,l);break;case 3:case 4:var e=It;It=mn(t.stateNode.containerInfo),El(t,a,l),It=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Ee,Ee=16777216,El(t,a,l),Ee=e):El(t,a,l));break;default:El(t,a,l)}}function rr(t){var a=t.alternate;if(a!==null&&(t=a.child,t!==null)){a.child=null;do a=t.sibling,t.sibling=null,t=a;while(t!==null)}}function be(t){var a=t.deletions;if(t.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];rt=e,hr(e,t)}rr(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dr(t),t=t.sibling}function dr(t){switch(t.tag){case 0:case 11:case 15:be(t),t.flags&2048&&$a(9,t,t.return);break;case 3:be(t);break;case 12:be(t);break;case 22:var a=t.stateNode;t.memoizedState!==null&&a._visibility&2&&(t.return===null||t.return.tag!==13)?(a._visibility&=-3,qu(t)):be(t);break;default:be(t)}}function qu(t){var a=t.deletions;if(t.flags&16){if(a!==null)for(var l=0;l<a.length;l++){var e=a[l];rt=e,hr(e,t)}rr(t)}for(t=t.child;t!==null;){switch(a=t,a.tag){case 0:case 11:case 15:$a(8,a,a.return),qu(a);break;case 22:l=a.stateNode,l._visibility&2&&(l._visibility&=-3,qu(a));break;default:qu(a)}t=t.sibling}}function hr(t,a){for(;rt!==null;){var l=rt;switch(l.tag){case 0:case 11:case 15:$a(8,l,a);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var e=l.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:uu(l.memoizedState.cache)}if(e=l.child,e!==null)e.return=l,rt=e;else t:for(l=t;rt!==null;){e=rt;var u=e.sibling,n=e.return;if(er(e),e===l){rt=null;break t}if(u!==null){u.return=n,rt=u;break t}rt=n}}}var tm={getCacheForType:function(t){var a=bt(ct),l=a.data.get(t);return l===void 0&&(l=t(),a.data.set(t,l)),l},cacheSignal:function(){return bt(ct).controller.signal}},am=typeof WeakMap=="function"?WeakMap:Map,X=0,K=null,B=null,q=0,Z=0,Ut=null,Ca=!1,fe=!1,of=!1,Ta=0,at=0,Fa=0,sl=0,sf=0,jt=0,Il=0,Re=null,Ot=null,ec=!1,jn=0,mr=0,cn=1/0,fn=null,La=null,ot=0,Va=null,Pl=null,va=0,uc=0,nc=null,gr=null,Ce=0,ic=null;function Bt(){return X&2&&q!==0?q&-q:M.T!==null?df():T0()}function pr(){if(jt===0)if(!(q&536870912)||G){var t=gu;gu<<=1,!(gu&3932160)&&(gu=262144),jt=t}else jt=536870912;return t=Gt.current,t!==null&&(t.flags|=32),jt}function Mt(t,a,l){(t===K&&(Z===2||Z===9)||t.cancelPendingCommit!==null)&&(te(t,0),Ba(t,q,jt,!1)),au(t,l),(!(X&2)||t!==K)&&(t===K&&(!(X&2)&&(sl|=l),at===4&&Ba(t,q,jt,!1)),na(t))}function br(t,a,l){if(X&6)throw Error(v(327));var e=!l&&(a&127)===0&&(a&t.expiredLanes)===0||tu(t,a),u=e?um(t,a):hi(t,a,!0),n=e;do{if(u===0){fe&&!e&&Ba(t,a,0,!1);break}else{if(l=t.current.alternate,n&&!lm(l)){u=hi(t,a,!1),n=!1;continue}if(u===2){if(n=a,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;t:{var c=t;u=Re;var f=c.current.memoizedState.isDehydrated;if(f&&(te(c,i).flags|=256),i=hi(c,i,!1),i!==2){if(of&&!f){c.errorRecoveryDisabledLanes|=n,sl|=n,u=4;break t}n=Ot,Ot=u,n!==null&&(Ot===null?Ot=n:Ot.push.apply(Ot,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){te(t,0),Ba(t,a,0,!0);break}t:{switch(e=t,n=u,n){case 0:case 1:throw Error(v(345));case 4:if((a&4194048)!==a)break;case 6:Ba(e,a,jt,!Ca);break t;case 2:Ot=null;break;case 3:case 5:break;default:throw Error(v(329))}if((a&62914560)===a&&(u=jn+300-Yt(),10<u)){if(Ba(e,a,jt,!Ca),zn(e,0,!0)!==0)break t;va=a,e.timeoutHandle=Br(zo.bind(null,e,l,Ot,fn,ec,a,jt,sl,Il,Ca,n,"Throttled",-0,0),u);break t}zo(e,l,Ot,fn,ec,a,jt,sl,Il,Ca,n,null,-0,0)}}break}while(!0);na(t)}function zo(t,a,l,e,u,n,i,c,f,r,p,g,d,m){if(t.timeoutHandle=-1,g=a.subtreeFlags,g&8192||(g&16785408)===16785408){g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ga},sr(a,n,g);var x=(n&62914560)===n?jn-Yt():(n&4194048)===n?mr-Yt():0;if(x=Xm(g,x),x!==null){va=n,t.cancelPendingCommit=x(To.bind(null,t,a,n,l,e,u,i,c,f,p,g,null,d,m)),Ba(t,n,i,!r);return}}To(t,a,n,l,e,u,i,c,f)}function lm(t){for(var a=t;;){var l=a.tag;if((l===0||l===11||l===15)&&a.flags&16384&&(l=a.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var e=0;e<l.length;e++){var u=l[e],n=u.getSnapshot;u=u.value;try{if(!qt(n(),u))return!1}catch{return!1}}if(l=a.child,a.subtreeFlags&16384&&l!==null)l.return=a,a=l;else{if(a===t)break;for(;a.sibling===null;){if(a.return===null||a.return===t)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ba(t,a,l,e){a&=~sf,a&=~sl,t.suspendedLanes|=a,t.pingedLanes&=~a,e&&(t.warmLanes|=a),e=t.expirationTimes;for(var u=a;0<u;){var n=31-Ct(u),i=1<<n;e[n]=-1,u&=~i}l!==0&&S0(t,l,a)}function Yn(){return X&6?!0:(cu(0),!1)}function rf(){if(B!==null){if(Z===0)var t=B.return;else t=B,pa=xl=null,Wc(t),Ll=null,Ve=0,t=B;for(;t!==null;)$s(t.alternate,t),t=t.return;B=null}}function te(t,a){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,zm(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),va=0,rf(),K=t,B=l=ba(t.current,null),q=a,Z=0,Ut=null,Ca=!1,fe=tu(t,a),of=!1,Il=jt=sf=sl=Fa=at=0,Ot=Re=null,ec=!1,a&8&&(a|=a&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=a;0<e;){var u=31-Ct(e),n=1<<u;a|=t[u],e&=~n}return Ta=a,On(),l}function yr(t,a){N=null,M.H=Ke,a===ce||a===_n?(a=Pf(),Z=3):a===Zc?(a=Pf(),Z=4):Z=a===uf?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ut=a,B===null&&(at=1,en(t,wt(a,t.current)))}function vr(){var t=Gt.current;return t===null?!0:(q&4194048)===q?Jt===null:(q&62914560)===q||q&536870912?t===Jt:!1}function xr(){var t=M.H;return M.H=Ke,t===null?Ke:t}function Sr(){var t=M.A;return M.A=tm,t}function on(){at=4,Ca||(q&4194048)!==q&&Gt.current!==null||(fe=!0),!(Fa&134217727)&&!(sl&134217727)||K===null||Ba(K,q,jt,!1)}function hi(t,a,l){var e=X;X|=2;var u=xr(),n=Sr();(K!==t||q!==a)&&(fn=null,te(t,a)),a=!1;var i=at;t:do try{if(Z!==0&&B!==null){var c=B,f=Ut;switch(Z){case 8:rf(),i=6;break t;case 3:case 2:case 9:case 6:Gt.current===null&&(a=!0);var r=Z;if(Z=0,Ut=null,ql(t,c,f,r),l&&fe){i=0;break t}break;default:r=Z,Z=0,Ut=null,ql(t,c,f,r)}}em(),i=at;break}catch(p){yr(t,p)}while(!0);return a&&t.shellSuspendCounter++,pa=xl=null,X=e,M.H=u,M.A=n,B===null&&(K=null,q=0,On()),i}function em(){for(;B!==null;)zr(B)}function um(t,a){var l=X;X|=2;var e=xr(),u=Sr();K!==t||q!==a?(fn=null,cn=Yt()+500,te(t,a)):fe=tu(t,a);t:do try{if(Z!==0&&B!==null){a=B;var n=Ut;a:switch(Z){case 1:Z=0,Ut=null,ql(t,a,n,1);break;case 2:case 9:if(If(n)){Z=0,Ut=null,Eo(a);break}a=function(){Z!==2&&Z!==9||K!==t||(Z=7),na(t)},n.then(a,a);break t;case 3:Z=7;break t;case 4:Z=5;break t;case 7:If(n)?(Z=0,Ut=null,Eo(a)):(Z=0,Ut=null,ql(t,a,n,7));break;case 5:var i=null;switch(B.tag){case 26:i=B.memoizedState;case 5:case 27:var c=B;if(i?Zr(i):c.stateNode.complete){Z=0,Ut=null;var f=c.sibling;if(f!==null)B=f;else{var r=c.return;r!==null?(B=r,Rn(r)):B=null}break a}}Z=0,Ut=null,ql(t,a,n,5);break;case 6:Z=0,Ut=null,ql(t,a,n,6);break;case 8:rf(),at=6;break t;default:throw Error(v(462))}}nm();break}catch(p){yr(t,p)}while(!0);return pa=xl=null,M.H=e,M.A=u,X=l,B!==null?0:(K=null,q=0,On(),at)}function nm(){for(;B!==null&&!_d();)zr(B)}function zr(t){var a=Ws(t.alternate,t,Ta);t.memoizedProps=t.pendingProps,a===null?Rn(t):B=a}function Eo(t){var a=t,l=a.alternate;switch(a.tag){case 15:case 0:a=po(l,a,a.pendingProps,a.type,void 0,q);break;case 11:a=po(l,a,a.pendingProps,a.type.render,a.ref,q);break;case 5:Wc(a);default:$s(l,a),a=B=$0(a,Ta),a=Ws(l,a,Ta)}t.memoizedProps=t.pendingProps,a===null?Rn(t):B=a}function ql(t,a,l,e){pa=xl=null,Wc(a),Ll=null,Ve=0;var u=a.return;try{if(Jh(t,u,a,l,q)){at=1,en(t,wt(l,t.current)),B=null;return}}catch(n){if(u!==null)throw B=u,n;at=1,en(t,wt(l,t.current)),B=null;return}a.flags&32768?(G||e===1?t=!0:fe||q&536870912?t=!1:(Ca=t=!0,(e===2||e===9||e===3||e===6)&&(e=Gt.current,e!==null&&e.tag===13&&(e.flags|=16384))),Er(a,t)):Rn(a)}function Rn(t){var a=t;do{if(a.flags&32768){Er(a,Ca);return}t=a.return;var l=$h(a.alternate,a,Ta);if(l!==null){B=l;return}if(a=a.sibling,a!==null){B=a;return}B=a=t}while(a!==null);at===0&&(at=5)}function Er(t,a){do{var l=Fh(t.alternate,t);if(l!==null){l.flags&=32767,B=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!a&&(t=t.sibling,t!==null)){B=t;return}B=t=l}while(t!==null);at=6,B=null}function To(t,a,l,e,u,n,i,c,f){t.cancelPendingCommit=null;do Cn();while(ot!==0);if(X&6)throw Error(v(327));if(a!==null){if(a===t.current)throw Error(v(177));if(n=a.lanes|a.childLanes,n|=Rc,qd(t,l,n,i,c,f),t===K&&(B=K=null,q=0),Pl=a,Va=t,va=l,uc=n,nc=u,gr=e,a.subtreeFlags&10256||a.flags&10256?(t.callbackNode=null,t.callbackPriority=0,om(Ku,function(){return _r(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(a.flags&13878)!==0,a.subtreeFlags&13878||e){e=M.T,M.T=null,u=Q.p,Q.p=2,i=X,X|=4;try{Ih(t,a,l)}finally{X=i,Q.p=u,M.T=e}}ot=1,Tr(),Ar(),Or()}}function Tr(){if(ot===1){ot=0;var t=Va,a=Pl,l=(a.flags&13878)!==0;if(a.subtreeFlags&13878||l){l=M.T,M.T=null;var e=Q.p;Q.p=2;var u=X;X|=4;try{cr(a,t);var n=sc,i=Z0(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&Q0(c.ownerDocument.documentElement,c)){if(f!==null&&Yc(c)){var r=f.start,p=f.end;if(p===void 0&&(p=r),"selectionStart"in c)c.selectionStart=r,c.selectionEnd=Math.min(p,c.value.length);else{var g=c.ownerDocument||document,d=g&&g.defaultView||window;if(d.getSelection){var m=d.getSelection(),x=c.textContent.length,E=Math.min(f.start,x),Y=f.end===void 0?E:Math.min(f.end,x);!m.extend&&E>Y&&(i=Y,Y=E,E=i);var s=wf(c,E),o=wf(c,Y);if(s&&o&&(m.rangeCount!==1||m.anchorNode!==s.node||m.anchorOffset!==s.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)){var h=g.createRange();h.setStart(s.node,s.offset),m.removeAllRanges(),E>Y?(m.addRange(h),m.extend(o.node,o.offset)):(h.setEnd(o.node,o.offset),m.addRange(h))}}}}for(g=[],m=c;m=m.parentNode;)m.nodeType===1&&g.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<g.length;c++){var b=g[c];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}bn=!!oc,sc=oc=null}finally{X=u,Q.p=e,M.T=l}}t.current=a,ot=2}}function Ar(){if(ot===2){ot=0;var t=Va,a=Pl,l=(a.flags&8772)!==0;if(a.subtreeFlags&8772||l){l=M.T,M.T=null;var e=Q.p;Q.p=2;var u=X;X|=4;try{lr(t,a.alternate,a)}finally{X=u,Q.p=e,M.T=l}}ot=3}}function Or(){if(ot===4||ot===3){ot=0,Dd();var t=Va,a=Pl,l=va,e=gr;a.subtreeFlags&10256||a.flags&10256?ot=5:(ot=0,Pl=Va=null,Mr(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(La=null),Mc(l),a=a.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Pe,a,void 0,(a.current.flags&128)===128)}catch{}if(e!==null){a=M.T,u=Q.p,Q.p=2,M.T=null;try{for(var n=t.onRecoverableError,i=0;i<e.length;i++){var c=e[i];n(c.value,{componentStack:c.stack})}}finally{M.T=a,Q.p=u}}va&3&&Cn(),na(t),u=t.pendingLanes,l&261930&&u&42?t===ic?Ce++:(Ce=0,ic=t):Ce=0,cu(0)}}function Mr(t,a){(t.pooledCacheLanes&=a)===0&&(a=t.pooledCache,a!=null&&(t.pooledCache=null,uu(a)))}function Cn(){return Tr(),Ar(),Or(),_r()}function _r(){if(ot!==5)return!1;var t=Va,a=uc;uc=0;var l=Mc(va),e=M.T,u=Q.p;try{Q.p=32>l?32:l,M.T=null,l=nc,nc=null;var n=Va,i=va;if(ot=0,Pl=Va=null,va=0,X&6)throw Error(v(331));var c=X;if(X|=4,dr(n.current),or(n,n.current,i,l),X=c,cu(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Pe,n)}catch{}return!0}finally{Q.p=u,M.T=e,Mr(t,a)}}function Ao(t,a,l){a=wt(l,a),a=Pi(t.stateNode,a,2),t=Za(t,a,2),t!==null&&(au(t,2),na(t))}function L(t,a,l){if(t.tag===3)Ao(t,t,l);else for(;a!==null;){if(a.tag===3){Ao(a,t,l);break}else if(a.tag===1){var e=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(La===null||!La.has(e))){t=wt(l,t),l=Ls(2),e=Za(a,l,2),e!==null&&(Vs(l,e,a,t),au(e,2),na(e));break}}a=a.return}}function mi(t,a,l){var e=t.pingCache;if(e===null){e=t.pingCache=new am;var u=new Set;e.set(a,u)}else u=e.get(a),u===void 0&&(u=new Set,e.set(a,u));u.has(l)||(of=!0,u.add(l),t=im.bind(null,t,a,l),a.then(t,t))}function im(t,a,l){var e=t.pingCache;e!==null&&e.delete(a),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,K===t&&(q&l)===l&&(at===4||at===3&&(q&62914560)===q&&300>Yt()-jn?!(X&2)&&te(t,0):sf|=l,Il===q&&(Il=0)),na(t)}function Dr(t,a){a===0&&(a=x0()),t=vl(t,a),t!==null&&(au(t,a),na(t))}function cm(t){var a=t.memoizedState,l=0;a!==null&&(l=a.retryLane),Dr(t,l)}function fm(t,a){var l=0;switch(t.tag){case 31:case 13:var e=t.stateNode,u=t.memoizedState;u!==null&&(l=u.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(v(314))}e!==null&&e.delete(a),Dr(t,l)}function om(t,a){return Ac(t,a)}var sn=null,Ol=null,cc=!1,rn=!1,gi=!1,qa=0;function na(t){t!==Ol&&t.next===null&&(Ol===null?sn=Ol=t:Ol=Ol.next=t),rn=!0,cc||(cc=!0,rm())}function cu(t,a){if(!gi&&rn){gi=!0;do for(var l=!1,e=sn;e!==null;){if(t!==0){var u=e.pendingLanes;if(u===0)var n=0;else{var i=e.suspendedLanes,c=e.pingedLanes;n=(1<<31-Ct(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(l=!0,Oo(e,n))}else n=q,n=zn(e,e===K?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),!(n&3)||tu(e,n)||(l=!0,Oo(e,n));e=e.next}while(l);gi=!1}}function sm(){Ur()}function Ur(){rn=cc=!1;var t=0;qa!==0&&Sm()&&(t=qa);for(var a=Yt(),l=null,e=sn;e!==null;){var u=e.next,n=Nr(e,a);n===0?(e.next=null,l===null?sn=u:l.next=u,u===null&&(Ol=l)):(l=e,(t!==0||n&3)&&(rn=!0)),e=u}ot!==0&&ot!==5||cu(t),qa!==0&&(qa=0)}function Nr(t,a){for(var l=t.suspendedLanes,e=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-Ct(n),c=1<<i,f=u[i];f===-1?(!(c&l)||c&e)&&(u[i]=Bd(c,a)):f<=a&&(t.expiredLanes|=c),n&=~c}if(a=K,l=q,l=zn(t,t===a?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,l===0||t===a&&(Z===2||Z===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Ln(e),t.callbackNode=null,t.callbackPriority=0;if(!(l&3)||tu(t,l)){if(a=l&-l,a===t.callbackPriority)return a;switch(e!==null&&Ln(e),Mc(l)){case 2:case 8:l=y0;break;case 32:l=Ku;break;case 268435456:l=v0;break;default:l=Ku}return e=Hr.bind(null,t),l=Ac(l,e),t.callbackPriority=a,t.callbackNode=l,a}return e!==null&&e!==null&&Ln(e),t.callbackPriority=2,t.callbackNode=null,2}function Hr(t,a){if(ot!==0&&ot!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Cn()&&t.callbackNode!==l)return null;var e=q;return e=zn(t,t===K?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(br(t,e,a),Nr(t,Yt()),t.callbackNode!=null&&t.callbackNode===l?Hr.bind(null,t):null)}function Oo(t,a){if(Cn())return null;br(t,a,!0)}function rm(){Em(function(){X&6?Ac(b0,sm):Ur()})}function df(){if(qa===0){var t=Wl;t===0&&(t=mu,mu<<=1,!(mu&261888)&&(mu=256)),qa=t}return qa}function Mo(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Du(""+t)}function _o(t,a){var l=a.ownerDocument.createElement("input");return l.name=a.name,l.value=a.value,t.id&&l.setAttribute("form",t.id),a.parentNode.insertBefore(l,a),t=new FormData(t),l.parentNode.removeChild(l),t}function dm(t,a,l,e,u){if(a==="submit"&&l&&l.stateNode===u){var n=Mo((u[_t]||null).action),i=e.submitter;i&&(a=(a=i[_t]||null)?Mo(a.formAction):i.getAttribute("formAction"),a!==null&&(n=a,i=null));var c=new En("action","action",null,e,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(qa!==0){var f=i?_o(u,i):new FormData(u);Fi(l,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?_o(u,i):new FormData(u),Fi(l,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var pi=0;pi<Gi.length;pi++){var bi=Gi[pi],hm=bi.toLowerCase(),mm=bi[0].toUpperCase()+bi.slice(1);Pt(hm,"on"+mm)}Pt(V0,"onAnimationEnd");Pt(w0,"onAnimationIteration");Pt(K0,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(Uh,"onTransitionRun");Pt(Nh,"onTransitionStart");Pt(Hh,"onTransitionCancel");Pt(J0,"onTransitionEnd");Jl("onMouseEnter",["mouseout","mouseover"]);Jl("onMouseLeave",["mouseout","mouseover"]);Jl("onPointerEnter",["pointerout","pointerover"]);Jl("onPointerLeave",["pointerout","pointerover"]);pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pl("onBeforeInput",["compositionend","keypress","textInput","paste"]);pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Je="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Je));function jr(t,a){a=(a&4)!==0;for(var l=0;l<t.length;l++){var e=t[l],u=e.event;e=e.listeners;t:{var n=void 0;if(a)for(var i=e.length-1;0<=i;i--){var c=e[i],f=c.instance,r=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=r;try{n(u)}catch(p){ku(p)}u.currentTarget=null,n=f}else for(i=0;i<e.length;i++){if(c=e[i],f=c.instance,r=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=r;try{n(u)}catch(p){ku(p)}u.currentTarget=null,n=f}}}}function C(t,a){var l=a[Ni];l===void 0&&(l=a[Ni]=new Set);var e=t+"__bubble";l.has(e)||(Yr(a,t,2,!1),l.add(e))}function yi(t,a,l){var e=0;a&&(e|=4),Yr(l,t,e,a)}var Tu="_reactListening"+Math.random().toString(36).slice(2);function hf(t){if(!t[Tu]){t[Tu]=!0,A0.forEach(function(l){l!=="selectionchange"&&(gm.has(l)||yi(l,!1,t),yi(l,!0,t))});var a=t.nodeType===9?t:t.ownerDocument;a===null||a[Tu]||(a[Tu]=!0,yi("selectionchange",!1,a))}}function Yr(t,a,l,e){switch(Jr(a)){case 2:var u=Lm;break;case 8:u=Vm;break;default:u=bf}l=u.bind(null,a,l,t),u=void 0,!Ci||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(u=!0),e?u!==void 0?t.addEventListener(a,l,{capture:!0,passive:u}):t.addEventListener(a,l,!0):u!==void 0?t.addEventListener(a,l,{passive:u}):t.addEventListener(a,l,!1)}function vi(t,a,l,e,u){var n=e;if(!(a&1)&&!(a&2)&&e!==null)t:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var c=e.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=e.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=Dl(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){e=n=i;continue t}c=c.parentNode}}e=e.return}j0(function(){var r=n,p=Uc(l),g=[];t:{var d=k0.get(t);if(d!==void 0){var m=En,x=t;switch(t){case"keypress":if(Nu(l)===0)break t;case"keydown":case"keyup":m=fh;break;case"focusin":x="focus",m=kn;break;case"focusout":x="blur",m=kn;break;case"beforeblur":case"afterblur":m=kn;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=$d;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=rh;break;case V0:case w0:case K0:m=Pd;break;case J0:m=hh;break;case"scroll":case"scrollend":m=kd;break;case"wheel":m=gh;break;case"copy":case"cut":case"paste":m=ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bf;break;case"toggle":case"beforetoggle":m=bh}var E=(a&4)!==0,Y=!E&&(t==="scroll"||t==="scrollend"),s=E?d!==null?d+"Capture":null:d;E=[];for(var o=r,h;o!==null;){var b=o;if(h=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||h===null||s===null||(b=Ge(o,s),b!=null&&E.push(ke(o,b,h))),Y)break;o=o.return}0<E.length&&(d=new m(d,x,null,l,p),g.push({event:d,listeners:E}))}}if(!(a&7)){t:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&l!==Ri&&(x=l.relatedTarget||l.fromElement)&&(Dl(x)||x[ue]))break t;if((m||d)&&(d=p.window===p?p:(d=p.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=l.relatedTarget||l.toElement,m=r,x=x?Dl(x):null,x!==null&&(Y=Ie(x),E=x.tag,x!==Y||E!==5&&E!==27&&E!==6)&&(x=null)):(m=null,x=r),m!==x)){if(E=Rf,b="onMouseLeave",s="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(E=Bf,b="onPointerLeave",s="onPointerEnter",o="pointer"),Y=m==null?d:Se(m),h=x==null?d:Se(x),d=new E(b,o+"leave",m,l,p),d.target=Y,d.relatedTarget=h,b=null,Dl(p)===r&&(E=new E(s,o+"enter",x,l,p),E.target=h,E.relatedTarget=Y,b=E),Y=b,m&&x)a:{for(E=pm,s=m,o=x,h=0,b=s;b;b=E(b))h++;b=0;for(var T=o;T;T=E(T))b++;for(;0<h-b;)s=E(s),h--;for(;0<b-h;)o=E(o),b--;for(;h--;){if(s===o||o!==null&&s===o.alternate){E=s;break a}s=E(s),o=E(o)}E=null}else E=null;m!==null&&Do(g,d,m,E,!1),x!==null&&Y!==null&&Do(g,Y,x,E,!0)}}t:{if(d=r?Se(r):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var H=Qf;else if(Xf(d))if(G0)H=Mh;else{H=Ah;var z=Th}else m=d.nodeName,!m||m.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?r&&Dc(r.elementType)&&(H=Qf):H=Oh;if(H&&(H=H(t,r))){q0(g,H,l,p);break t}z&&z(t,d,r),t==="focusout"&&r&&d.type==="number"&&r.memoizedProps.value!=null&&Yi(d,"number",d.value)}switch(z=r?Se(r):window,t){case"focusin":(Xf(z)||z.contentEditable==="true")&&(Hl=z,Bi=r,Me=null);break;case"focusout":Me=Bi=Hl=null;break;case"mousedown":qi=!0;break;case"contextmenu":case"mouseup":case"dragend":qi=!1,Kf(g,l,p);break;case"selectionchange":if(Dh)break;case"keydown":case"keyup":Kf(g,l,p)}var _;if(jc)t:{switch(t){case"compositionstart":var D="onCompositionStart";break t;case"compositionend":D="onCompositionEnd";break t;case"compositionupdate":D="onCompositionUpdate";break t}D=void 0}else Nl?C0(t,l)&&(D="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(D="onCompositionStart");D&&(R0&&l.locale!=="ko"&&(Nl||D!=="onCompositionStart"?D==="onCompositionEnd"&&Nl&&(_=Y0()):(Ra=p,Nc="value"in Ra?Ra.value:Ra.textContent,Nl=!0)),z=dn(r,D),0<z.length&&(D=new Cf(D,t,null,l,p),g.push({event:D,listeners:z}),_?D.data=_:(_=B0(l),_!==null&&(D.data=_)))),(_=vh?xh(t,l):Sh(t,l))&&(D=dn(r,"onBeforeInput"),0<D.length&&(z=new Cf("onBeforeInput","beforeinput",null,l,p),g.push({event:z,listeners:D}),z.data=_)),dm(g,t,r,l,p)}jr(g,a)})}function ke(t,a,l){return{instance:t,listener:a,currentTarget:l}}function dn(t,a){for(var l=a+"Capture",e=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Ge(t,l),u!=null&&e.unshift(ke(t,u,n)),u=Ge(t,a),u!=null&&e.push(ke(t,u,n))),t.tag===3)return e;t=t.return}return[]}function pm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Do(t,a,l,e,u){for(var n=a._reactName,i=[];l!==null&&l!==e;){var c=l,f=c.alternate,r=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||r===null||(f=r,u?(r=Ge(l,n),r!=null&&i.unshift(ke(l,r,f))):u||(r=Ge(l,n),r!=null&&i.push(ke(l,r,f)))),l=l.return}i.length!==0&&t.push({event:a,listeners:i})}var bm=/\r\n?/g,ym=/\u0000|\uFFFD/g;function Uo(t){return(typeof t=="string"?t:""+t).replace(bm,`
`).replace(ym,"")}function Rr(t,a){return a=Uo(a),Uo(t)===a}function V(t,a,l,e,u,n){switch(l){case"children":typeof e=="string"?a==="body"||a==="textarea"&&e===""||kl(t,e):(typeof e=="number"||typeof e=="bigint")&&a!=="body"&&kl(t,""+e);break;case"className":bu(t,"class",e);break;case"tabIndex":bu(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":bu(t,l,e);break;case"style":H0(t,e,n);break;case"data":if(a!=="object"){bu(t,"data",e);break}case"src":case"href":if(e===""&&(a!=="a"||l!=="href")){t.removeAttribute(l);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=Du(""+e),t.setAttribute(l,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(l==="formAction"?(a!=="input"&&V(t,a,"name",u.name,u,null),V(t,a,"formEncType",u.formEncType,u,null),V(t,a,"formMethod",u.formMethod,u,null),V(t,a,"formTarget",u.formTarget,u,null)):(V(t,a,"encType",u.encType,u,null),V(t,a,"method",u.method,u,null),V(t,a,"target",u.target,u,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(l);break}e=Du(""+e),t.setAttribute(l,e);break;case"onClick":e!=null&&(t.onclick=ga);break;case"onScroll":e!=null&&C("scroll",t);break;case"onScrollEnd":e!=null&&C("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(v(61));if(l=e.__html,l!=null){if(u.children!=null)throw Error(v(60));t.innerHTML=l}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}l=Du(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""+e):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":e===!0?t.setAttribute(l,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(l,e):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(l,e):t.removeAttribute(l);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(l):t.setAttribute(l,e);break;case"popover":C("beforetoggle",t),C("toggle",t),_u(t,"popover",e);break;case"xlinkActuate":ca(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":ca(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":ca(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":ca(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":ca(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":ca(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":ca(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":ca(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":ca(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":_u(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Kd.get(l)||l,_u(t,l,e))}}function fc(t,a,l,e,u,n){switch(l){case"style":H0(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(v(61));if(l=e.__html,l!=null){if(u.children!=null)throw Error(v(60));t.innerHTML=l}}break;case"children":typeof e=="string"?kl(t,e):(typeof e=="number"||typeof e=="bigint")&&kl(t,""+e);break;case"onScroll":e!=null&&C("scroll",t);break;case"onScrollEnd":e!=null&&C("scrollend",t);break;case"onClick":e!=null&&(t.onclick=ga);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!O0.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(u=l.endsWith("Capture"),a=l.slice(2,u?l.length-7:void 0),n=t[_t]||null,n=n!=null?n[l]:null,typeof n=="function"&&t.removeEventListener(a,n,u),typeof e=="function")){typeof n!="function"&&n!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(a,e,u);break t}l in t?t[l]=e:e===!0?t.setAttribute(l,""):_u(t,l,e)}}}function yt(t,a,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":C("error",t),C("load",t);var e=!1,u=!1,n;for(n in l)if(l.hasOwnProperty(n)){var i=l[n];if(i!=null)switch(n){case"src":e=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(v(137,a));default:V(t,a,n,i,l,null)}}u&&V(t,a,"srcSet",l.srcSet,l,null),e&&V(t,a,"src",l.src,l,null);return;case"input":C("invalid",t);var c=n=i=u=null,f=null,r=null;for(e in l)if(l.hasOwnProperty(e)){var p=l[e];if(p!=null)switch(e){case"name":u=p;break;case"type":i=p;break;case"checked":f=p;break;case"defaultChecked":r=p;break;case"value":n=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(v(137,a));break;default:V(t,a,e,p,l,null)}}D0(t,n,c,f,r,i,u,!1);return;case"select":C("invalid",t),e=i=n=null;for(u in l)if(l.hasOwnProperty(u)&&(c=l[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":e=c;default:V(t,a,u,c,l,null)}a=n,l=i,t.multiple=!!e,a!=null?Xl(t,!!e,a,!1):l!=null&&Xl(t,!!e,l,!0);return;case"textarea":C("invalid",t),n=u=e=null;for(i in l)if(l.hasOwnProperty(i)&&(c=l[i],c!=null))switch(i){case"value":e=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(v(91));break;default:V(t,a,i,c,l,null)}N0(t,e,u,n);return;case"option":for(f in l)if(l.hasOwnProperty(f)&&(e=l[f],e!=null))switch(f){case"selected":t.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:V(t,a,f,e,l,null)}return;case"dialog":C("beforetoggle",t),C("toggle",t),C("cancel",t),C("close",t);break;case"iframe":case"object":C("load",t);break;case"video":case"audio":for(e=0;e<Je.length;e++)C(Je[e],t);break;case"image":C("error",t),C("load",t);break;case"details":C("toggle",t);break;case"embed":case"source":case"link":C("error",t),C("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in l)if(l.hasOwnProperty(r)&&(e=l[r],e!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(v(137,a));default:V(t,a,r,e,l,null)}return;default:if(Dc(a)){for(p in l)l.hasOwnProperty(p)&&(e=l[p],e!==void 0&&fc(t,a,p,e,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(e=l[c],e!=null&&V(t,a,c,e,l,null))}function vm(t,a,l,e){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,r=null,p=null;for(m in l){var g=l[m];if(l.hasOwnProperty(m)&&g!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":f=g;default:e.hasOwnProperty(m)||V(t,a,m,null,e,g)}}for(var d in e){var m=e[d];if(g=l[d],e.hasOwnProperty(d)&&(m!=null||g!=null))switch(d){case"type":n=m;break;case"name":u=m;break;case"checked":r=m;break;case"defaultChecked":p=m;break;case"value":i=m;break;case"defaultValue":c=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(v(137,a));break;default:m!==g&&V(t,a,d,m,e,g)}}ji(t,i,c,f,r,p,n,u);return;case"select":m=i=c=d=null;for(n in l)if(f=l[n],l.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":m=f;default:e.hasOwnProperty(n)||V(t,a,n,null,e,f)}for(u in e)if(n=e[u],f=l[u],e.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":d=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&V(t,a,u,n,e,f)}a=c,l=i,e=m,d!=null?Xl(t,!!l,d,!1):!!e!=!!l&&(a!=null?Xl(t,!!l,a,!0):Xl(t,!!l,l?[]:"",!1));return;case"textarea":m=d=null;for(c in l)if(u=l[c],l.hasOwnProperty(c)&&u!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:V(t,a,c,null,e,u)}for(i in e)if(u=e[i],n=l[i],e.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":d=u;break;case"defaultValue":m=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(v(91));break;default:u!==n&&V(t,a,i,u,e,n)}U0(t,d,m);return;case"option":for(var x in l)if(d=l[x],l.hasOwnProperty(x)&&d!=null&&!e.hasOwnProperty(x))switch(x){case"selected":t.selected=!1;break;default:V(t,a,x,null,e,d)}for(f in e)if(d=e[f],m=l[f],e.hasOwnProperty(f)&&d!==m&&(d!=null||m!=null))switch(f){case"selected":t.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:V(t,a,f,d,e,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var E in l)d=l[E],l.hasOwnProperty(E)&&d!=null&&!e.hasOwnProperty(E)&&V(t,a,E,null,e,d);for(r in e)if(d=e[r],m=l[r],e.hasOwnProperty(r)&&d!==m&&(d!=null||m!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(v(137,a));break;default:V(t,a,r,d,e,m)}return;default:if(Dc(a)){for(var Y in l)d=l[Y],l.hasOwnProperty(Y)&&d!==void 0&&!e.hasOwnProperty(Y)&&fc(t,a,Y,void 0,e,d);for(p in e)d=e[p],m=l[p],!e.hasOwnProperty(p)||d===m||d===void 0&&m===void 0||fc(t,a,p,d,e,m);return}}for(var s in l)d=l[s],l.hasOwnProperty(s)&&d!=null&&!e.hasOwnProperty(s)&&V(t,a,s,null,e,d);for(g in e)d=e[g],m=l[g],!e.hasOwnProperty(g)||d===m||d==null&&m==null||V(t,a,g,d,e,m)}function No(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function xm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,a=0,l=performance.getEntriesByType("resource"),e=0;e<l.length;e++){var u=l[e],n=u.transferSize,i=u.initiatorType,c=u.duration;if(n&&c&&No(i)){for(i=0,c=u.responseEnd,e+=1;e<l.length;e++){var f=l[e],r=f.startTime;if(r>c)break;var p=f.transferSize,g=f.initiatorType;p&&No(g)&&(f=f.responseEnd,i+=p*(f<c?1:(c-r)/(f-r)))}if(--e,a+=8*(n+i)/(u.duration/1e3),t++,10<t)break}}if(0<t)return a/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var oc=null,sc=null;function hn(t){return t.nodeType===9?t:t.ownerDocument}function Ho(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Cr(t,a){if(t===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&a==="foreignObject"?0:t}function rc(t,a){return t==="textarea"||t==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var xi=null;function Sm(){var t=window.event;return t&&t.type==="popstate"?t===xi?!1:(xi=t,!0):(xi=null,!1)}var Br=typeof setTimeout=="function"?setTimeout:void 0,zm=typeof clearTimeout=="function"?clearTimeout:void 0,jo=typeof Promise=="function"?Promise:void 0,Em=typeof queueMicrotask=="function"?queueMicrotask:typeof jo<"u"?function(t){return jo.resolve(null).then(t).catch(Tm)}:Br;function Tm(t){setTimeout(function(){throw t})}function Pa(t){return t==="head"}function Yo(t,a){var l=a,e=0;do{var u=l.nextSibling;if(t.removeChild(l),u&&u.nodeType===8)if(l=u.data,l==="/$"||l==="/&"){if(e===0){t.removeChild(u),le(a);return}e--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")e++;else if(l==="html")Be(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Be(l);for(var n=l.firstChild;n;){var i=n.nextSibling,c=n.nodeName;n[lu]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&n.rel.toLowerCase()==="stylesheet"||l.removeChild(n),n=i}}else l==="body"&&Be(t.ownerDocument.body);l=u}while(l);le(a)}function Ro(t,a){var l=t;t=0;do{var e=l.nextSibling;if(l.nodeType===1?a?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(a?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),e&&e.nodeType===8)if(l=e.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=e}while(l)}function dc(t){var a=t.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var l=a;switch(a=a.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":dc(l),_c(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function Am(t,a,l,e){for(;t.nodeType===1;){var u=l;if(t.nodeName.toLowerCase()!==a.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[lu])switch(a){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(a==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=kt(t.nextSibling),t===null)break}return null}function Om(t,a,l){if(a==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=kt(t.nextSibling),t===null))return null;return t}function qr(t,a){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=kt(t.nextSibling),t===null))return null;return t}function hc(t){return t.data==="$?"||t.data==="$~"}function mc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Mm(t,a){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=a;else if(t.data!=="$?"||l.readyState!=="loading")a();else{var e=function(){a(),l.removeEventListener("DOMContentLoaded",e)};l.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function kt(t){for(;t!=null;t=t.nextSibling){var a=t.nodeType;if(a===1||a===3)break;if(a===8){if(a=t.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return t}var gc=null;function Co(t){t=t.nextSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(a===0)return kt(t.nextSibling);a--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||a++}t=t.nextSibling}return null}function Bo(t){t=t.previousSibling;for(var a=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(a===0)return t;a--}else l!=="/$"&&l!=="/&"||a++}t=t.previousSibling}return null}function Gr(t,a,l){switch(a=hn(l),t){case"html":if(t=a.documentElement,!t)throw Error(v(452));return t;case"head":if(t=a.head,!t)throw Error(v(453));return t;case"body":if(t=a.body,!t)throw Error(v(454));return t;default:throw Error(v(451))}}function Be(t){for(var a=t.attributes;a.length;)t.removeAttributeNode(a[0]);_c(t)}var Wt=new Map,qo=new Set;function mn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Aa=Q.d;Q.d={f:_m,r:Dm,D:Um,C:Nm,L:Hm,m:jm,X:Rm,S:Ym,M:Cm};function _m(){var t=Aa.f(),a=Yn();return t||a}function Dm(t){var a=ne(t);a!==null&&a.tag===5&&a.type==="form"?Hs(a):Aa.r(t)}var oe=typeof document>"u"?null:document;function Xr(t,a,l){var e=oe;if(e&&typeof a=="string"&&a){var u=Vt(a);u='link[rel="'+t+'"][href="'+u+'"]',typeof l=="string"&&(u+='[crossorigin="'+l+'"]'),qo.has(u)||(qo.add(u),t={rel:t,crossOrigin:l,href:a},e.querySelector(u)===null&&(a=e.createElement("link"),yt(a,"link",t),dt(a),e.head.appendChild(a)))}}function Um(t){Aa.D(t),Xr("dns-prefetch",t,null)}function Nm(t,a){Aa.C(t,a),Xr("preconnect",t,a)}function Hm(t,a,l){Aa.L(t,a,l);var e=oe;if(e&&t&&a){var u='link[rel="preload"][as="'+Vt(a)+'"]';a==="image"&&l&&l.imageSrcSet?(u+='[imagesrcset="'+Vt(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(u+='[imagesizes="'+Vt(l.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var n=u;switch(a){case"style":n=ae(t);break;case"script":n=se(t)}Wt.has(n)||(t=I({rel:"preload",href:a==="image"&&l&&l.imageSrcSet?void 0:t,as:a},l),Wt.set(n,t),e.querySelector(u)!==null||a==="style"&&e.querySelector(fu(n))||a==="script"&&e.querySelector(ou(n))||(a=e.createElement("link"),yt(a,"link",t),dt(a),e.head.appendChild(a)))}}function jm(t,a){Aa.m(t,a);var l=oe;if(l&&t){var e=a&&typeof a.as=="string"?a.as:"script",u='link[rel="modulepreload"][as="'+Vt(e)+'"][href="'+Vt(t)+'"]',n=u;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=se(t)}if(!Wt.has(n)&&(t=I({rel:"modulepreload",href:t},a),Wt.set(n,t),l.querySelector(u)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(ou(n)))return}e=l.createElement("link"),yt(e,"link",t),dt(e),l.head.appendChild(e)}}}function Ym(t,a,l){Aa.S(t,a,l);var e=oe;if(e&&t){var u=Gl(e).hoistableStyles,n=ae(t);a=a||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=e.querySelector(fu(n)))c.loading=5;else{t=I({rel:"stylesheet",href:t,"data-precedence":a},l),(l=Wt.get(n))&&mf(t,l);var f=i=e.createElement("link");dt(f),yt(f,"link",t),f._p=new Promise(function(r,p){f.onload=r,f.onerror=p}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Gu(i,a,e)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function Rm(t,a){Aa.X(t,a);var l=oe;if(l&&t){var e=Gl(l).hoistableScripts,u=se(t),n=e.get(u);n||(n=l.querySelector(ou(u)),n||(t=I({src:t,async:!0},a),(a=Wt.get(u))&&gf(t,a),n=l.createElement("script"),dt(n),yt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function Cm(t,a){Aa.M(t,a);var l=oe;if(l&&t){var e=Gl(l).hoistableScripts,u=se(t),n=e.get(u);n||(n=l.querySelector(ou(u)),n||(t=I({src:t,async:!0,type:"module"},a),(a=Wt.get(u))&&gf(t,a),n=l.createElement("script"),dt(n),yt(n,"link",t),l.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function Go(t,a,l,e){var u=(u=Ga.current)?mn(u):null;if(!u)throw Error(v(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(a=ae(l.href),l=Gl(u).hoistableStyles,e=l.get(a),e||(e={type:"style",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=ae(l.href);var n=Gl(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(fu(t)))&&!n._p&&(i.instance=n,i.state.loading=5),Wt.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Wt.set(t,l),n||Bm(u,t,l,i.state))),a&&e===null)throw Error(v(528,""));return i}if(a&&e!==null)throw Error(v(529,""));return null;case"script":return a=l.async,l=l.src,typeof l=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=se(l),l=Gl(u).hoistableScripts,e=l.get(a),e||(e={type:"script",instance:null,count:0,state:null},l.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(v(444,t))}}function ae(t){return'href="'+Vt(t)+'"'}function fu(t){return'link[rel="stylesheet"]['+t+"]"}function Qr(t){return I({},t,{"data-precedence":t.precedence,precedence:null})}function Bm(t,a,l,e){t.querySelector('link[rel="preload"][as="style"]['+a+"]")?e.loading=1:(a=t.createElement("link"),e.preload=a,a.addEventListener("load",function(){return e.loading|=1}),a.addEventListener("error",function(){return e.loading|=2}),yt(a,"link",l),dt(a),t.head.appendChild(a))}function se(t){return'[src="'+Vt(t)+'"]'}function ou(t){return"script[async]"+t}function Xo(t,a,l){if(a.count++,a.instance===null)switch(a.type){case"style":var e=t.querySelector('style[data-href~="'+Vt(l.href)+'"]');if(e)return a.instance=e,dt(e),e;var u=I({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),dt(e),yt(e,"style",u),Gu(e,l.precedence,t),a.instance=e;case"stylesheet":u=ae(l.href);var n=t.querySelector(fu(u));if(n)return a.state.loading|=4,a.instance=n,dt(n),n;e=Qr(l),(u=Wt.get(u))&&mf(e,u),n=(t.ownerDocument||t).createElement("link"),dt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),yt(n,"link",e),a.state.loading|=4,Gu(n,l.precedence,t),a.instance=n;case"script":return n=se(l.src),(u=t.querySelector(ou(n)))?(a.instance=u,dt(u),u):(e=l,(u=Wt.get(n))&&(e=I({},l),gf(e,u)),t=t.ownerDocument||t,u=t.createElement("script"),dt(u),yt(u,"link",e),t.head.appendChild(u),a.instance=u);case"void":return null;default:throw Error(v(443,a.type))}else a.type==="stylesheet"&&!(a.state.loading&4)&&(e=a.instance,a.state.loading|=4,Gu(e,l.precedence,t));return a.instance}function Gu(t,a,l){for(var e=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=e.length?e[e.length-1]:null,n=u,i=0;i<e.length;i++){var c=e[i];if(c.dataset.precedence===a)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(a=l.nodeType===9?l.head:l,a.insertBefore(t,a.firstChild))}function mf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.title==null&&(t.title=a.title)}function gf(t,a){t.crossOrigin==null&&(t.crossOrigin=a.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=a.referrerPolicy),t.integrity==null&&(t.integrity=a.integrity)}var Xu=null;function Qo(t,a,l){if(Xu===null){var e=new Map,u=Xu=new Map;u.set(l,e)}else u=Xu,e=u.get(l),e||(e=new Map,u.set(l,e));if(e.has(t))return e;for(e.set(t,null),l=l.getElementsByTagName(t),u=0;u<l.length;u++){var n=l[u];if(!(n[lu]||n[gt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(a)||"";i=t+i;var c=e.get(i);c?c.push(n):e.set(i,[n])}}return e}function Zo(t,a,l){t=t.ownerDocument||t,t.head.insertBefore(l,a==="title"?t.querySelector("head > title"):null)}function qm(t,a,l){if(l===1||a.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return t=a.disabled,typeof a.precedence=="string"&&t==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function Zr(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function Gm(t,a,l,e){if(l.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&!(l.state.loading&4)){if(l.instance===null){var u=ae(e.href),n=a.querySelector(fu(u));if(n){a=n._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(t.count++,t=gn.bind(t),a.then(t,t)),l.state.loading|=4,l.instance=n,dt(n);return}n=a.ownerDocument||a,e=Qr(e),(u=Wt.get(u))&&mf(e,u),n=n.createElement("link"),dt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),yt(n,"link",e),l.instance=n}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,a),(a=l.state.preload)&&!(l.state.loading&3)&&(t.count++,l=gn.bind(t),a.addEventListener("load",l),a.addEventListener("error",l))}}var Si=0;function Xm(t,a){return t.stylesheets&&t.count===0&&Qu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var e=setTimeout(function(){if(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}},6e4+a);0<t.imgBytes&&Si===0&&(Si=62500*xm());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Qu(t,t.stylesheets),t.unsuspend)){var n=t.unsuspend;t.unsuspend=null,n()}},(t.imgBytes>Si?50:800)+a);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(u)}}:null}function gn(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Qu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var pn=null;function Qu(t,a){t.stylesheets=null,t.unsuspend!==null&&(t.count++,pn=new Map,a.forEach(Qm,t),pn=null,gn.call(t))}function Qm(t,a){if(!(a.state.loading&4)){var l=pn.get(t);if(l)var e=l.get(null);else{l=new Map,pn.set(t,l);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(l.set(i.dataset.precedence,i),e=i)}e&&l.set(null,e)}u=a.instance,i=u.getAttribute("data-precedence"),n=l.get(i)||e,n===e&&l.set(null,u),l.set(i,u),this.count++,e=gn.bind(this),u.addEventListener("load",e),u.addEventListener("error",e),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),a.state.loading|=4}}var We={$$typeof:ma,Provider:null,Consumer:null,_currentValue:il,_currentValue2:il,_threadCount:0};function Zm(t,a,l,e,u,n,i,c,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Vn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vn(0),this.hiddenUpdates=Vn(null),this.identifierPrefix=e,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Lr(t,a,l,e,u,n,i,c,f,r,p,g){return t=new Zm(t,a,l,i,f,r,p,g,c),a=1,n===!0&&(a|=24),n=Ht(3,null,null,a),t.current=n,n.stateNode=t,a=Xc(),a.refCount++,t.pooledCache=a,a.refCount++,n.memoizedState={element:e,isDehydrated:l,cache:a},Lc(n),t}function Vr(t){return t?(t=Rl,t):Rl}function wr(t,a,l,e,u,n){u=Vr(u),e.context===null?e.context=u:e.pendingContext=u,e=Qa(a),e.payload={element:l},n=n===void 0?null:n,n!==null&&(e.callback=n),l=Za(t,e,a),l!==null&&(Mt(l,t,a),De(l,t,a))}function Lo(t,a){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<a?l:a}}function pf(t,a){Lo(t,a),(t=t.alternate)&&Lo(t,a)}function Kr(t){if(t.tag===13||t.tag===31){var a=vl(t,67108864);a!==null&&Mt(a,t,67108864),pf(t,67108864)}}function Vo(t){if(t.tag===13||t.tag===31){var a=Bt();a=Oc(a);var l=vl(t,a);l!==null&&Mt(l,t,a),pf(t,a)}}var bn=!0;function Lm(t,a,l,e){var u=M.T;M.T=null;var n=Q.p;try{Q.p=2,bf(t,a,l,e)}finally{Q.p=n,M.T=u}}function Vm(t,a,l,e){var u=M.T;M.T=null;var n=Q.p;try{Q.p=8,bf(t,a,l,e)}finally{Q.p=n,M.T=u}}function bf(t,a,l,e){if(bn){var u=pc(e);if(u===null)vi(t,a,e,yn,l),wo(t,e);else if(Km(u,t,a,l,e))e.stopPropagation();else if(wo(t,e),a&4&&-1<wm.indexOf(t)){for(;u!==null;){var n=ne(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=el(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-Ct(i);c.entanglements[1]|=f,i&=~f}na(n),!(X&6)&&(cn=Yt()+500,cu(0))}}break;case 31:case 13:c=vl(n,2),c!==null&&Mt(c,n,2),Yn(),pf(n,2)}if(n=pc(e),n===null&&vi(t,a,e,yn,l),n===u)break;u=n}u!==null&&e.stopPropagation()}else vi(t,a,e,null,l)}}function pc(t){return t=Uc(t),yf(t)}var yn=null;function yf(t){if(yn=null,t=Dl(t),t!==null){var a=Ie(t);if(a===null)t=null;else{var l=a.tag;if(l===13){if(t=d0(a),t!==null)return t;t=null}else if(l===31){if(t=h0(a),t!==null)return t;t=null}else if(l===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;t=null}else a!==t&&(t=null)}}return yn=t,null}function Jr(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ud()){case b0:return 2;case y0:return 8;case Ku:case Nd:return 32;case v0:return 268435456;default:return 32}default:return 32}}var bc=!1,wa=null,Ka=null,Ja=null,$e=new Map,Fe=new Map,ja=[],wm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wo(t,a){switch(t){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":$e.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fe.delete(a.pointerId)}}function ye(t,a,l,e,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:a,domEventName:l,eventSystemFlags:e,nativeEvent:n,targetContainers:[u]},a!==null&&(a=ne(a),a!==null&&Kr(a)),t):(t.eventSystemFlags|=e,a=t.targetContainers,u!==null&&a.indexOf(u)===-1&&a.push(u),t)}function Km(t,a,l,e,u){switch(a){case"focusin":return wa=ye(wa,t,a,l,e,u),!0;case"dragenter":return Ka=ye(Ka,t,a,l,e,u),!0;case"mouseover":return Ja=ye(Ja,t,a,l,e,u),!0;case"pointerover":var n=u.pointerId;return $e.set(n,ye($e.get(n)||null,t,a,l,e,u)),!0;case"gotpointercapture":return n=u.pointerId,Fe.set(n,ye(Fe.get(n)||null,t,a,l,e,u)),!0}return!1}function kr(t){var a=Dl(t.target);if(a!==null){var l=Ie(a);if(l!==null){if(a=l.tag,a===13){if(a=d0(l),a!==null){t.blockedOn=a,_f(t.priority,function(){Vo(l)});return}}else if(a===31){if(a=h0(l),a!==null){t.blockedOn=a,_f(t.priority,function(){Vo(l)});return}}else if(a===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zu(t){if(t.blockedOn!==null)return!1;for(var a=t.targetContainers;0<a.length;){var l=pc(t.nativeEvent);if(l===null){l=t.nativeEvent;var e=new l.constructor(l.type,l);Ri=e,l.target.dispatchEvent(e),Ri=null}else return a=ne(l),a!==null&&Kr(a),t.blockedOn=l,!1;a.shift()}return!0}function Ko(t,a,l){Zu(t)&&l.delete(a)}function Jm(){bc=!1,wa!==null&&Zu(wa)&&(wa=null),Ka!==null&&Zu(Ka)&&(Ka=null),Ja!==null&&Zu(Ja)&&(Ja=null),$e.forEach(Ko),Fe.forEach(Ko)}function Au(t,a){t.blockedOn===a&&(t.blockedOn=null,bc||(bc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Jm)))}var Ou=null;function Jo(t){Ou!==t&&(Ou=t,st.unstable_scheduleCallback(st.unstable_NormalPriority,function(){Ou===t&&(Ou=null);for(var a=0;a<t.length;a+=3){var l=t[a],e=t[a+1],u=t[a+2];if(typeof e!="function"){if(yf(e||l)===null)continue;break}var n=ne(l);n!==null&&(t.splice(a,3),a-=3,Fi(n,{pending:!0,data:u,method:l.method,action:e},e,u))}}))}function le(t){function a(f){return Au(f,t)}wa!==null&&Au(wa,t),Ka!==null&&Au(Ka,t),Ja!==null&&Au(Ja,t),$e.forEach(a),Fe.forEach(a);for(var l=0;l<ja.length;l++){var e=ja[l];e.blockedOn===t&&(e.blockedOn=null)}for(;0<ja.length&&(l=ja[0],l.blockedOn===null);)kr(l),l.blockedOn===null&&ja.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(e=0;e<l.length;e+=3){var u=l[e],n=l[e+1],i=u[_t]||null;if(typeof n=="function")i||Jo(l);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[_t]||null)c=i.formAction;else if(yf(u)!==null)continue}else c=i.action;typeof c=="function"?l[e+1]=c:(l.splice(e,3),e-=3),Jo(l)}}}function Wr(){function t(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(i){return u=i})},focusReset:"manual",scroll:"manual"})}function a(){u!==null&&(u(),u=null),e||setTimeout(l,20)}function l(){if(!e&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(l,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),u!==null&&(u(),u=null)}}}function vf(t){this._internalRoot=t}Bn.prototype.render=vf.prototype.render=function(t){var a=this._internalRoot;if(a===null)throw Error(v(409));var l=a.current,e=Bt();wr(l,e,t,a,null,null)};Bn.prototype.unmount=vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var a=t.containerInfo;wr(t.current,2,null,t,null,null),Yn(),a[ue]=null}};function Bn(t){this._internalRoot=t}Bn.prototype.unstable_scheduleHydration=function(t){if(t){var a=T0();t={blockedOn:null,target:t,priority:a};for(var l=0;l<ja.length&&a!==0&&a<ja[l].priority;l++);ja.splice(l,0,t),l===0&&kr(t)}};var ko=s0.version;if(ko!=="19.2.3")throw Error(v(527,ko,"19.2.3"));Q.findDOMNode=function(t){var a=t._reactInternals;if(a===void 0)throw typeof t.render=="function"?Error(v(188)):(t=Object.keys(t).join(","),Error(v(268,t)));return t=Ed(a),t=t!==null?m0(t):null,t=t===null?null:t.stateNode,t};var km={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mu.isDisabled&&Mu.supportsFiber)try{Pe=Mu.inject(km),Rt=Mu}catch{}}xn.createRoot=function(t,a){if(!r0(t))throw Error(v(299));var l=!1,e="",u=Xs,n=Qs,i=Zs;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(e=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(n=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError)),a=Lr(t,1,!1,null,null,l,e,null,u,n,i,Wr),t[ue]=a.current,hf(t),new vf(a)};xn.hydrateRoot=function(t,a,l){if(!r0(t))throw Error(v(299));var e=!1,u="",n=Xs,i=Qs,c=Zs,f=null;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(u=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(f=l.formState)),a=Lr(t,1,!0,a,l??null,e,u,f,n,i,c,Wr),a.context=Vr(null),l=a.current,e=Bt(),e=Oc(e),u=Qa(e),u.callback=null,Za(l,u,e),l=e,a.current.lanes=l,au(a,l),na(a),t[ue]=a.current,hf(t),new Bn(a)};xn.version="19.2.3";function $r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($r)}catch(t){console.error(t)}}$r(),u0.exports=xn;var Wm=u0.exports;const $m=()=>{const[t,a]=lt.useState("home"),[l,e]=lt.useState([{type:"bot",text:"Hey! I'm so happy you're here! Chalo Chalo Jald se hi type kar ke bhejo "}]),[u,n]=lt.useState(""),[i,c]=lt.useState(!1),[f,r]=lt.useState(!1),[p,g]=lt.useState(!1),[d,m]=lt.useState(!1),x=lt.useRef(null),E=lt.useRef(null),Y=lt.useRef(null),[s,o]=lt.useState(!1),[h,b]=lt.useState(!1),T=lt.useRef(null),H=y=>{y.key==="Enter"&&$t()};lt.useEffect(()=>{t==="letter"&&setTimeout(()=>c(!0),300)},[t]),lt.useEffect(()=>{var y;(y=x.current)==null||y.scrollIntoView({behavior:"smooth"})},[l]);const z=(y,S=.35,O=800)=>{try{y.volume=0;const j=y.play();j&&j.catch(()=>{});const k=50,Oa=S/(O/k),ia=setInterval(()=>{const Sl=Math.min(S,y.volume+Oa);y.volume=Sl,Sl>=S&&clearInterval(ia)},k)}catch{}},_=(y,S=600,O=!0)=>{const k=y.volume/(S/50),Oa=setInterval(()=>{const ia=Math.max(0,y.volume-k);y.volume=ia,ia<=0&&(clearInterval(Oa),O&&(y.pause(),y.currentTime=0))},50)},D=()=>{const y=E.current;if(y)try{y.loop=!0,y.muted=!1,y.volume=.35;const S=y.play();S&&S.then(()=>{o(!0),b(!1)}).catch(()=>{try{y.muted=!0,y.play().catch(()=>{}),b(!0)}catch{}})}catch{}},R=()=>{const y=E.current;if(!s&&y)try{y.loop=!0,y.muted=!1,y.volume=.35;const S=y.play();S&&S.catch(()=>{}),o(!0)}catch{}setTimeout(()=>a("letter"),150)},zt=()=>{a("chat"),E.current&&_(E.current,700,!0),Y.current&&(Y.current.loop=!0,z(Y.current,.35,900))};lt.useEffect(()=>{if(t==="home"&&E.current&&!s){const y=E.current;y.loop=!0,y.volume=.35;const S=y.play();S&&S.then(()=>{o(!0),b(!1)}).catch(()=>{})}},[t,s]),lt.useEffect(()=>{if(!h)return;const y=()=>{const S=E.current;S&&(S.muted=!1,z(S,.35,700)),b(!1),window.removeEventListener("pointerdown",y),window.removeEventListener("keydown",y)};return window.addEventListener("pointerdown",y,{once:!0}),window.addEventListener("keydown",y,{once:!0}),()=>{window.removeEventListener("pointerdown",y),window.removeEventListener("keydown",y)}},[h]),lt.useEffect(()=>{if(t!=="letter")return;const y=T.current;if(!y)return;const S=()=>{const j=E.current;j&&(_(j,450,!1),setTimeout(()=>{try{j.pause()}catch{}},470))},O=()=>{const j=E.current;if(j){try{j.play().catch(()=>{})}catch{}z(j,.35,700)}};return y.addEventListener("play",S),y.addEventListener("pause",O),y.addEventListener("ended",O),()=>{y.removeEventListener("play",S),y.removeEventListener("pause",O),y.removeEventListener("ended",O)}},[t]);const $t=()=>{if(!u.trim())return;const y=[...l,{type:"user",text:u}],S=u.toLowerCase().trim();let O="",j=!1;(S==="hello"||S==="hi"||S==="hii"||S==="hey")&&!d?(O="Surpriseee, Happy Birthday Anu Bache! Yup Yup Apurv this side apka pati aur best friend dono. 🎉🎂 Shi bolta hai piyush maan lo uski baat koi gf nhi hai meri na mai kisi ke sath talking stage pe hu, Wo to mai apko isliye bol raha tha ki ap gussaa ho jao aur ap apne pe dhyaan dene lag jao. And yes I am very Proud of my bacha jaise ap sambhal rhe ho acha kar rhe ho itna jayda improve kar liya hai its so impressive aur ap bilkul bhi guilt mat liya karo, ha i know cheezen thik nhi hai ap thik nhi ho mai thik nhi ho par ap thik to mai bhi thik. And one more thing Congratulations for your internship your reappear clear. Keep Going Ha mai bhi apko miss karta hu aur block ke liye bhi sorry mai emotional ho jata hu apko dekh ke bas isliye. I am and I Will always be proud of you remember this, You are and You will alway special to me. At last Love you 😚😚😟😟😟Ye lo emoji miss kar rhe the na app. Dont Cry and dont be shant pata chalta hai feel hota hai ap shant ho rote ho i feel sorryy apke liye heavy feel hota hai apko so sorryyy but if you will be happy then only i will be happy ba so Always Be Happpyyyy because you are strong and confident. Good Boi",j=!0,m(!0)):S.includes("thankyou so much ji")?O="🥰 You're so welcome! You deserve all the happiness in the world! So Laddooo Kaisa laga surprise sorry agar bura laga ho to apurv ki jagah nhi le raha tha bas try kiya ki tujhe thoda acha feel ho.":S.includes("Awllee")?O="💕 Aww, that means everything! You're truly special and loved!":O="✨ That's wonderful! Today is all about YOU and celebrating the amazing person you are.",r(!0),g(!0),setTimeout(()=>r(!1),220),setTimeout(()=>g(!1),500),setTimeout(()=>{e([...y,{type:"bot",text:O}]),j&&setTimeout(()=>{e(k=>[...k,{type:"bot",images:["/Memory 1.jpg","/Memory 2.jpg","/Memory 3.jpg"]}])},800)},800),e(y),n("")},su=()=>A.jsxs("div",{className:"page-container home-page",onPointerDown:D,onTouchStart:D,onClick:D,children:[A.jsx("div",{className:"floating-hearts",children:[...Array(15)].map((y,S)=>A.jsx("div",{className:"heart",style:{left:`${Math.random()*100}%`,animationDelay:`${Math.random()*5}s`,animationDuration:`${8+Math.random()*4}s`},children:"💙😎😎🥰"},S))}),A.jsx("div",{className:"ambient-orbs","aria-hidden":"true",children:[...Array(5)].map((y,S)=>A.jsx("div",{className:"orb",style:{left:`${10+Math.random()*80}%`,top:`${10+Math.random()*70}%`,animationDelay:`${S*2}s`,transform:`translate(-50%, -50%) scale(${.8+Math.random()*.6})`}},S))}),A.jsxs("div",{className:"polaroid-container",children:[A.jsx("div",{className:"polaroid",style:{"--rotation":"-3deg"},children:A.jsx("img",{src:"/memory-1.jpg",alt:"Memory moment"})}),A.jsx("div",{className:"polaroid",style:{"--rotation":"2deg"},children:A.jsx("img",{src:"/memory-2.jpg",alt:"Happy memory"})}),A.jsx("div",{className:"polaroid",style:{"--rotation":"-4deg"},children:A.jsx("img",{src:"/memory-3.jpg",alt:"Special moment"})}),A.jsx("div",{className:"polaroid",style:{"--rotation":"3deg"},children:A.jsx("img",{src:"/memory-4.jpg",alt:"Cherished memory"})})]}),A.jsx("div",{className:"gift-ribbon-container",children:A.jsxs("div",{className:"gift-ribbon",children:[A.jsx("div",{className:"ribbon-left"}),A.jsx("div",{className:"ribbon-right"}),A.jsx("div",{className:"ribbon-knot"})]})}),A.jsxs("div",{className:"hero-content",children:[A.jsx("h1",{className:"main-heading",children:"Happy Birthday Laddooo Master "}),A.jsx("p",{className:"hero-subtext",children:"Today is a celebration of YOU — the most amazing friend anyone could ask for. Get ready for a special surprise made just for you..."}),A.jsx("button",{className:"cta-button",onClick:R,children:"Open Your Surprise →"})]})]}),qn=()=>A.jsxs("div",{className:"page-container letter-page",onPointerDown:s?void 0:D,onTouchStart:s?void 0:D,onClick:s?void 0:D,children:[A.jsxs("div",{className:`letter-card ${i?"visible":""}`,children:[A.jsx("div",{className:"letter-header",children:A.jsx("h2",{children:"A Letter For You Hnji Hnji Laddooo Bacha ke Liye Hi Hai "})}),A.jsxs("div",{className:"letter-content",children:[A.jsx("p",{children:"Dear Laddoooo Master,"}),A.jsx("p",{children:"Happy Birthday to Princess yes yess ye ke chota sa try meri taraf se i know it's not much tere se jayda pyara nhi hai. ha pata hai abhi sab thik nhi hai apurv ka lag raga hoga tujhe laddoooo par he is also wishing you Happy Birthday ha pati hai wo apka aur hamesha rahega Apko hamesha miss karta hai wo mai bata raha hu na."}),A.jsx("p",{children:"So Hey guys apko pata hai life ki unending wierd si race mai suddenly ek achi si dost mil gyi ha maine kabhi nhi socha tha ki ek din apki jaisi dost meri life mai ayegi jo meri har baat ko samjhegi, par bus ke last seat ke north south pole se sath baithne lagi aur fir kya tha humari dosti ki shuruwat ho gyi.Hmm logo ne bahut chidaya bahut bola par aisi waisi dosti thodi na thi jo iti assani se tut jaye. wo baat alag hai hamare beech mai kai baar disaggreement hua par fir bhi humne apni dosti ko kabhi kamzor nhi hone diya. starting mai laga are  bahut time hai abhi toh par dekhte dekhte time kab chala gaya pata hi nhi chala ab to laddooo college se jane wali hai ha uski problems thi par akele uski nhi thi sath sath meri bhi thi, ha bahut natak karti hai par cute bhi hai, ha ashleelta karti hai par kabhi galat matlab nhi bola, ha dantti bhi hai par pyaar se bhi bolti hai, ha thoda time leti hai samjhne par samjh Jati hai. par achanak se ab realise hota hai ki kitni jaldi time nikal gaya aur uske jane ka samaya aa gaya hh sochta hu to mai bhi emotional ho jata hu uske jane ke baad ye college sirf ek haunted place ban jayega aur wresting wring jaha mujhe roj hustle karna padega wo bhi akele kyuki time hi itni jaldi nikal gaya pata bhi nhi chala. Mera bus ka safar to bas ab uske comfy support ko miss karte hue hu nikal jayega bahut galat aadat hai ye support leke ninnii wali. roj miss karta hu apni uncomfortable ninnu travelling ke sath. kuch din pehel hi realise hua ki last dandia night hai uska is college mai ab uske jane ka time ho gaya bahut jaldi Diwali fest sab chala jayega aur wo bhi chali jayegi ha aha aur koi nhi teri hi baat kar raha hu kyu pareshan ho rhi hai mai bhi sochta hu kaise mil gyi itni achi dost. Sachi mai laddoo bahut acha laga agara tere Jaisi dost nhi hoti toh shayad ye college itna acha nhi hota tune har birthday special banaya ha bahut si achi aadat bhi sikha di aur rona bhi sikha diya ab kya ab toh chali jayegi na ab kiske aage rounga mai. ya kiske aage hasunga ya hasaunga kab jane ka time aa gaya pata hi nihi chala"}),A.jsx("p",{children:"At Last Laddooo thankyou mujhe surprise dene ke liye aur meri life ka ek bahut hi special part banne ke liye, itne pyaare pyaare gifts dene ke liye Wishing you a day filled with love, laughter, and all the things that make you happiest. Here's to another year of amazing adventures and unforgettable memories together!"}),A.jsxs("p",{className:"letter-signature",children:["With all my love in a Possitive Way,",A.jsx("br",{}),"Your Best Friend Gudduuu"]})]})]}),A.jsxs("div",{className:`memories-section ${i?"visible":""}`,children:[A.jsx("h3",{children:"Our Beautiful Memories 🎬"}),A.jsx("div",{className:"video-container",children:A.jsxs("video",{ref:T,controls:!0,playsInline:!0,children:[A.jsx("source",{src:"/birthday-video.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})]}),A.jsx("button",{className:"cta-button",onClick:zt,children:"One More Surprise"})]}),re=()=>A.jsxs("div",{className:"page-container chat-page",children:[A.jsxs("div",{className:"chat-header",children:[A.jsx("h2",{children:" Hellooo! Apurv Here "}),A.jsx("p",{children:"I'm here to make your day even more special"})]}),A.jsxs("div",{className:`chat-messages ${p?"pulse":""}`,children:[l.map((y,S)=>A.jsxs("div",{className:`message ${y.type}`,children:[y.text&&A.jsx("div",{className:"message-bubble",children:y.text}),y.images&&y.images.length>0&&A.jsx("div",{className:"message-images",children:y.images.map((O,j)=>A.jsx("div",{className:"image-bubble",children:A.jsx("img",{src:O,alt:`Memory ${j+1}`})},j))})]},S)),A.jsx("div",{ref:x})]}),A.jsxs("div",{className:"chat-input-container",children:[A.jsx("input",{type:"text",value:u,onChange:y=>n(y.target.value),onKeyDown:H,placeholder:"Type your message...",className:"chat-input"}),A.jsx("button",{onClick:$t,className:`send-button ${f?"sending":""}`,children:"Send"})]})]});return A.jsxs("div",{className:"birthday-website",children:[A.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --radius-card: 24px;
          --radius-bubble: 18px;
          --shadow-soft: 0 1px 3px rgba(59,130,246,0.08), 0 8px 24px rgba(59,130,246,0.08);
          --shadow-inset: inset 0 2px 8px rgba(59,130,246,0.04);
          --easing-soft: cubic-bezier(0.4, 0, 0.2, 1);
          --duration-entrance: 0.6s;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .birthday-website {
          font-family: 'Inter', 'Poppins', sans-serif;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 30%, #f8fafc 70%, #eff6ff 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }

        .page-container {
          min-height: 100vh;
          padding: 32px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* HOME PAGE */
        .home-page {
          position: relative;
          text-align: center;
          background: 
            radial-gradient(circle at 20% 30%, rgba(224, 242, 254, 0.6) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(186, 230, 253, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(240, 249, 255, 0.3) 0%, transparent 70%);
          overflow: hidden;
        }

        .home-page::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: subtleMove 60s linear infinite;
          pointer-events: none;
          opacity: 1;
        }

        @keyframes subtleMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .floating-hearts {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }

        .heart {
          position: absolute;
          font-size: 32px;
          animation: float linear infinite;
          opacity: 0;
          filter: drop-shadow(0 3px 10px rgba(59, 130, 246, 0.25));
        }

        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg) scale(0.7);
            opacity: 0;
          }
          8% {
            opacity: 0.65;
          }
          50% {
            opacity: 0.75;
            transform: translateY(50vh) rotate(180deg) scale(1.05);
          }
          92% {
            opacity: 0.65;
          }
          100% {
            transform: translateY(-10vh) rotate(360deg) scale(0.7);
            opacity: 0;
          }
        }

        .hero-content {
          z-index: 10;
          position: relative;
          max-width: 680px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px) saturate(180%);
          padding: 64px 56px;
          border-radius: 36px;
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.9) inset,
            0 2px 4px rgba(59, 130, 246, 0.05),
            0 8px 16px rgba(59, 130, 246, 0.08),
            0 20px 48px rgba(96, 165, 250, 0.12),
            0 32px 80px rgba(147, 197, 253, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.9);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          
          /* Initial hidden state */
          opacity: 0;
          transform: translateY(30px) scale(0.96);
          
          /* Reveal then continuous calm float */
          animation: 
            revealHero 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1.9s forwards,
            heroFloat 18s ease-in-out 3.4s infinite alternate;
        }

        @keyframes revealHero {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.96);
            filter: blur(8px);
          }
          50% {
            opacity: 0.6;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Gentle continuous float to keep hero alive */
        @keyframes heroFloat {
          0% { transform: translateY(0) scale(1); box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.9) inset,
            0 2px 4px rgba(59, 130, 246, 0.05),
            0 8px 16px rgba(59, 130, 246, 0.08),
            0 20px 48px rgba(96, 165, 250, 0.12),
            0 32px 80px rgba(147, 197, 253, 0.1);
          }
          50% { transform: translateY(-4px) scale(1.005); }
          100% { transform: translateY(0) scale(1); }
        }

        /* Glow halo that appears during reveal */
        .hero-content::after {
          content: '';
          position: absolute;
          top: -40px;
          left: -40px;
          right: -40px;
          bottom: -40px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
          border-radius: 50px;
          z-index: -1;
          opacity: 0;
          animation: glowReveal 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }

        @keyframes glowReveal {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }

        /* === GIFT RIBBON ANIMATION === */
        
        /* Ribbon container - wrapper around hero card */
        .gift-ribbon-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 680px;
          max-width: 90%;
          height: 100%;
          pointer-events: none;
          z-index: 15;
        }

        /* Horizontal ribbon across center */
        .gift-ribbon {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 80px;
          transform: translateY(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Left ribbon part */
        .ribbon-left {
          position: absolute;
          left: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%);
          border-radius: 12px 0 0 12px;
          box-shadow: 
            0 4px 12px rgba(14, 165, 233, 0.3),
            0 8px 24px rgba(14, 165, 233, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          
          /* Animation: slide left, rotate, fade out */
          animation: ribbonSlideLeft 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Right ribbon part */
        .ribbon-right {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
          border-radius: 0 12px 12px 0;
          box-shadow: 
            0 4px 12px rgba(14, 165, 233, 0.3),
            0 8px 24px rgba(14, 165, 233, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.3),
            inset 0 -2px 4px rgba(0, 0, 0, 0.1);
          
          /* Animation: slide right, rotate, fade out */
          animation: ribbonSlideRight 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Center knot/bow decoration */
        .ribbon-knot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #7dd3fc 0%, #38bdf8 50%, #0ea5e9 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 0 4px rgba(255, 255, 255, 0.3),
            0 4px 16px rgba(14, 165, 233, 0.4),
            0 8px 32px rgba(14, 165, 233, 0.3),
            inset 0 2px 6px rgba(255, 255, 255, 0.4),
            inset 0 -2px 6px rgba(0, 0, 0, 0.15);
          z-index: 20;
          
          /* Animation: scale up then fade out */
          animation: knotReveal 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s forwards;
        }

        /* Ribbon shine effect */
        .ribbon-left::before,
        .ribbon-right::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40%;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, transparent 100%);
          border-radius: inherit;
        }

        /* Ribbon animations */
        @keyframes ribbonSlideLeft {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(-120%) rotate(-15deg);
            opacity: 0;
          }
        }

        @keyframes ribbonSlideRight {
          0% {
            transform: translateX(0) rotate(0deg);
            opacity: 1;
          }
          70% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(120%) rotate(15deg);
            opacity: 0;
          }
        }

        @keyframes knotReveal {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          30% {
            transform: translate(-50%, -50%) scale(1.15);
            opacity: 1;
          }
          70% {
            opacity: 0.7;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }

        /* Hide ribbon after animation completes */
        @keyframes hideRibbon {
          to {
            display: none;
            pointer-events: none;
            visibility: hidden;
          }
        }

        .gift-ribbon-container {
          animation: hideRibbon 0.1s linear 2.1s forwards;
        }

        /* === POLAROID PHOTOS SECTION === */
        .polaroid-container {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 8;
          overflow: hidden;
          top: 0;
          left: 0;
        }

        .polaroid {
          position: absolute;
          width: 160px;
          height: 180px;
          background: #fafafa;
          padding: 12px;
          padding-bottom: 32px;
          border-radius: 6px;
          box-shadow: 
            0 4px 16px rgba(0, 0, 0, 0.15),
            0 8px 32px rgba(0, 0, 0, 0.1),
            0 12px 48px rgba(0, 0, 0, 0.08);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          opacity: 0;
          transform: translateY(40px) rotate(0deg);
          animation: polaroidFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          pointer-events: auto;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          rotate: var(--rotation, 0deg);
        }

        /* Staggered polaroid animations */
        .polaroid:nth-child(1) {
          animation-delay: 3.8s;
          bottom: 12%;
          left: 8%;
        }

        .polaroid:nth-child(2) {
          animation-delay: 4.2s;
          top: 15%;
          right: 10%;
        }

        .polaroid:nth-child(3) {
          animation-delay: 4.6s;
          bottom: 18%;
          right: 6%;
        }

        .polaroid:nth-child(4) {
          animation-delay: 5s;
          top: 20%;
          left: 12%;
        }

        @keyframes polaroidFadeIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.88);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .polaroid img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          border-radius: 3px;
          display: block;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        }

        /* Subtle paper texture on polaroid */
        .polaroid::after {
          content: '';
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' result='noise'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%23fff' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
          border-radius: 6px;
          pointer-events: none;
        }

        .polaroid:hover {
          transform: translateY(-8px) rotate(var(--rotation, 0deg));
          box-shadow: 
            0 6px 20px rgba(0, 0, 0, 0.2),
            0 12px 40px rgba(0, 0, 0, 0.15),
            0 16px 56px rgba(0, 0, 0, 0.12);
        }

        .polaroid:hover img {
          transform: scale(1.02);
        }

        /* Floating animation for polaroids after they appear */
        .polaroid {
          animation: 
            polaroidFadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards,
            polaroidFloat 6s ease-in-out 5s infinite;
        }

        @keyframes polaroidFloat {
          0% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--rotation, 0deg)); }
          100% { transform: translateY(0) rotate(var(--rotation, 0deg)); }
        }

        /* Mobile: Hide polaroids on smaller screens */
        @media (max-width: 1024px) {
          .polaroid {
            width: 140px;
            height: 160px;
            padding: 10px;
            padding-bottom: 28px;
          }

          .polaroid img {
            height: 100px;
          }

          .polaroid:nth-child(1) { left: 4%; bottom: 8%; }
          .polaroid:nth-child(2) { right: 6%; top: 12%; }
          .polaroid:nth-child(3) { right: 3%; bottom: 12%; }
          .polaroid:nth-child(4) { left: 8%; top: 18%; }
        }

        @media (max-width: 768px) {
          .polaroid-container {
            display: none;
          }
        }

        .hero-content::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(186, 230, 253, 0.8) 20%, 
            rgba(224, 242, 254, 0.9) 50%, 
            rgba(186, 230, 253, 0.8) 80%, 
            transparent 100%);
          border-radius: 36px 36px 0 0;
        }

        .hero-content:hover {
          transform: translateY(-6px) scale(1);
          box-shadow: 
            0 0 0 1px rgba(255, 255, 255, 0.95) inset,
            0 4px 8px rgba(59, 130, 246, 0.08),
            0 12px 24px rgba(59, 130, 246, 0.1),
            0 24px 56px rgba(96, 165, 250, 0.14),
            0 40px 96px rgba(147, 197, 253, 0.12);
        }

        .main-heading {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(2.75rem, 8vw, 4.5rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0369a1 0%, #0284c7 25%, #0ea5e9 50%, #38bdf8 75%, #7dd3fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 28px;
          line-height: 1.2;
          letter-spacing: 1px;
          filter: drop-shadow(0 2px 12px rgba(14, 165, 233, 0.15));
          position: relative;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px);
          
          /* Staggered reveal - appears after ribbon opens */
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards;
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        .hero-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(1.08rem, 3vw, 1.2rem);
          font-weight: 400;
          color: #475569;
          line-height: 1.85;
          margin-bottom: 40px;
          letter-spacing: 0.3px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px);
          
          /* Appears after ribbon opens */
          animation: textReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 2.9s forwards;
        }

        .cta-button {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          padding: 20px 52px;
          font-size: 1.08rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.5px;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          margin-top: 8px;
          position: relative;
          overflow: hidden;
          
          /* Initial hidden */
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          
          /* Appears after ribbon opens */
          animation: 
            buttonReveal 1s cubic-bezier(0.4, 0, 0.2, 1) 3.3s forwards,
            idleGlow 6s ease-in-out 5s infinite;
        }

        /* Faster reveal for the letter page CTA (no long delay) */
        .letter-page .cta-button {
          animation: buttonReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards, idleGlow 6s ease-in-out 2s infinite;
        }

        @keyframes buttonReveal {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* One-time gentle pulse after button appears */
        @keyframes buttonPulse {
          0%, 100% {
            box-shadow: 
              0 2px 4px rgba(14, 165, 233, 0.2),
              0 8px 16px rgba(14, 165, 233, 0.15),
              0 16px 32px rgba(14, 165, 233, 0.1),
              inset 0 -2px 0 rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 4px 8px rgba(14, 165, 233, 0.3),
              0 12px 24px rgba(14, 165, 233, 0.25),
              0 20px 40px rgba(14, 165, 233, 0.2),
              0 0 0 6px rgba(56, 189, 248, 0.15),
              inset 0 -2px 0 rgba(0, 0, 0, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
          }
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
          transition: left 0.7s ease;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 100%);
          border-radius: 50px;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-button:hover::after {
          opacity: 1;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.25),
            0 12px 24px rgba(14, 165, 233, 0.2),
            0 20px 40px rgba(14, 165, 233, 0.15),
            0 0 0 4px rgba(56, 189, 248, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }

        .cta-button:active {
          transform: translateY(-2px) scale(0.98);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 6px 12px rgba(14, 165, 233, 0.15),
            0 0 0 4px rgba(56, 189, 248, 0.08);
        }

        /* Subtle idle glow loop to keep button inviting */
        @keyframes idleGlow {
          0% { box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% { box-shadow: 
            0 4px 10px rgba(14, 165, 233, 0.26),
            0 12px 22px rgba(14, 165, 233, 0.2),
            0 20px 40px rgba(14, 165, 233, 0.14),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          }
          100% { box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.15),
            0 16px 32px rgba(14, 165, 233, 0.1),
            inset 0 -2px 0 rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 0.2);
          }
        }

        /* Ambient orbs styling */
        .ambient-orbs {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 2;
        }
        .ambient-orbs .orb {
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.18;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(14, 165, 233, 0.22) 40%, transparent 70%);
          animation: drift 24s ease-in-out infinite;
        }
        @keyframes drift {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-48%, -52%) scale(1.06); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }



        /* LETTER PAGE */
        .letter-page {
          padding: 56px 20px;
          max-width: 900px;
          margin: 0 auto;
          background: radial-gradient(circle at center, rgba(240, 249, 255, 0.5) 0%, transparent 70%);
        }

        .letter-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 56px 48px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .letter-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .letter-header h2 {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.95rem, 5vw, 2.65rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 50%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.5px;
        }

        .letter-content {
          font-family: 'Dancing Script', cursive;
          font-size: clamp(1.15rem, 3vw, 1.45rem);
          color: #334155;
          line-height: 2.1;
          font-weight: 500;
        }

        .letter-content p {
          margin-bottom: 28px;
          opacity: 0;
          animation: fadeInUp 0.8s ease forwards;
        }

        .letter-card.visible .letter-content p:nth-child(1) { animation-delay: 0.2s; }
        .letter-card.visible .letter-content p:nth-child(2) { animation-delay: 0.4s; }
        .letter-card.visible .letter-content p:nth-child(3) { animation-delay: 0.6s; }
        .letter-card.visible .letter-content p:nth-child(4) { animation-delay: 0.8s; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .letter-signature {
          margin-top: 48px;
          font-style: italic;
          color: #0284c7;
          font-size: clamp(1.15rem, 3vw, 1.35rem);
        }

        /* PHOTOS GRID SECTION */
        .photos-grid-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
        }

        .photos-grid-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .photos-heading {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.15rem);
          font-weight: 600;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .photos-subtext {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.05rem);
          font-weight: 400;
          color: #64748b;
          text-align: center;
          margin-bottom: 40px;
          letter-spacing: 0.2px;
        }

        .photos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          max-width: 900px;
          margin: 0 auto;
        }

        .photo-card {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 20px;
          padding: 16px;
          box-shadow: 
            0 2px 4px rgba(59, 130, 246, 0.06),
            0 4px 12px rgba(59, 130, 246, 0.08);
          border: 1px solid rgba(224, 242, 254, 0.6);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(20px);
          animation: photoFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Staggered fade-in for each photo card */
        .photos-grid-section.visible .photo-card:nth-child(1) { animation-delay: 0.8s; }
        .photos-grid-section.visible .photo-card:nth-child(2) { animation-delay: 1s; }
        .photos-grid-section.visible .photo-card:nth-child(3) { animation-delay: 1.2s; }
        .photos-grid-section.visible .photo-card:nth-child(4) { animation-delay: 1.4s; }
        .photos-grid-section.visible .photo-card:nth-child(5) { animation-delay: 1.6s; }
        .photos-grid-section.visible .photo-card:nth-child(6) { animation-delay: 1.8s; }

        @keyframes photoFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .photo-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 
            0 4px 8px rgba(59, 130, 246, 0.12),
            0 8px 20px rgba(59, 130, 246, 0.15),
            0 16px 40px rgba(96, 165, 250, 0.12);
          border-color: rgba(186, 230, 253, 0.8);
        }

        .photo-placeholder {
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: 14px;
          overflow: hidden;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          position: relative;
          margin-bottom: 12px;
        }

        .photo-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .photo-card:hover .photo-placeholder img {
          transform: scale(1.08);
        }

        /* Placeholder styling when image is not loaded */
        .photo-placeholder:empty::before,
        .photo-placeholder img[src=""]::before,
        .photo-placeholder img:not([src])::before {
          content: '📷';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          opacity: 0.3;
        }

        .photo-caption {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 500;
          color: #64748b;
          text-align: center;
          letter-spacing: 0.1px;
          margin: 0;
          line-height: 1.4;
        }

        .memories-section {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 28px;
          padding: 48px 40px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 16px 48px rgba(96, 165, 250, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.9);
          margin-bottom: 40px;
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s;
        }

        .memories-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .memories-section h3 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.65rem, 4vw, 2.15rem);
          font-weight: 600;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: center;
          margin-bottom: 32px;
          letter-spacing: -0.5px;
        }

        .video-container {
          position: relative;
          width: 100%;
          max-width: 700px;
          margin: 0 auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 4px 8px rgba(0, 0, 0, 0.06),
            0 8px 20px rgba(59, 130, 246, 0.12),
            0 16px 40px rgba(96, 165, 250, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-container:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 6px 12px rgba(0, 0, 0, 0.08),
            0 12px 28px rgba(59, 130, 246, 0.14),
            0 20px 48px rgba(96, 165, 250, 0.12);
        }

        .video-placeholder {
          aspect-ratio: 16/9;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #0284c7;
        }

        .play-icon {
          font-size: 4rem;
          margin-bottom: 15px;
        }

        .video-container video {
          width: 100%;
          display: block;
        }

        /* CHAT PAGE */
        .chat-page {
          max-width: 720px;
          width: 100%;
          padding: 32px 20px;
          justify-content: flex-start;
          background: radial-gradient(circle at top, rgba(240, 249, 255, 0.4) 0%, transparent 60%);
        }

        .chat-header {
          text-align: center;
          margin-bottom: 28px;
          padding: 32px 28px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          box-shadow: 
            0 1px 3px rgba(59, 130, 246, 0.08),
            0 4px 12px rgba(59, 130, 246, 0.1),
            0 12px 32px rgba(96, 165, 250, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.9);
        }

        .chat-header h2 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(1.85rem, 5vw, 2.35rem);
          font-weight: 700;
          background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .chat-header p {
          font-family: 'Inter', sans-serif;
          font-size: 1.02rem;
          color: #64748b;
          font-weight: 400;
          letter-spacing: 0.1px;
        }

        .chat-messages {
          flex: 1;
          width: 100%;
          max-height: 52vh;
          overflow-y: auto;
          padding: 24px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(8px);
          border-radius: var(--radius-card);
          box-shadow: 
            inset 0 2px 8px rgba(59, 130, 246, 0.04),
            0 1px 3px rgba(59, 130, 246, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.8);
          margin-bottom: 28px;
          scroll-behavior: smooth;
        }

        .chat-messages.pulse {
          animation: pulseBorder 0.5s var(--easing-soft);
        }

        @keyframes pulseBorder {
          0% {
            box-shadow: var(--shadow-inset), 0 1px 3px rgba(59,130,246,0.06);
          }
          50% {
            box-shadow: inset 0 0 0 3px rgba(56,189,248,0.12), 0 4px 12px rgba(59,130,246,0.12);
          }
          100% {
            box-shadow: var(--shadow-inset), 0 1px 3px rgba(59,130,246,0.06);
          }
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(226, 232, 240, 0.3);
          border-radius: 10px;
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.4);
          border-radius: 10px;
          transition: background 0.2s ease;
        }

        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.6);
        }

        .message {
          display: flex;
          margin-bottom: 18px;
          animation: slideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          justify-content: flex-end;
        }

        .message.bot {
          justify-content: flex-start;
        }

        .message-bubble {
          max-width: 78%;
          padding: 14px 20px;
          border-radius: var(--radius-bubble);
          font-family: 'Inter', sans-serif;
          font-size: 0.98rem;
          line-height: 1.6;
          font-weight: 400;
          letter-spacing: 0.1px;
          position: relative;
          transition: all 0.3s var(--easing-soft);
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border-bottom-right-radius: 6px;
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.15),
            0 4px 12px rgba(14, 165, 233, 0.1);
        }

        .message.user .message-bubble:hover {
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.2),
            0 8px 16px rgba(14, 165, 233, 0.12);
          transform: translateY(-1px);
        }

        .message.bot .message-bubble {
          background: rgba(240, 249, 255, 0.9);
          color: #334155;
          border-bottom-left-radius: 6px;
          box-shadow: 
            0 1px 3px rgba(148, 163, 184, 0.1),
            0 2px 8px rgba(148, 163, 184, 0.08);
          border: 1px solid rgba(226, 232, 240, 0.6);
        }

        .message.bot .message-bubble:hover {
          background: rgba(240, 249, 255, 1);
          border-color: rgba(186, 230, 253, 0.8);
          transform: translateY(-1px);
        }

        .chat-input-container {
          display: flex;
          gap: 12px;
          width: 100%;
          align-items: center;
        }

        .chat-input {
          flex: 1;
          padding: 16px 24px;
          border: 2px solid rgba(186, 230, 253, 0.5);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #334155;
          outline: none;
          transition: all 0.25s var(--easing-soft);
          box-shadow: 0 2px 8px rgba(148, 163, 184, 0.08);
        }

        .chat-input::placeholder {
          color: #94a3b8;
        }

        .chat-input:focus {
          border-color: #38bdf8;
          background: white;
          box-shadow: 
            0 0 0 3px rgba(56, 189, 248, 0.1),
            0 4px 12px rgba(59, 130, 246, 0.12);
          transform: translateY(-1px);
        }

        .send-button {
          padding: 16px 36px;
          background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
          color: white;
          border: none;
          border-radius: 50px;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.25s var(--easing-soft);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 6px 16px rgba(14, 165, 233, 0.15);
        }

        .send-button.sending {
          transform: translateY(-1px) scale(0.98);
          filter: brightness(1.04);
        }

        .send-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 4px 8px rgba(14, 165, 233, 0.25),
            0 10px 20px rgba(14, 165, 233, 0.2);
        }

        .send-button:active {
          transform: translateY(0);
          box-shadow: 
            0 2px 4px rgba(14, 165, 233, 0.2),
            0 4px 12px rgba(14, 165, 233, 0.15);
        }

        /* MESSAGE IMAGES IN CHAT */
        .message-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          max-width: 95%;
          margin-top: 8px;
        }

        /* If only one image, make it larger */
        .message-images:has(.image-bubble:only-child) {
          grid-template-columns: 1fr;
          max-width: 75%;
        }

        /* If 3 images, make last one span full width */
        .message-images:has(.image-bubble:nth-child(3):last-child) .image-bubble:last-child {
          grid-column: 1 / -1;
        }

        .image-bubble {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 2px 6px rgba(59, 130, 246, 0.12),
            0 6px 16px rgba(96, 165, 250, 0.15);
          transition: all 0.3s var(--easing-soft);
          background: rgba(240, 249, 255, 0.5);
          animation: slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          aspect-ratio: 3 / 4;
          min-height: 280px;
        }

        .image-bubble:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 4px 10px rgba(59, 130, 246, 0.18),
            0 10px 24px rgba(96, 165, 250, 0.2);
        }

        .image-bubble img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          border-radius: 12px;
        }

        /* Placeholder for missing images */
        .image-bubble img[src*=".jpg"]:not([src^="data:"]) {
          min-height: 200px;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        }

        .image-bubble img[src=""]:before,
        .image-bubble img:not([src]):before {
          content: '📷';
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 200px;
          font-size: 3rem;
          background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .page-container {
            padding: 24px 16px;
          }

          .hero-content {
            padding: 48px 32px;
            border-radius: 32px;
            max-width: 92%;
          }

          /* Ribbon responsive sizing */
          .gift-ribbon-container {
            width: 92%;
          }

          .gift-ribbon {
            height: 60px;
          }

          .ribbon-knot {
            width: 48px;
            height: 48px;
          }

          .main-heading {
            margin-bottom: 24px;
            letter-spacing: 0.5px;
          }

          .hero-subtext {
            margin-bottom: 36px;
            line-height: 1.8;
          }

          .cta-button {
            padding: 18px 44px;
          }

          .letter-card {
            padding: 40px 28px;
            border-radius: 24px;
          }

          /* Photos grid - 2 columns on tablet */
          .photos-grid-section {
            padding: 36px 28px;
            border-radius: 24px;
          }

          .photos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .memories-section {
            padding: 36px 28px;
            border-radius: 24px;
          }

          .chat-header {
            padding: 28px 24px;
            border-radius: 20px;
          }

          .chat-messages {
            padding: 20px;
            border-radius: 20px;
          }

          .chat-input-container {
            flex-direction: row;
            gap: 10px;
          }

          .send-button {
            padding: 16px 28px;
            white-space: nowrap;
          }

          .heart {
            font-size: 22px;
          }

          .message-bubble {
            max-width: 82%;
            padding: 12px 18px;
          }

          .message-images {
            max-width: 96%;
          }

          .message-images:has(.image-bubble:only-child) {
            max-width: 80%;
          }
        }

        @media (max-width: 480px) {
          .page-container {
            padding: 20px 12px;
          }

          .hero-content {
            padding: 40px 28px;
            border-radius: 28px;
            max-width: 94%;
          }

          /* Ribbon responsive sizing for small screens */
          .gift-ribbon-container {
            width: 94%;
          }

          .gift-ribbon {
            height: 50px;
          }

          .ribbon-knot {
            width: 40px;
            height: 40px;
          }

          .main-heading {
            letter-spacing: 0.3px;
          }

          .cta-button {
            padding: 17px 40px;
            font-size: 1.04rem;
          }

          .letter-card, .memories-section {
            padding: 32px 24px;
            border-radius: 20px;
          }

          /* Photos grid - 1 column on mobile */
          .photos-grid-section {
            padding: 32px 24px;
            border-radius: 20px;
          }

          .photos-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .photo-card {
            padding: 14px;
          }

          .photo-caption {
            font-size: 0.85rem;
          }

          .letter-content {
            font-size: clamp(1.1rem, 3vw, 1.3rem);
            line-height: 2;
          }

          .chat-header {
            padding: 24px 20px;
          }

          .chat-input-container {
            flex-direction: column;
            gap: 12px;
          }

          .send-button {
            width: 100%;
            padding: 16px 32px;
          }

          .message-bubble {
            max-width: 88%;
            font-size: 0.96rem;
          }

          .message-images {
            max-width: 98%;
            gap: 8px;
          }

          .message-images:has(.image-bubble:only-child) {
            max-width: 85%;
          }

          .image-bubble {
            border-radius: 10px;
          }

          .heart {
            font-size: 20px;
          }
        }

        @media (min-width: 1200px) {
          .hero-content {
            padding: 72px 64px;
            max-width: 720px;
          }

          .main-heading {
            margin-bottom: 32px;
          }

          .hero-subtext {
            margin-bottom: 44px;
          }

          .letter-card {
            padding: 64px 56px;
          }

          .memories-section {
            padding: 56px 48px;
          }
        }

        /* Pro polish overrides for consistent radii across major cards */
        .hero-content,
        .letter-card,
        .memories-section,
        .chat-header {
          border-radius: var(--radius-card);
        }

        /* Sound unlock prompt (mobile-friendly) */
        .sound-unlock {
          position: fixed;
          bottom: 18px;
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 16px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(186, 230, 253, 0.8);
          color: #0ea5e9;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.2px;
          box-shadow:
            0 2px 4px rgba(14, 165, 233, 0.15),
            0 8px 20px rgba(14, 165, 233, 0.12);
          cursor: pointer;
          z-index: 50;
        }
        .sound-unlock:hover {
          background: white;
          border-color: rgba(56, 189, 248, 0.6);
          box-shadow:
            0 4px 8px rgba(14, 165, 233, 0.2),
            0 12px 28px rgba(14, 165, 233, 0.16);
        }
      `}),A.jsx("audio",{ref:E,src:"/welcome-song.mp3",preload:"auto",autoPlay:!0}),A.jsx("audio",{ref:Y,src:"/chat-song.mp3",preload:"auto"}),t==="home"&&su(),t==="letter"&&qn(),t==="chat"&&re()]})};function Fm(){return A.jsx($m,{})}Wm.createRoot(document.getElementById("root")).render(A.jsx(pd.StrictMode,{children:A.jsx(Fm,{})}));
