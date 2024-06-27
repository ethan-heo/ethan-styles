import{j as n}from"./jsx-runtime-QvZ8i92b.js";import{useMDXComponents as e}from"./index-FeUjBnvO.js";import{M as s}from"./index-wohmNaCS.js";import"./index-uubelm5h.js";import"./iframe-IJY8VKpB.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-dOsnOu12.js";import"./index-DrFu-skq.js";function r(o){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"글로벌 토큰"}),`
`,n.jsxs(t.blockquote,{children:[`
`,n.jsxs(t.p,{children:["글로벌 토큰을 구성하고 있는 스타일 속성에 대해 설명합니다. 글로벌 토큰에 대한 설명은 ",n.jsx(t.a,{href:"/docs/%EB%94%94%EC%9E%90%EC%9D%B8-%ED%86%A0%ED%81%B0-%EA%B0%80%EC%9D%B4%EB%93%9C--docs#%EA%B8%80%EB%A1%9C%EB%B2%8C-%ED%86%A0%ED%81%B0",children:"여기서"})," 확인할 수 있습니다."]}),`
`]}),`
`,n.jsx(t.h2,{id:"color",children:"color"}),`
`,n.jsx(t.p,{children:"color 속성은 프로젝트에서 사용될 기본 색상으로 구성합니다. 빨강, 초록, 파랑 등 기본 색상에서 채도를 10% 단위로 구분하여 총 10가지 색상으로 나누어 사용합니다."}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["네이밍 규칙",`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:["color.[COLOR_NAME].[SATURATION_NUMBER]",`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"COLOR_NAME"}),": 색상 이름"]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"SATURATION_NUMBER"}),": 채도 단위를 나타내며 숫자가 작을 수록 크며 클 수록 낮아진다."]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-json",children:`{
	"color": {
		"red": {
			"1": {
				"$type": "color",
				"$value": "#ff0000"
			}
		}
	}
}
`})})]})}function u(o={}){const{wrapper:t}={...e(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(r,{...o})}):r(o)}export{u as default};
