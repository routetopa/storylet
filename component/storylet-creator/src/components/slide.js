import React from 'react'
import {useDispatch} from 'react-redux'

import Text from './slide-components/text'
import Image from './slide-components/image'

import SlideStyle from '../style/slide'

import componentSelected from '../reducer/actions/select-component-action'

const shouldSlideNotRender = (prevProps, nextProps) => {
    return false; //always rerender
};

function Slide({parameters, isEditable, onClick})
{
    const dispatch = useDispatch();

    return (
        <SlideStyle background={parameters.background} onClick={onClick}>
            {(() => {
                        if (!parameters.components) return null;
                        return parameters.components.map((c) => {
                            switch (c.type) {
                                case 'text'  :
                                    return (
                                        <Text component={c} x={c.x} y={c.y} value={c.value} onClick={isEditable ? (evt) => {c.target = evt.target; dispatch(componentSelected(c))} : null} />
                                    );
                                case 'image' :
                                    return (
                                        <Image component={c} onClick={isEditable ? (evt) => {c.target = evt.target.parentElement; dispatch(componentSelected(c))} : null}/>
                                    );
                                // default : break;
                            }
                            // return null;
                        })
                    }
            )()}
        </SlideStyle>
    )
}

export default React.memo(Slide, shouldSlideNotRender)

