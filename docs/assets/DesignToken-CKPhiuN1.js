import{r as j}from"./index-V85efKSV.js";import{useMDXComponents as m}from"./index-NsTgK0Gw.js";import{M as u}from"./index-DSUCC3Qx.js";import"./iframe-DYjcrAqJ.js";import"../sb-preview/runtime.js";import"./index-Bi5bZrvs.js";import"./index-B_J8iUie.js";import"./index-BdyFT-FI.js";import"./index-DrFu-skq.js";var x={exports:{}},r={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=j,a=60103;r.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;a=d("react.element"),r.Fragment=d("react.fragment")}var y=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f=Object.prototype.hasOwnProperty,b={key:!0,ref:!0,__self:!0,__source:!0};function p(t,n,l){var s,o={},i=null,c=null;l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(c=n.ref);for(s in n)f.call(n,s)&&!b.hasOwnProperty(s)&&(o[s]=n[s]);if(t&&t.defaultProps)for(s in n=t.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:a,type:t,key:i,ref:c,props:o,_owner:y.current}}r.jsx=p;r.jsxs=p;x.exports=r;var e=x.exports;function h(t){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...m(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"디자인 토큰 가이드"}),`
`,e.jsx(n.h2,{id:"소개",children:"소개"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"ethan-ui의 디자인 토큰은 개인 프로젝트에서 사용할 디자인 요소들을 재사용하기 위한 목적으로 만들어졌습니다. 이 프로젝트의 목표는 디자인 시스템을 만드는 것이지만 디자인 토큰은 이 시스템을 구성하는 중요한 역할을 하고 있습니다."}),`
`]}),`
`,e.jsx(n.h2,{id:"구성-요소",children:"구성 요소"}),`
`,e.jsxs(n.p,{children:[`디자인 토큰은 아래와 같은 흐름으로 진행됩니다.
`,e.jsx(n.img,{src:"./assets/ethan-ui-design-token-flow.webp",alt:"ethan-ui의 디자인 토큰 흐름"})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"global 토큰"})," : 가장 작은 추상화단위 요소들의 집합입니다."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"theme 토큰"})," : 구체적인 형태의 디자인 속성들의 집합입니다."]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"component styles"})," : UI에 사용되는 스타일을 구성한 css 파일입니다."]}),`
`]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.button.primary {
	/* ... */
}
.button.secondary {
	/* ... */
}
h1.title {
	/* ... */
}
h2.title {
	/* ... */
}
h3.title {
	/* ... */
}
/* ... */
`})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"design system styles"})," : [구상중] 프로젝트에 의존된 스타일을 구성한 css 파일입니다. css variable로 변환된 theme 요소를 통해 구성합니다."]}),`
`]}),`
`,e.jsx(n.h2,{id:"네이밍-규칙",children:"네이밍 규칙"}),`
`,e.jsx(n.p,{children:"global, theme 토큰 / components, design system 스타일을 정의하기 위한 네이밍 규칙에 대해 설명합니다."}),`
`,e.jsx(n.h3,{id:"global-토큰",children:"Global 토큰"}),`
`,e.jsx(n.p,{children:"Global 토큰은 가장 작은 요소이며 어떠한 목적을 가지지 않습니다. 그렇기 때문에 단순 스타일 속성에 대한 정의를 통해 네이밍을 정의합니다."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"[속성명]-[category]-[subcategory]"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
	"color": {},
	"font-size": {},
	"font-weight": {},
	"border-width": {},
	"border-style": {}
	// ...
}
`})}),`
`,e.jsx(n.h3,{id:"theme-토큰",children:"Theme 토큰"}),`
`,e.jsx(n.p,{children:"Theme 토큰은 스타일의 형태를 표현합니다."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"[형태]-[category]-[subcategory]"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
	"color": {
		"primary": {},
		"secondary": {},
		"success": {}
		// ...
	},
	"text": {
		"size": {
			"large": {},
			"medium": {},
			"small": {}
		},
		"weight": {
			"bold": {},
			"medium": {},
			"small": {}
		}
		// ...
	}
	// ...
}
`})}),`
`,e.jsx(n.h3,{id:"components-스타일",children:"Components 스타일"}),`
`,e.jsx(n.p,{children:"[준비중]"}),`
`,e.jsx(n.h3,{id:"design-system-스타일",children:"Design system 스타일"}),`
`,e.jsx(n.p,{children:"[준비중]"})]})}function M(t={}){const{wrapper:n}={...m(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(h,{...t})}):h(t)}export{M as default};
