(this["webpackJsonpstorylet-viewer"]=this["webpackJsonpstorylet-viewer"]||[]).push([[0],{32:function(e,t,n){e.exports=n(63)},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(24),o=n.n(c),i=n(10),s=n.n(i),u=n(25),l=n(8),m=n(11),d=n(26);function p(){var e=Object(d.a)(["\n  width: ",";\n  height: ",";\n  position: relative;\n  background: url(",");\n  background-size: cover;\n  background-color: var(--storylet-white);\n  box-shadow: ",";\n  border-radius: 4px\n"]);return p=function(){return e},e}var f=n(27).a.div(p(),(function(e){switch(e.size){case"small":return"5vw";case"medium":return"30vw";case"full":default:return"40vw"}}),(function(e){switch(e.size){case"small":return"5vw";case"medium":return"30vw";case"full":default:return"40vw"}}),(function(e){return"".concat(window.STATIC.IMAGE_BASE_PATH).concat(e.background)}),(function(e){return e.isParent?"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,1)":"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}));function v(e){var t=e.component;return a.a.createElement("div",{style:{top:t.y+"%",left:t.x+"%",width:t.w+"%",height:t.h+"%",transform:"scale("+t.scale[0]+","+t.scale[1]+") rotate("+t.rotate+"deg)",zIndex:t.zIndex,fontSize:.05*t.fontSize+"vw",color:t.color,position:"absolute"}},t.value)}function w(e){var t=e.component;return a.a.createElement("div",{className:"image-moveable-container",style:{top:t.y+"%",left:t.x+"%",width:t.w+"%",height:t.h+"%",transform:"scale("+t.scale[0]+","+t.scale[1]+") rotate("+t.rotate+"deg)",zIndex:t.zIndex,position:"absolute"}},a.a.createElement("img",{style:{width:"100%",height:"100%"},src:"".concat(window.STATIC.IMAGE_BASE_PATH).concat(t.src),alt:t.src}))}var h=function(e){var t=e.parameters,n=e.size,r=e.navigateLink,c=e.isParent;return a.a.createElement(f,{background:t.background,size:n,isParent:c},t.components?t.components.map((function(e,t){switch(e.type){case"text":return a.a.createElement(v,{key:t,component:e});case"image":return a.a.createElement(w,{key:t,component:e})}})):null,t.storyLink?a.a.createElement("button",{onClick:function(){return r(t.storyLink)}},"LINK"):null)};n(62);var E=function(){var e=.4*window.innerWidth,t=window.innerWidth,n=Object(r.useState)("full"),c=Object(l.a)(n,2),o=c[0],i=c[1],d=Object(r.useState)(null),p=Object(l.a)(d,2),f=p[0],v=p[1],w=Object(r.useState)(null),E=Object(l.a)(w,2),b=E[0],g=E[1],k=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(window.API_ENDPOINT.GET_STORYLET+"/"+t,{method:"GET"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,v(b),g(JSON.parse(r.data.story)),i("medium");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){g(window.STORY.DATA)}),[]);var x=function(){v(null),i("full")},y=function(){g(f),x()};return a.a.createElement(a.a.Fragment,null,f&&function(){var e=f.map((function(e,t){return a.a.createElement(h,{key:t,parameters:e,size:"small",isParent:!0})}));return a.a.createElement("div",{className:"parentStory",onClick:y},a.a.createElement("div",{className:"contentParentStory"},e),a.a.createElement("div",{onClick:x,className:"closeParentStory"},"CLOSE"))}(),b&&function(){var n=b.map((function(n,r){return a.a.createElement(m.Step,{key:r,duration:1500,data:{x:0===r?0:(t-e)*r}},a.a.createElement(h,{key:r,parameters:n,size:o,navigateLink:k}))}));return a.a.createElement(m.Impress,{progress:!0,fallbackMessage:a.a.createElement("p",null,"Error"),hint:!1},n)}())};o.a.render(a.a.createElement(E,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.ad4c1c8b.chunk.js.map