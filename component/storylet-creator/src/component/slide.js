import React from 'react'
import Text from './slide-component/text'
import Image from './slide-component/image'
import {useDispatch} from 'react-redux'
import componentSelected from '../actions/select-component-action'
import SlideStyle from '../style/slide'

const shouldSlideNotRender = (prevProps, nextProps) => {
    return false; //always rerender
};

function Slide({parameters, isEditable, onClick})
{
    const dispatch = useDispatch();

    return (
        <SlideStyle background={parameters.background} onClick={onClick}>
            {
                (() =>
                {
                    if (!parameters.components) return null;
                    return parameters.components.map((c) => {
                        switch (c.type) {
                            case 'text'  :
                                return (
                                    <Text x={c.x} y={c.y} value={c.value} onClick={isEditable ? (evt) => {c.target = evt.target; dispatch(componentSelected(c))} : null} />
                                );
                            case 'image' :
                                return (
                                    <Image x={c.x} y={c.y} src={c.src} onClick={isEditable ? (evt) => {c.target = evt.target; dispatch(componentSelected(c))} : null}/>
                                );
                            default : break;
                        }
                        return null;
                    })
                })()
            }
        </SlideStyle>
    )
};

export default React.memo(Slide, shouldSlideNotRender)

