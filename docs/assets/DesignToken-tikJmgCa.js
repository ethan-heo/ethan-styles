import{r as f}from"./index-V85efKSV.js";import{useMDXComponents as p}from"./index-NsTgK0Gw.js";import{M as j}from"./index-C8DcBMBW.js";import"./iframe-DrzcXnA0.js";import"../sb-preview/runtime.js";import"./index-Bi5bZrvs.js";import"./index-B_J8iUie.js";import"./index-BdyFT-FI.js";import"./index-DrFu-skq.js";var h={exports:{}},o={};/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=f,x=60103;o.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;x=d("react.element"),o.Fragment=d("react.fragment")}var g=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function m(e,t,l){var r,i={},s=null,c=null;l!==void 0&&(s=""+l),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)y.call(t,r)&&!_.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:x,type:e,key:s,ref:c,props:i,_owner:g.current}}o.jsx=m;o.jsxs=m;h.exports=o;var n=h.exports;function a(e){const t={code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",...p(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(j,{title:"디자인 토큰 가이드"}),`
`,n.jsx(t.h2,{id:"소개",children:"소개"}),`
`,n.jsx(t.p,{children:"Ethan-ui의 디자인 토큰은 여러 프로젝트에서 쉽게 토큰을 구성하고 재사용가능한 UI를 사용할 수 있도록하기 위한 디자인 토큰 시스템입니다."}),`
`,n.jsx(t.h2,{id:"종류와-역할",children:"종류와 역할"}),`
`,n.jsx(t.p,{children:"디자인 토큰의 구성은 아래와 같습니다."}),`
`,n.jsx(t.h3,{id:"글로벌-토큰",children:"글로벌 토큰"}),`
`,n.jsx(t.p,{children:"글로벌 토큰은 확장가능한 요소중 가장 낮은 추상화단계의 토큰입니다. 이 토큰은 가장 낮은 단계이니 만큼 네이밍을 정의할 때 특정 목적이나, 형태를 나타내지 않는 이름으로 정의합니다."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-json",children:`{
	"color": {
		"red": {
			"$type": "color",
			"$value": "#ff0000"
		}
	},
	"font-weight": {
		"100": {
			"$type": "fontWeight",
			"$value": "100"
		}
	},
	"font-size": {
		"4x": {
			"1": {
				"$type": "dimension",
				"$value": "8px"
			}
		}
	}
}
`})}),`
`,n.jsxs(t.p,{children:["색상.빨강, 폰트",n.jsx(t.em,{children:"가중치.100, 폰트"}),"사이즈.배율.숫자 등으로 어떠한 의도가 담기지 않은 명확한 디자인 속성으로 네이밍을 지정합니다."]}),`
`,n.jsx(t.p,{children:"그리고 글로벌 토큰을 사용하여 테마 토큰을 정의할 수 있습니다."}),`
`,n.jsx(t.h3,{id:"테마-토큰",children:"테마 토큰"}),`
`,n.jsx(t.p,{children:"테마 토큰은 light, dark 테마와 같은 디자인 속성들을 정의하기 위한 단계입니다. 이 토큰은 글로벌 토큰을 활용하여 구성하며 네이밍을 정의할 때 구체화된 사용 목적을 기반으로 정의합니다."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-json",children:`{
	"color": {
		"primary": {
			"$type": "color",
			"$value": "{color.red}"
		}
	},
	"text": {
		"large": {
			"$type": "string",
			"$value": "normal {font-size.4x.4}/{line-height.140} {font-family.default}"
		},
		"medium": {
			"$type": "string",
			"$value": "normal {font-size.4x.3}/{line-height.120} {font-family.default}"
		}
	}
}
`})}),`
`,n.jsx(t.p,{children:"색상.primary는 브랜드의 주요 색상을 의미하며 text.large, text.medium은 텍스트의 형태를 구체화하여 정의합니다."}),`
`,n.jsx(t.h3,{id:"디자인-시스템-토큰",children:"디자인 시스템 토큰"}),`
`,n.jsx(t.p,{children:"디자인 시스템 토큰은 재사용가능한 UI 스타일을 구성합니다. 글로벌, 테마 토큰과 달리 네이밍은 css 클래스를 작성하는 방식으로 정의할 예정입니다. 구체적인 내용은 추후 업데이트 예정."}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-css",children:`.button-primary-large {
	background-color: var(--color-primary);
	font: var(--text-large);
}
`})}),`
`,n.jsx(t.h2,{id:"사용법",children:"사용법"}),`
`,n.jsx(t.p,{children:"토큰의 사용법은 generateToken 모듈을 실행하여 JSON으로 정의된 토큰을 css 파일로 변환해줍니다."}),`
`,n.jsx(t.h3,{id:"1-토큰-구성",children:"1. 토큰 구성"}),`
`,n.jsx(t.h3,{id:"2-generatetoken",children:"2. generateToken"}),`
`,n.jsx(t.h2,{id:"faq",children:"FAQ"}),`
`,n.jsx(t.h3,{id:"토큰-객체와-토큰-구성-객체",children:"토큰 객체와 토큰 구성 객체"}),`
`,n.jsx(t.h3,{id:"토큰-메타데이터-정의-방법",children:"토큰 메타데이터 정의 방법"})]})}function w(e={}){const{wrapper:t}={...p(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a(e)}export{w as default};
