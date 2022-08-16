"use strict";(self.webpackChunkkusk_gateway_docs_2=self.webpackChunkkusk_gateway_docs_2||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(i,".").concat(k)]||d[k]||p[k]||s;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const s={},o="Installing Kusk Gateway",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installing Kusk Gateway",description:"Prerequisites",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/kubeshop/kusk-gateway/docs/getting-started/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kusk Gateway",permalink:"/docs/intro"},next:{title:"Deploy an API",permalink:"/docs/getting-started/deploy-an-api"}},i={},u=[{value:"<strong>Prerequisites</strong>",id:"prerequisites",level:2},{value:"<strong>Installation requirements</strong>",id:"installation-requirements",level:2},{value:"<strong>Installing Kusk Gateway</strong>",id:"installing-kusk-gateway-1",level:2},{value:"<strong>1. Install Kusk CLI</strong>",id:"1-install-kusk-cli",level:3},{value:"<strong>2. Install Kusk Gateway</strong>",id:"2-install-kusk-gateway",level:3},{value:"<strong>3. Access the Dashboard</strong>",id:"3-access-the-dashboard",level:3},{value:"<strong>Get the Gateway&#39;s External IP</strong>",id:"get-the-gateways-external-ip",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-kusk-gateway"},"Installing Kusk Gateway"),(0,r.kt)("h2",{id:"prerequisites"},(0,r.kt)("strong",{parentName:"h2"},"Prerequisites")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Kubernetes v1.16+"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes Cluster Administration rights are required - we\ninstall ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#customresourcedefinitions"},"CustomResourceDefinitions"),"\nand a ServiceAccount with ClusterRoles and RoleBindings.")),(0,r.kt)("h2",{id:"installation-requirements"},(0,r.kt)("strong",{parentName:"h2"},"Installation requirements")),(0,r.kt)("p",null,"Tools needed for the installation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/install/"},"helm")," command-line tool"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl")," command-line tool")),(0,r.kt)("h2",{id:"installing-kusk-gateway-1"},(0,r.kt)("strong",{parentName:"h2"},"Installing Kusk Gateway")),(0,r.kt)("h3",{id:"1-install-kusk-cli"},(0,r.kt)("strong",{parentName:"h3"},"1. Install Kusk CLI")),(0,r.kt)("p",null,"You can find other installation methods (like Homebrew) ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli/overview"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"bash < <(curl -sSLf https://raw.githubusercontent.com/kubeshop/kusk/main/scripts/install.sh)\n")),(0,r.kt)("h3",{id:"2-install-kusk-gateway"},(0,r.kt)("strong",{parentName:"h3"},"2. Install Kusk Gateway")),(0,r.kt)("p",null,"Use the Kusk CLIs ",(0,r.kt)("a",{parentName:"p",href:"/docs/cli/install-cmd"},"install command")," to install Kusk Gateway in your cluster. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kusk install\n")),(0,r.kt)("h3",{id:"3-access-the-dashboard"},(0,r.kt)("strong",{parentName:"h3"},"3. Access the Dashboard")),(0,r.kt)("p",null,"Kusk Gateway includes a ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/overview"},"browser-based dashboard")," for inspection and management of your deployed APIs.\nUse the following commands to open it in your local browser after the above installation finishes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward -n kusk-system svc/kusk-gateway-private-envoy-fleet 8080:80\nopen http://localhost:8080\n")),(0,r.kt)("h2",{id:"get-the-gateways-external-ip"},(0,r.kt)("strong",{parentName:"h2"},"Get the Gateway's External IP")),(0,r.kt)("p",null,"If you want to access the APIs or StaticRoutes managed by Kusk Gateway, get the External IP address of the\nLoad Balancer by running the command below. Note that it may take a few seconds for the LoadBalancer IP to become available."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl get svc -l "app.kubernetes.io/component=envoy-svc" --namespace kusk-system\n')),(0,r.kt)("p",null,"The output should contain the ",(0,r.kt)("a",{parentName:"p",href:"../reference/customresources/envoyfleet"},"Envoy Fleet")," Service, which is the entry point of your API gateway, with the ",(0,r.kt)("strong",{parentName:"p"},"External-IP")," address field - use this address for your API endpoints querying. Note that it might take a while for the External IP to be created."),(0,r.kt)("admonition",{title:"External IP might not be available for some cluster setups",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are running a ",(0,r.kt)("strong",{parentName:"p"},"local setup"),", you can access the API endpoint with: "),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"kubectl port-forward service/kusk-gateway-envoy-fleet 8088:80 -n kusk-system")),(0,r.kt)("p",{parentName:"admonition"},"If you are running a ",(0,r.kt)("strong",{parentName:"p"},"bare metal cluster"),", consider installing ",(0,r.kt)("a",{parentName:"p",href:"https://metallb.universe.tf"},"MetalLB")," which creates External IP for LoadBalancer Service type in Kubernetes.")),(0,r.kt)("p",null,"If there are any issues, please check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/troubleshooting"},"Troubleshooting")," section."))}p.isMDXComponent=!0}}]);