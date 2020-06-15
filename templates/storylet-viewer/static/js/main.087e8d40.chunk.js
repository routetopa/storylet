(this["webpackJsonpstorylet-viewer"]=this["webpackJsonpstorylet-viewer"]||[]).push([[0],{31:function(n,e,t){n.exports=t(63)},61:function(n,e,t){},62:function(n,e,t){},63:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(26),i=t.n(a),l=t(12),c=t.n(l),u=t(7),s=t(6),f=t(10),b=t(11);function d(){var n=Object(f.a)(["\n  width: ",";\n  height: ",";\n  position: relative;\n  background: url(",");\n  background-color: ",";\n  background-size: cover;\n  box-shadow: ",";\n  border-radius: 4px\n"]);return d=function(){return n},n}var p=b.a.div(d(),(function(n){switch(n.size){case"small":return"5vw";case"medium":return"30vw";case"full":return"40vw";case"snail":case"cube":return"700px";default:return"40vw"}}),(function(n){switch(n.size){case"small":return"5vw";case"medium":return"30vw";case"full":return"40vw";case"snail":case"cube":return"700px";default:return"40vw"}}),(function(n){return n.background}),(function(n){return n.backgroundColor||"var(--storylet-white)"}),(function(n){return n.isParent?"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,1)":"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"}));t(61);function v(){var n=Object(f.a)(["\n        top:                ",";\n        left:               ",";\n        width:              ",";\n        height:             ",";\n        transform:          ",";\n        z-index:            ",";\n        \n        font-family:         ",";\n        font-size:           ",";\n        color:               ",";\n        font-weight:         ",";\n        font-style:          ",";\n        text-decoration:     ",";\n        text-align:          ",";\n        background-color:    ",";\n        \n        & > div {\n            overflow: hidden\n        }\n        \n        &.balloon {\n            border:             ",";\n            padding:            ",";\n            border-radius:      ",";\n            background-color:   ",";\n            overflow: visible;\n            \n            white-space: break-spaces;\n            font-size:          ",";\n            text-align: center\n        }\n        \n        &.balloon:before, &.balloon:after {\n            content: ' ';\n            position: absolute;\n            width: 0;\n            height: 0;\n        }\n        \n        &.balloon.speech:before {\n            left:               ",";\n            bottom:             ",";\n            border:             ",";\n            border-color:       #212121 transparent transparent #212121;\n        }\n        \n        &.balloon.speech:after {\n            left:               ",";\n            bottom:             ",";\n            border:             ",";\n            border-color:       ",";\n        }\n        \n        &.balloon.speech.BR:before {\n            left:               initial\n            right:              ",";\n            border-color:       #212121 #212121 transparent transparent;\n        }\n        \n        &.balloon.speech.BR:after {\n            left:               initial\n            right:              ",";\n            border-color:       ",";\n        }\n        \n        &.balloon.speech.TL:before {\n            bottom:             initial\n            top:                ",";\n            border-color:       transparent transparent #212121 #212121;\n        }\n        \n        &.balloon.speech.TL:after {\n            bottom:             initial\n            top:                ",";\n            border-color:       ",";\n        }\n        \n        &.balloon.speech.TR:before {\n            left:               initial\n            right:              ",";\n            bottom:             initial\n            top:                ",";\n            border-color:       transparent #212121 #212121 transparent;\n        }\n        \n        &.balloon.speech.TR:after {\n            left:               initial\n            right:              ",";\n            bottom:             initial\n            top:                ",";\n            border-color:       ",";\n        }\n        \n        &.balloon.thought {\n            border-radius:      ",";\n            padding:            ",";\n        }\n        \n        &.balloon.thought:before, .balloon.thought:after {\n            left:               ",";\n            bottom:             ",";\n            width:              ",";\n            height:             ",";\n            background-color:   ",";\n            border:             ",";\n            border-radius: 50%;\n        }\n        \n        &.balloon.thought:after {\n            left:               ",";\n            bottom:             ",";\n            width:              ",";\n            height:             ",";\n            background-color:   ",";\n            border:             ",";\n            border-radius: 50%;\n        }\n        \n        &.balloon.thought.BR:before, .balloon.thought:after {\n            left:               initial\n            right:               ",";\n        }\n        \n        &.balloon.thought.BR:after {\n            left:               initial\n            right:               ",";\n        }\n        \n        &.balloon.thought.TL:before, .balloon.thought:after {\n            bottom:             initial\n            top:                ",";\n        }\n        \n        &.balloon.thought.TL:after {\n            bottom:             initial\n            top:                ",";\n        }\n        \n        &.balloon.thought.TR:before, .balloon.thought:after {\n            left:               initial\n            right:               ",";\n            bottom:             initial\n            top:                ",";\n        }\n        \n        &.balloon.thought.TR:after {\n            left:               initial\n            right:               ",";\n            bottom:             initial\n            top:                ",";\n        }\n    "]);return v=function(){return n},n}function w(n){var e=n.component,t=n.onClick,r=e.fontSize*e.w*.002,a=b.a.div(v(),(function(n){return n.y+"%"}),(function(n){return n.x+"%"}),(function(n){return n.w+"%"}),(function(n){return n.h+"%"}),(function(n){return"scale("+n.scale[0]+","+n.scale[1]+") rotate("+n.rotate+"deg)"}),(function(n){return n.zIndex}),(function(n){return n.fontFamily}),(function(n){return.1*n.fontSize+"vw"}),(function(n){return n.color}),(function(n){return n.fontWeight}),(function(n){return n.fontStyle}),(function(n){return n.textDecoration}),(function(n){return n.textAlign}),(function(n){return n.backgroundColor}),"0.5vw solid #212121","0.5vw","1.5vw",(function(n){return n.backgroundColor?n.backgroundColor:"#fff"}),r+"vw","1.5vw","-2.5vw","1.25vw solid","1.9vw","-1.4vw","0.75vw solid",(function(n){return(n.backgroundColor?n.backgroundColor:"#fff")+" transparent transparent "+(n.backgroundColor?n.backgroundColor:"#fff")}),"1.5vw","1.9vw",(function(n){return(n.backgroundColor?n.backgroundColor+" "+n.backgroundColor:"#fff #fff")+" transparent transparent"}),"-2.5vw","-1.4vw",(function(n){return" transparent transparent "+(n.backgroundColor?n.backgroundColor+" "+n.backgroundColor:"#fff #fff")}),"1.5vw","-2.5vw","1.9vw","-1.4vw",(function(n){return"transparent "+(n.backgroundColor?n.backgroundColor+" "+n.backgroundColor:"#fff #fff")+" transparent"}),"10vw","1vw","0.5vw","-1.75vw","3vw","3vw",(function(n){return n.backgroundColor?n.backgroundColor:"#fff"}),"0.5vw solid #212121","0.25vw","-2.35vw","2vw","2vw",(function(n){return n.backgroundColor?n.backgroundColor:"#fff"}),"0.5vw solid #212121","0.5vw","0.25vw","-1.75vw","-2.35vw","0.5vw","-1.75vw","0.25vw","-2.35vw");return o.a.createElement(a,Object.assign({},e,{className:"text-moveable-container "+(e.balloon?e.balloon:"")+" "+(e.placement?e.placement:""),onClick:t,id:"component-"+e.index}),o.a.createElement("div",{className:"inner_text",dangerouslySetInnerHTML:{__html:e.value}}))}function g(n){var e=n.component;return o.a.createElement("div",{className:"image-moveable-container",style:{top:e.y+"%",left:e.x+"%",width:e.w+"%",height:e.h+"%",transform:"scale("+e.scale[0]+","+e.scale[1]+") rotate("+e.rotate+"deg)",zIndex:e.zIndex,position:"absolute",overflow:"hidden"}},o.a.createElement("img",{style:{width:"100%",height:"100%"},src:e.src,alt:e.src}))}var m=function(n){var e=n.parameters,t=n.size,r=n.navigateLink,a=n.isParent;return o.a.createElement(p,{background:e.background,backgroundColor:e.backgroundColor,size:t,isParent:a},e.components?e.components.map((function(n,e){switch(n.type){case"text":return o.a.createElement(w,{key:e,component:n});case"image":return o.a.createElement(g,{key:e,component:n})}})):null,e.storyLink?o.a.createElement("button",{onClick:function(){return r(e.storyLink)}},"LINK"):null)};t(62);var h=function(){var n=.4*window.innerWidth,e=window.innerWidth,t=Object(r.useState)("full"),a=Object(u.a)(t,2),i=a[0],l=a[1],f=Object(r.useState)(null),b=Object(u.a)(f,2),d=b[0],p=b[1],v=Object(r.useState)(null),w=Object(u.a)(v,2),g=w[0],h=w[1],k=Object(r.useState)(null),x=Object(u.a)(k,2),y=x[0],E=x[1],C=function(n){var e,t;return c.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,c.a.awrap(fetch(window.API_ENDPOINT.GET_STORYLET+"/"+n,{method:"GET"}));case 2:return e=r.sent,r.next=5,c.a.awrap(e.json());case 5:t=r.sent,p(g),h(JSON.parse(t.data.story)),l("medium");case 9:case"end":return r.stop()}}))};Object(r.useEffect)((function(){h(JSON.parse(window.STORY.DATA.story)),E(JSON.parse(window.STORY.DATA.metadata))}),[]);var S=function(){p(null),l("full")},O=function(){h(d),S()};return o.a.createElement(o.a.Fragment,null,d&&function(){var n=d.map((function(n,e){return o.a.createElement(m,{key:e,parameters:n,size:"small",isParent:!0})}));return o.a.createElement("div",{className:"parentStory",onClick:O},o.a.createElement("div",{className:"contentParentStory"},n),o.a.createElement("div",{onClick:S,className:"closeParentStory"},"CLOSE"))}(),g&&function(){var t;return y.viewer&&"linear"!==y.viewer.template?"snail"===y.viewer.template?t=(t=g.map((function(n,e){if(e<13)return o.a.createElement(s.Step,{key:e,duration:1500,data:{x:[-1e3,0,1100,1900,2100,1800,1e3,-100,-1200,-2e3,-2300,0,3e3][e],y:[-1500,-1500,-1200,-400,700,1800,2600,2900,2600,1800,700,700,1500][e],rotate:[0,0,30,60,90,120,150,180,210,240,270,720,0][e],scale:[1,1,1,1,1,1,1,1,1,1,1,1,.1][e]}},o.a.createElement(m,{key:e,parameters:n,size:"snail",navigateLink:C}))}))).filter((function(n){return null!=n})):"cube"===y.viewer.template&&(t=(t=g.map((function(n,e){if(e<6)return o.a.createElement(s.Step,{key:e,duration:1500,data:{x:[0,350,0,0,-350,0][e],y:[0,0,350,-350,0,0][e],z:[350,0,0,0,0,-350][e],rotateX:[0,0,-90,90,0,0][e],rotateY:[0,90,0,0,-90,-180][e]}},o.a.createElement(m,{key:e,parameters:n,size:"cube",navigateLink:C}))}))).filter((function(n){return null!=n}))):t=g.map((function(t,r){return o.a.createElement(s.Step,{key:r,duration:1500,data:{x:0===r?0:(e-n)*r}},o.a.createElement(m,{key:r,parameters:t,size:i,navigateLink:C}))})),o.a.createElement(s.Impress,{progress:!0,fallbackMessage:o.a.createElement("p",null,"Error"),hint:!1},t)}())};i.a.render(o.a.createElement(h,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.087e8d40.chunk.js.map