(window["webpackJsonpadmin-area"]=window["webpackJsonpadmin-area"]||[]).push([[0],{137:function(e,t,a){},189:function(e,t,a){e.exports=a(388)},337:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=(a(137),a(38)),i=a(101),s=a(53),u=(a(194),a(390)),m=a(391),d=a(133),p=a(7),f=a(24),E=a.n(f),b=a(44),h=a(389),w=a(393),g=a(392),y=a(395),v=a(45),I=a.n(v),O=a(28),x=a(394),S=a(396),k=a(25);var C=O.a.create({name:"AddClass"})((function(e){var t=e.form,a=e.handle_submit,n=t.getFieldDecorator;return r.a.createElement(O.a,{layout:"vertical",className:"zform ant-advanced-search-form",onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e||a(t)}))}},r.a.createElement(O.a.Item,{label:"Classe"},n("class",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(O.a.Item,{label:"Sezione"},n("section",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(O.a.Item,{label:"Descrizione"},n("description",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(O.a.Item,{label:"Numero di studenti"},n("student_number",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(S.a,{placeholder:"1",min:1}))),r.a.createElement(k.a,{type:"primary",htmlType:"submit"},"Submit"))}));var j=O.a.create({name:"EditStudent"})((function(e){var t=e.form,a=e.handle_submit,n=e.data,c=t.getFieldDecorator;return r.a.createElement(O.a,{layout:"vertical",className:"zform ant-advanced-search-form",onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e||a(t)}))}},r.a.createElement(O.a.Item,{label:"Username"},c("username",{initialValue:n.username,rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(O.a.Item,{label:"Password"},c("password",{initialValue:n.password,rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(O.a.Item,{label:"Nome"},c("name",{initialValue:n.name,rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(O.a.Item,{label:"Cognome"},c("surname",{initialValue:n.surname,rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(x.a,{placeholder:"placeholder"}))),r.a.createElement(k.a,{type:"primary",htmlType:"submit"},"Submit"))}));a(337);function N(){var e=[{title:"Username",dataIndex:"username",key:"username"},{title:"Password",dataIndex:"password",key:"password"},{title:"Nome",dataIndex:"name",key:"name"},{title:"Cognome",dataIndex:"surname",key:"surname"},{title:"Action",key:"action",render:function(e,t,a){return r.a.createElement("div",null,r.a.createElement(h.a,{title:"Sure to ?",onConfirm:function(){return K(t)}},r.a.createElement("a",{href:"/#"},"Edit ")),"|",r.a.createElement(h.a,{title:"Sure to ?",onConfirm:function(){return L(t)}},r.a.createElement("a",{href:"/#"}," Delete")))}}],t=[{title:"Titolo",dataIndex:"name",key:"name"},{title:"Descrizione",dataIndex:"description",key:"description"},{title:"Username",key:"ownerId",render:function(e,t,a){var n=o.students.find((function(e){return e.userId===t.ownerId}));return"".concat(n.name," ").concat(n.surname," (").concat(n.username,")")}},{title:"Action",key:"action",render:function(e,t,a){return r.a.createElement("div",null,r.a.createElement("a",{href:"/#",onClick:function(){return window.open("".concat(window.API_ENDPOINT.STORYLET_VIEWER,"/").concat(t.id),"_blank")}},"View")," |",r.a.createElement("a",{href:"/#",onClick:function(){return U(t)}}," ",1===parseInt(t.status)?"Unpublish":"Publish")," |",r.a.createElement(h.a,{title:"Sure to ?",onConfirm:function(){return R(t)}},r.a.createElement("a",{href:"/#"}," Delete")))}}],a=Object(n.useState)(null),c=Object(l.a)(a,2),o=c[0],i=c[1],s=Object(n.useState)(null),u=Object(l.a)(s,2),m=u[0],d=u[1],f=Object(n.useState)(null),v=Object(l.a)(f,2),O=v[0],x=v[1],S=Object(n.useState)(!1),k=Object(l.a)(S,2),N=k[0],P=k[1],T=Object(n.useState)(!1),D=Object(l.a)(T,2),_=D[0],A=D[1],U=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,I.a.put("".concat(window.API_ENDPOINT.CRUD_STORYLET,"/").concat(t.id),{status:1===parseInt(t.status)?0:1});case 3:if("OK"!==e.sent.data.status){e.next=11;break}return e.next=7,B();case 7:a=e.sent,(n=Object.assign({},a[o.idx])).idx=o.idx,i(n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,I.a.delete("".concat(window.API_ENDPOINT.CRUD_STORYLET,"/").concat(t.id));case 3:"OK"===e.sent.data.status&&B();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e){console.log("show student detail"),console.log(e),x(Object.assign({},e)),A(!0)},L=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,I.a.delete("".concat(window.API_ENDPOINT.CRUD_STUDENT,"/").concat(t.id));case 3:"OK"===e.sent.data.status&&B();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,I.a.post(window.API_ENDPOINT.CRUD_CLASS,{class:t.class,section:t.section,description:t.description,size:t.student_number});case 3:"OK"===e.sent.data.status&&(P(!1),B());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,I.a.put("".concat(window.API_ENDPOINT.CRUD_STUDENT,"/").concat(O.id),{username:t.username,password:t.password,name:t.name,surname:t.surname});case 3:if("OK"!==e.sent.data.status){e.next=13;break}return A(!1),e.next=8,B();case 8:a=e.sent,(n=Object.assign({},a[o.idx])).idx=o.idx,i(n),x(null);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,I.a.delete("".concat(window.API_ENDPOINT.CRUD_CLASS,"/").concat(t));case 3:"OK"===e.sent.data.status&&console.log("deleted");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){B()}),[]);var B=function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(window.API_ENDPOINT.GET_CLASS);case 2:return t=e.sent,d(t.data.data),e.abrupt("return",t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Le tue classi"),r.a.createElement("div",{className:"class-container"},m&&m.map((function(e,t){return r.a.createElement("div",{onClick:function(e){return function(e){m[e].idx=e,i(Object.assign({},m[e]))}(t)},key:"class_".concat(t),className:"class"},e.class," ",e.section," - ",e.description,r.a.createElement("button",{onClick:function(t){return F(e.id)}},"Delete"))}))),o?r.a.createElement("div",{className:"class-detail"},r.a.createElement(w.a,{tabPosition:"top",animated:!1},r.a.createElement(w.a.TabPane,{tab:r.a.createElement("span",null,r.a.createElement(p.a,{type:"team"}),"Studenti"),key:"1"},r.a.createElement(g.a,{style:{backgroundColor:"#ffffff",padding:"16px"},dataSource:o.students,rowKey:"id",columns:e})),r.a.createElement(w.a.TabPane,{tab:r.a.createElement("span",null,r.a.createElement(p.a,{type:"highlight"}),"Storie"),key:"2"},r.a.createElement(g.a,{style:{backgroundColor:"#ffffff",padding:"16px"},dataSource:o.stories,rowKey:"id",columns:t})))):null,r.a.createElement(p.a,{theme:"filled",style:{fontSize:"64px",position:"absolute",bottom:"64px",right:"64px",cursor:"pointer"},type:"plus-circle",onClick:function(){return P(!0)}}),r.a.createElement(y.a,{title:"Aggiungi classe",visible:N,onCancel:function(){return P(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}}},r.a.createElement(C,{handle_submit:z})),r.a.createElement(y.a,{title:"Info Studente",visible:_,onCancel:function(){return A(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}}},O?r.a.createElement(j,{handle_submit:q,data:O}):null))}var P=a(134);function T(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(l.a)(o,2),s=i[0],u=i[1];Object(n.useEffect)((function(){m()}),[]);var m=function(){var e=Object(b.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get(window.API_ENDPOINT.GET_CLASS);case 2:t=e.sent,a=[],n=[],t.data.data.forEach((function(e){n=[].concat(Object(P.a)(n),Object(P.a)(e.students)),e.stories.forEach((function(e){1===parseInt(e.status)&&a.push(e)}))})),u(n),c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=[{title:"Titolo",dataIndex:"name",key:"name"},{title:"Descrizione",dataIndex:"description",key:"description"},{title:"Username",key:"ownerId",render:function(e,t,a){var n=s.find((function(e){return e.userId===t.ownerId}));return"".concat(n.name," ").concat(n.surname," (").concat(n.username,")")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Storie pubblicate"),r.a.createElement(g.a,{style:{backgroundColor:"#ffffff",padding:"16px"},dataSource:a,columns:d,rowKey:"id"}))}var D=u.a.Content,_=u.a.Footer,A=u.a.Sider;var U=function(){var e="Andrea",t="Petta",a="UNISA ISISLab",c=Object(n.useState)(!1),o=Object(l.a)(c,2),f=o[0],E=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{basename:"".concat(window.API_ENDPOINT.SITE_URL,"admin-area/")},r.a.createElement(u.a,{style:{minHeight:"100vh"}},r.a.createElement(A,{collapsible:!0,collapsed:f,onCollapse:function(e){E(e)}},r.a.createElement("div",{style:{width:"100%",textAlign:"center",padding:"16px"}},r.a.createElement("div",{style:{color:"#ffffff",marginBottom:"8px"}},"Ciao, ","".concat(e," ").concat(t)),r.a.createElement(m.a,{size:64,icon:"user"})),r.a.createElement(d.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(d.a.Item,{key:"1"},r.a.createElement(p.a,{type:"team"}),r.a.createElement("span",null,"Classi"),r.a.createElement(i.b,{to:"/"})),r.a.createElement(d.a.Item,{key:"2"},r.a.createElement(p.a,{type:"highlight"}),r.a.createElement("span",null,"Storie pubblicate"),r.a.createElement(i.b,{to:"/stories"})))),r.a.createElement(u.a,null,r.a.createElement(D,{style:{margin:"16px"}},r.a.createElement(s.a,{exact:!0,path:"/",component:N}),r.a.createElement(s.a,{path:"/stories",component:T})),r.a.createElement(_,{style:{textAlign:"center"}},"Storylet Admin for ",a)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[189,1,2]]]);
//# sourceMappingURL=main.b614e0df.chunk.js.map