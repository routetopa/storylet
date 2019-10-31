import React, {useEffect, useState} from 'react';
import Moveable from 'react-moveable';

export default function moveableHOC(BaseComponent)
{
    return function (props)
    {
        const [ref, setRef] = useState();
        const [rotate, setRotate] = useState(0);
        const [scale, setScale] = useState([1,1]);

        useEffect(()=>{
            setRef(document.querySelector(".moveable"));
        }, []);

        return (
            <>

                <BaseComponent {...props} />

                <Moveable
                    target={ref}
                    origin={false}
                    scalable={true}

                    throttleScale={0}
                    keepRatio={true}
                    onScale={({ target, delta }) => {
                        const local_scale = scale;
                        local_scale[0] *= delta[0];
                        local_scale[1] *= delta[1];
                        target.style.transform
                            = "scale(" + local_scale[0] +  "," + local_scale[1] + ") "
                            + "rotate(" + rotate +  "deg)";
                    }}

                    resizable={true}
                    onResize={({ target, width, height, dist }) => {
                        console.log(width, height, dist);
                        target.style.width = width + "px";
                        target.style.height = height + "px";
                    }}

                    rotatable={true}
                    onRotate={({ target, beforeDelta, delta }) => {
                        setRotate(rotate + delta);
                        target.style.transform
                            = "scale(" + scale[0] +  "," + scale[1] + ") "
                            + "rotate(" + rotate +  "deg)";
                    }}

                    draggable={true}
                    onDrag={({target, left, top, beforeDelta}) => {
                        target.style.left = left + "px";
                        target.style.top = top + "px";
                    }}
                />
            </>
        )
    }
}