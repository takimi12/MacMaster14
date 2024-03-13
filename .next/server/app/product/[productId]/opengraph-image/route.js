"use strict";(()=>{var e={};e.id=591,e.ids=[591],e.modules={2934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},4021:e=>{e.exports=import("next/dist/compiled/@vercel/og/index.node.js")},1421:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>I,originalPathname:()=>A,patchFetch:()=>T,requestAsyncStorage:()=>E,routeModule:()=>R,serverHooks:()=>O,staticGenerationAsyncStorage:()=>C,staticGenerationBailout:()=>M});var n={};r.r(n),r.d(n,{alt:()=>b,contentType:()=>_,default:()=>S,size:()=>v});var o={};r.r(o),r.d(o,{GET:()=>j});var i=r(9297),a=r(4437),u=r(5741),s=r(6389),d=r(2420),l=r(572),c=r.n(l),p=r(1856),f=r(2735);let m=async(e,t)=>{if(!process.env.GRAPHQL_URL)throw TypeError("GRAPHQL_URL not set");let r=await fetch(process.env.GRAPHQL_URL,{method:"POST",body:JSON.stringify({query:e,variables:t}),headers:{"Content-Type":"application/json"}}),n=await r.json();if(n.errors)throw console.log("graphql err",n.errors),TypeError("GRAPHQL Error",{cause:n.errors});return n.data};class g extends String{constructor(e,t){super(e),this.value=e,this.__meta__=t}toString(){return this.value}}new g(`
    mutation CartCreate($email: String!, $stripeCheckoutId: String!) {
  createOrder(
    data: {email: $email, stripeCheckoutId: $stripeCheckoutId, total: 0}
  ) {
    id
  }
}
    `),new g(`
    query CartGetById($id: ID!) {
  order(where: {id: $id}, stage: DRAFT) {
    id
  }
}
    `),new g(`
    query CollectionGetById($id: ID!) {
  collection(where: {id: $id}) {
    id
    name
    products {
      description
      id
      name
      price
      description
      categories {
        name
      }
      images {
        url
      }
    }
  }
}
    `),new g(`
    query CollectionsGetList {
  collections {
    id
    name
  }
}
    `),new g(`
    query GetProductById($id: ID) {
  product(where: {id: $id}) {
    name
    description
    price
    images {
      url
    }
  }
}
    `),new g(`
    query ProductGetReviewsById($id: ID) {
  product(where: {id: $id}) {
    reviews {
      content
      headline
      email
      name
      rating
    }
  }
}
    `),new g(`
    query ProductGetSimilar($categoryName: String!) {
  products(where: {categories_every: {_search: $categoryName}}, first: 4) {
    description
    id
    name
    price
    description
    categories {
      name
    }
    images {
      url
    }
  }
}
    `);let h=new g(`
    query GetSingleProduct($id: ID) {
  product(where: {id: $id}) {
    name
    description
    price
    categories {
      name
    }
    images {
      url
    }
    variants {
      ... on ProductSizeColorVariant {
        id
        name
        size
        color
      }
    }
  }
}
    `);new g(`
    query ProductsGetAll {
  products {
    id
    name
    price
    description
    reviews {
      rating
    }
    categories {
      name
    }
    images {
      url
    }
  }
}
    `),new g(`
    query ProductsGetAllPaginated($skip: Int!, $first: Int!) {
  products(skip: $skip, first: $first, orderBy: price_DESC) {
    id
    name
    price
    description
    categories {
      name
    }
    images {
      url
    }
  }
  productsConnection {
    aggregate {
      count
    }
  }
}
    `),new g(`
    query ProductsGetAllPaginatedAsc($skip: Int!, $first: Int!) {
  products(skip: $skip, first: $first, orderBy: price_ASC) {
    id
    name
    price
    description
    categories {
      name
    }
    images {
      url
    }
  }
}
    `),new g(`
    query ProductsByName($name: String!) {
  products(where: {name_contains: $name}) {
    id
    name
    description
    images {
      id
      url
    }
    categories {
      name
      id
    }
    price
  }
}
    `),new g(`
    mutation ReviewAdd($id: ID!, $content: String!, $name: String!, $headline: String!, $email: String!, $rating: Int) {
  createReview(
    data: {headline: $headline, name: $name, email: $email, content: $content, product: {connect: {id: $id}}, rating: $rating}
  ) {
    id
  }
}
    `),new g(`
    mutation ReviewPublushAdd($id: ID!) {
  publishReview(where: {id: $id}) {
    id
  }
}
    `);let y=e=>m(h,{id:e}),b="Sklep",v={width:1200,height:630},_="image/png";async function S({params:e}){let{product:t}=await y(e.productId);return t||(0,p.notFound)(),new f.E((0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:["Name: ",t.name]}),(0,d.jsxs)("p",{children:["Desc: ",t.description]}),t.categories.map(e=>d.jsx("p",{children:e.name},e.name)),d.jsx(c(),{width:400,height:400,src:t.images[0].url,alt:t.name})]}))}let x={...n},w=x.default,P=x.generateImageMetadata;if("function"!=typeof w)throw Error('Default export is missing in "/Users/thonasjefferson/Desktop/next mATER/src/app/product/[productId]/opengraph-image.tsx"');async function j(e,t){let r;let{__metadata_id__:n=[],...o}=t.params||{},i=n[0],a=P?await P({params:o}):null;return a&&null==(r=a.find(e=>e.id.toString()===i)?.id)?new s.NextResponse("Not Found",{status:404}):w({params:t.params?o:void 0,id:r})}let R=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/product/[productId]/opengraph-image/route",pathname:"/product/[productId]/opengraph-image",filename:"opengraph-image",bundlePath:"app/product/[productId]/opengraph-image/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Fproduct%2F%5BproductId%5D%2Fopengraph-image%2Froute&isDynamic=1!/Users/thonasjefferson/Desktop/next mATER/src/app/product/[productId]/opengraph-image.tsx?__next_metadata_route__",nextConfigOutput:"",userland:o}),{requestAsyncStorage:E,staticGenerationAsyncStorage:C,serverHooks:O,headerHooks:I,staticGenerationBailout:M}=R,A="/product/[productId]/opengraph-image/route";function T(){return(0,u.patchFetch)({serverHooks:O,staticGenerationAsyncStorage:C})}},637:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createProxy",{enumerable:!0,get:function(){return n}});let n=r(4593).createClientModuleProxy},8255:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"bailoutToClientRendering",{enumerable:!0,get:function(){return i}});let n=r(6388),o=r(5869);function i(e){let t=o.staticGenerationAsyncStorage.getStore();if((null==t||!t.forceStatic)&&(null==t?void 0:t.isStaticGeneration))throw new n.BailoutToCSRError(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9475:(e,t,r)=>{function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(5859),r(8213),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1856:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return m},useSearchParams:function(){return g},usePathname:function(){return h},ServerInsertedHTMLContext:function(){return d.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return d.useServerInsertedHTML},useRouter:function(){return y},useParams:function(){return b},useSelectedLayoutSegments:function(){return v},useSelectedLayoutSegment:function(){return _},redirect:function(){return l.redirect},permanentRedirect:function(){return l.permanentRedirect},RedirectType:function(){return l.RedirectType},notFound:function(){return c.notFound}});let n=r(8213),o=r(4974),i=r(9161),a=r(9475),u=r(7612),s=r(8138),d=r(1457),l=r(6816),c=r(9624),p=Symbol("internal for urlsearchparams readonly");function f(){return Error("ReadonlyURLSearchParams cannot be modified")}class m{[Symbol.iterator](){return this[p][Symbol.iterator]()}append(){throw f()}delete(){throw f()}set(){throw f()}sort(){throw f()}constructor(e){this[p]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function g(){(0,a.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext),t=(0,n.useMemo)(()=>e?new m(e):null,[e]);{let{bailoutToClientRendering:e}=r(8255);e("useSearchParams()")}return t}function h(){return(0,a.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function y(){(0,a.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function b(){(0,a.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let n of(void 0===r&&(r={}),Object.values(t[1]))){let t=n[0],o=Array.isArray(t),i=o?t[1]:t;!i||i.startsWith(s.PAGE_SEGMENT_KEY)||(o&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):o&&(r[t[0]]=t[1]),r=e(n,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function v(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let i;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)i=t[1][r];else{var a;let e=t[1];i=null!=(a=e.children)?a:Object.values(e)[0]}if(!i)return o;let d=i[0],l=(0,u.getSegmentValue)(d);return!l||l.startsWith(s.PAGE_SEGMENT_KEY)?o:(o.push(l),e(i,r,!1,o))}(t,e)}function _(e){void 0===e&&(e="children"),(0,a.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=v(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9624:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3751:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6816:(e,t,r)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return s},redirect:function(){return d},permanentRedirect:function(){return l},isRedirectError:function(){return c},getURLFromRedirectError:function(){return p},getRedirectTypeFromError:function(){return f},getRedirectStatusCodeFromError:function(){return m}});let o=r(4580),i=r(2934),a=r(3751),u="NEXT_REDIRECT";function s(e,t,r){void 0===r&&(r=a.RedirectStatusCode.TemporaryRedirect);let n=Error(u);n.digest=u+";"+t+";"+e+";"+r+";";let i=o.requestAsyncStorage.getStore();return i&&(n.mutableCookies=i.mutableCookies),n}function d(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw s(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.TemporaryRedirect)}function l(e,t){void 0===t&&(t="replace");let r=i.actionAsyncStorage.getStore();throw s(e,t,(null==r?void 0:r.isAction)?a.RedirectStatusCode.SeeOther:a.RedirectStatusCode.PermanentRedirect)}function c(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===u&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in a.RedirectStatusCode}function p(e){return c(e)?e.digest.split(";",3)[2]:null}function f(e){if(!c(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!c(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7612:(e,t)=>{function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},912:(e,t,r)=>{let{createProxy:n}=r(637);e.exports=n("/Users/thonasjefferson/Desktop/next mATER/node_modules/.pnpm/next@14.1.0_@babel+core@7.23.9_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/client/image-component.js")},3449:(e,t,r)=>{e.exports=r(399)},2420:(e,t,r)=>{e.exports=r(3449).vendored["react-rsc"].ReactJsxRuntime},4593:(e,t,r)=>{e.exports=r(3449).vendored["react-rsc"].ReactServerDOMWebpackServerEdge},8213:(e,t,r)=>{e.exports=r(3449).vendored["react-rsc"].React},9857:(e,t,r)=>{e.exports=r(2785)},4974:(e,t,r)=>{e.exports=r(9857).vendored.contexts.AppRouterContext},9161:(e,t,r)=>{e.exports=r(9857).vendored.contexts.HooksClientContext},1457:(e,t,r)=>{e.exports=r(9857).vendored.contexts.ServerInsertedHtml},2735:(e,t,r)=>{Object.defineProperty(t,"E",{enumerable:!0,get:function(){return n}});class n extends Response{static #e=this.displayName="ImageResponse";constructor(...e){let t=new ReadableStream({async start(t){let n=new(await Promise.resolve().then(r.bind(r,4021))).ImageResponse(...e);if(!n.body)return t.close();let o=n.body.getReader();for(;;){let{done:e,value:r}=await o.read();if(e)return t.close();t.enqueue(r)}}}),n=e[1]||{};super(t,{headers:{"content-type":"image/png","cache-control":"public, immutable, no-transform, max-age=31536000",...n.headers},status:n.status,statusText:n.statusText})}}},5606:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return u}}),r(6413);let n=r(7363),o=r(9930);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u(e,t){var r;let u,s,d,{src:l,sizes:c,unoptimized:p=!1,priority:f=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:_,onLoad:S,onLoadingComplete:x,placeholder:w="empty",blurDataURL:P,fetchPriority:j,layout:R,objectFit:E,objectPosition:C,lazyBoundary:O,lazyRoot:I,...M}=e,{imgConf:A,showAltText:T,blurComplete:$,defaultLoader:k}=t,G=A||o.imageConfigDefault;if("allSizes"in G)u=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);u={...G,allSizes:e,deviceSizes:t}}let N=M.loader||k;delete M.loader,delete M.srcSet;let D="__next_img_default"in N;if(D){if("custom"===u.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!c&&(c=t)}let L="",q=a(y),F=a(b);if("object"==typeof(r=l)&&(i(r)||void 0!==r.src)){let e=i(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,d=e.blurHeight,P=P||e.blurDataURL,L=e.src,!v){if(q||F){if(q&&!F){let t=q/e.width;F=Math.round(e.height*t)}else if(!q&&F){let t=F/e.height;q=Math.round(e.width*t)}}else q=e.width,F=e.height}}let z=!f&&("lazy"===m||void 0===m);(!(l="string"==typeof l?l:L)||l.startsWith("data:")||l.startsWith("blob:"))&&(p=!0,z=!1),u.unoptimized&&(p=!0),D&&l.endsWith(".svg")&&!u.dangerouslyAllowSVG&&(p=!0),f&&(j="high");let B=a(h),H=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:C}:{},T?{}:{color:"transparent"},_),U=$||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:F,blurWidth:s,blurHeight:d,blurDataURL:P||"",objectFit:H.objectFit})+'")':'url("'+w+'")',W=U?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},V=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:u}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:d}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),l=s.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:s.map((e,n)=>u({config:t,src:r,quality:i,width:e})+" "+("w"===d?e:n+1)+d).join(", "),src:u({config:t,src:r,quality:i,width:s[l]})}}({config:u,src:l,unoptimized:p,width:q,quality:B,sizes:c,loader:N});return{props:{...M,loading:z?"lazy":m,fetchPriority:j,width:q,height:F,decoding:"async",className:g,style:{...H,...W},sizes:V.sizes,srcSet:V.srcSet,src:V.src},meta:{unoptimized:p,priority:f,placeholder:w,fill:v}}}},7363:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,u=n?40*n:t,s=o?40*o:r,d=u&&s?"viewBox='0 0 "+u+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9930:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},572:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return u},default:function(){return s}});let n=r(5859),o=r(5606),i=r(912),a=n._(r(1555)),u=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},s=i.Image},1555:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},6388:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return n},isBailoutToCSRError:function(){return o}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class n extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},8138:(e,t)=>{function r(e){return"("===e[0]&&e.endsWith(")")}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isGroupSegment:function(){return r},PAGE_SEGMENT_KEY:function(){return n},DEFAULT_SEGMENT_KEY:function(){return o}});let n="__PAGE__",o="__DEFAULT__"},6413:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5859:(e,t,r)=>{function n(e){return e&&e.__esModule?e:{default:e}}r.r(t),r.d(t,{_:()=>n,_interop_require_default:()=>n})}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[985,248],()=>r(1421));module.exports=n})();