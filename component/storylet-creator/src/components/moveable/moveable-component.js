import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import Moveable from 'react-moveable';
import cloneDeep from 'lodash/cloneDeep';

import setSlidesData from '../../reducer/actions/set-slides-data'

export default function MoveableComponent() {
    const dispatch = useDispatch();

    const slidesData = useSelector(state => state.slidesData);
    const selectedSlide = useSelector(state => state.selectedSlide);
    const selectedComponent = useSelector(state => state.selectedComponent);

    const [target, setTarget] = useState(null);
    const [slide, setSlide] = useState(null);
    const [slideIdx, setSlideIdx] = useState(null);
    const [componentIdx, setComponentIdx] = useState(null);

    // Component Parameters
    const [position, setPosition] = useState(null);
    const [size, setSize] = useState(null);
    const [scale, setScale] = useState(null);
    const [rotate, setRotate] = useState(null);

    useEffect(()=>{
        setTarget(null);
        if(selectedSlide && selectedComponent) {
            setSlideIdx(selectedSlide.index);
            setComponentIdx(selectedComponent.index);
            setPosition(null);
            setSize(null);
            setScale(selectedComponent.scale);
            setRotate(selectedComponent.rotate);
            setSlide(document.getElementById("slide-wrapper").children[0]);
            setTimeout(()=>{setTarget(document.getElementById("component-"+selectedComponent.index));}, 0);
        } else {
            setSlideIdx(null);
            setComponentIdx(null);
        }
    }, [slidesData, selectedSlide, selectedComponent]);

    //todo check range here and in dom
    //todo normalize rotate
    function setComponentParameters(name, value) {
        let data = cloneDeep(slidesData);

        switch (name) {
            case "size":
                data[slideIdx].components[componentIdx].w = value[0];
                data[slideIdx].components[componentIdx].h = value[1];
                break;
            case "position":
                data[slideIdx].components[componentIdx].x = value[0];
                data[slideIdx].components[componentIdx].y = value[1];
                break;
            case "scale":
                data[slideIdx].components[componentIdx].scale = value;
                break;
            case "rotate":
                data[slideIdx].components[componentIdx].rotate = value;
                break;
        }

        dispatch(setSlidesData(data));
    }

    return (
        <Moveable
            target={target}

            draggable={true}
            rotatable={true}
            // resizable={selectedComponent ? selectedComponent.type ==='image' : false}
            // scalable={selectedComponent ? selectedComponent.type ==='text' : false}
            resizable={true}
            scalable={false}

            origin={false}

            keepRatio={selectedComponent ? selectedComponent.keepRatio : false}

            // DRAG
            onDrag={({target, left, top, beforeDelta}) => {
                setPosition([left, top]);
                target.style.left = left + "px";
                target.style.top = top + "px";
            }}
            onDragEnd={() => {
                if(position===null)
                    return;
                let x = position[0]/slide.offsetWidth*100;
                let y = position[1]/slide.offsetHeight*100;
                selectedComponent.x = x;
                selectedComponent.y = y;
                setComponentParameters("position", [x,y]);
            }}

            // RESIZE
            onResize={({target, width, height, dist}) => {
                setSize([width, height]);
                target.style.width = width + "px";
                target.style.height = height + "px";
            }}
            onResizeEnd={() => {
                if(size===null)
                    return;
                let w = size[0]/slide.offsetWidth*100;
                let h = size[1]/slide.offsetHeight*100;
                selectedComponent.w = w;
                selectedComponent.h = h;
                setComponentParameters('size', [w,h]);
            }}

            // SCALE
            onScale={({target, delta}) => {
                setScale([scale[0]*delta[0],scale[1]*delta[1]])
                target.style.transform
                    = "scale(" + scale[0] +  "," + scale[1] + ") "
                    + "rotate(" + rotate +  "deg)";
            }}
            onScaleEnd={() => {
                selectedComponent.scale = scale;
                setComponentParameters("scale", scale);
            }}

            // ROTATE
            onRotate={({ target, beforeDelta, delta }) => {
                setRotate(rotate + delta);
                target.style.transform
                    = "scale(" + scale[0] +  "," + scale[1] + ") "
                    + "rotate(" + rotate +  "deg)";
            }}
            onRotateEnd={() => {
                selectedComponent.rotate = rotate;
                setComponentParameters("rotate", rotate);
            }}

            // SNAPPABLE
            snappable={true}
            bounds={{ left: document.documentElement.clientWidth*0.25, top: 56, bottom: document.documentElement.clientHeight-8, right: document.documentElement.clientWidth*0.75 }}
            verticalGuidelines={[slide ? document.documentElement.clientWidth*0.50-slide.offsetWidth/2 : null, document.documentElement.clientWidth*0.50, slide ? document.documentElement.clientWidth*0.50+slide.offsetWidth/2 : null]}
            horizontalGuidelines={[96+48, slide ? 96+slide.offsetHeight/2 : null, slide ? 96+48+slide.offsetHeight : null]}
            snapCenter={true}
            // elementGuidelines={[document.querySelector("#stage-container .image-moveable-container")]}
        />
    )
}