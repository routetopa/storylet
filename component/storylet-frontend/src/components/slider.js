import React, {useContext, useEffect, useState, useReducer} from 'react'
import './style/slider.css';

import {MainContext} from "../context/main-context"

import Storylet from './storylet'
import SearchInput from './search-input'
import Pagination from './pagination'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

export default function Slider({storyletsList, storyletClickHandler, searchHandler})
{
    const mainContext = useContext(MainContext);

    const [winSize, setWinSize] = useState({height: window.innerHeight, width: window.innerWidth});
    const [pageNumber, setPageNumber] = useState(0);
    const [storylets, setStorylets] = useState([]);

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
        let storylet_per_page = Math.floor(winSize.width * 0.8 / mainContext.previewWidth);
        let start = ((pagination - 1) * storylet_per_page);
        let end   =  Math.min(start + storylet_per_page, storyletsList.length);
        let page_number = Math.ceil(storyletsList.length / storylet_per_page);
        let storylets = [];

        for(let i=start; i<end; i++)
            storylets.push(<Storylet
                key={i}
                storyletClickHandler={(evt) => storyletClickHandler(evt, i)}
                previewWidth={mainContext.previewWidth}
                storylet={storyletsList[i]}
            />);

        setStorylets(storylets);
        setPageNumber(page_number);
    }, [storyletsList, winSize, pagination]);

    return (
        <>
            <div className="slider">
                {storylets}
            </div>

            <SearchInput searchHandler={searchHandler} className="search" />
            <Pagination currentPage={pagination} pageNumber={pageNumber} className="pagination"> </Pagination>
            <FontAwesomeIcon icon={faChevronLeft} disabled={pagination === 1} onClick={() => dispatchPagination('prev')} className="arrow-left" />
            <FontAwesomeIcon icon={faChevronRight} disabled={pagination + 1 > pageNumber} onClick={() => dispatchPagination('next')} className="arrow-right" />
        </>
    )

};