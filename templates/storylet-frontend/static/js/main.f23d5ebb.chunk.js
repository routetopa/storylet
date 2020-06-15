(this["webpackJsonpstorylet-frontend"]=this["webpackJsonpstorylet-frontend"]||[]).push([[0],{31:function(e,t,n){e.exports=n(63)},37:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),i=n.n(c),o=n(6),l=n.n(o),s=n(10),u=n(3),d=(n(37),Object(a.createContext)({})),f=n(7),m=n(11),h=n.n(m),w=(n(54),n(26));function p(){var e=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  width: ",";\n  height: 100%;\n    \n    .preview {\n        width: 80%;\n        padding-top: ",";\n        margin: auto;\n        background-image: url(",");\n        background-size: cover;\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\n        border-radius: 2px;\n        cursor: pointer;\n    }\n    \n    .preview:hover {\n        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n    }\n    \n    .info {\n        height: 48px;\n        line-height: 48px;\n        font-weight: 700;\n        text-align: center;\n    }\n"]);return p=function(){return e},e}var v=f.b.div(p(),(function(e){return e.width+"px"}),(function(e){return 80/e.s_width*e.s_height+"%"}),(function(e){return e.src}));function E(e){var t=e.storyletClickHandler,n=e.previewWidth,a=e.storylet,c=a.name,i=(a.description,a.width),o=a.height,l=a.src;a.tag;return r.a.createElement(v,{width:n,onClick:t,s_width:i,s_height:o,src:l},r.a.createElement("div",{className:"preview"}),r.a.createElement("div",{className:"info"},c))}n(58);var b=n(4),g=n(5);function N(e){var t=e.searchHandler,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("input",{onChange:t,className:"search-input",placeholder:"Search..."}),r.a.createElement(b.a,{icon:g.c,className:"search-icon"}))}n(61);function O(e){var t=e.currentPage,n=e.pageNumber,a=e.className;return r.a.createElement("div",{className:a},t," / ",n)}function x(e){var t=e.storyletsList,n=e.storyletClickHandler,c=e.searchHandler,i=Object(a.useContext)(d),o=Object(a.useState)({height:window.innerHeight,width:window.innerWidth}),l=Object(u.a)(o,2),s=l[0],f=l[1],m=Object(a.useState)(0),h=Object(u.a)(m,2),w=h[0],p=h[1],v=Object(a.useState)([]),x=Object(u.a)(v,2),C=x[0],y=x[1],j=Object(a.useReducer)((function(e,t){switch(t){case"next":return++e;case"prev":return--e;default:throw new Error("Unexpected action")}}),1),_=Object(u.a)(j,2),k=_[0],L=_[1];return Object(a.useEffect)((function(){var e=function(){f({height:window.innerHeight,width:window.innerWidth})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){for(var e=Math.floor(.8*s.width/i.previewWidth),a=(k-1)*e,c=Math.min(a+e,t.length),o=Math.ceil(t.length/e),l=[],u=function(e){l.push(r.a.createElement(E,{key:e,storyletClickHandler:function(t){return n(t,e)},previewWidth:i.previewWidth,storylet:t[e]}))},d=a;d<c;d++)u(d);y(l),p(o)}),[t,s,k]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slider"},C),r.a.createElement(N,{searchHandler:c,className:"search"}),r.a.createElement(O,{currentPage:k,pageNumber:w,className:"pagination"}," "),r.a.createElement(b.a,{icon:g.a,disabled:1===k,onClick:function(){return L("prev")},className:"arrow-left"}),r.a.createElement(b.a,{icon:g.b,disabled:k+1>w,onClick:function(){return L("next")},className:"arrow-right"}))}n(62);function C(e){var t=e.selectedLayout,n=e.createCallback;return t?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d_left"},r.a.createElement("img",{src:t.src})),r.a.createElement("div",{className:"d_right"},r.a.createElement("div",{className:"name"},t.name),r.a.createElement("div",{className:"description"},t.description),t.name?r.a.createElement("div",{className:"button",onClick:n},"CREA!"):r.a.createElement("div",{className:"button disabled"},"CREA!"))):r.a.createElement("div",{className:"container"})}var y=function(){var e=Object(a.useState)({filtered:[],all:[]}),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)({}),o=Object(u.a)(i,2),m=o[0],w=o[1],p=Object(a.useState)({previewWidth:300,main:"#2196F3;"}),v=Object(u.a)(p,1)[0],E=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get(window.API_ENDPOINT.GET_STORYLET_TEMPLATE,{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}});case 2:if("OK"!==(t=e.sent).data.status){e.next=5;break}return e.abrupt("return",t.data.data);case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e,t){var n=!0,a=!1,r=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done);n=!0){if(c.value.toLowerCase().includes(t))return!0}}catch(o){a=!0,r=o}finally{try{n||null==i.return||i.return()}finally{if(a)throw r}}return!1},g=function(){var e=Object(s.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("CREATE"),h.a.post(window.API_ENDPOINT.CREATE_STORYLET,{storyletTemplate:m},{headers:{"X-WP-Nonce":window.API_NONCE.NONCE}}).then((function(e){console.log(e),window.open("".concat(window.API_ENDPOINT.STORYLET_CREATOR_URL).concat(e.data.created_storylet_id),"_self")})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){E().then((function(e){c({filtered:e,all:e}),w(e?e[0]:null)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Provider,{value:v},r.a.createElement(f.a,{theme:v},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"logo"}," ")),r.a.createElement("div",{className:"split-container"},r.a.createElement(x,{storyletsList:n.filtered,storyletClickHandler:function(e,t){w(n.filtered[t])},searchHandler:function(e){var t=n.all.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())||t.description.toLowerCase().includes(e.target.value.toLowerCase())||b(t.tag,e.target.value.toLowerCase())?t:null}));c((function(e){return{filtered:t,all:e.all}}))}}),r.a.createElement(C,{selectedLayout:m,createCallback:g})))))};i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f23d5ebb.chunk.js.map