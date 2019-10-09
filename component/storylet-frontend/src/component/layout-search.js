import React from 'react'
import SearchStyle from '../style/layout-search-style'

export default function LayoutSearch({searchHandler})
{
    return (
        <SearchStyle>
            <input onChange={searchHandler} />
        </SearchStyle>
    )
};