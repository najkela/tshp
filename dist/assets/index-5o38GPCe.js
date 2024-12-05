(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function DE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Id={exports:{}},za={},Sd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Og;function OE(){if(Og)return Ce;Og=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),I=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=I&&M[I]||M["@@iterator"],typeof M=="function"?M:null)}var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},V=Object.assign,q={};function b(M,Q,fe){this.props=M,this.context=Q,this.refs=q,this.updater=fe||D}b.prototype.isReactComponent={},b.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},b.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function $(){}$.prototype=b.prototype;function G(M,Q,fe){this.props=M,this.context=Q,this.refs=q,this.updater=fe||D}var te=G.prototype=new $;te.constructor=G,V(te,b.prototype),te.isPureReactComponent=!0;var ce=Array.isArray,Te=Object.prototype.hasOwnProperty,ge={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function R(M,Q,fe){var Re,Ae={},De=null,Me=null;if(Q!=null)for(Re in Q.ref!==void 0&&(Me=Q.ref),Q.key!==void 0&&(De=""+Q.key),Q)Te.call(Q,Re)&&!P.hasOwnProperty(Re)&&(Ae[Re]=Q[Re]);var je=arguments.length-2;if(je===1)Ae.children=fe;else if(1<je){for(var $e=Array(je),_t=0;_t<je;_t++)$e[_t]=arguments[_t+2];Ae.children=$e}if(M&&M.defaultProps)for(Re in je=M.defaultProps,je)Ae[Re]===void 0&&(Ae[Re]=je[Re]);return{$$typeof:n,type:M,key:De,ref:Me,props:Ae,_owner:ge.current}}function C(M,Q){return{$$typeof:n,type:M.type,key:Q,ref:M.ref,props:M.props,_owner:M._owner}}function N(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function L(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(fe){return Q[fe]})}var j=/\/+/g;function k(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):Q.toString(36)}function nt(M,Q,fe,Re,Ae){var De=typeof M;(De==="undefined"||De==="boolean")&&(M=null);var Me=!1;if(M===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(M.$$typeof){case n:case e:Me=!0}}if(Me)return Me=M,Ae=Ae(Me),M=Re===""?"."+k(Me,0):Re,ce(Ae)?(fe="",M!=null&&(fe=M.replace(j,"$&/")+"/"),nt(Ae,Q,fe,"",function(_t){return _t})):Ae!=null&&(N(Ae)&&(Ae=C(Ae,fe+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(j,"$&/")+"/")+M)),Q.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",ce(M))for(var je=0;je<M.length;je++){De=M[je];var $e=Re+k(De,je);Me+=nt(De,Q,fe,$e,Ae)}else if($e=S(M),typeof $e=="function")for(M=$e.call(M),je=0;!(De=M.next()).done;)De=De.value,$e=Re+k(De,je++),Me+=nt(De,Q,fe,$e,Ae);else if(De==="object")throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Dt(M,Q,fe){if(M==null)return M;var Re=[],Ae=0;return nt(M,Re,"","",function(De){return Q.call(fe,De,Ae++)}),Re}function Ot(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(fe){(M._status===0||M._status===-1)&&(M._status=1,M._result=fe)},function(fe){(M._status===0||M._status===-1)&&(M._status=2,M._result=fe)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var ze={current:null},re={transition:null},me={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:ge};function se(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Dt,forEach:function(M,Q,fe){Dt(M,function(){Q.apply(this,arguments)},fe)},count:function(M){var Q=0;return Dt(M,function(){Q++}),Q},toArray:function(M){return Dt(M,function(Q){return Q})||[]},only:function(M){if(!N(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=b,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=G,Ce.StrictMode=i,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Ce.act=se,Ce.cloneElement=function(M,Q,fe){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Re=V({},M.props),Ae=M.key,De=M.ref,Me=M._owner;if(Q!=null){if(Q.ref!==void 0&&(De=Q.ref,Me=ge.current),Q.key!==void 0&&(Ae=""+Q.key),M.type&&M.type.defaultProps)var je=M.type.defaultProps;for($e in Q)Te.call(Q,$e)&&!P.hasOwnProperty($e)&&(Re[$e]=Q[$e]===void 0&&je!==void 0?je[$e]:Q[$e])}var $e=arguments.length-2;if($e===1)Re.children=fe;else if(1<$e){je=Array($e);for(var _t=0;_t<$e;_t++)je[_t]=arguments[_t+2];Re.children=je}return{$$typeof:n,type:M.type,key:Ae,ref:De,props:Re,_owner:Me}},Ce.createContext=function(M){return M={$$typeof:h,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:l,_context:M},M.Consumer=M},Ce.createElement=R,Ce.createFactory=function(M){var Q=R.bind(null,M);return Q.type=M,Q},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:d,render:M}},Ce.isValidElement=N,Ce.lazy=function(M){return{$$typeof:w,_payload:{_status:-1,_result:M},_init:Ot}},Ce.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},Ce.startTransition=function(M){var Q=re.transition;re.transition={};try{M()}finally{re.transition=Q}},Ce.unstable_act=se,Ce.useCallback=function(M,Q){return ze.current.useCallback(M,Q)},Ce.useContext=function(M){return ze.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return ze.current.useDeferredValue(M)},Ce.useEffect=function(M,Q){return ze.current.useEffect(M,Q)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(M,Q,fe){return ze.current.useImperativeHandle(M,Q,fe)},Ce.useInsertionEffect=function(M,Q){return ze.current.useInsertionEffect(M,Q)},Ce.useLayoutEffect=function(M,Q){return ze.current.useLayoutEffect(M,Q)},Ce.useMemo=function(M,Q){return ze.current.useMemo(M,Q)},Ce.useReducer=function(M,Q,fe){return ze.current.useReducer(M,Q,fe)},Ce.useRef=function(M){return ze.current.useRef(M)},Ce.useState=function(M){return ze.current.useState(M)},Ce.useSyncExternalStore=function(M,Q,fe){return ze.current.useSyncExternalStore(M,Q,fe)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var Lg;function _f(){return Lg||(Lg=1,Sd.exports=OE()),Sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vg;function LE(){if(Vg)return za;Vg=1;var n=_f(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(d,p,y){var w,I={},S=null,D=null;y!==void 0&&(S=""+y),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(D=p.ref);for(w in p)i.call(p,w)&&!l.hasOwnProperty(w)&&(I[w]=p[w]);if(d&&d.defaultProps)for(w in p=d.defaultProps,p)I[w]===void 0&&(I[w]=p[w]);return{$$typeof:e,type:d,key:S,ref:D,props:I,_owner:o.current}}return za.Fragment=t,za.jsx=h,za.jsxs=h,za}var bg;function VE(){return bg||(bg=1,Id.exports=LE()),Id.exports}var E=VE(),z=_f();const bE=DE(z);var qu={},Rd={exports:{}},en={},Ad={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function ME(){return Mg||(Mg=1,function(n){function e(re,me){var se=re.length;re.push(me);e:for(;0<se;){var M=se-1>>>1,Q=re[M];if(0<o(Q,me))re[M]=me,re[se]=Q,se=M;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],se=re.pop();if(se!==me){re[0]=se;e:for(var M=0,Q=re.length,fe=Q>>>1;M<fe;){var Re=2*(M+1)-1,Ae=re[Re],De=Re+1,Me=re[De];if(0>o(Ae,se))De<Q&&0>o(Me,Ae)?(re[M]=Me,re[De]=se,M=De):(re[M]=Ae,re[Re]=se,M=Re);else if(De<Q&&0>o(Me,se))re[M]=Me,re[De]=se,M=De;else break e}}return me}function o(re,me){var se=re.sortIndex-me.sortIndex;return se!==0?se:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,d=h.now();n.unstable_now=function(){return h.now()-d}}var p=[],y=[],w=1,I=null,S=3,D=!1,V=!1,q=!1,b=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(y)}}function ce(re){if(q=!1,te(re),!V)if(t(p)!==null)V=!0,Ot(Te);else{var me=t(y);me!==null&&ze(ce,me.startTime-re)}}function Te(re,me){V=!1,q&&(q=!1,$(R),R=-1),D=!0;var se=S;try{for(te(me),I=t(p);I!==null&&(!(I.expirationTime>me)||re&&!L());){var M=I.callback;if(typeof M=="function"){I.callback=null,S=I.priorityLevel;var Q=M(I.expirationTime<=me);me=n.unstable_now(),typeof Q=="function"?I.callback=Q:I===t(p)&&i(p),te(me)}else i(p);I=t(p)}if(I!==null)var fe=!0;else{var Re=t(y);Re!==null&&ze(ce,Re.startTime-me),fe=!1}return fe}finally{I=null,S=se,D=!1}}var ge=!1,P=null,R=-1,C=5,N=-1;function L(){return!(n.unstable_now()-N<C)}function j(){if(P!==null){var re=n.unstable_now();N=re;var me=!0;try{me=P(!0,re)}finally{me?k():(ge=!1,P=null)}}else ge=!1}var k;if(typeof G=="function")k=function(){G(j)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Dt=nt.port2;nt.port1.onmessage=j,k=function(){Dt.postMessage(null)}}else k=function(){b(j,0)};function Ot(re){P=re,ge||(ge=!0,k())}function ze(re,me){R=b(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){V||D||(V=!0,Ot(Te))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return S},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(re){switch(S){case 1:case 2:case 3:var me=3;break;default:me=S}var se=S;S=me;try{return re()}finally{S=se}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var se=S;S=re;try{return me()}finally{S=se}},n.unstable_scheduleCallback=function(re,me,se){var M=n.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?M+se:M):se=M,re){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,re={id:w++,callback:me,priorityLevel:re,startTime:se,expirationTime:Q,sortIndex:-1},se>M?(re.sortIndex=se,e(y,re),t(p)===null&&re===t(y)&&(q?($(R),R=-1):q=!0,ze(ce,se-M))):(re.sortIndex=Q,e(p,re),V||D||(V=!0,Ot(Te))),re},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(re){var me=S;return function(){var se=S;S=me;try{return re.apply(this,arguments)}finally{S=se}}}}(Cd)),Cd}var jg;function jE(){return jg||(jg=1,Ad.exports=ME()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fg;function FE(){if(Fg)return en;Fg=1;var n=_f(),e=jE();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},I={};function S(r){return p.call(I,r)?!0:p.call(w,r)?!1:y.test(r)?I[r]=!0:(w[r]=!0,!1)}function D(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function V(r,s,a,c){if(s===null||typeof s>"u"||D(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function q(r,s,a,c,f,g,_){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=_}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){b[r]=new q(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];b[s]=new q(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){b[r]=new q(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){b[r]=new q(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){b[r]=new q(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){b[r]=new q(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){b[r]=new q(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){b[r]=new q(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){b[r]=new q(r,5,!1,r.toLowerCase(),null,!1,!1)});var $=/[\-:]([a-z])/g;function G(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace($,G);b[s]=new q(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace($,G);b[s]=new q(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace($,G);b[s]=new q(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){b[r]=new q(r,1,!1,r.toLowerCase(),null,!1,!1)}),b.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){b[r]=new q(r,1,!1,r.toLowerCase(),null,!0,!0)});function te(r,s,a,c){var f=b.hasOwnProperty(s)?b[s]:null;(f!==null?f.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(V(s,a,f,c)&&(a=null),c||f===null?S(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):f.mustUseProperty?r[f.propertyName]=a===null?f.type===3?!1:"":a:(s=f.attributeName,c=f.attributeNamespace,a===null?r.removeAttribute(s):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ce=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Te=Symbol.for("react.element"),ge=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),L=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),Dt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,M;function Q(r){if(M===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);M=s&&s[1]||""}return`
`+M+r}var fe=!1;function Re(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(H){var c=H}Reflect.construct(r,[],s)}else{try{s.call()}catch(H){c=H}r.call(s.prototype)}else{try{throw Error()}catch(H){c=H}r()}}catch(H){if(H&&c&&typeof H.stack=="string"){for(var f=H.stack.split(`
`),g=c.stack.split(`
`),_=f.length-1,A=g.length-1;1<=_&&0<=A&&f[_]!==g[A];)A--;for(;1<=_&&0<=A;_--,A--)if(f[_]!==g[A]){if(_!==1||A!==1)do if(_--,A--,0>A||f[_]!==g[A]){var x=`
`+f[_].replace(" at new "," at ");return r.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",r.displayName)),x}while(1<=_&&0<=A);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?Q(r):""}function Ae(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case P:return"Fragment";case ge:return"Portal";case C:return"Profiler";case R:return"StrictMode";case k:return"Suspense";case nt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case L:return(r.displayName||"Context")+".Consumer";case N:return(r._context.displayName||"Context")+".Provider";case j:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Dt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case Ot:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function je(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _t(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(_){c=""+_,g.call(this,_)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(_){c=""+_},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function dr(r){r._valueTracker||(r._valueTracker=_t(r))}function As(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function $r(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Di(r,s){var a=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Cs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=je(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Go(r,s){s=s.checked,s!=null&&te(r,"checked",s,!1)}function Ko(r,s){Go(r,s);var a=je(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?ks(r,s.type,a):s.hasOwnProperty("defaultValue")&&ks(r,s.type,je(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function Pl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function ks(r,s,a){(s!=="number"||$r(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var fr=Array.isArray;function pr(r,s,a,c){if(r=r.options,s){s={};for(var f=0;f<a.length;f++)s["$"+a[f]]=!0;for(a=0;a<r.length;a++)f=s.hasOwnProperty("$"+r[a].value),r[a].selected!==f&&(r[a].selected=f),f&&c&&(r[a].defaultSelected=!0)}else{for(a=""+je(a),s=null,f=0;f<r.length;f++){if(r[f].value===a){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function Qo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Ps(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(fr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:je(a)}}function xs(r,s){var a=je(s.value),c=je(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Yo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function ct(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?ct(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var mr,Xo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,f){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,f)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function qr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Oi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Li=["Webkit","ms","Moz","O"];Object.keys(Oi).forEach(function(r){Li.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Oi[s]=Oi[r]})});function Jo(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Oi.hasOwnProperty(r)&&Oi[r]?(""+s).trim():s+"px"}function Zo(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Jo(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,f):r[a]=f}}var ea=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(r,s){if(s){if(ea[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function na(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Ns(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ds=null,dn=null,Hn=null;function Os(r){if(r=Aa(r)){if(typeof Ds!="function")throw Error(t(280));var s=r.stateNode;s&&(s=su(s),Ds(r.stateNode,r.type,s))}}function Wn(r){dn?Hn?Hn.push(r):Hn=[r]:dn=r}function ra(){if(dn){var r=dn,s=Hn;if(Hn=dn=null,Os(r),s)for(r=0;r<s.length;r++)Os(s[r])}}function bi(r,s){return r(s)}function ia(){}var gr=!1;function sa(r,s,a){if(gr)return r(s,a);gr=!0;try{return bi(r,s,a)}finally{gr=!1,(dn!==null||Hn!==null)&&(ia(),ra())}}function rt(r,s){var a=r.stateNode;if(a===null)return null;var c=su(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Ls=!1;if(d)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ls=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ls=!1}function Mi(r,s,a,c,f,g,_,A,x){var H=Array.prototype.slice.call(arguments,3);try{s.apply(a,H)}catch(J){this.onError(J)}}var ji=!1,Vs=null,An=!1,oa=null,Xc={onError:function(r){ji=!0,Vs=r}};function bs(r,s,a,c,f,g,_,A,x){ji=!1,Vs=null,Mi.apply(Xc,arguments)}function xl(r,s,a,c,f,g,_,A,x){if(bs.apply(this,arguments),ji){if(ji){var H=Vs;ji=!1,Vs=null}else throw Error(t(198));An||(An=!0,oa=H)}}function Cn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,s.flags&4098&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Fi(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function kn(r){if(Cn(r)!==r)throw Error(t(188))}function Nl(r){var s=r.alternate;if(!s){if(s=Cn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return kn(f),r;if(g===c)return kn(f),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=g;else{for(var _=!1,A=f.child;A;){if(A===a){_=!0,a=f,c=g;break}if(A===c){_=!0,c=f,a=g;break}A=A.sibling}if(!_){for(A=g.child;A;){if(A===a){_=!0,a=g,c=f;break}if(A===c){_=!0,c=g,a=f;break}A=A.sibling}if(!_)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function aa(r){return r=Nl(r),r!==null?Ms(r):null}function Ms(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Ms(r);if(s!==null)return s;r=r.sibling}return null}var js=e.unstable_scheduleCallback,la=e.unstable_cancelCallback,Dl=e.unstable_shouldYield,Jc=e.unstable_requestPaint,qe=e.unstable_now,Ol=e.unstable_getCurrentPriorityLevel,Ui=e.unstable_ImmediatePriority,Hr=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,ua=e.unstable_LowPriority,Ll=e.unstable_IdlePriority,zi=null,rn=null;function Vl(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(zi,r,void 0,(r.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:Ml,ca=Math.log,bl=Math.LN2;function Ml(r){return r>>>=0,r===0?32:31-(ca(r)/bl|0)|0}var Fs=64,Us=4194304;function Wr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Bi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,_=a&268435455;if(_!==0){var A=_&~f;A!==0?c=Wr(A):(g&=_,g!==0&&(c=Wr(g)))}else _=a&~f,_!==0?c=Wr(_):g!==0&&(c=Wr(g));if(c===0)return 0;if(s!==0&&s!==c&&!(s&f)&&(f=c&-c,g=s&-s,f>=g||f===16&&(g&4194240)!==0))return s;if(c&4&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Bt(s),f=1<<a,c|=r[a],s&=~f;return c}function Zc(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var _=31-Bt(g),A=1<<_,x=f[_];x===-1?(!(A&a)||A&c)&&(f[_]=Zc(A,s)):x<=s&&(r.expiredLanes|=A),g&=~A}}function sn(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function $i(){var r=Fs;return Fs<<=1,!(Fs&4194240)&&(Fs=64),r}function Gr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function Kr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Bt(s),r[s]=a}function Be(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var f=31-Bt(a),g=1<<f;s[f]=0,c[f]=-1,r[f]=-1,a&=~g}}function Qr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Bt(a),f=1<<c;f&s|r[c]&s&&(r[c]|=s),a&=~f}}var xe=0;function Yr(r){return r&=-r,1<r?4<r?r&268435455?16:536870912:4:1}var jl,zs,Fl,Ul,zl,ha=!1,Gn=[],Rt=null,Pn=null,xn=null,Xr=new Map,pn=new Map,Kn=[],eh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(r,s){switch(r){case"focusin":case"focusout":Rt=null;break;case"dragenter":case"dragleave":Pn=null;break;case"mouseover":case"mouseout":xn=null;break;case"pointerover":case"pointerout":Xr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(s.pointerId)}}function Gt(r,s,a,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Aa(s),s!==null&&zs(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function th(r,s,a,c,f){switch(s){case"focusin":return Rt=Gt(Rt,r,s,a,c,f),!0;case"dragenter":return Pn=Gt(Pn,r,s,a,c,f),!0;case"mouseover":return xn=Gt(xn,r,s,a,c,f),!0;case"pointerover":var g=f.pointerId;return Xr.set(g,Gt(Xr.get(g)||null,r,s,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,pn.set(g,Gt(pn.get(g)||null,r,s,a,c,f)),!0}return!1}function $l(r){var s=Ki(r.target);if(s!==null){var a=Cn(s);if(a!==null){if(s=a.tag,s===13){if(s=Fi(a),s!==null){r.blockedOn=s,zl(r.priority,function(){Fl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function vr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=Bs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);Vi=c,a.target.dispatchEvent(c),Vi=null}else return s=Aa(a),s!==null&&zs(s),r.blockedOn=a,!1;s.shift()}return!0}function qi(r,s,a){vr(r)&&a.delete(s)}function ql(){ha=!1,Rt!==null&&vr(Rt)&&(Rt=null),Pn!==null&&vr(Pn)&&(Pn=null),xn!==null&&vr(xn)&&(xn=null),Xr.forEach(qi),pn.forEach(qi)}function Nn(r,s){r.blockedOn===s&&(r.blockedOn=null,ha||(ha=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ql)))}function Dn(r){function s(f){return Nn(f,r)}if(0<Gn.length){Nn(Gn[0],r);for(var a=1;a<Gn.length;a++){var c=Gn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Rt!==null&&Nn(Rt,r),Pn!==null&&Nn(Pn,r),xn!==null&&Nn(xn,r),Xr.forEach(s),pn.forEach(s),a=0;a<Kn.length;a++)c=Kn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Kn.length&&(a=Kn[0],a.blockedOn===null);)$l(a),a.blockedOn===null&&Kn.shift()}var _r=ce.ReactCurrentBatchConfig,Jr=!0;function Qe(r,s,a,c){var f=xe,g=_r.transition;_r.transition=null;try{xe=1,da(r,s,a,c)}finally{xe=f,_r.transition=g}}function nh(r,s,a,c){var f=xe,g=_r.transition;_r.transition=null;try{xe=4,da(r,s,a,c)}finally{xe=f,_r.transition=g}}function da(r,s,a,c){if(Jr){var f=Bs(r,s,a,c);if(f===null)fh(r,s,c,Hi,a),Bl(r,c);else if(th(f,r,s,a,c))c.stopPropagation();else if(Bl(r,c),s&4&&-1<eh.indexOf(r)){for(;f!==null;){var g=Aa(f);if(g!==null&&jl(g),g=Bs(r,s,a,c),g===null&&fh(r,s,c,Hi,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else fh(r,s,c,null,a)}}var Hi=null;function Bs(r,s,a,c){if(Hi=null,r=Ns(c),r=Ki(r),r!==null)if(s=Cn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Fi(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Hi=r,null}function fa(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ol()){case Ui:return 1;case Hr:return 4;case fn:case ua:return 16;case Ll:return 536870912;default:return 16}default:return 16}}var on=null,$s=null,Kt=null;function pa(){if(Kt)return Kt;var r,s=$s,a=s.length,c,f="value"in on?on.value:on.textContent,g=f.length;for(r=0;r<a&&s[r]===f[r];r++);var _=a-r;for(c=1;c<=_&&s[a-c]===f[g-c];c++);return Kt=f.slice(r,1<c?1-c:void 0)}function qs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Qn(){return!0}function ma(){return!1}function At(r){function s(a,c,f,g,_){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var A in r)r.hasOwnProperty(A)&&(a=r[A],this[A]=a?a(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qn:ma,this.isPropagationStopped=ma,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qn)},persist:function(){},isPersistent:Qn}),s}var On={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hs=At(On),Yn=se({},On,{view:0,detail:0}),rh=At(Yn),Ws,wr,Zr,Wi=se({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Zr&&(Zr&&r.type==="mousemove"?(Ws=r.screenX-Zr.screenX,wr=r.screenY-Zr.screenY):wr=Ws=0,Zr=r),Ws)},movementY:function(r){return"movementY"in r?r.movementY:wr}}),Gs=At(Wi),ga=se({},Wi,{dataTransfer:0}),Hl=At(ga),Ks=se({},Yn,{relatedTarget:0}),Qs=At(Ks),Wl=se({},On,{animationName:0,elapsedTime:0,pseudoElement:0}),Er=At(Wl),Gl=se({},On,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Kl=At(Gl),Ql=se({},On,{data:0}),ya=At(Ql),Ys={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$t={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Yl[r])?!!s[r]:!1}function Xn(){return Xl}var u=se({},Yn,{key:function(r){if(r.key){var s=Ys[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=qs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?$t[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xn,charCode:function(r){return r.type==="keypress"?qs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?qs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),m=At(u),v=se({},Wi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=At(v),F=se({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xn}),W=At(F),ne=se({},On,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ue=At(ne),dt=se({},Wi,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=At(dt),wt=[9,13,27,32],ot=d&&"CompositionEvent"in window,mn=null;d&&"documentMode"in document&&(mn=document.documentMode);var an=d&&"TextEvent"in window&&!mn,Gi=d&&(!ot||mn&&8<mn&&11>=mn),Xs=" ",Cp=!1;function kp(r,s){switch(r){case"keyup":return wt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Js=!1;function P0(r,s){switch(r){case"compositionend":return Pp(s);case"keypress":return s.which!==32?null:(Cp=!0,Xs);case"textInput":return r=s.data,r===Xs&&Cp?null:r;default:return null}}function x0(r,s){if(Js)return r==="compositionend"||!ot&&kp(r,s)?(r=pa(),Kt=$s=on=null,Js=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Gi&&s.locale!=="ko"?null:s.data;default:return null}}var N0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!N0[r.type]:s==="textarea"}function Np(r,s,a,c){Wn(c),s=nu(s,"onChange"),0<s.length&&(a=new Hs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var va=null,_a=null;function D0(r){Qp(r,0)}function Jl(r){var s=ro(r);if(As(s))return r}function O0(r,s){if(r==="change")return s}var Dp=!1;if(d){var ih;if(d){var sh="oninput"in document;if(!sh){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),sh=typeof Op.oninput=="function"}ih=sh}else ih=!1;Dp=ih&&(!document.documentMode||9<document.documentMode)}function Lp(){va&&(va.detachEvent("onpropertychange",Vp),_a=va=null)}function Vp(r){if(r.propertyName==="value"&&Jl(_a)){var s=[];Np(s,_a,r,Ns(r)),sa(D0,s)}}function L0(r,s,a){r==="focusin"?(Lp(),va=s,_a=a,va.attachEvent("onpropertychange",Vp)):r==="focusout"&&Lp()}function V0(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Jl(_a)}function b0(r,s){if(r==="click")return Jl(s)}function M0(r,s){if(r==="input"||r==="change")return Jl(s)}function j0(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:j0;function wa(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(s,f)||!Ln(r[f],s[f]))return!1}return!0}function bp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Mp(r,s){var a=bp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=bp(a)}}function jp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?jp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Fp(){for(var r=window,s=$r();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=$r(r.document)}return s}function oh(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function F0(r){var s=Fp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&jp(a.ownerDocument.documentElement,a)){if(c!==null&&oh(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=Mp(a,g);var _=Mp(a,c);f&&_&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==_.node||r.focusOffset!==_.offset)&&(s=s.createRange(),s.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(_.node,_.offset)):(s.setEnd(_.node,_.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var U0=d&&"documentMode"in document&&11>=document.documentMode,Zs=null,ah=null,Ea=null,lh=!1;function Up(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;lh||Zs==null||Zs!==$r(c)||(c=Zs,"selectionStart"in c&&oh(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ea&&wa(Ea,c)||(Ea=c,c=nu(ah,"onSelect"),0<c.length&&(s=new Hs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=Zs)))}function Zl(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var eo={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionend:Zl("Transition","TransitionEnd")},uh={},zp={};d&&(zp=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function eu(r){if(uh[r])return uh[r];if(!eo[r])return r;var s=eo[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in zp)return uh[r]=s[a];return r}var Bp=eu("animationend"),$p=eu("animationiteration"),qp=eu("animationstart"),Hp=eu("transitionend"),Wp=new Map,Gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(r,s){Wp.set(r,s),l(s,[r])}for(var ch=0;ch<Gp.length;ch++){var hh=Gp[ch],z0=hh.toLowerCase(),B0=hh[0].toUpperCase()+hh.slice(1);ei(z0,"on"+B0)}ei(Bp,"onAnimationEnd"),ei($p,"onAnimationIteration"),ei(qp,"onAnimationStart"),ei("dblclick","onDoubleClick"),ei("focusin","onFocus"),ei("focusout","onBlur"),ei(Hp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Kp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,xl(c,s,void 0,r),r.currentTarget=null}function Qp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var _=c.length-1;0<=_;_--){var A=c[_],x=A.instance,H=A.currentTarget;if(A=A.listener,x!==g&&f.isPropagationStopped())break e;Kp(f,A,H),g=x}else for(_=0;_<c.length;_++){if(A=c[_],x=A.instance,H=A.currentTarget,A=A.listener,x!==g&&f.isPropagationStopped())break e;Kp(f,A,H),g=x}}}if(An)throw r=oa,An=!1,oa=null,r}function We(r,s){var a=s[_h];a===void 0&&(a=s[_h]=new Set);var c=r+"__bubble";a.has(c)||(Yp(s,r,2,!1),a.add(c))}function dh(r,s,a){var c=0;s&&(c|=4),Yp(a,r,c,s)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Ia(r){if(!r[tu]){r[tu]=!0,i.forEach(function(a){a!=="selectionchange"&&($0.has(a)||dh(a,!1,r),dh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tu]||(s[tu]=!0,dh("selectionchange",!1,s))}}function Yp(r,s,a,c){switch(fa(s)){case 1:var f=Qe;break;case 4:f=nh;break;default:f=da}a=f.bind(null,s,a,r),f=void 0,!Ls||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,a,{capture:!0,passive:f}):r.addEventListener(s,a,!0):f!==void 0?r.addEventListener(s,a,{passive:f}):r.addEventListener(s,a,!1)}function fh(r,s,a,c,f){var g=c;if(!(s&1)&&!(s&2)&&c!==null)e:for(;;){if(c===null)return;var _=c.tag;if(_===3||_===4){var A=c.stateNode.containerInfo;if(A===f||A.nodeType===8&&A.parentNode===f)break;if(_===4)for(_=c.return;_!==null;){var x=_.tag;if((x===3||x===4)&&(x=_.stateNode.containerInfo,x===f||x.nodeType===8&&x.parentNode===f))return;_=_.return}for(;A!==null;){if(_=Ki(A),_===null)return;if(x=_.tag,x===5||x===6){c=g=_;continue e}A=A.parentNode}}c=c.return}sa(function(){var H=g,J=Ns(a),Z=[];e:{var X=Wp.get(r);if(X!==void 0){var ie=Hs,ue=r;switch(r){case"keypress":if(qs(a)===0)break e;case"keydown":case"keyup":ie=m;break;case"focusin":ue="focus",ie=Qs;break;case"focusout":ue="blur",ie=Qs;break;case"beforeblur":case"afterblur":ie=Qs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=Hl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=W;break;case Bp:case $p:case qp:ie=Er;break;case Hp:ie=Ue;break;case"scroll":ie=rh;break;case"wheel":ie=Oe;break;case"copy":case"cut":case"paste":ie=Kl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=T}var he=(s&4)!==0,it=!he&&r==="scroll",U=he?X!==null?X+"Capture":null:X;he=[];for(var O=H,B;O!==null;){B=O;var ee=B.stateNode;if(B.tag===5&&ee!==null&&(B=ee,U!==null&&(ee=rt(O,U),ee!=null&&he.push(Sa(O,ee,B)))),it)break;O=O.return}0<he.length&&(X=new ie(X,ue,null,a,J),Z.push({event:X,listeners:he}))}}if(!(s&7)){e:{if(X=r==="mouseover"||r==="pointerover",ie=r==="mouseout"||r==="pointerout",X&&a!==Vi&&(ue=a.relatedTarget||a.fromElement)&&(Ki(ue)||ue[Tr]))break e;if((ie||X)&&(X=J.window===J?J:(X=J.ownerDocument)?X.defaultView||X.parentWindow:window,ie?(ue=a.relatedTarget||a.toElement,ie=H,ue=ue?Ki(ue):null,ue!==null&&(it=Cn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(ie=null,ue=H),ie!==ue)){if(he=Gs,ee="onMouseLeave",U="onMouseEnter",O="mouse",(r==="pointerout"||r==="pointerover")&&(he=T,ee="onPointerLeave",U="onPointerEnter",O="pointer"),it=ie==null?X:ro(ie),B=ue==null?X:ro(ue),X=new he(ee,O+"leave",ie,a,J),X.target=it,X.relatedTarget=B,ee=null,Ki(J)===H&&(he=new he(U,O+"enter",ue,a,J),he.target=B,he.relatedTarget=it,ee=he),it=ee,ie&&ue)t:{for(he=ie,U=ue,O=0,B=he;B;B=to(B))O++;for(B=0,ee=U;ee;ee=to(ee))B++;for(;0<O-B;)he=to(he),O--;for(;0<B-O;)U=to(U),B--;for(;O--;){if(he===U||U!==null&&he===U.alternate)break t;he=to(he),U=to(U)}he=null}else he=null;ie!==null&&Xp(Z,X,ie,he,!1),ue!==null&&it!==null&&Xp(Z,it,ue,he,!0)}}e:{if(X=H?ro(H):window,ie=X.nodeName&&X.nodeName.toLowerCase(),ie==="select"||ie==="input"&&X.type==="file")var de=O0;else if(xp(X))if(Dp)de=M0;else{de=V0;var ye=L0}else(ie=X.nodeName)&&ie.toLowerCase()==="input"&&(X.type==="checkbox"||X.type==="radio")&&(de=b0);if(de&&(de=de(r,H))){Np(Z,de,a,J);break e}ye&&ye(r,X,H),r==="focusout"&&(ye=X._wrapperState)&&ye.controlled&&X.type==="number"&&ks(X,"number",X.value)}switch(ye=H?ro(H):window,r){case"focusin":(xp(ye)||ye.contentEditable==="true")&&(Zs=ye,ah=H,Ea=null);break;case"focusout":Ea=ah=Zs=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,Up(Z,a,J);break;case"selectionchange":if(U0)break;case"keydown":case"keyup":Up(Z,a,J)}var ve;if(ot)e:{switch(r){case"compositionstart":var we="onCompositionStart";break e;case"compositionend":we="onCompositionEnd";break e;case"compositionupdate":we="onCompositionUpdate";break e}we=void 0}else Js?kp(r,a)&&(we="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(we="onCompositionStart");we&&(Gi&&a.locale!=="ko"&&(Js||we!=="onCompositionStart"?we==="onCompositionEnd"&&Js&&(ve=pa()):(on=J,$s="value"in on?on.value:on.textContent,Js=!0)),ye=nu(H,we),0<ye.length&&(we=new ya(we,r,null,a,J),Z.push({event:we,listeners:ye}),ve?we.data=ve:(ve=Pp(a),ve!==null&&(we.data=ve)))),(ve=an?P0(r,a):x0(r,a))&&(H=nu(H,"onBeforeInput"),0<H.length&&(J=new ya("onBeforeInput","beforeinput",null,a,J),Z.push({event:J,listeners:H}),J.data=ve))}Qp(Z,s)})}function Sa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function nu(r,s){for(var a=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=rt(r,a),g!=null&&c.unshift(Sa(r,g,f)),g=rt(r,s),g!=null&&c.push(Sa(r,g,f))),r=r.return}return c}function to(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function Xp(r,s,a,c,f){for(var g=s._reactName,_=[];a!==null&&a!==c;){var A=a,x=A.alternate,H=A.stateNode;if(x!==null&&x===c)break;A.tag===5&&H!==null&&(A=H,f?(x=rt(a,g),x!=null&&_.unshift(Sa(a,x,A))):f||(x=rt(a,g),x!=null&&_.push(Sa(a,x,A)))),a=a.return}_.length!==0&&r.push({event:s,listeners:_})}var q0=/\r\n?/g,H0=/\u0000|\uFFFD/g;function Jp(r){return(typeof r=="string"?r:""+r).replace(q0,`
`).replace(H0,"")}function ru(r,s,a){if(s=Jp(s),Jp(r)!==s&&a)throw Error(t(425))}function iu(){}var ph=null,mh=null;function gh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var yh=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,Zp=typeof Promise=="function"?Promise:void 0,G0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zp<"u"?function(r){return Zp.resolve(null).then(r).catch(K0)}:yh;function K0(r){setTimeout(function(){throw r})}function vh(r,s){var a=s,c=0;do{var f=a.nextSibling;if(r.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){r.removeChild(f),Dn(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Dn(s)}function ti(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function em(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var no=Math.random().toString(36).slice(2),Jn="__reactFiber$"+no,Ra="__reactProps$"+no,Tr="__reactContainer$"+no,_h="__reactEvents$"+no,Q0="__reactListeners$"+no,Y0="__reactHandles$"+no;function Ki(r){var s=r[Jn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Tr]||a[Jn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=em(r);r!==null;){if(a=r[Jn])return a;r=em(r)}return s}r=a,a=r.parentNode}return null}function Aa(r){return r=r[Jn]||r[Tr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ro(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function su(r){return r[Ra]||null}var wh=[],io=-1;function ni(r){return{current:r}}function Ge(r){0>io||(r.current=wh[io],wh[io]=null,io--)}function He(r,s){io++,wh[io]=r.current,r.current=s}var ri={},Lt=ni(ri),Qt=ni(!1),Qi=ri;function so(r,s){var a=r.type.contextTypes;if(!a)return ri;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=f),f}function Yt(r){return r=r.childContextTypes,r!=null}function ou(){Ge(Qt),Ge(Lt)}function tm(r,s,a){if(Lt.current!==ri)throw Error(t(168));He(Lt,s),He(Qt,a)}function nm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in s))throw Error(t(108,Me(r)||"Unknown",f));return se({},a,c)}function au(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ri,Qi=Lt.current,He(Lt,r),He(Qt,Qt.current),!0}function rm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=nm(r,s,Qi),c.__reactInternalMemoizedMergedChildContext=r,Ge(Qt),Ge(Lt),He(Lt,r)):Ge(Qt),He(Qt,a)}var Ir=null,lu=!1,Eh=!1;function im(r){Ir===null?Ir=[r]:Ir.push(r)}function X0(r){lu=!0,im(r)}function ii(){if(!Eh&&Ir!==null){Eh=!0;var r=0,s=xe;try{var a=Ir;for(xe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Ir=null,lu=!1}catch(f){throw Ir!==null&&(Ir=Ir.slice(r+1)),js(Ui,ii),f}finally{xe=s,Eh=!1}}return null}var oo=[],ao=0,uu=null,cu=0,gn=[],yn=0,Yi=null,Sr=1,Rr="";function Xi(r,s){oo[ao++]=cu,oo[ao++]=uu,uu=r,cu=s}function sm(r,s,a){gn[yn++]=Sr,gn[yn++]=Rr,gn[yn++]=Yi,Yi=r;var c=Sr;r=Rr;var f=32-Bt(c)-1;c&=~(1<<f),a+=1;var g=32-Bt(s)+f;if(30<g){var _=f-f%5;g=(c&(1<<_)-1).toString(32),c>>=_,f-=_,Sr=1<<32-Bt(s)+f|a<<f|c,Rr=g+r}else Sr=1<<g|a<<f|c,Rr=r}function Th(r){r.return!==null&&(Xi(r,1),sm(r,1,0))}function Ih(r){for(;r===uu;)uu=oo[--ao],oo[ao]=null,cu=oo[--ao],oo[ao]=null;for(;r===Yi;)Yi=gn[--yn],gn[yn]=null,Rr=gn[--yn],gn[yn]=null,Sr=gn[--yn],gn[yn]=null}var ln=null,un=null,Ye=!1,Vn=null;function om(r,s){var a=En(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function am(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,ln=r,un=ti(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,ln=r,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Yi!==null?{id:Sr,overflow:Rr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=En(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,ln=r,un=null,!0):!1;default:return!1}}function Sh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Rh(r){if(Ye){var s=un;if(s){var a=s;if(!am(r,s)){if(Sh(r))throw Error(t(418));s=ti(a.nextSibling);var c=ln;s&&am(r,s)?om(c,a):(r.flags=r.flags&-4097|2,Ye=!1,ln=r)}}else{if(Sh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,ln=r}}}function lm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;ln=r}function hu(r){if(r!==ln)return!1;if(!Ye)return lm(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!gh(r.type,r.memoizedProps)),s&&(s=un)){if(Sh(r))throw um(),Error(t(418));for(;s;)om(r,s),s=ti(s.nextSibling)}if(lm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){un=ti(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}un=null}}else un=ln?ti(r.stateNode.nextSibling):null;return!0}function um(){for(var r=un;r;)r=ti(r.nextSibling)}function lo(){un=ln=null,Ye=!1}function Ah(r){Vn===null?Vn=[r]:Vn.push(r)}var J0=ce.ReactCurrentBatchConfig;function Ca(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var f=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(_){var A=f.refs;_===null?delete A[g]:A[g]=_},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function du(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function cm(r){var s=r._init;return s(r._payload)}function hm(r){function s(U,O){if(r){var B=U.deletions;B===null?(U.deletions=[O],U.flags|=16):B.push(O)}}function a(U,O){if(!r)return null;for(;O!==null;)s(U,O),O=O.sibling;return null}function c(U,O){for(U=new Map;O!==null;)O.key!==null?U.set(O.key,O):U.set(O.index,O),O=O.sibling;return U}function f(U,O){return U=di(U,O),U.index=0,U.sibling=null,U}function g(U,O,B){return U.index=B,r?(B=U.alternate,B!==null?(B=B.index,B<O?(U.flags|=2,O):B):(U.flags|=2,O)):(U.flags|=1048576,O)}function _(U){return r&&U.alternate===null&&(U.flags|=2),U}function A(U,O,B,ee){return O===null||O.tag!==6?(O=yd(B,U.mode,ee),O.return=U,O):(O=f(O,B),O.return=U,O)}function x(U,O,B,ee){var de=B.type;return de===P?J(U,O,B.props.children,ee,B.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&cm(de)===O.type)?(ee=f(O,B.props),ee.ref=Ca(U,O,B),ee.return=U,ee):(ee=bu(B.type,B.key,B.props,null,U.mode,ee),ee.ref=Ca(U,O,B),ee.return=U,ee)}function H(U,O,B,ee){return O===null||O.tag!==4||O.stateNode.containerInfo!==B.containerInfo||O.stateNode.implementation!==B.implementation?(O=vd(B,U.mode,ee),O.return=U,O):(O=f(O,B.children||[]),O.return=U,O)}function J(U,O,B,ee,de){return O===null||O.tag!==7?(O=ss(B,U.mode,ee,de),O.return=U,O):(O=f(O,B),O.return=U,O)}function Z(U,O,B){if(typeof O=="string"&&O!==""||typeof O=="number")return O=yd(""+O,U.mode,B),O.return=U,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Te:return B=bu(O.type,O.key,O.props,null,U.mode,B),B.ref=Ca(U,null,O),B.return=U,B;case ge:return O=vd(O,U.mode,B),O.return=U,O;case Ot:var ee=O._init;return Z(U,ee(O._payload),B)}if(fr(O)||me(O))return O=ss(O,U.mode,B,null),O.return=U,O;du(U,O)}return null}function X(U,O,B,ee){var de=O!==null?O.key:null;if(typeof B=="string"&&B!==""||typeof B=="number")return de!==null?null:A(U,O,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case Te:return B.key===de?x(U,O,B,ee):null;case ge:return B.key===de?H(U,O,B,ee):null;case Ot:return de=B._init,X(U,O,de(B._payload),ee)}if(fr(B)||me(B))return de!==null?null:J(U,O,B,ee,null);du(U,B)}return null}function ie(U,O,B,ee,de){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return U=U.get(B)||null,A(O,U,""+ee,de);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case Te:return U=U.get(ee.key===null?B:ee.key)||null,x(O,U,ee,de);case ge:return U=U.get(ee.key===null?B:ee.key)||null,H(O,U,ee,de);case Ot:var ye=ee._init;return ie(U,O,B,ye(ee._payload),de)}if(fr(ee)||me(ee))return U=U.get(B)||null,J(O,U,ee,de,null);du(O,ee)}return null}function ue(U,O,B,ee){for(var de=null,ye=null,ve=O,we=O=0,It=null;ve!==null&&we<B.length;we++){ve.index>we?(It=ve,ve=null):It=ve.sibling;var be=X(U,ve,B[we],ee);if(be===null){ve===null&&(ve=It);break}r&&ve&&be.alternate===null&&s(U,ve),O=g(be,O,we),ye===null?de=be:ye.sibling=be,ye=be,ve=It}if(we===B.length)return a(U,ve),Ye&&Xi(U,we),de;if(ve===null){for(;we<B.length;we++)ve=Z(U,B[we],ee),ve!==null&&(O=g(ve,O,we),ye===null?de=ve:ye.sibling=ve,ye=ve);return Ye&&Xi(U,we),de}for(ve=c(U,ve);we<B.length;we++)It=ie(ve,U,we,B[we],ee),It!==null&&(r&&It.alternate!==null&&ve.delete(It.key===null?we:It.key),O=g(It,O,we),ye===null?de=It:ye.sibling=It,ye=It);return r&&ve.forEach(function(fi){return s(U,fi)}),Ye&&Xi(U,we),de}function he(U,O,B,ee){var de=me(B);if(typeof de!="function")throw Error(t(150));if(B=de.call(B),B==null)throw Error(t(151));for(var ye=de=null,ve=O,we=O=0,It=null,be=B.next();ve!==null&&!be.done;we++,be=B.next()){ve.index>we?(It=ve,ve=null):It=ve.sibling;var fi=X(U,ve,be.value,ee);if(fi===null){ve===null&&(ve=It);break}r&&ve&&fi.alternate===null&&s(U,ve),O=g(fi,O,we),ye===null?de=fi:ye.sibling=fi,ye=fi,ve=It}if(be.done)return a(U,ve),Ye&&Xi(U,we),de;if(ve===null){for(;!be.done;we++,be=B.next())be=Z(U,be.value,ee),be!==null&&(O=g(be,O,we),ye===null?de=be:ye.sibling=be,ye=be);return Ye&&Xi(U,we),de}for(ve=c(U,ve);!be.done;we++,be=B.next())be=ie(ve,U,we,be.value,ee),be!==null&&(r&&be.alternate!==null&&ve.delete(be.key===null?we:be.key),O=g(be,O,we),ye===null?de=be:ye.sibling=be,ye=be);return r&&ve.forEach(function(NE){return s(U,NE)}),Ye&&Xi(U,we),de}function it(U,O,B,ee){if(typeof B=="object"&&B!==null&&B.type===P&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case Te:e:{for(var de=B.key,ye=O;ye!==null;){if(ye.key===de){if(de=B.type,de===P){if(ye.tag===7){a(U,ye.sibling),O=f(ye,B.props.children),O.return=U,U=O;break e}}else if(ye.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===Ot&&cm(de)===ye.type){a(U,ye.sibling),O=f(ye,B.props),O.ref=Ca(U,ye,B),O.return=U,U=O;break e}a(U,ye);break}else s(U,ye);ye=ye.sibling}B.type===P?(O=ss(B.props.children,U.mode,ee,B.key),O.return=U,U=O):(ee=bu(B.type,B.key,B.props,null,U.mode,ee),ee.ref=Ca(U,O,B),ee.return=U,U=ee)}return _(U);case ge:e:{for(ye=B.key;O!==null;){if(O.key===ye)if(O.tag===4&&O.stateNode.containerInfo===B.containerInfo&&O.stateNode.implementation===B.implementation){a(U,O.sibling),O=f(O,B.children||[]),O.return=U,U=O;break e}else{a(U,O);break}else s(U,O);O=O.sibling}O=vd(B,U.mode,ee),O.return=U,U=O}return _(U);case Ot:return ye=B._init,it(U,O,ye(B._payload),ee)}if(fr(B))return ue(U,O,B,ee);if(me(B))return he(U,O,B,ee);du(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"?(B=""+B,O!==null&&O.tag===6?(a(U,O.sibling),O=f(O,B),O.return=U,U=O):(a(U,O),O=yd(B,U.mode,ee),O.return=U,U=O),_(U)):a(U,O)}return it}var uo=hm(!0),dm=hm(!1),fu=ni(null),pu=null,co=null,Ch=null;function kh(){Ch=co=pu=null}function Ph(r){var s=fu.current;Ge(fu),r._currentValue=s}function xh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function ho(r,s){pu=r,Ch=co=null,r=r.dependencies,r!==null&&r.firstContext!==null&&(r.lanes&s&&(Xt=!0),r.firstContext=null)}function vn(r){var s=r._currentValue;if(Ch!==r)if(r={context:r,memoizedValue:s,next:null},co===null){if(pu===null)throw Error(t(308));co=r,pu.dependencies={lanes:0,firstContext:r}}else co=co.next=r;return s}var Ji=null;function Nh(r){Ji===null?Ji=[r]:Ji.push(r)}function fm(r,s,a,c){var f=s.interleaved;return f===null?(a.next=a,Nh(s)):(a.next=f.next,f.next=a),s.interleaved=a,Ar(r,c)}function Ar(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var si=!1;function Dh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Cr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function oi(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,Ar(r,a)}return f=c.interleaved,f===null?(s.next=s,Nh(c)):(s.next=f.next,f.next=s),c.interleaved=s,Ar(r,a)}function mu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}function mm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var _={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=_:g=g.next=_,a=a.next}while(a!==null);g===null?f=g=s:g=g.next=s}else f=g=s;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function gu(r,s,a,c){var f=r.updateQueue;si=!1;var g=f.firstBaseUpdate,_=f.lastBaseUpdate,A=f.shared.pending;if(A!==null){f.shared.pending=null;var x=A,H=x.next;x.next=null,_===null?g=H:_.next=H,_=x;var J=r.alternate;J!==null&&(J=J.updateQueue,A=J.lastBaseUpdate,A!==_&&(A===null?J.firstBaseUpdate=H:A.next=H,J.lastBaseUpdate=x))}if(g!==null){var Z=f.baseState;_=0,J=H=x=null,A=g;do{var X=A.lane,ie=A.eventTime;if((c&X)===X){J!==null&&(J=J.next={eventTime:ie,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ue=r,he=A;switch(X=s,ie=a,he.tag){case 1:if(ue=he.payload,typeof ue=="function"){Z=ue.call(ie,Z,X);break e}Z=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=he.payload,X=typeof ue=="function"?ue.call(ie,Z,X):ue,X==null)break e;Z=se({},Z,X);break e;case 2:si=!0}}A.callback!==null&&A.lane!==0&&(r.flags|=64,X=f.effects,X===null?f.effects=[A]:X.push(A))}else ie={eventTime:ie,lane:X,tag:A.tag,payload:A.payload,callback:A.callback,next:null},J===null?(H=J=ie,x=Z):J=J.next=ie,_|=X;if(A=A.next,A===null){if(A=f.shared.pending,A===null)break;X=A,A=X.next,X.next=null,f.lastBaseUpdate=X,f.shared.pending=null}}while(!0);if(J===null&&(x=Z),f.baseState=x,f.firstBaseUpdate=H,f.lastBaseUpdate=J,s=f.shared.interleaved,s!==null){f=s;do _|=f.lane,f=f.next;while(f!==s)}else g===null&&(f.shared.lanes=0);ts|=_,r.lanes=_,r.memoizedState=Z}}function gm(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ka={},Zn=ni(ka),Pa=ni(ka),xa=ni(ka);function Zi(r){if(r===ka)throw Error(t(174));return r}function Oh(r,s){switch(He(xa,s),He(Pa,r),He(Zn,ka),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ht(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=ht(s,r)}Ge(Zn),He(Zn,s)}function fo(){Ge(Zn),Ge(Pa),Ge(xa)}function ym(r){Zi(xa.current);var s=Zi(Zn.current),a=ht(s,r.type);s!==a&&(He(Pa,r),He(Zn,a))}function Lh(r){Pa.current===r&&(Ge(Zn),Ge(Pa))}var Xe=ni(0);function yu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Vh=[];function bh(){for(var r=0;r<Vh.length;r++)Vh[r]._workInProgressVersionPrimary=null;Vh.length=0}var vu=ce.ReactCurrentDispatcher,Mh=ce.ReactCurrentBatchConfig,es=0,Je=null,ft=null,Et=null,_u=!1,Na=!1,Da=0,Z0=0;function Vt(){throw Error(t(321))}function jh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Ln(r[a],s[a]))return!1;return!0}function Fh(r,s,a,c,f,g){if(es=g,Je=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,vu.current=r===null||r.memoizedState===null?rE:iE,r=a(c,f),Na){g=0;do{if(Na=!1,Da=0,25<=g)throw Error(t(301));g+=1,Et=ft=null,s.updateQueue=null,vu.current=sE,r=a(c,f)}while(Na)}if(vu.current=Tu,s=ft!==null&&ft.next!==null,es=0,Et=ft=Je=null,_u=!1,s)throw Error(t(300));return r}function Uh(){var r=Da!==0;return Da=0,r}function er(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=r:Et=Et.next=r,Et}function _n(){if(ft===null){var r=Je.alternate;r=r!==null?r.memoizedState:null}else r=ft.next;var s=Et===null?Je.memoizedState:Et.next;if(s!==null)Et=s,ft=r;else{if(r===null)throw Error(t(310));ft=r,r={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Et===null?Je.memoizedState=Et=r:Et=Et.next=r}return Et}function Oa(r,s){return typeof s=="function"?s(r):s}function zh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=ft,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var _=f.next;f.next=g.next,g.next=_}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var A=_=null,x=null,H=g;do{var J=H.lane;if((es&J)===J)x!==null&&(x=x.next={lane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),c=H.hasEagerState?H.eagerState:r(c,H.action);else{var Z={lane:J,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null};x===null?(A=x=Z,_=c):x=x.next=Z,Je.lanes|=J,ts|=J}H=H.next}while(H!==null&&H!==g);x===null?_=c:x.next=A,Ln(c,s.memoizedState)||(Xt=!0),s.memoizedState=c,s.baseState=_,s.baseQueue=x,a.lastRenderedState=c}if(r=a.interleaved,r!==null){f=r;do g=f.lane,Je.lanes|=g,ts|=g,f=f.next;while(f!==r)}else f===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Bh(r){var s=_n(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,f=a.pending,g=s.memoizedState;if(f!==null){a.pending=null;var _=f=f.next;do g=r(g,_.action),_=_.next;while(_!==f);Ln(g,s.memoizedState)||(Xt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function vm(){}function _m(r,s){var a=Je,c=_n(),f=s(),g=!Ln(c.memoizedState,f);if(g&&(c.memoizedState=f,Xt=!0),c=c.queue,$h(Tm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,La(9,Em.bind(null,a,c,f,s),void 0,null),Tt===null)throw Error(t(349));es&30||wm(a,s,f)}return f}function wm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Em(r,s,a,c){s.value=a,s.getSnapshot=c,Im(s)&&Sm(r)}function Tm(r,s,a){return a(function(){Im(s)&&Sm(r)})}function Im(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Ln(r,a)}catch{return!0}}function Sm(r){var s=Ar(r,1);s!==null&&Fn(s,r,1,-1)}function Rm(r){var s=er();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:r},s.queue=r,r=r.dispatch=nE.bind(null,Je,r),[s.memoizedState,r]}function La(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Je.updateQueue,s===null?(s={lastEffect:null,stores:null},Je.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function Am(){return _n().memoizedState}function wu(r,s,a,c){var f=er();Je.flags|=r,f.memoizedState=La(1|s,a,void 0,c===void 0?null:c)}function Eu(r,s,a,c){var f=_n();c=c===void 0?null:c;var g=void 0;if(ft!==null){var _=ft.memoizedState;if(g=_.destroy,c!==null&&jh(c,_.deps)){f.memoizedState=La(s,a,g,c);return}}Je.flags|=r,f.memoizedState=La(1|s,a,g,c)}function Cm(r,s){return wu(8390656,8,r,s)}function $h(r,s){return Eu(2048,8,r,s)}function km(r,s){return Eu(4,2,r,s)}function Pm(r,s){return Eu(4,4,r,s)}function xm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Nm(r,s,a){return a=a!=null?a.concat([r]):null,Eu(4,4,xm.bind(null,s,r),a)}function qh(){}function Dm(r,s){var a=_n();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&jh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Om(r,s){var a=_n();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&jh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Lm(r,s,a){return es&21?(Ln(a,s)||(a=$i(),Je.lanes|=a,ts|=a,r.baseState=!0),s):(r.baseState&&(r.baseState=!1,Xt=!0),r.memoizedState=a)}function eE(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var c=Mh.transition;Mh.transition={};try{r(!1),s()}finally{xe=a,Mh.transition=c}}function Vm(){return _n().memoizedState}function tE(r,s,a){var c=ci(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},bm(r))Mm(s,a);else if(a=fm(r,s,a,c),a!==null){var f=Ht();Fn(a,r,c,f),jm(a,s,c)}}function nE(r,s,a){var c=ci(r),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(bm(r))Mm(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var _=s.lastRenderedState,A=g(_,a);if(f.hasEagerState=!0,f.eagerState=A,Ln(A,_)){var x=s.interleaved;x===null?(f.next=f,Nh(s)):(f.next=x.next,x.next=f),s.interleaved=f;return}}catch{}finally{}a=fm(r,s,f,c),a!==null&&(f=Ht(),Fn(a,r,c,f),jm(a,s,c))}}function bm(r){var s=r.alternate;return r===Je||s!==null&&s===Je}function Mm(r,s){Na=_u=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function jm(r,s,a){if(a&4194240){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Qr(r,a)}}var Tu={readContext:vn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},rE={readContext:vn,useCallback:function(r,s){return er().memoizedState=[r,s===void 0?null:s],r},useContext:vn,useEffect:Cm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,wu(4194308,4,xm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return wu(4194308,4,r,s)},useInsertionEffect:function(r,s){return wu(4,2,r,s)},useMemo:function(r,s){var a=er();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=er();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=tE.bind(null,Je,r),[c.memoizedState,r]},useRef:function(r){var s=er();return r={current:r},s.memoizedState=r},useState:Rm,useDebugValue:qh,useDeferredValue:function(r){return er().memoizedState=r},useTransition:function(){var r=Rm(!1),s=r[0];return r=eE.bind(null,r[1]),er().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Je,f=er();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Tt===null)throw Error(t(349));es&30||wm(c,s,a)}f.memoizedState=a;var g={value:a,getSnapshot:s};return f.queue=g,Cm(Tm.bind(null,c,g,r),[r]),c.flags|=2048,La(9,Em.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=er(),s=Tt.identifierPrefix;if(Ye){var a=Rr,c=Sr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Da++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=Z0++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},iE={readContext:vn,useCallback:Dm,useContext:vn,useEffect:$h,useImperativeHandle:Nm,useInsertionEffect:km,useLayoutEffect:Pm,useMemo:Om,useReducer:zh,useRef:Am,useState:function(){return zh(Oa)},useDebugValue:qh,useDeferredValue:function(r){var s=_n();return Lm(s,ft.memoizedState,r)},useTransition:function(){var r=zh(Oa)[0],s=_n().memoizedState;return[r,s]},useMutableSource:vm,useSyncExternalStore:_m,useId:Vm,unstable_isNewReconciler:!1},sE={readContext:vn,useCallback:Dm,useContext:vn,useEffect:$h,useImperativeHandle:Nm,useInsertionEffect:km,useLayoutEffect:Pm,useMemo:Om,useReducer:Bh,useRef:Am,useState:function(){return Bh(Oa)},useDebugValue:qh,useDeferredValue:function(r){var s=_n();return ft===null?s.memoizedState=r:Lm(s,ft.memoizedState,r)},useTransition:function(){var r=Bh(Oa)[0],s=_n().memoizedState;return[r,s]},useMutableSource:vm,useSyncExternalStore:_m,useId:Vm,unstable_isNewReconciler:!1};function bn(r,s){if(r&&r.defaultProps){s=se({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function Hh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:se({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Iu={isMounted:function(r){return(r=r._reactInternals)?Cn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Ht(),f=ci(r),g=Cr(c,f);g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&(Fn(s,r,f,c),mu(s,r,f))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Ht(),f=ci(r),g=Cr(c,f);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=oi(r,g,f),s!==null&&(Fn(s,r,f,c),mu(s,r,f))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Ht(),c=ci(r),f=Cr(a,c);f.tag=2,s!=null&&(f.callback=s),s=oi(r,f,c),s!==null&&(Fn(s,r,c,a),mu(s,r,c))}};function Fm(r,s,a,c,f,g,_){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,_):s.prototype&&s.prototype.isPureReactComponent?!wa(a,c)||!wa(f,g):!0}function Um(r,s,a){var c=!1,f=ri,g=s.contextType;return typeof g=="object"&&g!==null?g=vn(g):(f=Yt(s)?Qi:Lt.current,c=s.contextTypes,g=(c=c!=null)?so(r,f):ri),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Iu,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),s}function zm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Iu.enqueueReplaceState(s,s.state,null)}function Wh(r,s,a,c){var f=r.stateNode;f.props=a,f.state=r.memoizedState,f.refs={},Dh(r);var g=s.contextType;typeof g=="object"&&g!==null?f.context=vn(g):(g=Yt(s)?Qi:Lt.current,f.context=so(r,g)),f.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Hh(r,s,g,a),f.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(s=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),s!==f.state&&Iu.enqueueReplaceState(f,f.state,null),gu(r,a,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function po(r,s){try{var a="",c=s;do a+=Ae(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:f,digest:null}}function Gh(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function Kh(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var oE=typeof WeakMap=="function"?WeakMap:Map;function Bm(r,s,a){a=Cr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){xu||(xu=!0,ud=c),Kh(r,s)},a}function $m(r,s,a){a=Cr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;a.payload=function(){return c(f)},a.callback=function(){Kh(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Kh(r,s),typeof c!="function"&&(li===null?li=new Set([this]):li.add(this));var _=s.stack;this.componentDidCatch(s.value,{componentStack:_!==null?_:""})}),a}function qm(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new oE;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(a)||(f.add(a),r=wE.bind(null,r,s,a),s.then(r,r))}function Hm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function Wm(r,s,a,c,f){return r.mode&1?(r.flags|=65536,r.lanes=f,r):(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Cr(-1,1),s.tag=2,oi(a,s,1))),a.lanes|=1),r)}var aE=ce.ReactCurrentOwner,Xt=!1;function qt(r,s,a,c){s.child=r===null?dm(s,null,a,c):uo(s,r.child,a,c)}function Gm(r,s,a,c,f){a=a.render;var g=s.ref;return ho(s,f),c=Fh(r,s,a,c,g,f),a=Uh(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,kr(r,s,f)):(Ye&&a&&Th(s),s.flags|=1,qt(r,s,c,f),s.child)}function Km(r,s,a,c,f){if(r===null){var g=a.type;return typeof g=="function"&&!gd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,Qm(r,s,g,c,f)):(r=bu(a.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!(r.lanes&f)){var _=g.memoizedProps;if(a=a.compare,a=a!==null?a:wa,a(_,c)&&r.ref===s.ref)return kr(r,s,f)}return s.flags|=1,r=di(g,c),r.ref=s.ref,r.return=s,s.child=r}function Qm(r,s,a,c,f){if(r!==null){var g=r.memoizedProps;if(wa(g,c)&&r.ref===s.ref)if(Xt=!1,s.pendingProps=c=g,(r.lanes&f)!==0)r.flags&131072&&(Xt=!0);else return s.lanes=r.lanes,kr(r,s,f)}return Qh(r,s,a,c,f)}function Ym(r,s,a){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(go,cn),cn|=a;else{if(!(a&1073741824))return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,He(go,cn),cn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(go,cn),cn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,He(go,cn),cn|=c;return qt(r,s,f,a),s.child}function Xm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function Qh(r,s,a,c,f){var g=Yt(a)?Qi:Lt.current;return g=so(s,g),ho(s,f),a=Fh(r,s,a,c,g,f),c=Uh(),r!==null&&!Xt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~f,kr(r,s,f)):(Ye&&c&&Th(s),s.flags|=1,qt(r,s,a,f),s.child)}function Jm(r,s,a,c,f){if(Yt(a)){var g=!0;au(s)}else g=!1;if(ho(s,f),s.stateNode===null)Ru(r,s),Um(s,a,c),Wh(s,a,c,f),c=!0;else if(r===null){var _=s.stateNode,A=s.memoizedProps;_.props=A;var x=_.context,H=a.contextType;typeof H=="object"&&H!==null?H=vn(H):(H=Yt(a)?Qi:Lt.current,H=so(s,H));var J=a.getDerivedStateFromProps,Z=typeof J=="function"||typeof _.getSnapshotBeforeUpdate=="function";Z||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==c||x!==H)&&zm(s,_,c,H),si=!1;var X=s.memoizedState;_.state=X,gu(s,c,_,f),x=s.memoizedState,A!==c||X!==x||Qt.current||si?(typeof J=="function"&&(Hh(s,a,J,c),x=s.memoizedState),(A=si||Fm(s,a,A,c,X,x,H))?(Z||typeof _.UNSAFE_componentWillMount!="function"&&typeof _.componentWillMount!="function"||(typeof _.componentWillMount=="function"&&_.componentWillMount(),typeof _.UNSAFE_componentWillMount=="function"&&_.UNSAFE_componentWillMount()),typeof _.componentDidMount=="function"&&(s.flags|=4194308)):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=x),_.props=c,_.state=x,_.context=H,c=A):(typeof _.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{_=s.stateNode,pm(r,s),A=s.memoizedProps,H=s.type===s.elementType?A:bn(s.type,A),_.props=H,Z=s.pendingProps,X=_.context,x=a.contextType,typeof x=="object"&&x!==null?x=vn(x):(x=Yt(a)?Qi:Lt.current,x=so(s,x));var ie=a.getDerivedStateFromProps;(J=typeof ie=="function"||typeof _.getSnapshotBeforeUpdate=="function")||typeof _.UNSAFE_componentWillReceiveProps!="function"&&typeof _.componentWillReceiveProps!="function"||(A!==Z||X!==x)&&zm(s,_,c,x),si=!1,X=s.memoizedState,_.state=X,gu(s,c,_,f);var ue=s.memoizedState;A!==Z||X!==ue||Qt.current||si?(typeof ie=="function"&&(Hh(s,a,ie,c),ue=s.memoizedState),(H=si||Fm(s,a,H,c,X,ue,x)||!1)?(J||typeof _.UNSAFE_componentWillUpdate!="function"&&typeof _.componentWillUpdate!="function"||(typeof _.componentWillUpdate=="function"&&_.componentWillUpdate(c,ue,x),typeof _.UNSAFE_componentWillUpdate=="function"&&_.UNSAFE_componentWillUpdate(c,ue,x)),typeof _.componentDidUpdate=="function"&&(s.flags|=4),typeof _.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof _.componentDidUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ue),_.props=c,_.state=ue,_.context=x,c=H):(typeof _.componentDidUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=4),typeof _.getSnapshotBeforeUpdate!="function"||A===r.memoizedProps&&X===r.memoizedState||(s.flags|=1024),c=!1)}return Yh(r,s,a,c,g,f)}function Yh(r,s,a,c,f,g){Xm(r,s);var _=(s.flags&128)!==0;if(!c&&!_)return f&&rm(s,a,!1),kr(r,s,g);c=s.stateNode,aE.current=s;var A=_&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&_?(s.child=uo(s,r.child,null,g),s.child=uo(s,null,A,g)):qt(r,s,A,g),s.memoizedState=c.state,f&&rm(s,a,!0),s.child}function Zm(r){var s=r.stateNode;s.pendingContext?tm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&tm(r,s.context,!1),Oh(r,s.containerInfo)}function eg(r,s,a,c,f){return lo(),Ah(f),s.flags|=256,qt(r,s,a,c),s.child}var Xh={dehydrated:null,treeContext:null,retryLane:0};function Jh(r){return{baseLanes:r,cachePool:null,transitions:null}}function tg(r,s,a){var c=s.pendingProps,f=Xe.current,g=!1,_=(s.flags&128)!==0,A;if((A=_)||(A=r!==null&&r.memoizedState===null?!1:(f&2)!==0),A?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),He(Xe,f&1),r===null)return Rh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?(s.mode&1?r.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(_=c.children,r=c.fallback,g?(c=s.mode,g=s.child,_={mode:"hidden",children:_},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=_):g=Mu(_,c,0,null),r=ss(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=Jh(a),s.memoizedState=Xh,r):Zh(s,_));if(f=r.memoizedState,f!==null&&(A=f.dehydrated,A!==null))return lE(r,s,_,c,A,f,a);if(g){g=c.fallback,_=s.mode,f=r.child,A=f.sibling;var x={mode:"hidden",children:c.children};return!(_&1)&&s.child!==f?(c=s.child,c.childLanes=0,c.pendingProps=x,s.deletions=null):(c=di(f,x),c.subtreeFlags=f.subtreeFlags&14680064),A!==null?g=di(A,g):(g=ss(g,_,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,_=r.child.memoizedState,_=_===null?Jh(a):{baseLanes:_.baseLanes|a,cachePool:null,transitions:_.transitions},g.memoizedState=_,g.childLanes=r.childLanes&~a,s.memoizedState=Xh,c}return g=r.child,r=g.sibling,c=di(g,{mode:"visible",children:c.children}),!(s.mode&1)&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Zh(r,s){return s=Mu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Su(r,s,a,c){return c!==null&&Ah(c),uo(s,r.child,null,a),r=Zh(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function lE(r,s,a,c,f,g,_){if(a)return s.flags&256?(s.flags&=-257,c=Gh(Error(t(422))),Su(r,s,_,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,f=s.mode,c=Mu({mode:"visible",children:c.children},f,0,null),g=ss(g,f,_,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,s.mode&1&&uo(s,r.child,null,_),s.child.memoizedState=Jh(_),s.memoizedState=Xh,g);if(!(s.mode&1))return Su(r,s,_,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var A=c.dgst;return c=A,g=Error(t(419)),c=Gh(g,c,void 0),Su(r,s,_,c)}if(A=(_&r.childLanes)!==0,Xt||A){if(c=Tt,c!==null){switch(_&-_){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|_)?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Ar(r,f),Fn(c,r,f,-1))}return md(),c=Gh(Error(t(421))),Su(r,s,_,c)}return f.data==="$?"?(s.flags|=128,s.child=r.child,s=EE.bind(null,r),f._reactRetry=s,null):(r=g.treeContext,un=ti(f.nextSibling),ln=s,Ye=!0,Vn=null,r!==null&&(gn[yn++]=Sr,gn[yn++]=Rr,gn[yn++]=Yi,Sr=r.id,Rr=r.overflow,Yi=s),s=Zh(s,c.children),s.flags|=4096,s)}function ng(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),xh(r.return,s,a)}function ed(r,s,a,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function rg(r,s,a){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(qt(r,s,c.children,a),c=Xe.current,c&2)c=c&1|2,s.flags|=128;else{if(r!==null&&r.flags&128)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&ng(r,a,s);else if(r.tag===19)ng(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(He(Xe,c),!(s.mode&1))s.memoizedState=null;else switch(f){case"forwards":for(a=s.child,f=null;a!==null;)r=a.alternate,r!==null&&yu(r)===null&&(f=a),a=a.sibling;a=f,a===null?(f=s.child,s.child=null):(f=a.sibling,a.sibling=null),ed(s,!1,f,a,g);break;case"backwards":for(a=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&yu(r)===null){s.child=f;break}r=f.sibling,f.sibling=a,a=f,f=r}ed(s,!0,a,null,g);break;case"together":ed(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ru(r,s){!(s.mode&1)&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function kr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),ts|=s.lanes,!(a&s.childLanes))return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=di(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=di(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function uE(r,s,a){switch(s.tag){case 3:Zm(s),lo();break;case 5:ym(s);break;case 1:Yt(s.type)&&au(s);break;case 4:Oh(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,f=s.memoizedProps.value;He(fu,c._currentValue),c._currentValue=f;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),s.flags|=128,null):a&s.child.childLanes?tg(r,s,a):(He(Xe,Xe.current&1),r=kr(r,s,a),r!==null?r.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,r.flags&128){if(c)return rg(r,s,a);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return s.lanes=0,Ym(r,s,a)}return kr(r,s,a)}var ig,td,sg,og;ig=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},td=function(){},sg=function(r,s,a,c){var f=r.memoizedProps;if(f!==c){r=s.stateNode,Zi(Zn.current);var g=null;switch(a){case"input":f=Di(r,f),c=Di(r,c),g=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":f=Qo(r,f),c=Qo(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=iu)}ta(a,c);var _;a=null;for(H in f)if(!c.hasOwnProperty(H)&&f.hasOwnProperty(H)&&f[H]!=null)if(H==="style"){var A=f[H];for(_ in A)A.hasOwnProperty(_)&&(a||(a={}),a[_]="")}else H!=="dangerouslySetInnerHTML"&&H!=="children"&&H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&H!=="autoFocus"&&(o.hasOwnProperty(H)?g||(g=[]):(g=g||[]).push(H,null));for(H in c){var x=c[H];if(A=f!=null?f[H]:void 0,c.hasOwnProperty(H)&&x!==A&&(x!=null||A!=null))if(H==="style")if(A){for(_ in A)!A.hasOwnProperty(_)||x&&x.hasOwnProperty(_)||(a||(a={}),a[_]="");for(_ in x)x.hasOwnProperty(_)&&A[_]!==x[_]&&(a||(a={}),a[_]=x[_])}else a||(g||(g=[]),g.push(H,a)),a=x;else H==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,A=A?A.__html:void 0,x!=null&&A!==x&&(g=g||[]).push(H,x)):H==="children"?typeof x!="string"&&typeof x!="number"||(g=g||[]).push(H,""+x):H!=="suppressContentEditableWarning"&&H!=="suppressHydrationWarning"&&(o.hasOwnProperty(H)?(x!=null&&H==="onScroll"&&We("scroll",r),g||A===x||(g=[])):(g=g||[]).push(H,x))}a&&(g=g||[]).push("style",a);var H=g;(s.updateQueue=H)&&(s.flags|=4)}},og=function(r,s,a,c){a!==c&&(s.flags|=4)};function Va(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function bt(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function cE(r,s,a){var c=s.pendingProps;switch(Ih(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(s),null;case 1:return Yt(s.type)&&ou(),bt(s),null;case 3:return c=s.stateNode,fo(),Ge(Qt),Ge(Lt),bh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(hu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,Vn!==null&&(dd(Vn),Vn=null))),td(r,s),bt(s),null;case 5:Lh(s);var f=Zi(xa.current);if(a=s.type,r!==null&&s.stateNode!=null)sg(r,s,a,c,f),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return bt(s),null}if(r=Zi(Zn.current),hu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[Jn]=s,c[Ra]=g,r=(s.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(f=0;f<Ta.length;f++)We(Ta[f],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Cs(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":Ps(c,g),We("invalid",c)}ta(a,g),f=null;for(var _ in g)if(g.hasOwnProperty(_)){var A=g[_];_==="children"?typeof A=="string"?c.textContent!==A&&(g.suppressHydrationWarning!==!0&&ru(c.textContent,A,r),f=["children",A]):typeof A=="number"&&c.textContent!==""+A&&(g.suppressHydrationWarning!==!0&&ru(c.textContent,A,r),f=["children",""+A]):o.hasOwnProperty(_)&&A!=null&&_==="onScroll"&&We("scroll",c)}switch(a){case"input":dr(c),Pl(c,g,!0);break;case"textarea":dr(c),Yo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=iu)}c=f,s.updateQueue=c,c!==null&&(s.flags|=4)}else{_=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=ct(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=_.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=_.createElement(a,{is:c.is}):(r=_.createElement(a),a==="select"&&(_=r,c.multiple?_.multiple=!0:c.size&&(_.size=c.size))):r=_.createElementNS(r,a),r[Jn]=s,r[Ra]=c,ig(r,s,!1,!1),s.stateNode=r;e:{switch(_=na(a,c),a){case"dialog":We("cancel",r),We("close",r),f=c;break;case"iframe":case"object":case"embed":We("load",r),f=c;break;case"video":case"audio":for(f=0;f<Ta.length;f++)We(Ta[f],r);f=c;break;case"source":We("error",r),f=c;break;case"img":case"image":case"link":We("error",r),We("load",r),f=c;break;case"details":We("toggle",r),f=c;break;case"input":Cs(r,c),f=Di(r,c),We("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),We("invalid",r);break;case"textarea":Ps(r,c),f=Qo(r,c),We("invalid",r);break;default:f=c}ta(a,f),A=f;for(g in A)if(A.hasOwnProperty(g)){var x=A[g];g==="style"?Zo(r,x):g==="dangerouslySetInnerHTML"?(x=x?x.__html:void 0,x!=null&&Xo(r,x)):g==="children"?typeof x=="string"?(a!=="textarea"||x!=="")&&qr(r,x):typeof x=="number"&&qr(r,""+x):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?x!=null&&g==="onScroll"&&We("scroll",r):x!=null&&te(r,g,x,_))}switch(a){case"input":dr(r),Pl(r,c,!1);break;case"textarea":dr(r),Yo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+je(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?pr(r,!!c.multiple,g,!1):c.defaultValue!=null&&pr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=iu)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bt(s),null;case 6:if(r&&s.stateNode!=null)og(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=Zi(xa.current),Zi(Zn.current),hu(s)){if(c=s.stateNode,a=s.memoizedProps,c[Jn]=s,(g=c.nodeValue!==a)&&(r=ln,r!==null))switch(r.tag){case 3:ru(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ru(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Jn]=s,s.stateNode=c}return bt(s),null;case 13:if(Ge(Xe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&un!==null&&s.mode&1&&!(s.flags&128))um(),lo(),s.flags|=98560,g=!1;else if(g=hu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Jn]=s}else lo(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;bt(s),g=!1}else Vn!==null&&(dd(Vn),Vn=null),g=!0;if(!g)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,s.mode&1&&(r===null||Xe.current&1?pt===0&&(pt=3):md())),s.updateQueue!==null&&(s.flags|=4),bt(s),null);case 4:return fo(),td(r,s),r===null&&Ia(s.stateNode.containerInfo),bt(s),null;case 10:return Ph(s.type._context),bt(s),null;case 17:return Yt(s.type)&&ou(),bt(s),null;case 19:if(Ge(Xe),g=s.memoizedState,g===null)return bt(s),null;if(c=(s.flags&128)!==0,_=g.rendering,_===null)if(c)Va(g,!1);else{if(pt!==0||r!==null&&r.flags&128)for(r=s.child;r!==null;){if(_=yu(r),_!==null){for(s.flags|=128,Va(g,!1),c=_.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,_=g.alternate,_===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=_.childLanes,g.lanes=_.lanes,g.child=_.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=_.memoizedProps,g.memoizedState=_.memoizedState,g.updateQueue=_.updateQueue,g.type=_.type,r=_.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),s.child}r=r.sibling}g.tail!==null&&qe()>yo&&(s.flags|=128,c=!0,Va(g,!1),s.lanes=4194304)}else{if(!c)if(r=yu(_),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Va(g,!0),g.tail===null&&g.tailMode==="hidden"&&!_.alternate&&!Ye)return bt(s),null}else 2*qe()-g.renderingStartTime>yo&&a!==1073741824&&(s.flags|=128,c=!0,Va(g,!1),s.lanes=4194304);g.isBackwards?(_.sibling=s.child,s.child=_):(a=g.last,a!==null?a.sibling=_:s.child=_,g.last=_)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=qe(),s.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),s):(bt(s),null);case 22:case 23:return pd(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&s.mode&1?cn&1073741824&&(bt(s),s.subtreeFlags&6&&(s.flags|=8192)):bt(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function hE(r,s){switch(Ih(s),s.tag){case 1:return Yt(s.type)&&ou(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return fo(),Ge(Qt),Ge(Lt),bh(),r=s.flags,r&65536&&!(r&128)?(s.flags=r&-65537|128,s):null;case 5:return Lh(s),null;case 13:if(Ge(Xe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));lo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Xe),null;case 4:return fo(),null;case 10:return Ph(s.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var Au=!1,Mt=!1,dE=typeof WeakSet=="function"?WeakSet:Set,ae=null;function mo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(r,s,c)}else a.current=null}function nd(r,s,a){try{a()}catch(c){tt(r,s,c)}}var ag=!1;function fE(r,s){if(ph=Jr,r=Fp(),oh(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var _=0,A=-1,x=-1,H=0,J=0,Z=r,X=null;t:for(;;){for(var ie;Z!==a||f!==0&&Z.nodeType!==3||(A=_+f),Z!==g||c!==0&&Z.nodeType!==3||(x=_+c),Z.nodeType===3&&(_+=Z.nodeValue.length),(ie=Z.firstChild)!==null;)X=Z,Z=ie;for(;;){if(Z===r)break t;if(X===a&&++H===f&&(A=_),X===g&&++J===c&&(x=_),(ie=Z.nextSibling)!==null)break;Z=X,X=Z.parentNode}Z=ie}a=A===-1||x===-1?null:{start:A,end:x}}else a=null}a=a||{start:0,end:0}}else a=null;for(mh={focusedElem:r,selectionRange:a},Jr=!1,ae=s;ae!==null;)if(s=ae,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ae=r;else for(;ae!==null;){s=ae;try{var ue=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var he=ue.memoizedProps,it=ue.memoizedState,U=s.stateNode,O=U.getSnapshotBeforeUpdate(s.elementType===s.type?he:bn(s.type,he),it);U.__reactInternalSnapshotBeforeUpdate=O}break;case 3:var B=s.stateNode.containerInfo;B.nodeType===1?B.textContent="":B.nodeType===9&&B.documentElement&&B.removeChild(B.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ee){tt(s,s.return,ee)}if(r=s.sibling,r!==null){r.return=s.return,ae=r;break}ae=s.return}return ue=ag,ag=!1,ue}function ba(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&nd(s,a,g)}f=f.next}while(f!==c)}}function Cu(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function rd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function lg(r){var s=r.alternate;s!==null&&(r.alternate=null,lg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[Jn],delete s[Ra],delete s[_h],delete s[Q0],delete s[Y0])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function ug(r){return r.tag===5||r.tag===3||r.tag===4}function cg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||ug(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function id(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=iu));else if(c!==4&&(r=r.child,r!==null))for(id(r,s,a),r=r.sibling;r!==null;)id(r,s,a),r=r.sibling}function sd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(sd(r,s,a),r=r.sibling;r!==null;)sd(r,s,a),r=r.sibling}var Ct=null,Mn=!1;function ai(r,s,a){for(a=a.child;a!==null;)hg(r,s,a),a=a.sibling}function hg(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(zi,a)}catch{}switch(a.tag){case 5:Mt||mo(a,s);case 6:var c=Ct,f=Mn;Ct=null,ai(r,s,a),Ct=c,Mn=f,Ct!==null&&(Mn?(r=Ct,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Mn?(r=Ct,a=a.stateNode,r.nodeType===8?vh(r.parentNode,a):r.nodeType===1&&vh(r,a),Dn(r)):vh(Ct,a.stateNode));break;case 4:c=Ct,f=Mn,Ct=a.stateNode.containerInfo,Mn=!0,ai(r,s,a),Ct=c,Mn=f;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,_=g.destroy;g=g.tag,_!==void 0&&(g&2||g&4)&&nd(a,s,_),f=f.next}while(f!==c)}ai(r,s,a);break;case 1:if(!Mt&&(mo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(A){tt(a,s,A)}ai(r,s,a);break;case 21:ai(r,s,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,ai(r,s,a),Mt=c):ai(r,s,a);break;default:ai(r,s,a)}}function dg(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new dE),s.forEach(function(c){var f=TE.bind(null,r,c);a.has(c)||(a.add(c),c.then(f,f))})}}function jn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=r,_=s,A=_;e:for(;A!==null;){switch(A.tag){case 5:Ct=A.stateNode,Mn=!1;break e;case 3:Ct=A.stateNode.containerInfo,Mn=!0;break e;case 4:Ct=A.stateNode.containerInfo,Mn=!0;break e}A=A.return}if(Ct===null)throw Error(t(160));hg(g,_,f),Ct=null,Mn=!1;var x=f.alternate;x!==null&&(x.return=null),f.return=null}catch(H){tt(f,s,H)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)fg(s,r),s=s.sibling}function fg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(jn(s,r),tr(r),c&4){try{ba(3,r,r.return),Cu(3,r)}catch(he){tt(r,r.return,he)}try{ba(5,r,r.return)}catch(he){tt(r,r.return,he)}}break;case 1:jn(s,r),tr(r),c&512&&a!==null&&mo(a,a.return);break;case 5:if(jn(s,r),tr(r),c&512&&a!==null&&mo(a,a.return),r.flags&32){var f=r.stateNode;try{qr(f,"")}catch(he){tt(r,r.return,he)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,_=a!==null?a.memoizedProps:g,A=r.type,x=r.updateQueue;if(r.updateQueue=null,x!==null)try{A==="input"&&g.type==="radio"&&g.name!=null&&Go(f,g),na(A,_);var H=na(A,g);for(_=0;_<x.length;_+=2){var J=x[_],Z=x[_+1];J==="style"?Zo(f,Z):J==="dangerouslySetInnerHTML"?Xo(f,Z):J==="children"?qr(f,Z):te(f,J,Z,H)}switch(A){case"input":Ko(f,g);break;case"textarea":xs(f,g);break;case"select":var X=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ie=g.value;ie!=null?pr(f,!!g.multiple,ie,!1):X!==!!g.multiple&&(g.defaultValue!=null?pr(f,!!g.multiple,g.defaultValue,!0):pr(f,!!g.multiple,g.multiple?[]:"",!1))}f[Ra]=g}catch(he){tt(r,r.return,he)}}break;case 6:if(jn(s,r),tr(r),c&4){if(r.stateNode===null)throw Error(t(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(he){tt(r,r.return,he)}}break;case 3:if(jn(s,r),tr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(s.containerInfo)}catch(he){tt(r,r.return,he)}break;case 4:jn(s,r),tr(r);break;case 13:jn(s,r),tr(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(ld=qe())),c&4&&dg(r);break;case 22:if(J=a!==null&&a.memoizedState!==null,r.mode&1?(Mt=(H=Mt)||J,jn(s,r),Mt=H):jn(s,r),tr(r),c&8192){if(H=r.memoizedState!==null,(r.stateNode.isHidden=H)&&!J&&r.mode&1)for(ae=r,J=r.child;J!==null;){for(Z=ae=J;ae!==null;){switch(X=ae,ie=X.child,X.tag){case 0:case 11:case 14:case 15:ba(4,X,X.return);break;case 1:mo(X,X.return);var ue=X.stateNode;if(typeof ue.componentWillUnmount=="function"){c=X,a=X.return;try{s=c,ue.props=s.memoizedProps,ue.state=s.memoizedState,ue.componentWillUnmount()}catch(he){tt(c,a,he)}}break;case 5:mo(X,X.return);break;case 22:if(X.memoizedState!==null){gg(Z);continue}}ie!==null?(ie.return=X,ae=ie):gg(Z)}J=J.sibling}e:for(J=null,Z=r;;){if(Z.tag===5){if(J===null){J=Z;try{f=Z.stateNode,H?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(A=Z.stateNode,x=Z.memoizedProps.style,_=x!=null&&x.hasOwnProperty("display")?x.display:null,A.style.display=Jo("display",_))}catch(he){tt(r,r.return,he)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=H?"":Z.memoizedProps}catch(he){tt(r,r.return,he)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===r)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===r)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===r)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:jn(s,r),tr(r),c&4&&dg(r);break;case 21:break;default:jn(s,r),tr(r)}}function tr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(ug(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(qr(f,""),c.flags&=-33);var g=cg(r);sd(r,g,f);break;case 3:case 4:var _=c.stateNode.containerInfo,A=cg(r);id(r,A,_);break;default:throw Error(t(161))}}catch(x){tt(r,r.return,x)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function pE(r,s,a){ae=r,pg(r)}function pg(r,s,a){for(var c=(r.mode&1)!==0;ae!==null;){var f=ae,g=f.child;if(f.tag===22&&c){var _=f.memoizedState!==null||Au;if(!_){var A=f.alternate,x=A!==null&&A.memoizedState!==null||Mt;A=Au;var H=Mt;if(Au=_,(Mt=x)&&!H)for(ae=f;ae!==null;)_=ae,x=_.child,_.tag===22&&_.memoizedState!==null?yg(f):x!==null?(x.return=_,ae=x):yg(f);for(;g!==null;)ae=g,pg(g),g=g.sibling;ae=f,Au=A,Mt=H}mg(r)}else f.subtreeFlags&8772&&g!==null?(g.return=f,ae=g):mg(r)}}function mg(r){for(;ae!==null;){var s=ae;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mt||Cu(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var f=s.elementType===s.type?a.memoizedProps:bn(s.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&gm(s,g,c);break;case 3:var _=s.updateQueue;if(_!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}gm(s,_,a)}break;case 5:var A=s.stateNode;if(a===null&&s.flags&4){a=A;var x=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":x.autoFocus&&a.focus();break;case"img":x.src&&(a.src=x.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var H=s.alternate;if(H!==null){var J=H.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&Dn(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||s.flags&512&&rd(s)}catch(X){tt(s,s.return,X)}}if(s===r){ae=null;break}if(a=s.sibling,a!==null){a.return=s.return,ae=a;break}ae=s.return}}function gg(r){for(;ae!==null;){var s=ae;if(s===r){ae=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ae=a;break}ae=s.return}}function yg(r){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Cu(4,s)}catch(x){tt(s,a,x)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var f=s.return;try{c.componentDidMount()}catch(x){tt(s,f,x)}}var g=s.return;try{rd(s)}catch(x){tt(s,g,x)}break;case 5:var _=s.return;try{rd(s)}catch(x){tt(s,_,x)}}}catch(x){tt(s,s.return,x)}if(s===r){ae=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ae=A;break}ae=s.return}}var mE=Math.ceil,ku=ce.ReactCurrentDispatcher,od=ce.ReactCurrentOwner,wn=ce.ReactCurrentBatchConfig,Ve=0,Tt=null,at=null,kt=0,cn=0,go=ni(0),pt=0,Ma=null,ts=0,Pu=0,ad=0,ja=null,Jt=null,ld=0,yo=1/0,Pr=null,xu=!1,ud=null,li=null,Nu=!1,ui=null,Du=0,Fa=0,cd=null,Ou=-1,Lu=0;function Ht(){return Ve&6?qe():Ou!==-1?Ou:Ou=qe()}function ci(r){return r.mode&1?Ve&2&&kt!==0?kt&-kt:J0.transition!==null?(Lu===0&&(Lu=$i()),Lu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:fa(r.type)),r):1}function Fn(r,s,a,c){if(50<Fa)throw Fa=0,cd=null,Error(t(185));Kr(r,a,c),(!(Ve&2)||r!==Tt)&&(r===Tt&&(!(Ve&2)&&(Pu|=a),pt===4&&hi(r,kt)),Zt(r,c),a===1&&Ve===0&&!(s.mode&1)&&(yo=qe()+500,lu&&ii()))}function Zt(r,s){var a=r.callbackNode;yr(r,s);var c=Bi(r,r===Tt?kt:0);if(c===0)a!==null&&la(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&la(a),s===1)r.tag===0?X0(_g.bind(null,r)):im(_g.bind(null,r)),G0(function(){!(Ve&6)&&ii()}),a=null;else{switch(Yr(c)){case 1:a=Ui;break;case 4:a=Hr;break;case 16:a=fn;break;case 536870912:a=Ll;break;default:a=fn}a=Cg(a,vg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function vg(r,s){if(Ou=-1,Lu=0,Ve&6)throw Error(t(327));var a=r.callbackNode;if(vo()&&r.callbackNode!==a)return null;var c=Bi(r,r===Tt?kt:0);if(c===0)return null;if(c&30||c&r.expiredLanes||s)s=Vu(r,c);else{s=c;var f=Ve;Ve|=2;var g=Eg();(Tt!==r||kt!==s)&&(Pr=null,yo=qe()+500,rs(r,s));do try{vE();break}catch(A){wg(r,A)}while(!0);kh(),ku.current=g,Ve=f,at!==null?s=0:(Tt=null,kt=0,s=pt)}if(s!==0){if(s===2&&(f=sn(r),f!==0&&(c=f,s=hd(r,f))),s===1)throw a=Ma,rs(r,0),hi(r,c),Zt(r,qe()),a;if(s===6)hi(r,c);else{if(f=r.current.alternate,!(c&30)&&!gE(f)&&(s=Vu(r,c),s===2&&(g=sn(r),g!==0&&(c=g,s=hd(r,g))),s===1))throw a=Ma,rs(r,0),hi(r,c),Zt(r,qe()),a;switch(r.finishedWork=f,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:is(r,Jt,Pr);break;case 3:if(hi(r,c),(c&130023424)===c&&(s=ld+500-qe(),10<s)){if(Bi(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Ht(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=yh(is.bind(null,r,Jt,Pr),s);break}is(r,Jt,Pr);break;case 4:if(hi(r,c),(c&4194240)===c)break;for(s=r.eventTimes,f=-1;0<c;){var _=31-Bt(c);g=1<<_,_=s[_],_>f&&(f=_),c&=~g}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mE(c/1960))-c,10<c){r.timeoutHandle=yh(is.bind(null,r,Jt,Pr),c);break}is(r,Jt,Pr);break;case 5:is(r,Jt,Pr);break;default:throw Error(t(329))}}}return Zt(r,qe()),r.callbackNode===a?vg.bind(null,r):null}function hd(r,s){var a=ja;return r.current.memoizedState.isDehydrated&&(rs(r,s).flags|=256),r=Vu(r,s),r!==2&&(s=Jt,Jt=a,s!==null&&dd(s)),r}function dd(r){Jt===null?Jt=r:Jt.push.apply(Jt,r)}function gE(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!Ln(g(),f))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function hi(r,s){for(s&=~ad,s&=~Pu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Bt(s),c=1<<a;r[a]=-1,s&=~c}}function _g(r){if(Ve&6)throw Error(t(327));vo();var s=Bi(r,0);if(!(s&1))return Zt(r,qe()),null;var a=Vu(r,s);if(r.tag!==0&&a===2){var c=sn(r);c!==0&&(s=c,a=hd(r,c))}if(a===1)throw a=Ma,rs(r,0),hi(r,s),Zt(r,qe()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,is(r,Jt,Pr),Zt(r,qe()),null}function fd(r,s){var a=Ve;Ve|=1;try{return r(s)}finally{Ve=a,Ve===0&&(yo=qe()+500,lu&&ii())}}function ns(r){ui!==null&&ui.tag===0&&!(Ve&6)&&vo();var s=Ve;Ve|=1;var a=wn.transition,c=xe;try{if(wn.transition=null,xe=1,r)return r()}finally{xe=c,wn.transition=a,Ve=s,!(Ve&6)&&ii()}}function pd(){cn=go.current,Ge(go)}function rs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,W0(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(Ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ou();break;case 3:fo(),Ge(Qt),Ge(Lt),bh();break;case 5:Lh(c);break;case 4:fo();break;case 13:Ge(Xe);break;case 19:Ge(Xe);break;case 10:Ph(c.type._context);break;case 22:case 23:pd()}a=a.return}if(Tt=r,at=r=di(r.current,null),kt=cn=s,pt=0,Ma=null,ad=Pu=ts=0,Jt=ja=null,Ji!==null){for(s=0;s<Ji.length;s++)if(a=Ji[s],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var _=g.next;g.next=f,c.next=_}a.pending=c}Ji=null}return r}function wg(r,s){do{var a=at;try{if(kh(),vu.current=Tu,_u){for(var c=Je.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}_u=!1}if(es=0,Et=ft=Je=null,Na=!1,Da=0,od.current=null,a===null||a.return===null){pt=1,Ma=s,at=null;break}e:{var g=r,_=a.return,A=a,x=s;if(s=kt,A.flags|=32768,x!==null&&typeof x=="object"&&typeof x.then=="function"){var H=x,J=A,Z=J.tag;if(!(J.mode&1)&&(Z===0||Z===11||Z===15)){var X=J.alternate;X?(J.updateQueue=X.updateQueue,J.memoizedState=X.memoizedState,J.lanes=X.lanes):(J.updateQueue=null,J.memoizedState=null)}var ie=Hm(_);if(ie!==null){ie.flags&=-257,Wm(ie,_,A,g,s),ie.mode&1&&qm(g,H,s),s=ie,x=H;var ue=s.updateQueue;if(ue===null){var he=new Set;he.add(x),s.updateQueue=he}else ue.add(x);break e}else{if(!(s&1)){qm(g,H,s),md();break e}x=Error(t(426))}}else if(Ye&&A.mode&1){var it=Hm(_);if(it!==null){!(it.flags&65536)&&(it.flags|=256),Wm(it,_,A,g,s),Ah(po(x,A));break e}}g=x=po(x,A),pt!==4&&(pt=2),ja===null?ja=[g]:ja.push(g),g=_;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var U=Bm(g,x,s);mm(g,U);break e;case 1:A=x;var O=g.type,B=g.stateNode;if(!(g.flags&128)&&(typeof O.getDerivedStateFromError=="function"||B!==null&&typeof B.componentDidCatch=="function"&&(li===null||!li.has(B)))){g.flags|=65536,s&=-s,g.lanes|=s;var ee=$m(g,A,s);mm(g,ee);break e}}g=g.return}while(g!==null)}Ig(a)}catch(de){s=de,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Eg(){var r=ku.current;return ku.current=Tu,r===null?Tu:r}function md(){(pt===0||pt===3||pt===2)&&(pt=4),Tt===null||!(ts&268435455)&&!(Pu&268435455)||hi(Tt,kt)}function Vu(r,s){var a=Ve;Ve|=2;var c=Eg();(Tt!==r||kt!==s)&&(Pr=null,rs(r,s));do try{yE();break}catch(f){wg(r,f)}while(!0);if(kh(),Ve=a,ku.current=c,at!==null)throw Error(t(261));return Tt=null,kt=0,pt}function yE(){for(;at!==null;)Tg(at)}function vE(){for(;at!==null&&!Dl();)Tg(at)}function Tg(r){var s=Ag(r.alternate,r,cn);r.memoizedProps=r.pendingProps,s===null?Ig(r):at=s,od.current=null}function Ig(r){var s=r;do{var a=s.alternate;if(r=s.return,s.flags&32768){if(a=hE(a,s),a!==null){a.flags&=32767,at=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{pt=6,at=null;return}}else if(a=cE(a,s,cn),a!==null){at=a;return}if(s=s.sibling,s!==null){at=s;return}at=s=r}while(s!==null);pt===0&&(pt=5)}function is(r,s,a){var c=xe,f=wn.transition;try{wn.transition=null,xe=1,_E(r,s,a,c)}finally{wn.transition=f,xe=c}return null}function _E(r,s,a,c){do vo();while(ui!==null);if(Ve&6)throw Error(t(327));a=r.finishedWork;var f=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(r,g),r===Tt&&(at=Tt=null,kt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Nu||(Nu=!0,Cg(fn,function(){return vo(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=wn.transition,wn.transition=null;var _=xe;xe=1;var A=Ve;Ve|=4,od.current=null,fE(r,a),fg(a,r),F0(mh),Jr=!!ph,mh=ph=null,r.current=a,pE(a),Jc(),Ve=A,xe=_,wn.transition=g}else r.current=a;if(Nu&&(Nu=!1,ui=r,Du=f),g=r.pendingLanes,g===0&&(li=null),Vl(a.stateNode),Zt(r,qe()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)f=s[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(xu)throw xu=!1,r=ud,ud=null,r;return Du&1&&r.tag!==0&&vo(),g=r.pendingLanes,g&1?r===cd?Fa++:(Fa=0,cd=r):Fa=0,ii(),null}function vo(){if(ui!==null){var r=Yr(Du),s=wn.transition,a=xe;try{if(wn.transition=null,xe=16>r?16:r,ui===null)var c=!1;else{if(r=ui,ui=null,Du=0,Ve&6)throw Error(t(331));var f=Ve;for(Ve|=4,ae=r.current;ae!==null;){var g=ae,_=g.child;if(ae.flags&16){var A=g.deletions;if(A!==null){for(var x=0;x<A.length;x++){var H=A[x];for(ae=H;ae!==null;){var J=ae;switch(J.tag){case 0:case 11:case 15:ba(8,J,g)}var Z=J.child;if(Z!==null)Z.return=J,ae=Z;else for(;ae!==null;){J=ae;var X=J.sibling,ie=J.return;if(lg(J),J===H){ae=null;break}if(X!==null){X.return=ie,ae=X;break}ae=ie}}}var ue=g.alternate;if(ue!==null){var he=ue.child;if(he!==null){ue.child=null;do{var it=he.sibling;he.sibling=null,he=it}while(he!==null)}}ae=g}}if(g.subtreeFlags&2064&&_!==null)_.return=g,ae=_;else e:for(;ae!==null;){if(g=ae,g.flags&2048)switch(g.tag){case 0:case 11:case 15:ba(9,g,g.return)}var U=g.sibling;if(U!==null){U.return=g.return,ae=U;break e}ae=g.return}}var O=r.current;for(ae=O;ae!==null;){_=ae;var B=_.child;if(_.subtreeFlags&2064&&B!==null)B.return=_,ae=B;else e:for(_=O;ae!==null;){if(A=ae,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:Cu(9,A)}}catch(de){tt(A,A.return,de)}if(A===_){ae=null;break e}var ee=A.sibling;if(ee!==null){ee.return=A.return,ae=ee;break e}ae=A.return}}if(Ve=f,ii(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(zi,r)}catch{}c=!0}return c}finally{xe=a,wn.transition=s}}return!1}function Sg(r,s,a){s=po(a,s),s=Bm(r,s,1),r=oi(r,s,1),s=Ht(),r!==null&&(Kr(r,1,s),Zt(r,s))}function tt(r,s,a){if(r.tag===3)Sg(r,r,a);else for(;s!==null;){if(s.tag===3){Sg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(li===null||!li.has(c))){r=po(a,r),r=$m(s,r,1),s=oi(s,r,1),r=Ht(),s!==null&&(Kr(s,1,r),Zt(s,r));break}}s=s.return}}function wE(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Ht(),r.pingedLanes|=r.suspendedLanes&a,Tt===r&&(kt&a)===a&&(pt===4||pt===3&&(kt&130023424)===kt&&500>qe()-ld?rs(r,0):ad|=a),Zt(r,s)}function Rg(r,s){s===0&&(r.mode&1?(s=Us,Us<<=1,!(Us&130023424)&&(Us=4194304)):s=1);var a=Ht();r=Ar(r,s),r!==null&&(Kr(r,s,a),Zt(r,a))}function EE(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Rg(r,a)}function TE(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),Rg(r,a)}var Ag;Ag=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Qt.current)Xt=!0;else{if(!(r.lanes&a)&&!(s.flags&128))return Xt=!1,uE(r,s,a);Xt=!!(r.flags&131072)}else Xt=!1,Ye&&s.flags&1048576&&sm(s,cu,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Ru(r,s),r=s.pendingProps;var f=so(s,Lt.current);ho(s,a),f=Fh(null,s,c,r,f,a);var g=Uh();return s.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(c)?(g=!0,au(s)):g=!1,s.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Dh(s),f.updater=Iu,s.stateNode=f,f._reactInternals=s,Wh(s,c,r,a),s=Yh(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&Th(s),qt(null,s,f,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Ru(r,s),r=s.pendingProps,f=c._init,c=f(c._payload),s.type=c,f=s.tag=SE(c),r=bn(c,r),f){case 0:s=Qh(null,s,c,r,a);break e;case 1:s=Jm(null,s,c,r,a);break e;case 11:s=Gm(null,s,c,r,a);break e;case 14:s=Km(null,s,c,bn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Qh(r,s,c,f,a);case 1:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Jm(r,s,c,f,a);case 3:e:{if(Zm(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,f=g.element,pm(r,s),gu(s,c,null,a);var _=s.memoizedState;if(c=_.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:_.cache,pendingSuspenseBoundaries:_.pendingSuspenseBoundaries,transitions:_.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){f=po(Error(t(423)),s),s=eg(r,s,c,a,f);break e}else if(c!==f){f=po(Error(t(424)),s),s=eg(r,s,c,a,f);break e}else for(un=ti(s.stateNode.containerInfo.firstChild),ln=s,Ye=!0,Vn=null,a=dm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(lo(),c===f){s=kr(r,s,a);break e}qt(r,s,c,a)}s=s.child}return s;case 5:return ym(s),r===null&&Rh(s),c=s.type,f=s.pendingProps,g=r!==null?r.memoizedProps:null,_=f.children,gh(c,f)?_=null:g!==null&&gh(c,g)&&(s.flags|=32),Xm(r,s),qt(r,s,_,a),s.child;case 6:return r===null&&Rh(s),null;case 13:return tg(r,s,a);case 4:return Oh(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=uo(s,null,c,a):qt(r,s,c,a),s.child;case 11:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Gm(r,s,c,f,a);case 7:return qt(r,s,s.pendingProps,a),s.child;case 8:return qt(r,s,s.pendingProps.children,a),s.child;case 12:return qt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,f=s.pendingProps,g=s.memoizedProps,_=f.value,He(fu,c._currentValue),c._currentValue=_,g!==null)if(Ln(g.value,_)){if(g.children===f.children&&!Qt.current){s=kr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var A=g.dependencies;if(A!==null){_=g.child;for(var x=A.firstContext;x!==null;){if(x.context===c){if(g.tag===1){x=Cr(-1,a&-a),x.tag=2;var H=g.updateQueue;if(H!==null){H=H.shared;var J=H.pending;J===null?x.next=x:(x.next=J.next,J.next=x),H.pending=x}}g.lanes|=a,x=g.alternate,x!==null&&(x.lanes|=a),xh(g.return,a,s),A.lanes|=a;break}x=x.next}}else if(g.tag===10)_=g.type===s.type?null:g.child;else if(g.tag===18){if(_=g.return,_===null)throw Error(t(341));_.lanes|=a,A=_.alternate,A!==null&&(A.lanes|=a),xh(_,a,s),_=g.sibling}else _=g.child;if(_!==null)_.return=g;else for(_=g;_!==null;){if(_===s){_=null;break}if(g=_.sibling,g!==null){g.return=_.return,_=g;break}_=_.return}g=_}qt(r,s,f.children,a),s=s.child}return s;case 9:return f=s.type,c=s.pendingProps.children,ho(s,a),f=vn(f),c=c(f),s.flags|=1,qt(r,s,c,a),s.child;case 14:return c=s.type,f=bn(c,s.pendingProps),f=bn(c.type,f),Km(r,s,c,f,a);case 15:return Qm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,f=s.pendingProps,f=s.elementType===c?f:bn(c,f),Ru(r,s),s.tag=1,Yt(c)?(r=!0,au(s)):r=!1,ho(s,a),Um(s,c,f),Wh(s,c,f,a),Yh(null,s,c,!0,r,a);case 19:return rg(r,s,a);case 22:return Ym(r,s,a)}throw Error(t(156,s.tag))};function Cg(r,s){return js(r,s)}function IE(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(r,s,a,c){return new IE(r,s,a,c)}function gd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function SE(r){if(typeof r=="function")return gd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===j)return 11;if(r===Dt)return 14}return 2}function di(r,s){var a=r.alternate;return a===null?(a=En(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function bu(r,s,a,c,f,g){var _=2;if(c=r,typeof r=="function")gd(r)&&(_=1);else if(typeof r=="string")_=5;else e:switch(r){case P:return ss(a.children,f,g,s);case R:_=8,f|=8;break;case C:return r=En(12,a,s,f|2),r.elementType=C,r.lanes=g,r;case k:return r=En(13,a,s,f),r.elementType=k,r.lanes=g,r;case nt:return r=En(19,a,s,f),r.elementType=nt,r.lanes=g,r;case ze:return Mu(a,f,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case N:_=10;break e;case L:_=9;break e;case j:_=11;break e;case Dt:_=14;break e;case Ot:_=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=En(_,a,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function ss(r,s,a,c){return r=En(7,r,c,s),r.lanes=a,r}function Mu(r,s,a,c){return r=En(22,r,c,s),r.elementType=ze,r.lanes=a,r.stateNode={isHidden:!1},r}function yd(r,s,a){return r=En(6,r,null,s),r.lanes=a,r}function vd(r,s,a){return s=En(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function RE(r,s,a,c,f){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gr(0),this.expirationTimes=Gr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function _d(r,s,a,c,f,g,_,A,x){return r=new RE(r,s,a,A,x),s===1?(s=1,g===!0&&(s|=8)):s=0,g=En(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dh(g),r}function AE(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ge,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function kg(r){if(!r)return ri;r=r._reactInternals;e:{if(Cn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(Yt(a))return nm(r,a,s)}return s}function Pg(r,s,a,c,f,g,_,A,x){return r=_d(a,c,!0,r,f,g,_,A,x),r.context=kg(null),a=r.current,c=Ht(),f=ci(a),g=Cr(c,f),g.callback=s??null,oi(a,g,f),r.current.lanes=f,Kr(r,f,c),Zt(r,c),r}function ju(r,s,a,c){var f=s.current,g=Ht(),_=ci(f);return a=kg(a),s.context===null?s.context=a:s.pendingContext=a,s=Cr(g,_),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=oi(f,s,_),r!==null&&(Fn(r,f,_,g),mu(r,f,_)),_}function Fu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function xg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function wd(r,s){xg(r,s),(r=r.alternate)&&xg(r,s)}function CE(){return null}var Ng=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ed(r){this._internalRoot=r}Uu.prototype.render=Ed.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ju(r,s,null,null)},Uu.prototype.unmount=Ed.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;ns(function(){ju(null,r,null,null)}),s[Tr]=null}};function Uu(r){this._internalRoot=r}Uu.prototype.unstable_scheduleHydration=function(r){if(r){var s=Ul();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Kn.length&&s!==0&&s<Kn[a].priority;a++);Kn.splice(a,0,r),a===0&&$l(r)}};function Td(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function kE(r,s,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var H=Fu(_);g.call(H)}}var _=Pg(s,c,r,0,null,!1,!1,"",Dg);return r._reactRootContainer=_,r[Tr]=_.current,Ia(r.nodeType===8?r.parentNode:r),ns(),_}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var A=c;c=function(){var H=Fu(x);A.call(H)}}var x=_d(r,0,!1,null,null,!1,!1,"",Dg);return r._reactRootContainer=x,r[Tr]=x.current,Ia(r.nodeType===8?r.parentNode:r),ns(function(){ju(s,x,a,c)}),x}function Bu(r,s,a,c,f){var g=a._reactRootContainer;if(g){var _=g;if(typeof f=="function"){var A=f;f=function(){var x=Fu(_);A.call(x)}}ju(s,_,r,f)}else _=kE(a,s,r,f,c);return Fu(_)}jl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Wr(s.pendingLanes);a!==0&&(Qr(s,a|1),Zt(s,qe()),!(Ve&6)&&(yo=qe()+500,ii()))}break;case 13:ns(function(){var c=Ar(r,1);if(c!==null){var f=Ht();Fn(c,r,1,f)}}),wd(r,1)}},zs=function(r){if(r.tag===13){var s=Ar(r,134217728);if(s!==null){var a=Ht();Fn(s,r,134217728,a)}wd(r,134217728)}},Fl=function(r){if(r.tag===13){var s=ci(r),a=Ar(r,s);if(a!==null){var c=Ht();Fn(a,r,s,c)}wd(r,s)}},Ul=function(){return xe},zl=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},Ds=function(r,s,a){switch(s){case"input":if(Ko(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var f=su(c);if(!f)throw Error(t(90));As(c),Ko(c,f)}}}break;case"textarea":xs(r,a);break;case"select":s=a.value,s!=null&&pr(r,!!a.multiple,s,!1)}},bi=fd,ia=ns;var PE={usingClientEntryPoint:!1,Events:[Aa,ro,su,Wn,ra,fd]},Ua={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xE={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ce.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=aa(r),r===null?null:r.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||CE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$u.isDisabled&&$u.supportsFiber)try{zi=$u.inject(xE),rn=$u}catch{}}return en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE,en.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Td(s))throw Error(t(200));return AE(r,s,null,a)},en.createRoot=function(r,s){if(!Td(r))throw Error(t(299));var a=!1,c="",f=Ng;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(f=s.onRecoverableError)),s=_d(r,1,!1,null,null,a,!1,c,f),r[Tr]=s.current,Ia(r.nodeType===8?r.parentNode:r),new Ed(s)},en.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=aa(s),r=r===null?null:r.stateNode,r},en.flushSync=function(r){return ns(r)},en.hydrate=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!0,a)},en.hydrateRoot=function(r,s,a){if(!Td(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",_=Ng;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(_=a.onRecoverableError)),s=Pg(s,null,r,1,a??null,f,!1,g,_),r[Tr]=s.current,Ia(r),c)for(r=0;r<c.length;r++)a=c[r],f=a._getVersion,f=f(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,f]:s.mutableSourceEagerHydrationData.push(a,f);return new Uu(s)},en.render=function(r,s,a){if(!zu(s))throw Error(t(200));return Bu(null,r,s,!1,a)},en.unmountComponentAtNode=function(r){if(!zu(r))throw Error(t(40));return r._reactRootContainer?(ns(function(){Bu(null,null,r,!1,function(){r._reactRootContainer=null,r[Tr]=null})}),!0):!1},en.unstable_batchedUpdates=fd,en.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!zu(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Bu(r,s,a,!1,c)},en.version="18.3.1-next-f1338f8080-20240426",en}var Ug;function UE(){if(Ug)return Rd.exports;Ug=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Rd.exports=FE(),Rd.exports}var zg;function zE(){if(zg)return qu;zg=1;var n=UE();return qu.createRoot=n.createRoot,qu.hydrateRoot=n.hydrateRoot,qu}var BE=zE(),Ba={},Bg;function $E(){if(Bg)return Ba;Bg=1,Object.defineProperty(Ba,"__esModule",{value:!0}),Ba.parse=h,Ba.serialize=y;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const S=function(){};return S.prototype=Object.create(null),S})();function h(S,D){const V=new l,q=S.length;if(q<2)return V;const b=(D==null?void 0:D.decode)||w;let $=0;do{const G=S.indexOf("=",$);if(G===-1)break;const te=S.indexOf(";",$),ce=te===-1?q:te;if(G>ce){$=S.lastIndexOf(";",G-1)+1;continue}const Te=d(S,$,G),ge=p(S,G,Te),P=S.slice(Te,ge);if(V[P]===void 0){let R=d(S,G+1,ce),C=p(S,ce,R);const N=b(S.slice(R,C));V[P]=N}$=ce+1}while($<q);return V}function d(S,D,V){do{const q=S.charCodeAt(D);if(q!==32&&q!==9)return D}while(++D<V);return V}function p(S,D,V){for(;D>V;){const q=S.charCodeAt(--D);if(q!==32&&q!==9)return D+1}return V}function y(S,D,V){const q=(V==null?void 0:V.encode)||encodeURIComponent;if(!n.test(S))throw new TypeError(`argument name is invalid: ${S}`);const b=q(D);if(!e.test(b))throw new TypeError(`argument val is invalid: ${D}`);let $=S+"="+b;if(!V)return $;if(V.maxAge!==void 0){if(!Number.isInteger(V.maxAge))throw new TypeError(`option maxAge is invalid: ${V.maxAge}`);$+="; Max-Age="+V.maxAge}if(V.domain){if(!t.test(V.domain))throw new TypeError(`option domain is invalid: ${V.domain}`);$+="; Domain="+V.domain}if(V.path){if(!i.test(V.path))throw new TypeError(`option path is invalid: ${V.path}`);$+="; Path="+V.path}if(V.expires){if(!I(V.expires)||!Number.isFinite(V.expires.valueOf()))throw new TypeError(`option expires is invalid: ${V.expires}`);$+="; Expires="+V.expires.toUTCString()}if(V.httpOnly&&($+="; HttpOnly"),V.secure&&($+="; Secure"),V.partitioned&&($+="; Partitioned"),V.priority)switch(typeof V.priority=="string"?V.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${V.priority}`)}if(V.sameSite)switch(typeof V.sameSite=="string"?V.sameSite.toLowerCase():V.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${V.sameSite}`)}return $}function w(S){if(S.indexOf("%")===-1)return S;try{return decodeURIComponent(S)}catch{return S}}function I(S){return o.call(S)==="[object Date]"}return Ba}$E();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var $g="popstate";function qE(n={}){function e(i,o){let{pathname:l,search:h,hash:d}=i.location;return qd("",{pathname:l,search:h,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:nl(o)}return WE(e,t,null,n)}function Ze(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function lr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function HE(){return Math.random().toString(36).substring(2,10)}function qg(n,e){return{usr:n.state,key:n.key,idx:e}}function qd(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?jo(e):e,state:t,key:e&&e.key||i||HE()}}function nl({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function jo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function WE(n,e,t,i={}){let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,d="POP",p=null,y=w();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function w(){return(h.state||{idx:null}).idx}function I(){d="POP";let b=w(),$=b==null?null:b-y;y=b,p&&p({action:d,location:q.location,delta:$})}function S(b,$){d="PUSH";let G=qd(q.location,b,$);y=w()+1;let te=qg(G,y),ce=q.createHref(G);try{h.pushState(te,"",ce)}catch(Te){if(Te instanceof DOMException&&Te.name==="DataCloneError")throw Te;o.location.assign(ce)}l&&p&&p({action:d,location:q.location,delta:1})}function D(b,$){d="REPLACE";let G=qd(q.location,b,$);y=w();let te=qg(G,y),ce=q.createHref(G);h.replaceState(te,"",ce),l&&p&&p({action:d,location:q.location,delta:0})}function V(b){let $=o.location.origin!=="null"?o.location.origin:o.location.href,G=typeof b=="string"?b:nl(b);return G=G.replace(/ $/,"%20"),Ze($,`No window.location.(origin|href) available to create URL for href: ${G}`),new URL(G,$)}let q={get action(){return d},get location(){return n(o,h)},listen(b){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener($g,I),p=b,()=>{o.removeEventListener($g,I),p=null}},createHref(b){return e(o,b)},createURL:V,encodeLocation(b){let $=V(b);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:S,replace:D,go(b){return h.go(b)}};return q}function Tv(n,e,t="/"){return GE(n,e,t,!1)}function GE(n,e,t,i){let o=typeof e=="string"?jo(e):e,l=Ri(o.pathname||"/",t);if(l==null)return null;let h=Iv(n);KE(h);let d=null;for(let p=0;d==null&&p<h.length;++p){let y=sT(l);d=rT(h[p],y,i)}return d}function Iv(n,e=[],t=[],i=""){let o=(l,h,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let y=Or([i,p.relativePath]),w=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Iv(l.children,e,w,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:tT(y,l.index),routesMeta:w})};return n.forEach((l,h)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,h);else for(let p of Sv(l.path))o(l,h,p)}),e}function Sv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=Sv(i.join("/")),d=[];return d.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&d.push(...h),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function KE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:nT(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var QE=/^:[\w-]+$/,YE=3,XE=2,JE=1,ZE=10,eT=-2,Hg=n=>n==="*";function tT(n,e){let t=n.split("/"),i=t.length;return t.some(Hg)&&(i+=eT),e&&(i+=XE),t.filter(o=>!Hg(o)).reduce((o,l)=>o+(QE.test(l)?YE:l===""?JE:ZE),i)}function nT(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function rT(n,e,t=!1){let{routesMeta:i}=n,o={},l="/",h=[];for(let d=0;d<i.length;++d){let p=i[d],y=d===i.length-1,w=l==="/"?e:e.slice(l.length)||"/",I=cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},w),S=p.route;if(!I&&y&&t&&!i[i.length-1].route.index&&(I=cc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},w)),!I)return null;Object.assign(o,I.params),h.push({params:o,pathname:Or([l,I.pathname]),pathnameBase:uT(Or([l,I.pathnameBase])),route:S}),I.pathnameBase!=="/"&&(l=Or([l,I.pathnameBase]))}return h}function cc(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=iT(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:i.reduce((y,{paramName:w,isOptional:I},S)=>{if(w==="*"){let V=d[S]||"";h=l.slice(0,l.length-V.length).replace(/(.)\/+$/,"$1")}const D=d[S];return I&&!D?y[w]=void 0:y[w]=(D||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:n}}function iT(n,e=!1,t=!0){lr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function sT(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lr(!1,`The URL path "${n}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ri(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function oT(n,e="/"){let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?jo(n):n;return{pathname:t?t.startsWith("/")?t:aT(t,e):e,search:cT(i),hash:hT(o)}}function aT(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function kd(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function lT(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Rv(n){let e=lT(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Av(n,e,t,i=!1){let o;typeof n=="string"?o=jo(n):(o={...n},Ze(!o.pathname||!o.pathname.includes("?"),kd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),kd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),kd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,d;if(h==null)d=t;else{let I=e.length-1;if(!i&&h.startsWith("..")){let S=h.split("/");for(;S[0]==="..";)S.shift(),I-=1;o.pathname=S.join("/")}d=I>=0?e[I]:"/"}let p=oT(o,d),y=h&&h!=="/"&&h.endsWith("/"),w=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||w)&&(p.pathname+="/"),p}var Or=n=>n.join("/").replace(/\/\/+/g,"/"),uT=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),cT=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,hT=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function dT(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var Cv=["POST","PUT","PATCH","DELETE"];new Set(Cv);var fT=["GET",...Cv];new Set(fT);var Fo=z.createContext(null);Fo.displayName="DataRouter";var kc=z.createContext(null);kc.displayName="DataRouterState";var kv=z.createContext({isTransitioning:!1});kv.displayName="ViewTransition";var pT=z.createContext(new Map);pT.displayName="Fetchers";var mT=z.createContext(null);mT.displayName="Await";var hr=z.createContext(null);hr.displayName="Navigation";var pl=z.createContext(null);pl.displayName="Location";var Ur=z.createContext({outlet:null,matches:[],isDataRoute:!1});Ur.displayName="Route";var wf=z.createContext(null);wf.displayName="RouteError";function gT(n,{relative:e}={}){Ze(ml(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=z.useContext(hr),{hash:o,pathname:l,search:h}=gl(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:Or([t,l])),i.createHref({pathname:d,search:h,hash:o})}function ml(){return z.useContext(pl)!=null}function ms(){return Ze(ml(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(pl).location}var Pv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xv(n){z.useContext(hr).static||z.useLayoutEffect(n)}function gs(){let{isDataRoute:n}=z.useContext(Ur);return n?PT():yT()}function yT(){Ze(ml(),"useNavigate() may be used only in the context of a <Router> component.");let n=z.useContext(Fo),{basename:e,navigator:t}=z.useContext(hr),{matches:i}=z.useContext(Ur),{pathname:o}=ms(),l=JSON.stringify(Rv(i)),h=z.useRef(!1);return xv(()=>{h.current=!0}),z.useCallback((p,y={})=>{if(lr(h.current,Pv),!h.current)return;if(typeof p=="number"){t.go(p);return}let w=Av(p,JSON.parse(l),o,y.relative==="path");n==null&&e!=="/"&&(w.pathname=w.pathname==="/"?e:Or([e,w.pathname])),(y.replace?t.replace:t.push)(w,y.state,y)},[e,t,l,o,n])}z.createContext(null);function gl(n,{relative:e}={}){let{matches:t}=z.useContext(Ur),{pathname:i}=ms(),o=JSON.stringify(Rv(t));return z.useMemo(()=>Av(n,JSON.parse(o),i,e==="path"),[n,o,i,e])}function vT(n,e){return Nv(n,e)}function Nv(n,e,t,i){var $;Ze(ml(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=z.useContext(hr),{matches:l}=z.useContext(Ur),h=l[l.length-1],d=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",w=h&&h.route;{let G=w&&w.path||"";Dv(p,!w||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let I=ms(),S;if(e){let G=typeof e=="string"?jo(e):e;Ze(y==="/"||(($=G.pathname)==null?void 0:$.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${G.pathname}" was given in the \`location\` prop.`),S=G}else S=I;let D=S.pathname||"/",V=D;if(y!=="/"){let G=y.replace(/^\//,"").split("/");V="/"+D.replace(/^\//,"").split("/").slice(G.length).join("/")}let q=Tv(n,{pathname:V});lr(w||q!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),lr(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=IT(q&&q.map(G=>Object.assign({},G,{params:Object.assign({},d,G.params),pathname:Or([y,o.encodeLocation?o.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?y:Or([y,o.encodeLocation?o.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),l,t,i);return e&&b?z.createElement(pl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},b):b}function _T(){let n=kT(),e=dT(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},h=null;return console.error("Error handled by React Router default ErrorBoundary:",n),h=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:l},"ErrorBoundary")," or"," ",z.createElement("code",{style:l},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},e),t?z.createElement("pre",{style:o},t):null,h)}var wT=z.createElement(_T,null),ET=class extends z.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?z.createElement(Ur.Provider,{value:this.props.routeContext},z.createElement(wf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function TT({routeContext:n,match:e,children:t}){let i=z.useContext(Fo);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),z.createElement(Ur.Provider,{value:n},t)}function IT(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,d=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(d=p),y.route.id){let{loaderData:w,errors:I}=t,S=y.route.loader&&!w.hasOwnProperty(y.route.id)&&(!I||I[y.route.id]===void 0);if(y.route.lazy||S){h=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((p,y,w)=>{let I,S=!1,D=null,V=null;t&&(I=l&&y.route.id?l[y.route.id]:void 0,D=y.route.errorElement||wT,h&&(d<0&&w===0?(Dv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,V=null):d===w&&(S=!0,V=y.route.hydrateFallbackElement||null)));let q=e.concat(o.slice(0,w+1)),b=()=>{let $;return I?$=D:S?$=V:y.route.Component?$=z.createElement(y.route.Component,null):y.route.element?$=y.route.element:$=p,z.createElement(TT,{match:y,routeContext:{outlet:p,matches:q,isDataRoute:t!=null},children:$})};return t&&(y.route.ErrorBoundary||y.route.errorElement||w===0)?z.createElement(ET,{location:t.location,revalidation:t.revalidation,component:D,error:I,children:b(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):b()},null)}function Ef(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ST(n){let e=z.useContext(Fo);return Ze(e,Ef(n)),e}function RT(n){let e=z.useContext(kc);return Ze(e,Ef(n)),e}function AT(n){let e=z.useContext(Ur);return Ze(e,Ef(n)),e}function Tf(n){let e=AT(n),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function CT(){return Tf("useRouteId")}function kT(){var i;let n=z.useContext(wf),e=RT("useRouteError"),t=Tf("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function PT(){let{router:n}=ST("useNavigate"),e=Tf("useNavigate"),t=z.useRef(!1);return xv(()=>{t.current=!0}),z.useCallback(async(o,l={})=>{lr(t.current,Pv),t.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...l}))},[n,e])}var Wg={};function Dv(n,e,t){!e&&!Wg[n]&&(Wg[n]=!0,lr(!1,t))}z.memo(xT);function xT({routes:n,future:e,state:t}){return Nv(n,void 0,t,e)}function mi(n){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function NT({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:o,static:l=!1}){Ze(!ml(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),d=z.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=jo(t));let{pathname:p="/",search:y="",hash:w="",state:I=null,key:S="default"}=t,D=z.useMemo(()=>{let V=Ri(p,h);return V==null?null:{location:{pathname:V,search:y,hash:w,state:I,key:S},navigationType:i}},[h,p,y,w,I,S,i]);return lr(D!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${w}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:z.createElement(hr.Provider,{value:d},z.createElement(pl.Provider,{children:e,value:D}))}function DT({children:n,location:e}){return vT(Hd(n),e)}function Hd(n,e=[]){let t=[];return z.Children.forEach(n,(i,o)=>{if(!z.isValidElement(i))return;let l=[...e,o];if(i.type===z.Fragment){t.push.apply(t,Hd(i.props.children,l));return}Ze(i.type===mi,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!i.props.index||!i.props.children,"An index route cannot have child routes.");let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Hd(i.props.children,l)),t.push(h)}),t}var Ju="get",Zu="application/x-www-form-urlencoded";function Pc(n){return n!=null&&typeof n.tagName=="string"}function OT(n){return Pc(n)&&n.tagName.toLowerCase()==="button"}function LT(n){return Pc(n)&&n.tagName.toLowerCase()==="form"}function VT(n){return Pc(n)&&n.tagName.toLowerCase()==="input"}function bT(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function MT(n,e){return n.button===0&&(!e||e==="_self")&&!bT(n)}var Hu=null;function jT(){if(Hu===null)try{new FormData(document.createElement("form"),0),Hu=!1}catch{Hu=!0}return Hu}var FT=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Pd(n){return n!=null&&!FT.has(n)?(lr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zu}"`),null):n}function UT(n,e){let t,i,o,l,h;if(LT(n)){let d=n.getAttribute("action");i=d?Ri(d,e):null,t=n.getAttribute("method")||Ju,o=Pd(n.getAttribute("enctype"))||Zu,l=new FormData(n)}else if(OT(n)||VT(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?Ri(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Ju,o=Pd(n.getAttribute("formenctype"))||Pd(d.getAttribute("enctype"))||Zu,l=new FormData(d,n),!jT()){let{name:y,type:w,value:I}=n;if(w==="image"){let S=y?`${y}.`:"";l.append(`${S}x`,"0"),l.append(`${S}y`,"0")}else y&&l.append(y,I)}}else{if(Pc(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Ju,i=null,o=Zu,h=n}return l&&o==="text/plain"&&(h=l,l=void 0),{action:i,method:t.toLowerCase(),encType:o,formData:l,body:h}}function If(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function zT(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function BT(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function $T(n,e,t){let i=await Promise.all(n.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await zT(l,t);return h.links?h.links():[]}return[]}));return GT(i.flat(1).filter(BT).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Gg(n,e,t,i,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,d=(p,y)=>{var w;return t[y].pathname!==p.pathname||((w=t[y].route.path)==null?void 0:w.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||d(p,y)):l==="data"?e.filter((p,y)=>{var I;let w=i.routes[p.route.id];if(!w||!w.hasLoader)return!1;if(h(p,y)||d(p,y))return!0;if(p.route.shouldRevalidate){let S=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((I=t[0])==null?void 0:I.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof S=="boolean")return S}return!0}):[]}function qT(n,e){return HT(n.map(t=>{let i=e.routes[t.route.id];if(!i)return[];let o=[i.module];return i.imports&&(o=o.concat(i.imports)),o}).flat(1))}function HT(n){return[...new Set(n)]}function WT(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function GT(n,e){let t=new Set;return new Set(e),n.reduce((i,o)=>{let l=JSON.stringify(WT(o));return t.has(l)||(t.add(l),i.push({key:l,link:o})),i},[])}function KT(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function QT(){let n=z.useContext(Fo);return If(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function YT(){let n=z.useContext(kc);return If(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Sf=z.createContext(void 0);Sf.displayName="FrameworkContext";function Ov(){let n=z.useContext(Sf);return If(n,"You must render this element inside a <HydratedRouter> element"),n}function XT(n,e){let t=z.useContext(Sf),[i,o]=z.useState(!1),[l,h]=z.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:y,onMouseLeave:w,onTouchStart:I}=e,S=z.useRef(null);z.useEffect(()=>{if(n==="render"&&h(!0),n==="viewport"){let q=$=>{$.forEach(G=>{h(G.isIntersecting)})},b=new IntersectionObserver(q,{threshold:.5});return S.current&&b.observe(S.current),()=>{b.disconnect()}}},[n]),z.useEffect(()=>{if(i){let q=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout(q)}}},[i]);let D=()=>{o(!0)},V=()=>{o(!1),h(!1)};return t?n!=="intent"?[l,S,{}]:[l,S,{onFocus:$a(d,D),onBlur:$a(p,V),onMouseEnter:$a(y,D),onMouseLeave:$a(w,V),onTouchStart:$a(I,D)}]:[!1,S,{}]}function $a(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function JT({page:n,...e}){let{router:t}=QT(),i=z.useMemo(()=>Tv(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?z.createElement(eI,{page:n,matches:i,...e}):(console.warn(`Tried to prefetch ${n} but no routes matched.`),null)}function ZT(n){let{manifest:e,routeModules:t}=Ov(),[i,o]=z.useState([]);return z.useEffect(()=>{let l=!1;return $T(n,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[n,e,t]),i}function eI({page:n,matches:e,...t}){let i=ms(),{manifest:o,routeModules:l}=Ov(),{loaderData:h,matches:d}=YT(),p=z.useMemo(()=>Gg(n,e,d,o,i,"data"),[n,e,d,o,i]),y=z.useMemo(()=>Gg(n,e,d,o,i,"assets"),[n,e,d,o,i]),w=z.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let D=new Set,V=!1;if(e.forEach(b=>{var G;let $=o.routes[b.route.id];!$||!$.hasLoader||(!p.some(te=>te.route.id===b.route.id)&&b.route.id in h&&((G=l[b.route.id])!=null&&G.shouldRevalidate)||$.hasClientLoader?V=!0:D.add(b.route.id))}),D.size===0)return[];let q=KT(n);return V&&D.size>0&&q.searchParams.set("_routes",e.filter(b=>D.has(b.route.id)).map(b=>b.route.id).join(",")),[q.pathname+q.search]},[h,i,o,p,e,n,l]),I=z.useMemo(()=>qT(y,o),[y,o]),S=ZT(y);return z.createElement(z.Fragment,null,w.map(D=>z.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),I.map(D=>z.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),S.map(({key:D,link:V})=>z.createElement("link",{key:D,...V})))}function tI(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Lv&&(window.__reactRouterVersion="7.0.2")}catch{}function nI({basename:n,children:e,window:t}){let i=z.useRef();i.current==null&&(i.current=qE({window:t,v5Compat:!0}));let o=i.current,[l,h]=z.useState({action:o.action,location:o.location}),d=z.useCallback(p=>{z.startTransition(()=>h(p))},[h]);return z.useLayoutEffect(()=>o.listen(d),[o,d]),z.createElement(NT,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:o})}var Vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,mt=z.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:o,reloadDocument:l,replace:h,state:d,target:p,to:y,preventScrollReset:w,viewTransition:I,...S},D){let{basename:V}=z.useContext(hr),q=typeof y=="string"&&Vv.test(y),b,$=!1;if(typeof y=="string"&&q&&(b=y,Lv))try{let C=new URL(window.location.href),N=y.startsWith("//")?new URL(C.protocol+y):new URL(y),L=Ri(N.pathname,V);N.origin===C.origin&&L!=null?y=L+N.search+N.hash:$=!0}catch{lr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let G=gT(y,{relative:o}),[te,ce,Te]=XT(i,S),ge=oI(y,{replace:h,state:d,target:p,preventScrollReset:w,relative:o,viewTransition:I});function P(C){e&&e(C),C.defaultPrevented||ge(C)}let R=z.createElement("a",{...S,...Te,href:b||G,onClick:$||l?e:P,ref:tI(D,ce),target:p,"data-discover":!q&&t==="render"?"true":void 0});return te&&!q?z.createElement(z.Fragment,null,R,z.createElement(JT,{page:G})):R});mt.displayName="Link";var rI=z.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:o=!1,style:l,to:h,viewTransition:d,children:p,...y},w){let I=gl(h,{relative:y.relative}),S=ms(),D=z.useContext(kc),{navigator:V,basename:q}=z.useContext(hr),b=D!=null&&hI(I)&&d===!0,$=V.encodeLocation?V.encodeLocation(I).pathname:I.pathname,G=S.pathname,te=D&&D.navigation&&D.navigation.location?D.navigation.location.pathname:null;t||(G=G.toLowerCase(),te=te?te.toLowerCase():null,$=$.toLowerCase()),te&&q&&(te=Ri(te,q)||te);const ce=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let Te=G===$||!o&&G.startsWith($)&&G.charAt(ce)==="/",ge=te!=null&&(te===$||!o&&te.startsWith($)&&te.charAt($.length)==="/"),P={isActive:Te,isPending:ge,isTransitioning:b},R=Te?e:void 0,C;typeof i=="function"?C=i(P):C=[i,Te?"active":null,ge?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let N=typeof l=="function"?l(P):l;return z.createElement(mt,{...y,"aria-current":R,className:C,ref:w,style:N,to:h,viewTransition:d},typeof p=="function"?p(P):p)});rI.displayName="NavLink";var iI=z.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:o,state:l,method:h=Ju,action:d,onSubmit:p,relative:y,preventScrollReset:w,viewTransition:I,...S},D)=>{let V=uI(),q=cI(d,{relative:y}),b=h.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&Vv.test(d),G=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let ce=te.nativeEvent.submitter,Te=(ce==null?void 0:ce.getAttribute("formmethod"))||h;V(ce||te.currentTarget,{fetcherKey:e,method:Te,navigate:t,replace:o,state:l,relative:y,preventScrollReset:w,viewTransition:I})};return z.createElement("form",{ref:D,method:b,action:q,onSubmit:i?p:G,...S,"data-discover":!$&&n==="render"?"true":void 0})});iI.displayName="Form";function sI(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function bv(n){let e=z.useContext(Fo);return Ze(e,sI(n)),e}function oI(n,{target:e,replace:t,state:i,preventScrollReset:o,relative:l,viewTransition:h}={}){let d=gs(),p=ms(),y=gl(n,{relative:l});return z.useCallback(w=>{if(MT(w,e)){w.preventDefault();let I=t!==void 0?t:nl(p)===nl(y);d(n,{replace:I,state:i,preventScrollReset:o,relative:l,viewTransition:h})}},[p,d,y,t,i,e,n,o,l,h])}var aI=0,lI=()=>`__${String(++aI)}__`;function uI(){let{router:n}=bv("useSubmit"),{basename:e}=z.useContext(hr),t=CT();return z.useCallback(async(i,o={})=>{let{action:l,method:h,encType:d,formData:p,body:y}=UT(i,e);if(o.navigate===!1){let w=o.fetcherKey||lI();await n.fetch(w,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,flushSync:o.flushSync})}else await n.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||d,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,t])}function cI(n,{relative:e}={}){let{basename:t}=z.useContext(hr),i=z.useContext(Ur);Ze(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),l={...gl(n||".",{relative:e})},h=ms();if(n==null){l.search=h.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(w=>w==="")){d.delete("index"),p.filter(I=>I).forEach(I=>d.append("index",I));let w=d.toString();l.search=w?`?${w}`:""}}return(!n||n===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:Or([t,l.pathname])),nl(l)}function hI(n,e={}){let t=z.useContext(kv);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=bv("useViewTransitionState"),o=gl(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ri(t.currentLocation.pathname,i)||t.currentLocation.pathname,h=Ri(t.nextLocation.pathname,i)||t.nextLocation.pathname;return cc(o.pathname,h)!=null||cc(o.pathname,l)!=null}new TextEncoder;var Kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},dI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],d=n[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},jv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,d=h?n[o+1]:0,p=o+2<n.length,y=p?n[o+2]:0,w=l>>2,I=(l&3)<<4|d>>4;let S=(d&15)<<2|y>>6,D=y&63;p||(D=64,h||(S=64)),i.push(t[w],t[I],t[S],t[D])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],d=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const I=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||d==null||y==null||I==null)throw new fI;const S=l<<2|d>>4;if(i.push(S),y!==64){const D=d<<4&240|y>>2;if(i.push(D),I!==64){const V=y<<6&192|I;i.push(V)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pI=function(n){const e=Mv(n);return jv.encodeByteArray(e,!0)},hc=function(n){return pI(n).replace(/\./g,"")},Fv=function(n){try{return jv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI=()=>mI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof Kg>"u")return;const n=Kg.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fv(n[1]);return e&&JSON.parse(e)},xc=()=>{try{return gI()||yI()||vI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Uv=n=>{var e,t;return(t=(e=xc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_I=n=>{const e=Uv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},zv=()=>{var n;return(n=xc())===null||n===void 0?void 0:n.config},Bv=n=>{var e;return(e=xc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[hc(JSON.stringify(t)),hc(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(zt())}function II(){var n;const e=(n=xc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $v(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AI(){const n=zt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CI(){return!II()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Hv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function kI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="FirebaseError";class qn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=PI,Object.setPrototypeOf(this,qn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?xI(l,i):"Error",d=`${this.serviceName}: ${h} (${o}).`;return new qn(o,d,i)}}function xI(n,e){return n.replace(NI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const NI=/\{\$([^}]+)}/g;function DI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function rl(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(Qg(l)&&Qg(h)){if(!rl(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function Qg(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function qa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Ha(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function OI(n,e){const t=new LI(n,e);return t.subscribe.bind(t)}class LI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");VI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=xd),o.error===void 0&&(o.error=xd),o.complete===void 0&&(o.complete=xd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=1e3,MI=2,jI=4*60*60*1e3,FI=.5;function Yg(n,e=bI,t=MI){const i=e*Math.pow(t,n),o=Math.round(FI*i*(Math.random()-.5)*2);return Math.min(jI,i+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){return n&&n._delegate?n._delegate:n}class zn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new wI;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:os})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=os){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=os){return this.instances.has(e)}getOptions(e=os){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=os){return this.component?this.component.multipleInstances?e:os:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(n){return n===os?void 0:n}function BI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new UI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const qI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},HI=ke.INFO,WI={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},GI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=WI[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nc{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=GI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const KI=(n,e)=>e.some(t=>n instanceof t);let Xg,Jg;function QI(){return Xg||(Xg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YI(){return Jg||(Jg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wv=new WeakMap,Wd=new WeakMap,Gv=new WeakMap,Nd=new WeakMap,Rf=new WeakMap;function XI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ei(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&Wv.set(t,n)}).catch(()=>{}),Rf.set(e,n),e}function JI(n){if(Wd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Wd.set(n,e)}let Gd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Wd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ei(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ZI(n){Gd=n(Gd)}function eS(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Dd(this),e,...t);return Gv.set(i,e.sort?e.sort():[e]),Ei(i)}:YI().includes(n)?function(...e){return n.apply(Dd(this),e),Ei(Wv.get(this))}:function(...e){return Ei(n.apply(Dd(this),e))}}function tS(n){return typeof n=="function"?eS(n):(n instanceof IDBTransaction&&JI(n),KI(n,QI())?new Proxy(n,Gd):n)}function Ei(n){if(n instanceof IDBRequest)return XI(n);if(Nd.has(n))return Nd.get(n);const e=tS(n);return e!==n&&(Nd.set(n,e),Rf.set(e,n)),e}const Dd=n=>Rf.get(n);function Kv(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),d=Ei(h);return i&&h.addEventListener("upgradeneeded",p=>{i(Ei(h.result),p.oldVersion,p.newVersion,Ei(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),d}const nS=["get","getKey","getAll","getAllKeys","count"],rS=["put","add","delete","clear"],Od=new Map;function Zg(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Od.get(e))return Od.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=rS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||nS.includes(t)))return;const l=async function(h,...d){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return i&&(y=y.index(d.shift())),(await Promise.all([y[t](...d),o&&p.done]))[0]};return Od.set(e,l),l}ZI(n=>({...n,get:(e,t,i)=>Zg(e,t)||n.get(e,t,i),has:(e,t)=>!!Zg(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function sS(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kd="@firebase/app",ey="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new Nc("@firebase/app"),oS="@firebase/app-compat",aS="@firebase/analytics-compat",lS="@firebase/analytics",uS="@firebase/app-check-compat",cS="@firebase/app-check",hS="@firebase/auth",dS="@firebase/auth-compat",fS="@firebase/database",pS="@firebase/data-connect",mS="@firebase/database-compat",gS="@firebase/functions",yS="@firebase/functions-compat",vS="@firebase/installations",_S="@firebase/installations-compat",wS="@firebase/messaging",ES="@firebase/messaging-compat",TS="@firebase/performance",IS="@firebase/performance-compat",SS="@firebase/remote-config",RS="@firebase/remote-config-compat",AS="@firebase/storage",CS="@firebase/storage-compat",kS="@firebase/firestore",PS="@firebase/vertexai",xS="@firebase/firestore-compat",NS="firebase",DS="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="[DEFAULT]",OS={[Kd]:"fire-core",[oS]:"fire-core-compat",[lS]:"fire-analytics",[aS]:"fire-analytics-compat",[cS]:"fire-app-check",[uS]:"fire-app-check-compat",[hS]:"fire-auth",[dS]:"fire-auth-compat",[fS]:"fire-rtdb",[pS]:"fire-data-connect",[mS]:"fire-rtdb-compat",[gS]:"fire-fn",[yS]:"fire-fn-compat",[vS]:"fire-iid",[_S]:"fire-iid-compat",[wS]:"fire-fcm",[ES]:"fire-fcm-compat",[TS]:"fire-perf",[IS]:"fire-perf-compat",[SS]:"fire-rc",[RS]:"fire-rc-compat",[AS]:"fire-gcs",[CS]:"fire-gcs-compat",[kS]:"fire-fst",[xS]:"fire-fst-compat",[PS]:"fire-vertex","fire-js":"fire-js",[NS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new Map,LS=new Map,Yd=new Map;function ty(n,e){try{n.container.addComponent(e)}catch(t){br.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(Yd.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;Yd.set(e,n);for(const t of dc.values())ty(t,n);for(const t of LS.values())ty(t,n);return!0}function vs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nr(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ti=new ys("app","Firebase",VS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ti.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=DS;function Qv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Qd,automaticDataCollectionEnabled:!1},e),o=i.name;if(typeof o!="string"||!o)throw Ti.create("bad-app-name",{appName:String(o)});if(t||(t=zv()),!t)throw Ti.create("no-options");const l=dc.get(o);if(l){if(rl(t,l.options)&&rl(i,l.config))return l;throw Ti.create("duplicate-app",{appName:o})}const h=new $I(o);for(const p of Yd.values())h.addComponent(p);const d=new bS(t,i,h);return dc.set(o,d),d}function Af(n=Qd){const e=dc.get(n);if(!e&&n===Qd&&zv())return Qv();if(!e)throw Ti.create("no-app",{appName:n});return e}function In(n,e,t){var i;let o=(i=OS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const d=[`Unable to register library "${o}" with version "${e}":`];l&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&d.push("and"),h&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(d.join(" "));return}ur(new zn(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS="firebase-heartbeat-database",jS=1,il="firebase-heartbeat-store";let Ld=null;function Yv(){return Ld||(Ld=Kv(MS,jS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(il)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ti.create("idb-open",{originalErrorMessage:n.message})})),Ld}async function FS(n){try{const t=(await Yv()).transaction(il),i=await t.objectStore(il).get(Xv(n));return await t.done,i}catch(e){if(e instanceof qn)br.warn(e.message);else{const t=Ti.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(t.message)}}}async function ny(n,e){try{const i=(await Yv()).transaction(il,"readwrite");await i.objectStore(il).put(e,Xv(n)),await i.done}catch(t){if(t instanceof qn)br.warn(t.message);else{const i=Ti.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});br.warn(i.message)}}}function Xv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=1024,zS=30*24*60*60*1e3;class BS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new qS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=ry();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const d=new Date(h.date).valueOf();return Date.now()-d<=zS}),this._storage.overwrite(this._heartbeatsCache))}catch(i){br.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ry(),{heartbeatsToSend:i,unsentEntries:o}=$S(this._heartbeatsCache.heartbeats),l=hc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return br.warn(t),""}}}function ry(){return new Date().toISOString().substring(0,10)}function $S(n,e=US){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),iy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),iy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class qS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qv()?Hv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await FS(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ny(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return ny(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function iy(n){return hc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(n){ur(new zn("platform-logger",e=>new iS(e),"PRIVATE")),ur(new zn("heartbeat",e=>new BS(e),"PRIVATE")),In(Kd,ey,n),In(Kd,ey,"esm2017"),In("fire-js","")}HS("");function Cf(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function Jv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WS=Jv,Zv=new ys("auth","Firebase",Jv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc=new Nc("@firebase/auth");function GS(n,...e){fc.logLevel<=ke.WARN&&fc.warn(`Auth (${Uo}): ${n}`,...e)}function ec(n,...e){fc.logLevel<=ke.ERROR&&fc.error(`Auth (${Uo}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(n,...e){throw kf(n,...e)}function rr(n,...e){return kf(n,...e)}function e_(n,e,t){const i=Object.assign(Object.assign({},WS()),{[e]:t});return new ys("auth","Firebase",i).create(e,{appName:n.name})}function Lr(n){return e_(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kf(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Zv.create(n,...e)}function _e(n,e,...t){if(!n)throw kf(e,...t)}function xr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ec(e),new Error(e)}function Mr(n,e){n||xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function KS(){return sy()==="http:"||sy()==="https:"}function sy(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(KS()||$v()||"connection"in navigator)?navigator.onLine:!0}function YS(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=TI()||RI()}get(){return QS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(n,e){Mr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=new vl(3e4,6e4);function Ni(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function zr(n,e,t,i,o={}){return n_(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const d=yl(Object.assign({key:n.config.apiKey},h)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:p},l);return SI()||(y.referrerPolicy="no-referrer"),t_.fetch()(r_(n,n.config.apiHost,t,d),y)})}async function n_(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},XS),e);try{const o=new e1(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Wu(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const d=l.ok?h.errorMessage:h.error.message,[p,y]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Wu(n,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw Wu(n,"email-already-in-use",h);if(p==="USER_DISABLED")throw Wu(n,"user-disabled",h);const w=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw e_(n,w,y);Bn(n,w)}}catch(o){if(o instanceof qn)throw o;Bn(n,"network-request-failed",{message:String(o)})}}async function _l(n,e,t,i,o={}){const l=await zr(n,e,t,i,o);return"mfaPendingCredential"in l&&Bn(n,"multi-factor-auth-required",{_serverResponse:l}),l}function r_(n,e,t,i){const o=`${e}${t}?${i}`;return n.config.emulator?Pf(n.config,o):`${n.config.apiScheme}://${o}`}function ZS(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(rr(this.auth,"network-request-failed")),JS.get())})}}function Wu(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=rr(n,e,i);return o.customData._tokenResponse=t,o}function oy(n){return n!==void 0&&n.enterprise!==void 0}class t1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ZS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function n1(n,e){return zr(n,"GET","/v2/recaptchaConfig",Ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(n,e){return zr(n,"POST","/v1/accounts:delete",e)}async function i_(n,e){return zr(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i1(n,e=!1){const t=vt(n),i=await t.getIdToken(e),o=xf(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:i,authTime:Ya(Vd(o.auth_time)),issuedAtTime:Ya(Vd(o.iat)),expirationTime:Ya(Vd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Vd(n){return Number(n)*1e3}function xf(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return ec("JWT malformed, contained fewer than 3 sections"),null;try{const o=Fv(t);return o?JSON.parse(o):(ec("Failed to decode base64 JWT payload"),null)}catch(o){return ec("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function ay(n){const e=xf(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof qn&&s1(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function s1({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ya(this.lastLoginAt),this.creationTime=Ya(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await ko(n,i_(t,{idToken:i}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?s_(l.providerUserInfo):[],d=l1(n.providerData,h),p=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),w=p?y:!1,I={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Jd(l.createdAt,l.lastLoginAt),isAnonymous:w};Object.assign(n,I)}async function a1(n){const e=vt(n);await pc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function s_(n){return n.map(e=>{var{providerId:t}=e,i=Cf(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(n,e){const t=await n_(n,{},async()=>{const i=yl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=r_(n,o,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(h,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c1(n,e){return zr(n,"POST","/v2/accounts:revokeToken",Ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=ay(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await u1(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new So;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new So,this.toJSON())}_performRefresh(){return xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Nr{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=Cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new o1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Jd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ko(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return i1(this,e)}reload(){return a1(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Nr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nr(this.auth.app))return Promise.reject(Lr(this.auth));const e=await this.getIdToken();return await ko(this,r1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,d,p,y,w;const I=(i=t.displayName)!==null&&i!==void 0?i:void 0,S=(o=t.email)!==null&&o!==void 0?o:void 0,D=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,V=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(d=t.tenantId)!==null&&d!==void 0?d:void 0,b=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(y=t.createdAt)!==null&&y!==void 0?y:void 0,G=(w=t.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:te,emailVerified:ce,isAnonymous:Te,providerData:ge,stsTokenManager:P}=t;_e(te&&P,e,"internal-error");const R=So.fromJSON(this.name,P);_e(typeof te=="string",e,"internal-error"),pi(I,e.name),pi(S,e.name),_e(typeof ce=="boolean",e,"internal-error"),_e(typeof Te=="boolean",e,"internal-error"),pi(D,e.name),pi(V,e.name),pi(q,e.name),pi(b,e.name),pi($,e.name),pi(G,e.name);const C=new Nr({uid:te,auth:e,email:S,emailVerified:ce,displayName:I,isAnonymous:Te,photoURL:V,phoneNumber:D,tenantId:q,stsTokenManager:R,createdAt:$,lastLoginAt:G});return ge&&Array.isArray(ge)&&(C.providerData=ge.map(N=>Object.assign({},N))),b&&(C._redirectEventId=b),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new So;o.updateFromServerResponse(t);const l=new Nr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await pc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?s_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),d=new So;d.updateFromIdToken(i);const p=new Nr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Jd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=new Map;function Dr(n){Mr(n instanceof Function,"Expected a class definition");let e=ly.get(n);return e?(Mr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ly.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}o_.type="NONE";const uy=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n,e,t){return`firebase:${n}:${e}:${t}`}class Ro{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=tc(this.userKey,o.apiKey,l),this.fullPersistenceKey=tc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ro(Dr(uy),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Dr(uy);const h=tc(i,e.config.apiKey,e.name);let d=null;for(const y of t)try{const w=await y._get(h);if(w){const I=Nr._fromJSON(e,w);y!==l&&(d=I),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ro(l,e,i):(l=p[0],d&&await l._set(h,d.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Ro(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(f_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function a_(n=zt()){return/firefox\//i.test(n)}function l_(n=zt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(n=zt()){return/crios\//i.test(n)}function c_(n=zt()){return/iemobile/i.test(n)}function h_(n=zt()){return/android/i.test(n)}function d_(n=zt()){return/blackberry/i.test(n)}function f_(n=zt()){return/webos/i.test(n)}function Nf(n=zt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function h1(n=zt()){var e;return Nf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function d1(){return AI()&&document.documentMode===10}function p_(n=zt()){return Nf(n)||h_(n)||f_(n)||d_(n)||/windows phone/i.test(n)||c_(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(n,e=[]){let t;switch(n){case"Browser":t=cy(zt());break;case"Worker":t=`${cy(zt())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Uo}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,d)=>{try{const p=e(l);h(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p1(n,e={}){return zr(n,"GET","/v2/passwordPolicy",Ni(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1=6;class g1{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:m1,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hy(this),this.idTokenSubscription=new hy(this),this.beforeStateQueue=new f1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dr(t)),this._initializationPromise=this.queue(async()=>{var i,o;if(!this._deleted&&(this.persistenceManager=await Ro.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await i_(this,{idToken:e}),i=await Nr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nr(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===d)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nr(this.app))return Promise.reject(Lr(this));const t=e?vt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nr(this.app)?Promise.reject(Lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nr(this.app)?Promise.reject(Lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await p1(this),t=new g1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await c1(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Ro.create(this,[Dr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(d,this,"internal-error"),d.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&GS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function _s(n){return vt(n)}class hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=OI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function v1(n){Dc=n}function g_(n){return Dc.loadJS(n)}function _1(){return Dc.recaptchaEnterpriseScript}function w1(){return Dc.gapiScript}function E1(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class T1{constructor(){this.enterprise=new I1}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class I1{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const S1="recaptcha-enterprise",y_="NO_RECAPTCHA";class R1{constructor(e){this.type=S1,this.auth=_s(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,d)=>{n1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const y=new t1(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{d(p)})})}function o(l,h,d){const p=window.grecaptcha;oy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(y_)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new T1().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(d=>{if(!t&&oy(window.grecaptcha))o(d,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=_1();p.length!==0&&(p+=d),g_(p).then(()=>{o(d,l,h)}).catch(y=>{h(y)})}}).catch(d=>{h(d)})})}}async function dy(n,e,t,i=!1,o=!1){const l=new R1(n);let h;if(o)h=y_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,y=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:h}):Object.assign(d,{captchaResponse:h}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Zd(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await dy(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await dy(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(n,e){const t=vs(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(rl(l,e??{}))return o;Bn(o,"already-initialized")}return t.initialize({options:e})}function C1(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function k1(n,e,t){const i=_s(n);_e(i._canInitEmulator,i,"emulator-config-failed"),_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=v_(e),{host:h,port:d}=P1(e),p=d===null?"":`:${d}`;i.config.emulator={url:`${l}//${h}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:h,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),x1()}function v_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function P1(n){const e=v_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:fy(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:fy(h)}}}function fy(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function x1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return xr("not implemented")}_getIdTokenResponse(e){return xr("not implemented")}_linkToIdToken(e,t){return xr("not implemented")}_getReauthenticationResolver(e){return xr("not implemented")}}async function N1(n,e){return zr(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(n,e){return _l(n,"POST","/v1/accounts:signInWithPassword",Ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(n,e){return _l(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,e))}async function L1(n,e){return _l(n,"POST","/v1/accounts:signInWithEmailLink",Ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl extends Df{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new sl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new sl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,t,"signInWithPassword",D1);case"emailLink":return O1(e,{email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,i,"signUpPassword",N1);case"emailLink":return L1(e,{idToken:t,email:this._email,oobCode:this._password});default:Bn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(n,e){return _l(n,"POST","/v1/accounts:signInWithIdp",Ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="http://localhost";class cs extends Df{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Bn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=Cf(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new cs(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Ao(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ao(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ao(e,t)}buildRequest(){const e={requestUri:V1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M1(n){const e=qa(Ha(n)).link,t=e?qa(Ha(e)).deep_link_id:null,i=qa(Ha(n)).deep_link_id;return(i?qa(Ha(i)).link:null)||i||t||e||n}class Of{constructor(e){var t,i,o,l,h,d;const p=qa(Ha(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,w=(i=p.oobCode)!==null&&i!==void 0?i:null,I=b1((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&w&&I,"argument-error"),this.apiKey=y,this.operation=I,this.code=w,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=M1(e);try{return new Of(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this.providerId=zo.PROVIDER_ID}static credential(e,t){return sl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Of.parseLink(t);return _e(i,"argument-error"),sl._fromEmailAndCode(e,i.code,i.tenantId)}}zo.PROVIDER_ID="password";zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl extends __{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends wl{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";gi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends wl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.GOOGLE_SIGN_IN_METHOD="google.com";yi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends wl{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i extends wl{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:_i.PROVIDER_ID,signInMethod:_i.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return _i.credentialFromTaggedObject(e)}static credentialFromError(e){return _i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return _i.credential(t,i)}catch{return null}}}_i.TWITTER_SIGN_IN_METHOD="twitter.com";_i.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(n,e){return _l(n,"POST","/v1/accounts:signUp",Ni(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await Nr._fromIdTokenResponse(e,i,o),h=py(i);return new hs({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=py(i);return new hs({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function py(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends qn{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,mc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new mc(e,t,i,o)}}function w_(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mc._fromErrorAndOperation(n,l,e,i):l})}async function F1(n,e,t=!1){const i=await ko(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return hs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(n,e,t=!1){const{auth:i}=n;if(nr(i.app))return Promise.reject(Lr(i));const o="reauthenticate";try{const l=await ko(n,w_(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=xf(l.idToken);_e(h,i,"internal-error");const{sub:d}=h;return _e(n.uid===d,i,"user-mismatch"),hs._forOperation(n,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Bn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E_(n,e,t=!1){if(nr(n.app))return Promise.reject(Lr(n));const i="signIn",o=await w_(n,i,e),l=await hs._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function z1(n,e){return E_(_s(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n){const e=_s(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function B1(n,e,t){if(nr(n.app))return Promise.reject(Lr(n));const i=_s(n),h=await Zd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",j1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&T_(n),p}),d=await hs._fromIdTokenResponse(i,"signIn",h);return await i._updateCurrentUser(d.user),d}function $1(n,e,t){return nr(n.app)?Promise.reject(Lr(n)):z1(vt(n),zo.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&T_(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(n,e){return zr(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=vt(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},h=await ko(i,q1(i.auth,l));i.displayName=h.displayName||null,i.photoURL=h.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(h)}function W1(n,e,t,i){return vt(n).onIdTokenChanged(e,t,i)}function G1(n,e,t){return vt(n).beforeAuthStateChanged(e,t)}function K1(n,e,t,i){return vt(n).onAuthStateChanged(e,t,i)}function El(n){return vt(n).signOut()}const gc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gc,"1"),this.storage.removeItem(gc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=1e3,Y1=10;class S_ extends I_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,d,p)=>{this.notifyListeners(h,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);d1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Y1):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}S_.type="LOCAL";const X1=S_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_ extends I_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}R_.type="SESSION";const A_=R_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new Oc(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const d=Array.from(h).map(async y=>y(t.origin,l)),p=await J1(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((d,p)=>{const y=Lf("",20);o.port1.start();const w=setTimeout(()=>{p(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(I){const S=I;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(w),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(S.data.response);break;default:clearTimeout(w),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function eR(n){ir().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function tR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nR(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rR(){return C_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebaseLocalStorageDb",iR=1,yc="firebaseLocalStorage",P_="fbase_key";class Tl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lc(n,e){return n.transaction([yc],e?"readwrite":"readonly").objectStore(yc)}function sR(){const n=indexedDB.deleteDatabase(k_);return new Tl(n).toPromise()}function ef(){const n=indexedDB.open(k_,iR);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(yc,{keyPath:P_})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(yc)?e(i):(i.close(),await sR(),e(await ef()))})})}async function my(n,e,t){const i=Lc(n,!0).put({[P_]:e,value:t});return new Tl(i).toPromise()}async function oR(n,e){const t=Lc(n,!1).get(e),i=await new Tl(t).toPromise();return i===void 0?null:i.value}function gy(n,e){const t=Lc(n,!0).delete(e);return new Tl(t).toPromise()}const aR=800,lR=3;class x_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>lR)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return C_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(rR()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tR(),!this.activeServiceWorker)return;this.sender=new Z1(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await my(e,gc,"1"),await gy(e,gc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>my(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>oR(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>gy(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Lc(o,!1).getAll();return new Tl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x_.type="LOCAL";const uR=x_;new vl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(n,e){return e?Dr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf extends Df{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ao(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ao(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function hR(n){return E_(n.auth,new Vf(n),n.bypassAuthState)}function dR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),U1(t,new Vf(n),n.bypassAuthState)}async function fR(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),F1(t,new Vf(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:d}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hR;case"linkViaPopup":case"linkViaRedirect":return fR;case"reauthViaPopup":case"reauthViaRedirect":return dR;default:Bn(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new vl(2e3,1e4);class Io extends N_{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pR.get())};e()}}Io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR="pendingRedirect",nc=new Map;class gR extends N_{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=nc.get(this.auth._key());if(!e){try{const i=await yR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}nc.set(this.auth._key(),e)}return this.bypassAuthState||nc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yR(n,e){const t=wR(e),i=_R(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function vR(n,e){nc.set(n._key(),e)}function _R(n){return Dr(n._redirectPersistence)}function wR(n){return tc(mR,n.config.apiKey,n.name)}async function ER(n,e,t=!1){if(nr(n.app))return Promise.reject(Lr(n));const i=_s(n),o=cR(i,e),h=await new gR(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=10*60*1e3;class IR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SR(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!D_(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TR&&this.cachedEventUids.clear(),this.cachedEventUids.has(yy(e))}saveEventToCache(e){this.cachedEventUids.add(yy(e)),this.lastProcessedEventTime=Date.now()}}function yy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function D_({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function SR(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return D_(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RR(n,e={}){return zr(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CR=/^https?/;async function kR(n){if(n.config.emulator)return;const{authorizedDomains:e}=await RR(n);for(const t of e)try{if(PR(t))return}catch{}Bn(n,"unauthorized-domain")}function PR(n){const e=Xd(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!CR.test(t))return!1;if(AR.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new vl(3e4,6e4);function vy(){const n=ir().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function NR(n){return new Promise((e,t)=>{var i,o,l;function h(){vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vy(),t(rr(n,"network-request-failed"))},timeout:xR.get()})}if(!((o=(i=ir().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ir().gapi)===null||l===void 0)&&l.load)h();else{const d=E1("iframefcb");return ir()[d]=()=>{gapi.load?h():t(rr(n,"network-request-failed"))},g_(`${w1()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw rc=null,e})}let rc=null;function DR(n){return rc=rc||NR(n),rc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new vl(5e3,15e3),LR="__/auth/iframe",VR="emulator/auth/iframe",bR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jR(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Pf(e,VR):`https://${n.config.authDomain}/${LR}`,i={apiKey:e.apiKey,appName:n.name,v:Uo},o=MR.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${yl(i).slice(1)}`}async function FR(n){const e=await DR(n),t=ir().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:jR(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bR,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=rr(n,"network-request-failed"),d=ir().setTimeout(()=>{l(h)},OR.get());function p(){ir().clearTimeout(d),o(i)}i.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zR=500,BR=600,$R="_blank",qR="http://localhost";class _y{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function HR(n,e,t,i=zR,o=BR){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},UR),{width:i.toString(),height:o.toString(),top:l,left:h}),y=zt().toLowerCase();t&&(d=u_(y)?$R:t),a_(y)&&(e=e||qR,p.scrollbars="yes");const w=Object.entries(p).reduce((S,[D,V])=>`${S}${D}=${V},`,"");if(h1(y)&&d!=="_self")return WR(e||"",d),new _y(null);const I=window.open(e||"",d,w);_e(I,n,"popup-blocked");try{I.focus()}catch{}return new _y(I)}function WR(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="__/auth/handler",KR="emulator/auth/handler",QR=encodeURIComponent("fac");async function wy(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Uo,eventId:o};if(e instanceof __){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",DI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,I]of Object.entries({}))h[w]=I}if(e instanceof wl){const w=e.getScopes().filter(I=>I!=="");w.length>0&&(h.scopes=w.join(","))}n.tenantId&&(h.tid=n.tenantId);const d=h;for(const w of Object.keys(d))d[w]===void 0&&delete d[w];const p=await n._getAppCheckToken(),y=p?`#${QR}=${encodeURIComponent(p)}`:"";return`${YR(n)}?${yl(d).slice(1)}${y}`}function YR({config:n}){return n.emulator?Pf(n,KR):`https://${n.authDomain}/${GR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="webStorageSupport";class XR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A_,this._completeRedirectFn=ER,this._overrideRedirectResult=vR}async _openPopup(e,t,i,o){var l;Mr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await wy(e,t,i,Xd(),o);return HR(e,h,Lf())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await wy(e,t,i,Xd(),o);return eR(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await FR(e),i=new IR(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(bd,{type:bd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[bd];h!==void 0&&t(!!h),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kR(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return p_()||l_()||Nf()}}const JR=XR;var Ey="@firebase/auth",Ty="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eA(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tA(n){ur(new zn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:d}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:h,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(n)},y=new y1(i,o,l,p);return C1(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new zn("auth-internal",e=>{const t=_s(e.getProvider("auth").getImmediate());return(i=>new ZR(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Ey,Ty,eA(n)),In(Ey,Ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA=5*60,rA=Bv("authIdTokenMaxAge")||nA;let Iy=null;const iA=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>rA)return;const o=t==null?void 0:t.token;Iy!==o&&(Iy=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sA(n=Af()){const e=vs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=A1(n,{popupRedirectResolver:JR,persistence:[uR,X1,A_]}),i=Bv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=iA(l.toString());G1(t,h,()=>h(t.currentUser)),W1(t,d=>h(d))}}const o=Uv("auth");return o&&k1(t,`http://${o}`),t}function oA(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}v1({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=rr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",oA().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tA("Browser");var aA="firebase",lA="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In(aA,lA,"app");const O_="@firebase/installations",bf="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=1e4,V_=`w:${bf}`,b_="FIS_v2",uA="https://firebaseinstallations.googleapis.com/v1",cA=60*60*1e3,hA="installations",dA="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ds=new ys(hA,dA,fA);function M_(n){return n instanceof qn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_({projectId:n}){return`${uA}/projects/${n}/installations`}function F_(n){return{token:n.token,requestStatus:2,expiresIn:mA(n.expiresIn),creationTime:Date.now()}}async function U_(n,e){const i=(await e.json()).error;return ds.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function z_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function pA(n,{refreshToken:e}){const t=z_(n);return t.append("Authorization",gA(e)),t}async function B_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function mA(n){return Number(n.replace("s","000"))}function gA(n){return`${b_} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=j_(n),o=z_(n),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:b_,appId:n.appId,sdkVersion:V_},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await B_(()=>fetch(i,d));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:F_(y.authToken)}}else throw await U_("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=/^[cdef][\w-]{21}$/,tf="";function wA(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=EA(n);return _A.test(t)?t:tf}catch{return tf}}function EA(n){return vA(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=new Map;function H_(n,e){const t=Vc(n);W_(t,e),TA(t,e)}function W_(n,e){const t=q_.get(n);if(t)for(const i of t)i(e)}function TA(n,e){const t=IA();t&&t.postMessage({key:n,fid:e}),SA()}let as=null;function IA(){return!as&&"BroadcastChannel"in self&&(as=new BroadcastChannel("[Firebase] FID Change"),as.onmessage=n=>{W_(n.data.key,n.data.fid)}),as}function SA(){q_.size===0&&as&&(as.close(),as=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RA="firebase-installations-database",AA=1,fs="firebase-installations-store";let Md=null;function Mf(){return Md||(Md=Kv(RA,AA,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(fs)}}})),Md}async function vc(n,e){const t=Vc(n),o=(await Mf()).transaction(fs,"readwrite"),l=o.objectStore(fs),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&H_(n,e.fid),e}async function G_(n){const e=Vc(n),i=(await Mf()).transaction(fs,"readwrite");await i.objectStore(fs).delete(e),await i.done}async function bc(n,e){const t=Vc(n),o=(await Mf()).transaction(fs,"readwrite"),l=o.objectStore(fs),h=await l.get(t),d=e(h);return d===void 0?await l.delete(t):await l.put(d,t),await o.done,d&&(!h||h.fid!==d.fid)&&H_(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(n){let e;const t=await bc(n.appConfig,i=>{const o=CA(i),l=kA(n,o);return e=l.registrationPromise,l.installationEntry});return t.fid===tf?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function CA(n){const e=n||{fid:wA(),registrationStatus:0};return K_(e)}function kA(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ds.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=PA(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xA(n)}:{installationEntry:e}}async function PA(n,e){try{const t=await yA(n,e);return vc(n.appConfig,t)}catch(t){throw M_(t)&&t.customData.serverCode===409?await G_(n.appConfig):await vc(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function xA(n){let e=await Sy(n.appConfig);for(;e.registrationStatus===1;)await $_(100),e=await Sy(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await jf(n);return i||t}return e}function Sy(n){return bc(n,e=>{if(!e)throw ds.create("installation-not-found");return K_(e)})}function K_(n){return NA(n)?{fid:n.fid,registrationStatus:0}:n}function NA(n){return n.registrationStatus===1&&n.registrationTime+L_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DA({appConfig:n,heartbeatServiceProvider:e},t){const i=OA(n,t),o=pA(n,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:V_,appId:n.appId}},d={method:"POST",headers:o,body:JSON.stringify(h)},p=await B_(()=>fetch(i,d));if(p.ok){const y=await p.json();return F_(y)}else throw await U_("Generate Auth Token",p)}function OA(n,{fid:e}){return`${j_(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ff(n,e=!1){let t;const i=await bc(n.appConfig,l=>{if(!Q_(l))throw ds.create("not-registered");const h=l.authToken;if(!e&&bA(h))return l;if(h.requestStatus===1)return t=LA(n,e),l;{if(!navigator.onLine)throw ds.create("app-offline");const d=jA(l);return t=VA(n,d),d}});return t?await t:i.authToken}async function LA(n,e){let t=await Ry(n.appConfig);for(;t.authToken.requestStatus===1;)await $_(100),t=await Ry(n.appConfig);const i=t.authToken;return i.requestStatus===0?Ff(n,e):i}function Ry(n){return bc(n,e=>{if(!Q_(e))throw ds.create("not-registered");const t=e.authToken;return FA(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function VA(n,e){try{const t=await DA(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await vc(n.appConfig,i),t}catch(t){if(M_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await G_(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await vc(n.appConfig,i)}throw t}}function Q_(n){return n!==void 0&&n.registrationStatus===2}function bA(n){return n.requestStatus===2&&!MA(n)}function MA(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+cA}function jA(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function FA(n){return n.requestStatus===1&&n.requestTime+L_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(n){const e=n,{installationEntry:t,registrationPromise:i}=await jf(e);return i?i.catch(console.error):Ff(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(n,e=!1){const t=n;return await BA(t),(await Ff(t,e)).token}async function BA(n){const{registrationPromise:e}=await jf(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){if(!n||!n.options)throw jd("App Configuration");if(!n.name)throw jd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw jd(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function jd(n){return ds.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_="installations",qA="installations-internal",HA=n=>{const e=n.getProvider("app").getImmediate(),t=$A(e),i=vs(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},WA=n=>{const e=n.getProvider("app").getImmediate(),t=vs(e,Y_).getImmediate();return{getId:()=>UA(t),getToken:o=>zA(t,o)}};function GA(){ur(new zn(Y_,HA,"PUBLIC")),ur(new zn(qA,WA,"PRIVATE"))}GA();In(O_,bf);In(O_,bf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="analytics",KA="firebase_id",QA="origin",YA=60*1e3,XA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Uf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new Nc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},hn=new ys("analytics","Analytics",JA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZA(n){if(!n.startsWith(Uf)){const e=hn.create("invalid-gtag-resource",{gtagURL:n});return nn.warn(e.message),""}return n}function X_(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function eC(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function tC(n,e){const t=eC("firebase-js-sdk-policy",{createScriptURL:ZA}),i=document.createElement("script"),o=`${Uf}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(o):o,i.async=!0,document.head.appendChild(i)}function nC(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function rC(n,e,t,i,o,l){const h=i[o];try{if(h)await e[h];else{const p=(await X_(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(d){nn.error(d)}n("config",o,l)}async function iC(n,e,t,i,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const d=await X_(t);for(const p of h){const y=d.find(I=>I.measurementId===p),w=y&&e[y.appId];if(w)l.push(w);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,o||{})}catch(l){nn.error(l)}}function sC(n,e,t,i){async function o(l,...h){try{if(l==="event"){const[d,p]=h;await iC(n,e,t,d,p)}else if(l==="config"){const[d,p]=h;await rC(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=h;n("consent",d,p)}else if(l==="get"){const[d,p,y]=h;n("get",d,p,y)}else if(l==="set"){const[d]=h;n("set",d)}else n(l,...h)}catch(d){nn.error(d)}}return o}function oC(n,e,t,i,o){let l=function(...h){window[i].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=sC(l,n,e,t),{gtagCore:l,wrappedGtag:window[o]}}function aC(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Uf)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC=30,uC=1e3;class cC{constructor(e={},t=uC){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const J_=new cC;function hC(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function dC(n){var e;const{appId:t,apiKey:i}=n,o={method:"GET",headers:hC(i)},l=XA.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let d="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw hn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:d})}return h.json()}async function fC(n,e=J_,t){const{appId:i,apiKey:o,measurementId:l}=n.options;if(!i)throw hn.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:i};throw hn.create("no-api-key")}const h=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new gC;return setTimeout(async()=>{d.abort()},YA),Z_({appId:i,apiKey:o,measurementId:l},h,d,e)}async function Z_(n,{throttleEndTimeMillis:e,backoffCount:t},i,o=J_){var l;const{appId:h,measurementId:d}=n;try{await pC(i,e)}catch(p){if(d)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:d};throw p}try{const p=await dC(n);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!mC(y)){if(o.deleteThrottleMetadata(h),d)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:d};throw p}const w=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Yg(t,o.intervalMillis,lC):Yg(t,o.intervalMillis),I={throttleEndTimeMillis:Date.now()+w,backoffCount:t+1};return o.setThrottleMetadata(h,I),nn.debug(`Calling attemptFetch again in ${w} millis`),Z_(n,I,i,o)}}function pC(n,e){return new Promise((t,i)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);n.addEventListener(()=>{clearTimeout(l),i(hn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function mC(n){if(!(n instanceof qn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class gC{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function yC(n,e,t,i,o){if(o&&o.global){n("event",t,i);return}else{const l=await e,h=Object.assign(Object.assign({},i),{send_to:l});n("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vC(){if(qv())try{await Hv()}catch(n){return nn.warn(hn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return nn.warn(hn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function _C(n,e,t,i,o,l,h){var d;const p=fC(n);p.then(D=>{t[D.measurementId]=D.appId,n.options.measurementId&&D.measurementId!==n.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${D.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(D=>nn.error(D)),e.push(p);const y=vC().then(D=>{if(D)return i.getId()}),[w,I]=await Promise.all([p,y]);aC(l)||tC(l,w.measurementId),o("js",new Date);const S=(d=h==null?void 0:h.config)!==null&&d!==void 0?d:{};return S[QA]="firebase",S.update=!0,I!=null&&(S[KA]=I),o("config",w.measurementId,S),w.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(e){this.app=e}_delete(){return delete Xa[this.app.options.appId],Promise.resolve()}}let Xa={},Ay=[];const Cy={};let Fd="dataLayer",EC="gtag",ky,ew,Py=!1;function TC(){const n=[];if($v()&&n.push("This is a browser extension environment."),kI()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,o)=>`(${o+1}) ${i}`).join(" "),t=hn.create("invalid-analytics-context",{errorInfo:e});nn.warn(t.message)}}function IC(n,e,t){TC();const i=n.options.appId;if(!i)throw hn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw hn.create("no-api-key");if(Xa[i]!=null)throw hn.create("already-exists",{id:i});if(!Py){nC(Fd);const{wrappedGtag:l,gtagCore:h}=oC(Xa,Ay,Cy,Fd,EC);ew=l,ky=h,Py=!0}return Xa[i]=_C(n,Ay,Cy,e,ky,Fd,t),new wC(n)}function SC(n=Af()){n=vt(n);const e=vs(n,_c);return e.isInitialized()?e.getImmediate():RC(n)}function RC(n,e={}){const t=vs(n,_c);if(t.isInitialized()){const o=t.getImmediate();if(rl(e,t.getOptions()))return o;throw hn.create("already-initialized")}return t.initialize({options:e})}function AC(n,e,t,i){n=vt(n),yC(ew,Xa[n.app.options.appId],e,t,i).catch(o=>nn.error(o))}const xy="@firebase/analytics",Ny="0.10.10";function CC(){ur(new zn(_c,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return IC(i,o,t)},"PUBLIC")),ur(new zn("analytics-internal",n,"PRIVATE")),In(xy,Ny),In(xy,Ny,"esm2017");function n(e){try{const t=e.getProvider(_c).getImmediate();return{logEvent:(i,o,l)=>AC(t,i,o,l)}}catch(t){throw hn.create("interop-component-reg-failed",{reason:t})}}}CC();var Dy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var us,tw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,R){function C(){}C.prototype=R.prototype,P.D=R.prototype,P.prototype=new C,P.prototype.constructor=P,P.C=function(N,L,j){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return R.prototype[L].apply(N,k)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,R,C){C||(C=0);var N=Array(16);if(typeof R=="string")for(var L=0;16>L;++L)N[L]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(L=0;16>L;++L)N[L]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=P.g[0],C=P.g[1],L=P.g[2];var j=P.g[3],k=R+(j^C&(L^j))+N[0]+3614090360&4294967295;R=C+(k<<7&4294967295|k>>>25),k=j+(L^R&(C^L))+N[1]+3905402710&4294967295,j=R+(k<<12&4294967295|k>>>20),k=L+(C^j&(R^C))+N[2]+606105819&4294967295,L=j+(k<<17&4294967295|k>>>15),k=C+(R^L&(j^R))+N[3]+3250441966&4294967295,C=L+(k<<22&4294967295|k>>>10),k=R+(j^C&(L^j))+N[4]+4118548399&4294967295,R=C+(k<<7&4294967295|k>>>25),k=j+(L^R&(C^L))+N[5]+1200080426&4294967295,j=R+(k<<12&4294967295|k>>>20),k=L+(C^j&(R^C))+N[6]+2821735955&4294967295,L=j+(k<<17&4294967295|k>>>15),k=C+(R^L&(j^R))+N[7]+4249261313&4294967295,C=L+(k<<22&4294967295|k>>>10),k=R+(j^C&(L^j))+N[8]+1770035416&4294967295,R=C+(k<<7&4294967295|k>>>25),k=j+(L^R&(C^L))+N[9]+2336552879&4294967295,j=R+(k<<12&4294967295|k>>>20),k=L+(C^j&(R^C))+N[10]+4294925233&4294967295,L=j+(k<<17&4294967295|k>>>15),k=C+(R^L&(j^R))+N[11]+2304563134&4294967295,C=L+(k<<22&4294967295|k>>>10),k=R+(j^C&(L^j))+N[12]+1804603682&4294967295,R=C+(k<<7&4294967295|k>>>25),k=j+(L^R&(C^L))+N[13]+4254626195&4294967295,j=R+(k<<12&4294967295|k>>>20),k=L+(C^j&(R^C))+N[14]+2792965006&4294967295,L=j+(k<<17&4294967295|k>>>15),k=C+(R^L&(j^R))+N[15]+1236535329&4294967295,C=L+(k<<22&4294967295|k>>>10),k=R+(L^j&(C^L))+N[1]+4129170786&4294967295,R=C+(k<<5&4294967295|k>>>27),k=j+(C^L&(R^C))+N[6]+3225465664&4294967295,j=R+(k<<9&4294967295|k>>>23),k=L+(R^C&(j^R))+N[11]+643717713&4294967295,L=j+(k<<14&4294967295|k>>>18),k=C+(j^R&(L^j))+N[0]+3921069994&4294967295,C=L+(k<<20&4294967295|k>>>12),k=R+(L^j&(C^L))+N[5]+3593408605&4294967295,R=C+(k<<5&4294967295|k>>>27),k=j+(C^L&(R^C))+N[10]+38016083&4294967295,j=R+(k<<9&4294967295|k>>>23),k=L+(R^C&(j^R))+N[15]+3634488961&4294967295,L=j+(k<<14&4294967295|k>>>18),k=C+(j^R&(L^j))+N[4]+3889429448&4294967295,C=L+(k<<20&4294967295|k>>>12),k=R+(L^j&(C^L))+N[9]+568446438&4294967295,R=C+(k<<5&4294967295|k>>>27),k=j+(C^L&(R^C))+N[14]+3275163606&4294967295,j=R+(k<<9&4294967295|k>>>23),k=L+(R^C&(j^R))+N[3]+4107603335&4294967295,L=j+(k<<14&4294967295|k>>>18),k=C+(j^R&(L^j))+N[8]+1163531501&4294967295,C=L+(k<<20&4294967295|k>>>12),k=R+(L^j&(C^L))+N[13]+2850285829&4294967295,R=C+(k<<5&4294967295|k>>>27),k=j+(C^L&(R^C))+N[2]+4243563512&4294967295,j=R+(k<<9&4294967295|k>>>23),k=L+(R^C&(j^R))+N[7]+1735328473&4294967295,L=j+(k<<14&4294967295|k>>>18),k=C+(j^R&(L^j))+N[12]+2368359562&4294967295,C=L+(k<<20&4294967295|k>>>12),k=R+(C^L^j)+N[5]+4294588738&4294967295,R=C+(k<<4&4294967295|k>>>28),k=j+(R^C^L)+N[8]+2272392833&4294967295,j=R+(k<<11&4294967295|k>>>21),k=L+(j^R^C)+N[11]+1839030562&4294967295,L=j+(k<<16&4294967295|k>>>16),k=C+(L^j^R)+N[14]+4259657740&4294967295,C=L+(k<<23&4294967295|k>>>9),k=R+(C^L^j)+N[1]+2763975236&4294967295,R=C+(k<<4&4294967295|k>>>28),k=j+(R^C^L)+N[4]+1272893353&4294967295,j=R+(k<<11&4294967295|k>>>21),k=L+(j^R^C)+N[7]+4139469664&4294967295,L=j+(k<<16&4294967295|k>>>16),k=C+(L^j^R)+N[10]+3200236656&4294967295,C=L+(k<<23&4294967295|k>>>9),k=R+(C^L^j)+N[13]+681279174&4294967295,R=C+(k<<4&4294967295|k>>>28),k=j+(R^C^L)+N[0]+3936430074&4294967295,j=R+(k<<11&4294967295|k>>>21),k=L+(j^R^C)+N[3]+3572445317&4294967295,L=j+(k<<16&4294967295|k>>>16),k=C+(L^j^R)+N[6]+76029189&4294967295,C=L+(k<<23&4294967295|k>>>9),k=R+(C^L^j)+N[9]+3654602809&4294967295,R=C+(k<<4&4294967295|k>>>28),k=j+(R^C^L)+N[12]+3873151461&4294967295,j=R+(k<<11&4294967295|k>>>21),k=L+(j^R^C)+N[15]+530742520&4294967295,L=j+(k<<16&4294967295|k>>>16),k=C+(L^j^R)+N[2]+3299628645&4294967295,C=L+(k<<23&4294967295|k>>>9),k=R+(L^(C|~j))+N[0]+4096336452&4294967295,R=C+(k<<6&4294967295|k>>>26),k=j+(C^(R|~L))+N[7]+1126891415&4294967295,j=R+(k<<10&4294967295|k>>>22),k=L+(R^(j|~C))+N[14]+2878612391&4294967295,L=j+(k<<15&4294967295|k>>>17),k=C+(j^(L|~R))+N[5]+4237533241&4294967295,C=L+(k<<21&4294967295|k>>>11),k=R+(L^(C|~j))+N[12]+1700485571&4294967295,R=C+(k<<6&4294967295|k>>>26),k=j+(C^(R|~L))+N[3]+2399980690&4294967295,j=R+(k<<10&4294967295|k>>>22),k=L+(R^(j|~C))+N[10]+4293915773&4294967295,L=j+(k<<15&4294967295|k>>>17),k=C+(j^(L|~R))+N[1]+2240044497&4294967295,C=L+(k<<21&4294967295|k>>>11),k=R+(L^(C|~j))+N[8]+1873313359&4294967295,R=C+(k<<6&4294967295|k>>>26),k=j+(C^(R|~L))+N[15]+4264355552&4294967295,j=R+(k<<10&4294967295|k>>>22),k=L+(R^(j|~C))+N[6]+2734768916&4294967295,L=j+(k<<15&4294967295|k>>>17),k=C+(j^(L|~R))+N[13]+1309151649&4294967295,C=L+(k<<21&4294967295|k>>>11),k=R+(L^(C|~j))+N[4]+4149444226&4294967295,R=C+(k<<6&4294967295|k>>>26),k=j+(C^(R|~L))+N[11]+3174756917&4294967295,j=R+(k<<10&4294967295|k>>>22),k=L+(R^(j|~C))+N[2]+718787259&4294967295,L=j+(k<<15&4294967295|k>>>17),k=C+(j^(L|~R))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+R&4294967295,P.g[1]=P.g[1]+(L+(k<<21&4294967295|k>>>11))&4294967295,P.g[2]=P.g[2]+L&4294967295,P.g[3]=P.g[3]+j&4294967295}i.prototype.u=function(P,R){R===void 0&&(R=P.length);for(var C=R-this.blockSize,N=this.B,L=this.h,j=0;j<R;){if(L==0)for(;j<=C;)o(this,P,j),j+=this.blockSize;if(typeof P=="string"){for(;j<R;)if(N[L++]=P.charCodeAt(j++),L==this.blockSize){o(this,N),L=0;break}}else for(;j<R;)if(N[L++]=P[j++],L==this.blockSize){o(this,N),L=0;break}}this.h=L,this.o+=R},i.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var R=1;R<P.length-8;++R)P[R]=0;var C=8*this.o;for(R=P.length-8;R<P.length;++R)P[R]=C&255,C/=256;for(this.u(P),P=Array(16),R=C=0;4>R;++R)for(var N=0;32>N;N+=8)P[C++]=this.g[R]>>>N&255;return P};function l(P,R){var C=d;return Object.prototype.hasOwnProperty.call(C,P)?C[P]:C[P]=R(P)}function h(P,R){this.h=R;for(var C=[],N=!0,L=P.length-1;0<=L;L--){var j=P[L]|0;N&&j==R||(C[L]=j,N=!1)}this.g=C}var d={};function p(P){return-128<=P&&128>P?l(P,function(R){return new h([R|0],0>R?-1:0)}):new h([P|0],0>P?-1:0)}function y(P){if(isNaN(P)||!isFinite(P))return I;if(0>P)return b(y(-P));for(var R=[],C=1,N=0;P>=C;N++)R[N]=P/C|0,C*=4294967296;return new h(R,0)}function w(P,R){if(P.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(P.charAt(0)=="-")return b(w(P.substring(1),R));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(R,8)),N=I,L=0;L<P.length;L+=8){var j=Math.min(8,P.length-L),k=parseInt(P.substring(L,L+j),R);8>j?(j=y(Math.pow(R,j)),N=N.j(j).add(y(k))):(N=N.j(C),N=N.add(y(k)))}return N}var I=p(0),S=p(1),D=p(16777216);n=h.prototype,n.m=function(){if(q(this))return-b(this).m();for(var P=0,R=1,C=0;C<this.g.length;C++){var N=this.i(C);P+=(0<=N?N:4294967296+N)*R,R*=4294967296}return P},n.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(V(this))return"0";if(q(this))return"-"+b(this).toString(P);for(var R=y(Math.pow(P,6)),C=this,N="";;){var L=ce(C,R).g;C=$(C,L.j(R));var j=((0<C.g.length?C.g[0]:C.h)>>>0).toString(P);if(C=L,V(C))return j+N;for(;6>j.length;)j="0"+j;N=j+N}},n.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function V(P){if(P.h!=0)return!1;for(var R=0;R<P.g.length;R++)if(P.g[R]!=0)return!1;return!0}function q(P){return P.h==-1}n.l=function(P){return P=$(this,P),q(P)?-1:V(P)?0:1};function b(P){for(var R=P.g.length,C=[],N=0;N<R;N++)C[N]=~P.g[N];return new h(C,~P.h).add(S)}n.abs=function(){return q(this)?b(this):this},n.add=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0,L=0;L<=R;L++){var j=N+(this.i(L)&65535)+(P.i(L)&65535),k=(j>>>16)+(this.i(L)>>>16)+(P.i(L)>>>16);N=k>>>16,j&=65535,k&=65535,C[L]=k<<16|j}return new h(C,C[C.length-1]&-2147483648?-1:0)};function $(P,R){return P.add(b(R))}n.j=function(P){if(V(this)||V(P))return I;if(q(this))return q(P)?b(this).j(b(P)):b(b(this).j(P));if(q(P))return b(this.j(b(P)));if(0>this.l(D)&&0>P.l(D))return y(this.m()*P.m());for(var R=this.g.length+P.g.length,C=[],N=0;N<2*R;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var L=0;L<P.g.length;L++){var j=this.i(N)>>>16,k=this.i(N)&65535,nt=P.i(L)>>>16,Dt=P.i(L)&65535;C[2*N+2*L]+=k*Dt,G(C,2*N+2*L),C[2*N+2*L+1]+=j*Dt,G(C,2*N+2*L+1),C[2*N+2*L+1]+=k*nt,G(C,2*N+2*L+1),C[2*N+2*L+2]+=j*nt,G(C,2*N+2*L+2)}for(N=0;N<R;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=R;N<2*R;N++)C[N]=0;return new h(C,0)};function G(P,R){for(;(P[R]&65535)!=P[R];)P[R+1]+=P[R]>>>16,P[R]&=65535,R++}function te(P,R){this.g=P,this.h=R}function ce(P,R){if(V(R))throw Error("division by zero");if(V(P))return new te(I,I);if(q(P))return R=ce(b(P),R),new te(b(R.g),b(R.h));if(q(R))return R=ce(P,b(R)),new te(b(R.g),R.h);if(30<P.g.length){if(q(P)||q(R))throw Error("slowDivide_ only works with positive integers.");for(var C=S,N=R;0>=N.l(P);)C=Te(C),N=Te(N);var L=ge(C,1),j=ge(N,1);for(N=ge(N,2),C=ge(C,2);!V(N);){var k=j.add(N);0>=k.l(P)&&(L=L.add(C),j=k),N=ge(N,1),C=ge(C,1)}return R=$(P,L.j(R)),new te(L,R)}for(L=I;0<=P.l(R);){for(C=Math.max(1,Math.floor(P.m()/R.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),j=y(C),k=j.j(R);q(k)||0<k.l(P);)C-=N,j=y(C),k=j.j(R);V(j)&&(j=S),L=L.add(j),P=$(P,k)}return new te(L,P)}n.A=function(P){return ce(this,P).h},n.and=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)&P.i(N);return new h(C,this.h&P.h)},n.or=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)|P.i(N);return new h(C,this.h|P.h)},n.xor=function(P){for(var R=Math.max(this.g.length,P.g.length),C=[],N=0;N<R;N++)C[N]=this.i(N)^P.i(N);return new h(C,this.h^P.h)};function Te(P){for(var R=P.g.length+1,C=[],N=0;N<R;N++)C[N]=P.i(N)<<1|P.i(N-1)>>>31;return new h(C,P.h)}function ge(P,R){var C=R>>5;R%=32;for(var N=P.g.length-C,L=[],j=0;j<N;j++)L[j]=0<R?P.i(j+C)>>>R|P.i(j+C+1)<<32-R:P.i(j+C);return new h(L,P.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,tw=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=w,us=h}).apply(typeof Dy<"u"?Dy:typeof self<"u"?self:typeof window<"u"?window:{});var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nw,Wa,rw,ic,nf,iw,sw,ow;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,v){return u==Array.prototype||u==Object.prototype||(u[m]=v.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gu=="object"&&Gu];for(var m=0;m<u.length;++m){var v=u[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function o(u,m){if(m)e:{var v=i;u=u.split(".");for(var T=0;T<u.length-1;T++){var F=u[T];if(!(F in v))break e;v=v[F]}u=u[u.length-1],T=v[u],m=m(T),m!=T&&m!=null&&e(v,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var v=0,T=!1,F={next:function(){if(!T&&v<u.length){var W=v++;return{value:m(W,u[W]),done:!1}}return T=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},d=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function w(u,m,v){return u.call.apply(u.bind,arguments)}function I(u,m,v){if(!u)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,T),u.apply(m,F)}}return function(){return u.apply(m,arguments)}}function S(u,m,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?w:I,S.apply(null,arguments)}function D(u,m){var v=Array.prototype.slice.call(arguments,1);return function(){var T=v.slice();return T.push.apply(T,arguments),u.apply(this,T)}}function V(u,m){function v(){}v.prototype=m.prototype,u.aa=m.prototype,u.prototype=new v,u.prototype.constructor=u,u.Qb=function(T,F,W){for(var ne=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)ne[Ue-2]=arguments[Ue];return m.prototype[F].apply(T,ne)}}function q(u){const m=u.length;if(0<m){const v=Array(m);for(let T=0;T<m;T++)v[T]=u[T];return v}return[]}function b(u,m){for(let v=1;v<arguments.length;v++){const T=arguments[v];if(p(T)){const F=u.length||0,W=T.length||0;u.length=F+W;for(let ne=0;ne<W;ne++)u[F+ne]=T[ne]}else u.push(T)}}class ${constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function G(u){return/^[\s\xa0]*$/.test(u)}function te(){var u=d.navigator;return u&&(u=u.userAgent)?u:""}function ce(u){return ce[" "](u),u}ce[" "]=function(){};var Te=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ge(u,m,v){for(const T in u)m.call(v,u[T],T,u)}function P(u,m){for(const v in u)m.call(void 0,u[v],v,u)}function R(u){const m={};for(const v in u)m[v]=u[v];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,m){let v,T;for(let F=1;F<arguments.length;F++){T=arguments[F];for(v in T)u[v]=T[v];for(let W=0;W<C.length;W++)v=C[W],Object.prototype.hasOwnProperty.call(T,v)&&(u[v]=T[v])}}function L(u){var m=1;u=u.split(":");const v=[];for(;0<m&&u.length;)v.push(u.shift()),m--;return u.length&&v.push(u.join(":")),v}function j(u){d.setTimeout(()=>{throw u},0)}function k(){var u=me;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,v){const T=Dt.get();T.set(m,v),this.h?this.h.next=T:this.g=T,this.h=T}}var Dt=new $(()=>new Ot,u=>u.reset());class Ot{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,me=new nt,se=()=>{const u=d.Promise.resolve(void 0);ze=()=>{u.then(M)}};var M=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(v){j(v)}var m=Dt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const v=()=>{};d.addEventListener("test",v,m),d.removeEventListener("test",v,m)}catch{}return u}();function Ae(u,m){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var v=this.type=u.type,T=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Te){e:{try{ce(m.nodeName);var F=!0;break e}catch{}F=!1}F||(m=null)}}else v=="mouseover"?m=u.fromElement:v=="mouseout"&&(m=u.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}V(Ae,fe);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),je=0;function $e(u,m,v,T,F){this.listener=u,this.proxy=null,this.src=m,this.type=v,this.capture=!!T,this.ha=F,this.key=++je,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function dr(u){this.src=u,this.g={},this.h=0}dr.prototype.add=function(u,m,v,T,F){var W=u.toString();u=this.g[W],u||(u=this.g[W]=[],this.h++);var ne=$r(u,m,T,F);return-1<ne?(m=u[ne],v||(m.fa=!1)):(m=new $e(m,this.src,W,!!T,F),m.fa=v,u.push(m)),m};function As(u,m){var v=m.type;if(v in u.g){var T=u.g[v],F=Array.prototype.indexOf.call(T,m,void 0),W;(W=0<=F)&&Array.prototype.splice.call(T,F,1),W&&(_t(m),u.g[v].length==0&&(delete u.g[v],u.h--))}}function $r(u,m,v,T){for(var F=0;F<u.length;++F){var W=u[F];if(!W.da&&W.listener==m&&W.capture==!!v&&W.ha==T)return F}return-1}var Di="closure_lm_"+(1e6*Math.random()|0),Cs={};function Go(u,m,v,T,F){if(Array.isArray(m)){for(var W=0;W<m.length;W++)Go(u,m[W],v,T,F);return null}return v=Yo(v),u&&u[Me]?u.K(m,v,y(T)?!!T.capture:!!T,F):Ko(u,m,v,!1,T,F)}function Ko(u,m,v,T,F,W){if(!m)throw Error("Invalid event type");var ne=y(F)?!!F.capture:!!F,Ue=Ps(u);if(Ue||(u[Di]=Ue=new dr(u)),v=Ue.add(m,v,T,ne,W),v.proxy)return v;if(T=Pl(),v.proxy=T,T.src=u,T.listener=v,u.addEventListener)Re||(F=ne),F===void 0&&(F=!1),u.addEventListener(m.toString(),T,F);else if(u.attachEvent)u.attachEvent(pr(m.toString()),T);else if(u.addListener&&u.removeListener)u.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Pl(){function u(v){return m.call(u.src,u.listener,v)}const m=Qo;return u}function ks(u,m,v,T,F){if(Array.isArray(m))for(var W=0;W<m.length;W++)ks(u,m[W],v,T,F);else T=y(T)?!!T.capture:!!T,v=Yo(v),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(W=u.g[m],v=$r(W,v,T,F),-1<v&&(_t(W[v]),Array.prototype.splice.call(W,v,1),W.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ps(u))&&(m=u.g[m.toString()],u=-1,m&&(u=$r(m,v,T,F)),(v=-1<u?m[u]:null)&&fr(v))}function fr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])As(m.i,u);else{var v=u.type,T=u.proxy;m.removeEventListener?m.removeEventListener(v,T,u.capture):m.detachEvent?m.detachEvent(pr(v),T):m.addListener&&m.removeListener&&m.removeListener(T),(v=Ps(m))?(As(v,u),v.h==0&&(v.src=null,m[Di]=null)):_t(u)}}}function pr(u){return u in Cs?Cs[u]:Cs[u]="on"+u}function Qo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var v=u.listener,T=u.ha||u.src;u.fa&&fr(u),u=v.call(T,m)}return u}function Ps(u){return u=u[Di],u instanceof dr?u:null}var xs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yo(u){return typeof u=="function"?u:(u[xs]||(u[xs]=function(m){return u.handleEvent(m)}),u[xs])}function ct(){Q.call(this),this.i=new dr(this),this.M=this,this.F=null}V(ct,Q),ct.prototype[Me]=!0,ct.prototype.removeEventListener=function(u,m,v,T){ks(this,u,m,v,T)};function ht(u,m){var v,T=u.F;if(T)for(v=[];T;T=T.F)v.push(T);if(u=u.M,T=m.type||m,typeof m=="string")m=new fe(m,u);else if(m instanceof fe)m.target=m.target||u;else{var F=m;m=new fe(T,u),N(m,F)}if(F=!0,v)for(var W=v.length-1;0<=W;W--){var ne=m.g=v[W];F=mr(ne,T,!0,m)&&F}if(ne=m.g=u,F=mr(ne,T,!0,m)&&F,F=mr(ne,T,!1,m)&&F,v)for(W=0;W<v.length;W++)ne=m.g=v[W],F=mr(ne,T,!1,m)&&F}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var v=u.g[m],T=0;T<v.length;T++)_t(v[T]);delete u.g[m],u.h--}}this.F=null},ct.prototype.K=function(u,m,v,T){return this.i.add(String(u),m,!1,v,T)},ct.prototype.L=function(u,m,v,T){return this.i.add(String(u),m,!0,v,T)};function mr(u,m,v,T){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var F=!0,W=0;W<m.length;++W){var ne=m[W];if(ne&&!ne.da&&ne.capture==v){var Ue=ne.listener,dt=ne.ha||ne.src;ne.fa&&As(u.i,ne),F=Ue.call(dt,T)!==!1&&F}}return F&&!T.defaultPrevented}function Xo(u,m,v){if(typeof u=="function")v&&(u=S(u,v));else if(u&&typeof u.handleEvent=="function")u=S(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(u,m||0)}function qr(u){u.g=Xo(()=>{u.g=null,u.i&&(u.i=!1,qr(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class Oi extends Q{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:qr(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Li(u){Q.call(this),this.h=u,this.g={}}V(Li,Q);var Jo=[];function Zo(u){ge(u.g,function(m,v){this.g.hasOwnProperty(v)&&fr(m)},u),u.g={}}Li.prototype.N=function(){Li.aa.N.call(this),Zo(this)},Li.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ea=d.JSON.stringify,ta=d.JSON.parse,na=class{stringify(u){return d.JSON.stringify(u,void 0)}parse(u){return d.JSON.parse(u,void 0)}};function Vi(){}Vi.prototype.h=null;function Ns(u){return u.h||(u.h=u.i())}function Ds(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hn(){fe.call(this,"d")}V(Hn,fe);function Os(){fe.call(this,"c")}V(Os,fe);var Wn={},ra=null;function bi(){return ra=ra||new ct}Wn.La="serverreachability";function ia(u){fe.call(this,Wn.La,u)}V(ia,fe);function gr(u){const m=bi();ht(m,new ia(m))}Wn.STAT_EVENT="statevent";function sa(u,m){fe.call(this,Wn.STAT_EVENT,u),this.stat=m}V(sa,fe);function rt(u){const m=bi();ht(m,new sa(m,u))}Wn.Ma="timingevent";function Ls(u,m){fe.call(this,Wn.Ma,u),this.size=m}V(Ls,fe);function Rn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){u()},m)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function ji(u,m,v,T,F,W){u.info(function(){if(u.g)if(W)for(var ne="",Ue=W.split("&"),dt=0;dt<Ue.length;dt++){var Oe=Ue[dt].split("=");if(1<Oe.length){var wt=Oe[0];Oe=Oe[1];var ot=wt.split("_");ne=2<=ot.length&&ot[1]=="type"?ne+(wt+"="+Oe+"&"):ne+(wt+"=redacted&")}}else ne=null;else ne=W;return"XMLHTTP REQ ("+T+") [attempt "+F+"]: "+m+`
`+v+`
`+ne})}function Vs(u,m,v,T,F,W,ne){u.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+F+"]: "+m+`
`+v+`
`+W+" "+ne})}function An(u,m,v,T){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+Xc(u,v)+(T?" "+T:"")})}function oa(u,m){u.info(function(){return"TIMEOUT: "+m})}Mi.prototype.info=function(){};function Xc(u,m){if(!u.g)return m;if(!m)return null;try{var v=JSON.parse(m);if(v){for(u=0;u<v.length;u++)if(Array.isArray(v[u])){var T=v[u];if(!(2>T.length)){var F=T[1];if(Array.isArray(F)&&!(1>F.length)){var W=F[0];if(W!="noop"&&W!="stop"&&W!="close")for(var ne=1;ne<F.length;ne++)F[ne]=""}}}}return ea(v)}catch{return m}}var bs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cn;function Fi(){}V(Fi,Vi),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Cn=new Fi;function kn(u,m,v,T){this.j=u,this.i=m,this.l=v,this.R=T||1,this.U=new Li(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nl}function Nl(){this.i=null,this.g="",this.h=!1}var aa={},Ms={};function js(u,m,v){u.L=1,u.v=Qr(sn(m)),u.m=v,u.P=!0,la(u,null)}function la(u,m){u.F=Date.now(),qe(u),u.A=sn(u.v);var v=u.A,T=u.R;Array.isArray(T)||(T=[String(T)]),Xr(v.i,"t",T),u.C=0,v=u.j.J,u.h=new Nl,u.g=Ql(u.j,v?m:null,!u.m),0<u.O&&(u.M=new Oi(S(u.Y,u,u.g),u.O)),m=u.U,v=u.g,T=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(Jo[0]=F.toString()),F=Jo);for(var W=0;W<F.length;W++){var ne=Go(v,F[W],T||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),gr(),ji(u.i,u.u,u.A,u.l,u.R,u.m)}kn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Kt(u)==3?m.j():this.Y(u)},kn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Kt(this.g);var m=this.g.Ba();const mn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||pa(this.g)))){this.J||ot!=4||m==7||(m==8||0>=mn?gr(3):gr(2)),Ui(this);var v=this.g.Z();this.X=v;t:if(Dl(this)){var T=pa(this.g);u="";var F=T.length,W=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),Hr(this);var ne="";break t}this.h.i=new d.TextDecoder}for(m=0;m<F;m++)this.h.h=!0,u+=this.h.i.decode(T[m],{stream:!(W&&m==F-1)});T.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=v==200,Vs(this.i,this.u,this.A,this.l,this.R,ot,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,dt=this.g;if((Ue=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(Ue)){var Oe=Ue;break t}}Oe=null}if(v=Oe)An(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ua(this,v);else{this.o=!1,this.s=3,rt(12),fn(this),Hr(this);break e}}if(this.P){v=!0;let an;for(;!this.J&&this.C<ne.length;)if(an=Jc(this,ne),an==Ms){ot==4&&(this.s=4,rt(14),v=!1),An(this.i,this.l,null,"[Incomplete Response]");break}else if(an==aa){this.s=4,rt(15),An(this.i,this.l,ne,"[Invalid Chunk]"),v=!1;break}else An(this.i,this.l,an,null),ua(this,an);if(Dl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ne.length!=0||this.h.h||(this.s=1,rt(16),v=!1),this.o=this.o&&v,!v)An(this.i,this.l,ne,"[Invalid Chunked Response]"),fn(this),Hr(this);else if(0<ne.length&&!this.W){this.W=!0;var wt=this.j;wt.g==this&&wt.ba&&!wt.M&&(wt.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),ga(wt),wt.M=!0,rt(11))}}else An(this.i,this.l,ne,null),ua(this,ne);ot==4&&fn(this),this.o&&!this.J&&(ot==4?Qs(this.j,this):(this.o=!1,qe(this)))}else qs(this.g),v==400&&0<ne.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),fn(this),Hr(this)}}}catch{}finally{}};function Dl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Jc(u,m){var v=u.C,T=m.indexOf(`
`,v);return T==-1?Ms:(v=Number(m.substring(v,T)),isNaN(v)?aa:(T+=1,T+v>m.length?Ms:(m=m.slice(T,T+v),u.C=T+v,m)))}kn.prototype.cancel=function(){this.J=!0,fn(this)};function qe(u){u.S=Date.now()+u.I,Ol(u,u.I)}function Ol(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Rn(S(u.ba,u),m)}function Ui(u){u.B&&(d.clearTimeout(u.B),u.B=null)}kn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(oa(this.i,this.A),this.L!=2&&(gr(),rt(17)),fn(this),this.s=2,Hr(this)):Ol(this,this.S-u)};function Hr(u){u.j.G==0||u.J||Qs(u.j,u)}function fn(u){Ui(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Zo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function ua(u,m){try{var v=u.j;if(v.G!=0&&(v.g==u||Bt(v.h,u))){if(!u.K&&Bt(v.h,u)&&v.G==3){try{var T=v.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var F=T;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<u.F)Ks(v),On(v);else break e;Gs(v),rt(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Rn(S(v.Za,v),6e3));if(1>=Vl(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Er(v,11)}else if((u.K||v.g==u)&&Ks(v),!G(m))for(F=v.Da.g.parse(m),m=0;m<F.length;m++){let Oe=F[m];if(v.T=Oe[0],Oe=Oe[1],v.G==2)if(Oe[0]=="c"){v.K=Oe[1],v.ia=Oe[2];const wt=Oe[3];wt!=null&&(v.la=wt,v.j.info("VER="+v.la));const ot=Oe[4];ot!=null&&(v.Aa=ot,v.j.info("SVER="+v.Aa));const mn=Oe[5];mn!=null&&typeof mn=="number"&&0<mn&&(T=1.5*mn,v.L=T,v.j.info("backChannelRequestTimeoutMs_="+T)),T=v;const an=u.g;if(an){const Gi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var W=T.h;W.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(W.j=W.l,W.g=new Set,W.h&&(ca(W,W.h),W.h=null))}if(T.D){const Xs=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Xs&&(T.ya=Xs,Be(T.I,T.D,Xs))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-u.F,v.j.info("Handshake RTT: "+v.R+"ms")),T=v;var ne=u;if(T.qa=Kl(T,T.J?T.ia:null,T.W),ne.K){bl(T.h,ne);var Ue=ne,dt=T.L;dt&&(Ue.I=dt),Ue.B&&(Ui(Ue),qe(Ue)),T.g=ne}else Wi(T);0<v.i.length&&Yn(v)}else Oe[0]!="stop"&&Oe[0]!="close"||Er(v,7);else v.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Er(v,7):At(v):Oe[0]!="noop"&&v.l&&v.l.ta(Oe),v.v=0)}}gr(4)}catch{}}var Ll=class{constructor(u,m){this.g=u,this.map=m}};function zi(u){this.l=u||10,d.PerformanceNavigationTiming?(u=d.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Vl(u){return u.h?1:u.g?u.g.size:0}function Bt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function ca(u,m){u.g?u.g.add(m):u.h=m}function bl(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}zi.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ml(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const v of u.g.values())m=m.concat(v.D);return m}return q(u.i)}function Fs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],v=u.length,T=0;T<v;T++)m.push(u[T]);return m}m=[],v=0;for(T in u)m[v++]=u[T];return m}function Us(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var v=0;v<u;v++)m.push(v);return m}m=[],v=0;for(const T in u)m[v++]=T;return m}}}function Wr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var v=Us(u),T=Fs(u),F=T.length,W=0;W<F;W++)m.call(void 0,T[W],v&&v[W],u)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zc(u,m){if(u){u=u.split("&");for(var v=0;v<u.length;v++){var T=u[v].indexOf("="),F=null;if(0<=T){var W=u[v].substring(0,T);F=u[v].substring(T+1)}else W=u[v];m(W,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function yr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof yr){this.h=u.h,$i(this,u.j),this.o=u.o,this.g=u.g,Gr(this,u.s),this.l=u.l;var m=u.i,v=new Gn;v.i=m.i,m.g&&(v.g=new Map(m.g),v.h=m.h),Kr(this,v),this.m=u.m}else u&&(m=String(u).match(Bi))?(this.h=!1,$i(this,m[1]||"",!0),this.o=xe(m[2]||""),this.g=xe(m[3]||"",!0),Gr(this,m[4]),this.l=xe(m[5]||"",!0),Kr(this,m[6]||"",!0),this.m=xe(m[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}yr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Yr(m,zs,!0),":");var v=this.g;return(v||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Yr(m,zs,!0),"@"),u.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&u.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&u.push("/"),u.push(Yr(v,v.charAt(0)=="/"?Ul:Fl,!0))),(v=this.i.toString())&&u.push("?",v),(v=this.m)&&u.push("#",Yr(v,ha)),u.join("")};function sn(u){return new yr(u)}function $i(u,m,v){u.j=v?xe(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Gr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Kr(u,m,v){m instanceof Gn?(u.i=m,Kn(u.i,u.h)):(v||(m=Yr(m,zl)),u.i=new Gn(m,u.h))}function Be(u,m,v){u.i.set(m,v)}function Qr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Yr(u,m,v){return typeof u=="string"?(u=encodeURI(u).replace(m,jl),v&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function jl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var zs=/[#\/\?@]/g,Fl=/[#\?:]/g,Ul=/[#\?]/g,zl=/[#\?@]/g,ha=/#/g;function Gn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function Rt(u){u.g||(u.g=new Map,u.h=0,u.i&&Zc(u.i,function(m,v){u.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}n=Gn.prototype,n.add=function(u,m){Rt(this),this.i=null,u=pn(this,u);var v=this.g.get(u);return v||this.g.set(u,v=[]),v.push(m),this.h+=1,this};function Pn(u,m){Rt(u),m=pn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function xn(u,m){return Rt(u),m=pn(u,m),u.g.has(m)}n.forEach=function(u,m){Rt(this),this.g.forEach(function(v,T){v.forEach(function(F){u.call(m,F,T,this)},this)},this)},n.na=function(){Rt(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),v=[];for(let T=0;T<m.length;T++){const F=u[T];for(let W=0;W<F.length;W++)v.push(m[T])}return v},n.V=function(u){Rt(this);let m=[];if(typeof u=="string")xn(this,u)&&(m=m.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let v=0;v<u.length;v++)m=m.concat(u[v])}return m},n.set=function(u,m){return Rt(this),this.i=null,u=pn(this,u),xn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},n.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Xr(u,m,v){Pn(u,m),0<v.length&&(u.i=null,u.g.set(pn(u,m),q(v)),u.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var v=0;v<m.length;v++){var T=m[v];const W=encodeURIComponent(String(T)),ne=this.V(T);for(T=0;T<ne.length;T++){var F=W;ne[T]!==""&&(F+="="+encodeURIComponent(String(ne[T]))),u.push(F)}}return this.i=u.join("&")};function pn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Kn(u,m){m&&!u.j&&(Rt(u),u.i=null,u.g.forEach(function(v,T){var F=T.toLowerCase();T!=F&&(Pn(this,T),Xr(this,F,v))},u)),u.j=m}function eh(u,m){const v=new Mi;if(d.Image){const T=new Image;T.onload=D(Gt,v,"TestLoadImage: loaded",!0,m,T),T.onerror=D(Gt,v,"TestLoadImage: error",!1,m,T),T.onabort=D(Gt,v,"TestLoadImage: abort",!1,m,T),T.ontimeout=D(Gt,v,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=u}else m(!1)}function Bl(u,m){const v=new Mi,T=new AbortController,F=setTimeout(()=>{T.abort(),Gt(v,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:T.signal}).then(W=>{clearTimeout(F),W.ok?Gt(v,"TestPingServer: ok",!0,m):Gt(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(F),Gt(v,"TestPingServer: error",!1,m)})}function Gt(u,m,v,T,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),T(v)}catch{}}function th(){this.g=new na}function $l(u,m,v){const T=v||"";try{Wr(u,function(F,W){let ne=F;y(F)&&(ne=ea(F)),m.push(T+W+"="+encodeURIComponent(ne))})}catch(F){throw m.push(T+"type="+encodeURIComponent("_badmap")),F}}function vr(u){this.l=u.Ub||null,this.j=u.eb||!1}V(vr,Vi),vr.prototype.g=function(){return new qi(this.l,this.j)},vr.prototype.i=function(u){return function(){return u}}({});function qi(u,m){ct.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(qi,ct),n=qi.prototype,n.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,Dn(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Nn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Nn(this):Dn(this),this.readyState==3&&ql(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Nn(this))},n.Qa=function(u){this.g&&(this.response=u,Nn(this))},n.ga=function(){this.g&&Nn(this)};function Nn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Dn(u)}n.setRequestHeader=function(u,m){this.u.append(u,m)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,u.push(v[0]+": "+v[1]),v=m.next();return u.join(`\r
`)};function Dn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function _r(u){let m="";return ge(u,function(v,T){m+=T,m+=":",m+=v,m+=`\r
`}),m}function Jr(u,m,v){e:{for(T in v){var T=!1;break e}T=!0}T||(v=_r(v),typeof u=="string"?v!=null&&encodeURIComponent(String(v)):Be(u,m,v))}function Qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Qe,ct);var nh=/^https?$/i,da=["POST","PUT"];n=Qe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,m,v,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cn.g(),this.v=this.o?Ns(this.o):Ns(Cn),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(W){Hi(this,W);return}if(u=v||"",v=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var F in T)v.set(F,T[F]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const W of T.keys())v.set(W,T.get(W));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(v.keys()).find(W=>W.toLowerCase()=="content-type"),F=d.FormData&&u instanceof d.FormData,!(0<=Array.prototype.indexOf.call(da,m,void 0))||T||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[W,ne]of v)this.g.setRequestHeader(W,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{$s(this),this.u=!0,this.g.send(u),this.u=!1}catch(W){Hi(this,W)}};function Hi(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Bs(u),on(u)}function Bs(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),on(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fa(this):this.bb())},n.bb=function(){fa(this)};function fa(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)Xo(u.Ea,0,u);else if(ht(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var T;if(T=ne===0){var F=String(u.D).match(Bi)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),T=!nh.test(F?F.toLowerCase():"")}v=T}if(v)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var W=2<Kt(u)?u.g.statusText:""}catch{W=""}u.l=W+" ["+u.Z()+"]",Bs(u)}}finally{on(u)}}}}function on(u,m){if(u.g){$s(u);const v=u.g,T=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ht(u,"ready");try{v.onreadystatechange=T}catch{}}}function $s(u){u.I&&(d.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),ta(m)}};function pa(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function qs(u){const m={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<u.length;T++){if(G(u[T]))continue;var v=L(u[T]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const W=m[F]||[];m[F]=W,W.push(v)}P(m,function(T){return T.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(u,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[u]||m}function ma(u){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,u),this.cb=Qn("retryDelaySeedMs",1e4,u),this.Wa=Qn("forwardChannelMaxRetries",2,u),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new th,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ma.prototype,n.la=8,n.G=1,n.connect=function(u,m,v,T){rt(0),this.W=u,this.H=m||{},v&&T!==void 0&&(this.H.OSID=v,this.H.OAID=T),this.F=this.X,this.I=Kl(this,null,this.W),Yn(this)};function At(u){if(Hs(u),u.G==3){var m=u.U++,v=sn(u.I);if(Be(v,"SID",u.K),Be(v,"RID",m),Be(v,"TYPE","terminate"),wr(u,v),m=new kn(u,u.j,m),m.L=2,m.v=Qr(sn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=m.v,v=!0),v||(m.g=Ql(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}Gl(u)}function On(u){u.g&&(ga(u),u.g.cancel(),u.g=null)}function Hs(u){On(u),u.u&&(d.clearTimeout(u.u),u.u=null),Ks(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&d.clearTimeout(u.s),u.s=null)}function Yn(u){if(!rn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||se(),re||(ze(),re=!0),me.add(m,u),u.B=0}}function rh(u,m){return Vl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Rn(S(u.Ga,u,m),Wl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new kn(this,this.j,u);let W=this.o;if(this.S&&(W?(W=R(W),N(W,this.S)):W=this.S),this.m!==null||this.O||(F.H=W,W=null),this.P)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var T=this.i[v];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Zr(this,F,m),v=sn(this.I),Be(v,"RID",u),Be(v,"CVER",22),this.D&&Be(v,"X-HTTP-Session-Id",this.D),wr(this,v),W&&(this.O?m="headers="+encodeURIComponent(String(_r(W)))+"&"+m:this.m&&Jr(v,this.m,W)),ca(this.h,F),this.Ua&&Be(v,"TYPE","init"),this.P?(Be(v,"$req",m),Be(v,"SID","null"),F.T=!0,js(F,v,null)):js(F,v,m),this.G=2}}else this.G==3&&(u?Ws(this,u):this.i.length==0||rn(this.h)||Ws(this))};function Ws(u,m){var v;m?v=m.l:v=u.U++;const T=sn(u.I);Be(T,"SID",u.K),Be(T,"RID",v),Be(T,"AID",u.T),wr(u,T),u.m&&u.o&&Jr(T,u.m,u.o),v=new kn(u,u.j,v,u.B+1),u.m===null&&(v.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Zr(u,v,1e3),v.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ca(u.h,v),js(v,T,m)}function wr(u,m){u.H&&ge(u.H,function(v,T){Be(m,T,v)}),u.l&&Wr({},function(v,T){Be(m,T,v)})}function Zr(u,m,v){v=Math.min(u.i.length,v);var T=u.l?S(u.l.Na,u.l,u):null;e:{var F=u.i;let W=-1;for(;;){const ne=["count="+v];W==-1?0<v?(W=F[0].g,ne.push("ofs="+W)):W=0:ne.push("ofs="+W);let Ue=!0;for(let dt=0;dt<v;dt++){let Oe=F[dt].g;const wt=F[dt].map;if(Oe-=W,0>Oe)W=Math.max(0,F[dt].g-100),Ue=!1;else try{$l(wt,ne,"req"+Oe+"_")}catch{T&&T(wt)}}if(Ue){T=ne.join("&");break e}}}return u=u.i.splice(0,v),m.D=u,T}function Wi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||se(),re||(ze(),re=!0),me.add(m,u),u.v=0}}function Gs(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Rn(S(u.Fa,u),Wl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Hl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Rn(S(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),On(this),Hl(this))};function ga(u){u.A!=null&&(d.clearTimeout(u.A),u.A=null)}function Hl(u){u.g=new kn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=sn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),wr(u,m),u.m&&u.o&&Jr(m,u.m,u.o),u.L&&(u.g.I=u.L);var v=u.g;u=u.ia,v.L=1,v.v=Qr(sn(m)),v.m=null,v.P=!0,la(v,u)}n.Za=function(){this.C!=null&&(this.C=null,On(this),Gs(this),rt(19))};function Ks(u){u.C!=null&&(d.clearTimeout(u.C),u.C=null)}function Qs(u,m){var v=null;if(u.g==m){Ks(u),ga(u),u.g=null;var T=2}else if(Bt(u.h,m))v=m.D,bl(u.h,m),T=1;else return;if(u.G!=0){if(m.o)if(T==1){v=m.m?m.m.length:0,m=Date.now()-m.F;var F=u.B;T=bi(),ht(T,new Ls(T,v)),Yn(u)}else Wi(u);else if(F=m.s,F==3||F==0&&0<m.X||!(T==1&&rh(u,m)||T==2&&Gs(u)))switch(v&&0<v.length&&(m=u.h,m.i=m.i.concat(v)),F){case 1:Er(u,5);break;case 4:Er(u,10);break;case 3:Er(u,6);break;default:Er(u,2)}}}function Wl(u,m){let v=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(v*=2),v*m}function Er(u,m){if(u.j.info("Error code "+m),m==2){var v=S(u.fb,u),T=u.Xa;const F=!T;T=new yr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||$i(T,"https"),Qr(T),F?eh(T.toString(),v):Bl(T.toString(),v)}else rt(2);u.G=0,u.l&&u.l.sa(m),Gl(u),Hs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function Gl(u){if(u.G=0,u.ka=[],u.l){const m=Ml(u.h);(m.length!=0||u.i.length!=0)&&(b(u.ka,m),b(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function Kl(u,m,v){var T=v instanceof yr?sn(v):new yr(v);if(T.g!="")m&&(T.g=m+"."+T.g),Gr(T,T.s);else{var F=d.location;T=F.protocol,m=m?m+"."+F.hostname:F.hostname,F=+F.port;var W=new yr(null);T&&$i(W,T),m&&(W.g=m),F&&Gr(W,F),v&&(W.l=v),T=W}return v=u.D,m=u.ya,v&&m&&Be(T,v,m),Be(T,"VER",u.la),wr(u,T),T}function Ql(u,m,v){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Qe(new vr({eb:v})):new Qe(u.pa),m.Ha(u.J),m}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ya(){}n=ya.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ys(){}Ys.prototype.g=function(u,m){return new $t(u,m)};function $t(u,m){ct.call(this),this.g=new ma(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!G(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!G(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Xn(this)}V($t,ct),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){At(this.g)},$t.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var v={};v.__data__=u,u=v}else this.u&&(v={},v.__data__=ea(u),u=v);m.i.push(new Ll(m.Ya++,u)),m.G==3&&Yn(m)},$t.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,$t.aa.N.call(this)};function Yl(u){Hn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const v in m){u=v;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}V(Yl,Hn);function Xl(){Os.call(this),this.status=1}V(Xl,Os);function Xn(u){this.g=u}V(Xn,ya),Xn.prototype.ua=function(){ht(this.g,"a")},Xn.prototype.ta=function(u){ht(this.g,new Yl(u))},Xn.prototype.sa=function(u){ht(this.g,new Xl)},Xn.prototype.ra=function(){ht(this.g,"b")},Ys.prototype.createWebChannel=Ys.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,ow=function(){return new Ys},sw=function(){return bi()},iw=Wn,nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bs.NO_ERROR=0,bs.TIMEOUT=8,bs.HTTP_ERROR=6,ic=bs,xl.COMPLETE="complete",rw=xl,Ds.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Wa=Ds,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,nw=Qe}).apply(typeof Gu<"u"?Gu:typeof self<"u"?self:typeof window<"u"?window:{});const Oy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=new Nc("@firebase/firestore");function _o(){return ps.logLevel}function oe(n,...e){if(ps.logLevel<=ke.DEBUG){const t=e.map(zf);ps.debug(`Firestore (${Bo}): ${n}`,...t)}}function jr(n,...e){if(ps.logLevel<=ke.ERROR){const t=e.map(zf);ps.error(`Firestore (${Bo}): ${n}`,...t)}}function Po(n,...e){if(ps.logLevel<=ke.WARN){const t=e.map(zf);ps.warn(`Firestore (${Bo}): ${n}`,...t)}}function zf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n="Unexpected state"){const e=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: `+n;throw jr(e),new Error(e)}function Fe(n,e){n||Ee()}function Se(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends qn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class PC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xC{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let i=this.i;const o=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Ii;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ii,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},d=p=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ii)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string"),new aw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Ft(e)}}class NC{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class DC{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new NC(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const i=l=>{l.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,oe("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new OC(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const o=VC(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%e.length))}return i}}function Ne(n,e){return n<e?-1:n>e?1:0}function xo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{static now(){return gt.fromMillis(Date.now())}static fromDate(e){return gt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new gt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new le(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new le(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new le(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new gt(0,0))}static max(){return new Ie(new gt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t,i){t===void 0?t=0:t>e.length&&Ee(),i===void 0?i=e.length-t:i>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ol.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ol?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ke extends ol{construct(e,t,i){return new Ke(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new le(Y.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new Ke(t)}static emptyPath(){return new Ke([])}}const bC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xt extends ol{construct(e,t,i){return new xt(e,t,i)}static isValidIdentifier(e){return bC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xt(["__name__"])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new le(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new le(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new le(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,o+=2}else d==="`"?(h=!h,o++):d!=="."||h?(i+=d,o++):(l(),o++)}if(l(),h)throw new le(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xt(t)}static emptyPath(){return new xt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ke.fromString(e))}static fromName(e){return new pe(Ke.fromString(e).popFirst(5))}static empty(){return new pe(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ke.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ke(e.slice()))}}function MC(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=Ie.fromTimestamp(i===1e9?new gt(t+1,0):new gt(t,i));return new Ai(o,pe.empty(),e)}function jC(n){return new Ai(n.readTime,n.key,-1)}class Ai{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Ai(Ie.min(),pe.empty(),-1)}static max(){return new Ai(Ie.max(),pe.empty(),-1)}}function FC(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(n){if(n.code!==Y.FAILED_PRECONDITION||n.message!==UC)throw n;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,i)=>{t(e)})}static reject(e){return new K((t,i)=>{i(e)})}static waitFor(e){return new K((t,i)=>{let o=0,l=0,h=!1;e.forEach(d=>{++o,d.next(()=>{++l,h&&l===o&&t()},p=>i(p))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const i of e)t=t.next(o=>o?K.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new K((i,o)=>{const l=e.length,h=new Array(l);let d=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(w=>{h[y]=w,++d,d===l&&i(h)},w=>o(w))}})}static doWhile(e,t){return new K((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function BC(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function qo(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Mc.oe=-1;function jc(n){return n==null}function wc(n){return n===0&&1/n==-1/0}function $C(n){return typeof n=="number"&&Number.isInteger(n)&&!wc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Ly(e)),e=HC(n.get(t),e);return Ly(e)}function HC(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Ly(n){return n+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ws(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function uw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ku(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ku(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ku(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ku(this.root,e,this.comparator,!0)}}class Ku{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Pt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,i,o,l){return this}insert(e,t,i){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new by(this.data.getIterator())}getIteratorFrom(e){return new by(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new yt(this.comparator);return t.data=e,t}}class by{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this.fields=e,e.sort(xt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new yt(xt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return xo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new cw("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const WC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ci(n){if(Fe(!!n),typeof n=="string"){let e=0;const t=WC.exec(n);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ki(n){return typeof n=="string"?Nt.fromBase64String(n):Nt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Fc(n){const e=n.mapValue.fields.__previous_value__;return Bf(e)?Fc(e):e}function al(n){const e=Ci(n.mapValue.fields.__local_write_time__.timestampValue);return new gt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,t,i,o,l,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=y}}class ll{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ll("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ll&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Pi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Bf(n)?4:QC(n)?9007199254740991:KC(n)?10:11:Ee()}function cr(n,e){if(n===e)return!0;const t=Pi(n);if(t!==Pi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return al(n).isEqual(al(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ci(o.timestampValue),d=Ci(l.timestampValue);return h.seconds===d.seconds&&h.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return ki(o.bytesValue).isEqual(ki(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),d=st(l.doubleValue);return h===d?wc(h)===wc(d):isNaN(h)&&isNaN(d)}return!1}(n,e);case 9:return xo(n.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},d=l.mapValue.fields||{};if(Vy(h)!==Vy(d))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(d[p]===void 0||!cr(h[p],d[p])))return!1;return!0}(n,e);default:return Ee()}}function ul(n,e){return(n.values||[]).find(t=>cr(t,e))!==void 0}function No(n,e){if(n===e)return 0;const t=Pi(n),i=Pi(e);if(t!==i)return Ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(n.booleanValue,e.booleanValue);case 2:return function(l,h){const d=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return My(n.timestampValue,e.timestampValue);case 4:return My(al(n),al(e));case 5:return Ne(n.stringValue,e.stringValue);case 6:return function(l,h){const d=ki(l),p=ki(h);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const d=l.split("/"),p=h.split("/");for(let y=0;y<d.length&&y<p.length;y++){const w=Ne(d[y],p[y]);if(w!==0)return w}return Ne(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const d=Ne(st(l.latitude),st(h.latitude));return d!==0?d:Ne(st(l.longitude),st(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return jy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var d,p,y,w;const I=l.fields||{},S=h.fields||{},D=(d=I.value)===null||d===void 0?void 0:d.arrayValue,V=(p=S.value)===null||p===void 0?void 0:p.arrayValue,q=Ne(((y=D==null?void 0:D.values)===null||y===void 0?void 0:y.length)||0,((w=V==null?void 0:V.values)===null||w===void 0?void 0:w.length)||0);return q!==0?q:jy(D,V)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Qu.mapValue&&h===Qu.mapValue)return 0;if(l===Qu.mapValue)return 1;if(h===Qu.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),y=h.fields||{},w=Object.keys(y);p.sort(),w.sort();for(let I=0;I<p.length&&I<w.length;++I){const S=Ne(p[I],w[I]);if(S!==0)return S;const D=No(d[p[I]],y[w[I]]);if(D!==0)return D}return Ne(p.length,w.length)}(n.mapValue,e.mapValue);default:throw Ee()}}function My(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ne(n,e);const t=Ci(n),i=Ci(e),o=Ne(t.seconds,i.seconds);return o!==0?o:Ne(t.nanos,i.nanos)}function jy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=No(t[o],i[o]);if(l)return l}return Ne(t.length,i.length)}function Do(n){return rf(n)}function rf(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ci(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return ki(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=rf(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${rf(t.fields[h])}`;return o+"}"}(n.mapValue):Ee()}function sc(n){switch(Pi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(n);return e?16+sc(e):16;case 5:return 2*n.stringValue.length;case 6:return ki(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+sc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return ws(i.fields,(l,h)=>{o+=l.length+sc(h)}),o}(n.mapValue);default:throw Ee()}}function Fy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function sf(n){return!!n&&"integerValue"in n}function $f(n){return!!n&&"arrayValue"in n}function Uy(n){return!!n&&"nullValue"in n}function zy(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oc(n){return!!n&&"mapValue"in n}function KC(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ws(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ja(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function QC(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e){this.value=e}static empty(){return new Tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!oc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=xt.emptyPath(),i={},o=[];e.forEach((h,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,o),i={},o=[],t=d.popLast()}h?i[d.lastSegment()]=Ja(h):o.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());oc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];oc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){ws(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new Tn(Ja(this.value))}}function hw(n){const e=[];return ws(n.fields,(t,i)=>{const o=new xt([t]);if(oc(i)){const l=hw(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new Un(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,i,o,l,h,d){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=d}static newInvalidDocument(e){return new Ut(e,0,Ie.min(),Ie.min(),Ie.min(),Tn.empty(),0)}static newFoundDocument(e,t,i,o){return new Ut(e,1,t,Ie.min(),i,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,Ie.min(),Ie.min(),Tn.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,Ie.min(),Ie.min(),Tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.position=e,this.inclusive=t}}function By(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=No(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function $y(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!cr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t="asc"){this.field=e,this.dir=t}}function YC(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{}class ut extends dw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new JC(e,t,i):t==="array-contains"?new tk(e,i):t==="in"?new nk(e,i):t==="not-in"?new rk(e,i):t==="array-contains-any"?new ik(e,i):new ut(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new ZC(e,i):new ek(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(No(t,this.value)):t!==null&&Pi(this.value)===Pi(t)&&this.matchesComparison(No(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $n extends dw{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new $n(e,t)}matches(e){return fw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fw(n){return n.op==="and"}function pw(n){return XC(n)&&fw(n)}function XC(n){for(const e of n.filters)if(e instanceof $n)return!1;return!0}function of(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+Do(n.value);if(pw(n))return n.filters.map(e=>of(e)).join(",");{const e=n.filters.map(t=>of(t)).join(",");return`${n.op}(${e})`}}function mw(n,e){return n instanceof ut?function(i,o){return o instanceof ut&&i.op===o.op&&i.field.isEqual(o.field)&&cr(i.value,o.value)}(n,e):n instanceof $n?function(i,o){return o instanceof $n&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,d)=>l&&mw(h,o.filters[d]),!0):!1}(n,e):void Ee()}function gw(n){return n instanceof ut?function(t){return`${t.field.canonicalString()} ${t.op} ${Do(t.value)}`}(n):n instanceof $n?function(t){return t.op.toString()+" {"+t.getFilters().map(gw).join(" ,")+"}"}(n):"Filter"}class JC extends ut{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class ZC extends ut{constructor(e,t){super(e,"in",t),this.keys=yw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ek extends ut{constructor(e,t){super(e,"not-in",t),this.keys=yw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class tk extends ut{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $f(t)&&ul(t.arrayValue,this.value)}}class nk extends ut{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ul(this.value.arrayValue,t)}}class rk extends ut{constructor(e,t){super(e,"not-in",t)}matches(e){if(ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ul(this.value.arrayValue,t)}}class ik extends ut{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$f(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>ul(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sk{constructor(e,t=null,i=[],o=[],l=null,h=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=d,this.ue=null}}function qy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new sk(n,e,t,i,o,l,h)}function qf(n){const e=Se(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>of(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),jc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Do(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Do(i)).join(",")),e.ue=t}return e.ue}function Hf(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!YC(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!mw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$y(n.startAt,e.startAt)&&$y(n.endAt,e.endAt)}function af(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t=null,i=[],o=[],l=null,h="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=d,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ok(n,e,t,i,o,l,h,d){return new Ho(n,e,t,i,o,l,h,d)}function Uc(n){return new Ho(n)}function Hy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function vw(n){return n.collectionGroup!==null}function Za(n){const e=Se(n);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let d=new yt(xt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(d=d.add(y.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new cl(l,i))}),t.has(xt.keyField().canonicalString())||e.ce.push(new cl(xt.keyField(),i))}return e.ce}function sr(n){const e=Se(n);return e.le||(e.le=ak(e,Za(n))),e.le}function ak(n,e){if(n.limitType==="F")return qy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new cl(o.field,l)});const t=n.endAt?new Ec(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Ec(n.startAt.position,n.startAt.inclusive):null;return qy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function lf(n,e){const t=n.filters.concat([e]);return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function uf(n,e,t){return new Ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function zc(n,e){return Hf(sr(n),sr(e))&&n.limitType===e.limitType}function _w(n){return`${qf(sr(n))}|lt:${n.limitType}`}function wo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>gw(o)).join(", ")}]`),jc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>Do(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>Do(o)).join(",")),`Target(${i})`}(sr(n))}; limitType=${n.limitType})`}function Bc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Za(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,d,p){const y=By(h,d,p);return h.inclusive?y<=0:y<0}(i.startAt,Za(i),o)||i.endAt&&!function(h,d,p){const y=By(h,d,p);return h.inclusive?y>=0:y>0}(i.endAt,Za(i),o))}(n,e)}function lk(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ww(n){return(e,t)=>{let i=!1;for(const o of Za(n)){const l=uk(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function uk(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,d){const p=h.data.field(l),y=d.data.field(l);return p!==null&&y!==null?No(p,y):Ee()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return uw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=new et(pe.comparator);function Fr(){return ck}const Ew=new et(pe.comparator);function Ga(...n){let e=Ew;for(const t of n)e=e.insert(t.key,t);return e}function Tw(n){let e=Ew;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ls(){return el()}function Iw(){return el()}function el(){return new Es(n=>n.toString(),(n,e)=>n.isEqual(e))}const hk=new et(pe.comparator),dk=new yt(pe.comparator);function Pe(...n){let e=dk;for(const t of n)e=e.add(t);return e}const fk=new yt(Ne);function pk(){return fk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function Sw(n){return{integerValue:""+n}}function mk(n,e){return $C(e)?Sw(e):Wf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this._=void 0}}function gk(n,e,t){return n instanceof hl?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&Bf(l)&&(l=Fc(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):n instanceof dl?Aw(n,e):n instanceof fl?Cw(n,e):function(o,l){const h=Rw(o,l),d=Wy(h)+Wy(o.Pe);return sf(h)&&sf(o.Pe)?Sw(d):Wf(o.serializer,d)}(n,e)}function yk(n,e,t){return n instanceof dl?Aw(n,e):n instanceof fl?Cw(n,e):t}function Rw(n,e){return n instanceof Tc?function(i){return sf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class hl extends $c{}class dl extends $c{constructor(e){super(),this.elements=e}}function Aw(n,e){const t=kw(e);for(const i of n.elements)t.some(o=>cr(o,i))||t.push(i);return{arrayValue:{values:t}}}class fl extends $c{constructor(e){super(),this.elements=e}}function Cw(n,e){let t=kw(e);for(const i of n.elements)t=t.filter(o=>!cr(o,i));return{arrayValue:{values:t}}}class Tc extends $c{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Wy(n){return st(n.integerValue||n.doubleValue)}function kw(n){return $f(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,t){this.field=e,this.transform=t}}function _k(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof dl&&o instanceof dl||i instanceof fl&&o instanceof fl?xo(i.elements,o.elements,cr):i instanceof Tc&&o instanceof Tc?cr(i.Pe,o.Pe):i instanceof hl&&o instanceof hl}(n.transform,e.transform)}class wk{constructor(e,t){this.version=e,this.transformResults=t}}class or{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new or}static exists(e){return new or(void 0,e)}static updateTime(e){return new or(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ac(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qc{}function Pw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Nw(n.key,or.none()):new Il(n.key,n.data,or.none());{const t=n.data,i=Tn.empty();let o=new yt(xt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ts(n.key,i,new Un(o.toArray()),or.none())}}function Ek(n,e,t){n instanceof Il?function(o,l,h){const d=o.value.clone(),p=Ky(o.fieldTransforms,l,h.transformResults);d.setAll(p),l.convertToFoundDocument(h.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ts?function(o,l,h){if(!ac(o.precondition,l))return void l.convertToUnknownDocument(h.version);const d=Ky(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(xw(o)),p.setAll(d),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function tl(n,e,t,i){return n instanceof Il?function(l,h,d,p){if(!ac(l.precondition,h))return d;const y=l.value.clone(),w=Qy(l.fieldTransforms,p,h);return y.setAll(w),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ts?function(l,h,d,p){if(!ac(l.precondition,h))return d;const y=Qy(l.fieldTransforms,p,h),w=h.data;return w.setAll(xw(l)),w.setAll(y),h.convertToFoundDocument(h.version,w).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(I=>I.field))}(n,e,t,i):function(l,h,d){return ac(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):d}(n,e,t)}function Tk(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Rw(i.transform,o||null);l!=null&&(t===null&&(t=Tn.empty()),t.set(i.field,l))}return t||null}function Gy(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&xo(i,o,(l,h)=>_k(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Il extends qc{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ts extends qc{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function xw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Ky(n,e,t){const i=new Map;Fe(n.length===t.length);for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,d=e.data.field(l.field);i.set(l.field,yk(h,d,t[o]))}return i}function Qy(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,gk(l,h,e))}return i}class Nw extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ik extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&Ek(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Iw();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let d=this.applyToLocalView(h,l.mutatedFields);d=t.has(o.key)?null:d;const p=Pw(h,d);p!==null&&i.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&xo(this.mutations,e.mutations,(t,i)=>Gy(t,i))&&xo(this.baseMutations,e.baseMutations,(t,i)=>Gy(t,i))}}class Gf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length);let o=function(){return hk}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Gf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Le;function Ck(n){switch(n){default:return Ee();case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0}}function Dw(n){if(n===void 0)return jr("GRPC error has no .code"),Y.UNKNOWN;switch(n){case lt.OK:return Y.OK;case lt.CANCELLED:return Y.CANCELLED;case lt.UNKNOWN:return Y.UNKNOWN;case lt.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case lt.INTERNAL:return Y.INTERNAL;case lt.UNAVAILABLE:return Y.UNAVAILABLE;case lt.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case lt.NOT_FOUND:return Y.NOT_FOUND;case lt.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case lt.ABORTED:return Y.ABORTED;case lt.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case lt.DATA_LOSS:return Y.DATA_LOSS;default:return Ee()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=new us([4294967295,4294967295],0);function Yy(n){const e=kk().encode(n),t=new tw;return t.update(e),new Uint8Array(t.digest())}function Xy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new us([t,i],0),new us([o,l],0)]}class Kf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ka(`Invalid padding: ${t}`);if(i<0)throw new Ka(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ka(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ka(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=us.fromNumber(this.Te)}Ee(e,t,i){let o=e.add(t.multiply(us.fromNumber(i)));return o.compare(Pk)===1&&(o=new us([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Yy(e),[i,o]=Xy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);if(!this.de(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Kf(l,o,t);return i.forEach(d=>h.insert(d)),h}insert(e){if(this.Te===0)return;const t=Yy(e),[i,o]=Xy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(i,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ka extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Sl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Hc(Ie.min(),o,new et(Ne),Fr(),Pe())}}class Sl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Sl(i,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,t,i,o){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=o}}class Ow{constructor(e,t){this.targetId=e,this.me=t}}class Lw{constructor(e,t,i=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class Jy{constructor(){this.fe=0,this.ge=Zy(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),i=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:Ee()}}),new Sl(this.pe,this.ye,e,t,i)}Ce(){this.we=!1,this.ge=Zy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class xk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fr(),this.qe=Yu(),this.Qe=Yu(),this.Ke=new et(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const i=this.ze(t);switch(e.state){case 0:this.je(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.Ce(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.je(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),i.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((i,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,i=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(af(l))if(i===0){const h=new pe(l.path);this.We(t,h,Ut.newNoDocument(h,Ie.min()))}else Fe(i===1);else{const h=this.Ze(t);if(h!==i){const d=this.Xe(e),p=d?this.et(d,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,d;try{h=ki(i).toUint8Array()}catch(p){if(p instanceof cw)return Po("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Kf(h,o,l)}catch(p){return Po(p instanceof Ka?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Te===0?null:d}et(e,t,i){return t.me.count===i-this.rt(e,t.targetId)?0:2}rt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.Le.nt(),d=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const d=this.Ye(h);if(d){if(l.current&&af(d.target)){const p=new pe(d.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let i=Pe();this.Qe.forEach((l,h)=>{let d=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Hc(e,t,this.Ke,this.ke,i);return this.ke=Fr(),this.qe=Yu(),this.Qe=Yu(),this.Ke=new et(Ne),o}Ue(e,t){if(!this.je(e))return;const i=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,i){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Jy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new yt(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new yt(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||oe("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Jy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Yu(){return new et(pe.comparator)}function Zy(){return new et(pe.comparator)}const Nk={asc:"ASCENDING",desc:"DESCENDING"},Dk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ok={and:"AND",or:"OR"};class Lk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function cf(n,e){return n.useProto3Json||jc(e)?e:{value:e}}function Ic(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Vk(n,e){return Ic(n,e.toTimestamp())}function ar(n){return Fe(!!n),Ie.fromTimestamp(function(t){const i=Ci(t);return new gt(i.seconds,i.nanos)}(n))}function Qf(n,e){return hf(n,e).canonicalString()}function hf(n,e){const t=function(o){return new Ke(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function bw(n){const e=Ke.fromString(n);return Fe(zw(e)),e}function df(n,e){return Qf(n.databaseId,e.path)}function Ud(n,e){const t=bw(e);if(t.get(1)!==n.databaseId.projectId)throw new le(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new le(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(jw(t))}function Mw(n,e){return Qf(n.databaseId,e)}function bk(n){const e=bw(n);return e.length===4?Ke.emptyPath():jw(e)}function ff(n){return new Ke(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function jw(n){return Fe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ev(n,e,t){return{name:df(n,e),fields:t.value.mapValue.fields}}function Mk(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,w){return y.useProto3Json?(Fe(w===void 0||typeof w=="string"),Nt.fromBase64String(w||"")):(Fe(w===void 0||w instanceof Buffer||w instanceof Uint8Array),Nt.fromUint8Array(w||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,d=h&&function(y){const w=y.code===void 0?Y.UNKNOWN:Dw(y.code);return new le(w,y.message||"")}(h);t=new Lw(i,o,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=Ud(n,i.document.name),l=ar(i.document.updateTime),h=i.document.createTime?ar(i.document.createTime):Ie.min(),d=new Tn({mapValue:{fields:i.document.fields}}),p=Ut.newFoundDocument(o,l,h,d),y=i.targetIds||[],w=i.removedTargetIds||[];t=new lc(y,w,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=Ud(n,i.document),l=i.readTime?ar(i.readTime):Ie.min(),h=Ut.newNoDocument(o,l),d=i.removedTargetIds||[];t=new lc([],d,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=Ud(n,i.document),l=i.removedTargetIds||[];t=new lc([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new Ak(o,l),d=i.targetId;t=new Ow(d,h)}}return t}function jk(n,e){let t;if(e instanceof Il)t={update:ev(n,e.key,e.value)};else if(e instanceof Nw)t={delete:df(n,e.key)};else if(e instanceof Ts)t={update:ev(n,e.key,e.data),updateMask:Gk(e.fieldMask)};else{if(!(e instanceof Ik))return Ee();t={verify:df(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const d=h.transform;if(d instanceof hl)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof dl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof fl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof Tc)return{fieldPath:h.field.canonicalString(),increment:d.Pe};throw Ee()}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:Vk(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()}(n,e.precondition)),t}function Fk(n,e){return n&&n.length>0?(Fe(e!==void 0),n.map(t=>function(o,l){let h=o.updateTime?ar(o.updateTime):ar(l);return h.isEqual(Ie.min())&&(h=ar(l)),new wk(h,o.transformResults||[])}(t,e))):[]}function Uk(n,e){return{documents:[Mw(n,e.path)]}}function zk(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Mw(n,o);const l=function(y){if(y.length!==0)return Uw($n.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(w=>function(S){return{field:Eo(S.field),direction:qk(S.dir)}}(w))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const d=cf(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function Bk(n){let e=bk(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1);const w=t.from[0];w.allDescendants?o=w.collectionId:e=e.child(w.collectionId)}let l=[];t.where&&(l=function(I){const S=Fw(I);return S instanceof $n&&pw(S)?S.getFilters():[S]}(t.where));let h=[];t.orderBy&&(h=function(I){return I.map(S=>function(V){return new cl(To(V.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(S))}(t.orderBy));let d=null;t.limit&&(d=function(I){let S;return S=typeof I=="object"?I.value:I,jc(S)?null:S}(t.limit));let p=null;t.startAt&&(p=function(I){const S=!!I.before,D=I.values||[];return new Ec(D,S)}(t.startAt));let y=null;return t.endAt&&(y=function(I){const S=!I.before,D=I.values||[];return new Ec(D,S)}(t.endAt)),ok(e,o,h,l,d,"F",p,y)}function $k(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Fw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=To(t.unaryFilter.field);return ut.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=To(t.unaryFilter.field);return ut.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=To(t.unaryFilter.field);return ut.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=To(t.unaryFilter.field);return ut.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(n):n.fieldFilter!==void 0?function(t){return ut.create(To(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return $n.create(t.compositeFilter.filters.map(i=>Fw(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(n):Ee()}function qk(n){return Nk[n]}function Hk(n){return Dk[n]}function Wk(n){return Ok[n]}function Eo(n){return{fieldPath:n.canonicalString()}}function To(n){return xt.fromServerFormat(n.fieldPath)}function Uw(n){return n instanceof ut?function(t){if(t.op==="=="){if(zy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NAN"}};if(Uy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(zy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NAN"}};if(Uy(t.value))return{unaryFilter:{field:Eo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(t.field),op:Hk(t.op),value:t.value}}}(n):n instanceof $n?function(t){const i=t.getFilters().map(o=>Uw(o));return i.length===1?i[0]:{compositeFilter:{op:Wk(t.op),filters:i}}}(n):Ee()}function Gk(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,t,i,o,l=Ie.min(),h=Ie.min(),d=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.ht=e}}function Qk(n){const e=Bk({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?uf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this.ln=new Xk}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Ai.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Ai.min())}updateCollectionGroup(e,t,i){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class Xk{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new yt(Ke.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new yt(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class tn{static withCacheSize(e){return new tn(e,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tn.DEFAULT_COLLECTION_PERCENTILE=10,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,tn.DEFAULT=new tn(41943040,tn.DEFAULT_COLLECTION_PERCENTILE,tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),tn.DISABLED=new tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Oo(0)}static Qn(){return new Oo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv([n,e],[t,i]){const o=Ne(n,t);return o===0?Ne(e,i):o}class Jk{constructor(e){this.Gn=e,this.buffer=new yt(nv),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();nv(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Zk{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){oe("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){qo(t)?oe("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await $o(t)}await this.Yn(3e5)})}}class eP{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Mc.oe);const i=new Jk(t);return this.Zn.forEachTarget(e,o=>i.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>i.Hn(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Zn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(oe("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(tv)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(oe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),tv):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let i,o,l,h,d,p,y;const w=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(I=>(I>this.params.maximumSequenceNumbersToCollect?(oe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${I}`),o=this.params.maximumSequenceNumbersToCollect):o=I,h=Date.now(),this.nthSequenceNumber(e,o))).next(I=>(i=I,d=Date.now(),this.removeTargets(e,i,t))).next(I=>(l=I,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(I=>(y=Date.now(),_o()<=ke.DEBUG&&oe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-w}ms
	Determined least recently used ${o} in `+(d-h)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${I} documents in `+(y-p)+`ms
Total Duration: ${y-w}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:I})))}}function tP(n,e){return new eP(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.changes=new Es(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?K.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&tl(i.mutation,o,Un.empty(),gt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Pe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Pe()){const o=ls();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Ga();return l.forEach((d,p)=>{h=h.insert(d,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ls();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Pe()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,d)=>{t.set(h,d)})})}computeViews(e,t,i,o){let l=Fr();const h=el(),d=function(){return el()}();return t.forEach((p,y)=>{const w=i.get(y.key);o.has(y.key)&&(w===void 0||w.mutation instanceof Ts)?l=l.insert(y.key,y):w!==void 0?(h.set(y.key,w.mutation.getFieldMask()),tl(w.mutation,y,w.mutation.getFieldMask(),gt.now())):h.set(y.key,Un.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,w)=>h.set(y,w)),t.forEach((y,w)=>{var I;return d.set(y,new rP(w,(I=h.get(y))!==null&&I!==void 0?I:null))}),d))}recalculateAndSaveOverlays(e,t){const i=el();let o=new et((h,d)=>h-d),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const d of h)d.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let w=i.get(p)||Un.empty();w=d.applyToLocalView(y,w),i.set(p,w);const I=(o.get(d.batchId)||Pe()).add(p);o=o.insert(d.batchId,I)})}).next(()=>{const h=[],d=o.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),y=p.key,w=p.value,I=Iw();w.forEach(S=>{if(!l.has(S)){const D=Pw(t.get(S),i.get(S));D!==null&&I.set(S,D),l=l.add(S)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,I))}return K.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):vw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):K.resolve(ls());let d=-1,p=l;return h.next(y=>K.forEach(y,(w,I)=>(d<I.largestBatchId&&(d=I.largestBatchId),l.get(w)?K.resolve():this.remoteDocumentCache.getEntry(e,w).next(S=>{p=p.insert(w,S)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,Pe())).next(w=>({batchId:d,changes:Tw(w)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=Ga();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ga();return this.indexManager.getCollectionParents(e,l).next(d=>K.forEach(d,p=>{const y=function(I,S){return new Ho(S,null,I.explicitOrderBy.slice(),I.filters.slice(),I.limit,I.limitType,I.startAt,I.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(w=>{w.forEach((I,S)=>{h=h.insert(I,S)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((p,y)=>{const w=y.getKey();h.get(w)===null&&(h=h.insert(w,Ut.newInvalidDocument(w)))});let d=Ga();return h.forEach((p,y)=>{const w=l.get(p);w!==void 0&&tl(w.mutation,y,Un.empty(),gt.now()),Bc(t,y)&&(d=d.insert(p,y))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:ar(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:Qk(o.bundledQuery),readTime:ar(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.overlays=new et(pe.comparator),this.Er=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ls();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.Tt(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.Er.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(i)),K.resolve()}getOverlaysForCollection(e,t,i){const o=ls(),l=t.length+1,h=new pe(t.child("")),d=this.overlays.getIteratorFrom(h);for(;d.hasNext();){const p=d.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>i&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new et((y,w)=>y-w);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let w=l.get(y.largestBatchId);w===null&&(w=ls(),l=l.insert(y.largestBatchId,w)),w.set(y.getKey(),y)}}const d=ls(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,w)=>d.set(y,w)),!(d.size()>=o)););return K.resolve(d)}Tt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(i.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new Rk(t,i));let l=this.Er.get(t);l===void 0&&(l=Pe(),this.Er.set(t,l)),this.Er.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.dr=new yt(St.Ar),this.Rr=new yt(St.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const i=new St(e,t);this.dr=this.dr.add(i),this.Rr=this.Rr.add(i)}mr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.gr(new St(e,t))}pr(e,t){e.forEach(i=>this.removeReference(i,t))}yr(e){const t=new pe(new Ke([])),i=new St(t,e),o=new St(t,e+1),l=[];return this.Rr.forEachInRange([i,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Ke([])),i=new St(t,e),o=new St(t,e+1);let l=Pe();return this.Rr.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new St(e,0),i=this.dr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class St{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new yt(St.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new Sk(l,t,i,o);this.mutationQueue.push(h);for(const d of o)this.vr=this.vr.add(new St(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Fr(i),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new St(t,0),o=new St(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([i,o],h=>{const d=this.Cr(h.br);l.push(d)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new yt(Ne);return t.forEach(o=>{const l=new St(o,0),h=new St(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],d=>{i=i.add(d.br)})}),K.resolve(this.Mr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new St(new pe(l),0);let d=new yt(Ne);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(d=d.add(p.br)),!0)},h),K.resolve(this.Mr(d))}Mr(e){const t=[];return e.forEach(i=>{const o=this.Cr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.vr;return K.forEach(t.mutations,o=>{const l=new St(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=i})}Ln(e){}containsKey(e,t){const i=new St(t,0),o=this.vr.firstAfterOrEqual(i);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.Nr=e,this.docs=function(){return new et(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return K.resolve(i?i.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let i=Fr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),K.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Fr();const h=t.path,d=new pe(h.child("")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:y,value:{document:w}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||FC(jC(w),i)<=0||(o.has(w.key)||Bc(t,w))&&(l=l.insert(w.key,w.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,i,o){Ee()}Lr(e,t){return K.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new cP(this)}getSize(e){return K.resolve(this.size)}}class cP extends nP{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(i)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.persistence=e,this.Br=new Es(t=>qf(t),Hf),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.kr=0,this.qr=new Yf,this.targetCount=0,this.Qr=Oo.qn()}forEachTarget(e,t){return this.Br.forEach((i,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Oo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.Br.forEach((h,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const i=this.Br.get(t)||null;return K.resolve(i)}addMatchingKeys(e,t,i){return this.qr.mr(t,i),K.resolve()}removeMatchingKeys(e,t,i){this.qr.pr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const i=this.qr.Sr(t);return K.resolve(i)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t){this.Kr={},this.overlays={},this.$r=new Mc(0),this.Ur=!1,this.Ur=!0,this.Wr=new aP,this.referenceDelegate=e(this),this.Gr=new hP(this),this.indexManager=new Yk,this.remoteDocumentCache=function(o){return new uP(o)}(i=>this.referenceDelegate.zr(i)),this.serializer=new Kk(t),this.jr=new sP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Kr[e.toKey()];return i||(i=new lP(t,this.referenceDelegate),this.Kr[e.toKey()]=i),i}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,i){oe("MemoryPersistence","Starting transaction:",e);const o=new dP(this.$r.next());return this.referenceDelegate.Hr(),i(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return K.or(Object.values(this.Kr).map(i=>()=>i.containsKey(e,t)))}}class dP extends zC{constructor(e){super(),this.currentSequenceNumber=e}}class Xf{constructor(e){this.persistence=e,this.Zr=new Yf,this.Xr=null}static ei(e){return new Xf(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,t,i){return this.Zr.addReference(i,t),this.ti.delete(i.toString()),K.resolve()}removeReference(e,t,i){return this.Zr.removeReference(i,t),this.ti.add(i.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,i=>{const o=pe.fromPath(i);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Ie.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(i=>{i?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Sc{constructor(e,t){this.persistence=e,this.ri=new Es(i=>qC(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=tP(this,t)}static ei(e,t){return new Sc(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}nr(e){let t=0;return this.er(e,i=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(i,o)=>this.ir(e,i,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(d=>{d||(i++,l.removeEntry(h,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}removeReference(e,t,i){return this.ri.set(i,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sc(e.data.value)),t}ir(e,t,i){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Wi=i,this.Gi=o}static zi(e,t){let i=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Jf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return CI()?8:BC(zt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new fP;return this.ts(e,t,h).next(d=>{if(l.result=d,this.Hi)return this.ns(e,t,h,d.size)})}).next(()=>l.result)}ns(e,t,i,o){return i.documentReadCount<this.Ji?(_o()<=ke.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",wo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(_o()<=ke.DEBUG&&oe("QueryEngine","Query:",wo(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.Yi*o?(_o()<=ke.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",wo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sr(t))):K.resolve())}Xi(e,t){if(Hy(t))return K.resolve(null);let i=sr(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=uf(t,null,"F"),i=sr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Pe(...l);return this.Zi.getDocuments(e,h).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const y=this.rs(t,d);return this.ss(t,y,h,p.readTime)?this.Xi(e,uf(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,i,o){return Hy(t)||o.isEqual(Ie.min())?K.resolve(null):this.Zi.getDocuments(e,i).next(l=>{const h=this.rs(t,l);return this.ss(t,h,i,o)?K.resolve(null):(_o()<=ke.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),wo(t)),this.os(e,h,t,MC(o,-1)).next(d=>d))})}rs(e,t){let i=new yt(ww(e));return t.forEach((o,l)=>{Bc(e,l)&&(i=i.add(l))}),i}ss(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,i){return _o()<=ke.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",wo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Ai.min(),i)}os(e,t,i,o){return this.Zi.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,t,i,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(Ne),this.cs=new Es(l=>qf(l),Hf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(i)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iP(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function gP(n,e,t,i){return new mP(n,e,t,i)}async function $w(n,e){const t=Se(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],d=[];let p=Pe();for(const y of o){h.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}for(const y of l){d.push(y.batchId);for(const w of y.mutations)p=p.add(w.key)}return t.localDocuments.getDocuments(i,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:d}))})})}function yP(n,e){const t=Se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(d,p,y,w){const I=y.batch,S=I.keys();let D=K.resolve();return S.forEach(V=>{D=D.next(()=>w.getEntry(p,V)).next(q=>{const b=y.docVersions.get(V);Fe(b!==null),q.version.compareTo(b)<0&&(I.applyToRemoteDocument(q,y),q.isValidDocument()&&(q.setReadTime(y.commitVersion),w.addEntry(q)))})}),D.next(()=>d.mutationQueue.removeMutationBatch(p,I))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Pe();for(let y=0;y<d.mutationResults.length;++y)d.mutationResults[y].transformResults.length>0&&(p=p.add(d.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function qw(n){const e=Se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function vP(n,e){const t=Se(n),i=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const d=[];e.targetChanges.forEach((w,I)=>{const S=o.get(I);if(!S)return;d.push(t.Gr.removeMatchingKeys(l,w.removedDocuments,I).next(()=>t.Gr.addMatchingKeys(l,w.addedDocuments,I)));let D=S.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(I)!==null?D=D.withResumeToken(Nt.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):w.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(w.resumeToken,i)),o=o.insert(I,D),function(q,b,$){return q.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(S,D,w)&&d.push(t.Gr.updateTargetData(l,D))});let p=Fr(),y=Pe();if(e.documentUpdates.forEach(w=>{e.resolvedLimboDocuments.has(w)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,w))}),d.push(_P(l,h,e.documentUpdates).next(w=>{p=w.Is,y=w.Es})),!i.isEqual(Ie.min())){const w=t.Gr.getLastRemoteSnapshotVersion(l).next(I=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(w)}return K.waitFor(d).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function _P(n,e,t){let i=Pe(),o=Pe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Fr();return t.forEach((d,p)=>{const y=l.get(d);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(d)),p.isNoDocument()&&p.version.isEqual(Ie.min())?(e.removeEntry(d,p.readTime),h=h.insert(d,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(d,p)):oe("LocalStore","Ignoring outdated watch update for ",d,". Current version:",y.version," Watch version:",p.version)}),{Is:h,Es:o}})}function wP(n,e){const t=Se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function EP(n,e){const t=Se(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.Gr.getTargetData(i,e).next(l=>l?(o=l,K.resolve(o)):t.Gr.allocateTargetId(i).next(h=>(o=new wi(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.Gr.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.us.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(i.targetId,i),t.cs.set(e,i.targetId)),i})}async function pf(n,e,t){const i=Se(n),o=i.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!qo(h))throw h;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}i.us=i.us.remove(e),i.cs.delete(o.target)}function rv(n,e,t){const i=Se(n);let o=Ie.min(),l=Pe();return i.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,w){const I=Se(p),S=I.cs.get(w);return S!==void 0?K.resolve(I.us.get(S)):I.Gr.getTargetData(y,w)}(i,h,sr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,i.Gr.getMatchingKeysForTargetId(h,d.targetId).next(p=>{l=p})}).next(()=>i._s.getDocumentsMatchingQuery(h,e,t?o:Ie.min(),t?l:Pe())).next(d=>(TP(i,lk(e),d),{documents:d,ds:l})))}function TP(n,e,t){let i=n.ls.get(e)||Ie.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.ls.set(e,i)}class iv{constructor(){this.activeTargetIds=pk()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class IP{constructor(){this._o=new iv,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,i){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new iv,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xu=null;function zd(){return Xu===null?Xu=function(){return 268435456+Math.round(2147483648*Math.random())}():Xu++,"0x"+Xu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="WebChannelConnection";class CP extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=i+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,i,o,l,h){const d=zd(),p=this.No(t,i.toUriEncodedString());oe("RestConnection",`Sending RPC '${t}' ${d}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(y,l,h),this.Bo(t,p,y,o).then(w=>(oe("RestConnection",`Received RPC '${t}' ${d}: `,w),w),w=>{throw Po("RestConnection",`RPC '${t}' ${d} failed with error: `,w,"url: ",p,"request:",o),w})}ko(t,i,o,l,h,d){return this.Oo(t,i,o,l,h)}Lo(t,i,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,i){const o=RP[t];return`${this.Fo}/v1/${i}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,i,o){const l=zd();return new Promise((h,d)=>{const p=new nw;p.setWithCredentials(!0),p.listenOnce(rw.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case ic.NO_ERROR:const w=p.getResponseJson();oe(jt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(w)),h(w);break;case ic.TIMEOUT:oe(jt,`RPC '${e}' ${l} timed out`),d(new le(Y.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const I=p.getStatus();if(oe(jt,`RPC '${e}' ${l} failed with status:`,I,"response text:",p.getResponseText()),I>0){let S=p.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S==null?void 0:S.error;if(D&&D.status&&D.message){const V=function(b){const $=b.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf($)>=0?$:Y.UNKNOWN}(D.status);d(new le(V,D.message))}else d(new le(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new le(Y.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{oe(jt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);oe(jt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,i,15)})}qo(e,t,i){const o=zd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=ow(),d=sw(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Lo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const w=l.join("");oe(jt,`Creating RPC '${e}' stream ${o}: ${w}`,p);const I=h.createWebChannel(w,p);let S=!1,D=!1;const V=new AP({Eo:b=>{D?oe(jt,`Not sending because RPC '${e}' stream ${o} is closed:`,b):(S||(oe(jt,`Opening RPC '${e}' stream ${o} transport.`),I.open(),S=!0),oe(jt,`RPC '${e}' stream ${o} sending:`,b),I.send(b))},Ao:()=>I.close()}),q=(b,$,G)=>{b.listen($,te=>{try{G(te)}catch(ce){setTimeout(()=>{throw ce},0)}})};return q(I,Wa.EventType.OPEN,()=>{D||(oe(jt,`RPC '${e}' stream ${o} transport opened.`),V.So())}),q(I,Wa.EventType.CLOSE,()=>{D||(D=!0,oe(jt,`RPC '${e}' stream ${o} transport closed`),V.Do())}),q(I,Wa.EventType.ERROR,b=>{D||(D=!0,Po(jt,`RPC '${e}' stream ${o} transport errored:`,b),V.Do(new le(Y.UNAVAILABLE,"The operation could not be completed")))}),q(I,Wa.EventType.MESSAGE,b=>{var $;if(!D){const G=b.data[0];Fe(!!G);const te=G,ce=(te==null?void 0:te.error)||(($=te[0])===null||$===void 0?void 0:$.error);if(ce){oe(jt,`RPC '${e}' stream ${o} received error:`,ce);const Te=ce.status;let ge=function(C){const N=lt[C];if(N!==void 0)return Dw(N)}(Te),P=ce.message;ge===void 0&&(ge=Y.INTERNAL,P="Unknown error status: "+Te+" with message "+ce.message),D=!0,V.Do(new le(ge,P)),I.close()}else oe(jt,`RPC '${e}' stream ${o} received:`,G),V.vo(G)}}),q(d,iw.STAT_EVENT,b=>{b.stat===nf.PROXY?oe(jt,`RPC '${e}' stream ${o} detected buffering proxy`):b.stat===nf.NOPROXY&&oe(jt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{V.bo()},0),V}}function Bd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){return new Lk(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,t,i=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=i,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),i=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-i);o>0&&oe("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,t,i,o,l,h,d,p){this.li=e,this.Yo=i,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Hw(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(jr(t.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.Xo===t&&this.I_(i,o)},i=>{e(()=>{const o=new le(Y.UNKNOWN,"Fetching auth token failed: "+i.message);return this.E_(o)})})}I_(e,t){const i=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{i(()=>this.listener.Ro())}),this.stream.mo(()=>{i(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{i(()=>this.E_(o))}),this.stream.onMessage(o=>{i(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class kP extends Ww{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Mk(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Ie.min():h.readTime?ar(h.readTime):Ie.min()}(e);return this.listener.R_(t,i)}V_(e){const t={};t.database=ff(this.serializer),t.addTarget=function(l,h){let d;const p=h.target;if(d=af(p)?{documents:Uk(l,p)}:{query:zk(l,p).ct},d.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){d.resumeToken=Vw(l,h.resumeToken);const y=cf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}else if(h.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Ic(l,h.snapshotVersion.toTimestamp());const y=cf(l,h.expectedCount);y!==null&&(d.expectedCount=y)}return d}(this.serializer,e);const i=$k(this.serializer,e);i&&(t.labels=i),this.c_(t)}m_(e){const t={};t.database=ff(this.serializer),t.removeTarget=e,this.c_(t)}}class PP extends Ww{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=Fk(e.writeResults,e.commitTime),i=ar(e.commitTime);return this.listener.y_(i,t)}w_(){const e={};e.database=ff(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>jk(this.serializer,i))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP extends class{}{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new le(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,i,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,hf(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new le(Y.UNKNOWN,l.toString())})}ko(e,t,i,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,d])=>this.connection.ko(e,hf(t,i),o,h,d,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new le(Y.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class NP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(jr(t),this.C_=!1):oe("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{i.enqueueAndForget(async()=>{Is(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Se(p);y.k_.add(4),await Rl(y),y.K_.set("Unknown"),y.k_.delete(4),await Gc(y)}(this))})}),this.K_=new NP(i,o)}}async function Gc(n){if(Is(n))for(const e of n.q_)await e(!0)}async function Rl(n){for(const e of n.q_)await e(!1)}function Gw(n,e){const t=Se(n);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),np(t)?tp(t):Wo(t).s_()&&ep(t,e))}function Zf(n,e){const t=Se(n),i=Wo(t);t.B_.delete(e),i.s_()&&Kw(t,e),t.B_.size===0&&(i.s_()?i.a_():Is(t)&&t.K_.set("Unknown"))}function ep(n,e){if(n.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wo(n).V_(e)}function Kw(n,e){n.U_.xe(e),Wo(n).m_(e)}function tp(n){n.U_=new xk({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>n.B_.get(e)||null,nt:()=>n.datastore.serializer.databaseId}),Wo(n).start(),n.K_.F_()}function np(n){return Is(n)&&!Wo(n).i_()&&n.B_.size>0}function Is(n){return Se(n).k_.size===0}function Qw(n){n.U_=void 0}async function OP(n){n.K_.set("Online")}async function LP(n){n.B_.forEach((e,t)=>{ep(n,e)})}async function VP(n,e){Qw(n),np(n)?(n.K_.O_(e),tp(n)):n.K_.set("Unknown")}async function bP(n,e,t){if(n.K_.set("Online"),e instanceof Lw&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const d of l.targetIds)o.B_.has(d)&&(await o.remoteSyncer.rejectListen(d,h),o.B_.delete(d),o.U_.removeTarget(d))}(n,e)}catch(i){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Rc(n,i)}else if(e instanceof lc?n.U_.$e(e):e instanceof Ow?n.U_.Je(e):n.U_.Ge(e),!t.isEqual(Ie.min()))try{const i=await qw(n.localStore);t.compareTo(i)>=0&&await function(l,h){const d=l.U_.it(h);return d.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const w=l.B_.get(y);w&&l.B_.set(y,w.withResumeToken(p.resumeToken,h))}}),d.targetMismatches.forEach((p,y)=>{const w=l.B_.get(p);if(!w)return;l.B_.set(p,w.withResumeToken(Nt.EMPTY_BYTE_STRING,w.snapshotVersion)),Kw(l,p);const I=new wi(w.target,p,y,w.sequenceNumber);ep(l,I)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){oe("RemoteStore","Failed to raise snapshot:",i),await Rc(n,i)}}async function Rc(n,e,t){if(!qo(e))throw e;n.k_.add(1),await Rl(n),n.K_.set("Offline"),t||(t=()=>qw(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await t(),n.k_.delete(1),await Gc(n)})}function Yw(n,e){return e().catch(t=>Rc(n,t,e))}async function Kc(n){const e=Se(n),t=xi(e);let i=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;MP(e);)try{const o=await wP(e.localStore,i);if(o===null){e.L_.length===0&&t.a_();break}i=o.batchId,jP(e,o)}catch(o){await Rc(e,o)}Xw(e)&&Jw(e)}function MP(n){return Is(n)&&n.L_.length<10}function jP(n,e){n.L_.push(e);const t=xi(n);t.s_()&&t.f_&&t.g_(e.mutations)}function Xw(n){return Is(n)&&!xi(n).i_()&&n.L_.length>0}function Jw(n){xi(n).start()}async function FP(n){xi(n).w_()}async function UP(n){const e=xi(n);for(const t of n.L_)e.g_(t.mutations)}async function zP(n,e,t){const i=n.L_.shift(),o=Gf.from(i,e,t);await Yw(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Kc(n)}async function BP(n,e){e&&xi(n).f_&&await async function(i,o){if(function(h){return Ck(h)&&h!==Y.ABORTED}(o.code)){const l=i.L_.shift();xi(i).__(),await Yw(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Kc(i)}}(n,e),Xw(n)&&Jw(n)}async function ov(n,e){const t=Se(n);t.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const i=Is(t);t.k_.add(3),await Rl(t),i&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Gc(t)}async function $P(n,e){const t=Se(n);e?(t.k_.delete(2),await Gc(t)):e||(t.k_.add(2),await Rl(t),t.K_.set("Unknown"))}function Wo(n){return n.W_||(n.W_=function(t,i,o){const l=Se(t);return l.b_(),new kP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:OP.bind(null,n),mo:LP.bind(null,n),po:VP.bind(null,n),R_:bP.bind(null,n)}),n.q_.push(async e=>{e?(n.W_.__(),np(n)?tp(n):n.K_.set("Unknown")):(await n.W_.stop(),Qw(n))})),n.W_}function xi(n){return n.G_||(n.G_=function(t,i,o){const l=Se(t);return l.b_(),new PP(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Ro:()=>Promise.resolve(),mo:FP.bind(null,n),po:BP.bind(null,n),p_:UP.bind(null,n),y_:zP.bind(null,n)}),n.q_.push(async e=>{e?(n.G_.__(),await Kc(n)):(await n.G_.stop(),n.L_.length>0&&(oe("RemoteStore",`Stopping write stream with ${n.L_.length} pending writes`),n.L_=[]))})),n.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new Ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,d=new rp(e,t,h,o,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(n,e){if(jr("AsyncQueue",`${e}: ${n}`),qo(n))return new le(Y.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{static emptySet(e){return new Co(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Ga(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Co)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Co;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.z_=new et(pe.comparator)}track(e){const t=e.doc.key,i=this.z_.get(t);i?e.type!==0&&i.type===3?this.z_=this.z_.insert(t,e):e.type===3&&i.type!==1?this.z_=this.z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.z_=this.z_.remove(t):e.type===1&&i.type===2?this.z_=this.z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class Lo{constructor(e,t,i,o,l,h,d,p,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(d=>{h.push({type:0,doc:d})}),new Lo(e,t,Co.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&zc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qP{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class HP{constructor(){this.queries=lv(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,i){const o=Se(t),l=o.queries;o.queries=lv(),l.forEach((h,d)=>{for(const p of d.J_)p.onError(i)})})(this,new le(Y.ABORTED,"Firestore shutting down"))}}function lv(){return new Es(n=>_w(n),zc)}async function Zw(n,e){const t=Se(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(i=2):(l=new qP,i=e.Z_()?0:1);try{switch(i){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const d=ip(h,`Initialization of query '${wo(e.query)}' failed`);return void e.onError(d)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&sp(t)}async function e0(n,e){const t=Se(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function WP(n,e){const t=Se(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const d of h.J_)d.ta(o)&&(i=!0);h.H_=o}}i&&sp(t)}function GP(n,e,t){const i=Se(n),o=i.queries.get(e);if(o)for(const l of o.J_)l.onError(t);i.queries.delete(e)}function sp(n){n.X_.forEach(e=>{e.next()})}var mf,uv;(uv=mf||(mf={})).na="default",uv.Cache="cache";class t0{constructor(e,t,i){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=i||{}}ta(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Lo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const i=t!=="Offline";return(!this.options.ua||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Lo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.key=e}}class r0{constructor(e){this.key=e}}class KP{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=ww(e),this.ma=new Co(this.Va)}get fa(){return this.da}ga(e,t){const i=t?t.pa:new av,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,d=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((w,I)=>{const S=o.get(w),D=Bc(this.query,I)?I:null,V=!!S&&this.mutatedKeys.has(S.key),q=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let b=!1;S&&D?S.data.isEqual(D.data)?V!==q&&(i.track({type:3,doc:D}),b=!0):this.ya(S,D)||(i.track({type:2,doc:D}),b=!0,(p&&this.Va(D,p)>0||y&&this.Va(D,y)<0)&&(d=!0)):!S&&D?(i.track({type:0,doc:D}),b=!0):S&&!D&&(i.track({type:1,doc:S}),b=!0,(p||y)&&(d=!0)),b&&(D?(h=h.add(D),l=q?l.add(w):l.delete(w)):(h=h.delete(w),l=l.delete(w)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const w=this.query.limitType==="F"?h.last():h.first();h=h.delete(w.key),l=l.delete(w.key),i.track({type:1,doc:w})}return{ma:h,pa:i,ss:d,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((w,I)=>function(D,V){const q=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return q(D)-q(V)}(w.type,I.type)||this.Va(w.doc,I.doc)),this.wa(i),o=o!=null&&o;const d=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Lo(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),ba:d}:{ba:d}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new av,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(i=>{this.Da(i.key)&&(this.Ra=this.Ra.add(i.key))});const t=[];return e.forEach(i=>{this.Ra.has(i)||t.push(new r0(i))}),this.Ra.forEach(i=>{e.has(i)||t.push(new n0(i))}),t}va(e){this.da=e.ds,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Lo.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class QP{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class YP{constructor(e){this.key=e,this.Fa=!1}}class XP{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new Es(d=>_w(d),zc),this.Oa=new Map,this.Na=new Set,this.La=new et(pe.comparator),this.Ba=new Map,this.ka=new Yf,this.qa={},this.Qa=new Map,this.Ka=Oo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function JP(n,e,t=!0){const i=u0(n);let o;const l=i.xa.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await i0(i,e,t,!0),o}async function ZP(n,e){const t=u0(n);await i0(t,e,!0,!1)}async function i0(n,e,t,i){const o=await EP(n.localStore,sr(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await ex(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&Gw(n.remoteStore,o),d}async function ex(n,e,t,i,o){n.Ua=(I,S,D)=>async function(q,b,$,G){let te=b.view.ga($);te.ss&&(te=await rv(q.localStore,b.query,!1).then(({documents:P})=>b.view.ga(P,te)));const ce=G&&G.targetChanges.get(b.targetId),Te=G&&G.targetMismatches.get(b.targetId)!=null,ge=b.view.applyChanges(te,q.isPrimaryClient,ce,Te);return hv(q,b.targetId,ge.ba),ge.snapshot}(n,I,S,D);const l=await rv(n.localStore,e,!0),h=new KP(e,l.ds),d=h.ga(l.documents),p=Sl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(d,n.isPrimaryClient,p);hv(n,t,y.ba);const w=new QP(e,t,h);return n.xa.set(e,w),n.Oa.has(t)?n.Oa.get(t).push(e):n.Oa.set(t,[e]),y.snapshot}async function tx(n,e,t){const i=Se(n),o=i.xa.get(e),l=i.Oa.get(o.targetId);if(l.length>1)return i.Oa.set(o.targetId,l.filter(h=>!zc(h,e))),void i.xa.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await pf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&Zf(i.remoteStore,o.targetId),gf(i,o.targetId)}).catch($o)):(gf(i,o.targetId),await pf(i.localStore,o.targetId,!0))}async function nx(n,e){const t=Se(n),i=t.xa.get(e),o=t.Oa.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Zf(t.remoteStore,i.targetId))}async function rx(n,e,t){const i=cx(n);try{const o=await function(h,d){const p=Se(h),y=gt.now(),w=d.reduce((D,V)=>D.add(V.key),Pe());let I,S;return p.persistence.runTransaction("Locally write mutations","readwrite",D=>{let V=Fr(),q=Pe();return p.hs.getEntries(D,w).next(b=>{V=b,V.forEach(($,G)=>{G.isValidDocument()||(q=q.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(D,V)).next(b=>{I=b;const $=[];for(const G of d){const te=Tk(G,I.get(G.key).overlayedDocument);te!=null&&$.push(new Ts(G.key,te,hw(te.value.mapValue),or.exists(!0)))}return p.mutationQueue.addMutationBatch(D,y,$,d)}).next(b=>{S=b;const $=b.applyToLocalDocumentSet(I,q);return p.documentOverlayCache.saveOverlays(D,b.batchId,$)})}).then(()=>({batchId:S.batchId,changes:Tw(I)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,d,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(Ne)),y=y.insert(d,p),h.qa[h.currentUser.toKey()]=y}(i,o.batchId,t),await Al(i,o.changes),await Kc(i.remoteStore)}catch(o){const l=ip(o,"Failed to persist write");t.reject(l)}}async function s0(n,e){const t=Se(n);try{const i=await vP(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await Al(t,i,e)}catch(i){await $o(i)}}function cv(n,e,t){const i=Se(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.xa.forEach((l,h)=>{const d=h.view.ea(e);d.snapshot&&o.push(d.snapshot)}),function(h,d){const p=Se(h);p.onlineState=d;let y=!1;p.queries.forEach((w,I)=>{for(const S of I.J_)S.ea(d)&&(y=!0)}),y&&sp(p)}(i.eventManager,e),o.length&&i.Ma.R_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function ix(n,e,t){const i=Se(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Ba.get(e),l=o&&o.key;if(l){let h=new et(pe.comparator);h=h.insert(l,Ut.newNoDocument(l,Ie.min()));const d=Pe().add(l),p=new Hc(Ie.min(),new Map,new et(Ne),h,d);await s0(i,p),i.La=i.La.remove(l),i.Ba.delete(e),op(i)}else await pf(i.localStore,e,!1).then(()=>gf(i,e,t)).catch($o)}async function sx(n,e){const t=Se(n),i=e.batch.batchId;try{const o=await yP(t.localStore,e);a0(t,i,null),o0(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Al(t,o)}catch(o){await $o(o)}}async function ox(n,e,t){const i=Se(n);try{const o=await function(h,d){const p=Se(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let w;return p.mutationQueue.lookupMutationBatch(y,d).next(I=>(Fe(I!==null),w=I.keys(),p.mutationQueue.removeMutationBatch(y,I))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,w,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,w)).next(()=>p.localDocuments.getDocuments(y,w))})}(i.localStore,e);a0(i,e,t),o0(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Al(i,o)}catch(o){await $o(o)}}function o0(n,e){(n.Qa.get(e)||[]).forEach(t=>{t.resolve()}),n.Qa.delete(e)}function a0(n,e,t){const i=Se(n);let o=i.qa[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.qa[i.currentUser.toKey()]=o}}function gf(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Oa.get(e))n.xa.delete(i),t&&n.Ma.Wa(i,t);n.Oa.delete(e),n.isPrimaryClient&&n.ka.yr(e).forEach(i=>{n.ka.containsKey(i)||l0(n,i)})}function l0(n,e){n.Na.delete(e.path.canonicalString());const t=n.La.get(e);t!==null&&(Zf(n.remoteStore,t),n.La=n.La.remove(e),n.Ba.delete(t),op(n))}function hv(n,e,t){for(const i of t)i instanceof n0?(n.ka.addReference(i.key,e),ax(n,i)):i instanceof r0?(oe("SyncEngine","Document no longer in limbo: "+i.key),n.ka.removeReference(i.key,e),n.ka.containsKey(i.key)||l0(n,i.key)):Ee()}function ax(n,e){const t=e.key,i=t.path.canonicalString();n.La.get(t)||n.Na.has(i)||(oe("SyncEngine","New document in limbo: "+t),n.Na.add(i),op(n))}function op(n){for(;n.Na.size>0&&n.La.size<n.maxConcurrentLimboResolutions;){const e=n.Na.values().next().value;n.Na.delete(e);const t=new pe(Ke.fromString(e)),i=n.Ka.next();n.Ba.set(i,new YP(t)),n.La=n.La.insert(t,i),Gw(n.remoteStore,new wi(sr(Uc(t.path)),i,"TargetPurposeLimboResolution",Mc.oe))}}async function Al(n,e,t){const i=Se(n),o=[],l=[],h=[];i.xa.isEmpty()||(i.xa.forEach((d,p)=>{h.push(i.Ua(p,e,t).then(y=>{var w;if((y||t)&&i.isPrimaryClient){const I=y?!y.fromCache:(w=t==null?void 0:t.targetChanges.get(p.targetId))===null||w===void 0?void 0:w.current;i.sharedClientState.updateQueryState(p.targetId,I?"current":"not-current")}if(y){o.push(y);const I=Jf.zi(p.targetId,y);l.push(I)}}))}),await Promise.all(h),i.Ma.R_(o),await async function(p,y){const w=Se(p);try{await w.persistence.runTransaction("notifyLocalViewChanges","readwrite",I=>K.forEach(y,S=>K.forEach(S.Wi,D=>w.persistence.referenceDelegate.addReference(I,S.targetId,D)).next(()=>K.forEach(S.Gi,D=>w.persistence.referenceDelegate.removeReference(I,S.targetId,D)))))}catch(I){if(!qo(I))throw I;oe("LocalStore","Failed to update sequence numbers: "+I)}for(const I of y){const S=I.targetId;if(!I.fromCache){const D=w.us.get(S),V=D.snapshotVersion,q=D.withLastLimboFreeSnapshotVersion(V);w.us=w.us.insert(S,q)}}}(i.localStore,l))}async function lx(n,e){const t=Se(n);if(!t.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const i=await $w(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(d=>{d.forEach(p=>{p.reject(new le(Y.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Al(t,i.Ts)}}function ux(n,e){const t=Se(n),i=t.Ba.get(e);if(i&&i.Fa)return Pe().add(i.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const d=t.xa.get(h);o=o.unionWith(d.view.fa)}return o}}function u0(n){const e=Se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=s0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ux.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ix.bind(null,e),e.Ma.R_=WP.bind(null,e.eventManager),e.Ma.Wa=GP.bind(null,e.eventManager),e}function cx(n){const e=Se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=sx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ox.bind(null,e),e}class Ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return gP(this.persistence,new pP,e.initialUser,this.serializer)}ja(e){return new Bw(Xf.ei,this.serializer)}za(e){return new IP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ac.provider={build:()=>new Ac};class hx extends Ac{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof Sc);const i=this.persistence.referenceDelegate.garbageCollector;return new Zk(i,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?tn.withCacheSize(this.cacheSizeBytes):tn.DEFAULT;return new Bw(i=>Sc.ei(i,t),this.serializer)}}class yf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>cv(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=lx.bind(null,this.syncEngine),await $P(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HP}()}createDatastore(e){const t=Wc(e.databaseInfo.databaseId),i=function(l){return new CP(l)}(e.databaseInfo);return function(l,h,d,p){return new xP(l,h,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,d){return new DP(i,o,l,h,d)}(this.localStore,this.datastore,e.asyncQueue,t=>cv(this.syncEngine,t,0),function(){return sv.p()?new sv:new SP}())}createSyncEngine(e,t){return function(o,l,h,d,p,y,w){const I=new XP(o,l,h,d,p,y);return w&&(I.$a=!0),I}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Se(o);oe("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await Rl(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}yf.provider={build:()=>new yf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=lw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{oe("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(oe("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=ip(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function $d(n,e){n.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await $w(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function dv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await fx(n);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>ov(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>ov(e.remoteStore,o)),n._onlineComponents=e}async function fx(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await $d(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Y.FAILED_PRECONDITION||o.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Po("Error using user provided cache. Falling back to memory cache: "+t),await $d(n,new Ac)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await $d(n,new hx(void 0));return n._offlineComponents}async function h0(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await dv(n,n._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await dv(n,new yf))),n._onlineComponents}function px(n){return h0(n).then(e=>e.syncEngine)}async function vf(n){const e=await h0(n),t=e.eventManager;return t.onListen=JP.bind(null,e.syncEngine),t.onUnlisten=tx.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nx.bind(null,e.syncEngine),t}function mx(n,e,t={}){const i=new Ii;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,d,p,y){const w=new c0({next:S=>{w.eu(),h.enqueueAndForget(()=>e0(l,I));const D=S.docs.has(d);!D&&S.fromCache?y.reject(new le(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):D&&S.fromCache&&p&&p.source==="server"?y.reject(new le(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(S)},error:S=>y.reject(S)}),I=new t0(Uc(d.path),w,{includeMetadataChanges:!0,ua:!0});return Zw(l,I)}(await vf(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f0(n,e,t){if(!t)throw new le(Y.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function gx(n,e,t,i){if(e===!0&&i===!0)throw new le(Y.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pv(n){if(!pe.isDocumentKey(n))throw new le(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function mv(n){if(pe.isDocumentKey(n))throw new le(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ee()}function Vr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new le(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qc(n);throw new le(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new le(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new le(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}gx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=d0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new le(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new le(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new le(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gv(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new kC;switch(i.type){case"firstParty":return new DC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new le(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=fv.get(t);i&&(oe("ComponentProvider","Removing Datastore"),fv.delete(t),i.terminate())}(this),Promise.resolve()}}function yx(n,e,t,i={}){var o;const l=(n=Vr(n,Yc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&Po("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),i.mockUserToken){let d,p;if(typeof i.mockUserToken=="string")d=i.mockUserToken,p=Ft.MOCK_USER;else{d=EI(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const y=i.mockUserToken.sub||i.mockUserToken.user_id;if(!y)throw new le(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}n._authCredentials=new PC(new aw(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ss(this.firestore,e,this._query)}}class Wt{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wt(this.firestore,e,this._key)}}class Si extends Ss{constructor(e,t,i){super(e,t,Uc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wt(this.firestore,null,new pe(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function Vo(n,e,...t){if(n=vt(n),f0("collection","path",e),n instanceof Yc){const i=Ke.fromString(e,...t);return mv(i),new Si(n,null,i)}{if(!(n instanceof Wt||n instanceof Si))throw new le(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return mv(i),new Si(n.firestore,null,i)}}function Rs(n,e,...t){if(n=vt(n),arguments.length===1&&(e=lw.newId()),f0("doc","path",e),n instanceof Yc){const i=Ke.fromString(e,...t);return pv(i),new Wt(n,null,new pe(i))}{if(!(n instanceof Wt||n instanceof Si))throw new le(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(Ke.fromString(e,...t));return pv(i),new Wt(n.firestore,n instanceof Si?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Hw(this,"async_queue_retry"),this.fu=()=>{const i=Bd();i&&oe("AsyncQueue","Visibility state changed to "+i.visibilityState),this.r_.Jo()},this.gu=e;const t=Bd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=Bd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Ii;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!qo(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(i=>{this.Au=i,this.Ru=!1;const o=function(h){let d=h.message||"";return h.stack&&(d=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),d}(i);throw jr("INTERNAL UNHANDLED ERROR: ",o),i}).then(i=>(this.Ru=!1,i))));return this.gu=t,t}enqueueAfterDelay(e,t,i){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=rp.createAndSchedule(this,e,t,i,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function vv(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const o=t;for(const l of i)if(l in o&&typeof o[l]=="function")return!0;return!1}(n,["next","error","complete"])}class bo extends Yc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new yv,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yv(e),this._firestoreClient=void 0,await e}}}function vx(n,e){const t=typeof n=="object"?n:Af(),i=typeof n=="string"?n:"(default)",o=vs(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=_I("firestore");l&&yx(o,...l)}return o}function ap(n){if(n._terminated)throw new le(Y.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||_x(n),n._firestoreClient}function _x(n){var e,t,i;const o=n._freezeSettings(),l=function(d,p,y,w){return new GC(d,p,y,w.host,w.ssl,w.experimentalForceLongPolling,w.experimentalAutoDetectLongPolling,d0(w.experimentalLongPollingOptions),w.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new dx(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Mo(Nt.fromBase64String(e))}catch(t){throw new le(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Mo(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new le(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new le(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new le(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=/^__.*__$/;class Ex{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ts(e,this.data,this.fieldMask,t,this.fieldTransforms):new Il(e,this.data,t,this.fieldTransforms)}}function p0(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class dp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new dp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Lu(e),o}Bu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:i,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Cc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(p0(this.Mu)&&wx.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class Tx{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Wc(e)}$u(e,t,i,o=!1){return new dp({Mu:e,methodName:t,Ku:i,path:xt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function fp(n){const e=n._freezeSettings(),t=Wc(n._databaseId);return new Tx(n._databaseId,!!e.ignoreUndefinedProperties,t)}function m0(n,e,t,i,o,l={}){const h=n.$u(l.merge||l.mergeFields?2:0,e,t,o);v0("Data must be an object, but it was:",h,i);const d=g0(i,h);let p,y;if(l.merge)p=new Un(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const w=[];for(const I of l.mergeFields){const S=Sx(e,I,t);if(!h.contains(S))throw new le(Y.INVALID_ARGUMENT,`Field '${S}' is specified in your field mask but missing from your input data.`);Ax(w,S)||w.push(S)}p=new Un(w),y=h.fieldTransforms.filter(I=>p.covers(I.field))}else p=null,y=h.fieldTransforms;return new Ex(new Tn(d),p,y)}class pp extends up{_toFieldTransform(e){return new vk(e.path,new hl)}isEqual(e){return e instanceof pp}}function Ix(n,e,t,i=!1){return mp(t,n.$u(i?4:3,e))}function mp(n,e){if(y0(n=vt(n)))return v0("Unsupported field value:",e,n),g0(n,e);if(n instanceof up)return function(i,o){if(!p0(o.Mu))throw o.qu(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const d of i){let p=mp(d,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=vt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return mk(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=gt.fromDate(i);return{timestampValue:Ic(o.serializer,l)}}if(i instanceof gt){const l=new gt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Ic(o.serializer,l)}}if(i instanceof cp)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Mo)return{bytesValue:Vw(o.serializer,i._byteString)};if(i instanceof Wt){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof hp)return function(h,d){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw d.qu("VectorValues must only contain numeric values.");return Wf(d.serializer,p)})}}}}}}(i,o);throw o.qu(`Unsupported field value: ${Qc(i)}`)}(n,e)}function g0(n,e){const t={};return uw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(n,(i,o)=>{const l=mp(o,e.Ou(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function y0(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof gt||n instanceof cp||n instanceof Mo||n instanceof Wt||n instanceof up||n instanceof hp)}function v0(n,e,t){if(!y0(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const i=Qc(t);throw i==="an object"?e.qu(n+" a custom object"):e.qu(n+" "+i)}}function Sx(n,e,t){if((e=vt(e))instanceof lp)return e._internalPath;if(typeof e=="string")return _0(n,e);throw Cc("Field path arguments must be of type string or ",n,!1,void 0,t)}const Rx=new RegExp("[~\\*/\\[\\]]");function _0(n,e,t){if(e.search(Rx)>=0)throw Cc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new lp(...e.split("."))._internalPath}catch{throw Cc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Cc(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${i}`),h&&(p+=` in document ${o}`),p+=")"),new le(Y.INVALID_ARGUMENT,d+n+p)}function Ax(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Cx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(gp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Cx extends w0{data(){return super.data()}}function gp(n,e){return typeof e=="string"?_0(n,e):e instanceof lp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new le(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yp{}class E0 extends yp{}function vp(n,e,...t){let i=[];e instanceof yp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(p=>p instanceof wp).length,d=l.filter(p=>p instanceof _p).length;if(h>1||h>0&&d>0)throw new le(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class _p extends E0{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new _p(e,t,i)}_apply(e){const t=this._parse(e);return T0(e._query,t),new Ss(e.firestore,e.converter,lf(e._query,t))}_parse(e){const t=fp(e.firestore);return function(l,h,d,p,y,w,I){let S;if(y.isKeyField()){if(w==="array-contains"||w==="array-contains-any")throw new le(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${w}' queries on documentId().`);if(w==="in"||w==="not-in"){wv(I,w);const D=[];for(const V of I)D.push(_v(p,l,V));S={arrayValue:{values:D}}}else S=_v(p,l,I)}else w!=="in"&&w!=="not-in"&&w!=="array-contains-any"||wv(I,w),S=Ix(d,h,I,w==="in"||w==="not-in");return ut.create(y,w,S)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class wp extends yp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new wp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:$n.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const d=l.getFlattenedFilters();for(const p of d)T0(h,p),h=lf(h,p)}(e._query,t),new Ss(e.firestore,e.converter,lf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ep extends E0{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ep(e,t)}_apply(e){const t=function(o,l,h){if(o.startAt!==null)throw new le(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new le(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new cl(l,h)}(e._query,this._field,this._direction);return new Ss(e.firestore,e.converter,function(o,l){const h=o.explicitOrderBy.concat([l]);return new Ho(o.path,o.collectionGroup,h,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(e._query,t))}}function Tp(n,e="asc"){const t=e,i=gp("orderBy",n);return Ep._create(i,t)}function _v(n,e,t){if(typeof(t=vt(t))=="string"){if(t==="")throw new le(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!vw(e)&&t.indexOf("/")!==-1)throw new le(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ke.fromString(t));if(!pe.isDocumentKey(i))throw new le(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Fy(n,new pe(i))}if(t instanceof Wt)return Fy(n,t._key);throw new le(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qc(t)}.`)}function wv(n,e){if(!Array.isArray(n)||n.length===0)throw new le(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function T0(n,e){const t=function(o,l){for(const h of o)for(const d of h.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new le(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new le(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Px{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return ws(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new hp(l)}convertGeoPoint(e){return new cp(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(al(e));default:return null}}convertTimestamp(e){const t=Ci(e);return new gt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ke.fromString(e);Fe(zw(i));const o=new ll(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||jr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I0(n,e,t){let i;return i=n?n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class S0 extends w0{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(gp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class uc extends S0{data(e={}){return super.data(e)}}class xx{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Qa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new uc(this._firestore,this._userDataWriter,i.key,i,new Qa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new le(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(d=>{const p=new uc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Qa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new uc(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Qa(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,w=-1;return d.type!==0&&(y=h.indexOf(d.doc.key),h=h.delete(d.doc.key)),d.type!==1&&(h=h.add(d.doc),w=h.indexOf(d.doc.key)),{type:Nx(d.type),doc:p,oldIndex:y,newIndex:w}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Nx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){n=Vr(n,Wt);const e=Vr(n.firestore,bo);return mx(ap(e),n._key).then(t=>C0(e,n,t))}class R0 extends Px{constructor(e){super(),this.firestore=e}convertBytes(e){return new Mo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wt(this.firestore,null,t)}}function Dx(n,e,t){n=Vr(n,Wt);const i=Vr(n.firestore,bo),o=I0(n.converter,e);return A0(i,[m0(fp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,or.none())])}function Ip(n,e){const t=Vr(n.firestore,bo),i=Rs(n),o=I0(n.converter,e);return A0(t,[m0(fp(n.firestore),"addDoc",i._key,o,n.converter!==null,{}).toMutation(i._key,or.exists(!1))]).then(()=>i)}function Sp(n,...e){var t,i,o;n=vt(n);let l={includeMetadataChanges:!1,source:"default"},h=0;typeof e[h]!="object"||vv(e[h])||(l=e[h],h++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(vv(e[h])){const I=e[h];e[h]=(t=I.next)===null||t===void 0?void 0:t.bind(I),e[h+1]=(i=I.error)===null||i===void 0?void 0:i.bind(I),e[h+2]=(o=I.complete)===null||o===void 0?void 0:o.bind(I)}let p,y,w;if(n instanceof Wt)y=Vr(n.firestore,bo),w=Uc(n._key.path),p={next:I=>{e[h]&&e[h](C0(y,n,I))},error:e[h+1],complete:e[h+2]};else{const I=Vr(n,Ss);y=Vr(I.firestore,bo),w=I._query;const S=new R0(y);p={next:D=>{e[h]&&e[h](new xx(y,S,I,D))},error:e[h+1],complete:e[h+2]},kx(n._query)}return function(S,D,V,q){const b=new c0(q),$=new t0(D,b,V);return S.asyncQueue.enqueueAndForget(async()=>Zw(await vf(S),$)),()=>{b.eu(),S.asyncQueue.enqueueAndForget(async()=>e0(await vf(S),$))}}(ap(y),w,d,p)}function A0(n,e){return function(i,o){const l=new Ii;return i.asyncQueue.enqueueAndForget(async()=>rx(await px(i),o,l)),l.promise}(ap(n),e)}function C0(n,e,t){const i=t.docs.get(e._key),o=new R0(n);return new S0(n,o,e._key,i,new Qa(t.hasPendingWrites,t.fromCache),e.converter)}function Rp(){return new pp("serverTimestamp")}(function(e,t=!0){(function(o){Bo=o})(Uo),ur(new zn("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),d=new bo(new xC(i.getProvider("auth-internal")),new LC(i.getProvider("app-check-internal")),function(y,w){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new le(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ll(y.options.projectId,w)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),In(Oy,"4.7.5",e),In(Oy,"4.7.5","esm2017")})();const Ox={apiKey:"AIzaSyAa_gBRR978A7Juv0Zjckr35JXQF4t2AhM",authDomain:"trica-stikla-penzija.firebaseapp.com",projectId:"trica-stikla-penzija",storageBucket:"trica-stikla-penzija.firebasestorage.app",messagingSenderId:"744917814363",appId:"1:744917814363:web:6ad820f2a187a70d51437e",measurementId:"G-FQHLELYFHH"},Ap=Qv(Ox);SC(Ap);const Br=sA(Ap),Sn=vx(Ap),k0=bE.createContext();function kl(){return z.useContext(k0)}function Lx({children:n}){const[e,t]=z.useState(null),[i,o]=z.useState(!1),[l,h]=z.useState(!0);z.useEffect(()=>K1(Br,d),[]);async function d(y){y?(t({uid:y.uid,email:y.email,displayName:y.displayName}),o(!0)):(t(null),o(!1)),h(!1)}const p={currentUser:e,userLoggedIn:i,loading:l};return E.jsx(k0.Provider,{value:p,children:!l&&n})}const Vx=async(n,e)=>B1(Br,n,e),bx=async(n,e)=>$1(Br,n,e),Mx=()=>{let n=gs();const[e,t]=z.useState(""),[i,o]=z.useState(""),[l,h]=z.useState(""),[d,p]=z.useState(""),[y,w]=z.useState(!1),[I,S]=z.useState(""),D=async b=>{try{const $=Rs(Sn,"users",b.uid);await Dx($,{email:b.email,username:b.displayName||"Anonimni kul korisnik",score:0}),console.log("Korisnik je sačuvan u Firestore!")}catch($){console.error("Greška pri čuvanju korisnika u Firestore:",$)}},V=async b=>{if(b.preventDefault(),S(""),y){if(l!==d){S("Passwords do not match!");return}try{const G=(await Vx(e,l)).user;await H1(Br.currentUser,{displayName:i}),await D(G),n("/")}catch($){console.error("Greška pri registraciji:",$),S("The account probably already exists, please try again")}}else try{await bx(e,l),n("/")}catch($){console.error("Greška pri prijavi:",$),S("These credentials do not match, please try again")}},q=()=>{w(!y),S(""),t(""),o(""),h(""),p("")};return E.jsxs(E.Fragment,{children:[E.jsx("nav",{className:"navbar",children:E.jsx(mt,{to:"/",className:"logo",children:E.jsx("h1",{children:"TSHP"})})}),E.jsxs("div",{className:"login-container",children:[E.jsx("h2",{children:y?"Register":"Sign-in"}),I&&E.jsx("p",{className:"error-message",children:I}),E.jsxs("form",{onSubmit:V,children:[E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"email",children:"Email:"}),E.jsx("input",{type:"email",id:"email",value:e,onChange:b=>t(b.target.value),placeholder:"Enter email address",required:!0})]}),y&&E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"username",children:"Username:"}),E.jsx("input",{type:"text",id:"username",value:i,onChange:b=>o(b.target.value),placeholder:"Enter username",required:!0})]}),E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"password",children:"Password:"}),E.jsx("input",{type:"password",id:"password",value:l,onChange:b=>h(b.target.value),placeholder:"Enter password",required:!0})]}),y&&E.jsxs("div",{className:"form-group",children:[E.jsx("label",{htmlFor:"repeat-password",children:"Type password again:"}),E.jsx("input",{type:"password",id:"repeat-password",value:d,onChange:b=>p(b.target.value),placeholder:"Repeat password",required:!0})]}),E.jsx("button",{type:"submit",children:y?"Register":"Signin"})]}),E.jsxs("p",{children:[y?"Already have an account? ":"Didn't register yet?",E.jsx("span",{onClick:q,className:"switch-link",children:y?" Sign-in":" Register"})]})]})]})},jx=()=>{const{currentUser:n,userLoggedIn:e}=kl(),[t,i]=z.useState(""),[o,l]=z.useState(!1),[h,d]=z.useState(""),p=z.useRef(null);z.useEffect(()=>{(async()=>{if(n)try{const q=Rs(Sn,"users",n.uid),b=await Cl(q);b.exists()?i(b.data().username||"Anonimni kul korisnik"):console.error("Dokument ne postoji!")}catch(q){console.error("Greška pri dohvatanju podataka:",q)}})()},[n]);const y=gs(),w=V=>{y(`/courses/${V}`)},I=()=>{l(!o)},S=async()=>{try{await El(Br),d("")}catch{d("Greška pri izlogovanju!")}},D=V=>{p.current&&!p.current.contains(V.target)&&l(!1)};return z.useEffect(()=>(o?document.addEventListener("mousedown",D):document.removeEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[o]),E.jsx(E.Fragment,{children:E.jsxs("div",{className:"courses-container",children:[E.jsxs("nav",{className:"navbar",children:[E.jsx(mt,{to:"/",className:"logo",children:E.jsx("h1",{children:"TSHP"})}),E.jsx("ul",{children:e?E.jsxs("li",{className:"dropdown",ref:p,children:[E.jsx("span",{onClick:I,className:"username",children:t}),o&&E.jsxs("div",{className:"dropdown-menu",children:[E.jsxs("p",{children:["Score: ",n==null?void 0:n.score]}),E.jsx("button",{onClick:S,className:"dropdown-item",children:"Sign Out"})]})]}):E.jsx("li",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:"Sign-in"})})})]}),E.jsxs("div",{className:"open",children:[E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"})]}),E.jsx("h2",{className:"courses-title",children:"Lessons"}),E.jsxs("div",{className:"courses-grid",children:[E.jsxs("div",{className:"course-card",children:[E.jsx("h3",{children:"Recursion"}),E.jsx("p",{children:"Recursion in mathematics and computer science means a procedure or function that uses itself in its definition."}),E.jsx("button",{onClick:()=>w("rekurzija"),children:"Start lesson"})]}),E.jsxs("div",{className:"course-card",children:[E.jsx("h3",{children:"Graph teory"}),E.jsx("p",{children:"This and the following lessons will teach the reader about graph theory, one of the key areas in competitive programming."}),E.jsx("button",{onClick:()=>w("graph-teory"),children:"Start lesson"})]}),E.jsxs("div",{className:"course-card",children:[E.jsx("h3",{children:"DFS Graph Traversal"}),E.jsx("p",{children:"Depth-First Search (DFS) is a graph traversal algorithm that explores as deeply as possible along each branch before backtracking."}),E.jsx("button",{onClick:()=>w("dfs"),children:"Start lesson"})]})]})]})})},Ev=()=>{const{currentUser:n,userLoggedIn:e}=kl(),[t,i]=z.useState(""),[o,l]=z.useState(!1),[h,d]=z.useState(""),p=z.useRef(null);z.useEffect(()=>{(async()=>{if(n)try{const D=Rs(Sn,"users",n.uid),V=await Cl(D);V.exists()?i(V.data().username||"Anonimni kul korisnik"):console.error("Dokument ne postoji!")}catch(D){console.error("Greška pri dohvatanju podataka:",D)}})()},[n]),gs();const y=()=>{l(!o)},w=async()=>{try{await El(Br),d("")}catch{d("Greška pri izlogovanju!")}},I=S=>{p.current&&!p.current.contains(S.target)&&l(!1)};return z.useEffect(()=>(o?document.addEventListener("mousedown",I):document.removeEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[o]),E.jsxs("div",{className:"container",children:[E.jsxs("div",{className:"open",children:[E.jsx("div",{className:"sloj"}),E.jsx("div",{className:"sloj"}),E.jsx("div",{className:"sloj"})]}),E.jsxs("div",{className:"row",children:[E.jsxs("nav",{className:"navbar",children:[E.jsx(mt,{to:"/",className:"logo",children:E.jsx("h1",{children:"TSHP"})}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx(mt,{to:"/courses",className:"nav-link username",children:"Lessons"})}),e?E.jsxs("li",{className:"dropdown",ref:p,children:[E.jsx("span",{onClick:y,className:"username",children:t}),o&&E.jsxs("div",{className:"dropdown-menu",children:[E.jsxs("p",{children:["Score: ",n==null?void 0:n.score]}),E.jsx("button",{onClick:w,className:"dropdown-item",children:"Sign Out"})]})]}):E.jsx("li",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:"Sign-in"})})]})]}),E.jsxs("div",{className:"content",children:[E.jsxs("h1",{children:[E.jsx("span",{children:"T"}),"hinking, ",E.jsx("span",{children:"S"}),"haring, ",E.jsx("span",{children:"H"}),"elping, ",E.jsx("span",{children:"P"}),"rogramming; ",E.jsx("div",{className:"blinking-cursor",children:"|"})]}),E.jsx("p",{children:"Perfect community for learning."})]})]})]})},Fx=()=>{const[n,e]=z.useState(0),{currentUser:t,userLoggedIn:i}=kl(),[o,l]=z.useState(""),[h,d]=z.useState(!1),[p,y]=z.useState(""),w=z.useRef(null);z.useEffect(()=>{(async()=>{if(t)try{const R=Rs(Sn,"users",t.uid),C=await Cl(R);C.exists()?l(C.data().username||"Anonimni kul korisnik"):console.error("Dokument ne postoji!")}catch(R){console.error("Greška pri dohvatanju podataka:",R)}})()},[t]),gs();const I=()=>{d(!h)},S=async()=>{try{await El(Br),y("")}catch{y("Greška pri izlogovanju!")}},D=P=>{w.current&&!w.current.contains(P.target)&&d(!1)};z.useEffect(()=>(h?document.addEventListener("mousedown",D):document.removeEventListener("mousedown",D),()=>{document.removeEventListener("mousedown",D)}),[h]);const[V,q]=z.useState([]),[b,$]=z.useState(""),G=["/src/pages/Courses/slikeRekurzija/Recursive-approach1.png","/src/pages/Courses/slikeRekurzija/Recursive-approach2.png","/src/pages/Courses/slikeRekurzija/Recursive-approach3.png","/src/pages/Courses/slikeRekurzija/Recursive-approach4.png"],te=["Checking if X is equivalent to 1. This is the termination condition for this recursion. ","Checking the parity of X. If the expression `X & 1` (where `&` is the bitwise AND operator in C++) returns 1, then X is an odd number. In this case, we multiply X by three and add one. If it returns 0, we proceed to the `else` branch.","In the `else` branch, we divide X by two using the fast `>>` operator for right bitwise shifting. ","We continue the recursion by calling the function `Recursion()` again, passing X with its updated value as a parameter."],ce=()=>{n<G.length-1&&e(n+1)},Te=()=>{n>0&&e(n-1)};z.useEffect(()=>{const P=Vo(Sn,"messages","rekurzija","messagesRekurzija"),R=vp(P,Tp("createdAt","asc"));return Sp(R,N=>{const L=N.docs.map(j=>({id:j.id,...j.data()}));q(L)})},[]);const ge=async P=>{if(P.preventDefault(),!b.trim())return;const R=Vo(Sn,"messages","rekurzija","messagesRekurzija");await Ip(R,{text:b,createdAt:Rp(),uid:t.uid,displayName:t.displayName||"Anonimni kul user"}),$("")};return E.jsxs(E.Fragment,{children:[E.jsxs("nav",{className:"navbar",children:[E.jsx(mt,{to:"/",className:"logo",children:E.jsx("h1",{children:"TSHP"})}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx(mt,{to:"/courses",className:"nav-link username",children:"Lessons"})}),i?E.jsxs("li",{className:"dropdown",ref:w,children:[E.jsx("span",{onClick:I,className:"username",children:o}),h&&E.jsxs("div",{className:"dropdown-menu",children:[E.jsxs("p",{children:["Score: ",t==null?void 0:t.score]}),E.jsx("button",{onClick:S,className:"dropdown-item",children:"Sign Out"})]})]}):E.jsx("li",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:"Sign-in"})})]})]}),E.jsxs("div",{className:"course-container",children:[E.jsxs("div",{className:"open",children:[E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"})]}),E.jsxs("div",{className:"sidebar",children:[E.jsx("h2",{children:"Table of Contents"}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx("a",{href:"#section1",children:"Recursion in Competitive Programming"})}),E.jsx("li",{children:E.jsx("a",{href:"#section2",children:"Basic Concept"})}),E.jsx("li",{children:E.jsx("a",{href:"#section3",children:"Every recursive function must have a..."})}),E.jsx("li",{children:E.jsx("a",{href:"#section4",children:"How Does the Computer Execute Recursion?"})}),E.jsx("li",{children:E.jsx("a",{href:"#section5",children:"Problems with Recursion"})}),E.jsx("li",{children:E.jsx("a",{href:"#section6",children:"Applications of Recursion"})}),E.jsx("li",{children:E.jsx("a",{href:"#section7",children:"Examples"})}),E.jsx("li",{children:E.jsx("a",{href:"#comments-section",children:"Comments section"})})]})]}),E.jsxs("div",{className:"course-content",children:[E.jsx("h1",{children:"Recursion Course"}),E.jsxs("div",{id:"section1",children:[E.jsx("h2",{children:"Recursion in Competitive Programming"}),E.jsx("p",{children:"Recursion is a programming technique where a function calls itself to solve a problem by breaking it into smaller, similar subproblems. This technique is crucial for solving tasks that naturally follow a hierarchical structure, such as graphs, trees, and combinatorial tasks where examples are small enough to allow exhaustive exploration of all combinations."})]}),E.jsxs("div",{id:"section2",children:[E.jsx("h2",{children:"Basic Concept"}),E.jsx("p",{children:"The definition: Recursion is a function that calls itself, either directly or indirectly."})]}),E.jsxs("div",{id:"section3",children:[E.jsx("h2",{children:"Every recursive function must have a..."}),E.jsx("p",{children:"1. Base Case: A condition where recursion stops, marking the termination of the recursion."}),E.jsx("p",{children:'2. Recursive Step: A function call that addresses a "smaller" or "simpler" problem.'})]}),E.jsxs("div",{id:"section4",children:[E.jsx("h2",{children:"How Does the Computer Execute Recursion?"}),E.jsx("p",{children:"- When a function calls itself, each new call is added to the call stack, where the values of all local variables are stored."}),E.jsx("p",{children:'- The function "returns backward" when it encounters the base case or finishes its task.'}),E.jsx("p",{children:"- Recursive searches and functions can intuitively be visualized as trees."})]}),E.jsxs("div",{id:"section5",children:[E.jsx("h2",{children:"Problems with Recursion"}),E.jsx("p",{children:"- Recursive calls consume memory on the stack, which can lead to stack overflow."}),E.jsx("p",{children:"- In some cases, recursion can be too slow, especially compared to iterative solutions."}),E.jsx("p",{children:"- A good example of slow recursion is determining an element in the Fibonacci sequence. Recursive calculation for N involves summing the recursive results of its two predecessors (N−1 and N−2), causing repeated calculations for the same values."})]}),E.jsxs("div",{id:"section6",children:[E.jsx("h2",{children:"Applications of Recursion"}),E.jsx("p",{children:"Recursion is used to solve many problems, including:"}),E.jsx("p",{children:" "}),E.jsx("p",{children:"Graphs and Trees:"}),E.jsx("p",{children:"- Depth-First Search (DFS) uses recursion to traverse nodes."}),E.jsx("p",{children:"- Counting connected components or finding the deepest node in a tree."}),E.jsx("p",{children:"Combinatorics:"}),E.jsx("p",{children:"- Generating all subsets of a set."}),E.jsx("p",{children:"- Finding permutations or combinations of elements."}),E.jsx("p",{children:"Dynamic Programming (DP):"}),E.jsx("p",{children:"- Many DP problems can be solved using recursion with memoization for optimization. "})]}),E.jsxs("div",{id:"section7",children:[E.jsx("h2",{children:"Examples"}),E.jsx("p",{children:"Consider an algorithm that takes as input a positive integer n. If n is even, the algorithm divides it by two, and if n is odd, the algorithm multiplies it by three and adds one. The algorithm repeats this, until n is one. "}),E.jsx("p",{children:"For example, the sequence for n=3 is as follows:"}),E.jsx("p",{children:"3 → 10 → 5 → 16 → 8 → 4 → 2 → 1"}),E.jsx("p",{children:"Your task is to simulate the execution of the algorithm for a given value of n."}),E.jsx("p",{}),E.jsxs("div",{className:"examples-container",children:[E.jsx("div",{className:"left-section",children:E.jsx("p",{children:te[n]})}),E.jsxs("div",{className:"right-section",children:[E.jsx("img",{src:G[n],alt:`Example ${n+1}`}),E.jsxs("div",{className:"buttons",children:[E.jsx("button",{onClick:Te,disabled:n===0,children:"Prev"}),E.jsx("button",{onClick:ce,disabled:n===G.length-1,children:"Next"})]})]})]})]}),E.jsxs("div",{id:"comments-section",className:"comments-section",children:[E.jsx("h2",{children:"Comments"}),E.jsx("div",{className:"comments-list",children:V.map(P=>E.jsxs("div",{className:"comment",children:[E.jsxs("strong",{children:[P.displayName,": "]}),E.jsx("p",{children:P.text})]},P.id))}),E.jsx("div",{className:"comment-send",children:i?E.jsx(E.Fragment,{children:E.jsxs("form",{onSubmit:ge,children:[E.jsx("input",{value:b,onChange:P=>$(P.target.value),placeholder:"Write your comment here..."}),E.jsx("button",{type:"submit",children:"Send"})]})}):E.jsx("p",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:E.jsx("button",{type:"submit",children:"Log-in to send messages"})})})})]})]})]})]})},Ux=()=>{const{currentUser:n,userLoggedIn:e}=kl(),[t,i]=z.useState(""),[o,l]=z.useState(!1),[h,d]=z.useState(""),p=z.useRef(null);z.useEffect(()=>{(async()=>{if(n)try{const G=Rs(Sn,"users",n.uid),te=await Cl(G);te.exists()?i(te.data().username||"Anonimni kul korisnik"):console.error("Dokument ne postoji!")}catch(G){console.error("Greška pri dohvatanju podataka:",G)}})()},[n]),gs();const y=()=>{l(!o)},w=async()=>{try{await El(Br),d("")}catch{d("Greška pri izlogovanju!")}},I=$=>{p.current&&!p.current.contains($.target)&&l(!1)};z.useEffect(()=>(o?document.addEventListener("mousedown",I):document.removeEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[o]);const[S,D]=z.useState([]),[V,q]=z.useState("");z.useEffect(()=>{const $=Vo(Sn,"messages","graphtheory","messagesGraph"),G=vp($,Tp("createdAt","asc"));return Sp(G,ce=>{const Te=ce.docs.map(ge=>({id:ge.id,...ge.data()}));D(Te)})},[]);const b=async $=>{if($.preventDefault(),!V.trim())return;const G=Vo(Sn,"messages","graphtheory","messagesGraph");await Ip(G,{text:V,createdAt:Rp(),uid:n.uid,displayName:n.displayName||"Anonimni kul user"}),q("")};return E.jsxs(E.Fragment,{children:[E.jsxs("nav",{className:"navbar",children:[E.jsx(mt,{to:"/",className:"logo",children:E.jsx("h1",{children:"TSHP"})}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx(mt,{to:"/courses",className:"nav-link username",children:"Lessons"})}),e?E.jsxs("li",{className:"dropdown",ref:p,children:[E.jsx("span",{onClick:y,className:"username",children:t}),o&&E.jsxs("div",{className:"dropdown-menu",children:[E.jsxs("p",{children:["Score: ",n==null?void 0:n.score]}),E.jsx("button",{onClick:w,className:"dropdown-item",children:"Sign Out"})]})]}):E.jsx("li",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:"Sign-in"})})]})]}),E.jsxs("div",{className:"course-container",children:[E.jsxs("div",{className:"open",children:[E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"})]}),E.jsxs("div",{className:"sidebar",children:[E.jsx("h2",{children:"Table of Contents"}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx("a",{href:"#section1",children:"Graph Theory (definition)"})}),E.jsx("li",{children:E.jsx("a",{href:"#section2",children:"Key Terms and Definitions:"})}),E.jsx("li",{children:E.jsx("a",{href:"#comments-section",children:"Comments section"})})]})]}),E.jsxs("div",{className:"course-content",children:[E.jsx("h1",{children:"Graph Theory"}),E.jsxs("div",{id:"section1",children:[E.jsx("h2",{children:"Graph Theory (definition)"}),E.jsx("p",{children:"A graph is a structure consisting of vertices (nodes) and edges that connect them. It is a practical way to represent sets of elements and their mutual dependencies or connections."}),E.jsx("p",{children:" "}),E.jsx("p",{children:"Edges in graphs can be either directed or undirected (bidirectional), and they may also have weights, regardless of direction."}),E.jsx("p",{children:" "}),E.jsx("p",{children:"- A directed edge (uv) means you can travel from vertex u to vertex v."}),E.jsx("p",{children:"- An undirected edge (u) means you can travel between u and v in both directions."}),E.jsx("p",{children:"- A weighted edge (uv, w) means traveling from u to v has a specific cost or weight w."})]}),E.jsxs("div",{id:"section2",children:[E.jsx("h2",{children:"Key Terms and Definitions:"}),E.jsx("p",{children:" "}),E.jsx("p",{children:"- Degree of a vertex: The number of edges that connect to or from a vertex."}),E.jsx("p",{children:"- Traversal: Moving through vertices via the edges that connect them."}),E.jsx("p",{children:"- Walk: A traversal where vertices and edges may repeat."}),E.jsx("p",{children:"- Trail: A walk where edges may not repeat."}),E.jsx("p",{children:"- Path: A trail where vertices may not repeat."}),E.jsx("p",{children:'- Cycle: A "path" that starts and ends at the same vertex.'}),E.jsx("p",{children:"- A graph is cyclic if it contains cycles, and acyclic otherwise."}),E.jsx("p",{children:"- Connected component: A part of an undirected graph where there is a path between any two vertices."}),E.jsx("p",{children:"- Strongly connected component (SCC): A part of a directed graph where there is a path between any two vertices."}),E.jsx("p",{children:"- A graph is connected if it has exactly one connected component."}),E.jsx("p",{children:"- Tree: A connected graph with N vertices and N - 1 edges. "}),E.jsx("p",{children:"- In a tree, there is exactly one path between any two vertices."}),E.jsx("p",{children:"- DAG (Directed Acyclic Graph): A directed graph with no cycles."}),E.jsx("p",{children:"- Spanning tree (ST): A tree that contains all N vertices of a connected graph, using exactly N - 1 edges."}),E.jsx("p",{children:"- Minimum Spanning Tree (MST): A spanning tree of a weighted graph with the minimum total weight of edges."})]}),E.jsxs("div",{id:"comments-section",className:"comments-section",children:[E.jsx("h2",{children:"Comments"}),E.jsx("div",{className:"comments-list",children:S.map($=>E.jsxs("div",{className:"comment",children:[E.jsxs("strong",{children:[$.displayName,": "]}),E.jsx("p",{children:$.text})]},$.id))}),E.jsx("div",{className:"comment-send",children:e?E.jsx(E.Fragment,{children:E.jsxs("form",{onSubmit:b,children:[E.jsx("input",{value:V,onChange:$=>q($.target.value),placeholder:"Write your comment here..."}),E.jsx("button",{type:"submit",children:"Send"})]})}):E.jsx("p",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:E.jsx("button",{type:"submit",children:"Log-in to send messages"})})})})]})]})]})]})},zx=()=>{const{currentUser:n,userLoggedIn:e}=kl(),[t,i]=z.useState(""),[o,l]=z.useState(!1),[h,d]=z.useState(""),p=z.useRef(null);z.useEffect(()=>{(async()=>{if(n)try{const G=Rs(Sn,"users",n.uid),te=await Cl(G);te.exists()?i(te.data().username||"Anonimni kul korisnik"):console.error("Dokument ne postoji!")}catch(G){console.error("Greška pri dohvatanju podataka:",G)}})()},[n]),gs();const y=()=>{l(!o)},w=async()=>{try{await El(Br),d("")}catch{d("Greška pri izlogovanju!")}},I=$=>{p.current&&!p.current.contains($.target)&&l(!1)};z.useEffect(()=>(o?document.addEventListener("mousedown",I):document.removeEventListener("mousedown",I),()=>{document.removeEventListener("mousedown",I)}),[o]);const[S,D]=z.useState([]),[V,q]=z.useState("");z.useEffect(()=>{const $=Vo(Sn,"messages","dfs","messagesDfs"),G=vp($,Tp("createdAt","asc"));return Sp(G,ce=>{const Te=ce.docs.map(ge=>({id:ge.id,...ge.data()}));D(Te)})},[]);const b=async $=>{if($.preventDefault(),!V.trim())return;const G=Vo(Sn,"messages","dfs","messagesDfs");await Ip(G,{text:V,createdAt:Rp(),uid:n.uid,displayName:n.displayName||"Anonimni kul user"}),q("")};return E.jsxs(E.Fragment,{children:[E.jsxs("nav",{className:"navbar",children:[E.jsx(mt,{to:"/",className:"logo",children:E.jsx("h1",{children:"TSHP"})}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx(mt,{to:"/courses",className:"nav-link username",children:"Lessons"})}),e?E.jsxs("li",{className:"dropdown",ref:p,children:[E.jsx("span",{onClick:y,className:"username",children:t}),o&&E.jsxs("div",{className:"dropdown-menu",children:[E.jsxs("p",{children:["Score: ",n==null?void 0:n.score]}),E.jsx("button",{onClick:w,className:"dropdown-item",children:"Sign Out"})]})]}):E.jsx("li",{children:E.jsx(mt,{to:"/login",className:"nav-link username",children:"Sign-in"})})]})]}),E.jsxs("div",{className:"course-container",children:[E.jsxs("div",{className:"open",children:[E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"}),E.jsx("div",{class:"sloj"})]}),E.jsxs("div",{className:"sidebar",children:[E.jsx("h2",{children:"Table of Contents"}),E.jsxs("ul",{children:[E.jsx("li",{children:E.jsx("a",{href:"#section1",children:"Core Concept"})}),E.jsx("li",{children:E.jsx("a",{href:"#section2",children:"Steps in DFS:"})}),E.jsx("li",{children:E.jsx("a",{href:"#section3",children:"Pseudocode for DFS"})}),E.jsx("li",{children:E.jsx("a",{href:"#section4",children:"Properties of DFS"})}),E.jsx("li",{children:E.jsx("a",{href:"#section5",children:"Useful Applications of DFS"})}),E.jsx("li",{children:E.jsx("a",{href:"#section6",children:"C++ Implementation"})}),E.jsx("li",{children:E.jsx("a",{href:"#comments-section",children:"Comments section"})})]})]}),E.jsxs("div",{className:"course-content",children:[E.jsx("h1",{children:"DFS Graph Traversal"}),E.jsxs("div",{id:"section1",children:[E.jsx("h2",{children:"Core Concept"}),E.jsx("p",{children:"DFS uses recursion or a stack to traverse nodes deeply in the graph."})]}),E.jsxs("div",{id:"section2",children:[E.jsx("h2",{children:"Steps in DFS:"}),E.jsx("p",{children:" 1. Start from an initial node. "}),E.jsx("p",{children:" 2. Explore all its unvisited neighbors. "}),E.jsx("p",{children:" 3. Continue the process until all nodes in the component of that starting node are visited. "}),E.jsx("p",{children:" DFS can be applied to both directed and undirected graphs. "})]}),E.jsxs("div",{id:"section3",children:[E.jsx("h2",{children:"Pseudocode for DFS"}),E.jsx("p",{children:" DFS(u): "}),E.jsx("p",{children:"     Mark node u as visited "}),E.jsx("p",{children:"     For each neighbor v of node u: "}),E.jsx("p",{children:"         If v is not visited: "}),E.jsx("p",{children:"             DFS(v) "})]}),E.jsxs("div",{id:"section4",children:[E.jsx("h2",{children:"Properties of DFS"}),E.jsx("p",{children:" - Time Complexity: O(N + M), where N is the number of nodes and M is the number of edges. "}),E.jsx("p",{children:" - Space Complexity: O(N + M) or O(N^2) depending on how the graph is stored. "})]}),E.jsxs("div",{id:"section5",children:[E.jsx("h2",{children:"Useful Applications of DFS"}),E.jsx("p",{children:" - Checking for the existence of a path between two nodes. "}),E.jsx("p",{children:" - Finding connected components. "}),E.jsx("p",{children:" - Topological sorting. "}),E.jsx("p",{children:" - Detecting cycles in a graph. "}),E.jsx("p",{children:" - Generating a spanning tree with a large height. "}),E.jsx("p",{children:" - Finding strongly connected components (SCC) in directed graphs. "})]}),E.jsxs("div",{id:"section6",children:[E.jsx("h2",{children:"C++ Implementation:"}),E.jsx("p",{children:"..."})]}),E.jsxs("div",{id:"comments-section",className:"comments-section",children:[E.jsx("h2",{children:"Comments"}),E.jsx("div",{className:"comments-list",children:S.map($=>E.jsxs("div",{className:"comment",children:[E.jsxs("strong",{children:[$.displayName,": "]}),E.jsx("p",{children:$.text})]},$.id))}),E.jsx("div",{className:"comment-send",children:e?E.jsx(E.Fragment,{children:E.jsxs("form",{onSubmit:b,children:[E.jsx("input",{value:V,onChange:$=>q($.target.value),placeholder:"Write your comment here..."}),E.jsx("button",{type:"submit",children:"Send"})]})}):E.jsx("p",{children:"Morate biti ulogovani"})})]})]})]})]})},Bx=()=>E.jsx("main",{children:E.jsxs(DT,{children:[E.jsx(mi,{path:"/",element:E.jsx(Ev,{})}),E.jsx(mi,{path:"/login",element:E.jsx(Mx,{})}),E.jsx(mi,{path:"/courses",element:E.jsx(jx,{})}),E.jsx(mi,{path:"/",element:E.jsx(Ev,{})}),E.jsx(mi,{path:"/courses/rekurzija",element:E.jsx(Fx,{})}),E.jsx(mi,{path:"/courses/graph-teory",element:E.jsx(Ux,{})}),E.jsx(mi,{path:"/courses/dfs",element:E.jsx(zx,{})})]})}),$x=()=>E.jsx(nI,{children:E.jsx("div",{children:E.jsx(Bx,{})})});BE.createRoot(document.getElementById("root")).render(E.jsx(z.StrictMode,{children:E.jsx(Lx,{children:E.jsx($x,{})})}));
