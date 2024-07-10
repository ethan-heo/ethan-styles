import{B as l}from"./index-CEqMKJnr.js";const s={title:"Design System/Button",component:l,parameters:{layout:"centered",docs:{toc:{contentsSelector:".sbdocs-content",headingSelector:"h1, h2, h3",title:"Table of Contents",disable:!1,unsafeTocbotOptions:{orderedList:!1}}}},argTypes:{variant:{control:"select",description:"버튼 유형을 나타냅니다.",defaultValue:"medium",options:["primary","default","text"]},size:{control:"select",description:"버튼의 크기를 지정할 때 사용합니다.",defaultValue:"medium",options:["x-large","large","medium","small","x-small"]},disabled:{control:"boolean",description:"액션 수행을 비활성화 할 때 사용합니다.",defaultValue:!1},danger:{control:"boolean",description:"위험한 액션을 수행할 때 사용합니다.",defaultValue:!1}},args:{onClick:()=>console.log("clicked")}},e={args:{children:"Hello world",variant:"default",size:"medium",disabled:!1,danger:!1}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Hello world",
    variant: "default",
    size: "medium",
    disabled: false,
    danger: false
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const r=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:r,default:s},Symbol.toStringTag,{value:"Module"}));export{d as B,e as D};
