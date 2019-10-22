import React from 'react'
import './style/pagination.css';

export default function Pagination({currentPage, pageNumber, className})
{
    return (
        <div className={className}>{currentPage} / {pageNumber}</div>
    )
};