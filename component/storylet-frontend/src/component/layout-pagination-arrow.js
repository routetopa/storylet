import React from 'react'
import PaginationArrowStyle from '../style/layout-pagination-arrow-style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function LayoutPaginationArrow({onArrowClick, pageNumber, currentPage})
{
    return (
        <PaginationArrowStyle>
            <button class="prev" disabled={currentPage === 1} onClick={() => onArrowClick('prev')}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button class="next" disabled={currentPage + 1 > pageNumber} onClick={() => onArrowClick('next')}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </PaginationArrowStyle>
    )
};