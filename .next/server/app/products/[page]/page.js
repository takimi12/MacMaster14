(()=>{var e={};e.id=672,e.ids=[672],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7827:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>g,tree:()=>c});var n=r(3449),s=r(4437),a=r(4804),o=r.n(a),i=r(8939),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);r.d(t,l);let c=["",{children:["products",{children:["[page]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,6367)),"/Users/thonasjefferson/Desktop/next mATER/src/app/products/[page]/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1364)),"/Users/thonasjefferson/Desktop/next mATER/src/app/products/[page]/layout.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,1106)),"/Users/thonasjefferson/Desktop/next mATER/src/app/products/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9738))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,5289)),"/Users/thonasjefferson/Desktop/next mATER/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1422,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,9738))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/thonasjefferson/Desktop/next mATER/src/app/products/[page]/page.tsx"],d="/products/[page]/page",p={require:r,loadChunk:()=>Promise.resolve()},g=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/products/[page]/page",pathname:"/products/[page]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7831:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6494,23)),Promise.resolve().then(r.t.bind(r,3047,23)),Promise.resolve().then(r.t.bind(r,5465,23)),Promise.resolve().then(r.t.bind(r,3073,23)),Promise.resolve().then(r.t.bind(r,9373,23)),Promise.resolve().then(r.t.bind(r,9382,23))},6057:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2516,23)),Promise.resolve().then(r.t.bind(r,5414,23)),Promise.resolve().then(r.bind(r,953))},4785:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5414,23))},2592:()=>{},953:(e,t,r)=>{"use strict";r.r(t),r.d(t,{SortOrder:()=>o});var n=r(7408),s=r(8927),a=r(4616);let o=()=>{let e=(0,s.useSearchParams)(),t=(0,s.usePathname)(),r=(0,s.useRouter)(),[o,i]=(0,a.useState)(e?.get("sort")??"asc");(0,a.useEffect)(()=>{if("asc"!==o){let e=o?`?sort=${encodeURIComponent(o)}`:"";r.push(`${t}${e}`)}else r.push(t)},[o]);let l=e=>{i(e.target.value)};return(0,n.jsxs)("select",{id:"sort",onChange:e=>l(e),value:o||"",className:"arrow-down-bg block w-48 cursor-pointer appearance-none rounded-md border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 lg:mt-1",children:[n.jsx("option",{value:"",children:"Order by:"}),n.jsx("option",{value:"averageRating_ASC","data-testid":"sort-by-rating",children:"Rating (Low to High)"}),n.jsx("option",{value:"averageRating_DESC","data-testid":"sort-by-rating",children:"Rating (High to Low)"}),n.jsx("option",{value:"asc","data-testid":"sort-by-price",children:"Price (Low to High)"}),n.jsx("option",{value:"desc","data-testid":"sort-by-price",children:"Price (High to Low)"})]})}},4482:(e,t,r)=>{"use strict";r.d(t,{FS:()=>g,GP:()=>p,US:()=>c,kn:()=>d,vO:()=>f,wF:()=>l,wv:()=>u});var n=r(1269),s=r(1964);let a=e=>e.map(e=>{let t=e.reviews.filter(e=>null!==e.rating),r=t.length||1;return{...e,avgRating:t.reduce((e,t)=>e+(t?.rating||0),0)/r}});function o(e,t){return e.avgRating>t.avgRating?1:t.avgRating>e.avgRating?-1:0}function i(e,t){return e.avgRating>t.avgRating?-1:t.avgRating>e.avgRating?1:0}let l=async()=>{let{productsConnection:e}=await (0,n.p)(s.Fe,{skip:0,first:20});return e.aggregate.count},c=async(e,t,r)=>{let l=(e-1)*t;if("asc"===r){let{products:e}=await (0,n.p)(s.an,{skip:l,first:t});return e}if("averageRating_ASC"===r){console.log("avg asc");let{products:e}=await (0,n.p)(s.Ro,{});return a(e).sort(o)}if("averageRating_DESC"===r){console.log("avg desc");let{products:e}=await (0,n.p)(s.Ro,{});return a(e).sort(i)}{let{products:e}=await (0,n.p)(s.Fe,{skip:l,first:t});return e}},u=e=>(0,n.p)(s.PI,{id:e}),d=async e=>(await (0,n.p)(s.f6,{name:e})).products,p=e=>(0,n.p)(s.cl,{categoryName:e}),g=e=>(0,n.p)(s.H7,{id:e}),f=async({id:e,content:t,email:r,headline:a,name:o,rating:i})=>{let{createReview:l}=await (0,n.p)(s.rh,{id:e,content:t,headline:a,email:r,name:o,rating:i});l&&console.log("published",await (0,n.p)(s.qG,{id:l?.id}))}},1364:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var n,s,a=r(6532),o=r(4482),i=r(1615),l=r(1413);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let u=(0,l.forwardRef)((e,t)=>{let{children:r,...n}=e,s=l.Children.toArray(r),a=s.find(g);if(a){let e=a.props.children,r=s.map(t=>t!==a?t:l.Children.count(e)>1?l.Children.only(null):(0,l.isValidElement)(e)?e.props.children:null);return(0,l.createElement)(d,c({},n,{ref:t}),(0,l.isValidElement)(e)?(0,l.cloneElement)(e,void 0,r):null)}return(0,l.createElement)(d,c({},n,{ref:t}),r)});u.displayName="Slot";let d=(0,l.forwardRef)((e,t)=>{let{children:r,...n}=e;return(0,l.isValidElement)(r)?(0,l.cloneElement)(r,{...function(e,t){let r={...t};for(let n in t){let s=e[n],a=t[n];/^on[A-Z]/.test(n)?s&&a?r[n]=(...e)=>{a(...e),s(...e)}:s&&(r[n]=s):"style"===n?r[n]={...s,...a}:"className"===n&&(r[n]=[s,a].filter(Boolean).join(" "))}return{...e,...r}}(n,r.props),ref:t?function(...e){return t=>e.forEach(e=>{"function"==typeof e?e(t):null!=e&&(e.current=t)})}(t,r.ref):r.ref}):l.Children.count(r)>1?l.Children.only(null):null});d.displayName="SlotClone";let p=({children:e})=>(0,l.createElement)(l.Fragment,null,e);function g(e){return(0,l.isValidElement)(e)&&e.type===p}let f=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,m=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,s="";if("string"==typeof t||"number"==typeof t)s+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(s&&(s+=" "),s+=n);else for(r in t)t[r]&&(s&&(s+=" "),s+=r)}return s}(e))&&(n&&(n+=" "),n+=t);return n};var h=r(3433);let v=(n="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",s={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var t;if((null==s?void 0:s.variants)==null)return m(n,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:r,defaultVariants:a}=s,o=Object.keys(r).map(t=>{let n=null==e?void 0:e[t],s=null==a?void 0:a[t];if(null===n)return null;let o=f(n)||f(s);return r[t][o]}),i=e&&Object.entries(e).reduce((e,t)=>{let[r,n]=t;return void 0===n||(e[r]=n),e},{});return m(n,o,null==s?void 0:null===(t=s.compoundVariants)||void 0===t?void 0:t.reduce((e,t)=>{let{class:r,className:n,...s}=t;return Object.entries(s).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...a,...i}[t]):({...a,...i})[t]===r})?[...e,r,n]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)}),x=l.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...s},o)=>{let i=n?u:"button";return a.jsx(i,{className:(0,h.cn)(v({variant:t,size:r,className:e})),ref:o,...s})});x.displayName="Button";let y=({numOfPages:e})=>a.jsx("nav",{children:a.jsx("ul",{"aria-label":"pagination",className:"mt-4 flex items-center justify-center gap-4",children:Array.from({length:e},(e,t)=>t+1).map(e=>a.jsx("li",{children:a.jsx(i.default,{href:`/products/${e}`,children:a.jsx(x,{variant:"link",children:e})})},e))})});async function b({children:e}){let t=await (0,o.wF)();return(0,a.jsxs)(a.Fragment,{children:[a.jsx("section",{children:e}),a.jsx(y,{numOfPages:Math.ceil(t/4)})]})}},6367:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(6532),s=r(4482),a=r(860),o=r(3755);let i=(0,o.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/SortByPrice.tsx`),{__esModule:l,$$typeof:c}=i;i.default;let u=(0,o.createProxy)(String.raw`/Users/thonasjefferson/Desktop/next mATER/src/components/SortByPrice.tsx#SortOrder`);async function d({params:e,searchParams:t}){let r=parseInt(e.page)||1,{sort:o}=t,i=await (0,s.US)(r,4,o??"asc");return(0,n.jsxs)(n.Fragment,{children:[n.jsx(u,{}),n.jsx(a.c,{products:i})]})}},1106:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(6532);async function s({children:e}){return n.jsx(n.Fragment,{children:n.jsx("section",{children:e})})}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[985,788,643,538,6],()=>r(7827));module.exports=n})();