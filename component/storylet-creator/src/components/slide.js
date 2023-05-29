import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Components
import Text from './slide-components/text'
import Image from './slide-components/image'
import Datalet from "./slide-components/datalet";

// Style
import SlideStyle from '../style/slide'

// Actions
import componentSelected from '../reducer/actions/select-component'

// const shouldSlideNotRender = (prevProps, nextProps) => {
//     return false; //always rerender
// };

function Slide({parameters, isEditable, onClick, isSettingVisible, selected})
{
    const dispatch = useDispatch();

    // const selectedComponent = useSelector(state => state.selectedComponent);

    return (
        <SlideStyle selected={selected} id={"slide_"+parameters.id} isSettingVisible={isSettingVisible} background={parameters.background} backgroundColor={parameters.backgroundColor} isEditable={isEditable} onClick={onClick}>
            {(() => {
                if (!parameters.components) return null;
                return parameters.components.map((c, idx) => {
                    switch (c.type) {
                        case 'text'  :
                            return (
                                <Text key={idx} isEditable={isEditable} component={c}
                                      // onClick={(isEditable && (!selectedComponent || selectedComponent.index !== c.index)) ? () => {dispatch(componentSelected(c))} : null}
                                      onClick={isEditable ? () => {dispatch(componentSelected(c))} : null}
                                />
                            );
                        case 'image' :
                            return (
                                <Image key={idx} isEditable={isEditable} component={c}
                                       // onClick={(isEditable && (!selectedComponent || selectedComponent.index !== c.index)) ? () => {dispatch(componentSelected(c))} : null}
                                       onClick={isEditable ? () => {dispatch(componentSelected(c))} : null}
                                />
                            );
                        case 'datalet':
                            return (<Datalet key={idx} isEditable={isEditable} component={c}
                                             onClick={isEditable ? () => {dispatch(componentSelected(c))} : null}
                                 />
                            );
                    }
                    // return null;
                })
            }
            )()}
            {/*{console.log('render slide')}*/}
            {isEditable ? "" : (<div className={"pageCount"}>{parameters.index+1}</div>)}
        </SlideStyle>
    )
}

// export default React.memo(Slide, shouldSlideNotRender)
export default Slide

