"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{9660:function(e,t,n){n.d(t,{default:function(){return i.a}});var r=n(532),i=n.n(r)},672:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=n(3483),i=n(9656),o=n(1715),u=i._(n(9736)),a=r._(n(2683)),l=r._(n(1340)),c=n(4073),s=n(506),d=n(182);n(7353);let f=n(8263),p=r._(n(5563)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,n,r,i,o,u){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){return u.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,u.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:i,height:a,width:l,decoding:c,className:s,style:d,fetchPriority:f,placeholder:p,loading:m,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:S,sizesInput:_,onLoad:j,onError:O,...E}=e;return(0,o.jsx)("img",{...E,...h(f),loading:m,width:l,height:a,decoding:c,"data-nimg":b?"fill":"1",className:s,style:d,sizes:i,srcSet:r,src:n,ref:(0,u.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(O&&(e.src=e.src),e.complete&&g(e,p,v,w,x,y,_))},[n,p,v,w,x,O,y,_,t]),onLoad:e=>{g(e.currentTarget,p,v,w,x,y,_)},onError:e=>{S(!0),"empty"!==p&&x(!0),O&&O(e)}})});function b(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...h(n.fetchPriority)};return t&&a.default.preload?(a.default.preload(n.src,r),null):(0,o.jsx)(l.default,{children:(0,o.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let v=(0,u.forwardRef)((e,t)=>{let n=(0,u.useContext)(f.RouterContext),r=(0,u.useContext)(d.ImageConfigContext),i=(0,u.useMemo)(()=>{let e=m||r||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[r]),{onLoad:a,onLoadingComplete:l}=e,g=(0,u.useRef)(a);(0,u.useEffect)(()=>{g.current=a},[a]);let h=(0,u.useRef)(l);(0,u.useEffect)(()=>{h.current=l},[l]);let[v,w]=(0,u.useState)(!1),[x,S]=(0,u.useState)(!1),{props:_,meta:j}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:x});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{..._,unoptimized:j.unoptimized,placeholder:j.placeholder,fill:j.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:S,sizesInput:e.sizes,ref:t}),j.priority?(0,o.jsx)(b,{isAppRouter:!n,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2129:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(3483)._(n(9736)).default.createContext({})},5087:function(e,t){function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},4073:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),n(7353);let r=n(2561),i=n(506);function o(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var n;let a,l,c,{src:s,sizes:d,unoptimized:f=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:w,overrideSrc:x,onLoad:S,onLoadingComplete:_,placeholder:j="empty",blurDataURL:O,fetchPriority:E,decoding:P="async",layout:C,objectFit:M,objectPosition:I,lazyBoundary:k,lazyRoot:z,...A}=e,{imgConf:D,showAltText:L,blurComplete:F,defaultLoader:R}=t,T=D||i.imageConfigDefault;if("allSizes"in T)a=T;else{let e=[...T.deviceSizes,...T.imageSizes].sort((e,t)=>e-t),t=T.deviceSizes.sort((e,t)=>e-t);a={...T,allSizes:e,deviceSizes:t}}if(void 0===R)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let N=A.loader||R;delete A.loader,delete A.srcSet;let U="__next_img_default"in N;if(U){if("custom"===a.loader)throw Error('Image with src "'+s+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=N;N=t=>{let{config:n,...r}=t;return e(r)}}if(C){"fill"===C&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[C];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[C];t&&!d&&(d=t)}let V="",B=u(y),H=u(b);if("object"==typeof(n=s)&&(o(n)||void 0!==n.src)){let e=o(s)?s.default:s;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,c=e.blurHeight,O=O||e.blurDataURL,V=e.src,!v){if(B||H){if(B&&!H){let t=B/e.width;H=Math.round(e.height*t)}else if(!B&&H){let t=H/e.height;B=Math.round(e.width*t)}}else B=e.width,H=e.height}}let G=!p&&("lazy"===m||void 0===m);(!(s="string"==typeof s?s:V)||s.startsWith("data:")||s.startsWith("blob:"))&&(f=!0,G=!1),a.unoptimized&&(f=!0),U&&s.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let $=u(h),q=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:I}:{},L?{}:{color:"transparent"},w),W=F||"empty"===j?null:"blur"===j?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:B,heightInt:H,blurWidth:l,blurHeight:c,blurDataURL:O||"",objectFit:q.objectFit})+'")':'url("'+j+'")',J=W?{backgroundSize:q.objectFit||"cover",backgroundPosition:q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:W}:{},X=function(e){let{config:t,src:n,unoptimized:r,width:i,quality:o,sizes:u,loader:a}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:r,allSizes:i}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,u),s=l.length-1;return{sizes:u||"w"!==c?u:"100vw",srcSet:l.map((e,r)=>a({config:t,src:n,quality:o,width:e})+" "+("w"===c?e:r+1)+c).join(", "),src:a({config:t,src:n,quality:o,width:l[s]})}}({config:a,src:s,unoptimized:f,width:B,quality:$,sizes:d,loader:N});return{props:{...A,loading:G?"lazy":m,fetchPriority:E,width:B,height:H,decoding:P,className:g,style:{...q,...J},sizes:X.sizes,srcSet:X.srcSet,src:x||X.src},meta:{unoptimized:f,priority:p,placeholder:j,fill:v}}}},1340:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return d}});let r=n(3483),i=n(9656),o=n(1715),u=i._(n(9736)),a=r._(n(1713)),l=n(2129),c=n(1413),s=n(5087);function d(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===u.default.Fragment?e.concat(u.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(7353);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(f,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return i=>{let o=!0,u=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){u=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?o=!1:n.add(t);else{let e=i.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?o=!1:(n.add(e),r[t]=n)}}}}return o}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,u.default.cloneElement(e,t)}return u.default.cloneElement(e,{key:r})})}let g=function(e){let{children:t}=e,n=(0,u.useContext)(l.AmpStateContext),r=(0,u.useContext)(c.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,s.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2561:function(e,t){function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:i,blurDataURL:o,objectFit:u}=e,a=r?40*r:t,l=i?40*i:n,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},182:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(3483)._(n(9736)),i=n(506),o=r.default.createContext(i.imageConfigDefault)},506:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",localPatterns:void 0,remotePatterns:[],unoptimized:!1}},532:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return l},getImageProps:function(){return a}});let r=n(3483),i=n(4073),o=n(672),u=r._(n(5563));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let l=o.Image},5563:function(e,t){function n(e){let{config:t,src:n,width:r,quality:i}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},8263:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(3483)._(n(9736)).default.createContext(null)},1713:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let r=n(9736),i="undefined"==typeof window,o=i?()=>{}:r.useLayoutEffect,u=i?()=>{}:r.useEffect;function a(e){let{headManager:t,reduceComponentsToState:n}=e;function a(){if(t&&t.mountedInstances){let i=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(i,e))}}if(i){var l;null==t||null==(l=t.mountedInstances)||l.add(e.children),a()}return o(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5905:function(e,t,n){n.d(t,{Z:function(){return O}});var r=n(9736);function i(e){return"[object Object]"===Object.prototype.toString.call(e)||Array.isArray(e)}function o(e,t){let n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&JSON.stringify(Object.keys(e.breakpoints||{}))===JSON.stringify(Object.keys(t.breakpoints||{}))&&n.every(n=>{let r=e[n],u=t[n];return"function"==typeof r?`${r}`==`${u}`:i(r)&&i(u)?o(r,u):r===u})}function u(e){return e.concat().sort((e,t)=>e.name>t.name?1:-1).map(e=>e.options)}function a(e){return"number"==typeof e}function l(e){return"string"==typeof e}function c(e){return"boolean"==typeof e}function s(e){return"[object Object]"===Object.prototype.toString.call(e)}function d(e){return Math.abs(e)}function f(e){return Math.sign(e)}function p(e){return y(e).map(Number)}function m(e){return e[g(e)]}function g(e){return Math.max(0,e.length-1)}function h(e,t=0){return Array.from(Array(e),(e,n)=>t+n)}function y(e){return Object.keys(e)}function b(e,t){return void 0!==t.MouseEvent&&e instanceof t.MouseEvent}function v(){let e=[],t={add:function(n,r,i,o={passive:!0}){let u;return"addEventListener"in n?(n.addEventListener(r,i,o),u=()=>n.removeEventListener(r,i,o)):(n.addListener(i),u=()=>n.removeListener(i)),e.push(u),t},clear:function(){e=e.filter(e=>e())}};return t}function w(e=0,t=0){let n=d(e-t);function r(n){return n<e||n>t}return{length:n,max:t,min:e,constrain:function(n){return r(n)?n<e?e:t:n},reachedAny:r,reachedMax:function(e){return e>t},reachedMin:function(t){return t<e},removeOffset:function(e){return n?e-n*Math.ceil((e-t)/n):e}}}function x(e){let t=e;function n(e){return a(e)?e:e.get()}return{get:function(){return t},set:function(e){t=n(e)},add:function(e){t+=n(e)},subtract:function(e){t-=n(e)}}}function S(e,t){let n="x"===e.scroll?function(e){return`translate3d(${e}px,0px,0px)`}:function(e){return`translate3d(0px,${e}px,0px)`},r=t.style,i=!1;return{clear:function(){i||(r.transform="",t.getAttribute("style")||t.removeAttribute("style"))},to:function(t){i||(r.transform=n(e.direction(t)))},toggleActive:function(e){i=!e}}}let _={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function j(e,t,n){let r,i,o,u,O;let E=e.ownerDocument,P=E.defaultView,C=function(e){function t(e,t){return function e(t,n){return[t,n].reduce((t,n)=>(y(n).forEach(r=>{let i=t[r],o=n[r],u=s(i)&&s(o);t[r]=u?e(i,o):o}),t),{})}(e,t||{})}return{mergeOptions:t,optionsAtMedia:function(n){let r=n.breakpoints||{},i=y(r).filter(t=>e.matchMedia(t).matches).map(e=>r[e]).reduce((e,n)=>t(e,n),{});return t(n,i)},optionsMediaQueries:function(t){return t.map(e=>y(e.breakpoints||{})).reduce((e,t)=>e.concat(t),[]).map(e.matchMedia)}}}(P),M=(O=[],{init:function(e,t){return(O=t.filter(({options:e})=>!1!==C.optionsAtMedia(e).active)).forEach(t=>t.init(e,C)),t.reduce((e,t)=>Object.assign(e,{[t.name]:t}),{})},destroy:function(){O=O.filter(e=>e.destroy())}}),I=v(),k=function(){let e,t={},n={init:function(t){e=t},emit:function(r){return(t[r]||[]).forEach(t=>t(e,r)),n},off:function(e,r){return t[e]=(t[e]||[]).filter(e=>e!==r),n},on:function(e,r){return t[e]=(t[e]||[]).concat([r]),n},clear:function(){t={}}};return n}(),{mergeOptions:z,optionsAtMedia:A,optionsMediaQueries:D}=C,{on:L,off:F,emit:R}=k,T=!1,N=z(_,j.globalOptions),U=z(N),V=[];function B(t,n){!T&&(U=A(N=z(N,t)),V=n||V,function(){let{container:t,slides:n}=U;o=(l(t)?e.querySelector(t):t)||e.children[0];let r=l(n)?o.querySelectorAll(n):n;u=[].slice.call(r||o.children)}(),r=function t(n){let r=function(e,t,n,r,i,o,u){let s,_;let{align:j,axis:O,direction:E,startIndex:P,loop:C,duration:M,dragFree:I,dragThreshold:k,inViewThreshold:z,slidesToScroll:A,skipSnaps:D,containScroll:L,watchResize:F,watchSlides:R,watchDrag:T,watchFocus:N}=o,U={measure:function(e){let{offsetTop:t,offsetLeft:n,offsetWidth:r,offsetHeight:i}=e;return{top:t,right:n+r,bottom:t+i,left:n,width:r,height:i}}},V=U.measure(t),B=n.map(U.measure),H=function(e,t){let n="rtl"===t,r="y"===e,i=!r&&n?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":n?"right":"left",endEdge:r?"bottom":n?"left":"right",measureSize:function(e){let{height:t,width:n}=e;return r?t:n},direction:function(e){return e*i}}}(O,E),G=H.measureSize(V),$={measure:function(e){return e/100*G}},q=function(e,t){let n={start:function(){return 0},center:function(e){return(t-e)/2},end:function(e){return t-e}};return{measure:function(r,i){return l(e)?n[e](r):e(t,r,i)}}}(j,G),W=!C&&!!L,{slideSizes:J,slideSizesWithGaps:X,startGap:Y,endGap:Q}=function(e,t,n,r,i,o){let{measureSize:u,startEdge:a,endEdge:l}=e,c=n[0]&&i,s=function(){if(!c)return 0;let e=n[0];return d(t[a]-e[a])}(),f=c?parseFloat(o.getComputedStyle(m(r)).getPropertyValue(`margin-${l}`)):0,p=n.map(u),h=n.map((e,t,n)=>{let r=t===g(n);return t?r?p[t]+f:n[t+1][a]-e[a]:p[t]+s}).map(d);return{slideSizes:p,slideSizesWithGaps:h,startGap:s,endGap:f}}(H,V,B,n,C||!!L,i),Z=function(e,t,n,r,i,o,u,l,c){let{startEdge:s,endEdge:f,direction:h}=e,y=a(n);return{groupSlides:function(e){return y?p(e).filter(e=>e%n==0).map(t=>e.slice(t,t+n)):e.length?p(e).reduce((n,a,c)=>{let p=m(n)||0,y=a===g(e),b=i[s]-o[p][s],v=i[s]-o[a][f],w=r||0!==p?0:h(u),x=d(v-(!r&&y?h(l):0)-(b+w));return c&&x>t+2&&n.push(a),y&&n.push(e.length),n},[]).map((t,n,r)=>{let i=Math.max(r[n-1]||0);return e.slice(i,t)}):[]}}}(H,G,A,C,V,B,Y,Q,0),{snaps:K,snapsAligned:ee}=function(e,t,n,r,i){let{startEdge:o,endEdge:u}=e,{groupSlides:a}=i,l=a(r).map(e=>m(e)[u]-e[0][o]).map(d).map(t.measure),c=r.map(e=>n[o]-e[o]).map(e=>-d(e)),s=a(c).map(e=>e[0]).map((e,t)=>e+l[t]);return{snaps:c,snapsAligned:s}}(H,q,V,B,Z),et=-m(K)+m(X),{snapsContained:en,scrollContainLimit:er}=function(e,t,n,r,i){let o=w(-t+e,0),u=n.map((e,t)=>{let{min:r,max:i}=o,u=o.constrain(e),a=t===g(n);return t?a||1>d(r-u)?r:1>d(i-u)?i:u:i}).map(e=>parseFloat(e.toFixed(3))),a=function(){let e=u[0],t=m(u);return w(u.lastIndexOf(e),u.indexOf(t)+1)}();return{snapsContained:function(){if(t<=e+2)return[o.max];if("keepSnaps"===r)return u;let{min:n,max:i}=a;return u.slice(n,i)}(),scrollContainLimit:a}}(G,et,ee,L,0),ei=W?en:ee,{limit:eo}=function(e,t,n){let r=t[0];return{limit:w(n?r-e:m(t),r)}}(et,ei,C),eu=function e(t,n,r){let{constrain:i}=w(0,t),o=t+1,u=a(n);function a(e){return r?d((o+e)%o):i(e)}function l(){return e(t,u,r)}let c={get:function(){return u},set:function(e){return u=a(e),c},add:function(e){return l().set(u+e)},clone:l};return c}(g(ei),P,C),ea=eu.clone(),el=p(n),ec=({dragHandler:e,scrollBody:t,scrollBounds:n,options:{loop:r}},i)=>{r||n.constrain(e.pointerDown()),t.seek(i)},es=({scrollBody:e,translate:t,location:n,offsetLocation:r,scrollLooper:i,slideLooper:o,dragHandler:u,animation:a,eventHandler:l,scrollBounds:c,options:{loop:s}},d)=>{let f=e.settled(),p=!c.shouldConstrain(),m=s?f:f&&p;m&&!u.pointerDown()&&(a.stop(),l.emit("settle")),m||l.emit("scroll");let g=n.get()*d+em.get()*(1-d);r.set(g),s&&(i.loop(e.direction()),o.loop()),t.to(r.get())},ed=function(e,t,n,r){let i=v(),o=1e3/60,u=null,a=0,l=0;function c(e){if(!l)return;u||(u=e);let i=e-u;for(u=e,a+=i;a>=o;)n(o),a-=o;r(a/o),l&&t.requestAnimationFrame(c)}function s(){t.cancelAnimationFrame(l),u=null,a=0,l=0}return{init:function(){i.add(e,"visibilitychange",()=>{e.hidden&&(u=null,a=0)})},destroy:function(){s(),i.clear()},start:function(){l||(l=t.requestAnimationFrame(c))},stop:s,update:()=>n(o),render:r}}(r,i,e=>ec(eO,e),e=>es(eO,e)),ef=ei[eu.get()],ep=x(ef),em=x(ef),eg=x(ef),eh=x(ef),ey=function(e,t,n,r,i,o){let u=0,a=0,l=i,c=.68,s=e.get(),p=0;function m(e){return l=e,h}function g(e){return c=e,h}let h={direction:function(){return a},duration:function(){return l},velocity:function(){return u},seek:function(t){let i=t/1e3,o=l*i,d=r.get()-e.get(),m=0;return l?(n.set(e),u+=d/o,u*=c,s+=u,e.add(u*i),m=s-p):(u=0,n.set(r),e.set(r),m=d),a=f(m),p=s,h},settled:function(){return .001>d(r.get()-t.get())},useBaseFriction:function(){return g(.68)},useBaseDuration:function(){return m(i)},useFriction:g,useDuration:m};return h}(ep,eg,em,eh,M,0),eb=function(e,t,n,r,i){let{reachedAny:o,removeOffset:u,constrain:a}=r;function l(e){return e.concat().sort((e,t)=>d(e)-d(t))[0]}function c(t,r){let i=[t,t+n,t-n];if(!e)return t;if(!r)return l(i);let o=i.filter(e=>f(e)===r);return o.length?l(o):m(i)-n}return{byDistance:function(n,r){let l=i.get()+n,{index:s,distance:f}=function(n){let r=e?u(n):a(n),{index:i}=t.map((e,t)=>({diff:c(e-r,0),index:t})).sort((e,t)=>d(e.diff)-d(t.diff))[0];return{index:i,distance:r}}(l),p=!e&&o(l);if(!r||p)return{index:s,distance:n};let m=n+c(t[s]-f,0);return{index:s,distance:m}},byIndex:function(e,n){let r=c(t[e]-i.get(),n);return{index:e,distance:r}},shortcut:c}}(C,ei,et,eo,eh),ev=function(e,t,n,r,i,o,u){function a(i){let a=i.distance,l=i.index!==t.get();o.add(a),a&&(r.duration()?e.start():(e.update(),e.render(1),e.update())),l&&(n.set(t.get()),t.set(i.index),u.emit("select"))}return{distance:function(e,t){a(i.byDistance(e,t))},index:function(e,n){let r=t.clone().set(e);a(i.byIndex(r.get(),n))}}}(ed,eu,ea,ey,eb,eh,u),ew=function(e){let{max:t,length:n}=e;return{get:function(e){return n?-((e-t)/n):0}}}(eo),ex=v(),eS=function(e,t,n,r){let i;let o={},u=null,a=null,l=!1;return{init:function(){i=new IntersectionObserver(e=>{l||(e.forEach(e=>{o[t.indexOf(e.target)]=e}),u=null,a=null,n.emit("slidesInView"))},{root:e.parentElement,threshold:r}),t.forEach(e=>i.observe(e))},destroy:function(){i&&i.disconnect(),l=!0},get:function(e=!0){if(e&&u)return u;if(!e&&a)return a;let t=y(o).reduce((t,n)=>{let r=parseInt(n),{isIntersecting:i}=o[r];return(e&&i||!e&&!i)&&t.push(r),t},[]);return e&&(u=t),e||(a=t),t}}}(t,n,u,z),{slideRegistry:e_}=function(e,t,n,r,i,o){let{groupSlides:u}=i,{min:a,max:l}=r;return{slideRegistry:function(){let r=u(o);return 1===n.length?[o]:e&&"keepSnaps"!==t?r.slice(a,l).map((e,t,n)=>{let r=t===g(n);return t?r?h(g(o)-m(n)[0]+1,m(n)[0]):e:h(m(n[0])+1)}):r}()}}(W,L,ei,er,Z,el),ej=function(e,t,n,r,i,o,u,l){let s={passive:!0,capture:!0},d=0;function f(e){"Tab"===e.code&&(d=new Date().getTime())}return{init:function(p){l&&(o.add(document,"keydown",f,!1),t.forEach((t,f)=>{o.add(t,"focus",t=>{(c(l)||l(p,t))&&function(t){if(new Date().getTime()-d>10)return;u.emit("slideFocusStart"),e.scrollLeft=0;let o=n.findIndex(e=>e.includes(t));a(o)&&(i.useDuration(0),r.index(o,0),u.emit("slideFocus"))}(f)},s)}))}}}(e,n,e_,ev,ey,ex,u,N),eO={ownerDocument:r,ownerWindow:i,eventHandler:u,containerRect:V,slideRects:B,animation:ed,axis:H,dragHandler:function(e,t,n,r,i,o,u,a,l,s,p,m,g,h,y,x,S,_,j){let{cross:O,direction:E}=e,P=["INPUT","SELECT","TEXTAREA"],C={passive:!1},M=v(),I=v(),k=w(50,225).constrain(h.measure(20)),z={mouse:300,touch:400},A={mouse:500,touch:600},D=y?43:25,L=!1,F=0,R=0,T=!1,N=!1,U=!1,V=!1;function B(e){if(!b(e,r)&&e.touches.length>=2)return H(e);let t=o.readPoint(e),n=o.readPoint(e,O),u=d(t-F),l=d(n-R);if(!N&&!V&&(!e.cancelable||!(N=u>l)))return H(e);let c=o.pointerMove(e);u>x&&(U=!0),s.useFriction(.3).useDuration(.75),a.start(),i.add(E(c)),e.preventDefault()}function H(e){let t=p.byDistance(0,!1).index!==m.get(),n=o.pointerUp(e)*(y?A:z)[V?"mouse":"touch"],r=function(e,t){let n=m.add(-1*f(e)),r=p.byDistance(e,!y).distance;return y||d(e)<k?r:S&&t?.5*r:p.byIndex(n.get(),0).distance}(E(n),t),i=function(e,t){var n,r;if(0===e||0===t||d(e)<=d(t))return 0;let i=(n=d(e),r=d(t),d(n-r));return d(i/e)}(n,r);N=!1,T=!1,I.clear(),s.useDuration(D-10*i).useFriction(.68+i/50),l.distance(r,!y),V=!1,g.emit("pointerUp")}function G(e){U&&(e.stopPropagation(),e.preventDefault(),U=!1)}return{init:function(e){j&&M.add(t,"dragstart",e=>e.preventDefault(),C).add(t,"touchmove",()=>void 0,C).add(t,"touchend",()=>void 0).add(t,"touchstart",a).add(t,"mousedown",a).add(t,"touchcancel",H).add(t,"contextmenu",H).add(t,"click",G,!0);function a(a){(c(j)||j(e,a))&&function(e){let a=b(e,r);V=a,U=y&&a&&!e.buttons&&L,L=d(i.get()-u.get())>=2,a&&0!==e.button||function(e){let t=e.nodeName||"";return P.includes(t)}(e.target)||(T=!0,o.pointerDown(e),s.useFriction(0).useDuration(0),i.set(u),function(){let e=V?n:t;I.add(e,"touchmove",B,C).add(e,"touchend",H).add(e,"mousemove",B,C).add(e,"mouseup",H)}(),F=o.readPoint(e),R=o.readPoint(e,O),g.emit("pointerDown"))}(a)}},destroy:function(){M.clear(),I.clear()},pointerDown:function(){return T}}}(H,e,r,i,eh,function(e,t){let n,r;function i(e){return e.timeStamp}function o(n,r){let i=r||e.scroll,o=`client${"x"===i?"X":"Y"}`;return(b(n,t)?n:n.touches[0])[o]}return{pointerDown:function(e){return n=e,r=e,o(e)},pointerMove:function(e){let t=o(e)-o(r),u=i(e)-i(n)>170;return r=e,u&&(n=e),t},pointerUp:function(e){if(!n||!r)return 0;let t=o(r)-o(n),u=i(e)-i(n),a=i(e)-i(r)>170,l=t/u;return u&&!a&&d(l)>.1?l:0},readPoint:o}}(H,i),ep,ed,ev,ey,eb,eu,u,$,I,k,D,0,T),eventStore:ex,percentOfView:$,index:eu,indexPrevious:ea,limit:eo,location:ep,offsetLocation:eg,previousLocation:em,options:o,resizeHandler:function(e,t,n,r,i,o,u){let a,l;let s=[e].concat(r),f=[],p=!1;function m(e){return i.measureSize(u.measure(e))}return{init:function(i){o&&(l=m(e),f=r.map(m),a=new ResizeObserver(n=>{(c(o)||o(i,n))&&function(n){for(let o of n){if(p)return;let n=o.target===e,u=r.indexOf(o.target),a=n?l:f[u];if(d(m(n?e:r[u])-a)>=.5){i.reInit(),t.emit("resize");break}}}(n)}),n.requestAnimationFrame(()=>{s.forEach(e=>a.observe(e))}))},destroy:function(){p=!0,a&&a.disconnect()}}}(t,u,i,n,H,F,U),scrollBody:ey,scrollBounds:function(e,t,n,r,i){let o=i.measure(10),u=i.measure(50),a=w(.1,.99),l=!1;function c(){return!!(!l&&e.reachedAny(n.get())&&e.reachedAny(t.get()))}return{shouldConstrain:c,constrain:function(i){if(!c())return;let l=e.reachedMin(t.get())?"min":"max",s=d(e[l]-t.get()),f=n.get()-t.get(),p=a.constrain(s/u);n.subtract(f*p),!i&&d(f)<o&&(n.set(e.constrain(n.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(e){l=!e}}}(eo,eg,eh,ey,$),scrollLooper:function(e,t,n,r){let{reachedMin:i,reachedMax:o}=w(t.min+.1,t.max+.1);return{loop:function(t){if(!(1===t?o(n.get()):-1===t&&i(n.get())))return;let u=-1*t*e;r.forEach(e=>e.add(u))}}}(et,eo,eg,[ep,eg,em,eh]),scrollProgress:ew,scrollSnapList:ei.map(ew.get),scrollSnaps:ei,scrollTarget:eb,scrollTo:ev,slideLooper:function(e,t,n,r,i,o,u,a,l){let c=p(i),s=m(f(p(i).reverse(),u[0]),n,!1).concat(m(f(c,t-u[0]-1),-n,!0));function d(e,t){return e.reduce((e,t)=>e-i[t],t)}function f(e,t){return e.reduce((e,n)=>d(e,t)>0?e.concat([n]):e,[])}function m(i,u,c){let s=o.map((e,n)=>({start:e-r[n]+.5+u,end:e+t-.5+u}));return i.map(t=>{let r=c?0:-n,i=c?n:0,o=s[t][c?"end":"start"];return{index:t,loopPoint:o,slideLocation:x(-1),translate:S(e,l[t]),target:()=>a.get()>o?r:i}})}return{canLoop:function(){return s.every(({index:e})=>.1>=d(c.filter(t=>t!==e),t))},clear:function(){s.forEach(e=>e.translate.clear())},loop:function(){s.forEach(e=>{let{target:t,translate:n,slideLocation:r}=e,i=t();i!==r.get()&&(n.to(i),r.set(i))})},loopPoints:s}}(H,G,et,J,X,K,ei,eg,n),slideFocus:ej,slidesHandler:(_=!1,{init:function(e){R&&(s=new MutationObserver(t=>{!_&&(c(R)||R(e,t))&&function(t){for(let n of t)if("childList"===n.type){e.reInit(),u.emit("slidesChanged");break}}(t)})).observe(t,{childList:!0})},destroy:function(){s&&s.disconnect(),_=!0}}),slidesInView:eS,slideIndexes:el,slideRegistry:e_,slidesToScroll:Z,target:eh,translate:S(H,t)};return eO}(e,o,u,E,P,n,k);return n.loop&&!r.slideLooper.canLoop()?t(Object.assign({},n,{loop:!1})):r}(U),D([N,...V.map(({options:e})=>e)]).forEach(e=>I.add(e,"change",H)),U.active&&(r.translate.to(r.location.get()),r.animation.init(),r.slidesInView.init(),r.slideFocus.init(W),r.eventHandler.init(W),r.resizeHandler.init(W),r.slidesHandler.init(W),r.options.loop&&r.slideLooper.loop(),o.offsetParent&&u.length&&r.dragHandler.init(W),i=M.init(W,V)))}function H(e,t){let n=q();G(),B(z({startIndex:n},e),t),k.emit("reInit")}function G(){r.dragHandler.destroy(),r.eventStore.clear(),r.translate.clear(),r.slideLooper.clear(),r.resizeHandler.destroy(),r.slidesHandler.destroy(),r.slidesInView.destroy(),r.animation.destroy(),M.destroy(),I.clear()}function $(e,t,n){U.active&&!T&&(r.scrollBody.useBaseFriction().useDuration(!0===t?0:U.duration),r.scrollTo.index(e,n||0))}function q(){return r.index.get()}let W={canScrollNext:function(){return r.index.add(1).get()!==q()},canScrollPrev:function(){return r.index.add(-1).get()!==q()},containerNode:function(){return o},internalEngine:function(){return r},destroy:function(){T||(T=!0,I.clear(),G(),k.emit("destroy"),k.clear())},off:F,on:L,emit:R,plugins:function(){return i},previousScrollSnap:function(){return r.indexPrevious.get()},reInit:H,rootNode:function(){return e},scrollNext:function(e){$(r.index.add(1).get(),e,-1)},scrollPrev:function(e){$(r.index.add(-1).get(),e,1)},scrollProgress:function(){return r.scrollProgress.get(r.location.get())},scrollSnapList:function(){return r.scrollSnapList},scrollTo:$,selectedScrollSnap:q,slideNodes:function(){return u},slidesInView:function(){return r.slidesInView.get()},slidesNotInView:function(){return r.slidesInView.get(!1)}};return B(t,n),setTimeout(()=>k.emit("init"),0),W}function O(e={},t=[]){let n=(0,r.useRef)(e),i=(0,r.useRef)(t),[a,l]=(0,r.useState)(),[c,s]=(0,r.useState)(),d=(0,r.useCallback)(()=>{a&&a.reInit(n.current,i.current)},[a]);return(0,r.useEffect)(()=>{o(n.current,e)||(n.current=e,d())},[e,d]),(0,r.useEffect)(()=>{!function(e,t){if(e.length!==t.length)return!1;let n=u(e),r=u(t);return n.every((e,t)=>o(e,r[t]))}(i.current,t)&&(i.current=t,d())},[t,d]),(0,r.useEffect)(()=>{if("undefined"!=typeof window&&window.document&&window.document.createElement&&c){j.globalOptions=O.globalOptions;let e=j(c,n.current,i.current);return l(e),()=>e.destroy()}l(void 0)},[c,l]),[s,a]}j.globalOptions=void 0,O.globalOptions=void 0}}]);