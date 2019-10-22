import React from 'react'
import './style/search-input.css';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function SearchInput({searchHandler, className})
{
    return (
        <div className={className}>
            <input onChange={searchHandler} className="search-input" placeholder="Search..." />
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
        </div>
    )
};