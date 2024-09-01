import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as i}from"./index-CcnH5Kt0.js";import{ae as l}from"./index-7B0nXo4d.js";import"./index-RYns6xqu.js";import"./iframe-m1gt2IFm.js";import"../sb-preview/runtime.js";import"./index-D16Yfzz8.js";import"./index-D-8MO0q_.js";import"./index-B23dhaOI.js";import"./index-DrFu-skq.js";function s(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(l,{title:"Introduction/글로벌 토큰"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsxs(n.p,{children:["글로벌 토큰을 구성하고 있는 스타일 속성에 대해 설명합니다. 글로벌 토큰에 대한 설명은 ",t.jsx(n.a,{href:"/docs/introduction-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%86%A0%ED%81%B0-%EA%B0%80%EC%9D%B4%EB%93%9C--docs#%EA%B8%80%EB%A1%9C%EB%B2%8C-%ED%86%A0%ED%81%B0",children:"여기서"})," 확인할 수 있습니다."]}),`
`]}),`
`,t.jsx(n.h2,{id:"color",children:"color"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"프로젝트에서 사용될 기본 색상으로 구성합니다."}),`
`]}),`
`,t.jsx(n.p,{children:"빨강, 초록, 파랑 등 기본 색상에서 채도를 10% 단위로 구분하여 총 10가지 색상으로 나누어 사용합니다."}),`
`,t.jsx(n.h3,{id:"네이밍-규칙",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"color.[COLOR_NAME].[SATURATION_NUMBER]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"COLOR_NAME"}),": 색상 이름"]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"SATURATION_NUMBER"}),": 채도 단위를 나타내며 숫자가 작을 수록 크며 클 수록 낮아진다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"color": {
		"red": {
			"1": {
				"$type": "color",
				"$value": "#ff0000"
			}
		}
	}
}
`})}),`
`,t.jsx(n.h2,{id:"font-size",children:"font-size"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"글자 크기를 정의합니다."}),`
`]}),`
`,t.jsx(n.p,{children:"rem 단위로 값을 정의하여 일관된 비율의 글자 크기를 유지하게 하며 여러 형태의 디자인에서 쉽게 변경할 수 있도록 합니다."}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-1",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"font-size.[NUMBER]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"NUMBER"}),": 1 ~ 20 까지의 숫자로 나타내며 오름차순으로 값의 크기가 증가한다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"font-size": {
		"1": {
			"$type": "dimension",
			"$value": "0.625rem"
		},
		"2": {
			"$type": "dimension",
			"$value": "0.75rem"
		},
		...
		"20": {
			"$type": "dimension",
			"$value": "3rem"
		},
	}
}
`})}),`
`,t.jsx(n.h2,{id:"font-weight",children:"font-weight"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"글자 굵기를 정의합니다."}),`
`]}),`
`,t.jsxs(n.p,{children:["글자 굵기는 ",t.jsx(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/CSS/font-weight#%EC%83%81%EB%8C%80%EC%A0%81_%EA%B0%80%EC%A4%91%EC%B9%98%EC%9D%98_%EC%9D%98%EB%AF%B8",rel:"nofollow",children:"MDN"}),"에 정의된 속성값을 사용합니다."]}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-2",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"font-weight.[WEIGHT]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"WEIGHT"}),": 가중치를 나타내며 100 단위로 100 ~ 1000 까지 나타냅니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"font-weight": {
		"100": {
			"$type": "number",
			"$value": "100"
		},
		"200": {
			"$type": "number",
			"$value": "200"
		},
		...
		"1000": {
			"$type": "number",
			"$value": "1000"
		},
	}
}
`})}),`
`,t.jsx(n.h2,{id:"line-height",children:"line-height"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"텍스트 라인 사이 거리를 정의합니다."}),`
`]}),`
`,t.jsx(n.p,{children:"거리는 배율을 사용한 상대적인 값을 사용합니다."}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-3",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"line-height.[NUMBER]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"NUMBER"}),": 1 ~ 20 까지의 숫자를 나타내며 오름차순으로 0.2 단위로 배율이 증가합니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"line-height": {
		"1": {
			"$type": "number",
			"$value": "1.0"
		},
		"2": {
			"$type": "number",
			"$value": "1.2"
		},
		...
		"20": {
			"$type": "number",
			"$value": "3.0"
		},
	}
}
`})}),`
`,t.jsx(n.h2,{id:"font-family",children:"font-family"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"폰트 글씨체를 정의합니다."}),`
`]}),`
`,t.jsx(n.p,{children:"기본값을 미리 정의하여 글씨체가 추가될 때 후순위로 기본값을 설정합니다."}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-4",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"font-family.[FONT_NAME]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"FONT_NAME"}),": 추가할 글씨체 이름을 나타냅니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"font-family": {
		"default": {
			"$type": "string",
			"$value": "sans-serif, serif"
		},
		"roboto": {
			"$type": "string",
			"$value": "Roboto, {font-family.default}"
		}
	}
}
`})}),`
`,t.jsx(n.h2,{id:"spacing",children:"spacing"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"여백의 크기를 정의합니다."}),`
`]}),`
`,t.jsx(n.p,{children:"여백의 크기는 px 단위로 나타냅니다."}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-5",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"spacing.[NUMBER]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"NUMBER"}),": 1 ~ 20 까지의 숫자로 나타내며 오름차순으로 2px 단위로 증가합니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"spacing": {
		"1": {
			"$type": "dimension",
			"$value": "8px"
		},
		"2": {
			"$type": "dimension",
			"$value": "12px"
		},
		...
		"20": {
			"$type": "dimension",
			"$value": "48px"
		}
	}
}
`})}),`
`,t.jsx(n.h2,{id:"box-shadow",children:"box-shadow"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"그림자 길이와 방향을 정의합니다."}),`
`]}),`
`,t.jsx(n.p,{children:"그림자의 offset-x, offset-y, blur, spread 값을 정의합니다."}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-6",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"box-shadow.[BOX_SHADOW_PROP].[NUMBER]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"BOX_SHADOW_PROP"}),": offset-x, offset-y, blur-radius, spread-radius 속성값을 나타냅니다."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"NUMBER"}),": 1 ~ 10 까지의 숫자로 나타내며 오름차순으로 2px 단위로 증가합니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"box-shadow": {
		"offset-x": {
			"1": {
				"$type": "dimension",
				"$value": "2px"
			}
		},
		"offset-y": {
			"1": {
				"$type": "dimension",
				"$value": "2px"
			}
		},
		"blur-radius": {
			"1": {
				"$type": "dimension",
				"$value": "2px"
			}
		},
		"spread-radius": {
			"1": {
				"$type": "dimension",
				"$value": "2px"
			}
		}
	}
}
`})}),`
`,t.jsx(n.h2,{id:"border-radius",children:"border-radius"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"테두리 곡선의 크기를 정의합니다."}),`
`]}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-7",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"border-radius.[NUMBER | full]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"NUMBER"}),": 1 ~ 20 까지의 숫자로 나타내며 오름차순으로 2px 단위로 증가합니다."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"full"}),": 곡선의 최대 크기를 나타냅니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"border-radius": {
		"1": {
			"$type": "dimension",
			"$value": "2px"
		},
		"2": {
			"$type": "dimension",
			"$value": "4px"
		},
		...
		"full": {
			"$type": "dimension",
			"$value": "100%"
		},
	}
}
`})}),`
`,t.jsx(n.h2,{id:"border-style",children:"border-style"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"보더 스타일을 정의합니다."}),`
`]}),`
`,t.jsxs(n.p,{children:["보더 스타일은 ",t.jsx(n.a,{href:"https://developer.mozilla.org/ko/docs/Web/CSS/border-style#%EA%B0%92",rel:"nofollow",children:"MDN"}),"을 참고하여 속성을 정의합니다."]}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-8",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"border-style.[BORDER_STYLE]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"BORDER_STYLE"}),": 보더 스타일 속성을 나타냅니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"border-style": {
		"solid": {
			"$type": "string",
			"$value": "solid"
		}
	}
}
`})}),`
`,t.jsx(n.h2,{id:"border-width",children:"border-width"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"보더의 굵기를 정의합니다."}),`
`]}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-9",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"border-width.[NUMBER]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"NUMBER"}),": 1 ~ 10 까지의 숫자로 나타내며 오름차순으로 1px 단위로 증가합니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"border-width": {
		"1": {
			"$type": "dimension",
			"$value": "1px"
		},
		"2": {
			"$type": "dimension",
			"$value": "2px"
		},
		...
		"10": {
			"$type": "dimension",
			"$value": "10px"
		},
	}
}
`})}),`
`,t.jsx(n.h2,{id:"breakpoint",children:"breakpoint"}),`
`,t.jsxs(n.blockquote,{children:[`
`,t.jsx(n.p,{children:"반응형 디자인을 위한 breakpoint 너비를 정의합니다."}),`
`]}),`
`,t.jsxs(n.p,{children:["너비 기준은 ",t.jsx(n.a,{href:"https://gs.statcounter.com/screen-resolution-stats",rel:"nofollow",children:"StatCounter Global Stats"})," 사이트를 참고하여 정의합니다."]}),`
`,t.jsx(n.h3,{id:"네이밍-규칙-10",children:"네이밍 규칙"}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"breakpoint.[PLATFORM].[min, max]"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"PLATFORM"}),": 플랫폼 종류를 나타내며 mobile-portrait, mobile-landscape, tablet-portrait, tablet-landscape, desktop 으로 나타냅니다."]}),`
`,t.jsxs(n.li,{children:[t.jsx(n.strong,{children:"min, max"}),": 너비의 최소, 최대 값을 나타내며 최소 하나의 값을 정의해야 합니다."]}),`
`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-json",children:`{
	"responsive": {
		"mobile-portrait": {
			"max": {
				"$type": "dimension",
				"$value": "428px"
			}
		},
		"mobile-landscape": {
			"min": {
				"$type": "dimension",
				"$value": "429px"
			},
			"max": {
				"$type": "dimension",
				"$value": "768px"
			}
		},
		"tablet-portrait": {
			"min": {
				"$type": "dimension",
				"$value": "769px"
			},
			"max": {
				"$type": "dimension",
				"$value": "1024px"
			}
		},
		"tablet-landscape": {
			"min": {
				"$type": "dimension",
				"$value": "1025px"
			},
			"max": {
				"$type": "dimension",
				"$value": "1280px"
			}
		},
		"desktop": {
			"min": {
				"$type": "dimension",
				"$value": "1281px"
			}
		}
	}
}
`})})]})}function m(e={}){const{wrapper:n}={...i(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(s,{...e})}):s(e)}export{m as default};
