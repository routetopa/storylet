import React from 'react'
import PaginationArrowStyle from '../style/layout-pagination-arrow-style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function LayoutPaginationArrow({onArrowClick, pageNumber, currentPage})
{
    return (
        <PaginationArrowStyle>
            <button className="prev" disabled={currentPage === 1} onClick={() => onArrowClick('prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button className="next" disabled={currentPage + 1 > pageNumber} onClick={() => onArrowClick('next')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </PaginationArrowStyle>
    )
};