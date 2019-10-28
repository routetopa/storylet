import React from 'react'

export default function draggableHOC(BaseComponent)
{
    return function (props)
    {
        return (
            <div style={{border: '1px solid black'}}>
                <BaseComponent {...props} />
            </div>
        )
    }
}