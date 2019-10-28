import React from 'react'

import ContentEditable from "react-contenteditable";

import TextStyle from '../../style/text-style'


export default function Text({isEditable, x, y, value})
{
    //const [text, setText] = useState(value);
    console.log('text component');

    return (
        <TextStyle x={x} y={y}>
            {isEditable ? ( <ContentEditable
                html={value} // innerHTML of the editable div
                disabled={false} // use true to disable edition
                //onChange={this.handleChange} // handle innerHTML change
            />) :
                <span dangerouslySetInnerHTML={{ __html: value }} />
            }
        </TextStyle>
    )
};