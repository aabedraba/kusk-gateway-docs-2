"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[729],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=n,y=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return o?r.createElement(y,s(s({ref:t},c),{},{components:o})):r.createElement(y,s({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8261:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=o(7462),n=(o(7294),o(3905));const a={},s="Troubleshooting",l={unversionedId:"guides/troubleshooting",id:"guides/troubleshooting",title:"Troubleshooting",description:"To see what routes are set up on the gateway:",source:"@site/docs/guides/troubleshooting.md",sourceDirName:"guides",slug:"/guides/troubleshooting",permalink:"/docs/guides/troubleshooting",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/guides/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Request Timeouts",permalink:"/docs/guides/timeouts"},next:{title:"Observability",permalink:"/docs/guides/observability"}},i={},u=[{value:"<strong>To see what routes are set up on the gateway:</strong>",id:"to-see-what-routes-are-set-up-on-the-gateway",level:2},{value:"<strong>1. Get the name of your envoy fleet deployment.</strong>",id:"1-get-the-name-of-your-envoy-fleet-deployment",level:3},{value:"<strong>2. Port forward to the envoy deployment on port 19000.</strong>",id:"2-port-forward-to-the-envoy-deployment-on-port-19000",level:3},{value:"<strong>3. Hit localhost:19000/config_dump in your browser.</strong>",id:"3-hit-localhost19000config_dump-in-your-browser",level:3},{value:"<strong>4. Alternatively, use curl and jq to query routes.</strong>",id:"4-alternatively-use-curl-and-jq-to-query-routes",level:3},{value:"<strong>Webhooks Timeouts During Deployment</strong>",id:"webhooks-timeouts-during-deployment",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("h2",{id:"to-see-what-routes-are-set-up-on-the-gateway"},(0,n.kt)("strong",{parentName:"h2"},"To see what routes are set up on the gateway:")),(0,n.kt)("h3",{id:"1-get-the-name-of-your-envoy-fleet-deployment"},(0,n.kt)("strong",{parentName:"h3"},"1. Get the name of your envoy fleet deployment.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u276f kubectl get deployment -n kusk-system\nNAME                      READY   UP-TO-DATE   AVAILABLE   AGE\nkusk-gateway-manager   1/1     1            1           15m\nkusk-gateway-envoy-default    1/1     1            1           2m33s\n")),(0,n.kt)("p",null,"For this example, it's ",(0,n.kt)("inlineCode",{parentName:"p"},"kusk-envoy-default"),". Be sure to query the correct namespace for your installation."),(0,n.kt)("h3",{id:"2-port-forward-to-the-envoy-deployment-on-port-19000"},(0,n.kt)("strong",{parentName:"h3"},"2. Port forward to the envoy deployment on port 19000.")),(0,n.kt)("p",null,"The admin console is configured to listen on port 19000, so we will port forward to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\u276f kubectl port-forward deployment/kusk-envoy-default -n kusk-system 19000\nForwarding from 127.0.0.1:19000 -> 19000\nForwarding from [::1]:19000 -> 19000\nHandling connection for 19000\n")),(0,n.kt)("h3",{id:"3-hit-localhost19000config_dump-in-your-browser"},(0,n.kt)("strong",{parentName:"h3"},"3. Hit localhost:19000/config_dump in your browser.")),(0,n.kt)("h3",{id:"4-alternatively-use-curl-and-jq-to-query-routes"},(0,n.kt)("strong",{parentName:"h3"},"4. Alternatively, use curl and jq to query routes.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl http://localhost:19000/config_dump | jq \'.configs[] | select(.["@type"] == "type.googleapis.com/envoy.admin.v3.RoutesConfigDump") | .dynamic_route_configs[].route_config.virtual_hosts[].routes[]\'\n')),(0,n.kt)("p",null,"If the command hangs at all, cancel it and run it again."),(0,n.kt)("h2",{id:"webhooks-timeouts-during-deployment"},(0,n.kt)("strong",{parentName:"h2"},"Webhooks Timeouts During Deployment")),(0,n.kt)("p",null,"You may encounter an error during the resources' deployment with kubectl like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'Error from server (InternalError): error when creating "examples/todomvc/kusk-backend-api.yaml": Internal error occurred: failed calling webhook "mapi.kb.io": failed to call webhook: Post "https://kusk-gateway-webhooks-service.kusk-system.svc:443/mutate-gateway-kusk-io-v1alpha1-api?timeout=10s": context deadline exceeded\n')),(0,n.kt)("p",null,"This means that K8s masters control plane can't call the webhooks service residing on Kusk Gateway Manager on TCP port 9443. This problem is not specific to Kusk Gateway Manager itself and is related to the configuration of your cluster and the firewall rules."),(0,n.kt)("p",null,"To resolve this, in your firewall settings, add port 9443 to the rule containing the list of ports allowed to be accessed by K8s masters control plane."))}p.isMDXComponent=!0}}]);