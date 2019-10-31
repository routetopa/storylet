import React from 'react'
import Text from './slide-component/text'
import Image from './slide-component/image'
import {useDispatch} from 'react-redux'
import componentSelected from '../actions/select-component-action'
import SlideComponentStyle from '../style/slide-component-style'

const shouldSlideNotRender = (prevProps, nextProps) => {
    return false; //always rerender
};

function Slide({components, isEditable})
{
    const dispatch = useDispatch();

    return (
        <SlideComponentStyle>
            {
                (() =>
                {
                    if (!components) return null;
                    return components.map((c, idx) => {
                        c.key = idx;
                        switch (c.type) {
                            case 'text'  :
                                return (<div key={idx} onClick={isEditable ? (evt) => {c.target = evt.target; dispatch(componentSelected(c))} : null}>
                                            <Text isEditable={isEditable} key={idx} x={c.x} y={c.y} value={c.value} />
                                        </div>);
                            case 'image' :
                                return (<div key={idx} onClick={isEditable ? (evt) => {c.target = evt.target; dispatch(componentSelected(c))} : null}>
                                            <Image isEditable={isEditable} key={idx} x={c.x} y={c.y} src={c.src}/>
                                        </div>);
                            default : break;
                        }
                        return null;
                    })
                })()
            }
        </SlideComponentStyle>
    )
};

export default React.memo(Slide, shouldSlideNotRender)

