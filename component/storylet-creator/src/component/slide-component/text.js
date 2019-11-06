import React from 'react'

import ContentEditable from "react-contenteditable";

import TextStyle from '../../style/text-style'


export default function Text({isEditable, x, y, value, onClick})
{
    //const [text, setText] = useState(value);
    console.log('text component');

    return (
        <>
            {isEditable ? (
                    <ContentEditable style={{position:'absolute', top:y+'%', left:x+'%'}}
                        html={value} // innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        // onChange={this.handleChange} // handle innerHTML change
                    />
                ) :
                <div style={{position:'absolute', top:y, left:x}} className='moveable' dangerouslySetInnerHTML={{ __html: value }} />
            }
        </>
    )
};