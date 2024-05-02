import{B as z}from"./index-DNH7XjBu.js";import"./index-V85efKSV.js";const A={title:"Design System/Button",component:z,parameters:{layout:"centered",docs:{toc:{contentsSelector:".sbdocs-content",headingSelector:"h1, h2, h3",title:"Table of Contents",disable:!1,unsafeTocbotOptions:{orderedList:!1}}}},tags:["autodocs"],argTypes:{variant:{control:"select",description:`버튼 유형을 나타냅니다.
- **primary**: 주요한 액션을 수행할 때 사용합니다.
- **default**: 보조적인 액션을 수행할 때 사용합니다.
- **text**: 보조적인 액션을 수행할 때 사용합니다.`,defaultValue:"medium",options:["primary","default","text"]},size:{control:"select",description:"버튼의 크기를 지정할 때 사용합니다.",defaultValue:"medium",options:["x-large","large","medium","small","x-small"]},disabled:{control:"boolean",description:"액션 수행을 비활성화 할 때 사용합니다.",defaultValue:!1},danger:{control:"boolean",description:"위험한 액션을 수행할 때 사용합니다.",defaultValue:!1}},args:{onClick:()=>console.log("clicked")}},e={args:{children:"Hello world",variant:"default",size:"medium",disabled:!1,danger:!1}},r={parameters:{docs:{description:{story:"주요한 액션을 수행할 때 사용합니다."}}},args:{children:"Hello world",variant:"primary",size:"medium",disabled:!1,danger:!1}},a={parameters:{docs:{description:{story:"보조 액션을 수행할 때 사용합니다."}}},args:{children:"Hello world",variant:"default",size:"medium",disabled:!1,danger:!1}},s={parameters:{docs:{description:{story:"보조 액션을 수행할 때 사용합니다."}}},args:{children:"Hello world",variant:"text",size:"medium",disabled:!1,danger:!1}},n={parameters:{docs:{description:{story:"위험도가 있는 액션을 수행할 때 사용합니다."}}},args:{children:"Hello world",variant:"text",size:"medium",disabled:!1,danger:!0}},t={parameters:{docs:{description:{story:"액션을 비활성화할 때 사용합니다."}}},args:{children:"Hello world",variant:"text",size:"medium",disabled:!0,danger:!0}};var o,u,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "Hello world",
    variant: "default",
    size: "medium",
    disabled: false,
    danger: false
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "주요한 액션을 수행할 때 사용합니다."
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "primary",
    size: "medium",
    disabled: false,
    danger: false
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,p,C;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "보조 액션을 수행할 때 사용합니다."
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "default",
    size: "medium",
    disabled: false,
    danger: false
  }
}`,...(C=(p=a.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var g,f,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "보조 액션을 수행할 때 사용합니다."
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "text",
    size: "medium",
    disabled: false,
    danger: false
  }
}`,...(B=(f=s.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var D,b,y;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "위험도가 있는 액션을 수행할 때 사용합니다."
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "text",
    size: "medium",
    disabled: false,
    danger: true
  }
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,x,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "액션을 비활성화할 때 사용합니다."
      }
    }
  },
  args: {
    children: "Hello world",
    variant: "text",
    size: "medium",
    disabled: true,
    danger: true
  }
}`,...(v=(x=t.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const S=["Default","PrimaryButton","DefaultButton","TextButton","DangerButton","DisabledButton"];export{n as DangerButton,e as Default,a as DefaultButton,t as DisabledButton,r as PrimaryButton,s as TextButton,S as __namedExportsOrder,A as default};
