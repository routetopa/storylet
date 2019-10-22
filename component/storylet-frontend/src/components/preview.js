import React from 'react'
import './style/preview.css';

export default function Preview({selectedLayout})
{
    return (
        <div className="container">
            <div className="d_left">
                <img src={selectedLayout.src} />
            </div>
            <div className="d_right">
                <div className="name">{selectedLayout.name}</div>
                <div className="description">{selectedLayout.description}</div>
                <div className="button">CREA!</div>
            </div>
        </div>
    )
};