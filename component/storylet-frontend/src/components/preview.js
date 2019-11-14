import React from 'react'
import './style/preview.css';

export default function Preview({selectedLayout, createCallback})
{
    return (
        selectedLayout ?
            <div className="container">
                <div className="d_left">
                    <img src={selectedLayout.src} />
                </div>
                <div className="d_right">
                    <div className="name">{selectedLayout.name}</div>
                    <div className="description">{selectedLayout.description}</div>
                    {selectedLayout.name ?
                        <div className="button" onClick={createCallback}>CREA!</div> :
                        <div className="button disabled">CREA!</div>
                    }
                </div>
            </div>
         :
            <div className="container" />
    )
};