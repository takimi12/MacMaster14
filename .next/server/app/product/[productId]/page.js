(()=>{var e={};e.id=489,e.ids=[489],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2536:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>f,originalPathname:()=>d,pages:()=>c,routeModule:()=>p,tree:()=>l});var n=r(3449),a=r(4437),o=r(4804),i=r.n(o),s=r(8939),u={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>s[e]);r.d(t,u);let l=["",{children:["product",{children:["[productId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7595)),"/Users/thonasjefferson/Desktop/next mATER/src/app/product/[productId]/page.tsx"],metadata:{icon:[],apple:[],openGraph:[async e=>(await Promise.resolve().then(r.bind(r,7193))).default(e)],twitter:[],manifest:void 0}}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9738))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5289)),"/Users/thonasjefferson/Desktop/next mATER/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1422,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9738))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/thonasjefferson/Desktop/next mATER/src/app/product/[productId]/page.tsx"],d="/product/[productId]/page",f={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/product/[productId]/page",pathname:"/product/[productId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6012:(e,t,r)=>{let n={"1078ce0fe01e9671c5ce53d5da032002b75f1daa":()=>Promise.resolve().then(r.bind(r,7595)).then(e=>e.$$ACTION_1)};async function a(e,...t){return(await n[e]()).apply(null,t)}e.exports={"1078ce0fe01e9671c5ce53d5da032002b75f1daa":a.bind(null,"1078ce0fe01e9671c5ce53d5da032002b75f1daa")}},3284:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6494,23)),Promise.resolve().then(r.t.bind(r,3047,23)),Promise.resolve().then(r.t.bind(r,5465,23)),Promise.resolve().then(r.t.bind(r,3073,23)),Promise.resolve().then(r.t.bind(r,9373,23)),Promise.resolve().then(r.t.bind(r,9382,23)),Promise.resolve().then(r.t.bind(r,2516,23))},6290:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2516,23)),Promise.resolve().then(r.t.bind(r,5414,23)),Promise.resolve().then(r.bind(r,5977)),Promise.resolve().then(r.bind(r,4235)),Promise.resolve().then(r.bind(r,7914))},5977:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AddToCartButton:()=>o});var n=r(7408);r(4616);var a=r(3865);let o=({productName:e})=>{let{editProduct:t}=(0,a.useCartContext)();return n.jsx("button",{"data-testid":"add-to-cart-button",onClick:()=>{t(e,"increase")},children:"Add to cart"})}},4235:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ProductVariant:()=>o});var n=r(7408),a=r(4616);let o=({variants:e})=>{let[t,r]=(0,a.useState)(null);return n.jsx("div",{children:e.map(e=>n.jsx(n.Fragment,{children:n.jsx("button",{style:{backgroundColor:t?.name===e.name?"black":"transparent"},onClick:()=>r(e),children:e.name},e.name)}))})}},7914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Reviews:()=>o});var n=r(7408),a=r(4616);let o=({reviews:e,addReviewAction:t})=>{let[r,o]=(0,a.useOptimistic)(e,(e,t)=>[...e,t]),i=async e=>{e.preventDefault();let n=e.target.headline.value,a=e.target.content.value,i=Number(e.target.rating.value),s=e.target.name.value,u=e.target.email.value;o([...r,{headline:n,content:a,rating:i,name:s,email:u}]),t({headline:n,content:a,rating:i,name:s,email:u})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("form",{onSubmit:i,"data-testid":"add-review-form",children:[n.jsx("input",{type:"text",name:"headline",placeholder:"Headline"}),n.jsx("input",{type:"text",name:"content",placeholder:"Content"}),n.jsx("input",{type:"text",name:"rating",placeholder:"Rating"}),n.jsx("input",{type:"text",name:"name",placeholder:"Name"}),n.jsx("input",{type:"email",name:"email",placeholder:"Email"}),n.jsx("button",{type:"submit",children:"Wyślij"})]}),r&&r.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["Headline: ",e.headline]}),(0,n.jsxs)("p",{children:["Content: ",e.content]}),(0,n.jsxs)("p",{children:["Name: ",e.name]}),(0,n.jsxs)("p",{children:["Email: ",e.email]}),(0,n.jsxs)("p",{children:["Rating: ",e.rating]}),t!==r.length-1&&n.jsx("hr",{})]},e.name))]})}},4013:(e,t,r)=>{"use strict";Object.defineProperty(t,"U",{enumerable:!0,get:function(){return a}});let n=r(8186);function a(e,t){return(0,n.registerServerReference)(t,e,null)}},1065:(e,t,r)=>{"use strict";var n=r(9353),a=r(1413),o={stream:!0},i=new Map;function s(e){var t=globalThis.__next_require__(e);return"function"!=typeof t.then||"fulfilled"===t.status?null:(t.then(function(e){t.status="fulfilled",t.value=e},function(e){t.status="rejected",t.reason=e}),t)}function u(){}var l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Dispatcher,c=Symbol.for("react.element"),d=Symbol.for("react.provider"),f=Symbol.for("react.server_context"),p=Symbol.for("react.lazy"),m=Symbol.for("react.default_value"),h=Symbol.iterator,g=Array.isArray,v=Object.getPrototypeOf,y=Object.prototype,b=new WeakMap;function w(e,t,r,n){var a=1,o=0,i=null;e=JSON.stringify(e,function e(s,u){if(null===u)return null;if("object"==typeof u){if("function"==typeof u.then){null===i&&(i=new FormData),o++;var l,c,d=a++;return u.then(function(n){n=JSON.stringify(n,e);var a=i;a.append(t+d,n),0==--o&&r(a)},function(e){n(e)}),"$@"+d.toString(16)}if(g(u))return u;if(u instanceof FormData){null===i&&(i=new FormData);var f=i,p=t+(s=a++)+"_";return u.forEach(function(e,t){f.append(p+t,e)}),"$K"+s.toString(16)}if(u instanceof Map)return u=JSON.stringify(Array.from(u),e),null===i&&(i=new FormData),s=a++,i.append(t+s,u),"$Q"+s.toString(16);if(u instanceof Set)return u=JSON.stringify(Array.from(u),e),null===i&&(i=new FormData),s=a++,i.append(t+s,u),"$W"+s.toString(16);if(null===(c=u)||"object"!=typeof c?null:"function"==typeof(c=h&&c[h]||c["@@iterator"])?c:null)return Array.from(u);if((s=v(u))!==y&&(null===s||null!==v(s)))throw Error("Only plain objects, and a few built-ins, can be passed to Server Actions. Classes or null prototypes are not supported.");return u}if("string"==typeof u)return"Z"===u[u.length-1]&&this[s]instanceof Date?"$D"+u:u="$"===u[0]?"$"+u:u;if("boolean"==typeof u)return u;if("number"==typeof u)return Number.isFinite(l=u)?0===l&&-1/0==1/l?"$-0":l:1/0===l?"$Infinity":-1/0===l?"$-Infinity":"$NaN";if(void 0===u)return"$undefined";if("function"==typeof u){if(void 0!==(u=b.get(u)))return u=JSON.stringify(u,e),null===i&&(i=new FormData),s=a++,i.set(t+s,u),"$F"+s.toString(16);throw Error("Client Functions cannot be passed directly to Server Functions. Only Functions passed from the Server can be passed back again.")}if("symbol"==typeof u){if(Symbol.for(s=u.description)!==u)throw Error("Only global symbols received from Symbol.for(...) can be passed to Server Functions. The symbol Symbol.for("+u.description+") cannot be found among global symbols.");return"$S"+s}if("bigint"==typeof u)return"$n"+u.toString(10);throw Error("Type "+typeof u+" is not supported as an argument to a Server Function.")}),null===i?r(e):(i.set(t+"0",e),0===o&&r(i))}var _=new WeakMap;function S(e){var t=b.get(this);if(!t)throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");var r=null;if(null!==t.bound){if((r=_.get(t))||(n=t,i=new Promise(function(e,t){a=e,o=t}),w(n,"",function(e){if("string"==typeof e){var t=new FormData;t.append("0",e),e=t}i.status="fulfilled",i.value=e,a(e)},function(e){i.status="rejected",i.reason=e,o(e)}),r=i,_.set(t,r)),"rejected"===r.status)throw r.reason;if("fulfilled"!==r.status)throw r;t=r.value;var n,a,o,i,s=new FormData;t.forEach(function(t,r){s.append("$ACTION_"+e+":"+r,t)}),r=s,t="$ACTION_REF_"+e}else t="$ACTION_ID_"+t.id;return{name:t,method:"POST",encType:"multipart/form-data",data:r}}function x(e,t){var r=b.get(this);if(!r)throw Error("Tried to encode a Server Action from a different instance than the encoder is from. This is a bug in React.");if(r.id!==e)return!1;var n=r.bound;if(null===n)return 0===t;switch(n.status){case"fulfilled":return n.value.length===t;case"pending":throw n;case"rejected":throw n.reason;default:throw"string"!=typeof n.status&&(n.status="pending",n.then(function(e){n.status="fulfilled",n.value=e},function(e){n.status="rejected",n.reason=e})),n}}function T(e,t){Object.defineProperties(e,{$$FORM_ACTION:{value:S},$$IS_SIGNATURE_EQUAL:{value:x},bind:{value:j}}),b.set(e,t)}var A=Function.prototype.bind,P=Array.prototype.slice;function j(){var e=A.apply(this,arguments),t=b.get(this);if(t){var r=P.call(arguments,1),n=null;n=null!==t.bound?Promise.resolve(t.bound).then(function(e){return e.concat(r)}):Promise.resolve(r),T(e,{id:t.id,bound:n})}return e}var R=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ContextRegistry;function E(e,t,r,n){this.status=e,this.value=t,this.reason=r,this._response=n}function k(e){switch(e.status){case"resolved_model":q(e);break;case"resolved_module":$(e)}switch(e.status){case"fulfilled":return e.value;case"pending":case"blocked":case"cyclic":throw e;default:throw e.reason}}function O(e,t){for(var r=0;r<e.length;r++)(0,e[r])(t)}function I(e,t,r){switch(e.status){case"fulfilled":O(t,e.value);break;case"pending":case"blocked":case"cyclic":e.value=t,e.reason=r;break;case"rejected":r&&O(r,e.reason)}}function M(e,t){if("pending"===e.status||"blocked"===e.status){var r=e.reason;e.status="rejected",e.reason=t,null!==r&&O(r,t)}}function C(e,t){if("pending"===e.status||"blocked"===e.status){var r=e.value,n=e.reason;e.status="resolved_module",e.value=t,null!==r&&($(e),I(e,r,n))}}E.prototype=Object.create(Promise.prototype),E.prototype.then=function(e,t){switch(this.status){case"resolved_model":q(this);break;case"resolved_module":$(this)}switch(this.status){case"fulfilled":e(this.value);break;case"pending":case"blocked":case"cyclic":e&&(null===this.value&&(this.value=[]),this.value.push(e)),t&&(null===this.reason&&(this.reason=[]),this.reason.push(t));break;default:t(this.reason)}};var N=null,D=null;function q(e){var t=N,r=D;N=e,D=null;var n=e.value;e.status="cyclic",e.value=null,e.reason=null;try{var a=JSON.parse(n,e._response._fromJSON);if(null!==D&&0<D.deps)D.value=a,e.status="blocked",e.value=null,e.reason=null;else{var o=e.value;e.status="fulfilled",e.value=a,null!==o&&O(o,a)}}catch(t){e.status="rejected",e.reason=t}finally{N=t,D=r}}function $(e){try{var t=e.value,r=globalThis.__next_require__(t[0]);if(4===t.length&&"function"==typeof r.then){if("fulfilled"===r.status)r=r.value;else throw r.reason}var n="*"===t[2]?r:""===t[2]?r.__esModule?r.default:r:r[t[2]];e.status="fulfilled",e.value=n}catch(t){e.status="rejected",e.reason=t}}function F(e,t){e._chunks.forEach(function(e){"pending"===e.status&&M(e,t)})}function U(e,t){var r=e._chunks,n=r.get(t);return n||(n=new E("pending",null,null,e),r.set(t,n)),n}function L(e,t){if("resolved_model"===(e=U(e,t)).status&&q(e),"fulfilled"===e.status)return e.value;throw e.reason}function B(){throw Error('Trying to call a function from "use server" but the callServer option was not implemented in your router runtime.')}function G(){throw Error("Server Functions cannot be called during initial render. This would create a fetch waterfall. Try to use a Server Component to pass data to Client Components instead.")}function J(e){var t,r=e.ssrManifest.moduleMap;return(r={_bundlerConfig:r,_moduleLoading:e.ssrManifest.moduleLoading,_callServer:void 0!==G?G:B,_nonce:e="string"==typeof e.nonce?e.nonce:void 0,_chunks:new Map,_stringDecoder:new TextDecoder,_fromJSON:null,_rowState:0,_rowID:0,_rowTag:0,_rowLength:0,_buffer:[]})._fromJSON=(t=r,function(e,r){return"string"==typeof r?function(e,t,r,n){if("$"===n[0]){if("$"===n)return c;switch(n[1]){case"$":return n.slice(1);case"L":return{$$typeof:p,_payload:e=U(e,t=parseInt(n.slice(2),16)),_init:k};case"@":return U(e,t=parseInt(n.slice(2),16));case"S":return Symbol.for(n.slice(2));case"P":return R[e=n.slice(2)]||((t={$$typeof:f,_currentValue:m,_currentValue2:m,_defaultValue:m,_threadCount:0,Provider:null,Consumer:null,_globalName:e}).Provider={$$typeof:d,_context:t},R[e]=t),R[e].Provider;case"F":return t=L(e,t=parseInt(n.slice(2),16)),function(e,t){function r(){var e=Array.prototype.slice.call(arguments),r=t.bound;return r?"fulfilled"===r.status?n(t.id,r.value.concat(e)):Promise.resolve(r).then(function(r){return n(t.id,r.concat(e))}):n(t.id,e)}var n=e._callServer;return T(r,t),r}(e,t);case"Q":return e=L(e,t=parseInt(n.slice(2),16)),new Map(e);case"W":return e=L(e,t=parseInt(n.slice(2),16)),new Set(e);case"I":return 1/0;case"-":return"$-0"===n?-0:-1/0;case"N":return NaN;case"u":return;case"D":return new Date(Date.parse(n.slice(2)));case"n":return BigInt(n.slice(2));default:switch((e=U(e,n=parseInt(n.slice(1),16))).status){case"resolved_model":q(e);break;case"resolved_module":$(e)}switch(e.status){case"fulfilled":return e.value;case"pending":case"blocked":case"cyclic":var a;return n=N,e.then(function(e,t,r,n){if(D){var a=D;n||a.deps++}else a=D={deps:n?0:1,value:null};return function(n){t[r]=n,a.deps--,0===a.deps&&"blocked"===e.status&&(n=e.value,e.status="fulfilled",e.value=a.value,null!==n&&O(n,a.value))}}(n,t,r,"cyclic"===e.status),(a=n,function(e){return M(a,e)})),null;default:throw e.reason}}}return n}(t,this,e,r):"object"==typeof r&&null!==r?e=r[0]===c?{$$typeof:c,type:r[1],key:r[2],ref:null,props:r[3],_owner:null}:r:r}),r}function K(e,t){function n(t){F(e,t)}var a=t.getReader();a.read().then(function t(c){var d=c.value;if(c.done)F(e,Error("Connection closed."));else{var f=0,p=e._rowState,m=e._rowID,h=e._rowTag,g=e._rowLength;c=e._buffer;for(var v=d.length;f<v;){var y=-1;switch(p){case 0:58===(y=d[f++])?p=1:m=m<<4|(96<y?y-87:y-48);continue;case 1:84===(p=d[f])?(h=p,p=2,f++):64<p&&91>p?(h=p,p=3,f++):(h=0,p=3);continue;case 2:44===(y=d[f++])?p=4:g=g<<4|(96<y?y-87:y-48);continue;case 3:y=d.indexOf(10,f);break;case 4:(y=f+g)>d.length&&(y=-1)}var b=d.byteOffset+f;if(-1<y){f=new Uint8Array(d.buffer,b,y-f),g=e,b=h;var w=g._stringDecoder;h="";for(var _=0;_<c.length;_++)h+=w.decode(c[_],o);switch(h+=w.decode(f),b){case 73:!function(e,t,n){var a=e._chunks,o=a.get(t);n=JSON.parse(n,e._fromJSON);var c=function(e,t){if(e){var r=e[t[0]];if(e=r[t[2]])r=e.name;else{if(!(e=r["*"]))throw Error('Could not find the module "'+t[0]+'" in the React SSR Manifest. This is probably a bug in the React Server Components bundler.');r=t[2]}return 4===t.length?[e.id,e.chunks,r,1]:[e.id,e.chunks,r]}return t}(e._bundlerConfig,n);if(function(e,t,r){if(null!==e)for(var n=1;n<t.length;n+=2){var a=l.current;if(a){var o=a.preinitScript,i=e.prefix+t[n],s=e.crossOrigin;s="string"==typeof s?"use-credentials"===s?s:"":void 0,o.call(a,i,{crossOrigin:s,nonce:r})}}}(e._moduleLoading,n[1],e._nonce),n=function(e){for(var t=e[1],n=[],a=0;a<t.length;){var o=t[a++];t[a++];var l=i.get(o);if(void 0===l){l=r.e(o),n.push(l);var c=i.set.bind(i,o,null);l.then(c,u),i.set(o,l)}else null!==l&&n.push(l)}return 4===e.length?0===n.length?s(e[0]):Promise.all(n).then(function(){return s(e[0])}):0<n.length?Promise.all(n):null}(c)){if(o){var d=o;d.status="blocked"}else d=new E("blocked",null,null,e),a.set(t,d);n.then(function(){return C(d,c)},function(e){return M(d,e)})}else o?C(o,c):a.set(t,new E("resolved_module",c,null,e))}(g,m,h);break;case 72:if(m=h[0],g=JSON.parse(h=h.slice(1),g._fromJSON),h=l.current)switch(m){case"D":h.prefetchDNS(g);break;case"C":"string"==typeof g?h.preconnect(g):h.preconnect(g[0],g[1]);break;case"L":m=g[0],f=g[1],3===g.length?h.preload(m,f,g[2]):h.preload(m,f);break;case"m":"string"==typeof g?h.preloadModule(g):h.preloadModule(g[0],g[1]);break;case"S":"string"==typeof g?h.preinitStyle(g):h.preinitStyle(g[0],0===g[1]?void 0:g[1],3===g.length?g[2]:void 0);break;case"X":"string"==typeof g?h.preinitScript(g):h.preinitScript(g[0],g[1]);break;case"M":"string"==typeof g?h.preinitModuleScript(g):h.preinitModuleScript(g[0],g[1])}break;case 69:f=(h=JSON.parse(h)).digest,(h=Error("An error occurred in the Server Components render. The specific message is omitted in production builds to avoid leaking sensitive details. A digest property is included on this error instance which may provide additional details about the nature of the error.")).stack="Error: "+h.message,h.digest=f,(b=(f=g._chunks).get(m))?M(b,h):f.set(m,new E("rejected",null,h,g));break;case 84:g._chunks.set(m,new E("fulfilled",h,null,g));break;default:(b=(f=g._chunks).get(m))?(g=b,m=h,"pending"===g.status&&(h=g.value,f=g.reason,g.status="resolved_model",g.value=m,null!==h&&(q(g),I(g,h,f)))):f.set(m,new E("resolved_model",h,null,g))}f=y,3===p&&f++,g=m=h=p=0,c.length=0}else{d=new Uint8Array(d.buffer,b,d.byteLength-f),c.push(d),g-=d.byteLength;break}}return e._rowState=p,e._rowID=m,e._rowTag=h,e._rowLength=g,a.read().then(t).catch(n)}}).catch(n)}t.createFromFetch=function(e,t){var r=J(t);return e.then(function(e){K(r,e.body)},function(e){F(r,e)}),U(r,0)},t.createFromReadableStream=function(e,t){return K(t=J(t),e),U(t,0)},t.createServerReference=function(e){return function(e,t){function r(){var r=Array.prototype.slice.call(arguments);return t(e,r)}return T(r,{id:e,bound:null}),r}(e,G)},t.encodeReply=function(e){return new Promise(function(t,r){w(e,"",t,r)})}},2337:(e,t,r)=>{"use strict";e.exports=r(1065)},5920:()=>{},1593:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DetachedPromise",{enumerable:!0,get:function(){return r}});class r{constructor(){let e,t;this.promise=new Promise((r,n)=>{e=r,t=n}),this.resolve=e,this.reject=t}}},6864:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{scheduleOnNextTick:function(){return r},scheduleImmediate:function(){return n}});let r=e=>{Promise.resolve().then(()=>{process.nextTick(e)})},n=e=>{setImmediate(e)}},6854:(e,t)=>{"use strict";let r,n;function a(e){let t=new Uint8Array(e),r=t.byteLength;if(r<65535)return String.fromCharCode.apply(null,t);let n="";for(let e=0;e<r;e++)n+=String.fromCharCode(t[e]);return n}function o(e){let t=e.length,r=new Uint8Array(t);for(let n=0;n<t;n++)r[n]=e.charCodeAt(n);return r}function i(e,t,r){return crypto.subtle.encrypt({name:"AES-GCM",iv:t},e,r)}function s(e,t,r){return crypto.subtle.decrypt({name:"AES-GCM",iv:t},e,r)}async function u(e){if(e&&void 0!==n)return n;let t=await crypto.subtle.generateKey({name:"AES-GCM",length:256},!0,["encrypt","decrypt"]),o=btoa(a(await crypto.subtle.exportKey("raw",t)));return r=t,e&&(n=o),o}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{arrayBufferToString:function(){return a},stringToUint8Array:function(){return o},encrypt:function(){return i},decrypt:function(){return s},generateRandomActionKeyRaw:function(){return u},setReferenceManifestsSingleton:function(){return c},getServerModuleMap:function(){return d},getClientReferenceManifestSingleton:function(){return f},getActionEncryptionKey:function(){return p}});let l=Symbol.for("next.server.action-manifests");function c({clientReferenceManifest:e,serverActionsManifest:t,serverModuleMap:r}){globalThis[l]={clientReferenceManifest:e,serverActionsManifest:t,serverModuleMap:r}}function d(){let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");return e.serverModuleMap}function f(){let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");return e.clientReferenceManifest}async function p(){if(r)return r;let e=globalThis[l];if(!e)throw Error("Missing manifest for Server Actions. This is a bug in Next.js");let t=process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY||e.serverActionsManifest.encryptionKey;if(void 0===t)throw Error("Missing encryption key for Server Actions");return r=await crypto.subtle.importKey("raw",o(atob(t)),"AES-GCM",!0,["encrypt","decrypt"])}},867:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{encryptActionBoundArgs:function(){return d},decryptActionBoundArgs:function(){return f}}),r(5920);let n=r(8186),a=r(2337),o=r(7540),i=r(6854),s=new TextEncoder,u=new TextDecoder;async function l(e,t){let r=await (0,i.getActionEncryptionKey)();if(void 0===r)throw Error("Missing encryption key for Server Action. This is a bug in Next.js");let n=atob(t),a=n.slice(0,16),o=n.slice(16);if(void 0===o)throw Error("Invalid Server Action payload.");let s=u.decode(await (0,i.decrypt)(r,(0,i.stringToUint8Array)(a),(0,i.stringToUint8Array)(o)));if(!s.startsWith(e))throw Error("Invalid Server Action payload: failed to decrypt.");return s.slice(e.length)}async function c(e,t){let r=await (0,i.getActionEncryptionKey)();if(void 0===r)throw Error("Missing encryption key for Server Action. This is a bug in Next.js");let n=new Uint8Array(16);crypto.getRandomValues(n);let a=(0,i.arrayBufferToString)(n.buffer),o=await (0,i.encrypt)(r,n,s.encode(e+t));return btoa(a+(0,i.arrayBufferToString)(o))}async function d(e,t){let r=(0,i.getClientReferenceManifestSingleton)(),a=await (0,o.streamToString)((0,n.renderToReadableStream)(t,r.clientModules));return await c(e,a)}async function f(e,t){let r=await l(e,await t),o=await (0,a.createFromReadableStream)(new ReadableStream({start(e){e.enqueue(new TextEncoder().encode(r)),e.close()}}),{ssrManifest:{moduleLoading:{},moduleMap:{}}}),s=(0,i.getServerModuleMap)();return await (0,n.decodeReply)(await (0,a.encodeReply)(o),s)}},7896:(e,t)=>{"use strict";function r(e=new TextDecoder){return new TransformStream({transform:(t,r)=>r.enqueue(e.decode(t,{stream:!0})),flush:t=>t.enqueue(e.decode())})}function n(e=new TextEncoder){return new TransformStream({transform:(t,r)=>r.enqueue(e.encode(t))})}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createDecodeTransformStream:function(){return r},createEncodeTransformStream:function(){return n}})},7540:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{cloneTransformStream:function(){return u},chainStreams:function(){return l},streamFromString:function(){return c},streamToString:function(){return d},createBufferedTransformStream:function(){return f},renderToInitialFizzStream:function(){return m},createRootLayoutValidatorStream:function(){return v},continueFizzStream:function(){return b},continuePostponedFizzStream:function(){return w}});let n=r(8763),a=r(2688),o=r(7896),i=r(1593),s=r(6864);function u(e){let t=e.readable.getReader();return new TransformStream({async start(e){for(;;){let{done:r,value:n}=await t.read();if(r)break;e.enqueue(n)}},transform(){}})}function l(...e){let{readable:t,writable:r}=new TransformStream,n=Promise.resolve();for(let t=0;t<e.length;++t)n=n.then(()=>e[t].pipeTo(r,{preventClose:t+1<e.length}));return n.catch(()=>{}),t}function c(e){let t=new TextEncoder;return new ReadableStream({start(r){r.enqueue(t.encode(e)),r.close()}})}async function d(e){let t="";return await e.pipeThrough((0,o.createDecodeTransformStream)()).pipeTo(new WritableStream({write(e){t+=e}})),t}function f(){let e,t=new Uint8Array,r=r=>{if(e)return;let n=new i.DetachedPromise;e=n,(0,s.scheduleImmediate)(()=>{try{r.enqueue(t),t=new Uint8Array}catch{}finally{e=void 0,n.resolve()}})};return new TransformStream({transform(e,n){let a=new Uint8Array(t.length+e.byteLength);a.set(t),a.set(e,t.length),t=a,r(n)},flush(){if(e)return e.promise}})}function p(e){let t=new TextEncoder;return new TransformStream({transform:async(r,n)=>{let a=await e();a&&n.enqueue(t.encode(a)),n.enqueue(r)}})}function m({ReactDOMServer:e,element:t,streamOptions:r}){return(0,n.getTracer)().trace(a.AppRenderSpan.renderToReadableStream,async()=>e.renderToReadableStream(t,r))}function h(e){let t=!1,r=null,n=t=>{let n=e.getReader(),a=new i.DetachedPromise;r=a,(0,s.scheduleImmediate)(async()=>{try{for(;;){let{done:e,value:r}=await n.read();if(e)return;t.enqueue(r)}}catch(e){t.error(e)}finally{a.resolve()}})};return new TransformStream({transform(e,r){r.enqueue(e),t||(t=!0,n(r))},flush(){if(r&&t)return r.promise}})}function g(e){let t=!1,r=new TextEncoder,n=new TextDecoder;return new TransformStream({transform(a,o){if(t)return o.enqueue(a);let i=n.decode(a),s=i.indexOf(e);if(s>-1){if(t=!0,i.length===e.length)return;let n=i.slice(0,s);if(a=r.encode(n),o.enqueue(a),i.length>e.length+s){let t=i.slice(s+e.length);a=r.encode(t),o.enqueue(a)}}else o.enqueue(a)},flush(t){t.enqueue(r.encode(e))}})}function v(e="",t){let r=!1,n=!1,a=new TextEncoder,o=new TextDecoder,i="";return new TransformStream({async transform(e,t){(!r||!n)&&(i+=o.decode(e,{stream:!0}),!r&&i.includes("<html")&&(r=!0),!n&&i.includes("<body")&&(n=!0)),t.enqueue(e)},flush(s){(!r||!n)&&(i+=o.decode(),!r&&i.includes("<html")&&(r=!0),!n&&i.includes("<body")&&(n=!0));let u=[];r||u.push("html"),n||u.push("body"),u.length>0&&s.enqueue(a.encode(`<script>self.__next_root_layout_missing_tags_error=${JSON.stringify({missingTags:u,assetPrefix:e??"",tree:t()})}</script>`))}})}function y(e,t){let r=e;for(let e of t)e&&(r=r.pipeThrough(e));return r}async function b(e,{suffix:t,inlinedDataStream:r,isStaticGeneration:n,getServerInsertedHTML:a,serverInsertedHTMLToHead:o,validateRootLayout:u}){let l="</body></html>",c=t?t.split(l,1)[0]:null;return n&&"allReady"in e&&await e.allReady,y(e,[f(),a&&!o?p(a):null,null!=c&&c.length>0?function(e){let t,r=!1,n=new TextEncoder,a=r=>{let a=new i.DetachedPromise;t=a,(0,s.scheduleImmediate)(()=>{try{r.enqueue(n.encode(e))}catch{}finally{t=void 0,a.resolve()}})};return new TransformStream({transform(e,t){t.enqueue(e),r||(r=!0,a(t))},flush(a){if(t)return t.promise;r||a.enqueue(n.encode(e))}})}(c):null,r?h(r):null,g(l),a&&o?function(e){let t=!1,r=!1,n=new TextEncoder,a=new TextDecoder;return new TransformStream({async transform(o,i){if(r){i.enqueue(o);return}let u=await e();if(t)i.enqueue(n.encode(u)),i.enqueue(o),r=!0;else{let e=a.decode(o),s=e.indexOf("</head>");if(-1!==s){let a=e.slice(0,s)+u+e.slice(s);i.enqueue(n.encode(a)),r=!0,t=!0}}t?(0,s.scheduleImmediate)(()=>{r=!1}):i.enqueue(o)},async flush(t){let r=await e();r&&t.enqueue(n.encode(r))}})}(a):null,u?v(u.assetPrefix,u.getTree):null])}async function w(e,{inlinedDataStream:t,isStaticGeneration:r,getServerInsertedHTML:n,serverInsertedHTMLToHead:a}){return r&&"allReady"in e&&await e.allReady,y(e,[f(),n&&!a?p(n):null,t?h(t):null,g("</body></html>")])}},4482:(e,t,r)=>{"use strict";r.d(t,{FS:()=>p,GP:()=>f,US:()=>l,kn:()=>d,vO:()=>m,wF:()=>u,wv:()=>c});var n=r(1269),a=r(1964);let o=e=>e.map(e=>{let t=e.reviews.filter(e=>null!==e.rating),r=t.length||1;return{...e,avgRating:t.reduce((e,t)=>e+(t?.rating||0),0)/r}});function i(e,t){return e.avgRating>t.avgRating?1:t.avgRating>e.avgRating?-1:0}function s(e,t){return e.avgRating>t.avgRating?-1:t.avgRating>e.avgRating?1:0}let u=async()=>{let{productsConnection:e}=await (0,n.p)(a.Fe,{skip:0,first:20});return e.aggregate.count},l=async(e,t,r)=>{let u=(e-1)*t;if("asc"===r){let{products:e}=await (0,n.p)(a.an,{skip:u,first:t});return e}if("averageRating_ASC"===r){console.log("avg asc");let{products:e}=await (0,n.p)(a.Ro,{});return o(e).sort(i)}if("averageRating_DESC"===r){console.log("avg desc");let{products:e}=await (0,n.p)(a.Ro,{});return o(e).sort(s)}{let{products:e}=await (0,n.p)(a.Fe,{skip:u,first:t});return e}},c=e=>(0,n.p)(a.PI,{id:e}),d=async e=>(await (0,n.p)(a.f6,{name:e})).products,f=e=>(0,n.p)(a.cl,{categoryName:e}),p=e=>(0,n.p)(a.H7,{id:e}),m=async({id:e,content:t,email:r,headline:o,name:i,rating:s})=>{let{createReview:u}=await (0,n.p)(a.rh,{id:e,content:t,headline:o,email:r,name:i,rating:s});u&&console.log("published",await (0,n.p)(a.qG,{id:u?.id}))}},7595:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$ACTION_1:()=>P,default:()=>A});var n=r(6532),a=r(4013),o=r(867),i=r(4482),s=r(2800),u=r(1474),l=r(8652),c=r(3755);let d=(0,c.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/ProductVariant.tsx`),{__esModule:f,$$typeof:p}=d;d.default;let m=(0,c.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/ProductVariant.tsx#ProductVariant`),h=(0,c.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/Reviews.tsx`),{__esModule:g,$$typeof:v}=h;h.default;let y=(0,c.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/Reviews.tsx#Reviews`);var b=r(4554);let w=(0,c.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/AddToCartButton.tsx`),{__esModule:_,$$typeof:S}=w;w.default;let x=(0,c.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/AddToCartButton.tsx#AddToCartButton`);var T=r(860);async function A({params:e}){let{product:t}=await (0,i.wv)(e.productId);t||(0,l.notFound)();let r=await (0,i.FS)(e.productId),c=await (0,i.GP)(t.categories[0].name),d=(0,a.U)("1078ce0fe01e9671c5ce53d5da032002b75f1daa",P).bind(null,(0,o.encryptActionBoundArgs)("1078ce0fe01e9671c5ce53d5da032002b75f1daa",[e.productId]));return(0,n.jsxs)("div",{className:"mx-auto max-w-2xl",children:[n.jsx("h1",{children:t.name}),n.jsx(s.L,{src:t.images[0].url,alt:"TODO"}),n.jsx(u.q,{name:t.name}),n.jsx("p",{children:t.description}),t.variants?n.jsx(m,{variants:t.variants}):null,n.jsx(x,{productName:t.name}),n.jsx("div",{"data-testid":"releated-products",children:n.jsx(T.c,{products:c})}),n.jsx(y,{productId:e.productId,reviews:r.product?.reviews,addReviewAction:d})]})}async function P(e,{headline:t,content:r,name:n,email:a,rating:s}){var[u]=await (0,o.decryptActionBoundArgs)("1078ce0fe01e9671c5ce53d5da032002b75f1daa",e);(0,i.vO)({id:u,headline:t,content:r,name:n,email:a,rating:s}),(0,b.revalidatePath)("/product/[productId]")}},7193:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o}),r(6532),r(8198),r(8652),r(4482);var n=r(643);let a={alt:"Sklep",size:{width:1200,height:630},contentType:"image/png"};async function o(e){let{__metadata_id__:t,...r}=e.params,o=(0,n.fillMetadataSegment)("/product/[productId]",r,"opengraph-image"),{generateImageMetadata:i}=a;function s(e,t){let r={alt:e.alt,type:e.contentType||"image/png",url:o+(t?"/"+t:"")+"?39c61be9b4729cd3"},{size:n}=e;return n&&(r.width=n.width,r.height=n.height),r}return i?(await i({params:r})).map((e,t)=>{let r=(e.id||t)+"";return s(e,r)}):[s(a,"")]}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[985,788,643,538,554,652,6],()=>r(2536));module.exports=n})();