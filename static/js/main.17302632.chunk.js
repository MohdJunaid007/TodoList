(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(18),o=n.n(s),l=(n(25),n(11)),r=n(20),i=(n(26),n(8)),d=n(0),b=function(e){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})})]})})]})})})},j=function(e){var t=e.todo,n=e.onDelete;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("h4",{children:[" ",t.title]}),Object(d.jsx)("p",{children:t.desc}),Object(d.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){return n(t)},children:"Delete"})]})},u=function(e){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Todos List"}),0===e.todos.length?Object(d.jsx)("h2",{children:"No todos to display"}):"",e.todos.map((function(t){return Object(d.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},h=function(){return Object(d.jsx)("div",{claaName:"bg-dark text-light ",children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodosList.com "})})},O=function(){return Object(d.jsxs)("div",{children:["This is about",Object(d.jsx)("p",{children:"lorem3aaf j ff as fsdhf hbanaunda  njg jw as f nfjndkadmf unfuwsgbs gvsiwfiwefwff"})]})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],j=i[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h3",{children:"Add a Todo"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s&&b?(t(s,b),o(""),j("")):alert("title or description cannot be blank")},children:[Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlfor:"title",className:"form-label",children:"Todo Title"}),Object(d.jsx)("input",{type:"text",value:s,onChange:function(e){return o(e.target.value)},class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(d.jsxs)("div",{class:"mb-3",children:[Object(d.jsx)("label",{htmlfor:"desc",className:"form-label",children:"Todo Description"}),Object(d.jsx)("input",{type:"text",value:b,onChange:function(e){return j(e.target.value)},class:"form-control",id:"exampleInputPassword1"})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-success btn-sm",children:"Add Todo"})]})]})},x=n(2);var f=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("delete",e),j(o.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(o))},n=function(e,t){console.log("i am adding this todo",e,t);var n={sno:0==o.length?1:o[o.length-1].sno+1,title:e,desc:t};j([].concat(Object(r.a)(o),[n])),console.log(n)},c=Object(a.useState)([e]),s=Object(l.a)(c,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(o))}),[o]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{children:[Object(d.jsx)(b,{title:"MyTodosList"}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{addTodo:n}),Object(d.jsx)(u,{todos:o,onDelete:t})]})}}),Object(d.jsx)(x.a,{exact:!0,path:"/about",children:Object(d.jsx)(O,{})})]}),Object(d.jsx)(h,{})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.17302632.chunk.js.map