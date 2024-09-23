import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as c,u as p,T as f,F as r,L as o,I as s,B as h}from"./index-DyEaj4ij.js";import"./index-RYns6xqu.js";const g={title:"Design System/Form",component:c,parameters:{layout:"centered",docs:{toc:{contentsSelector:".sbdocs-content",headingSelector:"h1, h2, h3",title:"Table of Contents",disable:!1,unsafeTocbotOptions:{orderedList:!1}}}},tags:["autodocs"]},t={render:function(){var l,i;const{form:n,onSubmit:v}=p({form:{email:{id:"email",defaultValue:"",validationEvent:"blur",validate:a=>/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(a)?{valid:!0}:{valid:!1,msg:"이메일 형식이 아닙니다."}},password:{id:"password",defaultValue:"",validationEvent:"blur",validate:a=>/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(a)?{valid:!0}:{valid:!1,msg:"비밀번호가 올바르지 않습니다."}}},submitWithValidation:!0});return e.jsxs(e.Fragment,{children:[e.jsx(f,{level:2,children:"회원가입 폼"}),e.jsx(c,{onSubmit:v,children:e.jsxs(r,{vertical:!0,gap:!0,children:[e.jsxs(r,{vertical:!0,children:[e.jsx(o,{htmlFor:n.email.element.id,invalid:!((l=n.email.error)!=null&&l.valid),children:"이메일"}),e.jsx(s,{...n.email.element,placeholder:"이메일을 입력해주세요."})]}),e.jsxs(r,{vertical:!0,children:[e.jsx(o,{htmlFor:n.password.element.id,invalid:!((i=n.password.error)!=null&&i.valid),children:"비밀번호"}),e.jsx(s,{...n.password.element,placeholder:"비밀번호를 입력해주세요."})]}),e.jsx(h,{children:"가입하기"})]})})]})}};var d,m,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: function SignupForm() {
    const {
      form,
      onSubmit
    } = useFormState({
      form: {
        email: {
          id: "email",
          defaultValue: "",
          validationEvent: "blur",
          validate: value => {
            if (!/^[\\w-\\\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(value)) {
              return {
                valid: false,
                msg: "이메일 형식이 아닙니다."
              };
            }
            return {
              valid: true
            };
          }
        },
        password: {
          id: "password",
          defaultValue: "",
          validationEvent: "blur",
          validate: value => {
            if (!/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(value)) {
              return {
                valid: false,
                msg: "비밀번호가 올바르지 않습니다."
              };
            }
            return {
              valid: true
            };
          }
        }
      },
      submitWithValidation: true
    });
    return <>
                <Title level={2}>회원가입 폼</Title>
                <Form onSubmit={onSubmit}>
                    <Flex vertical gap>
                        <Flex vertical>
                            <Label htmlFor={form.email.element.id} invalid={!form.email.error?.valid}>
                                이메일
                            </Label>
                            <Input {...form.email.element} placeholder="이메일을 입력해주세요." />
                        </Flex>
                        <Flex vertical>
                            <Label htmlFor={form.password.element.id} invalid={!form.password.error?.valid}>
                                비밀번호
                            </Label>
                            <Input {...form.password.element} placeholder="비밀번호를 입력해주세요." />
                        </Flex>
                        <Button>가입하기</Button>
                    </Flex>
                </Form>
            </>;
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,g as default};
