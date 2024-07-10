import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as s}from"./index-FeUjBnvO.js";import{M as t}from"./index-B2Ltqz5G.js";import"./index-uubelm5h.js";import"./iframe-BDQUPt4j.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-dOsnOu12.js";import"./index-DrFu-skq.js";function r(i){const e={a:"a",blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Introduction/디자인 토큰 가이드"}),`
`,n.jsxs(e.blockquote,{children:[`
`,n.jsx(e.p,{children:"ethan-ui 디자인 시스템은 어떤 목적으로 사용되고 구성되어 있는 요소와 구성 요소를 통한 프로세스에 대해 설명합니다."}),`
`]}),`
`,n.jsx(e.h2,{id:"목적",children:"목적"}),`
`,n.jsx(e.p,{children:`ethan-ui는 개인 프로젝트에 사용하기 위해 만들어졌으며 스타일 요소와 UI를 재사용할 수 있도록 구성하여 프로젝트를 빠르게 수행할 수 있게 만들고
스타일 구성을 테마로 구분하여 여러 형태의 프로젝트에서 사용할 수 있게 만드는 것이 목적입니다.`}),`
`,n.jsx(e.h2,{id:"구성-요소",children:"구성 요소"}),`
`,n.jsx(e.p,{children:"구성 요소는 토큰(글로벌, 테마), 컴포넌트로 구성됩니다. 글로벌 토큰을 사용하여 테마 구조화된 토큰을 생성하고 이를 사용하여 UI를 구현합니다."}),`
`,n.jsx(e.h3,{id:"글로벌-토큰",children:"글로벌 토큰"}),`
`,n.jsx(e.p,{children:`글로벌 토큰은 단일 스타일 속성으로 구성된 객체형태의 자료구조입니다. 여러 테마 토큰에서 사용하기 위해 다양한 스타일 속성으로 구성됩니다.
테마 토큰과 각 스타일 속성은 1:N 관계를 갖고 있으며 이 관계는 의도적입니다.`}),`
`,n.jsx(e.p,{children:"이 의존 관계가 의도적인 이유는 글로벌, 테마 토큰이 구조화되어 있어 안정적으로 사용할 수 있기 때문입니다. 스타일 속성을 정의할 때 사용 범위와 용도 등에 관한 규칙으로 구성됩니다."}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"/docs/introduction-%EA%B8%80%EB%A1%9C%EB%B2%8C-%ED%86%A0%ED%81%B0--docs",children:"글로벌 토큰 속성"})}),`
`,n.jsx(e.h3,{id:"테마-토큰",children:"테마 토큰"}),`
`,n.jsx(e.p,{children:"테마 토큰은 글로벌 토큰을 사용하여 복합 속성으로 구성된 객채형태의 자료구조입니다. UI 컴포넌트, 프로젝트의 스타일을 구성하기 위한 역할을 하며 디자인의 일관성을 유지시키고 사용 범위와 용도를 구체화하여 유지보수를 용이하게 만듭니다."}),`
`,n.jsx(e.p,{children:"구조화된 테마는 UI의 형태를 쉽게 변경할 수 있고 다양한 프로젝트에서 적절히 활용할 수 있도록 도와줍니다."}),`
`,n.jsx(e.p,{children:n.jsx(e.a,{href:"/docs/introduction-%ED%85%8C%EB%A7%88-%ED%86%A0%ED%81%B0--docs",children:"테마 토큰 속성"})}),`
`,n.jsx(e.h3,{id:"ui-컴포넌트",children:"UI 컴포넌트"}),`
`,n.jsx(e.p,{children:"UI 컴포넌트는 테마 토큰을 사용하여 구현합니다. css variables 형태로 변환된 토큰값을 사용하여 스타일을 정의하며 BEM 방법론을 통해 셀렉터 우선순위를 동일하게 맞춰 외부에서 커스터마이징이 가능하도록 구성합니다."}),`
`,n.jsx(e.p,{children:"구현된 컴포넌트는 디자인 시스템 탭에서 확인할 수 있습니다."}),`
`,n.jsx(e.h2,{id:"프로세스",children:"프로세스"}),`
`,n.jsx(e.p,{children:"ethan-ui 에서 디자인 시스템을 운영하기 위해 아래와 같은 형태의 프로세스를 가집니다."}),`
`,n.jsx(e.p,{children:n.jsx(e.img,{src:"./assets/ethan-ui-design-token-flow.webp",alt:"ethan-ui의 디자인 토큰 흐름"})}),`
`,n.jsx(e.p,{children:`이 프로세스는 구성 요소를 단계적으로 추상화하여 목적에 맞게 사용할 수 있게 하는 것이 목적입니다. 디자인 시스템을 사용하다보면 시간이 지날 수록 유지보수하기 어려워지는 것이 문제입니다.
그 이유는 구성 요소의 용도, 사용 방식 등이 분류되지 않고 명확하지 않은 상황에서 서로 다른 목적으로 사용하기 때문에 발생한다고 생각하기 때문입니다. 이 프로세스는 특정 서비스를 염두해 두고 만든 것은 아니지만 프로세스를 명확하게 만들어 맥락을 유지하고 구조화된 구성 요소를 통해 사용 목적을 명확히 한다면 누가 사용하든 모호한 상황이 벌어지지 않을 거라는 생각이 들었습니다.`}),`
`,n.jsx(e.h2,{id:"etc",children:"ETC"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:["디자인 토큰은 ",n.jsx(e.strong,{children:"generate-design-token"})," 라이브러리를 기반으로 만들어집니다. 자세한 내용은 이 ",n.jsx(e.a,{href:"https://ethan-heo.github.io/generate-design-token/",rel:"nofollow",children:"링크"}),"를 통해 확인하세요."]}),`
`]})]})}function u(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(r,{...i})}):r(i)}export{u as default};
