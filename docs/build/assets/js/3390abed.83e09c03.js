"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[977],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7109:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},a="Request Timeouts",s={unversionedId:"guides/timeouts",id:"guides/timeouts",title:"Request Timeouts",description:"Kusk Gateway makes it easy to specify timeouts for your API operations, both globally and individually, for each path or operation.",source:"@site/docs/guides/timeouts.md",sourceDirName:"guides",slug:"/guides/timeouts",permalink:"/docs/guides/timeouts",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/timeouts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request Routing",permalink:"/docs/guides/routing"},next:{title:"Troubleshooting",permalink:"/docs/guides/troubleshooting"}},u={},l=[],c={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"request-timeouts"},"Request Timeouts"),(0,o.kt)("p",null,"Kusk Gateway makes it easy to specify timeouts for your API operations, both globally and individually, for each path or operation. "),(0,o.kt)("p",null,"For example the API below defines a global 60-second request timeout, which is overridden for the getHello operation and set to 10 seconds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"openapi: 3.0.0\ninfo:\n  title: simple-api\n  version: 0.1.0\nx-kusk:\n  qos:\n    request_timeout: 60\npaths:\n  /hello:\n    get:\n      operationId: getHello\n      x-kusk:\n        qos:\n          request_timeout: 10\n   ..\n")),(0,o.kt)("p",null,"See all available timeout configuration options in the ",(0,o.kt)("a",{parentName:"p",href:"../reference/extension/#qos"},"Extension Reference"),"."))}p.isMDXComponent=!0}}]);