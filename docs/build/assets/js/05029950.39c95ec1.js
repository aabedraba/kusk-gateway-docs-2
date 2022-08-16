"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a="Rate limiting",l={unversionedId:"guides/rate-limit",id:"guides/rate-limit",title:"Rate limiting",description:"Rate limiting ensures that your application doesn't get more than a specified number of requests over time. It effectively helps to protect your API from overloading. For requests above the threshold, Kusk Gateway returns HTTP Too Many Requests error.",source:"@site/docs/guides/rate-limit.md",sourceDirName:"guides",slug:"/guides/rate-limit",permalink:"/docs/guides/rate-limit",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/rate-limit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request Validation",permalink:"/docs/guides/validation"},next:{title:"Authentication",permalink:"/docs/guides/basic-auth"}},s={},u=[],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rate-limiting"},"Rate limiting"),(0,i.kt)("p",null,"Rate limiting ensures that your application doesn't get more than a specified number of requests over time. It effectively helps to protect your API from overloading. For requests above the threshold, Kusk Gateway returns HTTP Too Many Requests error."),(0,i.kt)("p",null,"Kusk makes it easy to configure Rate Limiting, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rate_limit")," option in the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-kusk")," extension:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  rate_limit:\n    requests_per_unit: 2\n    unit: minute\n..\n")),(0,i.kt)("p",null,"The example above allows only up to two requests per minute to be sent to the whole API."),(0,i.kt)("p",null,"You can also specify different rate-limiting settings for a specific operation or path. The following example shows rate limiting configuration for a specific operation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"...\npaths:\n  /hello:\n    get:\n      operationId: getHello\n      x-kusk:\n        rate_limit:\n          requests_per_unit: 2\n          unit: minute\n      ..\n")),(0,i.kt)("p",null,"See all available Rate Limiting configuration options in the ",(0,i.kt)("a",{parentName:"p",href:"../reference/extension/#rate-limiting"},"Extension Reference"),"."))}c.isMDXComponent=!0}}]);