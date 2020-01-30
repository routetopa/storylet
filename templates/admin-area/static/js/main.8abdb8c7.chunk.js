(window["webpackJsonpadmin-area"]=window["webpackJsonpadmin-area"]||[]).push([[0],{138:function(e,t,a){},189:function(e,t,a){e.exports=a(388)},337:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),i=(a(138),a(38)),l=a(102),s=a(53),u=(a(194),a(390)),d=a(391),m=a(134),p=a(8),f=a(23),E=a.n(f),b=a(39),w=a(389),h=a(397),y=a(393),N=a(392),O=a(25),g=a(395),I=a(45),v=a.n(I),x=a(28),C=a(394),S=a(396);var k=x.a.create({name:"AddClass"})((function(e){var t=e.form,a=e.handle_submit,n=t.getFieldDecorator;return r.a.createElement(x.a,{layout:"vertical",className:"zform ant-advanced-search-form",onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e||a(t)}))}},r.a.createElement(x.a.Item,{label:"Classe"},n("class",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(x.a.Item,{label:"Sezione"},n("section",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(x.a.Item,{label:"Descrizione"},n("description",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(x.a.Item,{label:"Numero di studenti"},n("student_number",{rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(S.a,{placeholder:"1",min:1}))),r.a.createElement(O.a,{type:"primary",htmlType:"submit"},"Submit"))})),P=r.a.memo((function(e){var t=e.form,a=e.handle_submit,n=e.data,c=t.getFieldDecorator;return r.a.createElement(x.a,{layout:"vertical",className:"zform ant-advanced-search-form",onSubmit:function(e){e.preventDefault(),t.validateFields((function(e,t){e||a(t)}))}},r.a.createElement(x.a.Item,{label:"Username"},c("username",{initialValue:n.username,rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(x.a.Item,{label:"Password"},c("password",{initialValue:n.password,rules:[{required:!0,message:"Campo obbligatorio"}]})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(x.a.Item,{label:"Nome"},c("name",{initialValue:n.name})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(x.a.Item,{label:"Cognome"},c("surname",{initialValue:n.surname})(r.a.createElement(C.a,{placeholder:"placeholder"}))),r.a.createElement(O.a,{type:"primary",htmlType:"submit"},"Submit"))})),_=x.a.create({name:"EditStudent"})(P);a(337);function j(){var e=[{title:"Username",dataIndex:"username",key:"username"},{title:"Password",dataIndex:"password",key:"password"},{title:"Nome",dataIndex:"name",key:"name"},{title:"Cognome",dataIndex:"surname",key:"surname"},{title:"Azioni",key:"action",render:function(e,t,a){return r.a.createElement("div",null,r.a.createElement(p.a,{theme:"filled",style:{fontSize:"24px",cursor:"pointer",marginRight:"24px"},type:"edit",onClick:function(){return F(t)}}),r.a.createElement(w.a,{title:"Sure to ?",onConfirm:function(){return K(t)}},r.a.createElement(p.a,{theme:"filled",style:{fontSize:"24px",cursor:"pointer"},type:"delete"})))}}],t=[{title:"Titolo",dataIndex:"name",key:"name"},{title:"Descrizione",dataIndex:"description",key:"description"},{title:"Username",key:"ownerId",render:function(e,t,a){var n=o.students.find((function(e){return e.userId===t.ownerId}));return"".concat(n.name," ").concat(n.surname," (").concat(n.username,")")}},{title:"Action",key:"action",render:function(e,t,a){return r.a.createElement("div",null,r.a.createElement("a",{onClick:function(){return window.open("".concat(window.API_ENDPOINT.STORYLET_VIEWER,"/").concat(t.id),"_blank")}},"View")," |",r.a.createElement("a",{onClick:function(){return z(t)}}," ",1===parseInt(t.status)?"Unpublish":"Publish")," |",r.a.createElement(w.a,{title:"Sure to ?",onConfirm:function(){return W(t)}},r.a.createElement("a",null," Delete")))}}],a=Object(n.useState)(null),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(null),u=Object(i.a)(s,2),d=u[0],m=u[1],f=Object(n.useState)(null),I=Object(i.a)(f,2),x=I[0],C=I[1],S=Object(n.useState)(!1),P=Object(i.a)(S,2),j=P[0],A=P[1],T=Object(n.useState)(!1),D=Object(i.a)(T,2),U=D[0],R=D[1],z=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.put("".concat(window.API_ENDPOINT.CRUD_STORYLET,"/").concat(t.id),{status:1===parseInt(t.status)?0:1},{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 3:if("OK"!==e.sent.data.status){e.next=11;break}return e.next=7,q();case 7:a=e.sent,(n=Object.assign({},a[o.idx])).idx=o.idx,l(n);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.delete("".concat(window.API_ENDPOINT.CRUD_STORYLET,"/").concat(t.id),{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 3:"OK"===e.sent.data.status&&q();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){console.log("show student detail"),console.log(e),C(Object.assign({},e)),R(!0)},K=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.delete("".concat(window.API_ENDPOINT.CRUD_STUDENT,"/").concat(t.id),{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 3:"OK"===e.sent.data.status&&q();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.post(window.API_ENDPOINT.CRUD_CLASS,{class:t.class,section:t.section,description:t.description,size:t.student_number},{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 3:"OK"===e.sent.data.status&&(A(!1),q());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.put("".concat(window.API_ENDPOINT.CRUD_STUDENT,"/").concat(x.id),{username:t.username,password:t.password,name:t.name,surname:t.surname},{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 3:if("OK"!==(a=e.sent).data.status){e.next=13;break}return e.next=7,q();case 7:n=e.sent,(r=Object.assign({},n[o.idx])).idx=o.idx,l(r),e.next=14;break;case 13:h.a.open({message:"Errore",description:a.data.error});case 14:R(!1),C(null);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(b.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,v.a.delete("".concat(window.API_ENDPOINT.CRUD_CLASS,"/").concat(t),{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 3:"OK"===e.sent.data.status&&console.log("deleted");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){q()}),[]);var q=function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(window.API_ENDPOINT.GET_CLASS,{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 2:return t=e.sent,m(t.data.data),e.abrupt("return",t.data.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(b.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:(t=e.sent)[o.idx].idx=o.idx,l(Object.assign({},t[o.idx]));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Le tue classi"),r.a.createElement("div",{className:"class-container"},d&&d.map((function(e,t){return r.a.createElement("div",{onClick:function(e){return function(e){d[e].idx=e,l(Object.assign({},d[e]))}(t)},key:"class_".concat(t),className:"class"},e.class," ",e.section," - ",e.description,r.a.createElement(w.a,{title:"Sure to ?",onConfirm:function(t){return B(e.id)}},r.a.createElement(p.a,{theme:"filled",style:{fontSize:"24px",cursor:"pointer"},type:"delete"})))}))),o?r.a.createElement("div",{className:"class-detail"},r.a.createElement(y.a,{tabPosition:"top",animated:!1},r.a.createElement(y.a.TabPane,{tab:r.a.createElement("span",null,r.a.createElement(p.a,{type:"team"}),"Studenti"),key:"1"},r.a.createElement(N.a,{style:{backgroundColor:"#ffffff",padding:"16px"},dataSource:o.students,rowKey:"id",columns:e})),r.a.createElement(y.a.TabPane,{tab:r.a.createElement("span",null,r.a.createElement(p.a,{type:"highlight"}),"Storie"),key:"2"},r.a.createElement(N.a,{style:{backgroundColor:"#ffffff",padding:"16px"},dataSource:o.stories,rowKey:"id",columns:t}),r.a.createElement(O.a,{type:"primary",onClick:V,loading:!1},"Reload")))):null,r.a.createElement(p.a,{theme:"filled",style:{fontSize:"64px",position:"absolute",bottom:"20px",right:"64px",cursor:"pointer"},type:"plus-circle",onClick:function(){return A(!0)}}),r.a.createElement(g.a,{title:"Aggiungi classe",visible:j,onCancel:function(){return A(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}}},r.a.createElement(k,{handle_submit:L})),r.a.createElement(g.a,{title:"Info Studente",visible:U,onCancel:function(){return R(!1)},okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}}},x?r.a.createElement(_,{handle_submit:X,data:x}):null))}var A=a(135);function T(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),l=Object(i.a)(o,2),s=l[0],u=l[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){var e=Object(b.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(window.API_ENDPOINT.GET_CLASS,{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 2:t=e.sent,a=[],n=[],t.data.data.forEach((function(e){n=[].concat(Object(A.a)(n),Object(A.a)(e.students)),e.stories.forEach((function(e){1===parseInt(e.status)&&a.push(e)}))})),u(n),c(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=[{title:"Titolo",dataIndex:"name",key:"name"},{title:"Descrizione",dataIndex:"description",key:"description"},{title:"Username",key:"ownerId",render:function(e,t,a){var n=s.find((function(e){return e.userId===t.ownerId}));return"".concat(n.name," ").concat(n.surname," (").concat(n.username,")")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Storie pubblicate"),r.a.createElement(N.a,{style:{backgroundColor:"#ffffff",padding:"16px"},dataSource:a,columns:m,rowKey:"id"}))}var D=u.a.Content,U=u.a.Footer,R=u.a.Sider;var z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"".concat(window.API_ENDPOINT.SITE_URL,"admin-area/")},r.a.createElement(u.a,{style:{minHeight:"100vh"}},r.a.createElement(R,{collapsible:!0,collapsed:a,onCollapse:function(e){c(e)}},r.a.createElement("div",{style:{width:"100%",textAlign:"center",padding:"16px"}},r.a.createElement("div",{style:{color:"#ffffff",marginBottom:"8px"}},"Ciao ","".concat(window.USER_INFO.name," ").concat(window.USER_INFO.surname)),r.a.createElement(d.a,{size:64,icon:"user"})),r.a.createElement(m.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},r.a.createElement(m.a.Item,{key:"1"},r.a.createElement(p.a,{type:"team"}),r.a.createElement("span",null,"Classi"),r.a.createElement(l.b,{to:"/"})),r.a.createElement(m.a.Item,{key:"2"},r.a.createElement(p.a,{type:"highlight"}),r.a.createElement("span",null,"Storie pubblicate"),r.a.createElement(l.b,{to:"/stories"})))),r.a.createElement(u.a,null,r.a.createElement(D,{style:{margin:"16px"}},r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{path:"/stories",component:T})),r.a.createElement(U,{style:{textAlign:"center"}},"Storylet Admin by ISISLab")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[189,1,2]]]);
//# sourceMappingURL=main.8abdb8c7.chunk.js.map