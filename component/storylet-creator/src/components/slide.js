import React from 'react'
import {useDispatch} from 'react-redux'

// Components
import Text from './slide-components/text'
import Image from './slide-components/image'

// Style
import SlideStyle from '../style/slide'

// Actions
import componentSelected from '../reducer/actions/select-component'

const shouldSlideNotRender = (prevProps, nextProps) => {
    return false; //always rerender
};

function Slide({parameters, isEditable, onClick})
{
    const dispatch = useDispatch();

    return (
        <SlideStyle id="selected-slide" background={`${window.STATIC.IMAGE_BASE_PATH}${parameters.background}`} cursor={(isEditable ? 'auto' : 'pointer')} onClick={onClick}>
            {(() => {
                        if (!parameters.components) return null;
                        return parameters.components.map((c, idx) => {
                            switch (c.type) {
                                case 'text'  :
                                    return (
                                        <Text key={idx} isEditable={isEditable} component={c} onClick={isEditable ? () => {dispatch(componentSelected(c))} : null} />
                                    );
                                case 'image' :
                                    return (
                                        <Image key={idx} isEditable={isEditable} component={c} onClick={isEditable ? () => {dispatch(componentSelected(c))} : null}/>
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

