function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-NsTgK0Gw.js","./index-V85efKSV.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as p}from"./iframe-QWxvLQEj.js";import{R as e,r as c}from"./index-V85efKSV.js";import{r as l,u}from"./react-16-ryIcj2hL.js";import{C as h,A as E,H as d,D as x}from"./index-CNrbR9-V.js";import"../sb-preview/runtime.js";import"./index-Bi5bZrvs.js";import"./index-B_J8iUie.js";import"./index-BdyFT-FI.js";import"./index-DrFu-skq.js";var _={code:h,a:E,...d},D=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){let{showException:r}=this.props;r(t)}render(){let{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},F=class{constructor(){this.render=async(t,r,o)=>{let n={..._,...r==null?void 0:r.components},s=x;return new Promise((m,a)=>{p(()=>import("./index-NsTgK0Gw.js"),__vite__mapDeps([0,1]),import.meta.url).then(({MDXProvider:i})=>l(e.createElement(D,{showException:a,key:Math.random()},e.createElement(i,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>m())})},this.unmount=t=>{u(t)}}};export{F as DocsRenderer,_ as defaultComponents};
