import React from 'react'
import PaginationArrowStyle from '../style/layout-pagination-arrow-style'

export default function LayoutPaginationArrow({onArrowClick, pageNumber, currentPage})
{
    return (
        <PaginationArrowStyle>
            <button disabled={currentPage === 1} onClick={() => onArrowClick('prev')}>PREV</button>
            <button disabled={currentPage + 1 > pageNumber} onClick={() => onArrowClick('next')}>NEXT</button>
        </PaginationArrowStyle>
    )
};