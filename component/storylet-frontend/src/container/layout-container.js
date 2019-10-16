import React, {useContext, useEffect, useState, useReducer} from 'react'
import LayoutContainerStyle from '../style/layout-container-style'
import LayoutStorylet from '../component/layout-storylet'
import LayoutSearch from '../component/layout-search'
import LayoutPagination from '../component/layout-pagination'
import LayoutPaginationArrow from '../component/layout-pagination-arrow'

import {MainContext} from "../context/main-context"

export default function LayoutContainer({layouts, searchHandler, layoutClickHandler})
{
    const mainContext = useContext(MainContext);

    const [winSize, setWinSize] = useState({height: window.innerHeight, width: window.innerWidth});
    const [pageNumber, setPageNumber] = useState(0);
    const [components, setComponents] = useState([]);

    const [pagination, dispatchPagination] = useReducer((state, action) => {
        switch (action) {
            case 'next':
                return ++state;
            case 'prev':
                return --state;
            default:
                throw new Error('Unexpected action');
        }
    }, 1);

    useEffect(() =>
    {
        const handleResize = () => {
            setWinSize({height: window.innerHeight, width: window.innerWidth});
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() =>
    {
        let layout_per_page = Math.floor(winSize.width * mainContext.layoutContainerSpace / mainContext.layoutWidth);
        let start = ((pagination - 1) * layout_per_page);
        let end   =  Math.min(start + layout_per_page, layouts.length);
        let page_number = Math.ceil(layouts.length / layout_per_page);
        let components = [];

        for(let i=start; i<end; i++)
            components.push(<LayoutStorylet
                key={i}
                layoutClickHandler={(evt) => layoutClickHandler(evt, i)}
                l_width={mainContext.layoutWidth}
                layout={layouts[i]}
            />);

        setComponents(components);
        setPageNumber(page_number);
    }, [layouts, winSize, pagination]);

    return (
        <LayoutContainerStyle layoutContainerSpace={mainContext.layoutContainerSpace}>
            <LayoutSearch searchHandler={searchHandler}/>
            {components}
            <LayoutPagination currentPage={pagination} pageNumber={pageNumber}/>
            <LayoutPaginationArrow onArrowClick={dispatchPagination} pageNumber={pageNumber} currentPage={pagination}/>
        </LayoutContainerStyle>
    )

};