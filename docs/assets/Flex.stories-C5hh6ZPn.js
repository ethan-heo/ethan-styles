import{j as e}from"./jsx-runtime-DEdD30eg.js";import{F as s,B as r}from"./index-DGHJYWIG.js";const d={title:"Design System/Flex",component:s,parameters:{layout:"centered",docs:{toc:{contentsSelector:".sbdocs-content",headingSelector:"h1, h2, h3",title:"Table of Contents",disable:!1,unsafeTocbotOptions:{orderedList:!1}}}},argTypes:{justify:{control:"select",description:"가로 정렬을 위해 사용합니다.",defaultValue:"flex-start",options:["flex-start","flex-end","center","space-between","space-around","space-evenly","space-evenly"]},align:{control:"select",description:"세로 정렬을 위해 사용합니다.",defaultValue:"flex-start",options:["flex-start","flex-end","center"]},vertical:{control:"boolean",description:"세로 배치를 위해 사용합니다.",defaultValue:!1},reverse:{control:"boolean",description:"반대로 배치하기 위해 사용합니다.",defaultValue:!1},wrap:{control:"boolean",description:"단락을 나눌 때 사용합니다.",defaultValue:!1},gap:{control:"select",description:"사이 간격을 정의할 때 사용합니다.",options:["extra-large","large","medium","small","extra-small"]}}},t={render:l=>e.jsxs(s,{...l,style:{width:"400px",padding:"var(--spacing-small)",borderRadius:"var(--border-radius-extra-small)",border:"var(--border-solid-thin) var(--color-text)"},children:[e.jsx(r,{children:"button1"}),e.jsx(r,{children:"button2"}),e.jsx(r,{children:"button3"}),e.jsx(r,{children:"button4"})]})};var o,n,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: props => {
    return <Flex {...props} style={{
      width: "400px",
      padding: "var(--spacing-small)",
      borderRadius: "var(--border-radius-extra-small)",
      border: "var(--border-solid-thin) var(--color-text)"
    }}>
                <Button>button1</Button>
                <Button>button2</Button>
                <Button>button3</Button>
                <Button>button4</Button>
            </Flex>;
  }
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const c=["Default"],p=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:c,default:d},Symbol.toStringTag,{value:"Module"}));export{t as D,p as F};
