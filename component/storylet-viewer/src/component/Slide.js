import React from 'react';
import SlideStyle from '../style/StyledSlide'
import Text from '../component/text'
import Image from '../component/image'

function Slide({parameters, size, navigateLink, isParent})
{
    return (
        <SlideStyle background={parameters.background} size={size} isParent={isParent}>
            {(() => {
                    if (!parameters.components) return null;
                    return parameters.components.map((c, idx) => {
                        switch (c.type) {
                            case 'text'  :
                                return (
                                    <Text key={idx} component={c}  />
                                );
                            case 'image' :
                                return (
                                    <Image key={idx} component={c} />
                                );
                        }
                    })
                }
            )()}
            {parameters.storyLink ? (<button onClick={() => navigateLink(parameters.storyLink)}>LINK</button>) : null }
        </SlideStyle>
    );

}

export default Slide;
