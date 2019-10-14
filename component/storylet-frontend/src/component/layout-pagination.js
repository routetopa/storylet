import React from 'react'
import PaginationStyle from '../style/layout-pagination-style'

export default function LayoutPagination({currentPage, pageNumber})
{
    return (
        <PaginationStyle>
            <span>Pagina {currentPage} di {pageNumber}</span>
        </PaginationStyle>
    )
};