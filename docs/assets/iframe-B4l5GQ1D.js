function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button-DLsaQHA3.js","./jsx-runtime-QvZ8i92b.js","./index-uubelm5h.js","./index-FeUjBnvO.js","./index-Cqi59ohZ.js","./index-Dei0BBcc.js","./index-B_J8iUie.js","./index-dOsnOu12.js","./index-DrFu-skq.js","./Button.stories-DuCAtgje.js","./index-CdKLDj0e.js","./Flex.stories-qAittqYw.js","./Link.stories-BlM7mUBT.js","./Paragraph.stories-CfWmhtH8.js","./Text.stories-g1g4NgND.js","./Title.stories-D6Wv2c64.js","./_GlobalToken-GR2WgSqk.js","./DesignToken-BNs-HCT1.js","./ThemeToken-0JGOB_ww.js","./entry-preview-C8ewSyH8.js","./react-18-BwV7Zf3K.js","./entry-preview-docs-CnCSSpDi.js","./preview-DzbRFJg_.js","./preview-CwqMn10d.js","./preview-BAz7FMXc.js","./preview-MU0hXeko.js","./preview-Cvw3oGig.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function m(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(e){if(e.ep)return;e.ep=!0;const r=m(e);fetch(e.href,r)}})();const R="modulepreload",f=function(i,s){return new URL(i,s).href},p={},t=function(s,m,u){let e=Promise.resolve();if(m&&m.length>0){const r=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),d=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));e=Promise.all(m.map(_=>{if(_=f(_,u),_ in p)return;p[_]=!0;const l=_.endsWith(".css"),O=l?'[rel="stylesheet"]':"";if(!!u)for(let c=r.length-1;c>=0;c--){const a=r[c];if(a.href===_&&(!l||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${O}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":R,l||(n.as="script",n.crossOrigin=""),n.href=_,d&&n.setAttribute("nonce",d),document.head.appendChild(n),l)return new Promise((c,a)=>{n.addEventListener("load",c),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${_}`)))})}))}return e.then(()=>s()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})},{createBrowserChannel:T}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,E=T({page:"preview"});P.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=E);const L={"./stories/Button.mdx":async()=>t(()=>import("./Button-DLsaQHA3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),"./stories/Button.stories.tsx":async()=>t(()=>import("./Button.stories-DuCAtgje.js").then(i=>i.B),__vite__mapDeps([9,10,2,5]),import.meta.url),"./stories/Flex.stories.tsx":async()=>t(()=>import("./Flex.stories-qAittqYw.js"),__vite__mapDeps([11,10,2,5]),import.meta.url),"./stories/Link.stories.tsx":async()=>t(()=>import("./Link.stories-BlM7mUBT.js"),__vite__mapDeps([12,10,2,5]),import.meta.url),"./stories/Paragraph.stories.tsx":async()=>t(()=>import("./Paragraph.stories-CfWmhtH8.js"),__vite__mapDeps([13,10,2,5]),import.meta.url),"./stories/Text.stories.tsx":async()=>t(()=>import("./Text.stories-g1g4NgND.js"),__vite__mapDeps([14,10,2,5]),import.meta.url),"./stories/Title.stories.tsx":async()=>t(()=>import("./Title.stories-D6Wv2c64.js"),__vite__mapDeps([15,10,2,5]),import.meta.url),"./stories/introduction/\bGlobalToken.mdx":async()=>t(()=>import("./_GlobalToken-GR2WgSqk.js"),__vite__mapDeps([16,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/introduction/DesignToken.mdx":async()=>t(()=>import("./DesignToken-BNs-HCT1.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8]),import.meta.url),"./stories/introduction/ThemeToken.mdx":async()=>t(()=>import("./ThemeToken-0JGOB_ww.js"),__vite__mapDeps([18,1,2,3,4,5,6,7,8]),import.meta.url)};async function v(i){return L[i]()}const{composeConfigs:A,PreviewWeb:y,ClientApi:D}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([t(()=>import("./entry-preview-C8ewSyH8.js"),__vite__mapDeps([19,2,20,5]),import.meta.url),t(()=>import("./entry-preview-docs-CnCSSpDi.js"),__vite__mapDeps([21,7,2,8]),import.meta.url),t(()=>import("./preview-DzbRFJg_.js"),__vite__mapDeps([22,6]),import.meta.url),t(()=>import("./preview-Cu1_3IqZ.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-DbT1mggi.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-CwqMn10d.js"),__vite__mapDeps([23,8]),import.meta.url),t(()=>import("./preview-B4GcaC1c.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-Db4Idchh.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-BAz7FMXc.js"),__vite__mapDeps([24,8]),import.meta.url),t(()=>import("./preview-Cv3rAi2i.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-D2d-74FL.js"),__vite__mapDeps([]),import.meta.url),t(()=>import("./preview-MU0hXeko.js"),__vite__mapDeps([25,26]),import.meta.url)]);return A(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new y(v,I);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};