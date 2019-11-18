(this["webpackJsonpstorylet-creator"]=this["webpackJsonpstorylet-creator"]||[]).push([[0],{124:function(e,t,n){e.exports=n(273)},132:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},200:function(e,t,n){},201:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(26),r=n.n(l),o=n(2),i=(n(132),n(45)),s=n(46);function m(){return c.a.createElement("div",{className:"info"},c.a.createElement(i.a,{icon:s.b,className:"icon"}))}n(135);function u(){return c.a.createElement("div",{className:"menu"},c.a.createElement(i.a,{icon:s.a,className:"icon"}))}n(136);function d(){return c.a.createElement("div",{className:"header"},c.a.createElement(u,null),c.a.createElement("div",{className:"logo"}," "),c.a.createElement(m,null))}var f=n(6),E=n(33),b=n.n(E),p=function(e){return{type:"SET_SLIDE_DATA",payload:e}};n(198);function v(e){var t=e.component,n=e.onClick,l=e.isEditable,r=Object(o.c)((function(e){return e.selectedSlideReducer})),i=Object(o.b)(),s=Object(o.c)((function(e){return e.slidesData})),m=Object(a.useState)(t.value),u=Object(f.a)(m,2),d=u[0],E=u[1],v=Object(a.useState)(!0),h=Object(f.a)(v,2),g=h[0];h[1];return Object(a.useEffect)((function(){if(r){var e=r.index,n=t.index,a=b()(s);a[e].components[n].value=d,i(p(a))}}),[d]),c.a.createElement("div",{className:"text-moveable-container",onClick:n,onBlur:function(e){E(e.target.innerText)},style:{top:t.y+"%",left:t.x+"%",width:t.w+"%",height:t.h+"%",transform:"scale("+t.scale[0]+","+t.scale[1]+") rotate("+t.rotate+"deg)",zIndex:t.zIndex,fontSize:.05*(l?t.fontSize:t.fontSize/2)+"vw",color:t.color},contentEditable:l&&g?"true":"false",suppressContentEditableWarning:!0},t.value)}n(199);function h(e){var t=e.component,n=e.onClick;return c.a.createElement("div",{className:"image-moveable-container",onClick:n,style:{top:t.y+"%",left:t.x+"%",width:t.w+"%",height:t.h+"%",transform:"scale("+t.scale[0]+","+t.scale[1]+") rotate("+t.rotate+"deg)",zIndex:t.zIndex}},c.a.createElement("img",{src:t.src,alt:t.src}))}var g=n(115);function N(){var e=Object(g.a)(["\nposition: absolute;\n  width: 80%;\n  padding-top: 80%;\n  margin: 40px auto;\n  position: relative;\n  background: url(",");\n  background-size: cover;\n  background-color: var(--storylet-white);\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  cursor: ",";\n"]);return N=function(){return e},e}var O=n(116).a.div(N(),(function(e){return e.background}),(function(e){return e.cursor})),y=function(e){return{type:"COMPONENT_SELECTED",payload:e}};var S=c.a.memo((function(e){var t=e.parameters,n=e.isEditable,a=e.onClick,l=Object(o.b)();return c.a.createElement(O,{id:"selected-slide",background:t.background,cursor:n?"auto":"pointer",onClick:a},t.components?t.components.map((function(e,t){switch(e.type){case"text":return c.a.createElement(v,{key:t,isEditable:n,component:e,onClick:n?function(t){e.target=t.target,l(y(e))}:null});case"image":return c.a.createElement(h,{key:t,component:e,onClick:n?function(t){e.target=t.target.parentElement,l(y(e))}:null})}})):null)}),(function(e,t){return!1})),j=(n(200),function(e){return{type:"SLIDE_SELECTED",payload:e}});function w(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.slidesData}));return c.a.createElement("div",{className:"slide-container"},t.map((function(n,a){return c.a.createElement(S,{key:a,parameters:n,isEditable:!1,onClick:function(){e(y(null)),e(j(t[a]))}})})))}n(201);function k(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.selectedSlideReducer}));return c.a.createElement("div",{id:"stage-container",onClick:function(t){"stage-container"!==t.target.id&&"selected-slide"!==t.target.id||e(y(null))}},t?c.a.createElement(S,{parameters:t,isEditable:!0}):null)}function x(){var e=Object(o.c)((function(e){return e.selectedComponentReducer})),t=Object(o.c)((function(e){return e.selectedSlideReducer})),n=(Object(o.c)((function(e){return e.slidesData})),Object(o.b)()),a=function(a){var c=Object.assign({},t);c.components[e.key].value="<".concat(a,">").concat(c.components[e.key].value,"</").concat(a,">"),n(j(c))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Text Properties"),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return a("strong")}},"Bold")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return a("i")}},"Italic")))}var C=n(5),D=n(12),_=(n(268),n(269),function(){return c.a.createElement(C.d,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validationSchema:D.object().shape({firstName:D.string().required("First Name is required"),lastName:D.string().required("Last Name is required"),email:D.string().email("Email is invalid").required("Email is required"),password:D.string().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:D.string().oneOf([D.ref("password"),null],"Passwords must match").required("Confirm Password is required")}),onSubmit:function(e){alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4))}},(function(e){var t=e.errors,n=(e.status,e.touched);return c.a.createElement(C.c,null,c.a.createElement("div",{className:"form-group form-inline"},c.a.createElement("label",{className:"col-md-4 col-sm-4 _left"},"Size"),c.a.createElement("label",{htmlFor:"width",className:"col-md-2 col-sm-2"},"Width:"),c.a.createElement(C.b,{name:"width",type:"number",className:"form-control col-md-2 col-sm-2"+(t.width&&n.width?" is-invalid":"")}),c.a.createElement("label",{htmlFor:"height",className:"col-md-2 col-sm-2"},"Height:"),c.a.createElement(C.b,{name:"height",type:"number",className:"form-control col-md-2 col-sm-2"+(t.height&&n.height?" is-invalid":"")}),c.a.createElement(C.a,{name:"height",component:"div",className:"invalid-feedback"})),c.a.createElement("div",{className:"form-group form-inline"},c.a.createElement("label",{className:"col-md-3 col-sm-3 _left"},"Position"),c.a.createElement("label",{htmlFor:"top",className:"col-md-1 col-sm-1"},"X:"),c.a.createElement(C.b,{name:"top",type:"number",className:"form-control col-md-2 col-sm-2"+(t.top&&n.top?" is-invalid":"")}),c.a.createElement("label",{htmlFor:"left",className:"col-md-1 col-sm-1"},"Y:"),c.a.createElement(C.b,{name:"left",type:"number",className:"form-control col-md-2 col-sm-2"+(t.left&&n.left?" is-invalid":"")}),c.a.createElement("label",{htmlFor:"zIndex",className:"col-md-1 col-sm-1"},"Z:"),c.a.createElement(C.b,{name:"zIndex",type:"number",className:"form-control col-md-2 col-sm-2"+(t.zIndex&&n.zIndex?" is-invalid":"")}),c.a.createElement(C.a,{name:"scale",component:"div",className:"invalid-feedback"})),c.a.createElement("div",{className:"form-group form-inline"},c.a.createElement("label",{className:"col-md-3 col-sm-3 _left"},"Scale"),c.a.createElement("label",{htmlFor:"scaleX",className:"col-md-1 col-sm-1"},"X:"),c.a.createElement(C.b,{name:"scaleX",type:"number",className:"form-control col-md-2 col-sm-2"+(t.scale&&n.scale?" is-invalid":"")}),c.a.createElement("label",{htmlFor:"scaleY",className:"col-md-1 col-sm-1"},"Y:"),c.a.createElement(C.b,{name:"scaleY",type:"number",className:"form-control col-md-2 col-sm-2"+(t.scale&&n.scale?" is-invalid":"")}),c.a.createElement(C.a,{name:"scale",component:"div",className:"invalid-feedback"}),c.a.createElement("div",{className:"custom-control custom-checkbox col-md-3 col-sm-3"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"defaultUnchecked"}),c.a.createElement("label",{className:"custom-control-label",htmlFor:"defaultUnchecked"},"lock"))),c.a.createElement("div",{className:"form-group form-inline"},c.a.createElement("label",{className:"col-md-4 col-sm-4 _left"},"Rotate"),c.a.createElement("label",{htmlFor:"rotate",className:"col-md-2 col-sm-2"},"Deg.:"),c.a.createElement(C.b,{name:"rotate",type:"number",className:"form-control col-md-2 col-sm-2"+(t.rotate&&n.rotate?" is-invalid":"")}),c.a.createElement(C.a,{name:"rotate",component:"div",className:"invalid-feedback"})))}))});n(270);function R(){var e=Object(o.c)((function(e){return e.selectedComponentReducer}));return c.a.createElement("div",{className:"properties-container"},c.a.createElement("div",{className:"tabs"},c.a.createElement("div",{className:"tab selected"},"Component"),c.a.createElement("div",{className:"tab"},"Slide")),c.a.createElement("div",{className:"properties col-md-12"},function(){if(!e)return null;switch(e.type){case"text":return c.a.createElement(x,null);case"image":return c.a.createElement(_,null)}return null}()))}n(271);function z(){return c.a.createElement("div",{className:"body-container"},c.a.createElement(w,null),c.a.createElement(k,null),c.a.createElement(R,null))}var T=n(121);function I(){var e,t,n,l,r=Object(o.c)((function(e){return e.selectedSlideReducer})),i=Object(o.c)((function(e){return e.selectedComponentReducer})),s=Object(o.b)(),m=Object(o.c)((function(e){return e.slidesData})),u=Object(a.useState)(null),d=Object(f.a)(u,2),E=d[0],v=d[1],h=Object(a.useState)("text"),g=Object(f.a)(h,2),N=(g[0],g[1]),O=Object(a.useState)([0,0]),y=Object(f.a)(O,2),S=y[0],j=y[1],w=Object(a.useState)([40,40]),k=Object(f.a)(w,2),x=k[0],C=k[1],D=Object(a.useState)([1,1]),_=Object(f.a)(D,2),R=_[0],z=_[1],I=Object(a.useState)(0),F=Object(f.a)(I,2),L=F[0],W=F[1],q=Object(a.useState)(!0),P=Object(f.a)(q,2),X=P[0],A=P[1];return Object(a.useEffect)((function(){i&&(v(document.getElementById("stage-container").children[0]),N(i.type),j([i.x,i.y]),C([i.w,i.h]),z(i.scale),W(i.rotate),A(i.keepRatio))}),[i]),Object(a.useEffect)((function(){if(r&&i){var e=r.index,t=i.index,n=b()(m);n[e].components[t].x=S[0],n[e].components[t].y=S[1],n[e].components[t].w=x[0],n[e].components[t].h=x[1],n[e].components[t].scale=R,n[e].components[t].rotate=L,s(p(n))}}),[S,x,R,L]),c.a.createElement(T.a,{target:i?i.target:null,draggable:!0,rotatable:!0,resizable:!1,scalable:!0,origin:!1,keepRatio:X,onDragStart:function(t,n,a){e=[n,a]},onDrag:function(t){var n=t.target,a=t.left,c=t.top;t.beforeDelta;e=[a,c],n.style.left=e[0]+"px",n.style.top=e[1]+"px"},onDragEnd:function(){var t=e[0]/E.offsetWidth*100,n=e[1]/E.offsetHeight*100;j([t,n]),i.x=t,i.y=n},onRotateStart:function(){l=L},onRotate:function(e){var t=e.target,n=(e.beforeDelta,e.delta);l+=n,t.style.transform="scale("+R[0]+","+R[1]+") rotate("+l+"deg)"},onRotateEnd:function(){W(l),i.rotate=l},onResizeStart:function(e,n,a){t=[n,a]},onResize:function(e){var n=e.target,a=e.width,c=e.height;e.dist;t=[a,c],n.style.width=t[0]+"px",n.style.height=t[1]+"px"},onResizeEnd:function(){var e=t[0]/E.offsetWidth*100,n=t[1]/E.offsetHeight*100;C([e,n]),i.w=e,i.h=n},onScaleStart:function(){n=R},onScale:function(e){var t=e.target,a=e.delta;n[0]*=a[0],n[1]*=a[1],t.style.transform="scale("+n[0]+","+n[1]+") rotate("+L+"deg)"},onScaleEnd:function(){z(b()(n)),i.scale=n},snappable:!0,bounds:{left:.25*document.documentElement.clientWidth,top:56,bottom:document.documentElement.clientHeight-8,right:.75*document.documentElement.clientWidth},verticalGuidelines:[E?.5*document.documentElement.clientWidth-E.offsetWidth/2:null,.5*document.documentElement.clientWidth,E?.5*document.documentElement.clientWidth+E.offsetWidth/2:null],horizontalGuidelines:[96,E?96+E.offsetHeight/2:null,E?96+E.offsetHeight:null],snapCenter:!0})}n(272);var F=function(){var e=Object(o.b)();return Object(a.useEffect)((function(){e(p(JSON.parse(window.STORY.DATA.story)))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d,null),c.a.createElement(z,null),c.a.createElement(I,null))},L=n(28),W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"COMPONENT_SELECTED":return t.payload;default:return e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SLIDE_SELECTED":return t.payload;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SLIDE_DATA":return t.payload;default:return e}},X=Object(L.b)({selectedComponentReducer:W,selectedSlideReducer:q,slidesData:P}),A=Object(L.c)(X,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(c.a.createElement(o.a,{store:A},c.a.createElement(F,null)),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.230edda1.chunk.js.map