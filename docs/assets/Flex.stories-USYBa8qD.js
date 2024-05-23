import{F as l,B as t}from"./index-qdTEhf9Z.js";import{R as e}from"./index-uubelm5h.js";import"./index-Dei0BBcc.js";const i={title:"Design System/Flex",component:l,parameters:{layout:"centered",docs:{toc:{contentsSelector:".sbdocs-content",headingSelector:"h1, h2, h3",title:"Table of Contents",disable:!1,unsafeTocbotOptions:{orderedList:!1}}}},tags:["autodocs"],argTypes:{justify:{control:"select",description:"가로 배치를 정의할 때 사용합니다.",defaultValue:"flex-start",options:["flex-start","flex-end","center","space-between","space-around","space-evenly","space-evenly"]},align:{control:"select",description:"세로 배치를 정의할 때 사용합니다.",defaultValue:"flex-start",options:["flex-start","flex-end","center"]},vertical:{control:"boolean",description:"순서를 가로로 변경할 때 사용합니다.",defaultValue:!1},reverse:{control:"boolean",description:"배치를 거꾸로 정의할 때 사용합니다.",defaultValue:!1},wrap:{control:"boolean",description:"단락을 나눌 때 사용합니다.",defaultValue:!1},gap:{control:"select",description:"사이 간격을 정의할 때 사용합니다.",options:[1,2,3,4,5,6,7,8,9,10]}}},n={render:s=>e.createElement(l,{...s,style:{width:"400px",padding:"var(--spacing-1)",borderRadius:"var(--border-radius-small)",border:"var(--border-primary-thin)"}},e.createElement(t,null,"button1"),e.createElement(t,null,"button2"),e.createElement(t,null,"button3"),e.createElement(t,null,"button4"))};var r,o,a;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: props => {
    return <Flex {...props} style={{
      width: "400px",
      padding: "var(--spacing-1)",
      borderRadius: "var(--border-radius-small)",
      border: "var(--border-primary-thin)"
    }}>
                <Button>button1</Button>
                <Button>button2</Button>
                <Button>button3</Button>
                <Button>button4</Button>
            </Flex>;
  }
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const p=["Default"];export{n as Default,p as __namedExportsOrder,i as default};
