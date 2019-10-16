import React from 'react'

export default function SlideContainer()
{
    const say_hello = function () {
      return '<div></div>';
    };

    return (
        <>
        {(() => say_hello())()}
        <h1>SlideContainer</h1>
        </>
    )
};