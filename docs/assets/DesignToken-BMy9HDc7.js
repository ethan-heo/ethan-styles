import{r as h}from"./index-uubelm5h.js";import{useMDXComponents as x}from"./index-FeUjBnvO.js";import{M as u}from"./index-C07HrTzv.js";import"./iframe-CoqJp3dp.js";import"../sb-preview/runtime.js";import"./index-Dei0BBcc.js";import"./index-B_J8iUie.js";import"./index-dOsnOu12.js";import"./index-DrFu-skq.js";var d={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j=h,a=Symbol.for("react.element"),f=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,y=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function m(r,n,l){var s,t={},i=null,c=null;l!==void 0&&(i=""+l),n.key!==void 0&&(i=""+n.key),n.ref!==void 0&&(c=n.ref);for(s in n)_.call(n,s)&&!g.hasOwnProperty(s)&&(t[s]=n[s]);if(r&&r.defaultProps)for(s in n=r.defaultProps,n)t[s]===void 0&&(t[s]=n[s]);return{$$typeof:a,type:r,key:i,ref:c,props:t,_owner:y.current}}o.Fragment=f;o.jsx=m;o.jsxs=m;d.exports=o;var e=d.exports;function p(r){const n={blockquote:"blockquote",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...x(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(u,{title:"디자인 토큰 가이드"}),`
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
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"design system styles"})," : 프로젝트에 의존된 스타일을 구성한 css 파일입니다. css variable로 변환된 theme 요소를 통해 구성합니다."]}),`
`]}),`
`]})]})}function D(r={}){const{wrapper:n}={...x(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(p,{...r})}):p(r)}export{D as default};
