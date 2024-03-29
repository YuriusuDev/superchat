var CA=Object.create;var ky=Object.defineProperty;var kA=Object.getOwnPropertyDescriptor;var NA=Object.getOwnPropertyNames;var DA=Object.getPrototypeOf,xA=Object.prototype.hasOwnProperty;var ln=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var bA=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of NA(e))!xA.call(t,i)&&i!==n&&ky(t,i,{get:()=>e[i],enumerable:!(r=kA(e,i))||r.enumerable});return t};var ni=(t,e,n)=>(n=t!=null?CA(DA(t)):{},bA(e||!t||!t.__esModule?ky(n,"default",{value:t,enumerable:!0}):n,t));var By=ln(B=>{"use strict";var ws=Symbol.for("react.element"),OA=Symbol.for("react.portal"),VA=Symbol.for("react.fragment"),LA=Symbol.for("react.strict_mode"),MA=Symbol.for("react.profiler"),FA=Symbol.for("react.provider"),UA=Symbol.for("react.context"),BA=Symbol.for("react.forward_ref"),zA=Symbol.for("react.suspense"),jA=Symbol.for("react.memo"),qA=Symbol.for("react.lazy"),Ny=Symbol.iterator;function $A(t){return t===null||typeof t!="object"?null:(t=Ny&&t[Ny]||t["@@iterator"],typeof t=="function"?t:null)}var by={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Oy=Object.assign,Vy={};function ri(t,e,n){this.props=t,this.context=e,this.refs=Vy,this.updater=n||by}ri.prototype.isReactComponent={};ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ly(){}Ly.prototype=ri.prototype;function Qc(t,e,n){this.props=t,this.context=e,this.refs=Vy,this.updater=n||by}var Yc=Qc.prototype=new Ly;Yc.constructor=Qc;Oy(Yc,ri.prototype);Yc.isPureReactComponent=!0;var Dy=Array.isArray,My=Object.prototype.hasOwnProperty,Jc={current:null},Fy={key:!0,ref:!0,__self:!0,__source:!0};function Uy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)My.call(e,r)&&!Fy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ws,type:t,key:s,ref:o,props:i,_owner:Jc.current}}function GA(t,e){return{$$typeof:ws,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xc(t){return typeof t=="object"&&t!==null&&t.$$typeof===ws}function WA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xy=/\/+/g;function Hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?WA(""+t.key):e.toString(36)}function Ia(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ws:case OA:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Hc(o,0):r,Dy(i)?(n="",t!=null&&(n=t.replace(xy,"$&/")+"/"),Ia(i,e,n,"",function(l){return l})):i!=null&&(Xc(i)&&(i=GA(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dy(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Hc(s,a);o+=Ia(s,e,n,u,i)}else if(u=$A(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Hc(s,a++),o+=Ia(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wa(t,e,n){if(t==null)return t;var r=[],i=0;return Ia(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $e={current:null},Ea={transition:null},HA={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Ea,ReactCurrentOwner:Jc};B.Children={map:wa,forEach:function(t,e,n){wa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wa(t,function(){e++}),e},toArray:function(t){return wa(t,function(e){return e})||[]},only:function(t){if(!Xc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=ri;B.Fragment=VA;B.Profiler=MA;B.PureComponent=Qc;B.StrictMode=LA;B.Suspense=zA;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HA;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Oy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)My.call(e,u)&&!Fy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:ws,type:t.type,key:i,ref:s,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:UA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FA,_context:t},t.Consumer=t};B.createElement=Uy;B.createFactory=function(t){var e=Uy.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:BA,render:t}};B.isValidElement=Xc;B.lazy=function(t){return{$$typeof:qA,_payload:{_status:-1,_result:t},_init:KA}};B.memo=function(t,e){return{$$typeof:jA,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=Ea.transition;Ea.transition={};try{t()}finally{Ea.transition=e}};B.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};B.useCallback=function(t,e){return $e.current.useCallback(t,e)};B.useContext=function(t){return $e.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return $e.current.useDeferredValue(t)};B.useEffect=function(t,e){return $e.current.useEffect(t,e)};B.useId=function(){return $e.current.useId()};B.useImperativeHandle=function(t,e,n){return $e.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return $e.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return $e.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return $e.current.useMemo(t,e)};B.useReducer=function(t,e,n){return $e.current.useReducer(t,e,n)};B.useRef=function(t){return $e.current.useRef(t)};B.useState=function(t){return $e.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return $e.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return $e.current.useTransition()};B.version="18.2.0"});var ii=ln((QO,zy)=>{"use strict";zy.exports=By()});var Jy=ln(H=>{"use strict";function nh(t,e){var n=t.length;t.push(e);e:for(;0<n;){var r=n-1>>>1,i=t[r];if(0<Ta(i,e))t[r]=e,t[n]=i,n=r;else break e}}function St(t){return t.length===0?null:t[0]}function Aa(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var r=0,i=t.length,s=i>>>1;r<s;){var o=2*(r+1)-1,a=t[o],u=o+1,l=t[u];if(0>Ta(a,n))u<i&&0>Ta(l,a)?(t[r]=l,t[u]=n,r=u):(t[r]=a,t[o]=n,r=o);else if(u<i&&0>Ta(l,n))t[r]=l,t[u]=n,r=u;else break e}}return e}function Ta(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(jy=performance,H.unstable_now=function(){return jy.now()}):(Zc=Date,qy=Zc.now(),H.unstable_now=function(){return Zc.now()-qy});var jy,Zc,qy,Ut=[],kn=[],QA=1,mt=null,Oe=3,Pa=!1,cr=!1,Es=!1,Wy=typeof setTimeout=="function"?setTimeout:null,Ky=typeof clearTimeout=="function"?clearTimeout:null,$y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function rh(t){for(var e=St(kn);e!==null;){if(e.callback===null)Aa(kn);else if(e.startTime<=t)Aa(kn),e.sortIndex=e.expirationTime,nh(Ut,e);else break;e=St(kn)}}function ih(t){if(Es=!1,rh(t),!cr)if(St(Ut)!==null)cr=!0,oh(sh);else{var e=St(kn);e!==null&&ah(ih,e.startTime-t)}}function sh(t,e){cr=!1,Es&&(Es=!1,Ky(Ts),Ts=-1),Pa=!0;var n=Oe;try{for(rh(e),mt=St(Ut);mt!==null&&(!(mt.expirationTime>e)||t&&!Yy());){var r=mt.callback;if(typeof r=="function"){mt.callback=null,Oe=mt.priorityLevel;var i=r(mt.expirationTime<=e);e=H.unstable_now(),typeof i=="function"?mt.callback=i:mt===St(Ut)&&Aa(Ut),rh(e)}else Aa(Ut);mt=St(Ut)}if(mt!==null)var s=!0;else{var o=St(kn);o!==null&&ah(ih,o.startTime-e),s=!1}return s}finally{mt=null,Oe=n,Pa=!1}}var Ra=!1,Sa=null,Ts=-1,Hy=5,Qy=-1;function Yy(){return!(H.unstable_now()-Qy<Hy)}function eh(){if(Sa!==null){var t=H.unstable_now();Qy=t;var e=!0;try{e=Sa(!0,t)}finally{e?Is():(Ra=!1,Sa=null)}}else Ra=!1}var Is;typeof $y=="function"?Is=function(){$y(eh)}:typeof MessageChannel<"u"?(th=new MessageChannel,Gy=th.port2,th.port1.onmessage=eh,Is=function(){Gy.postMessage(null)}):Is=function(){Wy(eh,0)};var th,Gy;function oh(t){Sa=t,Ra||(Ra=!0,Is())}function ah(t,e){Ts=Wy(function(){t(H.unstable_now())},e)}H.unstable_IdlePriority=5;H.unstable_ImmediatePriority=1;H.unstable_LowPriority=4;H.unstable_NormalPriority=3;H.unstable_Profiling=null;H.unstable_UserBlockingPriority=2;H.unstable_cancelCallback=function(t){t.callback=null};H.unstable_continueExecution=function(){cr||Pa||(cr=!0,oh(sh))};H.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Hy=0<t?Math.floor(1e3/t):5};H.unstable_getCurrentPriorityLevel=function(){return Oe};H.unstable_getFirstCallbackNode=function(){return St(Ut)};H.unstable_next=function(t){switch(Oe){case 1:case 2:case 3:var e=3;break;default:e=Oe}var n=Oe;Oe=e;try{return t()}finally{Oe=n}};H.unstable_pauseExecution=function(){};H.unstable_requestPaint=function(){};H.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=Oe;Oe=t;try{return e()}finally{Oe=n}};H.unstable_scheduleCallback=function(t,e,n){var r=H.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,t={id:QA++,callback:e,priorityLevel:t,startTime:n,expirationTime:i,sortIndex:-1},n>r?(t.sortIndex=n,nh(kn,t),St(Ut)===null&&t===St(kn)&&(Es?(Ky(Ts),Ts=-1):Es=!0,ah(ih,n-r))):(t.sortIndex=i,nh(Ut,t),cr||Pa||(cr=!0,oh(sh))),t};H.unstable_shouldYield=Yy;H.unstable_wrapCallback=function(t){var e=Oe;return function(){var n=Oe;Oe=e;try{return t.apply(this,arguments)}finally{Oe=n}}}});var Zy=ln((JO,Xy)=>{"use strict";Xy.exports=Jy()});var s0=ln(lt=>{"use strict";var o_=ii(),at=Zy();function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a_=new Set,Gs={};function Tr(t,e){Ai(t,e),Ai(t+"Capture",e)}function Ai(t,e){for(Gs[t]=e,t=0;t<e.length;t++)a_.add(e[t])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nh=Object.prototype.hasOwnProperty,YA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ev={},tv={};function JA(t){return Nh.call(tv,t)?!0:Nh.call(ev,t)?!1:YA.test(t)?tv[t]=!0:(ev[t]=!0,!1)}function XA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZA(t,e,n,r){if(e===null||typeof e>"u"||XA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ke[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ed=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ed,Td);ke[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ed,Td);ke[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ed,Td);ke[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});ke.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ke[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sd(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ZA(e,n,i,r)&&(n=null),r||i===null?JA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var _n=o_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),ai=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),Ad=Symbol.for("react.strict_mode"),Dh=Symbol.for("react.profiler"),u_=Symbol.for("react.provider"),l_=Symbol.for("react.context"),Pd=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),bh=Symbol.for("react.suspense_list"),Rd=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var c_=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var nv=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=nv&&t[nv]||t["@@iterator"],typeof t=="function"?t:null)}var ie=Object.assign,uh;function xs(t){if(uh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);uh=e&&e[1]||""}return`
`+uh+t}var lh=!1;function ch(t,e){if(!t||lh)return"";lh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(l){var r=l}Reflect.construct(t,[],e)}else{try{e.call()}catch(l){r=l}t.call(e.prototype)}else{try{throw Error()}catch(l){r=l}t()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{lh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xs(t):""}function e1(t){switch(t.tag){case 5:return xs(t.type);case 16:return xs("Lazy");case 13:return xs("Suspense");case 19:return xs("SuspenseList");case 0:case 2:case 15:return t=ch(t.type,!1),t;case 11:return t=ch(t.type.render,!1),t;case 1:return t=ch(t.type,!0),t;default:return""}}function Oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ui:return"Fragment";case ai:return"Portal";case Dh:return"Profiler";case Ad:return"StrictMode";case xh:return"Suspense";case bh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case l_:return(t.displayName||"Context")+".Consumer";case u_:return(t._context.displayName||"Context")+".Provider";case Pd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rd:return e=t.displayName||null,e!==null?e:Oh(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Oh(t(e))}catch{}}return null}function t1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oh(e);case 8:return e===Ad?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function h_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n1(t){var e=h_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=n1(t))}function d_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=h_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vh(t,e){var n=e.checked;return ie({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function rv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function f_(t,e){e=e.checked,e!=null&&Sd(t,"checked",e,!1)}function Lh(t,e){f_(t,e);var n=Gn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mh(t,e.type,Gn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function iv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mh(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var bs=Array.isArray;function _i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return ie({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(bs(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gn(n)}}function p_(t,e){var n=Gn(e.value),r=Gn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ov(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,g_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ls={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r1=["Webkit","ms","Moz","O"];Object.keys(Ls).forEach(function(t){r1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ls[e]=Ls[t]})});function y_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ls.hasOwnProperty(t)&&Ls[t]?(""+e).trim():e+"px"}function v_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=y_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var i1=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bh(t,e){if(e){if(i1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function zh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qh=null,wi=null,Ii=null;function av(t){if(t=co(t)){if(typeof qh!="function")throw Error(E(280));var e=t.stateNode;e&&(e=Du(e),qh(t.stateNode,t.type,e))}}function __(t){wi?Ii?Ii.push(t):Ii=[t]:wi=t}function w_(){if(wi){var t=wi,e=Ii;if(Ii=wi=null,av(t),e)for(t=0;t<e.length;t++)av(e[t])}}function I_(t,e){return t(e)}function E_(){}var hh=!1;function T_(t,e,n){if(hh)return t(e,n);hh=!0;try{return I_(t,e,n)}finally{hh=!1,(wi!==null||Ii!==null)&&(E_(),w_())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var r=Du(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var $h=!1;if(mn)try{si={},Object.defineProperty(si,"passive",{get:function(){$h=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{$h=!1}var si;function s1(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var Ms=!1,iu=null,su=!1,Gh=null,o1={onError:function(t){Ms=!0,iu=t}};function a1(t,e,n,r,i,s,o,a,u){Ms=!1,iu=null,s1.apply(o1,arguments)}function u1(t,e,n,r,i,s,o,a,u){if(a1.apply(this,arguments),Ms){if(Ms){var l=iu;Ms=!1,iu=null}else throw Error(E(198));su||(su=!0,Gh=l)}}function Sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function S_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function uv(t){if(Sr(t)!==t)throw Error(E(188))}function l1(t){var e=t.alternate;if(!e){if(e=Sr(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return uv(i),t;if(s===r)return uv(i),e;s=s.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function A_(t){return t=l1(t),t!==null?P_(t):null}function P_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=P_(t);if(e!==null)return e;t=t.sibling}return null}var R_=at.unstable_scheduleCallback,lv=at.unstable_cancelCallback,c1=at.unstable_shouldYield,h1=at.unstable_requestPaint,de=at.unstable_now,d1=at.unstable_getCurrentPriorityLevel,kd=at.unstable_ImmediatePriority,C_=at.unstable_UserBlockingPriority,ou=at.unstable_NormalPriority,f1=at.unstable_LowPriority,k_=at.unstable_IdlePriority,Ru=null,qt=null;function p1(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Ru,t,void 0,(t.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:y1,m1=Math.log,g1=Math.LN2;function y1(t){return t>>>=0,t===0?32:31-(m1(t)/g1|0)|0}var Da=64,xa=4194304;function Os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Os(a):(s&=o,s!==0&&(r=Os(s)))}else o=n&~i,o!==0?r=Os(o):s!==0&&(r=Os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-kt(e),i=1<<n,r|=t[n],e&=~i;return r}function v1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function _1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-kt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=v1(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Wh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function N_(){var t=Da;return Da<<=1,!(Da&4194240)&&(Da=64),t}function dh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-kt(e),t[e]=n}function w1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-kt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-kt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function D_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var x_,Dd,b_,O_,V_,Kh=!1,ba=[],Mn=null,Fn=null,Un=null,Hs=new Map,Qs=new Map,bn=[],I1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cv(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=co(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function E1(t,e,n,r,i){switch(e){case"focusin":return Mn=As(Mn,t,e,n,r,i),!0;case"dragenter":return Fn=As(Fn,t,e,n,r,i),!0;case"mouseover":return Un=As(Un,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hs.set(s,As(Hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qs.set(s,As(Qs.get(s)||null,t,e,n,r,i)),!0}return!1}function L_(t){var e=fr(t.target);if(e!==null){var n=Sr(e);if(n!==null){if(e=n.tag,e===13){if(e=S_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){b_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jh=r,n.target.dispatchEvent(r),jh=null}else return e=co(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function hv(t,e,n){Ka(t)&&n.delete(e)}function T1(){Kh=!1,Mn!==null&&Ka(Mn)&&(Mn=null),Fn!==null&&Ka(Fn)&&(Fn=null),Un!==null&&Ka(Un)&&(Un=null),Hs.forEach(hv),Qs.forEach(hv)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,Kh||(Kh=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,T1)))}function Ys(t){function e(i){return Ps(i,t)}if(0<ba.length){Ps(ba[0],t);for(var n=1;n<ba.length;n++){var r=ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mn!==null&&Ps(Mn,t),Fn!==null&&Ps(Fn,t),Un!==null&&Ps(Un,t),Hs.forEach(e),Qs.forEach(e),n=0;n<bn.length;n++)r=bn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bn.length&&(n=bn[0],n.blockedOn===null);)L_(n),n.blockedOn===null&&bn.shift()}var Ei=_n.ReactCurrentBatchConfig,uu=!0;function S1(t,e,n,r){var i=W,s=Ei.transition;Ei.transition=null;try{W=1,xd(t,e,n,r)}finally{W=i,Ei.transition=s}}function A1(t,e,n,r){var i=W,s=Ei.transition;Ei.transition=null;try{W=4,xd(t,e,n,r)}finally{W=i,Ei.transition=s}}function xd(t,e,n,r){if(uu){var i=Hh(t,e,n,r);if(i===null)_h(t,e,r,lu,n),cv(t,r);else if(E1(i,t,e,n,r))r.stopPropagation();else if(cv(t,r),e&4&&-1<I1.indexOf(t)){for(;i!==null;){var s=co(i);if(s!==null&&x_(s),s=Hh(t,e,n,r),s===null&&_h(t,e,r,lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _h(t,e,r,null,n)}}var lu=null;function Hh(t,e,n,r){if(lu=null,t=Cd(r),t=fr(t),t!==null)if(e=Sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=S_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return lu=t,null}function M_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(d1()){case kd:return 1;case C_:return 4;case ou:case f1:return 16;case k_:return 536870912;default:return 16}default:return 16}}var Vn=null,bd=null,Ha=null;function F_(){if(Ha)return Ha;var t,e=bd,n=e.length,r,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ha=i.slice(t,1<r?1-r:void 0)}function Qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function dv(){return!1}function ut(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:dv,this.isPropagationStopped=dv,this}return ie(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=ut(xi),lo=ie({},xi,{view:0,detail:0}),P1=ut(lo),fh,ph,Rs,Cu=ie({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(fh=t.screenX-Rs.screenX,ph=t.screenY-Rs.screenY):ph=fh=0,Rs=t),fh)},movementY:function(t){return"movementY"in t?t.movementY:ph}}),fv=ut(Cu),R1=ie({},Cu,{dataTransfer:0}),C1=ut(R1),k1=ie({},lo,{relatedTarget:0}),mh=ut(k1),N1=ie({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),D1=ut(N1),x1=ie({},xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b1=ut(x1),O1=ie({},xi,{data:0}),pv=ut(O1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},L1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function F1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=M1[t])?!!e[t]:!1}function Vd(){return F1}var U1=ie({},lo,{key:function(t){if(t.key){var e=V1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?L1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vd,charCode:function(t){return t.type==="keypress"?Qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B1=ut(U1),z1=ie({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mv=ut(z1),j1=ie({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vd}),q1=ut(j1),$1=ie({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),G1=ut($1),W1=ie({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K1=ut(W1),H1=[9,13,27,32],Ld=mn&&"CompositionEvent"in window,Fs=null;mn&&"documentMode"in document&&(Fs=document.documentMode);var Q1=mn&&"TextEvent"in window&&!Fs,U_=mn&&(!Ld||Fs&&8<Fs&&11>=Fs),gv=" ",yv=!1;function B_(t,e){switch(t){case"keyup":return H1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var li=!1;function Y1(t,e){switch(t){case"compositionend":return z_(e);case"keypress":return e.which!==32?null:(yv=!0,gv);case"textInput":return t=e.data,t===gv&&yv?null:t;default:return null}}function J1(t,e){if(li)return t==="compositionend"||!Ld&&B_(t,e)?(t=F_(),Ha=bd=Vn=null,li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return U_&&e.locale!=="ko"?null:e.data;default:return null}}var X1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X1[t.type]:e==="textarea"}function j_(t,e,n,r){__(r),e=cu(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Us=null,Js=null;function Z1(t){Z_(t,0)}function ku(t){var e=di(t);if(d_(e))return t}function eP(t,e){if(t==="change")return e}var q_=!1;mn&&(mn?(La="oninput"in document,La||(gh=document.createElement("div"),gh.setAttribute("oninput","return;"),La=typeof gh.oninput=="function"),Va=La):Va=!1,q_=Va&&(!document.documentMode||9<document.documentMode));var Va,La,gh;function _v(){Us&&(Us.detachEvent("onpropertychange",$_),Js=Us=null)}function $_(t){if(t.propertyName==="value"&&ku(Js)){var e=[];j_(e,Js,t,Cd(t)),T_(Z1,e)}}function tP(t,e,n){t==="focusin"?(_v(),Us=e,Js=n,Us.attachEvent("onpropertychange",$_)):t==="focusout"&&_v()}function nP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(Js)}function rP(t,e){if(t==="click")return ku(e)}function iP(t,e){if(t==="input"||t==="change")return ku(e)}function sP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Dt=typeof Object.is=="function"?Object.is:sP;function Xs(t,e){if(Dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Nh.call(e,i)||!Dt(t[i],e[i]))return!1}return!0}function wv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Iv(t,e){var n=wv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wv(n)}}function G_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function W_(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function oP(t){var e=W_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G_(n.ownerDocument.documentElement,n)){if(r!==null&&Md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Iv(n,s);var o=Iv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var aP=mn&&"documentMode"in document&&11>=document.documentMode,ci=null,Qh=null,Bs=null,Yh=!1;function Ev(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yh||ci==null||ci!==ru(r)||(r=ci,"selectionStart"in r&&Md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&Xs(Bs,r)||(Bs=r,r=cu(Qh,"onSelect"),0<r.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ci)))}function Ma(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var hi={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionend:Ma("Transition","TransitionEnd")},yh={},K_={};mn&&(K_=document.createElement("div").style,"AnimationEvent"in window||(delete hi.animationend.animation,delete hi.animationiteration.animation,delete hi.animationstart.animation),"TransitionEvent"in window||delete hi.transitionend.transition);function Nu(t){if(yh[t])return yh[t];if(!hi[t])return t;var e=hi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in K_)return yh[t]=e[n];return t}var H_=Nu("animationend"),Q_=Nu("animationiteration"),Y_=Nu("animationstart"),J_=Nu("transitionend"),X_=new Map,Tv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){X_.set(t,e),Tr(e,[t])}for(Fa=0;Fa<Tv.length;Fa++)Ua=Tv[Fa],Sv=Ua.toLowerCase(),Av=Ua[0].toUpperCase()+Ua.slice(1),Kn(Sv,"on"+Av);var Ua,Sv,Av,Fa;Kn(H_,"onAnimationEnd");Kn(Q_,"onAnimationIteration");Kn(Y_,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(J_,"onTransitionEnd");Ai("onMouseEnter",["mouseout","mouseover"]);Ai("onMouseLeave",["mouseout","mouseover"]);Ai("onPointerEnter",["pointerout","pointerover"]);Ai("onPointerLeave",["pointerout","pointerover"]);Tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uP=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vs));function Pv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,u1(r,e,void 0,t),t.currentTarget=null}function Z_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;Pv(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;Pv(i,a,l),s=u}}}if(su)throw t=Gh,su=!1,Gh=null,t}function J(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var r=t+"__bubble";n.has(r)||(ew(e,t,2,!1),n.add(r))}function vh(t,e,n){var r=0;e&&(r|=4),ew(n,t,r,e)}var Ba="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[Ba]){t[Ba]=!0,a_.forEach(function(n){n!=="selectionchange"&&(uP.has(n)||vh(n,!1,t),vh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ba]||(e[Ba]=!0,vh("selectionchange",!1,e))}}function ew(t,e,n,r){switch(M_(e)){case 1:var i=S1;break;case 4:i=A1;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!$h||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _h(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}T_(function(){var l=s,c=Cd(n),h=[];e:{var d=X_.get(t);if(d!==void 0){var m=Od,y=t;switch(t){case"keypress":if(Qa(n)===0)break e;case"keydown":case"keyup":m=B1;break;case"focusin":y="focus",m=mh;break;case"focusout":y="blur",m=mh;break;case"beforeblur":case"afterblur":m=mh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=C1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=q1;break;case H_:case Q_:case Y_:m=D1;break;case J_:m=G1;break;case"scroll":m=P1;break;case"wheel":m=K1;break;case"copy":case"cut":case"paste":m=b1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mv}var _=(e&4)!==0,T=!_&&t==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var f=l,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,p!==null&&(w=Ks(f,p),w!=null&&_.push(eo(f,w,g)))),T)break;f=f.return}0<_.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==jh&&(y=n.relatedTarget||n.fromElement)&&(fr(y)||y[gn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=l,y=y?fr(y):null,y!==null&&(T=Sr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=l),m!==y)){if(_=fv,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=mv,w="onPointerLeave",p="onPointerEnter",f="pointer"),T=m==null?d:di(m),g=y==null?d:di(y),d=new _(w,f+"leave",m,n,c),d.target=T,d.relatedTarget=g,w=null,fr(c)===l&&(_=new _(p,f+"enter",y,n,c),_.target=g,_.relatedTarget=T,w=_),T=w,m&&y)t:{for(_=m,p=y,f=0,g=_;g;g=oi(g))f++;for(g=0,w=p;w;w=oi(w))g++;for(;0<f-g;)_=oi(_),f--;for(;0<g-f;)p=oi(p),g--;for(;f--;){if(_===p||p!==null&&_===p.alternate)break t;_=oi(_),p=oi(p)}_=null}else _=null;m!==null&&Rv(h,d,m,_,!1),y!==null&&T!==null&&Rv(h,T,y,_,!0)}}e:{if(d=l?di(l):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var P=eP;else if(vv(d))if(q_)P=iP;else{P=nP;var R=tP}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=rP);if(P&&(P=P(t,l))){j_(h,P,n,c);break e}R&&R(t,d,l),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Mh(d,"number",d.value)}switch(R=l?di(l):window,t){case"focusin":(vv(R)||R.contentEditable==="true")&&(ci=R,Qh=l,Bs=null);break;case"focusout":Bs=Qh=ci=null;break;case"mousedown":Yh=!0;break;case"contextmenu":case"mouseup":case"dragend":Yh=!1,Ev(h,n,c);break;case"selectionchange":if(aP)break;case"keydown":case"keyup":Ev(h,n,c)}var N;if(Ld)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else li?B_(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(U_&&n.locale!=="ko"&&(li||x!=="onCompositionStart"?x==="onCompositionEnd"&&li&&(N=F_()):(Vn=c,bd="value"in Vn?Vn.value:Vn.textContent,li=!0)),R=cu(l,x),0<R.length&&(x=new pv(x,t,null,n,c),h.push({event:x,listeners:R}),N?x.data=N:(N=z_(n),N!==null&&(x.data=N)))),(N=Q1?Y1(t,n):J1(t,n))&&(l=cu(l,"onBeforeInput"),0<l.length&&(c=new pv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=N))}Z_(h,e)})}function eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ks(t,n),s!=null&&r.unshift(eo(t,s,i)),s=Ks(t,e),s!=null&&r.push(eo(t,s,i))),t=t.return}return r}function oi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Rv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Ks(n,s),u!=null&&o.unshift(eo(n,u,a))):i||(u=Ks(n,s),u!=null&&o.push(eo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lP=/\r\n?/g,cP=/\u0000|\uFFFD/g;function Cv(t){return(typeof t=="string"?t:""+t).replace(lP,`
`).replace(cP,"")}function za(t,e,n){if(e=Cv(e),Cv(t)!==e&&n)throw Error(E(425))}function hu(){}var Jh=null,Xh=null;function Zh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,hP=typeof clearTimeout=="function"?clearTimeout:void 0,kv=typeof Promise=="function"?Promise:void 0,dP=typeof queueMicrotask=="function"?queueMicrotask:typeof kv<"u"?function(t){return kv.resolve(null).then(t).catch(fP)}:ed;function fP(t){setTimeout(function(){throw t})}function wh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ys(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bi=Math.random().toString(36).slice(2),jt="__reactFiber$"+bi,to="__reactProps$"+bi,gn="__reactContainer$"+bi,td="__reactEvents$"+bi,pP="__reactListeners$"+bi,mP="__reactHandles$"+bi;function fr(t){var e=t[jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gn]||n[jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nv(t);t!==null;){if(n=t[jt])return n;t=Nv(t)}return e}t=n,n=t.parentNode}return null}function co(t){return t=t[jt]||t[gn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function di(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function Du(t){return t[to]||null}var nd=[],fi=-1;function Hn(t){return{current:t}}function X(t){0>fi||(t.current=nd[fi],nd[fi]=null,fi--)}function Q(t,e){fi++,nd[fi]=t.current,t.current=e}var Wn={},Fe=Hn(Wn),Ze=Hn(!1),vr=Wn;function Pi(t,e){var n=t.type.contextTypes;if(!n)return Wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function et(t){return t=t.childContextTypes,t!=null}function du(){X(Ze),X(Fe)}function Dv(t,e,n){if(Fe.current!==Wn)throw Error(E(168));Q(Fe,e),Q(Ze,n)}function tw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,t1(t)||"Unknown",i));return ie({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wn,vr=Fe.current,Q(Fe,t),Q(Ze,Ze.current),!0}function xv(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=tw(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,X(Ze),X(Fe),Q(Fe,t)):X(Ze),Q(Ze,n)}var hn=null,xu=!1,Ih=!1;function nw(t){hn===null?hn=[t]:hn.push(t)}function gP(t){xu=!0,nw(t)}function Qn(){if(!Ih&&hn!==null){Ih=!0;var t=0,e=W;try{var n=hn;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}hn=null,xu=!1}catch(i){throw hn!==null&&(hn=hn.slice(t+1)),R_(kd,Qn),i}finally{W=e,Ih=!1}}return null}var pi=[],mi=0,pu=null,mu=0,gt=[],yt=0,_r=null,dn=1,fn="";function hr(t,e){pi[mi++]=mu,pi[mi++]=pu,pu=t,mu=e}function rw(t,e,n){gt[yt++]=dn,gt[yt++]=fn,gt[yt++]=_r,_r=t;var r=dn;t=fn;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var s=32-kt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dn=1<<32-kt(e)+i|n<<i|r,fn=s+t}else dn=1<<s|n<<i|r,fn=t}function Fd(t){t.return!==null&&(hr(t,1),rw(t,1,0))}function Ud(t){for(;t===pu;)pu=pi[--mi],pi[mi]=null,mu=pi[--mi],pi[mi]=null;for(;t===_r;)_r=gt[--yt],gt[yt]=null,fn=gt[--yt],gt[yt]=null,dn=gt[--yt],gt[yt]=null}var ot=null,st=null,te=!1,Ct=null;function iw(t,e){var n=vt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,ot=t,st=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,ot=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_r!==null?{id:dn,overflow:fn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=vt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,ot=t,st=null,!0):!1;default:return!1}}function rd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function id(t){if(te){var e=st;if(e){var n=e;if(!bv(t,e)){if(rd(t))throw Error(E(418));e=Bn(n.nextSibling);var r=ot;e&&bv(t,e)?iw(r,n):(t.flags=t.flags&-4097|2,te=!1,ot=t)}}else{if(rd(t))throw Error(E(418));t.flags=t.flags&-4097|2,te=!1,ot=t}}}function Ov(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;ot=t}function ja(t){if(t!==ot)return!1;if(!te)return Ov(t),te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zh(t.type,t.memoizedProps)),e&&(e=st)){if(rd(t))throw sw(),Error(E(418));for(;e;)iw(t,e),e=Bn(e.nextSibling)}if(Ov(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=ot?Bn(t.stateNode.nextSibling):null;return!0}function sw(){for(var t=st;t;)t=Bn(t.nextSibling)}function Ri(){st=ot=null,te=!1}function Bd(t){Ct===null?Ct=[t]:Ct.push(t)}var yP=_n.ReactCurrentBatchConfig;function Pt(t,e){if(t&&t.defaultProps){e=ie({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gu=Hn(null),yu=null,gi=null,zd=null;function jd(){zd=gi=yu=null}function qd(t){var e=gu.current;X(gu),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ti(t,e){yu=t,zd=gi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xe=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(zd!==t)if(t={context:t,memoizedValue:e,next:null},gi===null){if(yu===null)throw Error(E(308));gi=t,yu.dependencies={lanes:0,firstContext:t}}else gi=gi.next=t;return e}var pr=null;function $d(t){pr===null?pr=[t]:pr.push(t)}function ow(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,$d(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function aw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,$d(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function Vv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=l:a.next=l,c.lastBaseUpdate=u))}if(s!==null){var h=i.baseState;o=0,c=l=u=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ie({},h,d);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(l=c=m,u=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=h}}function Lv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var uw=new o_.Component().refs;function od(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ie({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var bu={isMounted:function(t){return(t=t._reactInternals)?Sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=We(),i=qn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Nt(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=We(),i=qn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Nt(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=We(),r=qn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Nt(e,t,r,n),Ya(e,t,r))}};function Mv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,r)||!Xs(i,s):!0}function lw(t,e,n){var r=!1,i=Wn,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=et(e)?vr:Fe.current,r=e.contextTypes,s=(r=r!=null)?Pi(t,i):Wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=bu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&bu.enqueueReplaceState(e,e.state,null)}function ad(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=uw,Gd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=et(e)?vr:Fe.current,i.context=Pi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(od(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&bu.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===uw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function qa(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uv(t){var e=t._init;return e(t._payload)}function cw(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=$n(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,w){return f===null||f.tag!==6?(f=Ch(g,p.mode,w),f.return=p,f):(f=i(f,g),f.return=p,f)}function u(p,f,g,w){var P=g.type;return P===ui?c(p,f,g.props.children,w,g.key):f!==null&&(f.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Dn&&Uv(P)===f.type)?(w=i(f,g.props),w.ref=Cs(p,f,g),w.return=p,w):(w=nu(g.type,g.key,g.props,null,p.mode,w),w.ref=Cs(p,f,g),w.return=p,w)}function l(p,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=kh(g,p.mode,w),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,w,P){return f===null||f.tag!==7?(f=yr(g,p.mode,w,P),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ch(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ca:return g=nu(f.type,f.key,f.props,null,p.mode,g),g.ref=Cs(p,null,f),g.return=p,g;case ai:return f=kh(f,p.mode,g),f.return=p,f;case Dn:var w=f._init;return h(p,w(f._payload),g)}if(bs(f)||Ss(f))return f=yr(f,p.mode,g,null),f.return=p,f;qa(p,f)}return null}function d(p,f,g,w){var P=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(p,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:return g.key===P?u(p,f,g,w):null;case ai:return g.key===P?l(p,f,g,w):null;case Dn:return P=g._init,d(p,f,P(g._payload),w)}if(bs(g)||Ss(g))return P!==null?null:c(p,f,g,w,null);qa(p,g)}return null}function m(p,f,g,w,P){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(g)||null,a(f,p,""+w,P);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ca:return p=p.get(w.key===null?g:w.key)||null,u(f,p,w,P);case ai:return p=p.get(w.key===null?g:w.key)||null,l(f,p,w,P);case Dn:var R=w._init;return m(p,f,g,R(w._payload),P)}if(bs(w)||Ss(w))return p=p.get(g)||null,c(f,p,w,P,null);qa(f,w)}return null}function y(p,f,g,w){for(var P=null,R=null,N=f,x=f=0,ee=null;N!==null&&x<g.length;x++){N.index>x?(ee=N,N=null):ee=N.sibling;var F=d(p,N,g[x],w);if(F===null){N===null&&(N=ee);break}t&&N&&F.alternate===null&&e(p,N),f=s(F,f,x),R===null?P=F:R.sibling=F,R=F,N=ee}if(x===g.length)return n(p,N),te&&hr(p,x),P;if(N===null){for(;x<g.length;x++)N=h(p,g[x],w),N!==null&&(f=s(N,f,x),R===null?P=N:R.sibling=N,R=N);return te&&hr(p,x),P}for(N=r(p,N);x<g.length;x++)ee=m(N,p,x,g[x],w),ee!==null&&(t&&ee.alternate!==null&&N.delete(ee.key===null?x:ee.key),f=s(ee,f,x),R===null?P=ee:R.sibling=ee,R=ee);return t&&N.forEach(function(Cn){return e(p,Cn)}),te&&hr(p,x),P}function _(p,f,g,w){var P=Ss(g);if(typeof P!="function")throw Error(E(150));if(g=P.call(g),g==null)throw Error(E(151));for(var R=P=null,N=f,x=f=0,ee=null,F=g.next();N!==null&&!F.done;x++,F=g.next()){N.index>x?(ee=N,N=null):ee=N.sibling;var Cn=d(p,N,F.value,w);if(Cn===null){N===null&&(N=ee);break}t&&N&&Cn.alternate===null&&e(p,N),f=s(Cn,f,x),R===null?P=Cn:R.sibling=Cn,R=Cn,N=ee}if(F.done)return n(p,N),te&&hr(p,x),P;if(N===null){for(;!F.done;x++,F=g.next())F=h(p,F.value,w),F!==null&&(f=s(F,f,x),R===null?P=F:R.sibling=F,R=F);return te&&hr(p,x),P}for(N=r(p,N);!F.done;x++,F=g.next())F=m(N,p,x,F.value,w),F!==null&&(t&&F.alternate!==null&&N.delete(F.key===null?x:F.key),f=s(F,f,x),R===null?P=F:R.sibling=F,R=F);return t&&N.forEach(function(RA){return e(p,RA)}),te&&hr(p,x),P}function T(p,f,g,w){if(typeof g=="object"&&g!==null&&g.type===ui&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:e:{for(var P=g.key,R=f;R!==null;){if(R.key===P){if(P=g.type,P===ui){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Dn&&Uv(P)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=Cs(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===ui?(f=yr(g.props.children,p.mode,w,g.key),f.return=p,p=f):(w=nu(g.type,g.key,g.props,null,p.mode,w),w.ref=Cs(p,f,g),w.return=p,p=w)}return o(p);case ai:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=kh(g,p.mode,w),f.return=p,p=f}return o(p);case Dn:return R=g._init,T(p,f,R(g._payload),w)}if(bs(g))return y(p,f,g,w);if(Ss(g))return _(p,f,g,w);qa(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ch(g,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return T}var Ci=cw(!0),hw=cw(!1),ho={},$t=Hn(ho),no=Hn(ho),ro=Hn(ho);function mr(t){if(t===ho)throw Error(E(174));return t}function Wd(t,e){switch(Q(ro,e),Q(no,t),Q($t,ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uh(e,t)}X($t),Q($t,e)}function ki(){X($t),X(no),X(ro)}function dw(t){mr(ro.current);var e=mr($t.current),n=Uh(e,t.type);e!==n&&(Q(no,t),Q($t,n))}function Kd(t){no.current===t&&(X($t),X(no))}var ne=Hn(0);function _u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eh=[];function Hd(){for(var t=0;t<Eh.length;t++)Eh[t]._workInProgressVersionPrimary=null;Eh.length=0}var Ja=_n.ReactCurrentDispatcher,Th=_n.ReactCurrentBatchConfig,wr=0,re=null,ye=null,we=null,wu=!1,zs=!1,io=0,vP=0;function Ve(){throw Error(E(321))}function Qd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Dt(t[n],e[n]))return!1;return!0}function Yd(t,e,n,r,i,s){if(wr=s,re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?EP:TP,t=n(r,i),zs){s=0;do{if(zs=!1,io=0,25<=s)throw Error(E(301));s+=1,we=ye=null,e.updateQueue=null,Ja.current=SP,t=n(r,i)}while(zs)}if(Ja.current=Iu,e=ye!==null&&ye.next!==null,wr=0,we=ye=re=null,wu=!1,e)throw Error(E(300));return t}function Jd(){var t=io!==0;return io=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?re.memoizedState=we=t:we=we.next=t,we}function It(){if(ye===null){var t=re.alternate;t=t!==null?t.memoizedState:null}else t=ye.next;var e=we===null?re.memoizedState:we.next;if(e!==null)we=e,ye=t;else{if(t===null)throw Error(E(310));ye=t,t={memoizedState:ye.memoizedState,baseState:ye.baseState,baseQueue:ye.baseQueue,queue:ye.queue,next:null},we===null?re.memoizedState=we=t:we=we.next=t}return we}function so(t,e){return typeof e=="function"?e(t):e}function Sh(t){var e=It(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,l=s;do{var c=l.lane;if((wr&c)===c)u!==null&&(u=u.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),r=l.hasEagerState?l.eagerState:t(r,l.action);else{var h={lane:c,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null};u===null?(a=u=h,o=r):u=u.next=h,re.lanes|=c,Ir|=c}l=l.next}while(l!==null&&l!==s);u===null?o=r:u.next=a,Dt(r,e.memoizedState)||(Xe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,re.lanes|=s,Ir|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ah(t){var e=It(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Dt(s,e.memoizedState)||(Xe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function fw(){}function pw(t,e){var n=re,r=It(),i=e(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Xe=!0),r=r.queue,Xd(yw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,oo(9,gw.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(E(349));wr&30||mw(n,e,i)}return i}function mw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gw(t,e,n,r){e.value=n,e.getSnapshot=r,vw(e)&&_w(t)}function yw(t,e,n){return n(function(){vw(e)&&_w(t)})}function vw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Dt(t,n)}catch{return!0}}function _w(t){var e=yn(t,1);e!==null&&Nt(e,t,1,-1)}function Bv(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=IP.bind(null,re,t),[e.memoizedState,t]}function oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=re.updateQueue,e===null?(e={lastEffect:null,stores:null},re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ww(){return It().memoizedState}function Xa(t,e,n,r){var i=zt();re.flags|=t,i.memoizedState=oo(1|e,n,void 0,r===void 0?null:r)}function Ou(t,e,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(ye!==null){var o=ye.memoizedState;if(s=o.destroy,r!==null&&Qd(r,o.deps)){i.memoizedState=oo(e,n,s,r);return}}re.flags|=t,i.memoizedState=oo(1|e,n,s,r)}function zv(t,e){return Xa(8390656,8,t,e)}function Xd(t,e){return Ou(2048,8,t,e)}function Iw(t,e){return Ou(4,2,t,e)}function Ew(t,e){return Ou(4,4,t,e)}function Tw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Sw(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4,4,Tw.bind(null,e,t),n)}function Zd(){}function Aw(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Pw(t,e){var n=It();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Qd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Rw(t,e,n){return wr&21?(Dt(n,e)||(n=N_(),re.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xe=!0),t.memoizedState=n)}function _P(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Th.transition;Th.transition={};try{t(!1),e()}finally{W=n,Th.transition=r}}function Cw(){return It().memoizedState}function wP(t,e,n){var r=qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kw(t))Nw(e,n);else if(n=ow(t,e,n,r),n!==null){var i=We();Nt(n,t,r,i),Dw(n,e,r)}}function IP(t,e,n){var r=qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kw(t))Nw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Dt(a,o)){var u=e.interleaved;u===null?(i.next=i,$d(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=ow(t,e,i,r),n!==null&&(i=We(),Nt(n,t,r,i),Dw(n,e,r))}}function kw(t){var e=t.alternate;return t===re||e!==null&&e===re}function Nw(t,e){zs=wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var Iu={readContext:wt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},EP={readContext:wt,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:zv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,Tw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wP.bind(null,re,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Bv,useDebugValue:Zd,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Bv(!1),e=t[0];return t=_P.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=re,i=zt();if(te){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),Ie===null)throw Error(E(349));wr&30||mw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,zv(yw.bind(null,r,s,t),[t]),r.flags|=2048,oo(9,gw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Ie.identifierPrefix;if(te){var n=fn,r=dn;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},TP={readContext:wt,useCallback:Aw,useContext:wt,useEffect:Xd,useImperativeHandle:Sw,useInsertionEffect:Iw,useLayoutEffect:Ew,useMemo:Pw,useReducer:Sh,useRef:ww,useState:function(){return Sh(so)},useDebugValue:Zd,useDeferredValue:function(t){var e=It();return Rw(e,ye.memoizedState,t)},useTransition:function(){var t=Sh(so)[0],e=It().memoizedState;return[t,e]},useMutableSource:fw,useSyncExternalStore:pw,useId:Cw,unstable_isNewReconciler:!1},SP={readContext:wt,useCallback:Aw,useContext:wt,useEffect:Xd,useImperativeHandle:Sw,useInsertionEffect:Iw,useLayoutEffect:Ew,useMemo:Pw,useReducer:Ah,useRef:ww,useState:function(){return Ah(so)},useDebugValue:Zd,useDeferredValue:function(t){var e=It();return ye===null?e.memoizedState=t:Rw(e,ye.memoizedState,t)},useTransition:function(){var t=Ah(so)[0],e=It().memoizedState;return[t,e]},useMutableSource:fw,useSyncExternalStore:pw,useId:Cw,unstable_isNewReconciler:!1};function Ni(t,e){try{var n="",r=e;do n+=e1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ph(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var AP=typeof WeakMap=="function"?WeakMap:Map;function xw(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,vd=r),ud(t,e)},n}function bw(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new AP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=UP.bind(null,t,e,n),e.then(t,t))}function qv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var PP=_n.ReactCurrentOwner,Xe=!1;function Ge(t,e,n,r){e.child=t===null?hw(e,null,n,r):Ci(e,t.child,n,r)}function Gv(t,e,n,r,i){n=n.render;var s=e.ref;return Ti(e,i),r=Yd(t,e,n,r,s,i),n=Jd(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(te&&n&&Fd(e),e.flags|=1,Ge(t,e,r,i),e.child)}function Wv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!uf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ow(t,e,s,r,i)):(t=nu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(o,r)&&t.ref===e.ref)return vn(t,e,i)}return e.flags|=1,t=$n(s,r),t.ref=e.ref,t.return=e,e.child=t}function Ow(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Xs(s,r)&&t.ref===e.ref)if(Xe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Xe=!0);else return e.lanes=t.lanes,vn(t,e,i)}return ld(t,e,n,r,i)}function Vw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(vi,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q(vi,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Q(vi,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Q(vi,it),it|=r;return Ge(t,e,i,n),e.child}function Lw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,r,i){var s=et(n)?vr:Fe.current;return s=Pi(e,s),Ti(e,i),n=Yd(t,e,n,r,s,i),r=Jd(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,vn(t,e,i)):(te&&r&&Fd(e),e.flags|=1,Ge(t,e,n,i),e.child)}function Kv(t,e,n,r,i){if(et(n)){var s=!0;fu(e)}else s=!1;if(Ti(e,i),e.stateNode===null)Za(t,e),lw(e,n,r),ad(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=wt(l):(l=et(n)?vr:Fe.current,l=Pi(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Fv(e,o,r,l),xn=!1;var d=e.memoizedState;o.state=d,vu(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ze.current||xn?(typeof c=="function"&&(od(e,n,c,r),u=e.memoizedState),(a=xn||Mv(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,aw(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:Pt(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=wt(u):(u=et(n)?vr:Fe.current,u=Pi(e,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Fv(e,o,r,u),xn=!1,d=e.memoizedState,o.state=d,vu(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||Ze.current||xn?(typeof m=="function"&&(od(e,n,m,r),y=e.memoizedState),(l=xn||Mv(e,n,l,r,d,y,u)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return cd(t,e,n,r,s,i)}function cd(t,e,n,r,i,s){Lw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&xv(e,n,!1),vn(t,e,s);r=e.stateNode,PP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ci(e,t.child,null,s),e.child=Ci(e,null,a,s)):Ge(t,e,a,s),e.memoizedState=r.state,i&&xv(e,n,!0),e.child}function Mw(t){var e=t.stateNode;e.pendingContext?Dv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dv(t,e.context,!1),Wd(t,e.containerInfo)}function Hv(t,e,n,r,i){return Ri(),Bd(i),e.flags|=256,Ge(t,e,n,r),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function dd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fw(t,e,n){var r=e.pendingProps,i=ne.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Q(ne,i&1),t===null)return id(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Mu(o,r,0,null),t=yr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=dd(n),e.memoizedState=hd,t):ef(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return RP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=$n(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=$n(a,s):(s=yr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?dd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=hd,r}return s=t.child,t=s.sibling,r=$n(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ef(t,e){return e=Mu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $a(t,e,n,r){return r!==null&&Bd(r),Ci(e,t.child,null,n),t=ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function RP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ph(Error(E(422))),$a(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Mu({mode:"visible",children:r.children},i,0,null),s=yr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ci(e,t.child,null,o),e.child.memoizedState=dd(o),e.memoizedState=hd,s);if(!(e.mode&1))return $a(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(E(419)),r=Ph(s,r,void 0),$a(t,e,o,r)}if(a=(o&t.childLanes)!==0,Xe||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),Nt(r,t,i,-1))}return af(),r=Ph(Error(E(421))),$a(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=Bn(i.nextSibling),ot=e,te=!0,Ct=null,t!==null&&(gt[yt++]=dn,gt[yt++]=fn,gt[yt++]=_r,dn=t.id,fn=t.overflow,_r=e),e=ef(e,r.children),e.flags|=4096,e)}function Qv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),sd(t.return,e,n)}function Rh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Uw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ge(t,e,r.children,n),r=ne.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qv(t,n,e);else if(t.tag===19)Qv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ne,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_u(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Rh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_u(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Rh(e,!0,n,null,s);break;case"together":Rh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Za(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=$n(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$n(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CP(t,e,n){switch(e.tag){case 3:Mw(e),Ri();break;case 5:dw(e);break;case 1:et(e.type)&&fu(e);break;case 4:Wd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Q(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ne,ne.current&1),e.flags|=128,null):n&e.child.childLanes?Fw(t,e,n):(Q(ne,ne.current&1),t=vn(t,e,n),t!==null?t.sibling:null);Q(ne,ne.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Uw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Q(ne,ne.current),r)break;return null;case 22:case 23:return e.lanes=0,Vw(t,e,n)}return vn(t,e,n)}var Bw,fd,zw,jw;Bw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fd=function(){};zw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,mr($t.current);var s=null;switch(n){case"input":i=Vh(t,i),r=Vh(t,r),s=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),s=[];break;case"textarea":i=Fh(t,i),r=Fh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}Bh(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Gs.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i?.[l],r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Gs.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&J("scroll",t),s||a===u||(s=[])):(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};jw=function(t,e,n,r){n!==r&&(e.flags|=4)};function ks(t,e){if(!te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Le(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function kP(t,e,n){var r=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(e),null;case 1:return et(e.type)&&du(),Le(e),null;case 3:return r=e.stateNode,ki(),X(Ze),X(Fe),Hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ct!==null&&(Id(Ct),Ct=null))),fd(t,e),Le(e),null;case 5:Kd(e);var i=mr(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)zw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return Le(e),null}if(t=mr($t.current),ja(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[jt]=e,r[to]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Vs.length;i++)J(Vs[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":rv(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":sv(r,s),J("invalid",r)}Bh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(r.textContent,a,t),i=["children",""+a]):Gs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":ka(r),iv(r,s,!0);break;case"textarea":ka(r),ov(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[jt]=e,t[to]=r,Bw(t,e,!1,!1),e.stateNode=t;e:{switch(o=zh(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Vs.length;i++)J(Vs[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":rv(t,r),i=Vh(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),J("invalid",t);break;case"textarea":sv(t,r),i=Fh(t,r),J("invalid",t);break;default:i=r}Bh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?v_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&g_(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ws(t,u):typeof u=="number"&&Ws(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Gs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&J("scroll",t):u!=null&&Sd(t,s,u,o))}switch(n){case"input":ka(t),iv(t,r,!1);break;case"textarea":ka(t),ov(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_i(t,!!r.multiple,s,!1):r.defaultValue!=null&&_i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Le(e),null;case 6:if(t&&e.stateNode!=null)jw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=mr(ro.current),mr($t.current),ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[jt]=e,(s=r.nodeValue!==n)&&(t=ot,t!==null))switch(t.tag){case 3:za(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=e,e.stateNode=r}return Le(e),null;case 13:if(X(ne),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(te&&st!==null&&e.mode&1&&!(e.flags&128))sw(),Ri(),e.flags|=98560,s=!1;else if(s=ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(E(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(E(317));s[jt]=e}else Ri(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Le(e),s=!1}else Ct!==null&&(Id(Ct),Ct=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ne.current&1?ve===0&&(ve=3):af())),e.updateQueue!==null&&(e.flags|=4),Le(e),null);case 4:return ki(),fd(t,e),t===null&&Zs(e.stateNode.containerInfo),Le(e),null;case 10:return qd(e.type._context),Le(e),null;case 17:return et(e.type)&&du(),Le(e),null;case 19:if(X(ne),s=e.memoizedState,s===null)return Le(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ks(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_u(t),o!==null){for(e.flags|=128,ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ne,ne.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>Di&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=_u(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!te)return Le(e),null}else 2*de()-s.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=ne.current,Q(ne,r?n&1|2:n&1),e):(Le(e),null);case 22:case 23:return of(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&(Le(e),e.subtreeFlags&6&&(e.flags|=8192)):Le(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function NP(t,e){switch(Ud(e),e.tag){case 1:return et(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ki(),X(Ze),X(Fe),Hd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(X(ne),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Ri()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ne),null;case 4:return ki(),null;case 10:return qd(e.type._context),null;case 22:case 23:return of(),null;case 24:return null;default:return null}}var Ga=!1,Me=!1,DP=typeof WeakSet=="function"?WeakSet:Set,k=null;function yi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function pd(t,e,n){try{n()}catch(r){ae(t,e,r)}}var Yv=!1;function xP(t,e){if(Jh=uu,t=W_(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,l=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(u=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++l===i&&(a=o),d===s&&++c===r&&(u=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xh={focusedElem:t,selectionRange:n},uu=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,T=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:Pt(e.type,_),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(w){ae(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=Yv,Yv=!1,y}function js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&pd(e,n,s)}i=i.next}while(i!==r)}}function Vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function qw(t){var e=t.alternate;e!==null&&(t.alternate=null,qw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[jt],delete e[to],delete e[td],delete e[pP],delete e[mP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $w(t){return t.tag===5||t.tag===3||t.tag===4}function Jv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$w(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var Re=null,Rt=!1;function Nn(t,e,n){for(n=n.child;n!==null;)Gw(t,e,n),n=n.sibling}function Gw(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Ru,n)}catch{}switch(n.tag){case 5:Me||yi(n,e);case 6:var r=Re,i=Rt;Re=null,Nn(t,e,n),Re=r,Rt=i,Re!==null&&(Rt?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(Rt?(t=Re,n=n.stateNode,t.nodeType===8?wh(t.parentNode,n):t.nodeType===1&&wh(t,n),Ys(t)):wh(Re,n.stateNode));break;case 4:r=Re,i=Rt,Re=n.stateNode.containerInfo,Rt=!0,Nn(t,e,n),Re=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&pd(n,e,o),i=i.next}while(i!==r)}Nn(t,e,n);break;case 1:if(!Me&&(yi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,e,a)}Nn(t,e,n);break;case 21:Nn(t,e,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Nn(t,e,n),Me=r):Nn(t,e,n);break;default:Nn(t,e,n)}}function Xv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DP),e.forEach(function(r){var i=zP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function At(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,Rt=!1;break e;case 3:Re=a.stateNode.containerInfo,Rt=!0;break e;case 4:Re=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(Re===null)throw Error(E(160));Gw(s,o,i),Re=null,Rt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(l){ae(i,e,l)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ww(e,t),e=e.sibling}function Ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(At(e,t),Bt(t),r&4){try{js(3,t,t.return),Vu(3,t)}catch(_){ae(t,t.return,_)}try{js(5,t,t.return)}catch(_){ae(t,t.return,_)}}break;case 1:At(e,t),Bt(t),r&512&&n!==null&&yi(n,n.return);break;case 5:if(At(e,t),Bt(t),r&512&&n!==null&&yi(n,n.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(_){ae(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&f_(i,s),zh(a,o);var l=zh(a,s);for(o=0;o<u.length;o+=2){var c=u[o],h=u[o+1];c==="style"?v_(i,h):c==="dangerouslySetInnerHTML"?g_(i,h):c==="children"?Ws(i,h):Sd(i,c,h,l)}switch(a){case"input":Lh(i,s);break;case"textarea":p_(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?_i(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?_i(i,!!s.multiple,s.defaultValue,!0):_i(i,!!s.multiple,s.multiple?[]:"",!1))}i[to]=s}catch(_){ae(t,t.return,_)}}break;case 6:if(At(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ae(t,t.return,_)}}break;case 3:if(At(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(_){ae(t,t.return,_)}break;case 4:At(e,t),Bt(t);break;case 13:At(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rf=de())),r&4&&Xv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Me=(l=Me)||c,At(e,t),Me=l):At(e,t),Bt(t),r&8192){if(l=t.memoizedState!==null,(t.stateNode.isHidden=l)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(h=k=c;k!==null;){switch(d=k,m=d.child,d.tag){case 0:case 11:case 14:case 15:js(4,d,d.return);break;case 1:yi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ae(r,n,_)}}break;case 5:yi(d,d.return);break;case 22:if(d.memoizedState!==null){e_(h);continue}}m!==null?(m.return=d,k=m):e_(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,l?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,u=h.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=y_("display",o))}catch(_){ae(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=l?"":h.memoizedProps}catch(_){ae(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:At(e,t),Bt(t),r&4&&Xv(t);break;case 21:break;default:At(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($w(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ws(i,""),r.flags&=-33);var s=Jv(t);yd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Jv(t);gd(t,a,o);break;default:throw Error(E(161))}}catch(u){ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bP(t,e,n){k=t,Kw(t,e,n)}function Kw(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ga;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Me;a=Ga;var l=Me;if(Ga=o,(Me=u)&&!l)for(k=i;k!==null;)o=k,u=o.child,o.tag===22&&o.memoizedState!==null?t_(i):u!==null?(u.return=o,k=u):t_(i);for(;s!==null;)k=s,Kw(s,e,n),s=s.sibling;k=i,Ga=a,Me=l}Zv(t,e,n)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):Zv(t,e,n)}}function Zv(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Me||Vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var l=e.alternate;if(l!==null){var c=l.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ys(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Me||e.flags&512&&md(e)}catch(d){ae(e,e.return,d)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function e_(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function t_(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vu(4,e)}catch(u){ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){ae(e,i,u)}}var s=e.return;try{md(e)}catch(u){ae(e,s,u)}break;case 5:var o=e.return;try{md(e)}catch(u){ae(e,o,u)}}}catch(u){ae(e,e.return,u)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var OP=Math.ceil,Eu=_n.ReactCurrentDispatcher,tf=_n.ReactCurrentOwner,_t=_n.ReactCurrentBatchConfig,q=0,Ie=null,fe=null,Ce=0,it=0,vi=Hn(0),ve=0,ao=null,Ir=0,Lu=0,nf=0,qs=null,Je=null,rf=0,Di=1/0,cn=null,Tu=!1,vd=null,jn=null,Wa=!1,Ln=null,Su=0,$s=0,_d=null,eu=-1,tu=0;function We(){return q&6?de():eu!==-1?eu:eu=de()}function qn(t){return t.mode&1?q&2&&Ce!==0?Ce&-Ce:yP.transition!==null?(tu===0&&(tu=N_()),tu):(t=W,t!==0||(t=window.event,t=t===void 0?16:M_(t.type)),t):1}function Nt(t,e,n,r){if(50<$s)throw $s=0,_d=null,Error(E(185));uo(t,n,r),(!(q&2)||t!==Ie)&&(t===Ie&&(!(q&2)&&(Lu|=n),ve===4&&On(t,Ce)),tt(t,r),n===1&&q===0&&!(e.mode&1)&&(Di=de()+500,xu&&Qn()))}function tt(t,e){var n=t.callbackNode;_1(t,e);var r=au(t,t===Ie?Ce:0);if(r===0)n!==null&&lv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lv(n),e===1)t.tag===0?gP(n_.bind(null,t)):nw(n_.bind(null,t)),dP(function(){!(q&6)&&Qn()}),n=null;else{switch(D_(r)){case 1:n=kd;break;case 4:n=C_;break;case 16:n=ou;break;case 536870912:n=k_;break;default:n=ou}n=t0(n,Hw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hw(t,e){if(eu=-1,tu=0,q&6)throw Error(E(327));var n=t.callbackNode;if(Si()&&t.callbackNode!==n)return null;var r=au(t,t===Ie?Ce:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Au(t,r);else{e=r;var i=q;q|=2;var s=Yw();(Ie!==t||Ce!==e)&&(cn=null,Di=de()+500,gr(t,e));do try{MP();break}catch(a){Qw(t,a)}while(!0);jd(),Eu.current=s,q=i,fe!==null?e=0:(Ie=null,Ce=0,e=ve)}if(e!==0){if(e===2&&(i=Wh(t),i!==0&&(r=i,e=wd(t,i))),e===1)throw n=ao,gr(t,0),On(t,r),tt(t,de()),n;if(e===6)On(t,r);else{if(i=t.current.alternate,!(r&30)&&!VP(i)&&(e=Au(t,r),e===2&&(s=Wh(t),s!==0&&(r=s,e=wd(t,s))),e===1))throw n=ao,gr(t,0),On(t,r),tt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:dr(t,Je,cn);break;case 3:if(On(t,r),(r&130023424)===r&&(e=rf+500-de(),10<e)){if(au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){We(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ed(dr.bind(null,t,Je,cn),e);break}dr(t,Je,cn);break;case 4:if(On(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-kt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OP(r/1960))-r,10<r){t.timeoutHandle=ed(dr.bind(null,t,Je,cn),r);break}dr(t,Je,cn);break;case 5:dr(t,Je,cn);break;default:throw Error(E(329))}}}return tt(t,de()),t.callbackNode===n?Hw.bind(null,t):null}function wd(t,e){var n=qs;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=Au(t,e),t!==2&&(e=Je,Je=n,e!==null&&Id(e)),t}function Id(t){Je===null?Je=t:Je.push.apply(Je,t)}function VP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function On(t,e){for(e&=~nf,e&=~Lu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-kt(e),r=1<<n;t[n]=-1,e&=~r}}function n_(t){if(q&6)throw Error(E(327));Si();var e=au(t,0);if(!(e&1))return tt(t,de()),null;var n=Au(t,e);if(t.tag!==0&&n===2){var r=Wh(t);r!==0&&(e=r,n=wd(t,r))}if(n===1)throw n=ao,gr(t,0),On(t,e),tt(t,de()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Je,cn),tt(t,de()),null}function sf(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(Di=de()+500,xu&&Qn())}}function Er(t){Ln!==null&&Ln.tag===0&&!(q&6)&&Si();var e=q;q|=1;var n=_t.transition,r=W;try{if(_t.transition=null,W=1,t)return t()}finally{W=r,_t.transition=n,q=e,!(q&6)&&Qn()}}function of(){it=vi.current,X(vi)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hP(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:ki(),X(Ze),X(Fe),Hd();break;case 5:Kd(r);break;case 4:ki();break;case 13:X(ne);break;case 19:X(ne);break;case 10:qd(r.type._context);break;case 22:case 23:of()}n=n.return}if(Ie=t,fe=t=$n(t.current,null),Ce=it=e,ve=0,ao=null,nf=Lu=Ir=0,Je=qs=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}pr=null}return t}function Qw(t,e){do{var n=fe;try{if(jd(),Ja.current=Iu,wu){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wu=!1}if(wr=0,we=ye=re=null,zs=!1,io=0,tf.current=null,n===null||n.return===null){ve=1,ao=e,fe=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=Ce,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=qv(o);if(m!==null){m.flags&=-257,$v(m,o,a,s,e),m.mode&1&&jv(s,l,e),e=m,u=l;var y=e.updateQueue;if(y===null){var _=new Set;_.add(u),e.updateQueue=_}else y.add(u);break e}else{if(!(e&1)){jv(s,l,e),af();break e}u=Error(E(426))}}else if(te&&a.mode&1){var T=qv(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),$v(T,o,a,s,e),Bd(Ni(u,a));break e}}s=u=Ni(u,a),ve!==4&&(ve=2),qs===null?qs=[s]:qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=xw(s,u,e);Vv(s,p);break e;case 1:a=u;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(jn===null||!jn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=bw(s,a,e);Vv(s,w);break e}}s=s.return}while(s!==null)}Xw(n)}catch(P){e=P,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function Yw(){var t=Eu.current;return Eu.current=Iu,t===null?Iu:t}function af(){(ve===0||ve===3||ve===2)&&(ve=4),Ie===null||!(Ir&268435455)&&!(Lu&268435455)||On(Ie,Ce)}function Au(t,e){var n=q;q|=2;var r=Yw();(Ie!==t||Ce!==e)&&(cn=null,gr(t,e));do try{LP();break}catch(i){Qw(t,i)}while(!0);if(jd(),q=n,Eu.current=r,fe!==null)throw Error(E(261));return Ie=null,Ce=0,ve}function LP(){for(;fe!==null;)Jw(fe)}function MP(){for(;fe!==null&&!c1();)Jw(fe)}function Jw(t){var e=e0(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?Xw(t):fe=e,tf.current=null}function Xw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NP(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,fe=null;return}}else if(n=kP(n,e,it),n!==null){fe=n;return}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);ve===0&&(ve=5)}function dr(t,e,n){var r=W,i=_t.transition;try{_t.transition=null,W=1,FP(t,e,n,r)}finally{_t.transition=i,W=r}return null}function FP(t,e,n,r){do Si();while(Ln!==null);if(q&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(w1(t,s),t===Ie&&(fe=Ie=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,t0(ou,function(){return Si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=_t.transition,_t.transition=null;var o=W;W=1;var a=q;q|=4,tf.current=null,xP(t,n),Ww(n,t),oP(Xh),uu=!!Jh,Xh=Jh=null,t.current=n,bP(n,t,i),h1(),q=a,W=o,_t.transition=s}else t.current=n;if(Wa&&(Wa=!1,Ln=t,Su=i),s=t.pendingLanes,s===0&&(jn=null),p1(n.stateNode,r),tt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=vd,vd=null,t;return Su&1&&t.tag!==0&&Si(),s=t.pendingLanes,s&1?t===_d?$s++:($s=0,_d=t):$s=0,Qn(),null}function Si(){if(Ln!==null){var t=D_(Su),e=_t.transition,n=W;try{if(_t.transition=null,W=16>t?16:t,Ln===null)var r=!1;else{if(t=Ln,Ln=null,Su=0,q&6)throw Error(E(331));var i=q;for(q|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var l=a[u];for(k=l;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:js(8,c,s)}var h=c.child;if(h!==null)h.return=c,k=h;else for(;k!==null;){c=k;var d=c.sibling,m=c.return;if(qw(c),c===l){k=null;break}if(d!==null){d.return=m,k=d;break}k=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:js(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,k=g;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Vu(9,a)}}catch(P){ae(a,a.return,P)}if(a===o){k=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,k=w;break e}k=a.return}}if(q=i,Qn(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Ru,t)}catch{}r=!0}return r}finally{W=n,_t.transition=e}}return!1}function r_(t,e,n){e=Ni(n,e),e=xw(t,e,1),t=zn(t,e,1),e=We(),t!==null&&(uo(t,1,e),tt(t,e))}function ae(t,e,n){if(t.tag===3)r_(t,t,n);else for(;e!==null;){if(e.tag===3){r_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){t=Ni(n,t),t=bw(e,t,1),e=zn(e,t,1),t=We(),e!==null&&(uo(e,1,t),tt(e,t));break}}e=e.return}}function UP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=We(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Ce&n)===n&&(ve===4||ve===3&&(Ce&130023424)===Ce&&500>de()-rf?gr(t,0):nf|=n),tt(t,e)}function Zw(t,e){e===0&&(t.mode&1?(e=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):e=1);var n=We();t=yn(t,e),t!==null&&(uo(t,e,n),tt(t,n))}function BP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Zw(t,n)}function zP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),Zw(t,n)}var e0;e0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Xe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xe=!1,CP(t,e,n);Xe=!!(t.flags&131072)}else Xe=!1,te&&e.flags&1048576&&rw(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Za(t,e),t=e.pendingProps;var i=Pi(e,Fe.current);Ti(e,n),i=Yd(null,e,r,t,i,n);var s=Jd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(s=!0,fu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gd(e),i.updater=bu,e.stateNode=i,i._reactInternals=e,ad(e,r,t,n),e=cd(null,e,r,!0,s,n)):(e.tag=0,te&&s&&Fd(e),Ge(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Za(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=qP(r),t=Pt(r,t),i){case 0:e=ld(null,e,r,t,n);break e;case 1:e=Kv(null,e,r,t,n);break e;case 11:e=Gv(null,e,r,t,n);break e;case 14:e=Wv(null,e,r,Pt(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),ld(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Kv(t,e,r,i,n);case 3:e:{if(Mw(e),t===null)throw Error(E(387));r=e.pendingProps,s=e.memoizedState,i=s.element,aw(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ni(Error(E(423)),e),e=Hv(t,e,r,n,i);break e}else if(r!==i){i=Ni(Error(E(424)),e),e=Hv(t,e,r,n,i);break e}else for(st=Bn(e.stateNode.containerInfo.firstChild),ot=e,te=!0,Ct=null,n=hw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ri(),r===i){e=vn(t,e,n);break e}Ge(t,e,r,n)}e=e.child}return e;case 5:return dw(e),t===null&&id(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Zh(r,i)?o=null:s!==null&&Zh(r,s)&&(e.flags|=32),Lw(t,e),Ge(t,e,o,n),e.child;case 6:return t===null&&id(e),null;case 13:return Fw(t,e,n);case 4:return Wd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ci(e,null,r,n):Ge(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Gv(t,e,r,i,n);case 7:return Ge(t,e,e.pendingProps,n),e.child;case 8:return Ge(t,e,e.pendingProps.children,n),e.child;case 12:return Ge(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Q(gu,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!Ze.current){e=vn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=pn(-1,n&-n),u.tag=2;var l=s.updateQueue;if(l!==null){l=l.shared;var c=l.pending;c===null?u.next=u:(u.next=c.next,c.next=u),l.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),sd(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(E(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),sd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ge(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ti(e,n),i=wt(i),r=r(i),e.flags|=1,Ge(t,e,r,n),e.child;case 14:return r=e.type,i=Pt(r,e.pendingProps),i=Pt(r.type,i),Wv(t,e,r,i,n);case 15:return Ow(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pt(r,i),Za(t,e),e.tag=1,et(r)?(t=!0,fu(e)):t=!1,Ti(e,n),lw(e,r,i),ad(e,r,i,n),cd(null,e,r,!0,t,n);case 19:return Uw(t,e,n);case 22:return Vw(t,e,n)}throw Error(E(156,e.tag))};function t0(t,e){return R_(t,e)}function jP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(t,e,n,r){return new jP(t,e,n,r)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qP(t){if(typeof t=="function")return uf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pd)return 11;if(t===Rd)return 14}return 2}function $n(t,e){var n=t.alternate;return n===null?(n=vt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function nu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")uf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ui:return yr(n.children,i,s,e);case Ad:o=8,i|=8;break;case Dh:return t=vt(12,n,e,i|2),t.elementType=Dh,t.lanes=s,t;case xh:return t=vt(13,n,e,i),t.elementType=xh,t.lanes=s,t;case bh:return t=vt(19,n,e,i),t.elementType=bh,t.lanes=s,t;case c_:return Mu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case u_:o=10;break e;case l_:o=9;break e;case Pd:o=11;break e;case Rd:o=14;break e;case Dn:o=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=vt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function yr(t,e,n,r){return t=vt(7,t,r,e),t.lanes=n,t}function Mu(t,e,n,r){return t=vt(22,t,r,e),t.elementType=c_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ch(t,e,n){return t=vt(6,t,null,e),t.lanes=n,t}function kh(t,e,n){return e=vt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $P(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dh(0),this.expirationTimes=dh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,i,s,o,a,u){return t=new $P(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=vt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(s),t}function GP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function n0(t){if(!t)return Wn;t=t._reactInternals;e:{if(Sr(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(et(n))return tw(t,n,e)}return e}function r0(t,e,n,r,i,s,o,a,u){return t=lf(n,r,!0,t,i,s,o,a,u),t.context=n0(null),n=t.current,r=We(),i=qn(n),s=pn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,uo(t,i,r),tt(t,r),t}function Fu(t,e,n,r){var i=e.current,s=We(),o=qn(i);return n=n0(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,o),t!==null&&(Nt(t,i,o,s),Ya(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function i_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cf(t,e){i_(t,e),(t=t.alternate)&&i_(t,e)}function WP(){return null}var i0=typeof reportError=="function"?reportError:function(t){console.error(t)};function hf(t){this._internalRoot=t}Uu.prototype.render=hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));Fu(t,e,null,null)};Uu.prototype.unmount=hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Fu(null,t,null,null)}),e[gn]=null}};function Uu(t){this._internalRoot=t}Uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=O_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bn.length&&e!==0&&e<bn[n].priority;n++);bn.splice(n,0,t),n===0&&L_(t)}};function df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s_(){}function KP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var l=Pu(o);s.call(l)}}var o=r0(e,r,t,0,null,!1,!1,"",s_);return t._reactRootContainer=o,t[gn]=o.current,Zs(t.nodeType===8?t.parentNode:t),Er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var l=Pu(u);a.call(l)}}var u=lf(t,0,!1,null,null,!1,!1,"",s_);return t._reactRootContainer=u,t[gn]=u.current,Zs(t.nodeType===8?t.parentNode:t),Er(function(){Fu(e,u,n,r)}),u}function zu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Pu(o);a.call(u)}}Fu(e,o,t,i)}else o=KP(n,e,t,i,r);return Pu(o)}x_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Os(e.pendingLanes);n!==0&&(Nd(e,n|1),tt(e,de()),!(q&6)&&(Di=de()+500,Qn()))}break;case 13:Er(function(){var r=yn(t,1);if(r!==null){var i=We();Nt(r,t,1,i)}}),cf(t,1)}};Dd=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=We();Nt(e,t,134217728,n)}cf(t,134217728)}};b_=function(t){if(t.tag===13){var e=qn(t),n=yn(t,e);if(n!==null){var r=We();Nt(n,t,e,r)}cf(t,e)}};O_=function(){return W};V_=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};qh=function(t,e,n){switch(e){case"input":if(Lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Du(r);if(!i)throw Error(E(90));d_(r),Lh(r,i)}}}break;case"textarea":p_(t,n);break;case"select":e=n.value,e!=null&&_i(t,!!n.multiple,e,!1)}};I_=sf;E_=Er;var HP={usingClientEntryPoint:!1,Events:[co,di,Du,__,w_,sf]},Ns={findFiberByHostInstance:fr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QP={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=A_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||WP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ds=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ds.isDisabled&&Ds.supportsFiber))try{Ru=Ds.inject(QP),qt=Ds}catch{}var Ds;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HP;lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!df(e))throw Error(E(200));return GP(t,e,null,n)};lt.createRoot=function(t,e){if(!df(t))throw Error(E(299));var n=!1,r="",i=i0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,i),t[gn]=e.current,Zs(t.nodeType===8?t.parentNode:t),new hf(e)};lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=A_(e),t=t===null?null:t.stateNode,t};lt.flushSync=function(t){return Er(t)};lt.hydrate=function(t,e,n){if(!Bu(e))throw Error(E(200));return zu(null,t,e,!0,n)};lt.hydrateRoot=function(t,e,n){if(!df(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=i0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=r0(e,null,t,1,n??null,i,!1,s,o),t[gn]=e.current,Zs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Uu(e)};lt.render=function(t,e,n){if(!Bu(e))throw Error(E(200));return zu(null,t,e,!1,n)};lt.unmountComponentAtNode=function(t){if(!Bu(t))throw Error(E(40));return t._reactRootContainer?(Er(function(){zu(null,null,t,!1,function(){t._reactRootContainer=null,t[gn]=null})}),!0):!1};lt.unstable_batchedUpdates=sf;lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Bu(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return zu(t,e,n,!1,r)};lt.version="18.2.0-next-9e3b772b8-20220608"});var u0=ln((ZO,a0)=>{"use strict";function o0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o0)}catch(t){console.error(t)}}o0(),a0.exports=s0()});var c0=ln(ff=>{"use strict";var l0=u0();ff.createRoot=l0.createRoot,ff.hydrateRoot=l0.hydrateRoot;var eV});var SA=ln(Kc=>{"use strict";var UO=ii(),BO=Symbol.for("react.element"),zO=Symbol.for("react.fragment"),jO=Object.prototype.hasOwnProperty,qO=UO.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$O={key:!0,ref:!0,__self:!0,__source:!0};function TA(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)jO.call(e,r)&&!$O.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:BO,type:t,key:s,ref:o,props:i,_owner:qO.current}}Kc.Fragment=zO;Kc.jsx=TA;Kc.jsxs=TA});var Py=ln((y2,AA)=>{"use strict";AA.exports=SA()});var lr=ni(ii(),1),PA=ni(c0(),1);var d0=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},YP=function(t){let e=[],n=0,r=0;for(;n<t.length;){let i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{let s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},f0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){let s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4,d=(a&15)<<2|l>>6,m=l&63;u||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(d0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){let s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;let l=i<t.length?n[t.charAt(i)]:64;++i;let h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new mf;let d=s<<2|a>>4;if(r.push(d),l!==64){let m=a<<4&240|l>>2;if(r.push(m),h!==64){let y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},mf=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},JP=function(t){let e=d0(t);return f0.encodeByteArray(e,!0)},fo=function(t){return JP(t).replace(/\./g,"")},yf=function(t){try{return f0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function XP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ZP=()=>XP().__FIREBASE_DEFAULTS__,eR=()=>{if(typeof process>"u"||typeof process.env>"u")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&yf(t[1]);return e&&JSON.parse(e)},qu=()=>{try{return ZP()||eR()||tR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vf=t=>{var e,n;return(n=(e=qu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},p0=t=>{let e=vf(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_f=()=>{var t;return(t=qu())===null||t===void 0?void 0:t.config},wf=t=>{var e;return(e=qu())===null||e===void 0?void 0:e[`_${t}`]};var ju=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function m0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fo(JSON.stringify(n)),fo(JSON.stringify(o)),""].join(".")}function ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ue())}function nR(){var t;let e=(t=qu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $u(){let t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function y0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function v0(){let t=ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _0(){return!nR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Oi(){try{return typeof indexedDB=="object"}catch{return!1}}function Gu(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function w0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}var rR="FirebaseError",Ne=class t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=rR,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ct.prototype.create)}},ct=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){let r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?iR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ne(i,a,r)}};function iR(t,e){return t.replace(sR,(n,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var sR=/\{\$([^}]+)}/g;function I0(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wn(t,e){if(t===e)return!0;let n=Object.keys(t),r=Object.keys(e);for(let i of n){if(!r.includes(i))return!1;let s=t[i],o=e[i];if(h0(s)&&h0(o)){if(!wn(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function h0(t){return t!==null&&typeof t=="object"}function Vi(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){let e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Mi(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function E0(t,e){let n=new gf(t,e);return n.subscribe.bind(n)}var gf=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pf),i.error===void 0&&(i.error=pf),i.complete===void 0&&(i.complete=pf);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function oR(t,e){if(typeof t!="object"||t===null)return!1;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pf(){}var aR=1e3,uR=2,lR=4*60*60*1e3,cR=.5;function If(t,e=aR,n=uR){let r=e*Math.pow(n,t),i=Math.round(cR*r*(Math.random()-.5)*2);return Math.min(lR,r+i)}function se(t){return t&&t._delegate?t._delegate:t}var Ee=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Ar="[DEFAULT]";var Ef=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let r=new ju;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;let r=this.normalizeInstanceIdentifier(e?.identifier),i=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dR(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;let i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);let o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function hR(t){return t===Ar?void 0:t}function dR(t){return t.instantiationMode==="EAGER"}var Wu=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new Ef(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var fR=[],U;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(U||(U={}));var pR={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},mR=U.INFO,gR={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},yR=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),i=gR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Gt=class{constructor(e){this.name=e,this._logLevel=mR,this._logHandler=yR,this._userLogHandler=null,fR.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}};var vR=(t,e)=>e.some(n=>t instanceof n),T0,S0;function _R(){return T0||(T0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wR(){return S0||(S0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var A0=new WeakMap,Sf=new WeakMap,P0=new WeakMap,Tf=new WeakMap,Pf=new WeakMap;function IR(t){let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Wt(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&A0.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function ER(t){if(Sf.has(t))return;let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sf.set(t,e)}var Af={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R0(t){Af=t(Af)}function TR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let r=t.call(Ku(this),e,...n);return P0.set(r,e.sort?e.sort():[e]),Wt(r)}:wR().includes(t)?function(...e){return t.apply(Ku(this),e),Wt(A0.get(this))}:function(...e){return Wt(t.apply(Ku(this),e))}}function SR(t){return typeof t=="function"?TR(t):(t instanceof IDBTransaction&&ER(t),vR(t,_R())?new Proxy(t,Af):t)}function Wt(t){if(t instanceof IDBRequest)return IR(t);if(Tf.has(t))return Tf.get(t);let e=SR(t);return e!==t&&(Tf.set(t,e),Pf.set(e,t)),e}var Ku=t=>Pf.get(t);function Hu(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(t,e),a=Wt(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Wt(o.result),u.oldVersion,u.newVersion,Wt(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}var AR=["get","getKey","getAll","getAllKeys","count"],PR=["put","add","delete","clear"],Rf=new Map;function C0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,i=PR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AR.includes(n)))return;let s=async function(o,...a){let u=this.transaction(o,i?"readwrite":"readonly"),l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&u.done]))[0]};return Rf.set(e,s),s}R0(t=>({...t,get:(e,n,r)=>C0(e,n)||t.get(e,n,r),has:(e,n)=>!!C0(e,n)||t.has(e,n)}));var kf=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RR(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function RR(t){let e=t.getComponent();return e?.type==="VERSION"}var Nf="@firebase/app",k0="0.10.0";var Pr=new Gt("@firebase/app"),CR="@firebase/app-compat",kR="@firebase/analytics-compat",NR="@firebase/analytics",DR="@firebase/app-check-compat",xR="@firebase/app-check",bR="@firebase/auth",OR="@firebase/auth-compat",VR="@firebase/database",LR="@firebase/database-compat",MR="@firebase/functions",FR="@firebase/functions-compat",UR="@firebase/installations",BR="@firebase/installations-compat",zR="@firebase/messaging",jR="@firebase/messaging-compat",qR="@firebase/performance",$R="@firebase/performance-compat",GR="@firebase/remote-config",WR="@firebase/remote-config-compat",KR="@firebase/storage",HR="@firebase/storage-compat",QR="@firebase/firestore",YR="@firebase/firestore-compat",JR="firebase",XR="10.10.0";var Df="[DEFAULT]",ZR={[Nf]:"fire-core",[CR]:"fire-core-compat",[NR]:"fire-analytics",[kR]:"fire-analytics-compat",[xR]:"fire-app-check",[DR]:"fire-app-check-compat",[bR]:"fire-auth",[OR]:"fire-auth-compat",[VR]:"fire-rtdb",[LR]:"fire-rtdb-compat",[MR]:"fire-fn",[FR]:"fire-fn-compat",[UR]:"fire-iid",[BR]:"fire-iid-compat",[zR]:"fire-fcm",[jR]:"fire-fcm-compat",[qR]:"fire-perf",[$R]:"fire-perf-compat",[GR]:"fire-rc",[WR]:"fire-rc-compat",[KR]:"fire-gcs",[HR]:"fire-gcs-compat",[QR]:"fire-fst",[YR]:"fire-fst-compat","fire-js":"fire-js",[JR]:"fire-js-all"};var Qu=new Map,eC=new Map,xf=new Map;function N0(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nt(t){let e=t.name;if(xf.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;xf.set(e,t);for(let n of Qu.values())N0(n,t);for(let n of eC.values())N0(n,t);return!0}function xt(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t.settings!==void 0}var tC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new ct("app","Firebase",tC);var bf=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}};var Jn=XR;function Lf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let r=Object.assign({name:Df,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=_f()),!n)throw Yn.create("no-options");let s=Qu.get(i);if(s){if(wn(n,s.options)&&wn(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}let o=new Wu(i);for(let u of xf.values())o.addComponent(u);let a=new bf(n,r,o);return Qu.set(i,a),a}function Rr(t=Df){let e=Qu.get(t);if(!e&&t===Df&&_f())return Lf();if(!e)throw Yn.create("no-app",{appName:t});return e}function De(t,e,n){var r;let i=(r=ZR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);let s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){let a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}nt(new Ee(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}var nC="firebase-heartbeat-database",rC=1,po="firebase-heartbeat-store",Cf=null;function O0(){return Cf||(Cf=Hu(nC,rC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(po)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),Cf}async function iC(t){try{let n=(await O0()).transaction(po),r=await n.objectStore(po).get(V0(t));return await n.done,r}catch(e){if(e instanceof Ne)Pr.warn(e.message);else{let n=Yn.create("idb-get",{originalErrorMessage:e?.message});Pr.warn(n.message)}}}async function D0(t,e){try{let r=(await O0()).transaction(po,"readwrite");await r.objectStore(po).put(e,V0(t)),await r.done}catch(n){if(n instanceof Ne)Pr.warn(n.message);else{let r=Yn.create("idb-set",{originalErrorMessage:n?.message});Pr.warn(r.message)}}}function V0(t){return`${t.name}!${t.options.appId}`}var sC=1024,oC=30*24*60*60*1e3,Of=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Vf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;let i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=x0();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{let a=new Date(o.date).valueOf();return Date.now()-a<=oC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";let n=x0(),{heartbeatsToSend:r,unsentEntries:i}=aC(this._heartbeatsCache.heartbeats),s=fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}};function x0(){return new Date().toISOString().substring(0,10)}function aC(t,e=sC){let n=[],r=t.slice();for(let i of t){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),b0(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),b0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Vf=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Oi()?Gu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await iC(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){let i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){let i=await this.read();return D0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}};function b0(t){return fo(JSON.stringify({version:2,heartbeats:t})).length}function uC(t){nt(new Ee("platform-logger",e=>new kf(e),"PRIVATE")),nt(new Ee("heartbeat",e=>new Of(e),"PRIVATE")),De(Nf,k0,t),De(Nf,k0,"esm2017"),De("fire-js","")}uC("");var lC="firebase",cC="10.10.0";De(lC,cC,"app");function Yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Z0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var eI=Z0,tI=new ct("auth","Firebase",Z0());var nl=new Gt("@firebase/auth");function hC(t,...e){nl.logLevel<=U.WARN&&nl.warn(`Auth (${Jn}): ${t}`,...e)}function Xu(t,...e){nl.logLevel<=U.ERROR&&nl.error(`Auth (${Jn}): ${t}`,...e)}function Et(t,...e){throw ip(t,...e)}function Qt(t,...e){return ip(t,...e)}function rp(t,e,n){let r=Object.assign(Object.assign({},eI()),{[e]:n});return new ct("auth","Firebase",r).create(e,{appName:t.name})}function Zn(t){return rp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dC(t,e,n){let r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Et(t,"argument-error"),rp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ip(t,...e){if(typeof t!="string"){let n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tI.create(t,...e)}function D(t,e,...n){if(!t)throw ip(e,...n)}function Ht(t){let e="INTERNAL ASSERTION FAILED: "+t;throw Xu(e),new Error(e)}function En(t,e){t||Ht(e)}function Uf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fC(){return L0()==="http:"||L0()==="https:"}function L0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}function pC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fC()||$u()||"connection"in navigator)?navigator.onLine:!0}function mC(){if(typeof navigator>"u")return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}var Cr=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=g0()||y0()}get(){return pC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function sp(t,e){En(t.emulator,"Emulator should always be set here");let{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}var rl=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var gC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var yC=new Cr(3e4,6e4);function Te(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ue(t,e,n,r,i={}){return nI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let a=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),rl.fetch()(rI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function nI(t,e,n){t._canInitEmulator=!1;let r=Object.assign(Object.assign({},gC),e);try{let i=new Bf(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw mo(t,"user-disabled",o);let c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rp(t,c,l);Et(t,c)}}catch(i){if(i instanceof Ne)throw i;Et(t,"network-request-failed",{message:String(i)})}}async function br(t,e,n,r,i={}){let s=await Ue(t,e,n,r,i);return"mfaPendingCredential"in s&&Et(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rI(t,e,n,r){let i=`${e}${n}?${r}`;return t.config.emulator?sp(t.config,i):`${t.config.apiScheme}://${i}`}function vC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Bf=class{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),yC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function mo(t,e,n){let r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=Qt(t,e,r);return i.customData._tokenResponse=n,i}function M0(t){return t!==void 0&&t.enterprise!==void 0}var zf=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return vC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}};async function _C(t,e){return Ue(t,"GET","/v2/recaptchaConfig",Te(t,e))}async function wC(t,e){return Ue(t,"POST","/v1/accounts:delete",e)}async function iI(t,e){return Ue(t,"POST","/v1/accounts:lookup",e)}function go(t){if(t)try{let e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sI(t,e=!1){let n=se(t),r=await n.getIdToken(e),i=op(r);D(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:go(Mf(i.auth_time)),issuedAtTime:go(Mf(i.iat)),expirationTime:go(Mf(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Mf(t){return Number(t)*1e3}function op(t){let[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xu("JWT malformed, contained fewer than 3 sections"),null;try{let i=yf(n);return i?JSON.parse(i):(Xu("Failed to decode base64 JWT payload"),null)}catch(i){return Xu("Caught error parsing JWT payload as JSON",i?.toString()),null}}function F0(t){let e=op(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function vo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ne&&IC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}var jf=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){let r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;let i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;let n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var _o=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=go(this.lastLoginAt),this.creationTime=go(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function il(t){var e;let n=t.auth,r=await t.getIdToken(),i=await vo(t,iI(n,{idToken:r}));D(i?.users.length,n,"internal-error");let s=i.users[0];t._notifyReloadListener(s);let o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?aI(s.providerUserInfo):[],a=EC(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!a?.length,c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _o(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function oI(t){let e=se(t);await il(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function EC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function aI(t){return t.map(e=>{var{providerId:n}=e,r=Yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}async function TC(t,e){let n=await nI(t,{},async()=>{let r=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",rl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SC(t,e){return Ue(t,"POST","/v2/accounts:revokeToken",Te(t,e))}var yo=class t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");let n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):F0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");let n=F0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){let{accessToken:r,refreshToken:i,expiresIn:s}=await TC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){let{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new t;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(D(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(D(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t,this.toJSON())}_performRefresh(){return Ht("not implemented")}};function Xn(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var Ui=class t{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _o(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){let n=await vo(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sI(this,e)}reload(){return oI(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let n=new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await il(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(Zn(this.auth));let e=await this.getIdToken();return await vo(this,wC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;let h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,p=(l=n.createdAt)!==null&&l!==void 0?l:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:P,providerData:R,stsTokenManager:N}=n;D(g&&N,e,"internal-error");let x=yo.fromJSON(this.name,N);D(typeof g=="string",e,"internal-error"),Xn(h,e.name),Xn(d,e.name),D(typeof w=="boolean",e,"internal-error"),D(typeof P=="boolean",e,"internal-error"),Xn(m,e.name),Xn(y,e.name),Xn(_,e.name),Xn(T,e.name),Xn(p,e.name),Xn(f,e.name);let ee=new t({uid:g,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:P,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:x,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(ee.providerData=R.map(F=>Object.assign({},F))),T&&(ee._redirectEventId=T),ee}static async _fromIdTokenResponse(e,n,r=!1){let i=new yo;i.updateFromServerResponse(n);let s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await il(s),s}static async _fromGetAccountInfoResponse(e,n,r){let i=n.users[0];D(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?aI(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new yo;a.updateFromIdToken(r);let u=new t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _o(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(u,l),u}};var U0=new Map;function In(t){En(t instanceof Function,"Expected a class definition");let e=U0.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,U0.set(t,e),e)}var sl=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){let n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};sl.type="NONE";var qf=sl;function Zu(t,e,n){return`firebase:${t}:${e}:${n}`}var ol=class t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Zu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Zu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);return e?Ui._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new t(In(qf),e,r);let i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l),s=i[0]||In(qf),o=Zu(r,e.config.apiKey,e.name),a=null;for(let l of n)try{let c=await l._get(o);if(c){let h=Ui._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}let u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new t(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new t(s,e,r))}};function B0(t){let e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dI(e))return"Blackberry";if(fI(e))return"Webos";if(ap(e))return"Safari";if((e.includes("chrome/")||lI(e))&&!e.includes("edge/"))return"Chrome";if(hI(e))return"Android";{let n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function uI(t=ue()){return/firefox\//i.test(t)}function ap(t=ue()){let e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lI(t=ue()){return/crios\//i.test(t)}function cI(t=ue()){return/iemobile/i.test(t)}function hI(t=ue()){return/android/i.test(t)}function dI(t=ue()){return/blackberry/i.test(t)}function fI(t=ue()){return/webos/i.test(t)}function Tl(t=ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function AC(t=ue()){var e;return Tl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function PC(){return v0()&&document.documentMode===10}function pI(t=ue()){return Tl(t)||hI(t)||fI(t)||dI(t)||/windows phone/i.test(t)||cI(t)}function RC(){try{return!!(window&&window!==window.top)}catch{return!1}}function mI(t,e=[]){let n;switch(t){case"Browser":n=B0(ue());break;case"Worker":n=`${B0(ue())}-${t}`;break;default:n=t}let r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Jn}/${r}`}var $f=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){let r=s=>new Promise((o,a)=>{try{let u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(let i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function CC(t,e={}){return Ue(t,"GET","/v2/passwordPolicy",Te(t,e))}var kC=6,Gf=class{constructor(e){var n,r,i,s;let o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;let u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Wf=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new al(this),this.idTokenSubscription=new al(this),this.beforeStateQueue=new $f(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ol.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let n=await iI(this,{idToken:e}),r=await Ui._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Kt(this.app)){let o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}let r=await this.assertedPersistence.getCurrentUser(),i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i?._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&u?.user&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await il(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(Zn(this));let n=e?se(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(Zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(Zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await CC(this),n=new Gf(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ct("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){let n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){let r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let n=e&&In(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ol.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};let s=typeof n=="function"?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){let u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{let u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;let n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);let r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);let i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;let n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&hC(`Error while retrieving App Check token: ${n.error}`),n?.token}};function $i(t){return se(t)}var al=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=E0(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Sl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NC(t){Sl=t}function gI(t){return Sl.loadJS(t)}function DC(){return Sl.recaptchaEnterpriseScript}function xC(){return Sl.gapiScript}function yI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}var bC="recaptcha-enterprise",OC="NO_RECAPTCHA",Kf=class{constructor(e){this.type=bC,this.auth=$i(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_C(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let l=new zf(u);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){let u=window.grecaptcha;M0(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(l=>{o(l)}).catch(()=>{o(OC)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&M0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=DC();u.length!==0&&(u+=a),gI(u).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}};async function z0(t,e,n,r=!1){let i=new Kf(t),s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}let o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function j0(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await z0(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await z0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}function vI(t,e){let n=xt(t,"auth");if(n.isInitialized()){let i=n.getImmediate(),s=n.getOptions();if(wn(s,e??{}))return i;Et(i,"already-initialized")}return n.initialize({options:e})}function VC(t,e){let n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(In);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function _I(t,e,n){let r=$i(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!n?.disableWarnings,s=wI(e),{host:o,port:a}=LC(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MC()}function wI(t){let e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LC(t){let e=wI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:q0(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:q0(o)}}}function q0(t){if(!t)return null;let e=Number(t);return isNaN(e)?null:e}function MC(){function t(){let e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}var kr=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}};async function FC(t,e){return Ue(t,"POST","/v1/accounts:signUp",e)}async function UC(t,e){return br(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}async function BC(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}async function zC(t,e){return br(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}var wo=class t extends kr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new t(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new t(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return j0(e,n,"signInWithPassword",UC);case"emailLink":return BC(e,{email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":let r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return j0(e,r,"signUpPassword",FC);case"emailLink":return zC(e,{idToken:n,email:this._email,oobCode:this._password});default:Et(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Fi(t,e){return br(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}var jC="http://localhost",Nr=class t extends kr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yu(n,["providerId","signInMethod"]);if(!r||!i)return null;let o=new t(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){let r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){let n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){let e={requestUri:jC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}};async function qC(t,e){return Ue(t,"POST","/v1/accounts:sendVerificationCode",Te(t,e))}async function $C(t,e){return br(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e))}async function GC(t,e){let n=await br(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e));if(n.temporaryProof)throw mo(t,"account-exists-with-different-credential",n);return n}var WC={USER_NOT_FOUND:"user-not-found"};async function KC(t,e){let n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return br(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,n),WC)}var Io=class t extends kr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new t({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new t({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return $C(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return GC(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return KC(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new t({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function HC(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QC(t){let e=Li(Mi(t)).link,n=e?Li(Mi(e)).deep_link_id:null,r=Li(Mi(t)).deep_link_id;return(r?Li(Mi(r)).link:null)||r||n||e||t}var ul=class t{constructor(e){var n,r,i,s,o,a;let u=Li(Mi(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=HC((i=u.mode)!==null&&i!==void 0?i:null);D(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){let n=QC(e);try{return new t(n)}catch{return null}}};var Bi=class t{constructor(){this.providerId=t.PROVIDER_ID}static credential(e,n){return wo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){let r=ul.parseLink(n);return D(r,"argument-error"),wo._fromEmailAndCode(e,r.code,r.tenantId)}};Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var Eo=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Dr=class extends Eo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var zi=class t extends Dr{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};zi.FACEBOOK_SIGN_IN_METHOD="facebook.com";zi.PROVIDER_ID="facebook.com";var er=class t extends Dr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Nr._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return t.credential(n,r)}catch{return null}}};er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";var ji=class t extends Dr{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};ji.GITHUB_SIGN_IN_METHOD="github.com";ji.PROVIDER_ID="github.com";var qi=class t extends Dr{constructor(){super("twitter.com")}static credential(e,n){return Nr._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return t.credential(n,r)}catch{return null}}};qi.TWITTER_SIGN_IN_METHOD="twitter.com";qi.PROVIDER_ID="twitter.com";var To=class t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){let s=await Ui._fromIdTokenResponse(e,r,i),o=$0(r);return new t({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);let i=$0(r);return new t({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function $0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}var Hf=class t extends Ne{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,t.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new t(e,n,r,i)}};function II(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Hf._fromErrorAndOperation(t,s,e,r):s})}async function YC(t,e,n=!1){let r=await vo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return To._forOperation(t,"link",r)}async function JC(t,e,n=!1){let{auth:r}=t;if(Kt(r.app))return Promise.reject(Zn(r));let i="reauthenticate";try{let s=await vo(t,II(r,i,e,t),n);D(s.idToken,r,"internal-error");let o=op(s.idToken);D(o,r,"internal-error");let{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),To._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&Et(r,"user-mismatch"),s}}async function XC(t,e,n=!1){if(Kt(t.app))return Promise.reject(Zn(t));let r="signIn",i=await II(t,r,e),s=await To._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function up(t,e,n,r){return se(t).onIdTokenChanged(e,n,r)}function EI(t,e,n){return se(t).beforeAuthStateChanged(e,n)}function lp(t,e,n,r){return se(t).onAuthStateChanged(e,n,r)}function cp(t){return se(t).signOut()}function ZC(t,e){return Ue(t,"POST","/v2/accounts/mfaEnrollment:start",Te(t,e))}function ek(t,e){return Ue(t,"POST","/v2/accounts/mfaEnrollment:finalize",Te(t,e))}function tk(t,e){return Ue(t,"POST","/v2/accounts/mfaEnrollment:start",Te(t,e))}function nk(t,e){return Ue(t,"POST","/v2/accounts/mfaEnrollment:finalize",Te(t,e))}var ll="__sak";var cl=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){let n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};function rk(){let t=ue();return ap(t)||Tl(t)}var ik=1e3,sk=10,hl=class extends cl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rk()&&RC(),this.fallbackToPolling=pI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}let r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}let i=()=>{let o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);PC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,sk):i()}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ik)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){let n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};hl.type="LOCAL";var TI=hl;var dl=class extends cl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};dl.type="SESSION";var hp=dl;function ok(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}var fl=class t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;let r=new t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let a=Array.from(o).map(async l=>l(n.origin,s)),u=await ok(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};fl.receivers=[];function dp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}var Qf=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{let l=dp("",20);i.port1.start();let c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){let d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function Yt(){return window}function ak(t){Yt().location.href=t}function SI(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function uk(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lk(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ck(){return SI()?self:null}var AI="firebaseLocalStorageDb",hk=1,pl="firebaseLocalStorage",PI="fbase_key",xr=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function Al(t,e){return t.transaction([pl],e?"readwrite":"readonly").objectStore(pl)}function dk(){let t=indexedDB.deleteDatabase(AI);return new xr(t).toPromise()}function Yf(){let t=indexedDB.open(AI,hk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{let r=t.result;try{r.createObjectStore(pl,{keyPath:PI})}catch(i){n(i)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(pl)?e(r):(r.close(),await dk(),e(await Yf()))})})}async function G0(t,e,n){let r=Al(t,!0).put({[PI]:e,value:n});return new xr(r).toPromise()}async function fk(t,e){let n=Al(t,!1).get(e),r=await new xr(n).toPromise();return r===void 0?null:r.value}function W0(t,e){let n=Al(t,!0).delete(e);return new xr(n).toPromise()}var pk=800,mk=3,ml=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(e){let n=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(n++>mk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return SI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fl._getInstance(ck()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uk(),!this.activeServiceWorker)return;this.sender=new Qf(this.activeServiceWorker);let r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Yf();return await G0(e,ll,"1"),await W0(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>G0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){let n=await this._withRetries(r=>fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>W0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Al(i,!1).getAll();return new xr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let n=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};ml.type="LOCAL";var RI=ml;function gk(t,e){return Ue(t,"POST","/v2/accounts/mfaSignIn:start",Te(t,e))}function yk(t,e){return Ue(t,"POST","/v2/accounts/mfaSignIn:finalize",Te(t,e))}function vk(t,e){return Ue(t,"POST","/v2/accounts/mfaSignIn:finalize",Te(t,e))}var CV=yI("rcb"),kV=new Cr(3e4,6e4);var _k="recaptcha";async function wk(t,e,n){var r;let i=await n.verify();try{D(typeof i=="string",t,"argument-error"),D(n.type===_k,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){let o=s.session;if("phoneNumber"in s)return D(o.type==="enroll",t,"internal-error"),(await ZC(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{D(o.type==="signin",t,"internal-error");let a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return D(a,t,"missing-multi-factor-info"),(await gk(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{let{sessionInfo:o}=await qC(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}var So=class t{constructor(e){this.providerId=t.PROVIDER_ID,this.auth=$i(e)}verifyPhoneNumber(e,n){return wk(this.auth,e,se(n))}static credential(e,n){return Io._fromVerification(e,n)}static credentialFromResult(e){let n=e;return t.credentialFromTaggedObject(n)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:n,temporaryProof:r}=e;return n&&r?Io._fromTokenResponse(n,r):null}};So.PROVIDER_ID="phone";So.PHONE_SIGN_IN_METHOD="phone";function CI(t,e){return e?In(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}var Ao=class extends kr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function Ik(t){return XC(t.auth,new Ao(t),t.bypassAuthState)}function Ek(t){let{auth:e,user:n}=t;return D(n,e,"internal-error"),JC(n,new Ao(t),t.bypassAuthState)}async function Tk(t){let{auth:e,user:n}=t;return D(n,e,"internal-error"),YC(n,new Ao(t),t.bypassAuthState)}var gl=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ik;case"linkViaPopup":case"linkViaRedirect":return Tk;case"reauthViaPopup":case"reauthViaRedirect":return Ek;default:Et(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var Sk=new Cr(2e3,1e4);var Jf=class t extends gl{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");let e=dp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}pollUserCancellation(){let e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Sk.get())};e()}};Jf.currentPopupAction=null;var Ak="pendingRedirect",el=new Map,Xf=class extends gl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=el.get(this.auth._key());if(!e){try{let r=await Pk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}el.set(this.auth._key(),e)}return this.bypassAuthState||el.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function Pk(t,e){let n=NI(e),r=kI(t);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}async function Rk(t,e){return kI(t)._set(NI(e),"true")}function Ck(t,e){el.set(t._key(),e)}function kI(t){return In(t._redirectPersistence)}function NI(t){return Zu(Ak,t.config.apiKey,t.name)}function fp(t,e,n){return kk(t,e,n)}async function kk(t,e,n){if(Kt(t.app))return Promise.reject(Zn(t));let r=$i(t);dC(t,e,Eo),await r._initializationPromise;let i=CI(r,n);return await Rk(i,r),i._openRedirect(r,e,"signInViaRedirect")}async function Nk(t,e,n=!1){if(Kt(t.app))return Promise.reject(Zn(t));let r=$i(t),i=CI(r,e),o=await new Xf(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var Dk=10*60*1e3,Zf=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DI(e)){let i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Qt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){let r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Dk&&this.cachedEventUids.clear(),this.cachedEventUids.has(K0(e))}saveEventToCache(e){this.cachedEventUids.add(K0(e)),this.lastProcessedEventTime=Date.now()}};function K0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DI({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function xk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DI(t);default:return!1}}async function bk(t,e={}){return Ue(t,"GET","/v1/projects",e)}var Ok=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vk=/^https?/;async function Lk(t){if(t.config.emulator)return;let{authorizedDomains:e}=await bk(t);for(let n of e)try{if(Mk(n))return}catch{}Et(t,"unauthorized-domain")}function Mk(t){let e=Uf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){let o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Vk.test(n))return!1;if(Ok.test(t))return r===t;let i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Fk=new Cr(3e4,6e4);function H0(){let t=Yt().___jsl;if(t?.H){for(let e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Uk(t){return new Promise((e,n)=>{var r,i,s;function o(){H0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H0(),n(Qt(t,"network-request-failed"))},timeout:Fk.get()})}if(!((i=(r=Yt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Yt().gapi)===null||s===void 0)&&s.load)o();else{let a=yI("iframefcb");return Yt()[a]=()=>{gapi.load?o():n(Qt(t,"network-request-failed"))},gI(`${xC()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw tl=null,e})}var tl=null;function Bk(t){return tl=tl||Uk(t),tl}var zk=new Cr(5e3,15e3),jk="__/auth/iframe",qk="emulator/auth/iframe",$k={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Gk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wk(t){let e=t.config;D(e.authDomain,t,"auth-domain-config-required");let n=e.emulator?sp(e,qk):`https://${t.config.authDomain}/${jk}`,r={apiKey:e.apiKey,appName:t.name,v:Jn},i=Gk.get(t.config.apiHost);i&&(r.eid=i);let s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vi(r).slice(1)}`}async function Kk(t){let e=await Bk(t),n=Yt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:Wk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$k,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=Qt(t,"network-request-failed"),a=Yt().setTimeout(()=>{s(o)},zk.get());function u(){Yt().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}var Hk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qk=500,Yk=600,Jk="_blank",Xk="http://localhost",yl=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Zk(t,e,n,r=Qk,i=Yk){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",u=Object.assign(Object.assign({},Hk),{width:r.toString(),height:i.toString(),top:s,left:o}),l=ue().toLowerCase();n&&(a=lI(l)?Jk:n),uI(l)&&(e=e||Xk,u.scrollbars="yes");let c=Object.entries(u).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(AC(l)&&a!=="_self")return eN(e||"",a),new yl(null);let h=window.open(e||"",a,c);D(h,t,"popup-blocked");try{h.focus()}catch{}return new yl(h)}function eN(t,e){let n=document.createElement("a");n.href=t,n.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var tN="__/auth/handler",nN="emulator/auth/handler",rN=encodeURIComponent("fac");async function Q0(t,e,n,r,i,s){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");let o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Jn,eventId:i};if(e instanceof Eo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",I0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof Dr){let c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);let a=o;for(let c of Object.keys(a))a[c]===void 0&&delete a[c];let u=await t._getAppCheckToken(),l=u?`#${rN}=${encodeURIComponent(u)}`:"";return`${iN(t)}?${Vi(a).slice(1)}${l}`}function iN({config:t}){return t.emulator?sp(t,nN):`https://${t.authDomain}/${tN}`}var Ff="webStorageSupport",ep=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=hp,this._completeRedirectFn=Nk,this._overrideRedirectResult=Ck}async _openPopup(e,n,r,i){var s;En((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");let o=await Q0(e,n,r,Uf(),i);return Zk(e,o,dp())}async _openRedirect(e,n,r,i){await this._originValidation(e);let s=await Q0(e,n,r,Uf(),i);return ak(s),new Promise(()=>{})}_initialize(e){let n=e._key();if(this.eventManagers[n]){let{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(En(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){let n=await Kk(e),r=new Zf(e);return n.register("authEvent",i=>(D(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ff,{type:Ff},i=>{var s;let o=(s=i?.[0])===null||s===void 0?void 0:s[Ff];o!==void 0&&n(!!o),Et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pI()||ap()||Tl()}},xI=ep,vl=class{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Ht("unexpected MultiFactorSessionType")}}},tp=class t extends vl{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t(e)}_finalizeEnroll(e,n,r){return ek(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return yk(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},_l=class{constructor(){}static assertion(e){return tp._fromCredential(e)}};_l.FACTOR_ID="phone";var wl=class{static assertionForEnrollment(e,n){return Il._fromSecret(e,n)}static assertionForSignIn(e,n){return Il._fromEnrollmentId(e,n)}static async generateSecret(e){var n;let r=e;D(typeof((n=r.user)===null||n===void 0?void 0:n.auth)<"u","internal-error");let i=await tk(r.user.auth,{idToken:r.credential,totpEnrollmentInfo:{}});return El._fromStartTotpMfaEnrollmentResponse(i,r.user.auth)}};wl.FACTOR_ID="totp";var Il=class t extends vl{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new t(n,void 0,e)}static _fromEnrollmentId(e,n){return new t(n,e)}async _finalizeEnroll(e,n,r){return D(typeof this.secret<"u",e,"argument-error"),nk(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){D(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return vk(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},El=class t{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){var r;let i=!1;return(Ju(e)||Ju(n))&&(i=!0),i&&(Ju(e)&&(e=((r=this.auth.currentUser)===null||r===void 0?void 0:r.email)||"unknownuser"),Ju(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Ju(t){return typeof t>"u"||t?.length===0}var Y0="@firebase/auth",J0="1.7.0";var np=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function sN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oN(t){nt(new Ee("auth",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mI(t)},l=new Wf(r,i,s,u);return VC(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),nt(new Ee("auth-internal",e=>{let n=$i(e.getProvider("auth").getImmediate());return(r=>new np(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(Y0,J0,sN(t)),De(Y0,J0,"esm2017")}var aN=5*60,uN=wf("authIdTokenMaxAge")||aN,X0=null,lN=t=>async e=>{let n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uN)return;let i=n?.token;X0!==i&&(X0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pp(t=Rr()){let e=xt(t,"auth");if(e.isInitialized())return e.getImmediate();let n=vI(t,{popupRedirectResolver:xI,persistence:[RI,TI,hp]}),r=wf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=lN(s.toString());EI(n,o,()=>o(n.currentUser)),up(n,a=>o(a))}}let i=vf("auth");return i&&_I(n,`http://${i}`),n}function cN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NC({loadJS(t){return new Promise((e,n)=>{let r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{let s=Qt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oN("Browser");var TN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ot={},S,Lp=Lp||{},V=TN||self;function Ul(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Uo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SN(t){return Object.prototype.hasOwnProperty.call(t,mp)&&t[mp]||(t[mp]=++AN)}var mp="closure_uid_"+(1e9*Math.random()>>>0),AN=0;function PN(t,e,n){return t.call.apply(t.bind,arguments)}function RN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Be(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Be=PN:Be=RN,Be.apply(null,arguments)}function Pl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ae(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function tr(){this.s=this.s,this.o=this.o}var CN=0;tr.prototype.s=!1;tr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),CN!=0)&&SN(this)};tr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var GI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Mp(t){let e=t.length;if(0<e){let n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function bI(t,e){for(let n=1;n<arguments.length;n++){let r=arguments[n];if(Ul(r)){let i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var kN=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{let n=()=>{};V.addEventListener("test",n,e),V.removeEventListener("test",n,e)}catch{}return t}();function Do(t){return/^[\s\xa0]*$/.test(t)}function Bl(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return Bl().indexOf(t)!=-1}function Fp(t){return Fp[" "](t),t}Fp[" "]=function(){};function NN(t,e){var n=vD;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var DN=Jt("Opera"),Hi=Jt("Trident")||Jt("MSIE"),WI=Jt("Edge"),wp=WI||Hi,KI=Jt("Gecko")&&!(Bl().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),xN=Bl().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function HI(){var t=V.document;return t?t.documentMode:void 0}var Ip;e:{if(Rl="",Cl=function(){var t=Bl();if(KI)return/rv:([^\);]+)(\)|;)/.exec(t);if(WI)return/Edge\/([\d\.]+)/.exec(t);if(Hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(xN)return/WebKit\/(\S+)/.exec(t);if(DN)return/(?:Version)[ \/]?(\S+)/.exec(t)}(),Cl&&(Rl=Cl?Cl[1]:""),Hi&&(kl=HI(),kl!=null&&kl>parseFloat(Rl))){Ip=String(kl);break e}Ip=Rl}var Rl,Cl,kl,Ep;V.document&&Hi?(gp=HI(),Ep=gp||parseInt(Ip,10)||void 0):Ep=void 0;var gp,bN=Ep;function xo(t,e){if(ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(KI){e:{try{Fp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ON[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xo.$.h.call(this)}}Ae(xo,ze);var ON={2:"touch",3:"pen",4:"mouse"};xo.prototype.h=function(){xo.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Bo="closure_listenable_"+(1e6*Math.random()|0),VN=0;function LN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++VN,this.fa=this.ia=!1}function zl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Up(t,e,n){for(let r in t)e.call(n,t[r],r,t)}function MN(t,e){for(let n in t)e.call(void 0,t[n],n,t)}function QI(t){let e={};for(let n in t)e[n]=t[n];return e}var OI="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function YI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<OI.length;s++)n=OI[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jl(t){this.src=t,this.g={},this.h=0}jl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Sp(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new LN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Tp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=GI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Sp(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Bp="closure_lm_"+(1e6*Math.random()|0),yp={};function JI(t,e,n,r,i){if(r&&r.once)return ZI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)JI(t,e[s],n,r,i);return null}return n=qp(n),t&&t[Bo]?t.O(e,n,Uo(r)?!!r.capture:!!r,i):XI(t,e,n,!1,r,i)}function XI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Uo(i)?!!i.capture:!!i,a=jp(t);if(a||(t[Bp]=a=new jl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)kN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(tE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FN(){function t(n){return e.call(t.src,t.listener,n)}let e=UN;return t}function ZI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ZI(t,e[s],n,r,i);return null}return n=qp(n),t&&t[Bo]?t.P(e,n,Uo(r)?!!r.capture:!!r,i):XI(t,e,n,!0,r,i)}function eE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)eE(t,e[s],n,r,i);else r=Uo(r)?!!r.capture:!!r,n=qp(n),t&&t[Bo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Sp(s,n,r,i),-1<n&&(zl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=jp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Sp(e,n,r,i)),(n=-1<t?e[t]:null)&&zp(n))}function zp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Bo])Tp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(tE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=jp(e))?(Tp(n,t),n.h==0&&(n.src=null,e[Bp]=null)):zl(t)}}}function tE(t){return t in yp?yp[t]:yp[t]="on"+t}function UN(t,e){if(t.fa)t=!0;else{e=new xo(e,this);var n=t.listener,r=t.la||t.src;t.ia&&zp(t),t=n.call(r,e)}return t}function jp(t){return t=t[Bp],t instanceof jl?t:null}var vp="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(t){return typeof t=="function"?t:(t[vp]||(t[vp]=function(e){return t.handleEvent(e)}),t[vp])}function Se(){tr.call(this),this.i=new jl(this),this.S=this,this.J=null}Ae(Se,tr);Se.prototype[Bo]=!0;Se.prototype.removeEventListener=function(t,e,n,r){eE(this,t,e,n,r)};function be(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ze(e,t);else if(e instanceof ze)e.target=e.target||t;else{var i=e;e=new ze(r,t),YI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Nl(o,r,!0,e)&&i}if(o=e.g=t,i=Nl(o,r,!0,e)&&i,i=Nl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Nl(o,r,!1,e)&&i}Se.prototype.N=function(){if(Se.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)zl(n[r]);delete t.g[e],t.h--}}this.J=null};Se.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Se.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,u=o.la||o.src;o.ia&&Tp(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var $p=V.JSON.stringify,Ap=class{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}};function BN(){var t=Gp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Pp=class{constructor(){this.h=this.g=null}add(e,n){let r=nE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}},nE=new Ap(()=>new Rp,t=>t.reset()),Rp=class{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}};function zN(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function jN(t){V.setTimeout(()=>{throw t},0)}var bo,Oo=!1,Gp=new Pp,rE=()=>{let t=V.Promise.resolve(void 0);bo=()=>{t.then(qN)}},qN=()=>{for(var t;t=BN();){try{t.h.call(t.g)}catch(n){jN(n)}var e=nE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oo=!1};function ql(t,e){Se.call(this),this.h=t||1,this.g=e||V,this.j=Be(this.qb,this),this.l=Date.now()}Ae(ql,Se);S=ql.prototype;S.ga=!1;S.T=null;S.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(Wp(this),this.start()))}};S.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Wp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}S.N=function(){ql.$.N.call(this),Wp(this),delete this.g};function Kp(t,e,n){if(typeof t=="function")n&&(t=Be(t,n));else if(t&&typeof t.handleEvent=="function")t=Be(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function iE(t){t.g=Kp(()=>{t.g=null,t.i&&(t.i=!1,iE(t))},t.j);let e=t.h;t.h=null,t.m.apply(null,e)}var Cp=class extends tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:iE(this)}N(){super.N(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Vo(t){tr.call(this),this.h=t,this.g={}}Ae(Vo,tr);var VI=[];function sE(t,e,n,r){Array.isArray(n)||(n&&(VI[0]=n.toString()),n=VI);for(var i=0;i<n.length;i++){var s=JI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function oE(t){Up(t.g,function(e,n){this.g.hasOwnProperty(n)&&zp(e)},t),t.g={}}Vo.prototype.N=function(){Vo.$.N.call(this),oE(this)};Vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $l(){this.g=!0}$l.prototype.Ea=function(){this.g=!1};function $N(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function GN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+KN(t,n)+(r?" "+r:"")})}function WN(t,e){t.info(function(){return"TIMEOUT: "+e})}$l.prototype.info=function(){};function KN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $p(n)}catch{return e}}var Mr={},LI=null;function Gl(){return LI=LI||new Se}Mr.Ta="serverreachability";function aE(t){ze.call(this,Mr.Ta,t)}Ae(aE,ze);function Lo(t){let e=Gl();be(e,new aE(e))}Mr.STAT_EVENT="statevent";function uE(t,e){ze.call(this,Mr.STAT_EVENT,t),this.stat=e}Ae(uE,ze);function He(t){let e=Gl();be(e,new uE(e,t))}Mr.Ua="timingevent";function lE(t,e){ze.call(this,Mr.Ua,t),this.size=e}Ae(lE,ze);function zo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var Wl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hp(){}Hp.prototype.h=null;function MI(t){return t.h||(t.h=t.i())}function hE(){}var jo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Qp(){ze.call(this,"d")}Ae(Qp,ze);function Yp(){ze.call(this,"c")}Ae(Yp,ze);var kp;function Kl(){}Ae(Kl,Hp);Kl.prototype.g=function(){return new XMLHttpRequest};Kl.prototype.i=function(){return{}};kp=new Kl;function qo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Vo(this),this.P=HN,t=wp?125:void 0,this.V=new ql(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dE}function dE(){this.i=null,this.g="",this.h=!1}var HN=45e3,fE={},Np={};S=qo.prototype;S.setTimeout=function(t){this.P=t};function Dp(t,e,n){t.L=1,t.A=Ql(Sn(e)),t.u=n,t.S=!0,pE(t,null)}function pE(t,e){t.G=Date.now(),$o(t),t.B=Sn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),EE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new dE,t.g=qE(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Cp(Be(t.Pa,t,t.g),t.O)),sE(t.U,t.g,"readystatechange",t.nb),e=t.I?QI(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Lo(),$N(t.j,t.v,t.B,t.m,t.W,t.u)}S.nb=function(t){t=t.target;let e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};S.Pa=function(t){try{if(t==this.g)e:{let c=Xt(this.g);var e=this.g.Ia();let h=this.g.da();if(!(3>c)&&(c!=3||wp||this.g&&(this.h.h||this.g.ja()||zI(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Lo(3):Lo(2)),Hl(this);var n=this.g.da();this.ca=n;t:if(mE(this)){var r=zI(this.g);t="";var i=r.length,s=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),No(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,GN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Do(a)){var l=a;break t}}l=null}if(n=l)Wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xp(this,n);else{this.i=!1,this.s=3,He(12),Or(this),No(this);break e}}this.S?(gE(this,c,o),wp&&this.i&&c==3&&(sE(this.U,this.V,"tick",this.mb),this.V.start())):(Wi(this.j,this.m,o,null),xp(this,o)),c==4&&Or(this),this.i&&!this.J&&(c==4?UE(this.l,this):(this.i=!1,$o(this)))}else mD(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,He(12)):(this.s=0,He(13)),Or(this),No(this)}}}catch{}finally{}};function mE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=QN(t,n),i==Np){e==4&&(t.s=4,He(14),r=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==fE){t.s=4,He(15),Wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wi(t.j,t.m,i,null),xp(t,i);mE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,He(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nm(e),e.M=!0,He(11))):(Wi(t.j,t.m,n,"[Invalid Chunked Response]"),Or(t),No(t))}S.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.o<e.length&&(Hl(this),gE(this,t,e),this.i&&t!=4&&$o(this))}};function QN(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Np:(n=Number(e.substring(n,r)),isNaN(n)?fE:(r+=1,r+n>e.length?Np:(e=e.slice(r,r+n),t.o=r+n,e)))}S.cancel=function(){this.J=!0,Or(this)};function $o(t){t.Y=Date.now()+t.P,yE(t,t.P)}function yE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=zo(Be(t.lb,t),e)}function Hl(t){t.C&&(V.clearTimeout(t.C),t.C=null)}S.lb=function(){this.C=null;let t=Date.now();0<=t-this.Y?(WN(this.j,this.B),this.L!=2&&(Lo(),He(17)),Or(this),this.s=2,No(this)):yE(this,this.Y-t)};function No(t){t.l.H==0||t.J||UE(t.l,t)}function Or(t){Hl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Wp(t.V),oE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function xp(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||bp(n.i,t))){if(!t.K&&bp(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Vl(n),Xl(n);else break e;tm(n),He(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=zo(Be(n.ib,n),6e3));if(1>=AE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vr(n,11)}else if((t.K||n.g==t)&&Vl(n),!Do(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];let c=l[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));let h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));let d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let m=t.g;if(m){let y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Jp(s,s.h),s.h=null))}if(r.F){let _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Z(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=jE(r,r.J?r.pa:null,r.Y),o.K){PE(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(Hl(a),$o(a)),r.g=o}else ME(r);0<n.j.length&&Zl(n)}else l[0]!="stop"&&l[0]!="close"||Vr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Vr(n,7):em(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Lo(4)}catch{}}function YN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ul(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function JN(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ul(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(let r in t)e[n++]=r;return e}}}function vE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ul(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JN(t),r=YN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var _E=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Lr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Lr){this.h=t.h,bl(this,t.j),this.s=t.s,this.g=t.g,Ol(this,t.m),this.l=t.l;var e=t.i,n=new Mo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),FI(this,n),this.o=t.o}else t&&(e=String(t).match(_E))?(this.h=!1,bl(this,e[1]||"",!0),this.s=Co(e[2]||""),this.g=Co(e[3]||"",!0),Ol(this,e[4]),this.l=Co(e[5]||"",!0),FI(this,e[6]||"",!0),this.o=Co(e[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}Lr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ko(e,UI,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ko(e,UI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ko(n,n.charAt(0)=="/"?tD:eD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ko(n,rD)),t.join("")};function Sn(t){return new Lr(t)}function bl(t,e,n){t.j=n?Co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ol(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function FI(t,e,n){e instanceof Mo?(t.i=e,iD(t.i,t.h)):(n||(e=ko(e,nD)),t.i=new Mo(e,t.h))}function Z(t,e,n){t.i.set(e,n)}function Ql(t){return Z(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ko(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ZN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ZN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var UI=/[#\/\?@]/g,eD=/[#\?:]/g,tD=/[#\?]/g,nD=/[#\?@]/g,rD=/#/g;function Mo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function nr(t){t.g||(t.g=new Map,t.h=0,t.i&&XN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}S=Mo.prototype;S.add=function(t,e){nr(this),this.i=null,t=Qi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function wE(t,e){nr(t),e=Qi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function IE(t,e){return nr(t),e=Qi(t,e),t.g.has(e)}S.forEach=function(t,e){nr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};S.ta=function(){nr(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){let i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};S.Z=function(t){nr(this);let e=[];if(typeof t=="string")IE(this,t)&&(e=e.concat(this.g.get(Qi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};S.set=function(t,e){return nr(this),this.i=null,t=Qi(this,t),IE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};S.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function EE(t,e,n){wE(t,e),0<n.length&&(t.i=null,t.g.set(Qi(t,e),Mp(n)),t.h+=n.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];let s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Qi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function iD(t,e){e&&!t.j&&(nr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(wE(this,r),EE(this,i,n))},t)),t.j=e}var sD=class{constructor(t,e){this.g=t,this.map=e}};function TE(t){this.l=t||oD,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ka&&V.g.Ka()&&V.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var oD=10;function SE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function AE(t){return t.h?1:t.g?t.g.size:0}function bp(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Jp(t,e){t.g?t.g.add(e):t.h=e}function PE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}TE.prototype.cancel=function(){if(this.i=RE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(let t of this.g.values())t.cancel();this.g.clear()}};function RE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return Mp(t.i)}var aD=class{stringify(t){return V.JSON.stringify(t,void 0)}parse(t){return V.JSON.parse(t,void 0)}};function uD(){this.g=new aD}function lD(t,e,n){let r=n||"";try{vE(t,function(i,s){let o=i;Uo(i)&&(o=$p(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cD(t,e){let n=new $l;if(V.Image){let r=new Image;r.onload=Pl(Dl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pl(Dl,n,r,"TestLoadImage: error",!1,e),r.onabort=Pl(Dl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pl(Dl,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Dl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Go(t){this.l=t.ec||null,this.j=t.ob||!1}Ae(Go,Hp);Go.prototype.g=function(){return new Yl(this.l,this.j)};Go.prototype.i=function(t){return function(){return t}}({});function Yl(t,e){Se.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Xp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ae(Yl,Se);var Xp=0;S=Yl.prototype;S.open=function(t,e){if(this.readyState!=Xp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fo(this)};S.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||V).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wo(this)),this.readyState=Xp};S.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fo(this)),this.g&&(this.readyState=3,Fo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;CE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function CE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}S.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wo(this):Fo(this),this.readyState==3&&CE(this)}};S.Za=function(t){this.g&&(this.response=this.responseText=t,Wo(this))};S.Ya=function(t){this.g&&(this.response=t,Wo(this))};S.ka=function(){this.g&&Wo(this)};function Wo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fo(t)}S.setRequestHeader=function(t,e){this.v.append(t,e)};S.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var hD=V.JSON.parse;function le(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=kE,this.L=this.M=!1}Ae(le,Se);var kE="",dD=/^https?$/i,fD=["POST","PUT"];S=le.prototype;S.Oa=function(t){this.M=t};S.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():kp.g(),this.C=this.u?MI(this.u):MI(kp),this.g.onreadystatechange=Be(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){BI(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(let s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=GI(fD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(let[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xE(this),0<this.B&&((this.L=pD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Be(this.ua,this)):this.A=Kp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){BI(this,s)}};function pD(t){return Hi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}S.ua=function(){typeof Lp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))};function BI(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NE(t),Jl(t)}function NE(t){t.F||(t.F=!0,be(t,"complete"),be(t,"error"))}S.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,be(this,"complete"),be(this,"abort"),Jl(this))};S.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jl(this,!0)),le.$.N.call(this)};S.La=function(){this.s||(this.G||this.v||this.l?DE(this):this.kb())};S.kb=function(){DE(this)};function DE(t){if(t.h&&typeof Lp<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)Kp(t.La,0,t);else if(be(t,"readystatechange"),Xt(t)==4){t.h=!1;try{let o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(_E)[1]||null;!i&&V.self&&V.self.location&&(i=V.self.location.protocol.slice(0,-1)),r=!dD.test(i?i.toLowerCase():"")}n=r}if(n)be(t,"complete"),be(t,"success");else{t.m=6;try{var s=2<Xt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",NE(t)}}finally{Jl(t)}}}}function Jl(t,e){if(t.g){xE(t);let n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||be(t,"ready");try{n.onreadystatechange=r}catch{}}}function xE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}S.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}S.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};S.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),hD(e)}};function zI(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case kE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mD(t){let e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Do(t[r]))continue;var n=zN(t[r]);let i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();let s=e[i]||[];e[i]=s,s.push(n)}MN(e,function(r){return r.join(", ")})}S.Ia=function(){return this.m};S.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bE(t){let e="";return Up(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=bE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Z(t,e,n))}function Po(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function OE(t){this.Ga=0,this.j=[],this.l=new $l,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Po("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Po("baseRetryDelayMs",5e3,t),this.hb=Po("retryDelaySeedMs",1e4,t),this.eb=Po("forwardChannelMaxRetries",2,t),this.xa=Po("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new TE(t&&t.concurrentRequestLimit),this.Ja=new uD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}S=OE.prototype;S.ra=8;S.H=1;function em(t){if(VE(t),t.H==3){var e=t.W++,n=Sn(t.I);if(Z(n,"SID",t.K),Z(n,"RID",e),Z(n,"TYPE","terminate"),Ko(t,n),e=new qo(t,t.l,e),e.L=2,e.A=Ql(Sn(n)),n=!1,V.navigator&&V.navigator.sendBeacon)try{n=V.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&V.Image&&(new Image().src=e.A,n=!0),n||(e.g=qE(e.l,null),e.g.ha(e.A)),e.G=Date.now(),$o(e)}zE(t)}function Xl(t){t.g&&(nm(t),t.g.cancel(),t.g=null)}function VE(t){Xl(t),t.u&&(V.clearTimeout(t.u),t.u=null),Vl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Zl(t){if(!SE(t.i)&&!t.m){t.m=!0;var e=t.Na;bo||rE(),Oo||(bo(),Oo=!0),Gp.add(e,t),t.C=0}}function gD(t,e){return AE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zo(Be(t.Na,t,e),BE(t,t.C)),t.C++,!0)}S.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let i=new qo(this,this.l,t),s=this.s;if(this.U&&(s?(s=QI(s),YI(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=LE(this,i,e),n=Sn(this.I),Z(n,"RID",t),Z(n,"CVER",22),this.F&&Z(n,"X-HTTP-Session-Id",this.F),Ko(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(bE(s)))+"&"+e:this.o&&Zp(n,this.o,s)),Jp(this.i,i),this.bb&&Z(n,"TYPE","init"),this.P?(Z(n,"$req",e),Z(n,"SID","null"),i.aa=!0,Dp(i,n,null)):Dp(i,n,e),this.H=2}}else this.H==3&&(t?jI(this,t):this.j.length==0||SE(this.i)||jI(this))};function jI(t,e){var n;e?n=e.m:n=t.W++;let r=Sn(t.I);Z(r,"SID",t.K),Z(r,"RID",n),Z(r,"AID",t.V),Ko(t,r),t.o&&t.s&&Zp(r,t.o,t.s),n=new qo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=LE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Jp(t.i,n),Dp(n,r,e)}function Ko(t,e){t.na&&Up(t.na,function(n,r){Z(e,r,n)}),t.h&&vE({},function(n,r){Z(e,r,n)})}function LE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Be(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){let o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].g,c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{lD(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ME(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bo||rE(),Oo||(bo(),Oo=!0),Gp.add(e,t),t.A=0}}function tm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zo(Be(t.Ma,t),BE(t,t.A)),t.A++,!0)}S.Ma=function(){if(this.u=null,FE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zo(Be(this.jb,this),t)}};S.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,He(10),Xl(this),FE(this))};function nm(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function FE(t){t.g=new qo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Sn(t.wa);Z(e,"RID","rpc"),Z(e,"SID",t.K),Z(e,"AID",t.V),Z(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Z(e,"TO",t.qa),Z(e,"TYPE","xmlhttp"),Ko(t,e),t.o&&t.s&&Zp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ql(Sn(e)),n.u=null,n.S=!0,pE(n,t)}S.ib=function(){this.v!=null&&(this.v=null,Xl(this),tm(this),He(19))};function Vl(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function UE(t,e){var n=null;if(t.g==e){Vl(t),nm(t),t.g=null;var r=2}else if(bp(t.i,e))n=e.F,PE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Gl(),be(r,new lE(r,n)),Zl(t)}else ME(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&gD(t,e)||r==2&&tm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vr(t,5);break;case 4:Vr(t,10);break;case 3:Vr(t,6);break;default:Vr(t,2)}}}function BE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Be(t.pb,t);n||(n=new Lr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||bl(n,"https"),Ql(n)),cD(n.toString(),r)}else He(2);t.H=0,t.h&&t.h.za(e),zE(t),VE(t)}S.pb=function(t){t?(this.l.info("Successfully pinged google.com"),He(2)):(this.l.info("Failed to ping google.com"),He(1))};function zE(t){if(t.H=0,t.ma=[],t.h){let e=RE(t.i);(e.length!=0||t.j.length!=0)&&(bI(t.ma,e),bI(t.ma,t.j),t.i.i.length=0,Mp(t.j),t.j.length=0),t.h.ya()}}function jE(t,e,n){var r=n instanceof Lr?Sn(n):new Lr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ol(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Lr(null);r&&bl(s,r),e&&(s.g=e),i&&Ol(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Z(r,n,e),Z(r,"VER",t.ra),Ko(t,r),r}function qE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new le(new Go({ob:n})):new le(t.va),e.Oa(t.J),e}S.isActive=function(){return!!this.h&&this.h.isActive(this)};function $E(){}S=$E.prototype;S.Ba=function(){};S.Aa=function(){};S.za=function(){};S.ya=function(){};S.isActive=function(){return!0};S.Va=function(){};function Ll(){if(Hi&&!(10<=Number(bN)))throw Error("Environmental error: no available transport.")}Ll.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Se.call(this),this.g=new OE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Do(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Do(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Yi(this)}Ae(ht,Se);ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;He(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=jE(t,null,t.Y),Zl(t)};ht.prototype.close=function(){em(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=$p(t),t=n);e.j.push(new sD(e.fb++,t)),e.H==3&&Zl(e)};ht.prototype.N=function(){this.g.h=null,delete this.j,em(this.g),delete this.g,ht.$.N.call(this)};function GE(t){Qp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(let n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ae(GE,Qp);function WE(){Yp.call(this),this.status=1}Ae(WE,Yp);function Yi(t){this.g=t}Ae(Yi,$E);Yi.prototype.Ba=function(){be(this.g,"a")};Yi.prototype.Aa=function(t){be(this.g,new GE(t))};Yi.prototype.za=function(t){be(this.g,new WE)};Yi.prototype.ya=function(){be(this.g,"b")};function yD(){this.blockSize=-1}function bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ae(bt,yD);bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _p(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)_p(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){_p(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){_p(this,r),i=0;break}}this.h=i,this.i+=e};bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function K(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var vD={};function rm(t){return-128<=t&&128>t?NN(t,function(e){return new K([e|0],0>e?-1:0)}):new K([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return Ki;if(0>t)return xe(Zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Op;return new K(e,0)}function KE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return xe(KE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),r=Ki,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Zt(Math.pow(e,s)),r=r.R(s).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var Op=4294967296,Ki=rm(0),Vp=rm(1),qI=rm(16777216);S=K.prototype;S.ea=function(){if(Tt(this))return-xe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Op+r)*e,e*=Op}return t};S.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Tn(this))return"0";if(Tt(this))return"-"+xe(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,r="";;){var i=Fl(n,e).g;n=Ml(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Tn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};S.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Tn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Tt(t){return t.h==-1}S.X=function(t){return t=Ml(this,t),Tt(t)?-1:Tn(t)?0:1};function xe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new K(n,~t.h).add(Vp)}S.abs=function(){return Tt(this)?xe(this):this};S.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new K(n,n[n.length-1]&-2147483648?-1:0)};function Ml(t,e){return t.add(xe(e))}S.R=function(t){if(Tn(this)||Tn(t))return Ki;if(Tt(this))return Tt(t)?xe(this).R(xe(t)):xe(xe(this).R(t));if(Tt(t))return xe(this.R(xe(t)));if(0>this.X(qI)&&0>t.X(qI))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,u=t.D(i)&65535;n[2*r+2*i]+=o*u,xl(n,2*r+2*i),n[2*r+2*i+1]+=s*u,xl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,xl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,xl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new K(n,0)};function xl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ro(t,e){this.g=t,this.h=e}function Fl(t,e){if(Tn(e))throw Error("division by zero");if(Tn(t))return new Ro(Ki,Ki);if(Tt(t))return e=Fl(xe(t),e),new Ro(xe(e.g),xe(e.h));if(Tt(e))return e=Fl(t,xe(e)),new Ro(xe(e.g),e.h);if(30<t.g.length){if(Tt(t)||Tt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Vp,r=e;0>=r.X(t);)n=$I(n),r=$I(r);var i=Gi(n,1),s=Gi(r,1);for(r=Gi(r,2),n=Gi(n,2);!Tn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Gi(r,1),n=Gi(n,1)}return e=Ml(t,i.R(e)),new Ro(i,e)}for(i=Ki;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(n),o=s.R(e);Tt(o)||0<o.X(t);)n-=r,s=Zt(n),o=s.R(e);Tn(s)&&(s=Vp),i=i.add(s),t=Ml(t,o)}return new Ro(i,t)}S.gb=function(t){return Fl(this,t).h};S.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new K(n,this.h&t.h)};S.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new K(n,this.h|t.h)};S.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new K(n,this.h^t.h)};function $I(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new K(n,t.h)}function Gi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new K(i,t.h)}Ll.prototype.createWebChannel=Ll.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;Wl.NO_ERROR=0;Wl.TIMEOUT=8;Wl.HTTP_ERROR=6;cE.COMPLETE="complete";hE.EventType=jo;jo.OPEN="a";jo.CLOSE="b";jo.ERROR="c";jo.MESSAGE="d";Se.prototype.listen=Se.prototype.O;le.prototype.listenOnce=le.prototype.P;le.prototype.getLastError=le.prototype.Sa;le.prototype.getLastErrorCode=le.prototype.Ia;le.prototype.getStatus=le.prototype.da;le.prototype.getResponseJson=le.prototype.Wa;le.prototype.getResponseText=le.prototype.ja;le.prototype.send=le.prototype.ha;le.prototype.setWithCredentials=le.prototype.Oa;bt.prototype.digest=bt.prototype.l;bt.prototype.reset=bt.prototype.reset;bt.prototype.update=bt.prototype.j;K.prototype.add=K.prototype.add;K.prototype.multiply=K.prototype.R;K.prototype.modulo=K.prototype.gb;K.prototype.compare=K.prototype.X;K.prototype.toNumber=K.prototype.ea;K.prototype.toString=K.prototype.toString;K.prototype.getBits=K.prototype.D;K.fromNumber=Zt;K.fromString=KE;var HE=Ot.createWebChannelTransport=function(){return new Ll},QE=Ot.getStatEventTarget=function(){return Gl()},ec=Ot.ErrorCode=Wl,YE=Ot.EventType=cE,JE=Ot.Event=Mr,im=Ot.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},RL=Ot.FetchXmlHttpFactory=Go,Ho=Ot.WebChannel=hE,XE=Ot.XhrIo=le,ZE=Ot.Md5=bt,Fr=Ot.Integer=K;var eT="@firebase/firestore";var Pe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");var ms="10.10.0";var Gr=new Gt("@firebase/firestore");function Qo(){return Gr.logLevel}function A(t,...e){if(Gr.logLevel<=U.DEBUG){let n=e.map(Kg);Gr.debug(`Firestore (${ms}): ${t}`,...n)}}function an(t,...e){if(Gr.logLevel<=U.ERROR){let n=e.map(Kg);Gr.error(`Firestore (${ms}): ${t}`,...n)}}function rs(t,...e){if(Gr.logLevel<=U.WARN){let n=e.map(Kg);Gr.warn(`Firestore (${ms}): ${t}`,...n)}}function Kg(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}function O(t="Unexpected state"){let e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function Y(t,e){t||O()}function L(t,e){return t}var v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},C=class extends Ne{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var nn=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};var sc=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},lm=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Pe.UNAUTHENTICATED))}shutdown(){}},cm=class{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}},hm=class{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i,i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve(),s=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nn,e.enqueueRetryable(()=>i(this.currentUser))};let o=()=>{let u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){let u=this.t.getImmediate({optional:!0});u?a(u):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nn)}},0),o()}getToken(){let e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string"),new sc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string"),new Pe(e)}},dm=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}},fm=class{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new dm(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Pe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},pm=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},mm=class{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){let r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);let o=s.token!==this.R;return this.R=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};let i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){let s=this.A.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Y(typeof n.token=="string"),this.R=n.token,new pm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};function _D(t){let e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}var oc=class{static newId(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length,r="";for(;r.length<20;){let i=_D(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}};function $(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}var _e=class t{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new C(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new C(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new C(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new C(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return t.fromMillis(Date.now())}static fromDate(e){return t.fromMillis(e.getTime())}static fromMillis(e){let n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new t(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};var M=class t{constructor(e){this.timestamp=e}static fromTimestamp(e){return new t(e)}static min(){return new t(new _e(0,0))}static max(){return new t(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var ac=class t{constructor(e,n,r){n===void 0?n=0:n>e.length&&O(),r===void 0?r=e.length-n:r>e.length-n&&O(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return t.comparator(this,e)===0}child(e){let n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){let r=Math.min(e.length,n.length);for(let i=0;i<r;i++){let s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},oe=class t extends ac{construct(e,n,r){return new t(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let n=[];for(let r of e){if(r.indexOf("//")>=0)throw new C(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new t(n)}static emptyPath(){return new t([])}},wD=/^[_a-zA-Z][_a-zA-Z0-9]*$/,dt=class t extends ac{construct(e,n,r){return new t(e,n,r)}static isValidIdentifier(e){return wD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new t(["__name__"])}static fromServerFormat(e){let n=[],r="",i=0,s=()=>{if(r.length===0)throw new C(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""},o=!1;for(;i<e.length;){let a=e[i];if(a==="\\"){if(i+1===e.length)throw new C(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new C(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new C(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new t(n)}static emptyPath(){return new t([])}};var b=class t{constructor(e){this.path=e}static fromPath(e){return new t(oe.fromString(e))}static fromName(e){return new t(oe.fromString(e).popFirst(5))}static empty(){return new t(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new t(new oe(e.slice()))}};var gm=class{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}};gm.UNKNOWN_ID=-1;function ID(t,e){let n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=M.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Wr(i,b.empty(),e)}function ED(t){return new Wr(t.readTime,t.key,-1)}var Wr=class t{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new t(M.min(),b.empty(),-1)}static max(){return new t(M.max(),b.empty(),-1)}};function TD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=b.comparator(t.documentKey,e.documentKey),n!==0?n:$(t.largestBatchId,e.largestBatchId))}var SD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ym=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};async function pa(t){if(t.code!==v.FAILED_PRECONDITION||t.message!==SD)throw t;A("LocalStore","Unexpectedly lost primary lease")}var I=class t{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{let n=e();return n instanceof t?n:t.resolve(n)}catch(n){return t.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):t.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):t.reject(n)}static resolve(e){return new t((n,r)=>{n(e)})}static reject(e){return new t((n,r)=>{r(e)})}static waitFor(e){return new t((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=t.resolve(!1);for(let r of e)n=n.next(i=>i?t.resolve(i):r());return n}static forEach(e,n){let r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new t((r,i)=>{let s=e.length,o=new Array(s),a=0;for(let u=0;u<s;u++){let l=u;n(e[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new t((r,i)=>{let s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}};var vm=class t{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new nn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new qr(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{let i=Hg(r.target.error);this.V.reject(new qr(e,i))}}static open(e,n,r,i){try{return new t(n,e.transaction(i,r))}catch(s){throw new qr(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){let e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){let n=this.transaction.objectStore(e);return new wm(n)}},uc=class t{constructor(e,n,r){this.name=e,this.version=n,this.p=r,t.S(ue())===12.2&&an("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Ur(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Oi())return!1;if(t.C())return!0;let e=ue(),n=t.S(e),r=0<n&&n<10,i=t.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){let n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){let n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{let i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{let o=s.target.result;n(o)},i.onblocked=()=>{r(new qr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{let o=s.target.error;o.name==="VersionError"?r(new C(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new C(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new qr(e,o))},i.onupgradeneeded=s=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);let o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){let s=n==="readonly",o=0;for(;;){++o;try{this.db=await this.O(e);let a=vm.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),I.reject(l))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){let u=a,l=u.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",u.message,"Retrying:",l),this.close(),!l)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}},_m=class{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Ur(this.k.delete())}},qr=class extends C{constructor(e,n){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}};function ma(t){return t.name==="IndexedDbTransactionError"}var wm=class{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(A("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ur(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Ur(this.store.add(e))}get(e){return Ur(this.store.get(e)).next(n=>(n===void 0&&(n=null),A("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Ur(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Ur(this.store.count())}W(e,n){let r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){let s=i.getAll(r.range);return new I((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{let s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(e,n){let r=this.store.getAll(e,n===null?void 0:n);return new I((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){A("SimpleDb","DELETE ALL",this.store.name);let r=this.options(e,n);r.J=!1;let i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);let i=this.cursor(r);return this.G(i,n)}Z(e){let n=this.cursor({});return new I((r,i)=>{n.onerror=s=>{let o=Hg(s.target.error);i(o)},n.onsuccess=s=>{let o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){let r=[];return new I((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{let a=o.target.result;if(!a)return void i();let u=new _m(a),l=n(a.primaryKey,a.value,u);if(l instanceof I){let c=l.catch(h=>(u.done(),I.reject(h)));r.push(c)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>I.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){let r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}};function Ur(t){return new I((e,n)=>{t.onsuccess=r=>{let i=r.target.result;e(i)},t.onerror=r=>{let i=Hg(r.target.error);n(i)}})}var tT=!1;function Hg(t){let e=uc.S(ue());if(e>=12.2&&e<13){let n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){let r=new C("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return tT||(tT=!0,setTimeout(()=>{throw r},0)),r}}return t}var na=class{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.oe&&this.oe(e),e}};na._e=-1;function Mc(t){return t==null}function ra(t){return t===0&&1/t==-1/0}function AD(t){return typeof t=="number"&&Number.isInteger(t)&&!ra(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}var PD=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ML=[...PD,"documentOverlays"],RD=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],CD=RD,FL=[...CD,"indexConfiguration","indexState","indexEntries"];function nT(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function OT(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}var he=class t{constructor(e,n){this.comparator=e,this.root=n||rn.EMPTY}insert(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rn.BLACK,null,null))}remove(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){let i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){let e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new es(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new es(this.root,e,this.comparator,!1)}getReverseIterator(){return new es(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new es(this.root,e,this.comparator,!0)}},es=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},rn=class t{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??t.RED,this.left=i??t.EMPTY,this.right=s??t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new t(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this,s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){let e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();let e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}};rn.EMPTY=null,rn.RED=!0,rn.BLACK=!1;rn.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(e,n,r,i,s){return this}insert(e,n,r){return new rn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var qe=class t{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lc(this.data.getIterator())}getIteratorFrom(e){return new lc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){let e=[];return this.forEach(n=>{e.push(n)}),e}toString(){let e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){let n=new t(this.comparator);return n.data=e,n}},lc=class{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var tn=class t{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new t([])}unionWith(e){let n=new qe(dt.comparator);for(let r of this.fields)n=n.add(r);for(let r of e)n=n.add(r);return new t(n.toArray())}covers(e){for(let n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}};var cc=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Qe=class t{constructor(e){this.binaryString=e}static fromBase64String(e){let n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new cc("Invalid base64 string: "+s):s}}(e);return new t(n)}static fromUint8Array(e){let n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){let r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Qe.EMPTY_BYTE_STRING=new Qe("");var kD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(Y(!!t),typeof t=="string"){let e=0,n=kD.exec(t);if(Y(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}let r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(t.seconds),nanos:ce(t.nanos)}}function ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}function Qg(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yg(t){let e=t.mapValue.fields.__previous_value__;return Qg(e)?Yg(e):e}function ia(t){let e=ir(t.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}var Im=class{constructor(e,n,r,i,s,o,a,u,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}},hc=class t{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new t("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}};var tc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qg(t)?4:VT(t)?9007199254740991:10:O()}function un(t,e){if(t===e)return!0;let n=Kr(t);if(n!==Kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;let o=ir(i.timestampValue),a=ir(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return sr(i.bytesValue).isEqual(sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return ce(i.geoPointValue.latitude)===ce(s.geoPointValue.latitude)&&ce(i.geoPointValue.longitude)===ce(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ce(i.integerValue)===ce(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){let o=ce(i.doubleValue),a=ce(s.doubleValue);return o===a?ra(o)===ra(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:return function(i,s){let o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(nT(o)!==nT(a))return!1;for(let u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!un(o[u],a[u])))return!1;return!0}(t,e);default:return O()}}function sa(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function ss(t,e){if(t===e)return 0;let n=Kr(t),r=Kr(e);if(n!==r)return $(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $(t.booleanValue,e.booleanValue);case 2:return function(s,o){let a=ce(s.integerValue||s.doubleValue),u=ce(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return rT(t.timestampValue,e.timestampValue);case 4:return rT(ia(t),ia(e));case 5:return $(t.stringValue,e.stringValue);case 6:return function(s,o){let a=sr(s),u=sr(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){let a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){let c=$(a[l],u[l]);if(c!==0)return c}return $(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){let a=$(ce(s.latitude),ce(o.latitude));return a!==0?a:$(ce(s.longitude),ce(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){let a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){let c=ss(a[l],u[l]);if(c)return c}return $(a.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===tc.mapValue&&o===tc.mapValue)return 0;if(s===tc.mapValue)return 1;if(o===tc.mapValue)return-1;let a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){let d=$(u[h],c[h]);if(d!==0)return d;let m=ss(a[u[h]],l[c[h]]);if(m!==0)return m}return $(u.length,c.length)}(t.mapValue,e.mapValue);default:throw O()}}function rT(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return $(t,e);let n=ir(t),r=ir(e),i=$(n.seconds,r.seconds);return i!==0?i:$(n.nanos,r.nanos)}function os(t){return Em(t)}function Em(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){let r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return b.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(let s of n.values||[])i?i=!1:r+=",",r+=Em(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){let r=Object.keys(n.fields||{}).sort(),i="{",s=!0;for(let o of r)s?s=!1:i+=",",i+=`${o}:${Em(n.fields[o])}`;return i+"}"}(t.mapValue):O()}function iT(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tm(t){return!!t&&"integerValue"in t}function Jg(t){return!!t&&"arrayValue"in t}function sT(t){return!!t&&"nullValue"in t}function oT(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rc(t){return!!t&&"mapValue"in t}function Jo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){let e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Jo(r)),e}if(t.arrayValue){let e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}var Vt=class t{constructor(e){this.value=e}static empty(){return new t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jo(n)}setAll(e){let n=dt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){let u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Jo(o):i.push(a.lastSegment())});let s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){let n=this.field(e.popLast());rc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(i,s)=>e[i]=s);for(let i of r)delete e[i]}clone(){return new t(Jo(this.value))}};function LT(t){let e=[];return gs(t.fields,(n,r)=>{let i=new dt([n]);if(rc(r)){let s=LT(r.mapValue).fields;if(s.length===0)e.push(i);else for(let o of s)e.push(i.child(o))}else e.push(i)}),new tn(e)}var Lt=class t{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new t(e,0,M.min(),M.min(),M.min(),Vt.empty(),0)}static newFoundDocument(e,n,r,i){return new t(e,1,n,M.min(),r,i,0)}static newNoDocument(e,n){return new t(e,2,n,M.min(),M.min(),Vt.empty(),0)}static newUnknownDocument(e,n){return new t(e,3,n,M.min(),M.min(),Vt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(M.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Vt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Vt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var as=class{constructor(e,n){this.position=e,this.inclusive=n}};function aT(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){let s=e[i],o=t.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function uT(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}var Hr=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function ND(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}var dc=class{},ge=class t extends dc{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Am(e,n,r):n==="array-contains"?new Cm(e,r):n==="in"?new km(e,r):n==="not-in"?new Nm(e,r):n==="array-contains-any"?new Dm(e,r):new t(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Pm(e,r):new Rm(e,r)}matches(e){let n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&Kr(this.value)===Kr(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Mt=class t extends dc{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new t(e,n)}matches(e){return MT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}};function MT(t){return t.op==="and"}function FT(t){return DD(t)&&MT(t)}function DD(t){for(let e of t.filters)if(e instanceof Mt)return!1;return!0}function Sm(t){if(t instanceof ge)return t.field.canonicalString()+t.op.toString()+os(t.value);if(FT(t))return t.filters.map(e=>Sm(e)).join(",");{let e=t.filters.map(n=>Sm(n)).join(",");return`${t.op}(${e})`}}function UT(t,e){return t instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof Mt?function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&UT(o,i.filters[a]),!0):!1}(t,e):void O()}function BT(t){return t instanceof ge?function(n){return`${n.field.canonicalString()} ${n.op} ${os(n.value)}`}(t):t instanceof Mt?function(n){return n.op.toString()+" {"+n.getFilters().map(BT).join(" ,")+"}"}(t):"Filter"}var Am=class extends ge{constructor(e,n,r){super(e,n,r),this.key=b.fromName(r.referenceValue)}matches(e){let n=b.comparator(e.key,this.key);return this.matchesComparison(n)}},Pm=class extends ge{constructor(e,n){super(e,"in",n),this.keys=zT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}},Rm=class extends ge{constructor(e,n){super(e,"not-in",n),this.keys=zT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}};function zT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}var Cm=class extends ge{constructor(e,n){super(e,"array-contains",n)}matches(e){let n=e.data.field(this.field);return Jg(n)&&sa(n.arrayValue,this.value)}},km=class extends ge{constructor(e,n){super(e,"in",n)}matches(e){let n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}},Nm=class extends ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let n=e.data.field(this.field);return n!==null&&!sa(this.value.arrayValue,n)}},Dm=class extends ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){let n=e.data.field(this.field);return!(!Jg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}};var xm=class{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}};function lT(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xm(t,e,n,r,i,s,o)}function Xg(t){let e=L(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Sm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.ce=n}return e.ce}function Zg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ND(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!UT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uT(t.startAt,e.startAt)&&uT(t.endAt,e.endAt)}function bm(t){return b.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}var or=class{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}};function xD(t,e,n,r,i,s,o,a){return new or(t,e,n,r,i,s,o,a)}function ey(t){return new or(t)}function cT(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jT(t){return t.collectionGroup!==null}function Xo(t){let e=L(t);if(e.le===null){e.le=[];let n=new Set;for(let s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());let r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new qe(dt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Hr(s,r))}),n.has(dt.keyField().canonicalString())||e.le.push(new Hr(dt.keyField(),r))}return e.le}function sn(t){let e=L(t);return e.he||(e.he=bD(e,Xo(t))),e.he}function bD(t,e){if(t.limitType==="F")return lT(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{let s=i.dir==="desc"?"asc":"desc";return new Hr(i.field,s)});let n=t.endAt?new as(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new as(t.startAt.position,t.startAt.inclusive):null;return lT(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Om(t,e){let n=t.filters.concat([e]);return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Vm(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ga(t,e){return Zg(sn(t),sn(e))&&t.limitType===e.limitType}function qT(t){return`${Xg(sn(t))}|lt:${t.limitType}`}function Ji(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>BT(i)).join(", ")}]`),Mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>os(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>os(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Fc(t,e){return e.isFoundDocument()&&function(r,i){let s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):b.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(let s of Xo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(let s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,u){let l=aT(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,Xo(r),i)||r.endAt&&!function(o,a,u){let l=aT(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,Xo(r),i))}(t,e)}function OD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $T(t){return(e,n)=>{let r=!1;for(let i of Xo(t)){let s=VD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VD(t,e,n){let r=t.field.isKeyField()?b.comparator(e.key,n.key):function(s,o,a){let u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?ss(u,l):O()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}var ar=class{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){let n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(let[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){let r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){let n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(let[i,s]of r)e(i,s)})}isEmpty(){return OT(this.inner)}size(){return this.innerSize}};var LD=new he(b.comparator);function An(){return LD}var GT=new he(b.comparator);function Yo(...t){let e=GT;for(let n of t)e=e.insert(n.key,n);return e}function WT(t){let e=GT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return Zo()}function KT(){return Zo()}function Zo(){return new ar(t=>t.toString(),(t,e)=>t.isEqual(e))}var MD=new he(b.comparator),FD=new qe(b.comparator);function z(...t){let e=FD;for(let n of t)e=e.add(n);return e}var UD=new qe($);function BD(){return UD}function HT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ra(e)?"-0":e}}function QT(t){return{integerValue:""+t}}function zD(t,e){return AD(e)?QT(e):HT(t,e)}var us=class{constructor(){this._=void 0}};function jD(t,e,n){return t instanceof ls?function(i,s){let o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qg(s)&&(s=Yg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Qr?JT(t,e):t instanceof Yr?XT(t,e):function(i,s){let o=YT(i,s),a=hT(o)+hT(i.Ie);return Tm(o)&&Tm(i.Ie)?QT(a):HT(i.serializer,a)}(t,e)}function qD(t,e,n){return t instanceof Qr?JT(t,e):t instanceof Yr?XT(t,e):n}function YT(t,e){return t instanceof cs?function(r){return Tm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}var ls=class extends us{},Qr=class extends us{constructor(e){super(),this.elements=e}};function JT(t,e){let n=ZT(e);for(let r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}var Yr=class extends us{constructor(e){super(),this.elements=e}};function XT(t,e){let n=ZT(e);for(let r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}var cs=class extends us{constructor(e,n){super(),this.serializer=e,this.Ie=n}};function hT(t){return ce(t.integerValue||t.doubleValue)}function ZT(t){return Jg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function $D(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Qr&&i instanceof Qr||r instanceof Yr&&i instanceof Yr?is(r.elements,i.elements,un):r instanceof cs&&i instanceof cs?un(r.Ie,i.Ie):r instanceof ls&&i instanceof ls}(t.transform,e.transform)}var Lm=class{constructor(e,n){this.version=e,this.transformResults=n}},$r=class t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new t}static exists(e){return new t(void 0,e)}static updateTime(e){return new t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function ic(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}var hs=class{};function eS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fc(t.key,$r.none()):new Jr(t.key,t.data,$r.none());{let n=t.data,r=Vt.empty(),i=new qe(dt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pn(t.key,r,new tn(i.toArray()),$r.none())}}function GD(t,e,n){t instanceof Jr?function(i,s,o){let a=i.value.clone(),u=fT(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pn?function(i,s,o){if(!ic(i.precondition,s))return void s.convertToUnknownDocument(o.version);let a=fT(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(tS(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ea(t,e,n,r){return t instanceof Jr?function(s,o,a,u){if(!ic(s.precondition,o))return a;let l=s.value.clone(),c=pT(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pn?function(s,o,a,u){if(!ic(s.precondition,o))return a;let l=pT(s.fieldTransforms,u,o),c=o.data;return c.setAll(tS(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ic(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function WD(t,e){let n=null;for(let r of t.fieldTransforms){let i=e.data.field(r.field),s=YT(r.transform,i||null);s!=null&&(n===null&&(n=Vt.empty()),n.set(r.field,s))}return n||null}function dT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&is(r,i,(s,o)=>$D(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}var Jr=class extends hs{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},Pn=class extends hs{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}};function tS(t){let e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=t.data.field(n);e.set(n,r)}}),e}function fT(t,e,n){let r=new Map;Y(t.length===n.length);for(let i=0;i<n.length;i++){let s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,qD(o,a,n[i]))}return r}function pT(t,e,n){let r=new Map;for(let i of t){let s=i.transform,o=n.data.field(i.field);r.set(i.field,jD(s,o,e))}return r}var fc=class extends hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Mm=class extends hs{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Fm=class{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){let r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){let s=this.mutations[i];s.key.isEqual(e.key)&&GD(s,e,r[i])}}applyToLocalView(e,n){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(n=ea(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){let r=KT();return this.mutations.forEach(i=>{let s=e.get(i.key),o=s.overlayedDocument,a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;let u=eS(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(M.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),z())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>dT(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>dT(n,r))}},Um=class t{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Y(e.mutations.length===r.length);let i=function(){return MD}(),s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new t(e,n,r,i)}};var Bm=class{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};var zm=class{constructor(e,n){this.count=e,this.unchangedNames=n}};var pe,j;function KD(t){switch(t){default:return O();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function nS(t){if(t===void 0)return an("GRPC error has no .code"),v.UNKNOWN;switch(t){case pe.OK:return v.OK;case pe.CANCELLED:return v.CANCELLED;case pe.UNKNOWN:return v.UNKNOWN;case pe.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case pe.INTERNAL:return v.INTERNAL;case pe.UNAVAILABLE:return v.UNAVAILABLE;case pe.UNAUTHENTICATED:return v.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case pe.NOT_FOUND:return v.NOT_FOUND;case pe.ALREADY_EXISTS:return v.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return v.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case pe.ABORTED:return v.ABORTED;case pe.OUT_OF_RANGE:return v.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return v.UNIMPLEMENTED;case pe.DATA_LOSS:return v.DATA_LOSS;default:return O()}}(j=pe||(pe={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";var mT=null;function HD(){return new TextEncoder}var QD=new Fr([4294967295,4294967295],0);function gT(t){let e=HD().encode(t),n=new ZE;return n.update(e),new Uint8Array(n.digest())}function yT(t){let e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Fr([n,r],0),new Fr([i,s],0)]}var jm=class t{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zr(`Invalid padding: ${n}`);if(r<0)throw new zr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zr(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Fr.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Fr.fromNumber(r)));return i.compare(QD)===1&&(i=new Fr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;let n=gT(e),[r,i]=yT(n);for(let s=0;s<this.hashCount;s++){let o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){let i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new t(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;let n=gT(e),[r,i]=yT(n);for(let s=0;s<this.hashCount;s++){let o=this.de(r,i,s);this.Re(o)}}Re(e){let n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}},zr=class extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}};var pc=class t{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){let i=new Map;return i.set(e,oa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new t(M.min(),i,new he($),An(),z())}},oa=class t{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new t(r,n,z(),z(),z())}};var ts=class{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}},mc=class{constructor(e,n){this.targetId=e,this.fe=n}},gc=class{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}},yc=class{constructor(){this.ge=0,this.pe=_T(),this.ye=Qe.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=z(),n=z(),r=z();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:O()}}),new oa(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=_T()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Y(this.ge>=0)}Le(){this.Se=!0,this.we=!0}},qm=class{constructor(e){this.Be=e,this.ke=new Map,this.qe=An(),this.Qe=vT(),this.Ke=new he($)}$e(e){for(let n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(let n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{let r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:O()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){let n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){let s=i.target;if(bm(s))if(r===0){let o=new b(s.path);this.We(n,o,Lt.newNoDocument(o,M.min()))}else Y(r===1);else{let o=this.Ze(n);if(o!==r){let a=this.Xe(e),u=a?this.et(a,e,o):1;if(u!==0){this.He(n);let l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}mT?.tt(function(c,h,d,m,y){var _,T,p,f,g,w;let P={localCacheCount:c,existenceFilterCount:h.count,databaseId:d.database,projectId:d.projectId},R=h.unchangedNames;return R&&(P.bloomFilter={applied:y===0,hashCount:(_=R?.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(f=(p=(T=R?.bits)===null||T===void 0?void 0:T.bitmap)===null||p===void 0?void 0:p.length)!==null&&f!==void 0?f:0,padding:(w=(g=R?.bits)===null||g===void 0?void 0:g.padding)!==null&&w!==void 0?w:0,mightContain:N=>{var x;return(x=m?.mightContain(N))!==null&&x!==void 0&&x}}),P}(o,e.fe,this.Be.nt(),a,u))}}}}Xe(e){let n=e.fe.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n,o,a;try{o=sr(r).toUint8Array()}catch(u){if(u instanceof cc)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new jm(o,i,s)}catch(u){return rs(u instanceof zr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){let r=this.Be.getRemoteKeysForTarget(n),i=0;return r.forEach(s=>{let o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){let n=new Map;this.ke.forEach((s,o)=>{let a=this.Ye(o);if(a){if(s.current&&bm(a.target)){let u=new b(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Lt.newNoDocument(u,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=z();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{let l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));let i=new pc(e,n,this.Ke,this.qe,r);return this.qe=An(),this.Qe=vT(),this.Ke=new he($),i}Ue(e,n){if(!this.je(e))return;let r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;let i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){let n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new yc,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new qe($),this.Qe=this.Qe.insert(e,n)),n}je(e){let n=this.Ye(e)!==null;return n||A("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){let n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new yc),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}};function vT(){return new he(b.comparator)}function _T(){return new he(b.comparator)}var YD={asc:"ASCENDING",desc:"DESCENDING"},JD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XD={and:"AND",or:"OR"},$m=class{constructor(e,n){this.databaseId=e,this.useProto3Json=n}};function Gm(t,e){return t.useProto3Json||Mc(e)?e:{value:e}}function vc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZD(t,e){return vc(t,e.toTimestamp())}function on(t){return Y(!!t),M.fromTimestamp(function(n){let r=ir(n);return new _e(r.seconds,r.nanos)}(t))}function ty(t,e){return Wm(t,e).canonicalString()}function Wm(t,e){let n=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iS(t){let e=oe.fromString(t);return Y(lS(e)),e}function Km(t,e){return ty(t.databaseId,e.path)}function sm(t,e){let n=iS(e);if(n.get(1)!==t.databaseId.projectId)throw new C(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new C(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new b(oS(n))}function sS(t,e){return ty(t.databaseId,e)}function ex(t){let e=iS(t);return e.length===4?oe.emptyPath():oS(e)}function Hm(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oS(t){return Y(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wT(t,e,n){return{name:Km(t,e),fields:n.value.mapValue.fields}}function tx(t,e){let n;if("targetChange"in e){e.targetChange;let r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:O()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(Y(c===void 0||typeof c=="string"),Qe.fromBase64String(c||"")):(Y(c===void 0||c instanceof Uint8Array),Qe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){let c=l.code===void 0?v.UNKNOWN:nS(l.code);return new C(c,l.message||"")}(o);n=new gc(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;let r=e.documentChange;r.document,r.document.name,r.document.updateTime;let i=sm(t,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):M.min(),a=new Vt({mapValue:{fields:r.document.fields}}),u=Lt.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];n=new ts(l,c,u.key,u)}else if("documentDelete"in e){e.documentDelete;let r=e.documentDelete;r.document;let i=sm(t,r.document),s=r.readTime?on(r.readTime):M.min(),o=Lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ts([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;let r=e.documentRemove;r.document;let i=sm(t,r.document),s=r.removedTargetIds||[];n=new ts([],s,i,null)}else{if(!("filter"in e))return O();{e.filter;let r=e.filter;r.targetId;let{count:i=0,unchangedNames:s}=r,o=new zm(i,s),a=r.targetId;n=new mc(a,o)}}return n}function nx(t,e){let n;if(e instanceof Jr)n={update:wT(t,e.key,e.value)};else if(e instanceof fc)n={delete:Km(t,e.key)};else if(e instanceof Pn)n={update:wT(t,e.key,e.data),updateMask:hx(e.fieldMask)};else{if(!(e instanceof Mm))return O();n={verify:Km(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){let a=o.transform;if(a instanceof ls)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Qr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Yr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof cs)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw O()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:ZD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:O()}(t,e.precondition)),n}function rx(t,e){return t&&t.length>0?(Y(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?on(i.updateTime):on(s);return o.isEqual(M.min())&&(o=on(s)),new Lm(o,i.transformResults||[])}(n,e))):[]}function ix(t,e){return{documents:[sS(t,e.path)]}}function sx(t,e){let n={structuredQuery:{}},r=e.path,i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sS(t,i);let s=function(l){if(l.length!==0)return uS(Mt.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);let o=function(l){if(l.length!==0)return l.map(c=>function(d){return{field:Xi(d.field),direction:ux(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);let a=Gm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:i}}function ox(t){let e=ex(t.parent),n=t.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){Y(r===1);let c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){let d=aS(h);return d instanceof Mt&&FT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new Hr(Zi(y.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Mc(d)?null:d}(n.limit));let u=null;n.startAt&&(u=function(h){let d=!!h.before,m=h.values||[];return new as(m,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){let d=!h.before,m=h.values||[];return new as(m,d)}(n.endAt)),xD(e,i,o,s,a,"F",u,l)}function ax(t,e){let n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":let r=Zi(n.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":let i=Zi(n.unaryFilter.field);return ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let s=Zi(n.unaryFilter.field);return ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let o=Zi(n.unaryFilter.field);return ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(t):t.fieldFilter!==void 0?function(n){return ge.create(Zi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Mt.create(n.compositeFilter.filters.map(r=>aS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return O()}}(n.compositeFilter.op))}(t):O()}function ux(t){return YD[t]}function lx(t){return JD[t]}function cx(t){return XD[t]}function Xi(t){return{fieldPath:t.canonicalString()}}function Zi(t){return dt.fromServerFormat(t.fieldPath)}function uS(t){return t instanceof ge?function(n){if(n.op==="=="){if(oT(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NAN"}};if(sT(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oT(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NAN"}};if(sT(n.value))return{unaryFilter:{field:Xi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xi(n.field),op:lx(n.op),value:n.value}}}(t):t instanceof Mt?function(n){let r=n.getFilters().map(i=>uS(i));return r.length===1?r[0]:{compositeFilter:{op:cx(n.op),filters:r}}}(t):O()}function hx(t){let e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function lS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}var aa=class t{constructor(e,n,r,i,s=M.min(),o=M.min(),a=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new t(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};var Qm=class{constructor(e){this.ct=e}};function dx(t){let e=ox({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vm(e,e.limit,"L"):e}var _c=class{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(ce(e.integerValue));else if("doubleValue"in e){let r=ce(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),ra(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"?n.At(r):(n.At(`${r.seconds||""}`),n.dt(r.nanos||0))}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(sr(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){let r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?VT(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):O()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){let r=e.fields||{};this.Et(n,55);for(let i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){let r=e.values||[];this.Et(n,50);for(let i of r)this.It(i,n)}gt(e,n){this.Et(n,37),b.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}};_c.bt=new _c;var Ym=class{constructor(){this._n=new Jm}addToCollectionParentIndex(e,n){return this._n.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}deleteAllFieldIndexes(e){return I.resolve()}createTargetIndexes(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(Wr.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(Wr.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}},Jm=class{constructor(){this.index={}}add(e){let n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new qe(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){let n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new qe(oe.comparator)).toArray()}};var BL=new Uint8Array(0);var en=class t{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);var ua=class t{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new t(0)}static Ln(){return new t(-1)}};var Xm=class{constructor(){this.changes=new ar(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();let r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};var Zm=class{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}};var eg=class{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ea(r.mutation,i,tn.empty(),_e.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=z()){let i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Yo();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){let r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,z()))}populateOverlays(e,n,r){let i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An(),o=Zo(),a=function(){return Zo()}();return n.forEach((u,l)=>{let c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Pn)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),ea(c.mutation,l,c.mutation.getFieldMask(),_e.now())):o.set(l.key,tn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),n.forEach((l,c)=>{var h;return a.set(l,new Zm(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){let r=Zo(),i=new he((o,a)=>o-a),s=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(let a of o)a.keys().forEach(u=>{let l=n.get(u);if(l===null)return;let c=r.get(u)||tn.empty();c=a.applyToLocalView(l,c),r.set(u,c);let h=(i.get(a.batchId)||z()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{let o=[],a=i.getReverseIterator();for(;a.hasNext();){let u=a.getNext(),l=u.key,c=u.value,h=KT();c.forEach(d=>{if(!s.has(d)){let m=eS(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return b.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{let o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Br()),a=-1,u=s;return o.next(l=>I.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,u,l,z())).next(c=>({batchId:a,changes:WT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new b(n)).next(r=>{let i=Yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){let s=n.collectionGroup,o=Yo();return this.indexManager.getCollectionParents(e,s).next(a=>I.forEach(a,u=>{let l=function(h,d){return new or(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,l)=>{let c=l.getKey();o.get(c)===null&&(o=o.insert(c,Lt.newInvalidDocument(c)))});let a=Yo();return o.forEach((u,l)=>{let c=s.get(u);c!==void 0&&ea(c.mutation,l,tn.empty(),_e.now()),Fc(n,l)&&(a=a.insert(u,l))}),a})}};var tg=class{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return I.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),I.resolve()}getNamedQuery(e,n){return I.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:dx(i.bundledQuery),readTime:on(i.readTime)}}(n)),I.resolve()}};var ng=class{constructor(){this.overlays=new he(b.comparator),this.hr=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){let r=Br();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){let i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){let i=Br(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){let u=a.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new he((l,c)=>l-c),o=this.overlays.getIterator();for(;o.hasNext();){let l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=Br(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}let a=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return I.resolve(a)}ht(e,n,r){let i=this.overlays.get(r.key);if(i!==null){let o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Bm(n,r));let s=this.hr.get(n);s===void 0&&(s=z(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}};var la=class{constructor(){this.Pr=new qe(me.Ir),this.Tr=new qe(me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){let r=new me(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new me(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){let n=new b(new oe([])),r=new me(n,e),i=new me(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){let n=new b(new oe([])),r=new me(n,e),i=new me(n,e+1),s=z();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){let n=new me(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}},me=class{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return b.comparator(e.key,n.key)||$(e.pr,n.pr)}static Er(e,n){return $(e.pr,n.pr)||b.comparator(e.key,n.key)}};var rg=class{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new qe(me.Ir)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){let s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let o=new Fm(s,n,r,i);this.mutationQueue.push(o);for(let a of i)this.wr=this.wr.add(new me(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){let r=n+1,i=this.br(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){let r=new me(n,0),i=new me(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{let a=this.Sr(o.pr);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new qe($);return n.forEach(i=>{let s=new me(i,0),o=new me(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),I.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){let r=n.path,i=r.length+1,s=r;b.isDocumentKey(s)||(s=s.child(""));let o=new me(new b(s),0),a=new qe($);return this.wr.forEachWhile(u=>{let l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.pr)),!0)},o),I.resolve(this.Dr(a))}Dr(e){let n=[];return e.forEach(r=>{let i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Y(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return I.forEach(n.mutations,i=>{let s=new me(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){let r=new me(n,0),i=this.wr.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){let n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}};var ig=class{constructor(e){this.vr=e,this.docs=function(){return new he(b.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){let r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){let r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{let s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Lt.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=An(),o=n.path,a=new b(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){let{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||TD(ED(c),r)<=0||(i.has(c.key)||Fc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){O()}Fr(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sg(this)}getSize(e){return I.resolve(this.size)}},sg=class extends Xm{constructor(e){super(),this.ar=e}applyChanges(e){let n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}};var og=class{constructor(e){this.persistence=e,this.Mr=new ar(n=>Xg(n),Zg),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Or=0,this.Nr=new la,this.targetCount=0,this.Lr=ua.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),I.resolve()}qn(e){this.Mr.set(e.target,e);let n=e.targetId;n>this.highestTargetId&&(this.Lr=new ua(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.qn(n),I.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0,s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){let r=this.Mr.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);let i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),I.resolve()}getMatchingKeysForTargetId(e,n){let r=this.Nr.gr(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Nr.containsKey(n))}};var ag=class{constructor(e,n){this.Br={},this.overlays={},this.kr=new na(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new og(this),this.indexManager=new Ym,this.remoteDocumentCache=function(i){return new ig(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Qm(n),this.$r=new tg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ng,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new rg(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){A("MemoryPersistence","Starting transaction:",e);let i=new ug(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return I.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}},ug=class extends ym{constructor(e){super(),this.currentSequenceNumber=e}},lg=class t{constructor(e){this.persistence=e,this.zr=new la,this.jr=null}static Hr(e){return new t(e)}get Jr(){if(this.jr)return this.jr;throw O()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),I.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){let n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Jr,r=>{let i=b.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,M.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return I.or([()=>I.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}};var cg=class t{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=z(),i=z();for(let s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new t(e,n.fromCache,r,i)}};var hg=class{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}};var dg=class{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return _0()?8:uc.v(ue())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){let s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;let o=new hg;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Qo()<=U.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",Ji(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),I.resolve()):(Qo()<=U.DEBUG&&A("QueryEngine","Query:",Ji(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Qo()<=U.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",Ji(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):I.resolve())}ji(e,n){if(cT(n))return I.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Vm(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{let o=z(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{let l=this.Zi(n,a);return this.Xi(n,l,o,u.readTime)?this.ji(e,Vm(n,null,"F")):this.es(e,l,n,u)}))})))}Hi(e,n,r,i){return cT(n)||i.isEqual(M.min())?I.resolve(null):this.zi.getDocuments(e,r).next(s=>{let o=this.Zi(n,s);return this.Xi(n,o,r,i)?I.resolve(null):(Qo()<=U.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ji(n)),this.es(e,o,n,ID(i,-1)).next(a=>a))})}Zi(e,n){let r=new qe($T(e));return n.forEach((i,s)=>{Fc(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;let s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Qo()<=U.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",Ji(n)),this.zi.getDocumentsMatchingQuery(e,n,Wr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}};var fg=class{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new he($),this.rs=new ar(s=>Xg(s),Zg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eg(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}};function fx(t,e,n,r){return new fg(t,e,n,r)}async function cS(t,e){let n=L(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{let o=[],a=[],u=z();for(let l of i){o.push(l.batchId);for(let c of l.mutations)u=u.add(c.key)}for(let l of s){a.push(l.batchId);for(let c of l.mutations)u=u.add(c.key)}return n.localDocuments.getDocuments(r,u).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function px(t,e){let n=L(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{let i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){let h=l.batch,d=h.keys(),m=I.resolve();return d.forEach(y=>{m=m.next(()=>c.getEntry(u,y)).next(_=>{let T=l.docVersions.get(y);Y(T!==null),_.version.compareTo(T)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=z();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hS(t){let e=L(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function mx(t,e){let n=L(t),r=e.snapshotVersion,i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{let o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;let a=[];e.targetChanges.forEach((c,h)=>{let d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(Qe.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(_,T,p){return _.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let u=An(),l=z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(gx(s,o,e.documentUpdates).next(c=>{u=c.cs,l=c.ls})),!r.isEqual(M.min())){let c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(n.ns=i,s))}function gx(t,e,n){let r=z(),i=z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,u)=>{let l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(M.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{cs:o,ls:i}})}function yx(t,e){let n=L(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vx(t,e){let n=L(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new aa(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{let i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function pg(t,e,n){let r=L(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ma(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function IT(t,e,n){let r=L(t),i=M.min(),s=z();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){let h=L(u),d=h.rs.get(c);return d!==void 0?I.resolve(h.ns.get(d)):h.Qr.getTargetData(l,c)}(r,o,sn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:M.min(),n?s:z())).next(a=>(_x(r,OD(e),a),{documents:a,hs:s})))}function _x(t,e,n){let r=t.ss.get(e)||M.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}var wc=class{constructor(){this.activeTargetIds=BD()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};var mg=class{constructor(){this.no=new wc,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new wc,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};var gg=class{io(e){}shutdown(){}};var Ic=class{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(let e of this.uo)e(0)}ao(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(let e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}};var nc=null;function om(){return nc===null?nc=function(){return 268435456+Math.round(2147483648*Math.random())}():nc++,"0x"+nc.toString(16)}var wx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};var yg=class{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}};var je="WebChannelConnection",vg=class extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;let r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){let a=om(),u=this.bo(n,r.toUriEncodedString());A("RestConnection",`Sending RPC '${n}' ${a}:`,u,i);let l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,s,o),this.Co(n,u,l,i).then(c=>(A("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw rs("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){let i=wx[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){let s=om();return new Promise((o,a)=>{let u=new XE;u.setWithCredentials(!0),u.listenOnce(YE.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ec.NO_ERROR:let c=u.getResponseJson();A(je,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case ec.TIMEOUT:A(je,`RPC '${e}' ${s} timed out`),a(new C(v.DEADLINE_EXCEEDED,"Request time out"));break;case ec.HTTP_ERROR:let h=u.getStatus();if(A(je,`RPC '${e}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);let m=d?.error;if(m&&m.status&&m.message){let y=function(T){let p=T.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(p)>=0?p:v.UNKNOWN}(m.status);a(new C(y,m.message))}else a(new C(v.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new C(v.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{A(je,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(i);A(je,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",l,r,15)})}Fo(e,n,r){let i=om(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HE(),a=QE(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;let c=s.join("");A(je,`Creating RPC '${e}' stream ${i}: ${c}`,u);let h=o.createWebChannel(c,u),d=!1,m=!1,y=new yg({lo:T=>{m?A(je,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||(A(je,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),A(je,`RPC '${e}' stream ${i} sending:`,T),h.send(T))},ho:()=>h.close()}),_=(T,p,f)=>{T.listen(p,g=>{try{f(g)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,Ho.EventType.OPEN,()=>{m||A(je,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Ho.EventType.CLOSE,()=>{m||(m=!0,A(je,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),_(h,Ho.EventType.ERROR,T=>{m||(m=!0,rs(je,`RPC '${e}' stream ${i} transport errored:`,T),y.Vo(new C(v.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ho.EventType.MESSAGE,T=>{var p;if(!m){let f=T.data[0];Y(!!f);let g=f,w=g.error||((p=g[0])===null||p===void 0?void 0:p.error);if(w){A(je,`RPC '${e}' stream ${i} received error:`,w);let P=w.status,R=function(ee){let F=pe[ee];if(F!==void 0)return nS(F)}(P),N=w.message;R===void 0&&(R=v.INTERNAL,N="Unknown error status: "+P+" with message "+w.message),m=!0,y.Vo(new C(R,N)),h.close()}else A(je,`RPC '${e}' stream ${i} received:`,f),y.mo(f)}}),_(a,JE.STAT_EVENT,T=>{T.stat===im.PROXY?A(je,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===im.NOPROXY&&A(je,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}};function am(){return typeof document<"u"?document:null}function Uc(t){return new $m(t,!0)}var Ec=class{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();let n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}};var Tc=class{constructor(e,n,r,i,s,o,a,u){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Ec(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===v.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;let e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{let i=new C(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){let r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}},_g=class extends Tc{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();let n=tx(this.serializer,e),r=function(s){if(!("targetChange"in s))return M.min();let o=s.targetChange;return o.targetIds&&o.targetIds.length?M.min():o.readTime?on(o.readTime):M.min()}(e);return this.listener.u_(n,r)}c_(e){let n={};n.database=Hm(this.serializer),n.addTarget=function(s,o){let a,u=o.target;if(a=bm(u)?{documents:ix(s,u)}:{query:sx(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rS(s,o.resumeToken);let l=Gm(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(M.min())>0){a.readTime=vc(s,o.snapshotVersion.toTimestamp());let l=Gm(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);let r=ax(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){let n={};n.database=Hm(this.serializer),n.removeTarget=e,this.t_(n)}},wg=class extends Tc{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Y(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();let n=rx(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.T_(r,n)}return Y(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){let e={};e.database=Hm(this.serializer),this.t_(e)}I_(e){let n={streamToken:this.lastStreamToken,writes:e.map(r=>nx(this.serializer,r))};this.t_(n)}};var Ig=class extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new C(v.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Wm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new C(v.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Wm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new C(v.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}};var Eg=class{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){let n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(an(n),this.g_=!1):A("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}};var Tg=class{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(u){let l=L(u);l.v_.add(4),await ya(l),l.x_.set("Unknown"),l.v_.delete(4),await Bc(l)}(this))})}),this.x_=new Eg(r,i)}};async function Bc(t){if(Xr(t))for(let e of t.F_)await e(!0)}async function ya(t){for(let e of t.F_)await e(!1)}function dS(t,e){let n=L(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),sy(n)?iy(n):ys(n).Jo()&&ry(n,e))}function ny(t,e){let n=L(t),r=ys(n);n.C_.delete(e),r.Jo()&&fS(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Xr(n)&&n.x_.set("Unknown"))}function ry(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(M.min())>0){let n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ys(t).c_(e)}function fS(t,e){t.O_.Oe(e),ys(t).l_(e)}function iy(t){t.O_=new qm({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ys(t).start(),t.x_.p_()}function sy(t){return Xr(t)&&!ys(t).Ho()&&t.C_.size>0}function Xr(t){return L(t).v_.size===0}function pS(t){t.O_=void 0}async function Ix(t){t.C_.forEach((e,n)=>{ry(t,e)})}async function Ex(t,e){pS(t),sy(t)?(t.x_.S_(e),iy(t)):t.x_.set("Unknown")}async function Tx(t,e,n){if(t.x_.set("Online"),e instanceof gc&&e.state===2&&e.cause)try{await async function(i,s){let o=s.cause;for(let a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof ts?t.O_.$e(e):e instanceof mc?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(M.min()))try{let r=await hS(t.localStore);n.compareTo(r)>=0&&await function(s,o){let a=s.O_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){let c=s.C_.get(l);c&&s.C_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{let c=s.C_.get(u);if(!c)return;s.C_.set(u,c.withResumeToken(Qe.EMPTY_BYTE_STRING,c.snapshotVersion)),fS(s,u);let h=new aa(c.target,u,l,c.sequenceNumber);ry(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!ma(e))throw e;t.v_.add(1),await ya(t),t.x_.set("Offline"),n||(n=()=>hS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Bc(t)})}function mS(t,e){return e().catch(n=>Sc(t,n,e))}async function zc(t){let e=L(t),n=ur(e),r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Sx(e);)try{let i=await yx(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,Ax(e,i)}catch(i){await Sc(e,i)}gS(e)&&yS(e)}function Sx(t){return Xr(t)&&t.D_.length<10}function Ax(t,e){t.D_.push(e);let n=ur(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function gS(t){return Xr(t)&&!ur(t).Ho()&&t.D_.length>0}function yS(t){ur(t).start()}async function Px(t){ur(t).d_()}async function Rx(t){let e=ur(t);for(let n of t.D_)e.I_(n.mutations)}async function Cx(t,e,n){let r=t.D_.shift(),i=Um.from(r,e,n);await mS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zc(t)}async function kx(t,e){e&&ur(t).P_&&await async function(r,i){if(function(o){return KD(o)&&o!==v.ABORTED}(i.code)){let s=r.D_.shift();ur(r).Zo(),await mS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zc(r)}}(t,e),gS(t)&&yS(t)}async function ET(t,e){let n=L(t);n.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");let r=Xr(n);n.v_.add(3),await ya(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Bc(n)}async function Nx(t,e){let n=L(t);e?(n.v_.delete(2),await Bc(n)):e||(n.v_.add(2),await ya(n),n.x_.set("Unknown"))}function ys(t){return t.N_||(t.N_=function(n,r,i){let s=L(n);return s.R_(),new _g(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Ix.bind(null,t),To:Ex.bind(null,t),u_:Tx.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),sy(t)?iy(t):t.x_.set("Unknown")):(await t.N_.stop(),pS(t))})),t.N_}function ur(t){return t.L_||(t.L_=function(n,r,i){let s=L(n);return s.R_(),new wg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:Px.bind(null,t),To:kx.bind(null,t),E_:Rx.bind(null,t),T_:Cx.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await zc(t)):(await t.L_.stop(),t.D_.length>0&&(A("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}var Sg=class t{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){let o=Date.now()+r,a=new t(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new C(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function oy(t,e){if(an("AsyncQueue",`${e}: ${t}`),ma(t))return new C(v.UNAVAILABLE,`${e}: ${t}`);throw t}var Ac=class t{constructor(e){this.comparator=e?(n,r)=>e(n,r)||b.comparator(n.key,r.key):(n,r)=>b.comparator(n.key,r.key),this.keyedMap=Yo(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new t(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){let n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){let n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof t)||this.size!==e.size)return!1;let n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){let i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){let e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){let r=new t;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}};var Pc=class{constructor(){this.B_=new he(b.comparator)}track(e){let n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):O():this.B_=this.B_.insert(n,e)}k_(){let e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}},ds=class t{constructor(e,n,r,i,s,o,a,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,i,s){let o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new t(e,n,Ac.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ga(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}};var Ag=class{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}},Pg=class{constructor(){this.queries=new ar(e=>qT(e),ga),this.onlineState="Unknown",this.W_=new Set}};async function Dx(t,e){let n=L(t),r=3,i=e.query,s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new Ag,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){let a=oy(o,`Initialization of query '${Ji(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&ay(n)}async function xx(t,e){let n=L(t),r=e.query,i=3,s=n.queries.get(r);if(s){let o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bx(t,e){let n=L(t),r=!1;for(let i of e){let s=i.query,o=n.queries.get(s);if(o){for(let a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&ay(n)}function Ox(t,e,n){let r=L(t),i=r.queries.get(e);if(i)for(let s of i.Q_)s.onError(n);r.queries.delete(e)}function ay(t){t.W_.forEach(e=>{e.next()})}var Rg,TT;(TT=Rg||(Rg={})).j_="default",TT.Cache="cache";var Cg=class{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){let r=[];for(let i of e.docChanges)i.type!==3&&r.push(i);e=new ds(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;let r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;let n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=ds.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==Rg.Cache}};var Rc=class{constructor(e){this.key=e}},Cc=class{constructor(e){this.key=e}},kg=class{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=z(),this.mutatedKeys=z(),this.ha=$T(e),this.Pa=new Ac(this.ha)}get Ia(){return this.ua}Ta(e,n){let r=n?n.Ea:new Pc,i=n?n.Pa:this.Pa,s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1,u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{let d=i.get(c),m=Fc(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations),T=!1;d&&m?d.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),T=!0):this.da(d,m)||(r.track({type:2,doc:m}),T=!0,(u&&this.ha(m,u)>0||l&&this.ha(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(u||l)&&(a=!0)),T&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){let c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){let s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;let o=e.Ea.k_();o.sort((c,h)=>function(m,y){let _=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return _(m)-_(y)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),i=i!=null&&i;let a=n&&!i?this.Ra():[],u=this.la.size===0&&this.current&&!i?1:0,l=u!==this.ca;return this.ca=u,o.length!==0||l?{snapshot:new ds(this.query,e.Pa,s,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Pc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];let e=this.la;this.la=z(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});let n=[];return e.forEach(r=>{this.la.has(r)||n.push(new Cc(r))}),this.la.forEach(r=>{e.has(r)||n.push(new Rc(r))}),n}fa(e){this.ua=e.hs,this.la=z();let n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return ds.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}},Ng=class{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}},Dg=class{constructor(e){this.key=e,this.pa=!1}},xg=class{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ar(a=>qT(a),ga),this.Sa=new Map,this.ba=new Set,this.Da=new he(b.comparator),this.Ca=new Map,this.va=new la,this.Fa={},this.Ma=new Map,this.xa=ua.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}};async function Vx(t,e,n=!0){let r=TS(t),i,s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await vS(r,e,n,!0),i}async function Lx(t,e){let n=TS(t);await vS(n,e,!0,!1)}async function vS(t,e,n,r){let i=await vx(t.localStore,sn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current",a;return r&&(a=await Mx(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&dS(t.remoteStore,i),a}async function Mx(t,e,n,r,i){t.Na=(h,d,m)=>async function(_,T,p,f){let g=T.view.Ta(p);g.Xi&&(g=await IT(_.localStore,T.query,!1).then(({documents:N})=>T.view.Ta(N,g)));let w=f&&f.targetChanges.get(T.targetId),P=f&&f.targetMismatches.get(T.targetId)!=null,R=T.view.applyChanges(g,_.isPrimaryClient,w,P);return AT(_,T.targetId,R.Va),R.snapshot}(t,h,d,m);let s=await IT(t.localStore,e,!0),o=new kg(e,s.hs),a=o.Ta(s.documents),u=oa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),l=o.applyChanges(a,t.isPrimaryClient,u);AT(t,n,l.Va);let c=new Ng(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function Fx(t,e,n){let r=L(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!ga(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pg(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ny(r.remoteStore,i.targetId),bg(r,i.targetId)}).catch(pa)):(bg(r,i.targetId),await pg(r.localStore,i.targetId,!0))}async function Ux(t,e){let n=L(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ny(n.remoteStore,r.targetId))}async function Bx(t,e,n){let r=Kx(t);try{let i=await function(o,a){let u=L(o),l=_e.now(),c=a.reduce((m,y)=>m.add(y.key),z()),h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=An(),_=z();return u.os.getEntries(m,c).next(T=>{y=T,y.forEach((p,f)=>{f.isValidDocument()||(_=_.add(p))})}).next(()=>u.localDocuments.getOverlayedDocuments(m,y)).next(T=>{h=T;let p=[];for(let f of a){let g=WD(f,h.get(f.key).overlayedDocument);g!=null&&p.push(new Pn(f.key,g,LT(g.value.mapValue),$r.exists(!0)))}return u.mutationQueue.addMutationBatch(m,l,p,a)}).next(T=>{d=T;let p=T.applyToLocalDocumentSet(h,_);return u.documentOverlayCache.saveOverlays(m,T.batchId,p)})}).then(()=>({batchId:d.batchId,changes:WT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Fa[o.currentUser.toKey()];l||(l=new he($)),l=l.insert(a,u),o.Fa[o.currentUser.toKey()]=l}(r,i.batchId,n),await va(r,i.changes),await zc(r.remoteStore)}catch(i){let s=oy(i,"Failed to persist write");n.reject(s)}}async function _S(t,e){let n=L(t);try{let r=await mx(n.localStore,e);e.targetChanges.forEach((i,s)=>{let o=n.Ca.get(s);o&&(Y(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?Y(o.pa):i.removedDocuments.size>0&&(Y(o.pa),o.pa=!1))}),await va(n,r,e)}catch(r){await pa(r)}}function ST(t,e,n){let r=L(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){let i=[];r.wa.forEach((s,o)=>{let a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){let u=L(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(let d of h.Q_)d.G_(a)&&(l=!0)}),l&&ay(u)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zx(t,e,n){let r=L(t);r.sharedClientState.updateQueryState(e,"rejected",n);let i=r.Ca.get(e),s=i&&i.key;if(s){let o=new he(b.comparator);o=o.insert(s,Lt.newNoDocument(s,M.min()));let a=z().add(s),u=new pc(M.min(),new Map,new he($),o,a);await _S(r,u),r.Da=r.Da.remove(s),r.Ca.delete(e),uy(r)}else await pg(r.localStore,e,!1).then(()=>bg(r,e,n)).catch(pa)}async function jx(t,e){let n=L(t),r=e.batch.batchId;try{let i=await px(n.localStore,e);IS(n,r,null),wS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await pa(i)}}async function qx(t,e,n){let r=L(t);try{let i=await function(o,a){let u=L(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(Y(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,e);IS(r,e,n),wS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await pa(i)}}function wS(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function IS(t,e,n){let r=L(t),i=r.Fa[r.currentUser.toKey()];if(i){let s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function bg(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(let r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||ES(t,r)})}function ES(t,e){t.ba.delete(e.path.canonicalString());let n=t.Da.get(e);n!==null&&(ny(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),uy(t))}function AT(t,e,n){for(let r of n)r instanceof Rc?(t.va.addReference(r.key,e),$x(t,r)):r instanceof Cc?(A("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||ES(t,r.key)):O()}function $x(t,e){let n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(A("SyncEngine","New document in limbo: "+n),t.ba.add(r),uy(t))}function uy(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){let e=t.ba.values().next().value;t.ba.delete(e);let n=new b(oe.fromString(e)),r=t.xa.next();t.Ca.set(r,new Dg(n)),t.Da=t.Da.insert(n,r),dS(t.remoteStore,new aa(sn(ey(n.path)),r,"TargetPurposeLimboResolution",na._e))}}async function va(t,e,n){let r=L(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,u)=>{o.push(r.Na(u,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l?.fromCache?"not-current":"current"),l){i.push(l);let c=cg.Ki(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(u,l){let c=L(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>I.forEach(l,d=>I.forEach(d.qi,m=>c.persistence.referenceDelegate.addReference(h,d.targetId,m)).next(()=>I.forEach(d.Qi,m=>c.persistence.referenceDelegate.removeReference(h,d.targetId,m)))))}catch(h){if(!ma(h))throw h;A("LocalStore","Failed to update sequence numbers: "+h)}for(let h of l){let d=h.targetId;if(!h.fromCache){let m=c.ns.get(d),y=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(d,_)}}}(r.localStore,s))}async function Gx(t,e){let n=L(t);if(!n.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());let r=await cS(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(u=>{u.reject(new C(v.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.us)}}function Wx(t,e){let n=L(t),r=n.Ca.get(e);if(r&&r.pa)return z().add(r.key);{let i=z(),s=n.Sa.get(e);if(!s)return i;for(let o of s){let a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function TS(t){let e=L(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_S.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Wx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zx.bind(null,e),e.ya.u_=bx.bind(null,e.eventManager),e.ya.La=Ox.bind(null,e.eventManager),e}function Kx(t){let e=L(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qx.bind(null,e),e}var kc=class{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return fx(this.persistence,new dg,e.initialUser,this.serializer)}createPersistence(e){return new ag(lg.Hr,this.serializer)}createSharedClientState(e){return new mg}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}};var Og=class{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ST(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gx.bind(null,this.syncEngine),await Nx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Pg}()}createDatastore(e){let n=Uc(e.databaseInfo.databaseId),r=function(s){return new vg(s)}(e.databaseInfo);return function(s,o,a,u){return new Ig(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new Tg(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ST(this.syncEngine,n,0),function(){return Ic.D()?new Ic:new gg}())}createSyncEngine(e,n){return function(i,s,o,a,u,l,c){let h=new xg(i,s,o,a,u,l);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){let i=L(r);A("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ya(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}};var Vg=class{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}};var Lg=class{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=oc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new C(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let r=oy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}};async function um(t,e){t.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");let n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function PT(t,e){t.asyncQueue.verifyOperationInProgress();let n=await Qx(t);A("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>ET(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>ET(e.remoteStore,i)),t._onlineComponents=e}function Hx(t){return t.name==="FirebaseError"?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Qx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await um(t,t._uninitializedComponentsProvider._offline)}catch(e){let n=e;if(!Hx(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await um(t,new kc)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await um(t,new kc);return t._offlineComponents}async function SS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await PT(t,t._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await PT(t,new Og))),t._onlineComponents}function Yx(t){return SS(t).then(e=>e.syncEngine)}async function RT(t){let e=await SS(t),n=e.eventManager;return n.onListen=Vx.bind(null,e.syncEngine),n.onUnlisten=Fx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Lx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ux.bind(null,e.syncEngine),n}function AS(t){let e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}var CT=new Map;function PS(t,e,n){if(!n)throw new C(v.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Jx(t,e,n,r){if(e===!0&&r===!0)throw new C(v.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function kT(t){if(!b.isDocumentKey(t))throw new C(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function NT(t){if(b.isDocumentKey(t))throw new C(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function jc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{let e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":O()}function ta(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new C(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=jc(t);throw new C(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}var Nc=class{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new C(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new C(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Jx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=AS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new C(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new C(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new C(v.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}},fs=class{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new C(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new C(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lm;switch(r.type){case"firstParty":return new fm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new C(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){let r=CT.get(n);r&&(A("ComponentProvider","Removing Datastore"),CT.delete(n),r.terminate())}(this),Promise.resolve()}};function Xx(t,e,n,r={}){var i;let s=(t=ta(t,fs))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Pe.MOCK_USER;else{a=m0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);let l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new C(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pe(l)}t._authCredentials=new cm(new sc(a,u))}}var Rn=class t{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new t(this.firestore,e,this._query)}},ft=class t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new t(this.firestore,e,this._key)}},rr=class t extends Rn{constructor(e,n,r){super(e,n,ey(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new b(e))}withConverter(e){return new t(this.firestore,e,this._path)}};function RS(t,e,...n){if(t=se(t),PS("collection","path",e),t instanceof fs){let r=oe.fromString(e,...n);return NT(r),new rr(t,null,r)}{if(!(t instanceof ft||t instanceof rr))throw new C(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=t._path.child(oe.fromString(e,...n));return NT(r),new rr(t.firestore,null,r)}}function Zx(t,e,...n){if(t=se(t),arguments.length===1&&(e=oc.newId()),PS("doc","path",e),t instanceof fs){let r=oe.fromString(e,...n);return kT(r),new ft(t,null,new b(r))}{if(!(t instanceof ft||t instanceof rr))throw new C(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let r=t._path.child(oe.fromString(e,...n));return kT(r),new ft(t.firestore,t instanceof rr?t.converter:null,new b(r))}}function CS(t,e){return t=se(t),e=se(e),t instanceof Rn&&e instanceof Rn&&t.firestore===e.firestore&&ga(t._query,e._query)&&t.converter===e.converter}var Mg=class{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Ec(this,"async_queue_retry"),this.cu=()=>{let n=am();n&&A("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};let e=am();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;let n=am();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});let n=new nn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!ma(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){let n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;let i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw an("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);let i=Sg.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&O()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(let n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(let n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){let n=this.su.indexOf(e);this.su.splice(n,1)}};function DT(t){return function(n,r){if(typeof n!="object"||n===null)return!1;let i=n;for(let s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}var ps=class extends fs{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Mg}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||DS(this),this._firestoreClient.terminate()}};function kS(t,e){let n=typeof t=="object"?t:Rr(),r=typeof t=="string"?t:e||"(default)",i=xt(n,"firestore").getImmediate({identifier:r});if(!i._initialized){let s=p0("firestore");s&&Xx(i,...s)}return i}function NS(t){return t._firestoreClient||DS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DS(t){var e,n,r;let i=t._freezeSettings(),s=function(a,u,l,c){return new Im(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,AS(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Lg(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}var ca=class t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new t(Qe.fromBase64String(e))}catch(n){throw new C(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new t(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};var ha=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new C(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};var Dc=class{constructor(e){this._methodName=e}};var da=class{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new C(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new C(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}};var eb=/^__.*__$/,Fg=class{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jr(e,this.data,n,this.fieldTransforms)}};function xS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}var Ug=class t{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;let r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return xc(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(xS(this.Vu)&&eb.test(e))throw this.Su('Document fields cannot begin and end with "__"')}},Bg=class{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}Cu(e,n,r,i=!1){return new Ug({Vu:e,methodName:n,Du:r,path:dt.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function bS(t){let e=t._freezeSettings(),n=Uc(t._databaseId);return new Bg(t._databaseId,!!e.ignoreUndefinedProperties,n)}function tb(t,e,n,r,i,s={}){let o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);LS("Data must be an object, but it was:",o,r);let a=OS(r,o),u,l;if(s.merge)u=new tn(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){let c=[];for(let h of s.mergeFields){let d=rb(e,h,n);if(!o.contains(d))throw new C(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);sb(c,d)||c.push(d)}u=new tn(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Fg(new Vt(a),u,l)}function nb(t,e,n,r=!1){return ly(n,t.Cu(r?4:3,e))}function ly(t,e){if(VS(t=se(t)))return LS("Unsupported field value:",e,t),OS(t,e);if(t instanceof Dc)return function(r,i){if(!xS(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);let s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){let s=[],o=0;for(let a of r){let u=ly(a,i.wu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){let s=_e.fromDate(r);return{timestampValue:vc(i.serializer,s)}}if(r instanceof _e){let s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vc(i.serializer,s)}}if(r instanceof da)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ca)return{bytesValue:rS(i.serializer,r._byteString)};if(r instanceof ft){let s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ty(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${jc(r)}`)}(t,e)}function OS(t,e){let n={};return OT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,i)=>{let s=ly(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function VS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof da||t instanceof ca||t instanceof ft||t instanceof Dc)}function LS(t,e,n){if(!VS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){let r=jc(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function rb(t,e,n){if((e=se(e))instanceof ha)return e._internalPath;if(typeof e=="string")return MS(t,e);throw xc("Field path arguments must be of type string or ",t,!1,void 0,n)}var ib=new RegExp("[~\\*/\\[\\]]");function MS(t,e,n){if(e.search(ib)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ha(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xc(t,e,n,r,i){let s=r&&!r.isEmpty(),o=i!==void 0,a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new C(v.INVALID_ARGUMENT,a+t+u)}function sb(t,e){return t.some(n=>n.isEqual(e))}var bc=class{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let e=new zg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let n=this._document.data.field(cy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}},zg=class extends bc{data(){return super.data()}};function cy(t,e){return typeof e=="string"?MS(t,e):e instanceof ha?e._internalPath:e._delegate._internalPath}function ob(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new C(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var fa=class{},Oc=class extends fa{};function FS(t,e,...n){let r=[];e instanceof fa&&r.push(e),r=r.concat(n),function(s){let o=s.filter(u=>u instanceof qg).length,a=s.filter(u=>u instanceof jg).length;if(o>1||o>0&&a>0)throw new C(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(let i of r)t=i._apply(t);return t}var jg=class t extends Oc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new t(e,n,r)}_apply(e){let n=this._parse(e);return BS(e._query,n),new Rn(e.firestore,e.converter,Om(e._query,n))}_parse(e){let n=bS(e.firestore);return function(s,o,a,u,l,c,h){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new C(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){bT(h,c);let m=[];for(let y of h)m.push(xT(u,s,y));d={arrayValue:{values:m}}}else d=xT(u,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||bT(h,c),d=nb(a,o,h,c==="in"||c==="not-in");return ge.create(l,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}};var qg=class t extends fa{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new t(e,n)}_parse(e){let n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Mt.create(n,this._getOperator())}_apply(e){let n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i,a=s.getFlattenedFilters();for(let u of a)BS(o,u),o=Om(o,u)}(e._query,n),new Rn(e.firestore,e.converter,Om(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}};var $g=class t extends Oc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new t(e,n)}_apply(e){let n=function(i,s,o){if(i.startAt!==null)throw new C(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new C(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Hr(s,o)}(e._query,this._field,this._direction);return new Rn(e.firestore,e.converter,function(i,s){let o=i.explicitOrderBy.concat([s]);return new or(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}};function US(t,e="asc"){let n=e,r=cy("orderBy",t);return $g._create(r,n)}function xT(t,e,n){if(typeof(n=se(n))=="string"){if(n==="")throw new C(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jT(e)&&n.indexOf("/")!==-1)throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);let r=e.path.child(oe.fromString(n));if(!b.isDocumentKey(r))throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iT(t,new b(r))}if(n instanceof ft)return iT(t,n._key);throw new C(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${jc(n)}.`)}function bT(t,e){if(!Array.isArray(t)||t.length===0)throw new C(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BS(t,e){let n=function(i,s){for(let o of i)for(let a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new C(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new C(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}var Gg=class{convertValue(e,n="none"){switch(Kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw O()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){let r={};return gs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new da(ce(e.latitude),ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":let r=Yg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){let n=ir(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){let r=oe.fromString(e);Y(lS(r));let i=new hc(r.get(1),r.get(3)),s=new b(r.popFirst(5));return i.isEqual(n)||an(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}};function ab(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}var jr=class{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}},Vc=class extends bc{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let n=new ns(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){let r=this._document.data.field(cy("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},ns=class extends Vc{data(e={}){return super.data(e)}},Wg=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new jr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){let e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ns(this._firestore,this._userDataWriter,r.key,r,new jr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new C(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{let u=new ns(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{let u=new ns(i._firestore,i._userDataWriter,a.doc.key,a.doc,new jr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter),l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:ub(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function ub(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}var Lc=class extends Gg{constructor(e){super(),this.firestore=e}convertBytes(e){return new ca(e)}convertReference(e){let n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}};function zS(t,e){let n=ta(t.firestore,ps),r=Zx(t),i=ab(t.converter,e);return lb(n,[tb(bS(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,$r.exists(!1))]).then(()=>r)}function hy(t,...e){var n,r,i;t=se(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||DT(e[o])||(s=e[o],o++);let a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(DT(e[o])){let h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof ft)l=ta(t.firestore,ps),c=ey(t._key.path),u={next:h=>{e[o]&&e[o](cb(l,t,h))},error:e[o+1],complete:e[o+2]};else{let h=ta(t,Rn);l=ta(h.firestore,ps),c=h._query;let d=new Lc(l);u={next:m=>{e[o]&&e[o](new Wg(l,d,h,m))},error:e[o+1],complete:e[o+2]},ob(t._query)}return function(d,m,y,_){let T=new Vg(_),p=new Cg(m,T,y);return d.asyncQueue.enqueueAndForget(async()=>Dx(await RT(d),p)),()=>{T.Qa(),d.asyncQueue.enqueueAndForget(async()=>xx(await RT(d),p))}}(NS(l),c,a,u)}function lb(t,e){return function(r,i){let s=new nn;return r.asyncQueue.enqueueAndForget(async()=>Bx(await Yx(r),i,s)),s.promise}(NS(t),e)}function cb(t,e,n){let r=n.docs.get(e._key),i=new Lc(t);return new Vc(t,i,e._key,r,new jr(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ms=i})(Jn),nt(new Ee("firestore",(r,{instanceIdentifier:i,options:s})=>{let o=r.getProvider("app").getImmediate(),a=new ps(new hm(r.getProvider("auth-internal")),new mm(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new C(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hc(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),De(eT,"4.5.1",e),De(eT,"4.5.1","esm2017")})();var $S="@firebase/installations",my="0.6.6";var GS=1e4,WS=`w:${my}`,KS="FIS_v2",hb="https://firebaseinstallations.googleapis.com/v1",db=60*60*1e3,fb="installations",pb="Installations";var mb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ei=new ct(fb,pb,mb);function HS(t){return t instanceof Ne&&t.code.includes("request-failed")}function QS({projectId:t}){return`${hb}/projects/${t}/installations`}function YS(t){return{token:t.token,requestStatus:2,expiresIn:yb(t.expiresIn),creationTime:Date.now()}}async function JS(t,e){let r=(await e.json()).error;return ei.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function XS({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function gb(t,{refreshToken:e}){let n=XS(t);return n.append("Authorization",vb(e)),n}async function ZS(t){let e=await t();return e.status>=500&&e.status<600?t():e}function yb(t){return Number(t.replace("s","000"))}function vb(t){return`${KS} ${t}`}async function _b({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let r=QS(t),i=XS(t),s=e.getImmediate({optional:!0});if(s){let l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}let o={fid:n,authVersion:KS,appId:t.appId,sdkVersion:WS},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await ZS(()=>fetch(r,a));if(u.ok){let l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:YS(l.authToken)}}else throw await JS("Create Installation",u)}function eA(t){return new Promise(e=>{setTimeout(e,t)})}function wb(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}var Ib=/^[cdef][\w-]{21}$/,py="";function Eb(){try{let t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;let n=Tb(t);return Ib.test(n)?n:py}catch{return py}}function Tb(t){return wb(t).substr(0,22)}function $c(t){return`${t.appName}!${t.appId}`}var tA=new Map;function nA(t,e){let n=$c(t);rA(n,e),Sb(n,e)}function rA(t,e){let n=tA.get(t);if(n)for(let r of n)r(e)}function Sb(t,e){let n=Ab();n&&n.postMessage({key:t,fid:e}),Pb()}var Zr=null;function Ab(){return!Zr&&"BroadcastChannel"in self&&(Zr=new BroadcastChannel("[Firebase] FID Change"),Zr.onmessage=t=>{rA(t.data.key,t.data.fid)}),Zr}function Pb(){tA.size===0&&Zr&&(Zr.close(),Zr=null)}var Rb="firebase-installations-database",Cb=1,ti="firebase-installations-store",dy=null;function gy(){return dy||(dy=Hu(Rb,Cb,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ti)}}})),dy}async function qc(t,e){let n=$c(t),i=(await gy()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&nA(t,e.fid),e}async function iA(t){let e=$c(t),r=(await gy()).transaction(ti,"readwrite");await r.objectStore(ti).delete(e),await r.done}async function Gc(t,e){let n=$c(t),i=(await gy()).transaction(ti,"readwrite"),s=i.objectStore(ti),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&nA(t,a.fid),a}async function yy(t){let e,n=await Gc(t.appConfig,r=>{let i=kb(r),s=Nb(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===py?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function kb(t){let e=t||{fid:Eb(),registrationStatus:0};return sA(e)}function Nb(t,e){if(e.registrationStatus===0){if(!navigator.onLine){let i=Promise.reject(ei.create("app-offline"));return{installationEntry:e,registrationPromise:i}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Db(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:xb(t)}:{installationEntry:e}}async function Db(t,e){try{let n=await _b(t,e);return qc(t.appConfig,n)}catch(n){throw HS(n)&&n.customData.serverCode===409?await iA(t.appConfig):await qc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function xb(t){let e=await jS(t.appConfig);for(;e.registrationStatus===1;)await eA(100),e=await jS(t.appConfig);if(e.registrationStatus===0){let{installationEntry:n,registrationPromise:r}=await yy(t);return r||n}return e}function jS(t){return Gc(t,e=>{if(!e)throw ei.create("installation-not-found");return sA(e)})}function sA(t){return bb(t)?{fid:t.fid,registrationStatus:0}:t}function bb(t){return t.registrationStatus===1&&t.registrationTime+GS<Date.now()}async function Ob({appConfig:t,heartbeatServiceProvider:e},n){let r=Vb(t,n),i=gb(t,n),s=e.getImmediate({optional:!0});if(s){let l=await s.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}let o={installation:{sdkVersion:WS,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await ZS(()=>fetch(r,a));if(u.ok){let l=await u.json();return YS(l)}else throw await JS("Generate Auth Token",u)}function Vb(t,{fid:e}){return`${QS(t)}/${e}/authTokens:generate`}async function vy(t,e=!1){let n,r=await Gc(t.appConfig,s=>{if(!oA(s))throw ei.create("not-registered");let o=s.authToken;if(!e&&Fb(o))return s;if(o.requestStatus===1)return n=Lb(t,e),s;{if(!navigator.onLine)throw ei.create("app-offline");let a=Bb(s);return n=Mb(t,a),a}});return n?await n:r.authToken}async function Lb(t,e){let n=await qS(t.appConfig);for(;n.authToken.requestStatus===1;)await eA(100),n=await qS(t.appConfig);let r=n.authToken;return r.requestStatus===0?vy(t,e):r}function qS(t){return Gc(t,e=>{if(!oA(e))throw ei.create("not-registered");let n=e.authToken;return zb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Mb(t,e){try{let n=await Ob(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await qc(t.appConfig,r),n}catch(n){if(HS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await iA(t.appConfig);else{let r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await qc(t.appConfig,r)}throw n}}function oA(t){return t!==void 0&&t.registrationStatus===2}function Fb(t){return t.requestStatus===2&&!Ub(t)}function Ub(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+db}function Bb(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function zb(t){return t.requestStatus===1&&t.requestTime+GS<Date.now()}async function jb(t){let e=t,{installationEntry:n,registrationPromise:r}=await yy(e);return r?r.catch(console.error):vy(e).catch(console.error),n.fid}async function qb(t,e=!1){let n=t;return await $b(n),(await vy(n,e)).token}async function $b(t){let{registrationPromise:e}=await yy(t);e&&await e}function Gb(t){if(!t||!t.options)throw fy("App Configuration");if(!t.name)throw fy("App Name");let e=["projectId","apiKey","appId"];for(let n of e)if(!t.options[n])throw fy(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function fy(t){return ei.create("missing-app-config-values",{valueName:t})}var aA="installations",Wb="installations-internal",Kb=t=>{let e=t.getProvider("app").getImmediate(),n=Gb(e),r=xt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hb=t=>{let e=t.getProvider("app").getImmediate(),n=xt(e,aA).getImmediate();return{getId:()=>jb(n),getToken:i=>qb(n,i)}};function Qb(){nt(new Ee(aA,Kb,"PUBLIC")),nt(new Ee(Wb,Hb,"PRIVATE"))}Qb();De($S,my);De($S,my,"esm2017");var Wc="analytics",Yb="firebase_id",Jb="origin",Xb=60*1e3,Zb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ay="https://www.googletagmanager.com/gtag/js";var rt=new Gt("@firebase/analytics");var eO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},pt=new ct("analytics","Analytics",eO);function tO(t){if(!t.startsWith(Ay)){let e=pt.create("invalid-gtag-resource",{gtagURL:t});return rt.warn(e.message),""}return t}function pA(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function nO(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function rO(t,e){let n=nO("firebase-js-sdk-policy",{createScriptURL:tO}),r=document.createElement("script"),i=`${Ay}?l=${t}&id=${e}`;r.src=n?n?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function iO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function sO(t,e,n,r,i,s){let o=r[i];try{if(o)await e[o];else{let u=(await pA(n)).find(l=>l.measurementId===i);u&&await e[u.appId]}}catch(a){rt.error(a)}t("config",i,s)}async function oO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);let a=await pA(n);for(let u of o){let l=a.find(h=>h.measurementId===u),c=l&&e[l.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){rt.error(s)}}function aO(t,e,n,r){async function i(s,...o){try{if(s==="event"){let[a,u]=o;await oO(t,e,n,a,u)}else if(s==="config"){let[a,u]=o;await sO(t,e,n,r,a,u)}else if(s==="consent"){let[a]=o;t("consent","update",a)}else if(s==="get"){let[a,u,l]=o;t("get",a,u,l)}else if(s==="set"){let[a]=o;t("set",a)}else t(s,...o)}catch(a){rt.error(a)}}return i}function uO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=aO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function lO(t){let e=window.document.getElementsByTagName("script");for(let n of Object.values(e))if(n.src&&n.src.includes(Ay)&&n.src.includes(t))return n;return null}var cO=30,hO=1e3,wy=class{constructor(e={},n=hO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}},mA=new wy;function dO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fO(t){var e;let{appId:n,apiKey:r}=t,i={method:"GET",headers:dO(r)},s=Zb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{let u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw pt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function pO(t,e=mA,n){let{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw pt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw pt.create("no-api-key")}let o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Iy;return setTimeout(async()=>{a.abort()},n!==void 0?n:Xb),gA({appId:r,apiKey:i,measurementId:s},o,a,e)}async function gA(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=mA){var s;let{appId:o,measurementId:a}=t;try{await mO(r,e)}catch(u){if(a)return rt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u?.message}]`),{appId:o,measurementId:a};throw u}try{let u=await fO(t);return i.deleteThrottleMetadata(o),u}catch(u){let l=u;if(!gO(l)){if(i.deleteThrottleMetadata(o),a)return rt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:o,measurementId:a};throw u}let c=Number((s=l?.customData)===null||s===void 0?void 0:s.httpStatus)===503?If(n,i.intervalMillis,cO):If(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),rt.debug(`Calling attemptFetch again in ${c} millis`),gA(t,h,r,i)}}function mO(t,e){return new Promise((n,r)=>{let i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(pt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gO(t){if(!(t instanceof Ne)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}var Iy=class{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}};var Ey;async function yO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{let s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}var Ty;function vO(t){Ty=t}function _O(t){Ey=t}async function wO(){if(Oi())try{await Gu()}catch(t){return rt.warn(pt.create("indexeddb-unavailable",{errorInfo:t?.toString()}).message),!1}else return rt.warn(pt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function IO(t,e,n,r,i,s,o){var a;let u=pO(t);u.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&rt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>rt.error(m)),e.push(u);let l=wO().then(m=>{if(m)return r.getId()}),[c,h]=await Promise.all([u,l]);lO(s)||rO(s,c.measurementId),Ty&&(i("consent","default",Ty),vO(void 0)),i("js",new Date);let d=(a=o?.config)!==null&&a!==void 0?a:{};return d[Jb]="firebase",d.update=!0,h!=null&&(d[Yb]=h),i("config",c.measurementId,d),Ey&&(i("set",Ey),_O(void 0)),c.measurementId}var Sy=class{constructor(e){this.app=e}_delete(){return delete _a[this.app.options.appId],Promise.resolve()}},_a={},uA=[],lA={},_y="dataLayer",EO="gtag",cA,yA,hA=!1;function TO(){let t=[];if($u()&&t.push("This is a browser extension environment."),w0()||t.push("Cookies are not available."),t.length>0){let e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=pt.create("invalid-analytics-context",{errorInfo:e});rt.warn(n.message)}}function SO(t,e,n){TO();let r=t.options.appId;if(!r)throw pt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)rt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw pt.create("no-api-key");if(_a[r]!=null)throw pt.create("already-exists",{id:r});if(!hA){iO(_y);let{wrappedGtag:s,gtagCore:o}=uO(_a,uA,lA,_y,EO);yA=s,cA=o,hA=!0}return _a[r]=IO(t,uA,lA,e,cA,_y,n),new Sy(t)}function vA(t=Rr()){t=se(t);let e=xt(t,Wc);return e.isInitialized()?e.getImmediate():AO(t)}function AO(t,e={}){let n=xt(t,Wc);if(n.isInitialized()){let i=n.getImmediate();if(wn(e,n.getOptions()))return i;throw pt.create("already-initialized")}return n.initialize({options:e})}function PO(t,e,n,r){t=se(t),yO(yA,_a[t.app.options.appId],e,n,r).catch(i=>rt.error(i))}var dA="@firebase/analytics",fA="0.10.2";function RO(){nt(new Ee(Wc,(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return SO(r,i,n)},"PUBLIC")),nt(new Ee("analytics-internal",t,"PRIVATE")),De(dA,fA),De(dA,fA,"esm2017");function t(e){try{let n=e.getProvider(Wc).getImmediate();return{logEvent:(r,i,s)=>PO(n,r,i,s)}}catch(n){throw pt.create("interop-component-reg-failed",{reason:n})}}}RO();var Ft=ni(ii());function CO(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{l(r.next(c))}catch(h){o(h)}}function u(c){try{l(r.throw(c))}catch(h){o(h)}}function l(c){c.done?s(c.value):i(c.value).then(a,u)}l((r=r.apply(t,e||[])).next())})}function kO(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(c){return u([l,c])}}function u(l){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=l[0]&2?i.return:l[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,l[1])).done)return s;switch(i=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,i=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){n.label=l[1];break}if(l[0]===6&&n.label<s[1]){n.label=s[1],s=l;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(l);break}s[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(c){l=[6,c],i=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var vs=function(){return vs=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},vs.apply(this,arguments)},_A=function(t){return{loading:t==null,value:t}},NO=function(){return function(t,e){switch(e.type){case"error":return vs(vs({},t),{error:e.error,loading:!1,value:void 0});case"reset":return _A(e.defaultValue);case"value":return vs(vs({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},DO=function(t){var e=t?t():void 0,n=(0,Ft.useReducer)(NO(),_A(e)),r=n[0],i=n[1],s=(0,Ft.useCallback)(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=(0,Ft.useCallback)(function(u){i({type:"error",error:u})},[]),a=(0,Ft.useCallback)(function(u){i({type:"value",value:u})},[]);return(0,Ft.useMemo)(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},wA=function(t,e){var n=DO(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return(0,Ft.useEffect)(function(){var u=lp(t,function(l){return CO(void 0,void 0,void 0,function(){var c;return kO(this,function(h){switch(h.label){case 0:if(!e?.onUserChanged)return[3,4];h.label=1;case 1:return h.trys.push([1,3,,4]),[4,e.onUserChanged(l)];case 2:return h.sent(),[3,4];case 3:return c=h.sent(),s(c),[3,4];case 4:return o(l),[2]}})})},s);return function(){u()}},[t]),[a,i,r]};var Ye=ni(ii());var _s=function(){return _s=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},_s.apply(this,arguments)},IA=function(t){return{loading:t==null,value:t}},xO=function(){return function(t,e){switch(e.type){case"error":return _s(_s({},t),{error:e.error,loading:!1,value:void 0});case"reset":return IA(e.defaultValue);case"value":return _s(_s({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},bO=function(t){var e=t?t():void 0,n=(0,Ye.useReducer)(xO(),IA(e)),r=n[0],i=n[1],s=(0,Ye.useCallback)(function(){var u=t?t():void 0;i({type:"reset",defaultValue:u})},[t]),o=(0,Ye.useCallback)(function(u){i({type:"error",error:u})},[]),a=(0,Ye.useCallback)(function(u){i({type:"value",value:u})},[]);return(0,Ye.useMemo)(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},OO=function(t,e,n){var r=(0,Ye.useRef)(t);return(0,Ye.useEffect)(function(){e(t,r.current)||(r.current=t,n&&n())}),r};var VO=function(t,e){var n=!t&&!e,r=!!t&&!!e&&CS(t,e);return n||r},LO=function(t,e){return OO(t,VO,e)},MO=function(t,e){var n=bO(),r=n.error,i=n.loading,s=n.reset,o=n.setError,a=n.setValue,u=n.value,l=LO(t,s);return(0,Ye.useEffect)(function(){if(!l.current){a(void 0);return}var c=e?.snapshotListenOptions?hy(l.current,e.snapshotListenOptions,a,o):hy(l.current,a,o);return function(){c()}},[l.current]),[u,i,r]};var EA=function(t,e){var n=MO(t,e),r=n[0],i=n[1],s=n[2],o=FO(r,e?.snapshotOptions,e?.initialValue);return[o,i,s,r]};var FO=function(t,e,n){return(0,Ye.useMemo)(function(){var r;return(r=t?.docs.map(function(i){return i.data(e)}))!==null&&r!==void 0?r:n},[t,e])};var G=ni(Py(),1),Cy=Lf({apiKey:"AIzaSyDwtVZ_a_CwxM4GrRKFl04hDTNwzPMPcFg",authDomain:"yuriusu-superchat.firebaseapp.com",projectId:"yuriusu-superchat",storageBucket:"yuriusu-superchat.appspot.com",messagingSenderId:"58217748697",appId:"1:58217748697:web:c7896177f3075392e246c8",measurementId:"G-CE5H8W2SR9"}),Ry=pp(Cy),GO=kS(Cy);vA(Cy);var WO=()=>{let t=(0,lr.useRef)(null),[e]=wA(Ry),n=RS(GO,"messages"),[r]=EA(FS(n,US("time"))),[i,s]=(0,lr.useState)(""),o=async()=>await fp(Ry,new er),a=async()=>await cp(Ry),u=c=>s(c.target.value),l=async c=>{c.preventDefault(),await zS(n,{time:_e.fromDate(new Date),uid:e.uid,photoURL:e.photoURL,text:i}),s("")};return(0,lr.useEffect)(()=>{setTimeout(async()=>await t.current?.scrollIntoView({behavior:"smooth"}),0)},[r]),(0,G.jsxs)(lr.StrictMode,{children:[(0,G.jsxs)("header",{className:"header",children:[(0,G.jsx)("i",{className:"logo material-icons",children:"forum"}),(0,G.jsx)("h1",{className:"title",children:e?"Conversations":"Superchat"}),e&&(0,G.jsx)("button",{className:"sign-out material-icons",onClick:a,children:"logout"})]}),(0,G.jsx)("section",{className:"section",children:e?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)("main",{className:"main",children:[r&&r.map(c=>(0,G.jsxs)("div",{className:`data ${e.uid==c.uid?"data-sent":"data-received"}`,children:[(0,G.jsx)("img",{className:"data_photo",src:c.photoURL}),(0,G.jsx)("p",{className:"data_text",dangerouslySetInnerHTML:{__html:c.text.replaceAll(`
`,"<br/>")}})]},c.time)),(0,G.jsx)("div",{ref:t})]}),(0,G.jsxs)("form",{className:"form",onSubmit:l,children:[(0,G.jsx)("textarea",{className:"textarea",type:"text",placeholder:"Message",autoFocus:!0,value:i,onChange:u}),(0,G.jsx)("button",{className:"submit material-icons",type:"submit",disabled:!i,children:"send"})]})]}):(0,G.jsxs)("button",{className:"sign-in",onClick:o,children:[(0,G.jsx)("i",{className:"sign-in_icon",children:(0,G.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 48 48",width:"18px",height:"18px",children:(0,G.jsxs)("g",{children:[(0,G.jsx)("path",{fill:"#ea4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),(0,G.jsx)("path",{fill:"#4285f4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),(0,G.jsx)("path",{fill:"#fbbc05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),(0,G.jsx)("path",{fill:"#34a853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),(0,G.jsx)("path",{fill:"none",d:"M0 0h48v48H0z"})]})})}),(0,G.jsx)("span",{className:"sign-in_text",children:"Sign in with Google"})]})})]})};(0,PA.createRoot)(document.getElementById("app")).render((0,G.jsx)(WO,{}));"serviceWorker"in navigator&&await(await navigator.serviceWorker.ready).unregister();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/util/dist/index.esm2017.js:
  (**
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
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

firebase/app/dist/esm/index.esm.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)

@firebase/auth/dist/esm2017/index-a8cf6c8f.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
  *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
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
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
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
   *)

@firebase/installations/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/analytics/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

@firebase/analytics/dist/esm/index.esm2017.js:
  (**
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
   *)
  (**
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
   *)

react-firebase-hooks/auth/dist/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

react-firebase-hooks/firestore/dist/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

react-firebase-hooks/firestore/dist/index.esm.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
