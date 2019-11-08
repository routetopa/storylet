import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import cloneDeep from 'lodash/cloneDeep';
import Moveable from 'react-moveable';

import setSlideData from '../../reducer/actions/set-slide-data'

export default function MoveableComponent() {
    const selectedSlide = useSelector(state => state.selectedSlideReducer);
    const selectedComponent = useSelector(state => state.selectedComponentReducer);

    const dispatch = useDispatch();
    const slidesData = useSelector(state => state.slidesData);

    const [slide, setSlide] = useState(null);

    const [type, setType] = useState("text");
    const [position, setPosition] = useState([0,0]);
    const [size, setSize] = useState([40,40]);
    const [scale, setScale] = useState([1,1]);
    const [rotate, setRotate] = useState(0);
    const [keepRatio, setKeepRatio] = useState(true);

    let local_position;
    let local_size;
    let local_scale;
    let local_rotate;

    useEffect(()=>{
        if(!selectedComponent)
            return;

        setSlide(document.getElementById("stage-container").children[0]);

        setType(selectedComponent.type);
        setPosition([selectedComponent.x,selectedComponent.y]);
        setSize([selectedComponent.w,selectedComponent.h]);
        setScale(selectedComponent.scale);
        setRotate(selectedComponent.rotate);
        setKeepRatio(selectedComponent.keepRatio);
    }, [selectedComponent]);

    useEffect(()=>{
        if(!selectedSlide || !selectedComponent)
            return;

        let slideIdx = selectedSlide.index;
        let componentIdx = selectedComponent.index;

        let data = cloneDeep(slidesData);
        data[slideIdx].components[componentIdx].x = position[0];
        data[slideIdx].components[componentIdx].y = position[1];
        data[slideIdx].components[componentIdx].w = size[0];
        data[slideIdx].components[componentIdx].h = size[1];
        data[slideIdx].components[componentIdx].scale = scale;
        data[slideIdx].components[componentIdx].rotate = rotate;
        dispatch(setSlideData(data));

    }, [position, size, scale, rotate]);

    return (
            <Moveable
                target={selectedComponent ? selectedComponent.target : null}

                draggable={true}
                rotatable={true}
                // resizable={type==='image'}
                // scalable={type==='text'}
                resizable={false}
                scalable={true}

                origin={false}

                keepRatio={keepRatio}

                // Drag
                onDragStart={(target, left, top) => {
                    local_position = [left, top];
                }}
                onDrag={({target, left, top, beforeDelta}) => {
                    local_position = [left, top];
                    target.style.left = local_position[0] + "px";
                    target.style.top = local_position[1] + "px";
                }}
                onDragEnd={() => {
                    let x = local_position[0]/slide.offsetWidth*100;
                    let y = local_position[1]/slide.offsetHeight*100;
                    setPosition([x,y]);
                    selectedComponent.x = x;
                    selectedComponent.y = y;
                }}

                // Rotate
                onRotateStart={() => {
                    local_rotate = rotate;
                }}
                onRotate={({ target, beforeDelta, delta }) => {
                    local_rotate += delta;
                    target.style.transform
                        = "scale(" + scale[0] +  "," + scale[1] + ") "
                        + "rotate(" + local_rotate +  "deg)";
                }}
                onRotateEnd={() => {
                    setRotate(local_rotate);
                    selectedComponent.rotate = local_rotate;
                }}

                // Resize
                onResizeStart={(target, width, height) => {
                    local_size = [width, height];
                }}
                onResize={({target, width, height, dist}) => {
                    local_size = [width, height];
                    target.style.width = local_size[0] + "px";
                    target.style.height = local_size[1] + "px";
                }}
                onResizeEnd={() => {
                    let w = local_size[0]/slide.offsetWidth*100;
                    let h = local_size[1]/slide.offsetHeight*100;
                    setSize([w,h]);
                    selectedComponent.w = w;
                    selectedComponent.h = h;
                }}

                // Scale
                onScaleStart={() => {
                    local_scale = scale;
                }}
                onScale={({target, delta}) => {
                    local_scale[0] *= delta[0];
                    local_scale[1] *= delta[1];
                    target.style.transform
                        = "scale(" + local_scale[0] +  "," + local_scale[1] + ") "
                        + "rotate(" + rotate +  "deg)";
                }}
                onScaleEnd={() => {
                    setScale(cloneDeep(local_scale));
                    selectedComponent.scale = local_scale;
                }}

                // Snappable
                snappable={true}
                bounds={{ left: document.documentElement.clientWidth*0.25, top: 56, bottom: document.documentElement.clientHeight-8, right: document.documentElement.clientWidth*0.75 }}
                verticalGuidelines={[slide ? document.documentElement.clientWidth*0.50-slide.offsetWidth/2 : null, document.documentElement.clientWidth*0.50, slide ? document.documentElement.clientWidth*0.50+slide.offsetWidth/2 : null]}
                horizontalGuidelines={[96, slide ? 96+slide.offsetHeight/2 : null, slide ? 96+slide.offsetHeight : null]}
                snapCenter={true}
                // elementGuidelines={[document.querySelector("#stage-container .image-moveable-container")]}
            />
    )
}