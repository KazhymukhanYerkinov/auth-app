(this.webpackJsonpauth=this.webpackJsonpauth||[]).push([[0],{190:function(e,s,t){},191:function(e,s,t){"use strict";t.r(s);var c=t(0),n=t.n(c),a=t(33),i=t.n(a),o=t(82),r=t(81),l=t(3),j=t(18),d=t(26),b=t.n(d),u=t(1),m=function(e){var s=e.onCloseModal,t=e.isOpen,c=b()("modal",{open:t});return Object(u.jsx)("div",{className:c,children:Object(u.jsxs)("div",{className:"modal__inner",children:[Object(u.jsx)("div",{className:"modal__desc",children:" \u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438? "}),Object(u.jsxs)("div",{className:"modal__footer",children:[Object(u.jsx)("button",{className:"button button__cancel",onClick:s,children:" \u041d\u0435\u0442 "}),Object(u.jsx)("button",{className:"button button__ok",children:" \u0414\u0430 "})]})]})})},h=function(){var e=n.a.useState(!1),s=Object(j.a)(e,2),t=s[0],c=s[1];return Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("div",{className:"main__inner",children:[Object(u.jsx)("div",{className:"main__title",children:" Welcome to Main Page "}),Object(u.jsx)("button",{className:"button button__logout",onClick:function(){c(!0)},children:" logout "}),Object(u.jsx)(m,{onCloseModal:function(){c(!1)},isOpen:t})]})})},x=t(21),O=t(38),_=O.a().shape({login:O.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(100,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),password:O.b().min(2,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 2 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").max(100,"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432").required("\u041f\u043e\u043b\u0435, \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f")}),p=function(){return Object(u.jsx)("div",{className:"auth",children:Object(u.jsxs)("div",{className:"auth__inner",children:[Object(u.jsx)("div",{className:"auth__header",children:"\u041b\u043e\u0433\u0438\u043d"}),Object(u.jsx)(x.c,{initialValues:{login:"",password:""},onSubmit:function(e){console.log(e.login,e.password)},validationSchema:_,children:function(e){var s=e.isSubmitting,t=e.errors,c=e.touched;return Object(u.jsxs)(x.b,{children:[Object(u.jsx)(x.a,{name:"login",className:b()("input",{"input--error":t.login&&c.login}),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 email \u0438\u043b\u0438 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),t.login&&c.login&&Object(u.jsxs)("span",{className:"auth__error",children:[" ",t.login," "]}),Object(u.jsx)(x.a,{name:"password",className:b()("input",{"input--error":t.password&&c.password}),placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"}),t.password&&c.password&&Object(u.jsxs)("span",{className:"auth__error",children:[" ",t.password," "]}),Object(u.jsxs)("div",{className:"auth__save-me",children:[Object(u.jsx)(x.a,{id:"save_me",className:"checkbox",type:"checkbox",name:"save_me"}),Object(u.jsx)("label",{htmlFor:"save_me",className:"checkbox__text",children:" \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f "})]}),Object(u.jsx)("button",{className:"button button__submit",disabled:s,children:" \u0412\u043e\u0439\u0442\u0438 "})]})}})]})})},N=t(80),v=t(39),g=Object(v.b)({}),f=Object(v.c)(g,Object(v.a)(N.a)),w=function(){return Object(u.jsx)(r.a,{children:Object(u.jsx)(o.a,{store:f,children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(u.jsx)(h,{})}}),Object(u.jsx)(l.a,{exact:!0,path:"/login",render:function(){return Object(u.jsx)(p,{})}})]})})})};t(190);i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.68dc7bcb.chunk.js.map